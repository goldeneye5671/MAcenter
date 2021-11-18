from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .studio_join import studio_joins


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)

    first_name = db.Column(db.String(50), nullable=False)

    last_name = db.Column(db.String(50), nullable=False)
    
    email = db.Column(db.String(255), nullable=False, unique=True)
    
    hashed_password = db.Column(db.String(255), nullable=False)
    
    bio = db.Column(db.Text, nullable=False)
    
    rank_id = db.Column(db.Integer, db.ForeignKey("martial_art_ranks.id"),nullable=False)
    rank = db.relationship("Martial_Art_Rank", back_populates="user")
    

    martial_art_id = db.Column(db.Integer, db.ForeignKey("martial_arts.id"), nullable=False)
    martial_art = db.relationship("Martial_Art", back_populates="user")

    owned_studio = db.relationship("Studio", back_populates="owner")

    studios = db.relationship("Studio", secondary=studio_joins, back_populates="users")



    user_photos = db.relationship("User_Photo", back_populates="user")


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict_with_studios(self):
        return  {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'bio': self.bio,
            'martial_art': {'id': self.martial_art.to_dict()['id'], 'name': self.martial_art.to_dict()['name']},
            'ranks': self.rank.to_dict(),
            'studio_names': {studio.id : studio.to_dict() for studio in self.studios} ,
            'photos': [photo.user_photos.to_dict() for photo in self.user_photos]
        }

    def to_dict_without_studio(self):
        return  {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'bio': self.bio,
            'martial_art': {'id': self.martial_art.to_dict()['id'], 'name': self.martial_art.to_dict()['name']},
            'ranks': self.rank.to_dict(),
            # 'studio_names': {studio.id : studio.to_dict() for studio in self.studios} ,
            'photos': [photo.user_photos.to_dict() for photo in self.user_photos]
        }
        
