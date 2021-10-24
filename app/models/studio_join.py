from .db import db

studio_joins = db.Table(
    'studio_joins',
    db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("studio_id", db.Integer, db.ForeignKey("studios.id"), primary_key=True)
)

# publishers_books = db.Table(
#     "publishers_books",
#     db.Column(
#         "book_id", db.Integer, db.ForeignKey("books.id"), primary_key=True
#     ),
#     db.Column(
#         "publisher_id", db.Integer, db.ForeignKey("publishers.id"), primary_key=True
#     )
# )
