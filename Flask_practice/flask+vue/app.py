from flask import Flask,render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("App.vue")

# @app.route('/app')
# def app():
#     return 'Index, World!'

@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name="not"):
    return render_template('hello.html', name=name)


# $ python app.pyで起動する
if __name__ == "__main__":
    app.run(debug=True, threaded=True)
