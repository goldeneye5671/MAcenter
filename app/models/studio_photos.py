from .db import db

class Studio_Photo(db.Model):
    __tablename__ = 'studio_photos'
    id = db.Column(db.Integer, primary_key=True)
    photo_url = db.Column(db.Text, nullable=False)


    studio_id = db.Column(db.Integer, db.ForeignKey("studios.id"), nullable=False)
    studio = db.relationship("Studio", back_populates="studio_photos")
    
    def to_dict(self):
        return {
            'id': self.id,
            'studio_id': self.studio_id,
            'photo_url': self.photo_url
        }
