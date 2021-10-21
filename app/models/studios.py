from ctypes import addressof
from unicodedata import name
from .db import db

class Studio(db.Model):

    __tablename__ = 'studios'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), nullable=False)
    federation_id = db.Column(db.Integer, nullable=False)
    #may change address to have a unique field for each part of the address
    address = db.Column(db.Text, nullable=False)
    phone_contact = db.Column(db.Integer, nullable=False)
    email_contact = db.Column(db.String(30), nullable=False)
    studio_bio = db.Column(db.Text, nullable=False)


    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"),nullable=False)
    
    
    martial_art_id = db.Column(db.Integer, db.ForeignKey("martial_arts.id"), nullable=False)
    martial_art = db.relationship("Martial_Art", back_populates="studio")

    user = db.relationship("User", back_populates="studio")
    
    studio_reviews = db.relationship("Studio_Review", back_populates="studio")
    studio_events = db.relationship("Studio_Event", back_populates="studio")
    studio_photos = db.relationship("Studio_Photos", back_populates="studio")
    studio_schedules = db.relationship("Studio_Schedule", back_populates="studio")
