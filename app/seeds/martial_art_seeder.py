from app.models import db, Martial_Art
from datetime import datetime


def seed_martial_arts():
    ma1 = Martial_Art(
        name="Soo Bahk Doo",
        creation_date=datetime.now(),
        art_type="Self Defense",
        bio="This is a test martial art. Soo Bahk Doo is Tang Soo Doo",
        difficulty_level=4, 
        region="Southern Korea"
    )

    db.session.add(ma1)
    db.session.commit()


def undo_martial_arts():
    db.session.execute('TRUNCATE martail_arts RESTART IDENTITY CASCADE;')
    db.session.commit()
