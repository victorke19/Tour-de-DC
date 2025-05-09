from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Ride(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    date = db.Column(db.Date, nullable = False)
    distance = db.Column(db.Float, nullable = False)