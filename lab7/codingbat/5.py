#1
def cigar_party(cigars, is_weekend):
    return cigars >= 40 if is_weekend else 40 <= cigars <= 60
#2
def date_fashion(you, date):
    if you <= 2 or date <= 2:
        return 0
    elif you >= 8 or date >= 8:
        return 2
    else:
        return 1
#3
def squirrel_play(temp, is_summer):
    upper_limit = 100 if is_summer else 90
    return 60 <= temp <= upper_limit
#4
def caught_speeding(speed, is_birthday):
    if is_birthday:
        speed -= 5
    if speed <= 60:
        return 0
    elif speed <= 80:
        return 1
    else:
        return 2
#5
def sorta_sum(a, b):
    sum_ab = a + b
    return 20 if 10 <= sum_ab <= 19 else sum_ab

