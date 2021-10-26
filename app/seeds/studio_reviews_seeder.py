from app.models import db, Studio_Review

def seed_reviews():
    r1 = Studio_Review(
        title="test review",
        content="This is a test review",
        rating=5,
        studio_id=1,
        user_id=1,
    )    
    r2 = Studio_Review(
        title="test review",
        content="This is a test review",
        rating=5,
        studio_id=1,
        user_id=1,
    )    
    r3 = Studio_Review(
        title="test review",
        content="This is a test review",
        rating=5,
        studio_id=1,
        user_id=1,
    )    
    r4 = Studio_Review(
        title="test review",
        content="This is a test review",
        rating=5,
        studio_id=1,
        user_id=1,
    )    
    r5 = Studio_Review(
        title="test review",
        content="This is a test review",
        rating=5,
        studio_id=1,
        user_id=1,
    )    
    r6 = Studio_Review(
        title="test review",
        content="This is a test review",
        rating=5,
        studio_id=1,
        user_id=1,
    )    
    r7 = Studio_Review(
        title="test review",
        content="This is a test review",
        rating=5,
        studio_id=1,
        user_id=1,
    )    

    db.session.add(r1)
    db.session.add(r2)
    db.session.add(r3)
    db.session.add(r4)
    db.session.add(r5)
    db.session.add(r6)
    db.session.add(r7)

    db.session.commit()


def undo_studio_reviews():
    db.session.execute('TRUNCATE studio_reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
