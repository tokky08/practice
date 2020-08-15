from flask import Flask

app = Flask(__name__)


@app.route('/flaskr_hello')
def hello():
    return 'Hello, World!'