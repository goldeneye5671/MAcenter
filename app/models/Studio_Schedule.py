from .db import db

class Studio_Schedule(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    studio_id = db.Column(db.Integer, nullable=False)
    class_name = db.Column(db.String(256), nullable=False)
    class_day = db.Column(db.String(9), nullable=False)
    start_time = db.Column(db.Timestamp, nullable=False)
    end_time = db.Column(db.Timestamp, nullable=False)
