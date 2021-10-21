from app.models import db, Studio_Event
from datetime import datetime

def seed_studio_events():
    se1 = Studio_Event(
        title="Test Event",
        description="This is a test event",
        event_date=datetime.now(),
        location="1234 test road",
        studio_id=1
    )
    se2 = Studio_Event(
        title="Test Event",
        description="This is a test event",
        event_date=datetime.now(),
        location="1234 test road",
        studio_id=1
    )
    se3 = Studio_Event(
        title="Test Event",
        description="This is a test event",
        event_date=datetime.now(),
        location="1234 test road",
        studio_id=1
    )
    se4 = Studio_Event(
        title="Test Event",
        description="This is a test event",
        event_date=datetime.now(),
        location="1234 test road",
        studio_id=1
    )
    se5 = Studio_Event(
        title="Test Event",
        description="This is a test event",
        event_date=datetime.now(),
        location="1234 test road",
        studio_id=1
    )
    se6 = Studio_Event(
        title="Test Event",
        description="This is a test event",
        event_date=datetime.now(),
        location="1234 test road",
        studio_id=1
    )
    se7 = Studio_Event(
        title="Test Event",
        description="This is a test event",
        event_date=datetime.now(),
        location="1234 test road",
        studio_id=1
    )

    db.session.add(se1)
    db.session.add(se2)
    db.session.add(se3)
    db.session.add(se4)
    db.session.add(se5)
    db.session.add(se6)
    db.session.add(se7)
    db.session.commit()


def undo_studio_events():
    db.session.execute('TRUNCATE studio_events RESTART IDENTITY CASCADE;')
    db.session.commit()
