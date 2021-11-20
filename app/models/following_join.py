
from .db import db

class Following_Join(db.Model):
    __tablename__ = "following_joins"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    studio_id = db.Column(db.Integer, nullable=False)
