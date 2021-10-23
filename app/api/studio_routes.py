# studios:
#         {
#             studioId:
#                 [
#                     {
#                         name,
#                         martial_art,
#                         federation_id,
#                         address: {street, city, state, country, zip_code},
#                         owner,
#                         phone_contact, 
#                         email_contact,
#                         studio_events: [{title, description, event_date, location}],
#                         studio_schedule: [{class_name, start_time, end_time}], 
#                         studio_photos: [{}],
#                         studio_reviews: [{}]
#                     }
#                 ]
#             }

import json
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Studio, db

studio_routes = Blueprint('studios',  __name__)

@studio_routes.route('/', methods=['GET', 'POST'])
def all_studios():
    studios = Studio.query.all()
    return jsonify([studio.to_dict() for studio in studios])

@studio_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def one_studio():
    pass
