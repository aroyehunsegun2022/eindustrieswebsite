import datetime
from flask import Flask, request, json,make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS,cross_origin
from flask_mail import Mail,Message
from flask_migrate import Migrate
# from flask_sqlalchemy import SQLAlchemy 

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root@localhost/eindustries'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'infoeerrand@gmail.com'
app.config['MAIL_PASSWORD'] = 'eerrandinfo2022!'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)
db = SQLAlchemy(app)
migrate = Migrate(app,db)

class Ourcontacts(db.Model):
    id = db.Column(db.Integer(), primary_key=True,autoincrement=True)
    fullname = db.Column(db.String(100),nullable=False)
    email = db.Column(db.String(60),nullable=False)
    message = db.Column(db.String(1000),nullable=False)
    date = db.Column(db.DateTime(), default=datetime.datetime.utcnow)

    def __str__(self):
        return f"{self.id} {self.fullname} {self.email} {self.message}"


@app.route('/api', methods=['GET'])
def index():
    return {"name":"hello world"}

@app.route('/api/send/', methods=['POST'])
def sendto():
    request_data = json.loads(request.data)
    # request_data = request.get_json()
    contacts = Ourcontacts(fullname=request_data['addfname'],email=request_data['addemail'],message=request_data['addmsg'])
    db.session.add(contacts)
    db.session.commit()
    Message()
    msg = Message(subject="Testing Mail", sender="cutymotunrayo@gmail.com", recipients=["cutymotunrayo@gmail.com"], body="Test Mail")
    msg.html= f"<div><h1>You have a new contact in your database!</h1><p>Fullname: {request_data['addfname']}</p><p>Email: {request_data['addemail']}</p><p>Message: {request_data['addmsg']}</p><hr><span>copyright © eIndustries</span></div>"
    mail.send(msg)
    return {"201": f"message in db {request_data['addfname']}"}



if __name__ == "__main__":
    app.run(debug=True)