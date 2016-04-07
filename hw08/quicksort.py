def quicksort(l):
    return [] if l==[] else quicksort([a for a in l if a <l[0]]) + [l[0]] + quicksort([a for a in l if a > l[0]])

print quicksort([9,8,7,6,5,4,3,2,1,1,5,7,2,4,7,78,235,24,2356,346,456,356,245,24])


def union(L1, L2):
    return L1 + [a for a in L2 if a not in L1]

def inter(L1, L2):
    return [a for a in L1 if a in L2]

def setDiff(L1, L2):
    return [a for a in L1 if not a in L2]

def symDiff(L1, L2):
    return setDiff(L1,L2) + setDiff(L2,L1)

def cartPro(L1, L2):
    return [(a,b) for a in L1 for b in L2]


print inter([1,2,3],[2,3,4])
print union([1,2,3],[2,3,4])
print setDiff([1,2,3],[2,3,4])
print symDiff([1,2,3],[2,3,4])
print cartPro([1,2,3],[2,3,4])
