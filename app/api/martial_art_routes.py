# martialArts: 
#         {
#             martialAtdId:
#                  {
#                     name,
#                     art_type,
#                     difficulty,
#                     bio, 
#                     region,
#                     ranks: {rankId: rank}
#                   }
#            following: {followingId: {followingName}
#         }
#Redux state

from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Martial_Art, db

martial_art_routes = Blueprint('martial-arts', __name__)

@martial_art_routes.route('/', methods=['GET', 'POST'])
def all_martial_arts():
    if request.method == 'GET':
        martial_arts = Martial_Art.query.all()
        return jsonify([martial_art.to_dict() for martial_art in martial_arts])

@martial_art_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def one_martial_art():
    pass
