import time


def timer(fn):
    secs = time.time()
    return lambda: fn() + " seconds:" + str(time.time() - secs)

def funcname(fn):
    return lambda: fn() + " name of function: " + fn.func_name 

def make_bold(fn):
    return lambda : "<b>" + fn() + "</b>"

def make_italic(fn):
    return lambda : "<i>" + fn() + "</i>"



@timer
@funcname
def hello():
    start = time.time()
    num = 0
    while(time.time() - start < 10):
        num+=1
    return str(num)

helloHTML = hello


print helloHTML()

