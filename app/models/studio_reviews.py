from email import contentmanager
from .db import db

class Studio_Review(db.Model):
    __tablename__ = 'studio_reviews'

    id = db.Column(db.Integer, primary_key=True)
    studio_id = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
