from ast import BinOp
from unicodedata import name
from .db import db

#need difficulty level as an int
#need creation date as a timestamp

class Martial_Art(db.Model):
    __tablename__ = "martial_arts"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False)
    art_type = db.Column(db.String(200))
    bio = db.Column(db.Text, nullable=False)
    difficulty_level = db.Column(db.Integer, nullable=False)
    region = db.Column(db.String(50), nullable=False)

    user = db.relationship("User", back_populates="martial_art")
    ranks = db.relationship("Martial_Art_Rank", back_populates="")
    studio = db.relationship("Studio", back_populates="martial_art")
