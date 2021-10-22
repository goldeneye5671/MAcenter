from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>', methods=["GET", "PUT", "DELETE"])
# @login_required
def user(id):
    if (request.method == "GET"):
        user = User.query.get(id)
        return user.to_dict()
    elif (request.method == "PUT"):
        user = User.query.get(id)
        if (user):
            body = request.json
            user.first_name = body.get("first_name", user.first_name)
            user.last_name = body.get("last_name", user.last_name)
            user.email = body.get("email", user.email)
            user.bio = body.get("bio", user.bio)
            user.rank_id = body.get("rank_id", user.rank_id)
            user.martial_art_id = body.get("martial_art_id", user.martial_art_id)
            user.studio_id = body.get("studio_id", user.studio_id)
            db.session.commit()
            return user.to_dict()
        else:
            return {}
    elif (request.method == "DELETE"):
        user = User.query.get(id)
        if (user):
            db.session.delete(user)
            db.session.commit()
            return {"delete": "success"}
        else:
            return {"delete": "user not found"}

        
