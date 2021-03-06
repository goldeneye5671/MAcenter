from .db import db
from .martial_arts_joins import martial_art_joins

#need difficulty level as an int
#need creation date as a timestamp

class Martial_Art(db.Model):
    __tablename__ = "martial_arts"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False)
    art_type = db.Column(db.String(200))
    bio = db.Column(db.Text, nullable=False)
    difficulty_level = db.Column(db.Integer, nullable=False)
    region = db.Column(db.String(50), nullable=False)

    user = db.relationship("User", secondary=martial_art_joins, back_populates="martial_arts")
    ranks = db.relationship("Martial_Art_Rank", back_populates="martial_art_ranks")
    studios = db.relationship("Studio", back_populates="martial_art")


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'creation_date': self.creation_date,
            'art_type': self.art_type,
            'bio': self.bio,
            'difficulty_level': self.difficulty_level,
            'region': self.region,
            'ranks': [rank.to_dict() for rank in self.ranks],
        }

# def to_dict_search(self):
#     return {
#             'id': self.id,
#             'name': self.name,
#             'creation_date': self.creation_date,
#             'art_type': self.art_type,
#             'bio': self.bio,
#             'difficulty_level': self.difficulty_level,
#             'region': self.region,
#             'ranks': [rank.to_dict() for rank in self.ranks],
#             'studio': {studio.id: studio for studio in self.studios.to_dict_id()}
#         }
