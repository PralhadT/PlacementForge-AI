import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, User, DashboardStats

app = Flask(__name__)
CORS(app)

# Configure SQLite DB
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Initialize database
with app.app_context():
    db.create_all()

@app.route('/api/auth/register', methods=['POST'])
def register():
    data = request.json
    if not data or 'email' not in data or 'password' not in data:
        return jsonify({"error": "Missing required fields"}), 400
        
    if User.query.filter_by(email=data['email']).first():
        return jsonify({"error": "Email already exists"}), 400
        
    new_user = User(
        full_name=data.get('full_name', ''),
        email=data['email'],
        password=data['password'] # Note: In production, hash passwords!
    )
    db.session.add(new_user)
    db.session.commit()
    
    # Create default stats for new user
    stats = DashboardStats(
        user_id=new_user.id,
        streak_days=1,
        dsa_solved=0,
        ats_score=50,
        interview_readiness=45
    )
    db.session.add(stats)
    db.session.commit()
    
    return jsonify({
        "message": "User registered successfully",
        "user": new_user.to_dict()
    }), 201

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data.get('email')).first()
    
    if user and user.password == data.get('password'):
        return jsonify({
            "message": "Login successful",
            "user": user.to_dict()
        }), 200
        
    return jsonify({"error": "Invalid email or password"}), 401

@app.route('/api/dashboard/<int:user_id>', methods=['GET'])
def get_dashboard(user_id):
    stats = DashboardStats.query.filter_by(user_id=user_id).first()
    if not stats:
        return jsonify({"error": "Stats not found"}), 404
        
    user = User.query.get(user_id)
    
    return jsonify({
        "user": user.to_dict(),
        "stats": stats.to_dict()
    }), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
