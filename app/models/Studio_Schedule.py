from .db import db

class Studio_Schedule(db.Model):
    __tablename__ = "studio_schedules"

    id = db.Column(db.Integer, primary_key=True)
    class_name = db.Column(db.String(256), nullable=False)
    class_day = db.Column(db.String(9), nullable=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=False)

    studio_id = db.Column(db.Integer, db.ForeignKey("studios.id"), nullable=False)
    studio = db.relationship("Studio", back_populates="studio_schedules")

    def to_dict(self):
        return {
            'id': self.id,
            'class_name': self.class_name,
            'class_day': self.class_day,
            'start_time': self.start_time,
            'end_time': self.end_time,
        }
