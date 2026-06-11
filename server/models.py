from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    
    def to_dict(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email
        }

class DashboardStats(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    streak_days = db.Column(db.Integer, default=0)
    dsa_solved = db.Column(db.Integer, default=0)
    dsa_total = db.Column(db.Integer, default=400)
    ats_score = db.Column(db.Integer, default=0)
    interview_readiness = db.Column(db.Integer, default=0)

    def to_dict(self):
        return {
            "streak_days": self.streak_days,
            "dsa_solved": self.dsa_solved,
            "dsa_total": self.dsa_total,
            "ats_score": self.ats_score,
            "interview_readiness": self.interview_readiness
        }
