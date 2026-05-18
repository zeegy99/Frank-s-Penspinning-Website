from flask import Flask, request, jsonify, session, make_response, redirect
from flask_cors import CORS

import os, smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app, allow_headers=["Content-Type"], resources={r'/api/*': {"origins": "*"}},
      methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"])

@app.route('/')
def index():
    return "<h1>Hello World</h1>"

@app.route('/order')
def order():
    print('yo gurt')
    return "<h1>Hi</h1>"

@app.route('/greet/<name>')
def greet(name):

    return f"<h1>Hello {name}</h1>"

@app.route('/api/test')
def test():
    print("Test was hit")
    return "<p>You hit the backend</p>"

@app.route('/api/contact', methods=["POST"])
def contact():

    #Info comes in like this {'fname': 'asdf', 'email': 'asdf@gmail.com', 'content': 'asdf'}
    data = request.get_json()

    print(data)

    full_name = data.get("fname")
    email = data.get("email")
    content=data.get("content")

    sender = "fred.yuan392@gmail.com"
    recipient = [email, "frank.toto2009@gmail.com"]
    pwd = (os.getenv("APP_PASSWORD")).strip()

    msg = MIMEMultipart("alternative")
    msg["From"] = sender
    msg["To"] = email
    msg["Subject"] = "Penspinning Inquiry Confirmation Email"

    txt = (
        f"Hi {full_name},\n\n"
         f"This is confirmation for what you asked: {content}\n\n"
         "We will get back to you as soon as possible."
    )

    msg.attach(MIMEText(txt, "plain"))


    context = ssl.create_default_context()
    with smtplib.SMTP("smtp.gmail.com", 587, timeout=30) as s:
        s.ehlo(); s.starttls(context=context); s.ehlo()
        s.login(sender, pwd)
        s.sendmail(sender, recipient, msg.as_string())

    print("this all worked")

    return jsonify({"message": "If that email exists, we sent a reset code."}), 200
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5555, debug=True)