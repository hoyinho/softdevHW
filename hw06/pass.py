"""Ho Yin Ho
SoftDev2 pd6
HW06 -- List Comprehension
2016-03-31   
"""


def passChecker(pw):
    checker = [1 if x.isupper() else 2 if x.islower() else  3 if x.isdigit() else 0 for x in pw]
    return (1 in checker and 2 in checker and 3 in checker)

def passStrength(pw):
    if (not passChecker(pw)):
        return "Invalid Password"
    strength = [0.5 if x.islower() else 0.8 if x.isupper() else 0.8 if x.isdigit() else 1.1 for x in pw]
    return sum(strength)/len(pw) * 10

print "Checking for valid passwords"
print "password is password returns " + str(passChecker("password"))
print "password is PASSWORD returns " + str(passChecker("PASSWORD"))
print "password is PassWord returns " +  str(passChecker("PassWord"))
print "password is PassWord1234 returns " + str(passChecker("PassWord1234"))
print "password is PassWord1234% returns " + str(passChecker("PassWord1234%"))

print "Checking password strength"
print "password strength of password: " + str(passStrength("password"))
print "password strength of ThisPassWord!42: " + str(passStrength("ThisPassWord!42"))
print "password strength of Okpassword1: " + str(passStrength("Okpassword1"))
print "password strength of L33TP@$$wo0rd: " + str(passStrength("L33TP@$$wo0rd"))
