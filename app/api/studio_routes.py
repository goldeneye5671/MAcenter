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
from app.models import Studio, db, Studio_Event, Studio_Review, Studio_Schedule, Studio_Photo

studio_routes = Blueprint('studios',  __name__)

@studio_routes.route('/', methods=['GET', 'POST'])
def all_studios():
    if (request.method == "GET"):
        studios = Studio.query.all()
        return jsonify([studio.to_dict() for studio in studios])
    elif (request.method == "POST"):
        body = request.json
        studio = Studio(
            name = body['name'],
            federation_id = body['federation_id'],
            address = body['address'],
            phone_contact = body['phone_contact'],
            email_contact = body['email_contact'],
            studio_bio = body['studio_bio'],
            martial_art_id = body['martial_art_id'],
            owner_id = body['owner_id'],
        )
        db.session.add(studio)
        db.session.commit()
        return studio.to_dict()


@studio_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def one_studio(id):
    if (request.method == "GET"):
        studio = Studio.query.get(id)
        return studio.to_dict()
    elif (request.method == "PUT"):
        body = request.json
        studio = Studio.query.get(id)
        if (studio):
            studio.name = body.get("name", studio.name)
            studio.federation_id = body.get("federation_id", studio.federation_id)
            studio.address = body.get("address", studio.address)
            studio.phone_contact = body.get("phone_contact", studio.phone_contact)
            studio.email_contact = body.get("email_contact", studio.email_contact)
            studio.studio_bio = body.get("studio_bio", studio.studio_bio)
            studio.martial_art_id = body.get("martial_art_id", studio.martial_art_id)
            studio.owner_id = body.get("owner_id", studio.owner_id)
            db.session.commit()
            return studio.to_dict()
        else:
            return {}
