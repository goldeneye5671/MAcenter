from ctypes import addressof
from unicodedata import name
from .db import db

class Studio(db.Model):

    __tablename__ = 'studios'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), nullable=False)
    martial_art_id = db.Column(db.Integer, nullable=False)
    federation_id = db.Column(db.Integer, nullable=False)
    #may change address to have a unique field for each part of the address
    address = db.Column(db.Text, nullable=False)
    owner_id = db.Column(db.Integer, nullable=False)
    phone_contact = db.Column(db.Integer, nullable=False)
    email_contact = db.Column(db.String(30), nullable=False)
    studio_bio = db.Column(db.Text, nullable=False)
