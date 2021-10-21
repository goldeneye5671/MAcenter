from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    
    
    rank_id = db.Column(db.Integer, db.ForeignKey("martial_art_ranks.id"),nullable=False)
    rank = db.relationship("Martial_Art_Rank", back_populates="user")
    

    martial_art_id = db.Column(db.Integer, db.ForeignKey("martial_arts.id"), nullable=False)
    martial_art = db.relationship("Martial_Art", back_populates="user")


    studio_id = db.Column(db.Integer, db.ForeignKey("studios.id"), nullable=False)
    studio = db.relationship("Studio", back_populates="user")

    user_photos = db.relationship("user_photos", back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
