from flask import Flask, request, jsonify, session, make_response, redirect
from flask_cors import CORS


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
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5555, debug=True)