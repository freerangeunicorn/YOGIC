from flask import Flask, request, Response
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
#from flask_restful import Resource, Api
import json

#init app
app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://Mai:Codeordie2019@localhost/yogic"
db = SQLAlchemy(app)
migrate = Migrate(app, db)
manager = Manager(app)

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
    email = db.Column(db.String(320))
    password_hash = db.Column(db.String(256), nullable=False)


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
    Price = db.Column(db.Float)
    time = db.Column(db.DateTime(timezone=True), default=db.func.now())
    style = db.Column(db.String(240))
    description = db.Column(db.Text())
    student_id = db.Column(db.Integer, db.ForeignKey('student.id'),
        nullable=False)
    review_id = db.Column(db.Integer, db.ForeignKey('review.id'),
        nullable=False)
class Review(db.Model):
    __tablename__= 'review'
    id = db.Column(db.Integer, primary_key=True)
    review_title = db.Column(db.String(120))
    rating = db.Column(db.Text())
    yogaclass = db.relationship('Yogaclass', backref='review', lazy=True)  


db.create_all() 

@app.route('/api/teacher', methods=['GET'])
def get_teacher():
    print(type('teacher'))
    teacher = Teacher.query.all()
    #print(type(teacher))
    list_teacher = [] 
    for _teacher in teacher:
        d_teacher = dict()
        d_teacher.update({'first_name': _teacher.first_name})
        d_teacher.update({'last_name': _teacher.last_name})
        list_teacher.append(d_teacher)
        #print(type(_teacher))
    print(json.dumps(list_teacher))
    return Response(json.dumps(list_teacher), mimetype='application/json')


#sign up form in react will call this method
@app.route('/api/teacher', methods=['POST'])
def create_teacher():
    print('create teacher')
    data = request.json
    new_teacher = Teacher(
        first_name = data['first_name'],
        last_name = data['last_name'],
        email = data['email'],
        years_experience =  data['years_experience'],
        default_timezone =  data['default_timezone'],
        password_hash = set_password(data['password']),

    )

@app.route('/login/teacher', methods=['POST'])
def login_teacher():
    data = request.json
    print (data)
    email = data['email']
    password = data ['password']
    teacher = Teacher.query.filter_by(email=email).first()
    if not teacher:
        return json.dumps('wrong password')
    password_hash = teacher.password_hash
    print (check_password(password_hash, email + password))
    if check_password(password_hash, email + password):
        return json.dumps('ok')
    else:
        return json.dumps('wrong password')


@app.route('/api/student', methods=['POST'])
def create_student():
    data = request.json
    new_student = Student(
        first_name = data['first_name'],
        last_name = data['last_name'],
        email = data['email']  ##add the remaining columns
    )
    db.session.add(new_student)
    db.session.commit()

@app.route('/api/student', methods=['GET'])
def get_student():
    student = Student.query.all()
    #print(type(teacher))
    list_student = [] 
    for _student in student:
        d_student = dict()
        d_student.update({'first_name': _student.first_name})
        d_student.update({'last_name': _student.last_name})
        list_student.append(d_student)
    return json.dumps(list_student)


@app.route('/login/student', methods=['POST'])
def login_student():
    
        
    #print(type(_teacher))
    #return json.dumps(list_teacher)
    #print(new_teacher)
    return json.dumps('ok')
# call when create teacher send down email + password return value will be stored in the database
def set_password( password):
    password_hash = generate_password_hash(password)
    return password_hash 

    
def check_password(password_hash, password):
    return check_password_hash(password_hash, password)

@app.route('/api/yogaclass', methods=['POST'])
def create_yogaclass():
    data = request.json
    new_class = Yogaclass(
        title = data['title'],
        level = data['level'],
        price = data['price'],
        style = data['style'],
        description = data['description']
    )
    db.session.add(new_class)
    db.session.commit()

@app.route('/api/yogaclass', methods=['GET'])
def get_yogaclass():
    yogaclass = Yogaclass.query.all()
    #print(type(yogaclass))
    list_yogaclass = [] 
    for _yogaclass in yogaclass:
        d_yogaclass = dict()
        d_yogaclass.update({'title': _yogaclass.title})
        d_yogaclass.update({'level': _yogaclass.level})
        d_yogaclass.update({'price': _yogaclass.price})
        d_yogaclass.update({'style': _yogaclass.style})
        d_yogaclass.update({'description': _yogaclass.description})
        list_yogaclass.append(d_yogaclass)
    return json.dumps(list_yogaclass) ##route for filter

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
    #print(type(review))
    list_review = [] 
    for _review in review:
        d_review = dict()
        d_review.update({'review_title': _review.review_title})
        d_review.update({'rating': _review.rating})
        list_review.append(d_review)
    return json.dumps(list_review)

   
    


#run server
if __name__ =='__main__':
    manager.run()  
    app.run(debug = True)  