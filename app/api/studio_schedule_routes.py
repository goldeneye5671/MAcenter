from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Studio, db, Studio_Event, Studio_Review, Studio_Schedule, Studio_Photo, studio_schedule

studio_schedule_routes = Blueprint("studio_classes_routes", __name__)

@studio_schedule_routes.route('/', methods=["POST"])
def create_studio_schedule():
    if (request.method == "POST"):
        body = request.json
        studio_schedule = Studio_Schedule(
            schedule_name=body['schedule_name'],
            schedule_description=body['schedule_description'],
            studio_id=body['studio_id'],
            start_timestamp=body['start_timestamp'],
            end_timestamp=body['end_timestamp']
        )
        db.session.add(studio_schedule)
        db.session.commit()
        return studio_schedule.to_dict()


@studio_schedule_routes.route('/<int:id>', methods=["PUT", "DELETE"])
def update_delete_studio_schedule(id):
    if (request.method == "PUT"):
        studio_schedule = Studio_Schedule.query.get(id)
        if (studio_schedule):
            body = request.json
            studio_schedule.schedule_name=body.get("schedule_name", studio_schedule.schedule_name)
            studio_schedule.schedule_description=body.get("schedule_description", studio_schedule.schedule_description)
            studio_schedule.studio_id=body.get("studio_id", studio_schedule.studio_id)
            studio_schedule.start_timestamp=body.get("start_timestamp", studio_schedule.start_timestamp)
            studio_schedule.end_timestamp=body.get("end_timestamp", studio_schedule.end_timestamp)
            db.session.commit()
    if (request.method == "DELETE"):
        studio_schedule = Studio_Schedule.query.get(id)
        if (studio_schedule):
            Studio_Schedule.query.filter(Studio_Schedule.id == id).delete()
            db.session.commit()
            return studio_schedule.to_dict()
        else:
            return {"error": "delete failed. no such schedule exists"}