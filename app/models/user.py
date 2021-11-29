from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .studio_join import studio_joins
from .martial_arts_joins import martial_art_joins
from .rank_joins import rank_joins


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)

    first_name = db.Column(db.String(50), nullable=False)

    last_name = db.Column(db.String(50), nullable=False)
    
    email = db.Column(db.String(255), nullable=False, unique=True)
    
    hashed_password = db.Column(db.String(255), nullable=False)
    
    bio = db.Column(db.Text, nullable=False)
    
    ranks = db.relationship("Martial_Art_Rank", secondary=rank_joins, back_populates="user")

    martial_arts = db.relationship("Martial_Art", secondary=martial_art_joins, back_populates="user")

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
            'martial_arts': {martial_art.id: martial_art.to_dict() for martial_art in self.martial_arts},
            'ranks': {rank.id: rank.to_dict() for rank in self.ranks},
            'followed_studios': {studio.id : studio.to_dict() for studio in self.studios},
            'photos': [photo.user_photos.to_dict() for photo in self.user_photos]
        }

    def to_dict_without_studio(self):
        return  {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'bio': self.bio,
            'martial_arts': {martial_art.id: martial_art.to_dict() for martial_art in self.martial_arts},
            'ranks': {rank.id: rank.to_dict() for rank in self.ranks},
            # 'studio_names': {studio.id : studio.to_dict() for studio in self.studios} ,
            'photos': [photo.user_photos.to_dict() for photo in self.user_photos]
        }
        
