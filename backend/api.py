import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from utilities import validate_phone_number
from validate_email_address import validate_email

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    date_time = db.Column(db.DateTime, nullable=False, index=True)
    appointment_type = db.Column(db.String(50), nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'date_time': self.date_time.strftime("%Y-%m-%d %H:%M"),
            'appointment_type': self.appointment_type,
            'duration': self.duration,
            'created_at': self.created_at.strftime("%Y-%m-%d %H:%M")
        }

with app.app_context():
    db.create_all()

@app.route('/', methods=['GET'])
def home():
    return "<h2>Herzlich Willkommen zu Anker Termine API</h2>", 200

@app.route('/appointments', methods=['GET'])
def get_appointments():
    appointments = Appointment.query.all()
    return jsonify([appointment.to_dict() for appointment in appointments]), 200

@app.route('/appointments/<int:id>', methods=['GET'])
def get_appointment(id):
    appointment = Appointment.query.get(id)
    if appointment:
        return jsonify(appointment.to_dict()), 200
    return jsonify({'error': 'Appointment not found'}), 404

@app.route('/appointments', methods=['POST'])
def create_appointment():
    data = request.get_json()
    
    required_fields = ['name', 'email', 'phone', 'date', 'time']
    if not all(key in data and data[key].strip() for key in required_fields):
        return jsonify({'error': 'Missing or empty required fields'}), 400

    if not validate_email(data['email']):
        return jsonify({'error': 'Invalid email address'}), 400
    if not validate_phone_number(data['phone']):
        return jsonify({'error': 'Invalid phone number'}), 400

    try:
        date_time = datetime.strptime(f"{data['date']} {data['time']}", "%Y-%m-%d %H:%M")
    except ValueError:
        return jsonify({'error': 'Invalid date or time format'}), 400

    existing = Appointment.query.filter_by(date_time=date_time).first()
    if existing:
        return jsonify({'error': 'Time slot already booked'}), 400

    appointment = Appointment(
        name=data['name'].strip(),
        email=data['email'].strip(),
        phone=data['phone'].strip(),
        appointment_type=data['appointment_type'].strip(),
        duration=data['duration'],
        date_time=date_time
    )

    db.session.add(appointment)
    db.session.commit()
    return jsonify(appointment.to_dict()), 201

@app.route('/appointments/<int:id>', methods=['PUT'])
def update_appointment(id):
    appointment = Appointment.query.get(id)
    if not appointment:
        return jsonify({'error': 'Appointment not found'}), 404
    
    data = request.get_json()

    appointment.name = data.get('name', appointment.name)
    appointment.email = data.get('email', appointment.email)
    appointment.phone = data.get('phone', appointment.phone)
    appointment.appointment_type = data.get('appointment_type', appointment.appointment_type)
    appointment.duration = data.get('duration', appointment.duration)
    
    if 'date' in data and 'time' in data:
        try:
            appointment.date_time = datetime.strptime(f"{data['date']} {data['time']}", "%Y-%m-%d %H:%M")
        except ValueError:
            return jsonify({'error': 'Invalid date or time format'}), 400

    db.session.commit()
    return jsonify(appointment.to_dict()), 200

@app.route('/appointments/<int:id>', methods=['DELETE'])
def delete_appointment(id):
    appointment = Appointment.query.get(id)
    if appointment:
        db.session.delete(appointment)
        db.session.commit()
        return jsonify({'message': 'Appointment deleted successfully'}), 200
    return jsonify({'error': 'Appointment not found'}), 404

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5002)
