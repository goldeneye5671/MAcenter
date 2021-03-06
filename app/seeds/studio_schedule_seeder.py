from app.models import db, Studio_Schedule
from datetime import datetime

def seed_studio_schedules():
    ss1 = Studio_Schedule(
        schedule_name='test_schedule_1',
        schedule_description='this is a test',
        week_day="Tuesday",
        start_time='19:00',
        end_time='20:00',
        studio_id=1
    )
    ss2 = Studio_Schedule(
        schedule_name='test_schedule_2',
        schedule_description='this is a test',
        week_day="Tuesday",
        start_time='19:00',
        end_time='20:00',
        studio_id=1
    )
    ss3 = Studio_Schedule(
        schedule_name='test_schedule_3',
        schedule_description='this is a test',
        week_day="Tuesday",
        start_time='19:00',
        end_time='20:00',
        studio_id=1
    )
    ss4 = Studio_Schedule(
        schedule_name='test_schedule_4',
        schedule_description='this is a test',
        week_day="Tuesday",
        start_time='19:00',
        end_time='20:00',
        studio_id=1
    )
    ss5 = Studio_Schedule(
        schedule_name='test_schedule_5',
        schedule_description='this is a test',
        week_day="Tuesday",
        start_time='19:00',
        end_time='20:00',
        studio_id=1
    )
    ss6 = Studio_Schedule(
        schedule_name='test_schedule_6',
        schedule_description='this is a test',
        week_day="Tuesday",
        start_time='19:00',
        end_time='20:00',
        studio_id=1
    )
    ss7 = Studio_Schedule(
        schedule_name='test_schedule_7',
        schedule_description='this is a test',
        week_day="Tuesday",
        start_time='19:00',
        end_time='20:00',
        studio_id=1
    )

    db.session.add(ss1)
    db.session.add(ss2)
    db.session.add(ss3)
    db.session.add(ss4)
    db.session.add(ss5)
    db.session.add(ss6)
    db.session.add(ss7)

    db.session.commit()


def undo_studio_schedule():
    db.session.execute('TRUNCATE studio_schedules RESTART IDENTITY CASCADE;')
    db.session.commit()
