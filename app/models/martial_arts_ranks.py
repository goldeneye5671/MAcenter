from .db import db

class Martial_Art_Rank(db.Model):
    __tablename__ = "martial_art_ranks"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(15))
    rank_number = db.Column(db.Integer, nullable=False)

    martial_art_rank = db.Column(db.Integer, db.ForeignKey("martial_arts.id"))
    martial_art_ranks = db.relationship("Martial_Art", back_populates="ranks")


    user = db.relationship("User", back_populates="rank")


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'rank_number': self.rank_number
        }
