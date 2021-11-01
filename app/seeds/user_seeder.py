from app.models import db, User

from werkzeug.security import generate_password_hash, check_password_hash


def seed_users():
    u1 = User(
        first_name = "Demo",
        last_name = "Lition",
        email = "demo-lition@demo.com",
        hashed_password = generate_password_hash("password"),
        bio = "I like to break things!",
        rank_id = 1,
        martial_art_id = 1,
    )

    

    db.session.add(u1)

    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
