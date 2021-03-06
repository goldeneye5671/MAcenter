from .db import db

class Studio_Review(db.Model):
    __tablename__ = 'studio_reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"),nullable=False)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    studio_id = db.Column(db.Integer, db.ForeignKey("studios.id"), nullable=False)
    studio = db.relationship("Studio", back_populates="studio_reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'studio_id': self.studio_id,
            'user_id': self.user_id,
            'title': self.title,
            'content': self.content,
            'rating': self.rating
        }
