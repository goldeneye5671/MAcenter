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
    ma2 = Martial_Art(
        name="Tae Kwan Doo",
        creation_date=datetime.now(),
        art_type="Self Defense",
        bio="This is a test martial art. Tae Quan Doo and Soo Bahk Do share an origin",
        difficulty_level=4, 
        region="Southern Korea"
    )
    ma3 = Martial_Art(
        name="Kong Fu",
        creation_date=datetime.now(),
        art_type="Self Defense",
        bio="This is a test martial art. Kong Fu was made popular by kong fu panda",
        difficulty_level=5, 
        region="China"
    )
    ma4 = Martial_Art(
        name="Krav Maga",
        creation_date=datetime.now(),
        art_type="Self Defense",
        bio="This is a test martial art. Mainly a self defense military art",
        difficulty_level=4, 
        region="Middle East"
    )
    ma5 = Martial_Art(
        name="Karate",
        creation_date=datetime.now(),
        art_type="Self Defense",
        bio="This is a test martial art. Hello from japan",
        difficulty_level=4, 
        region="Japan"
    )

    db.session.add(ma1)
    db.session.add(ma2)
    db.session.add(ma3)
    db.session.add(ma4)
    db.session.add(ma5)
    db.session.commit()


def undo_martial_arts():
    db.session.execute('TRUNCATE martail_arts RESTART IDENTITY CASCADE;')
    db.session.commit()
