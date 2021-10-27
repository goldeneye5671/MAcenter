from .db import db

class Studio_Schedule(db.Model):
    __tablename__ = "studio_schedules"

    id = db.Column(db.Integer, primary_key=True)
    schedule_name = db.Column(db.String(256), nullable=False)
    schedule_description = db.Column(db.Text, nullable=False)
    start_time = db.Column(db.String(5), nullable=False)
    end_time = db.Column(db.String(5), nullable=False)
    week_day = db.Column(db.String(9), nullable=False)

    studio_id = db.Column(db.Integer, db.ForeignKey("studios.id"), nullable=False)
    studio = db.relationship("Studio", back_populates="studio_schedules")

    def to_dict(self):
        return {
            'id': self.id,
            'schedule_name': self.schedule_name,
            'schedule_description': self.schedule_description,
            'studio_id': self.studio_id,
            'week_day': self.week_day,
            'start_time': self.start_time,
            'end_time': self.end_time
        }
