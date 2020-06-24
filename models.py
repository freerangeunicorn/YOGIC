
class User(UserMixin, db.Model):
  id = db.Column(db.Integer, primary_key=True)
  first_name = db.Column(db.String(80))
  last_name = db.Column(db.String(80))
  username=db.Column(db.String(80))
  email = db.Column(db.String(120), index=True, unique=True)
  password_hash = db.Column(db.String(40), nullable=False)
  location = db.relationship('Location', backref="user", lazy="dynamic")
  comments = db.relationship('Comments', backref="user", lazy="dynamic")
  posts = db.relationship('Post', backref="user", lazy="dynamic")
  def set_password(self, password):
    self.password_hash = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self.password_hash, password)

(40))
    
    class Student(db.Model):
        __tablename__ = 'student'
    id = db.Column(db.Integer, primary_key=True) 
    first_name = db.Column(db.String(80))
    last_name = db.Column(db.String(80))
    email = db.Column(db.String(320))
    timezone = db.Column(db.String(40))




