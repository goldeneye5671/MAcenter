from unicodedata import name
from .db import db

class Martial_Art_Rank(db.Model):
    __tablename__ = "martial_art_ranks"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(15))
    rank_number = db.Column(db.Integer, nullable=False)
