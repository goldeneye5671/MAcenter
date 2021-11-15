from app.models import db, Studio

def seed_studios():
    demo_studio = Studio(
        name="DeJohnette Martial Arts Academy",
        federation_id=123456,
        address="1234 N. Santa Fe Avenue, Vista, California, 92083",
        phone_contact=610,
        email_contact="test@test.net",
        martial_art_id=1,
        studio_bio="This is a test bio",
        owner_id=1
    )
    demo_studio2 = Studio(
        name="Test Studio 2",
        federation_id=123456,
        address="1234 N. Santa Fe Avenue, Vista, California, 92083",
        phone_contact=610,
        email_contact="test2@test.net",
        martial_art_id=2,
        studio_bio="This is a test bio",
        owner_id=1
    )
    demo_studio3 = Studio(
        name="Test Studio 3",
        federation_id=123456,
        address="1234 N. Santa Fe Avenue, Vista, California, 92083",
        phone_contact=610,
        email_contact="test3@test.net",
        martial_art_id=1,
        studio_bio="This is a test bio",
        owner_id=1
    )
    demo_studio4 = Studio(
        name="Test Studo 4",
        federation_id=123456,
        address="1234 N. Santa Fe Avenue, Vista, California, 92083",
        phone_contact=610,
        email_contact="test4@test.net",
        martial_art_id=1,
        studio_bio="This is a test bio",
        owner_id=1
    )
    demo_studio5 = Studio(
        name="Test Studio 5",
        federation_id=123456,
        address="1234 N. Santa Fe Avenue, Vista, California, 92083",
        phone_contact=610,
        email_contact="test5@test.net",
        martial_art_id=3,
        studio_bio="This is a test bio",
        owner_id=1
    )

    db.session.add(demo_studio)
    db.session.add(demo_studio2)
    db.session.add(demo_studio3)
    db.session.add(demo_studio4)
    db.session.add(demo_studio5)
    db.session.commit()


def undo_studios():
    db.session.execute('TRUNCATE studios RESTART IDENTITY CASCADE;')
    db.session.commit()
