from app.models import db, Martial_Art_Rank

def seed_martial_art_ranks():
    mar1 = Martial_Art_Rank(
        name="10th gup",
        rank_number=10,
        martial_art_rank=1
    )
    mar2 = Martial_Art_Rank(
        name="9th gup",
        rank_number=9,
        martial_art_rank=1
    )
    mar3 = Martial_Art_Rank(
        name="8th gup",
        rank_number=8,
        martial_art_rank=1
    )
    mar4 = Martial_Art_Rank(
        name="7th gup",
        rank_number=7,
        martial_art_rank=1
    )
    mar5 = Martial_Art_Rank(
        name="6th gup",
        rank_number=6,
        martial_art_rank=1
    )
    mar6 = Martial_Art_Rank(
        name="5th gup",
        rank_number=5,
        martial_art_rank=1
    )
    mar7 = Martial_Art_Rank(
        name="4th gup",
        rank_number=4,
        martial_art_rank=1
    )
    mar8 = Martial_Art_Rank(
        name="3rd gup",
        rank_number=3,
        martial_art_rank=1
    )
    mar9 = Martial_Art_Rank(
        name="2nd gup",
        rank_number=2,
        martial_art_rank=1
    )
    mar10 = Martial_Art_Rank(
        name="1st gup",
        rank_number=1,
        martial_art_rank=1
    )

    db.session.add(mar1)
    db.session.add(mar2)
    db.session.add(mar3)
    db.session.add(mar4)
    db.session.add(mar5)
    db.session.add(mar6)
    db.session.add(mar7)
    db.session.add(mar8)
    db.session.add(mar9)
    db.session.add(mar10)
    db.session.commit()


def undo_martial_arts_ranks():
    db.session.execute('TRUNCATE martial_art_ranks RESTART IDENTITY CASCADE;')
    db.session.commit()
