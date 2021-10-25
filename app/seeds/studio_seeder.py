from app.models import db, Studio

def seed_studios():
    demo_studio = Studio(
        name="DeJohnette Martial Arts Academy",
        federation_id=123456,
        address="1234 N. Santa Fe Avenue, Vista, CA 92083",
        phone_contact=610,
        email_contact="test@test.net",
        martial_art_id=1,
        studio_bio="This is a test bio",
        owner_id=1
    )

    db.session.add(demo_studio)
    db.session.commit()


def undo_studios():
    db.session.execute('TRUNCATE studios RESTART IDENTITY CASCADE;')
    db.session.commit()
