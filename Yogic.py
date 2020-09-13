from flask import Flask, request, Response, jsonify
from mailjet_rest import Client
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from flask_jwt_extended import (
JWTManager, jwt_required, create_access_token,
get_jwt_identity
)
import json
import os
import logging
from dotenv import load_dotenv
load_dotenv()
from datetime import time, datetime, timedelta


logging.basicConfig(level=logging.INFO)
logging.info('This will get logged')


def authenticate(user, auth):
    if auth:
        return user

def identity():
    pass

#init app

app = Flask(__name__, static_folder='./build', static_url_path='/')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = os.getenv('SQLALCHEMY_TRACK_MODIFICATIONS')
logging.info(os.getenv('SQLALCHEMY_TRACK_MODIFICATIONS'))
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')

db = SQLAlchemy(app)
migrate = Migrate(app, db)
manager = Manager(app)
#setup the JWT Manager

app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
expires = timedelta(days=1)
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = expires
jwt = JWTManager(app)
manager.add_command('db', MigrateCommand)
#api = Api(app)

yogastyle_teacher = db.Table('yogastyle_teacher',
    db.Column('teacher_id', db.Integer, db.ForeignKey('teacher.id'),primary_key=True),
    db.Column('yogastyle_id', db.Integer, db.ForeignKey('yogastyle.id'),primary_key=True),
)

class Teacher(db.Model):
    __tablename__ = 'teacher'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80))
    last_name = db.Column(db.String(80))
    years_experience = db.Column(db.Integer)
    default_timezone = db.Column(db.String(120))
    email = db.Column(db.String(320), index=True, unique=True)
    password_hash = db.Column(db.String(256), nullable=False)
    yogaclass = db.relationship('Yogaclass', backref='teacher', lazy=True)


    yogastyle_id = db.relationship(
        'Yogastyle',
        secondary= yogastyle_teacher,  lazy='subquery',
        backref=db.backref('Teachers', lazy=True))


class Yogastyle(db.Model):
    __tablename__ = 'yogastyle'
    id = db.Column(db.Integer, primary_key=True)
    style = db.Column (db.String(40))
    description = db.Column(db.Text())

class Student(db.Model):
    __tablename__ = 'student'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120))
    last_name = db.Column(db.String(120))
    email = db.Column(db.String(320),index=True, unique=True)
    password_hash = db.Column(db.String(256), nullable=False)
    yogaclass = db.relationship('Yogaclass', backref='student', lazy=True)

class Yogaclass(db.Model):
    __tablename__ = 'yogaclass'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120))
    level = db.Column(db.String(120))
    price = db.Column(db.Float)
    time = db.Column(db.Time, nullable=False)
    date = db.Column(db.Date, nullable=False)
    style = db.Column(db.String(240))
    description = db.Column(db.Text())
    duration = db.Column (db.Integer)
    student_id = db.Column(db.Integer, db.ForeignKey('student.id'),
        nullable=True)
    review_id = db.Column(db.Integer, db.ForeignKey('review.id'),
        nullable=True) 
    teacher_id = db.Column(db.Integer, db.ForeignKey('teacher.id'),
        nullable=False) 
   
        
class Review(db.Model):
    __tablename__= 'review'
    id = db.Column(db.Integer, primary_key=True)
    review_title = db.Column(db.String(120))
    rating = db.Column(db.Text())
    yogaclass = db.relationship('Yogaclass', backref='review', lazy=True)


db.create_all()

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/teacher', methods=['GET'])
@jwt_required
def get_teacher():
    teacher_id=get_jwt_identity()
    logging.info('teacher id',teacher_id)
    teacher = Teacher.query.filter_by(id=teacher_id['teacher']) #get the key from the get_jwt_identity
    list_teacher = []
    for _teacher in teacher:
        d_teacher = dict()
        d_teacher.update({'first_name': _teacher.first_name})
        d_teacher.update({'last_name': _teacher.last_name})
        d_teacher.update({'default_timezone': _teacher.default_timezone})
        d_teacher.update({'years_experience': _teacher.years_experience})
        d_teacher.update({'id': _teacher.id})
        d_teacher.update({'email': _teacher.email})
        list_teacher.append(d_teacher)
        
    logging.info(json.dumps(list_teacher))
    return Response(json.dumps(list_teacher), mimetype='application/json')


#sign up form in react will call this method
@app.route('/api/teacher', methods=['POST'])
def create_teacher():
    data = request.json
    new_teacher = Teacher(
        first_name = data.get('first_name',''),
        last_name = data.get('last_name',''),
        email = data.get('email','').lower(),
        years_experience =  int(data.get('years_experience',0)),
        default_timezone =  data.get('default_timezone',''),
        password_hash = set_password(data.get('email','').lower() + data.get('password', '')),
    )
    db.session.add(new_teacher)
    try :
        db.session.commit()
        teacher_id = (new_teacher.id)
        response = Response(json.dumps({'id':teacher_id}))
        logging.info('Teacher account created')
    except:
        response = Response(json.dumps({'error': 'Something went wrong,try again later'}))
    response.headers['Content-type'] = 'application/json'
    return response



@app.route('/api/login/teacher', methods=['POST'])
def login_teacher():
    email = request.json.get('email','').lower()
    password = request.json.get('password',None)
    if not email or not password:
        return jsonify({"msg": "Email or password invalid"}), 400


    user = Teacher.query.filter_by(email=email).first()
    if check_password(user.password_hash, email + password):
        response = Response(json.dumps({'id':user.id}))
        access_token = create_access_token(identity={'teacher':user.id})
        response = Response(json.dumps({'access_token':access_token}))
        response.headers['Content-type'] = 'application/json'
        return response
    else:
        response=Response(json.dumps('wrong email or password'))
        response.headers['Content-type'] = 'application/json'
        return response



@app.route('/api/teacher', methods=['PUT'])
@jwt_required
def edit_teacher():
    claim = get_jwt_identity()
    data = request.json
    teacher_id = claim.get('teacher')
    logging.info(data, data.get('id', ''))
    teacher = Teacher.query.filter_by(id=teacher_id) 
    for _teacher in teacher:
        _teacher.first_name=data.get('first_name')
        _teacher.last_name=data.get('last_name')
        _teacher.years_experience=data.get('years_experience')
        _teacher.email=data.get('email')
    db.session.commit()
    return jsonify({ }), 200

    
#signup form in React will call this method
@app.route('/api/student', methods=['POST'])
def create_student():
    data = request.json
    new_student = Student(
        first_name = data.get('first_name',''),
        last_name = data.get('last_name', ''),
        email = data.get('email', ''),
        password_hash = set_password(data.get('email','').lower() + data.get('password', '')),
    )
    db.session.add(new_student)
    db.session.commit()
    student_id = (new_student.id)
    return Response(json.dumps({'id':student_id}), mimetype='application/json')

@app.route('/api/student', methods=['GET'])
@jwt_required
def get_student():
    claim = get_jwt_identity()
    student_id = claim.get('student')
    logging.info(student_id)
    student = Student.query.filter_by(id=student_id)

    list_student = []
    for _student in student:
        d_student = dict()
        d_student.update({'id':_student.id})
        d_student.update({'first_name': _student.first_name})
        d_student.update({'last_name': _student.last_name})
        list_student.append(d_student)
    return json.dumps(list_student)

@app.route('/api/bookclass', methods=['PUT'])
@jwt_required
def book():
    MAILJET_KEY = os.getenv('MAILJET_KEY')
    API_SECRET = os.getenv('API_SECRET')
    mailjet = Client(auth=( MAILJET_KEY , API_SECRET), version='v3.1')
    claim = get_jwt_identity()
    data = request.json
    student_id = claim.get('student')
    logging.info(data, data.get('id', ''))
    student = Student.query.filter_by(id=student_id)
    yoga_class = Yogaclass.query.filter_by(id=data.get('id')).first()
    yoga_class.student_id = student_id
    
    
    data = {
    'Messages': [
        {
        "From": {
        "Email": " " + yoga_class.teacher_id.email,
        "Name": "Mai"
        },
        "To": [
        {
        "Email":" " + student.email, #pass in the student email here
        "Name": " "  + student.first_name,              #pass in the student name here
        }
        ],
        "Subject": "Class booked for " + yoga_class.title,
        "TextPart": "Namaste",
        "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
        "CustomID": "AppGettingStartedTest"
        }
    ]
    }
    result = mailjet.send.create(data=data)
    db.session.commit()
    return json.dumps({'confirmation': 'true'})



@app.route('/api/login/student', methods=['POST'])
def login_student():
    email = request.json.get('email','').lower()
    password = request.json.get('password',None)
    if not email or not password:
        return jsonify({"msg": "Email or password invalid"}), 400


    user = Student.query.filter_by(email=email).first()
    if check_password(user.password_hash, email + password):
        response = Response(json.dumps({'id':user.id}))  
        access_token = create_access_token(identity={'student':user.id})
        response = Response(json.dumps({'access_token':access_token}))
        response.headers['Content-type'] = 'application/json'
        return response
    else:
        response = Response(json.dumps('wrong email or password'))
        response.headers['Content-type'] = 'application/json'
        return response

def set_password( password):
    password_hash = generate_password_hash(password)
    return password_hash

def check_password(password_hash, password):
    return check_password_hash(password_hash, password)

@app.route('/api/yogaclass', methods=['POST'])
@jwt_required # authorize teacher and student, check the dictionary and then authorize
def create_yogaclass():
    claim = get_jwt_identity()
    teacher_id = claim.get('teacher')
    if not teacher_id:
        return Response ('You are not authorized'), 401
    data = request.json
    start = data.get('time')[0]
    end = data.get('time')[1]
    token_start = start.split(':')
    start_time = timedelta(hours=int(token_start[0]),minutes=int(token_start[1]))
    token_end = end.split(':')
    end_time = timedelta(hours=int(token_end[0]),minutes=int(token_end[1]))
    duration = end_time - start_time
    length = int(duration.total_seconds()/60) 
    display_time = time(int(token_start[0]),int(token_end[1]))

    logging.info(teacher_id)
    new_class = Yogaclass(
        title = data.get('title'),
        level = data.get('level'),
        price = data.get('price'),
        style = data.get('style'),
        date = data.get('date'),
        time = display_time,
        duration = length,
        description = data.get('description'),
        teacher_id = teacher_id,
    )
    db.session.add(new_class)
    try :
        db.session.commit()
        yogaclass_id = (new_class.id)
        response = Response(json.dumps({'id':yogaclass_id}))
    except Exception as error:
        logging.info(error)
        response = Response(json.dumps({'error': 'Something went wrong,try again later'}))
    response.headers['Content-type'] = 'application/json'
    logging.info(response)
    return response 
   

@app.route('/api/yogaclass', methods=['GET'])
@jwt_required
def get_yogaclass():
    token_data = get_jwt_identity()
    qry = request.args.get('filter')
    tokens = None
    if qry:
        tokens = qry.split(',')
   
    if 'student' in token_data:
        logging.info(qry)
        date = None
        time = None
        style = None
        if tokens != None: 
            for token in tokens:
                # only 3 fields and = operators are supported
                parts = token.split('^')
                field = parts[0] 
                value = parts[2]
                if field == 'date':
                    date = datetime.strptime(value, '%Y-%m-%d') #which format is it parsing
                elif field == 'time':
                    time = value
                elif field == 'style':
                    style = value
        logging.info('see what style is', type(style))
        yogaclass = Yogaclass.query.join(Teacher, Teacher.id==Yogaclass.teacher_id,isouter=True).add_columns(Teacher.first_name,Teacher.last_name, Teacher.years_experience, Yogaclass.id, Yogaclass.title, Yogaclass.level, Yogaclass.price, Yogaclass.style, Yogaclass.date, Yogaclass.time, Yogaclass.duration, Yogaclass.description, Yogaclass.student_id)
        logging.info('date = {} time = {} style = {}'.format(date, time, style))
        if style != None:
            yogaclass = yogaclass.filter(Yogaclass.style == style)
        if date != None:
            yogaclass = yogaclass.filter(Yogaclass.date == date)
        if  time != None:
            yogaclass = yogaclass.filter(Yogaclass.time == time)
       

    else:
        teacher_id = token_data.get('teacher')
        yogaclass = Yogaclass.query.join(Teacher, Teacher.id==Yogaclass.teacher_id,isouter=True).add_columns(Teacher.first_name,Teacher.last_name, Teacher.years_experience, Yogaclass.id, Yogaclass.title, Yogaclass.level, Yogaclass.price, Yogaclass.style, Yogaclass.date, Yogaclass.time, Yogaclass.duration, Yogaclass.description, Yogaclass.student_id).filter(Teacher.id == Yogaclass.teacher_id).filter(Teacher.id == teacher_id)
    logging.info(yogaclass)

    list_yogaclass = [] #yoga_classes_list
    
    for _yogaclass in yogaclass: #yogaclass in yogaclasses
        d_yogaclass = dict() #dont use dict d_yogaclass ={'title'}
        d_yogaclass.update({'title': _yogaclass.title})
        d_yogaclass.update({'price': _yogaclass.price})
        d_yogaclass.update({'style': _yogaclass.style})
        d_yogaclass.update({'date': _yogaclass.date.isoformat()})
        d_yogaclass.update({'time': str(_yogaclass.time)}) 
        d_yogaclass.update({'duration': _yogaclass.duration})
        d_yogaclass.update({'description': _yogaclass.description})
        d_yogaclass.update({'id':_yogaclass.id})
        d_yogaclass.update({'first_name': _yogaclass.first_name})
        d_yogaclass.update({'last_name': _yogaclass.last_name})
        d_yogaclass.update({'years_experience': _yogaclass.years_experience})
        d_yogaclass.update({'level': _yogaclass.level})
        d_yogaclass.update({'student_id':_yogaclass.student_id})


        list_yogaclass.append(d_yogaclass)
    return json.dumps(list_yogaclass) #route for filter and teacher profile
    


@app.route('/api/review', methods=['POST'])
def create_review():
    data = request.json
    new_review = Review(
        review_title = data['review_title'],
        rating = data['rating'],
    )
    db.session.add(new_review)
    db.session.commit()


@app.route('/api/review', methods=['GET'])
def get_review(): 
    review = Review.query.all() 
    list_review = []
    for _review in review:
        d_review = dict() #make empty dict and call it d_review
        d_review.update({'review_title': _review.review_title})
        d_review.update({'rating': _review.rating})
        list_review.append(d_review)
    return json.dumps(list_review)
    
#sql joint here
#run server
if __name__ =='__main__':
    manager.run()
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))


    