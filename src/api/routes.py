"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required



api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/singup", methods=["POST"])
def singup():

    data= request.get_jason()

    hashed_password=generate_password_hash(data["password"])

    new_user=User(
        email=data["email"].lower(),
        username=data["username"].lower(),
        email=hashed_password,
        is_active=True,
    )

    db.session.add(new_user)
    try:
        db.session.commit()
        return jsonify({"msg": "user created successfuly"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"msg": f"Error creating user {str(e)}"}), 500


 
@api.route("/login", methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    if username != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)
