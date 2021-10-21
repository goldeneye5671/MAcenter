from .db import db

class Studio_Photos(db.Model):
    __tablename__ = 'studio_photos'
    id = db.Column(db.Integer, primary_key=True)
    studio_id = db.Column(db.Integer, nullable=False)
    photo_url = db.Column(db.Text, nullable=False)
