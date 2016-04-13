from flask import Flask, render_template,request
import time, json, readfile
from functools import wraps
app = Flask(__name__)

def timer(fn):
    @wraps(fn)
    def inner(*args):
        sec = time.time()
        retval = fn(*args)
        print "Time: " + str(time.time() - sec)
        return retval
    return inner

def get_function(fn):
    @wraps(fn)
    def inner1(*args):
        print "Function and args: " + fn.__name__, args
        return fn(*args)
    return inner1
    
@app.route("/")
@timer
@get_function
def index():
    return render_template("index.html")


@app.route("/search")
@timer
@get_function
def search():
    name = request.args.get("name")
    profile = readfile.searchprofile(name)
    return json.dumps(profile)

@app.route("/random")
@timer
@get_function
def random():
    profile = readfile.randomprofile()
    return json.dumps(profile)
    
if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
