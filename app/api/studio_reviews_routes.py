from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Studio, db, Studio_Event, Studio_Review, Studio_Schedule, Studio_Photo

studio_reviews_routes = Blueprint("studio_reviews", __name__)

#need a route to create a studio review
#need a route to update a studio review
#need a route to delete a studio review
#No need to read a studio review because when the studio profile page is loaded we will get
#   all of the studio reviews associated with the studio. There is no intention on making a
#   seporate page for a review at the current time

#create and delete need to be done at the same route

@studio_reviews_routes.route('/', methods=["POST"])
def create_studio_review():
    if (request.method == "POST"):
        body = request.json
        studio_review = Studio_Review(
            title=body['title'],
            content=body['content'],
            rating=body['rating'],
            studio_id=body['studio_id'],
            user_id=body['user_id']
        )
        db.session.add(studio_review)
        db.session.commit()
        return studio_review.to_dict()


@studio_reviews_routes.route('/<int:id>', methods=["PUT", "DELETE"])
def update_delete_review(id):
    if (request.method == "PUT"):
        studio_review = Studio_Review.query.get(id)
        if (studio_review):
            body = request.json
            studio_review.title=body.get("title", studio_review.title)
            studio_review.content=body.get("content", studio_review.content)
            studio_review.rating=body.get("rating", studio_review.rating)
            studio_review.studio_id=body.get("studio_id", studio_review.studio_id)
            studio_review.user_id=body.get("user_id", studio_review.user_id)
            db.session.commit()
            return studio_review.to_dict()
    elif (request.method == "DELETE"):
        studio_review = Studio_Review.query.get(id)
        print(studio_review)
        if (studio_review):
            Studio_Review.query.filter(Studio_Review.id == id).delete()
            db.session.commit()
            return studio_review.to_dict()
        else:
            return {"message": "delete failed. no such review exists"}
