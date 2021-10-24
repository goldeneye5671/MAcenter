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
        studio_id = 1
    )

    u2 = User(
        first_name = "Anthony",
        last_name = "Lition",
        email = "anthony-lition@demo.com",
        hashed_password = generate_password_hash("password"),
        bio = "I like to break things!",
        rank_id = 1,
        martial_art_id = 1,
        studio_id = 1
    )

    u3 = User(
        first_name = "Becka",
        last_name = "Lition",
        email = "becka-lition@demo.com",
        hashed_password = generate_password_hash("password"),
        bio = "I like to break things!",
        rank_id = 1,
        martial_art_id = 1,
        studio_id = 1
    )

    u4 = User(
        first_name = "Edward",
        last_name = "Lition",
        email = "edward-lition@demo.com",
        hashed_password = generate_password_hash("password"),
        bio = "I like to break things!",
        rank_id = 1,
        martial_art_id = 1,
        studio_id = 1
    )

    u5 = User(
        first_name = "Brian",
        last_name = "Lition",
        email = "brian-lition@demo.com",
        hashed_password = generate_password_hash("password"),
        bio = "I like to break things!",
        rank_id = 1,
        martial_art_id = 1,
        studio_id = 1
    )

    u6 = User(
        first_name = "Stanthany",
        last_name = "Lition",
        email = "stanthany-lition@demo.com",
        hashed_password = generate_password_hash("password"),
        bio = "I like to break things!",
        rank_id = 1,
        martial_art_id = 1,
        studio_id = 1
    )

    u7 = User(
        first_name = "Brohammer",
        last_name = "Lition",
        email = "brohammer-lition@demo.com",
        hashed_password = generate_password_hash("password"),
        bio = "I like to break things!",
        rank_id = 1,
        martial_art_id = 1,
        studio_id = 1
    )

    u8 = User(
        first_name = "Chuck",
        last_name = "Lition",
        email = "chuck-lition@demo.com",
        hashed_password = generate_password_hash("password"),
        bio = "I like to break things!",
        rank_id = 1,
        martial_art_id = 1,
        studio_id = 1
    )

    db.session.add(u1)
    db.session.add(u2)
    db.session.add(u3)
    db.session.add(u4)
    db.session.add(u5)
    db.session.add(u6)
    db.session.add(u7)
    db.session.add(u8)
    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
