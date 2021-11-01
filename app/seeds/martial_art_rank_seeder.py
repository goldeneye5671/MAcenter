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

    mar1 = Martial_Art_Rank(
        name="10th guep",
        rank_number=10,
        martial_art_rank=2
    )
    mar2 = Martial_Art_Rank(
        name="9th guep",
        rank_number=9,
        martial_art_rank=2
    )
    mar3 = Martial_Art_Rank(
        name="8th guep",
        rank_number=8,
        martial_art_rank=2
    )
    mar4 = Martial_Art_Rank(
        name="7th guep",
        rank_number=7,
        martial_art_rank=2
    )
    mar5 = Martial_Art_Rank(
        name="6th guep",
        rank_number=6,
        martial_art_rank=2
    )
    mar6 = Martial_Art_Rank(
        name="5th guep",
        rank_number=5,
        martial_art_rank=2
    )
    mar7 = Martial_Art_Rank(
        name="4th guep",
        rank_number=4,
        martial_art_rank=2
    )
    mar8 = Martial_Art_Rank(
        name="3rd guep",
        rank_number=3,
        martial_art_rank=2
    )
    mar9 = Martial_Art_Rank(
        name="2nd guep",
        rank_number=2,
        martial_art_rank=2
    )
    mar10 = Martial_Art_Rank(
        name="1st guep",
        rank_number=1,
        martial_art_rank=2
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


    mar1 = Martial_Art_Rank(
        name="1st degree",
        rank_number=10,
        martial_art_rank=3
    )
    mar2 = Martial_Art_Rank(
        name="2nd degree",
        rank_number=9,
        martial_art_rank=3
    )
    mar3 = Martial_Art_Rank(
        name="3rd degree",
        rank_number=8,
        martial_art_rank=3
    )
    mar4 = Martial_Art_Rank(
        name="4th degree",
        rank_number=7,
        martial_art_rank=3
    )
    mar5 = Martial_Art_Rank(
        name="5th degree",
        rank_number=6,
        martial_art_rank=3
    )
    mar6 = Martial_Art_Rank(
        name="6th degree",
        rank_number=5,
        martial_art_rank=3
    )
    mar7 = Martial_Art_Rank(
        name="7th degree",
        rank_number=4,
        martial_art_rank=3
    )
    mar8 = Martial_Art_Rank(
        name="8th degree",
        rank_number=3,
        martial_art_rank=3
    )
    mar9 = Martial_Art_Rank(
        name="9th degree",
        rank_number=2,
        martial_art_rank=3
    )
    mar10 = Martial_Art_Rank(
        name="Black Belt",
        rank_number=1,
        martial_art_rank=3
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

    mar1 = Martial_Art_Rank(
        name="Yellow Belt",
        rank_number=10,
        martial_art_rank=3
    )
    mar2 = Martial_Art_Rank(
        name="Orange Belt",
        rank_number=9,
        martial_art_rank=3
    )
    mar3 = Martial_Art_Rank(
        name="Green Belt",
        rank_number=8,
        martial_art_rank=3
    )
    mar4 = Martial_Art_Rank(
        name="Blue Belt",
        rank_number=7,
        martial_art_rank=3
    )
    mar5 = Martial_Art_Rank(
        name="Brown Belt",
        rank_number=6,
        martial_art_rank=3
    )
    mar6 = Martial_Art_Rank(
        name="Black Belt",
        rank_number=5,
        martial_art_rank=3
    )

    db.session.add(mar1)
    db.session.add(mar2)
    db.session.add(mar3)
    db.session.add(mar4)
    db.session.add(mar5)
    db.session.add(mar6)
    db.session.commit()


def undo_martial_arts_ranks():
    db.session.execute('TRUNCATE martial_art_ranks RESTART IDENTITY CASCADE;')
    db.session.commit()
