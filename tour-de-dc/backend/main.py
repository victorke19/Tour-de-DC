from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from models import db, Ride
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///biking.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev_secret_key')

db.init_app(app)
CORS(app)
bcrypt = Bcrypt(app)

@app.route('/')
def index():
    return "Allez DC!"

# if __name__ == "__main__":
#    app.run(host="127.0.0.1", port=3000, debug=True)