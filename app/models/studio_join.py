from .db import db

studio_joins = db.Table(
    'studio_joins',
    db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("studio_id", db.Integer, db.ForeignKey("studios.id"), primary_key=True)
)
