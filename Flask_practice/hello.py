from flask import Flask
app = Flask(__name__)

@app.route('/hello_02')
def hello_world():
    return "Hello, World! I'm hello.py"

    
