from .db import db


class Studio_Event(db.Model):
    __tablename__ = "studio_events"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(256), nullable=False)
    description = db.Column(db.Text, nullable=False)
    date = db.Column(db.String, nullable=False)
    start_time = db.Column(db.String(5))
    end_time = db.Column(db.String(5))
    location = db.Column(db.Text, nullable=False)


    studio_id = db.Column(db.Integer, db.ForeignKey("studios.id"), nullable=False)
    studio = db.relationship("Studio", back_populates="studio_events")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'event_date': self.date,
            'start_time': self.start_time,
            'end_time': self.end_time,
            'location': self.location,
            'studio_id': self.studio_id
        }
