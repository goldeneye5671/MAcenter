from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Studio, db, Studio_Event, Studio_Review, Studio_Schedule, Studio_Photo

studio_events_routes = Blueprint('studio_events', __name__)

#need a route to create a studio event
#need a route to update a studio event
#need a route to delete a studio event
#No need to read a studio event because when the studio profile page is loaded we will get
#   all of the studio events associated with the studio. There is no intention on making a
#   seporate page for an event at the current time

#create and delete need to be done at the same route
@studio_events_routes.route('/', methods=["POST"])
@login_required
def create_delete_event():
    if (request.method == "POST"):
        body = request.json
        studio_event = Studio_Event(
            title=body['title'],
            description=body['description'],
            date=body['date'],
            start_time=body['start_time'],
            end_time=body['end_time'],
            location=body['location'],
            studio_id=body['studio_id']
        )
        db.session.add(studio_event)
        db.session.commit()
        return studio_event.to_dict()

#update needs a seporate route to update a specific event
@studio_events_routes.route('/<int:id>', methods=["PUT", "DELETE"])
@login_required
def update_event(id):
    if (request.method == "PUT"):
        studio_event = Studio_Event.query.get(id)
        if (studio_event):
            body=request.json
            studio_event.title=body.get("title", studio_event.title)
            studio_event.description=body.get("description", studio_event.description)
            studio_event.date=body.get("event_date", studio_event.event_date)
            studio_event.start_time = body.get("start_time", studio_event.start_time)
            studio_event.end_time = body.get("end_time", studio_event.end_time)
            studio_event.location=body.get("location", studio_event.location)
            studio_event.studio_id=body.get("studio_id", studio_event.studio_id)
            db.session.commit()
            return studio_event.to_dict()
        else:
            return {}
    elif (request.method == "DELETE"):
        studio_event = Studio_Event.query.get(id)
        if (studio_event):
            Studio_Event.query.filter(Studio_Event.id == id).delete()
            db.session.commit()
            return studio_event.to_dict()
        else:
            return {"message": "delete failed. No such event exists"}
