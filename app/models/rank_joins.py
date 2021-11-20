from .db import db

rank_joins = db.Table(
    "rank_joins",
    db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("rank_id", db.Integer, db.ForeignKey("martial_art_ranks.id"), primary_key=True)
)
