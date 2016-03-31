def passChecker(pw):
    upper = False
    lower = False
    other = False
    numbers = False
    upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lowerC = "abcdefghijklmnopqrstuvwxyz"
    numbers = "1234567890"
    checker = [1 if x in upperC else 2 if x in lowerC else  3 if x in numbers else 0 for x in pw]
    return (1 in checker and 2 in checker and 3 in checker and not 0 in checker)
 
print "password is password returns " + str(passChecker("password"))
print "password is PASSWORD returns " + str(passChecker("PASSWORD"))
print "password is PassWord returns " +  str(passChecker("PassWord"))
print "password is PassWord1234 returns " + str(passChecker("PassWord1234"))
print "password is PassWord1234% returns " + str(passChecker("PassWord1234%"))

