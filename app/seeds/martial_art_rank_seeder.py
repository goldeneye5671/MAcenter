from app.models import db, Martial_Art_Rank

def seed_martial_art_ranks():
    mar1 = Martial_Art_Rank(
        name="10th gup",
        rank_number=10,
        martial_art_rank=1
    )

    db.session.add(mar1)
    db.session.commit()


def undo_martial_arts_ranks():
    db.session.execute('TRUNCATE martial_art_ranks RESTART IDENTITY CASCADE;')
    db.session.commit()
