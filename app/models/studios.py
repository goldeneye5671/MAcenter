from .db import db
from .studio_join import studio_joins

class Studio(db.Model):

    __tablename__ = 'studios'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), nullable=False)
    federation_id = db.Column(db.Integer, nullable=False)
    #may change address to have a unique field for each part of the address
    address = db.Column(db.Text, nullable=False)
    phone_contact = db.Column(db.Integer, nullable=False)
    email_contact = db.Column(db.String(30), nullable=False)
    studio_bio = db.Column(db.Text, nullable=False)


    martial_art_id = db.Column(db.Integer, db.ForeignKey("martial_arts.id"), nullable=False)
    martial_art = db.relationship("Martial_Art", back_populates="studios")
    
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    owner = db.relationship("User", back_populates="owned_studio")

    users = db.relationship("User", secondary=studio_joins, back_populates="studios")


    studio_reviews = db.relationship("Studio_Review", back_populates="studio")
    studio_events = db.relationship("Studio_Event", back_populates="studio")
    studio_photos = db.relationship("Studio_Photo", back_populates="studio")
    studio_schedules = db.relationship("Studio_Schedule", back_populates="studio")


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'studio_bio': self.studio_bio,
            'martial_art': self.martial_art.to_dict(),
            'federation_id': self.federation_id,
            'address': self.address,
            'owner': self.owner.to_dict(),
            'phone_contact': self.phone_contact,
            'email_contact': self.email_contact,
            'studio_events': {event.to_dict()['id']: event.to_dict() for event in self.studio_events},
            'studio_schedule': {schedule.to_dict()['id']: schedule.to_dict() for schedule in self.studio_schedules},
            'studio_photos': {photo.to_dict()['id']: photo.to_dict() for photo in self.studio_photos},
            'studio_reviews': {review.to_dict()['id']: review.to_dict() for review in self.studio_reviews}
        }
