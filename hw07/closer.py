"""
Ho Yin Ho
SoftDev2 pd6
HW07 -- closure
2016-04-01
"""

def repeat(s):
    return lambda n: s * n

r1 = repeat("hello")
r2 = repeat ("goodbye")
print r1(2) 
print r2(2) 
print repeat('cool')(3)
