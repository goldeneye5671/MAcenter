from turtle import title
from .db import db


class Studio_Events(db.Model):
    id = db.Column(db.Integer(primary_key=True))
    studio_id = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(256), nullable=False)
    description = db.Column(db.Text, nullable=False)
    event_date = db.Column(db.Timestamp, nullable=False)
    location = db.Column(db.Text, nullable=False)
