from .db import db

martial_art_joins = db.Table(
    "martial_art_joins",
    db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("martial_art_id", db.Integer, db.ForeignKey("martial_arts.id"), primary_key=True)
)
