from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db, Studio, Martial_Art_Rank, Martial_Art

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return jsonify([user.to_dict_with_studios() for user in users])


@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)
    if user:
        return user.to_dict_with_studios()
    else:
        return jsonify({"message": "User not found"}), 404


@user_routes.route('/<int:id>', methods=["PUT", "DELETE"])
# @login_required
def user_profile(id):
    if (request.method == "PUT"):
        user = User.query.get(id)
        if (user):
            body = request.json
            user.first_name = body.get("first_name", user.first_name)
            user.last_name = body.get("last_name", user.last_name)
            user.email = body.get("email", user.email)
            user.bio = body.get("bio", user.bio)
            db.session.commit()
            return user.to_dict_with_studios()
        else:
            return {}, 404
    elif (request.method == "DELETE"):
        user = User.query.get(id)
        if (user):
            db.session.delete(user)
            db.session.commit()
            return {"delete": "success"}, 200
        else:
            return {"delete": "user not found"}, 404


@user_routes.route('/<int:id>/followed', methods=["PATCH", "DELETE"])
def user_follow_unfollow_studio(id):
    if (request.method == "PATCH"):
        body = request.json
        print(body)
        user = User.query.get(id)
        studio = Studio.query.get(body['studioId'])
        if (user and studio):
            user.studios.append(studio)
            db.session.commit()
            return user.to_dict_with_studios()
        else:
            if (user):
                return {"error": "user cant be found"}, 404
            else:
                return {"error": "studio cant be found"}, 404
    elif (request.method == "DELETE"):
        body = request.json
        user = User.query.get(id)
        studio = Studio.query.get(body['studioId'])
        if (user) :
            user.studios.remove(studio)
            db.session.commit()
            return user.to_dict_with_studios(), 200
        else:
            return {"error": "user not found"}, 404


@user_routes.route('/<int:id>/martial-arts', methods=["PATCH", "DELETE"])
def user_ma_follow_unfollow(id):
    if (request.method == "PATCH"):
        body = request.json
        user = User.query.get(id)
        ma = Martial_Art.query.get(body['maid'])
        ma_rank = Martial_Art_Rank.query.get(body['ma_ranks'])
        if (user and ma and ma_rank):
            user.martial_arts.append(ma)
            user.ranks.append(ma_rank)
            db.session.commit()
            return user.to_dict_with_studios()
        else:
            if (user):
                return {"error": "user cant be found"}, 404
            elif (ma):
                return {"error": "martial art cant be found"}, 404
            else:
                return {"error": "rank cant be found"}
    elif (request.method == "DELETE"):
        body = request.json
        user = User.query.get(id)
        ma = Martial_Art.query.get(body['maid'])
        # ma_rank = Martial_Art_Rank.query.get(body['ma_rank'])
        if (user and ma):
            user.martial_arts.remove(ma)
            for rank in body['ma_ranks']:
                rank_to_del = Martial_Art_Rank.query.get(rank)
                if (rank_to_del) :
                    user.ranks.remove(rank_to_del)
                
            db.session.commit()
            return user.to_dict_with_studios()
        else:
            if (user):
                return {"error": "user cant be found"}, 404
            elif (ma):
                return {"error": "martial art cant be found"}, 404
            else:
                return {"error": "rank cant be found"}, 404
