from .db import db

class User_Photo(db.Model):
    __tablename__ = "user_photos"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    photo_url = db.Column(db.Text, nullable=False)

    user = db.relationship("User", back_populates="user_photos")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'photo_url': self.photo_url
        }
