from .db import db

class User_Photo(db.Model):
    __tablename__ = "user_photos"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    photo_url = db.Column(db.Text, nullable=False)
