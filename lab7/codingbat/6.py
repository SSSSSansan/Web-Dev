#1
def make_bricks(small, big, goal):
    return goal % 5 <= small and goal - (big * 5) <= small
#2
def lone_sum(a, b, c):
    return (a if a != b and a != c else 0) + (b if b != a and b != c else 0) + (c if c != a and c != b else 0)
#3
def lucky_sum(a, b, c):
    if a == 13:
        return 0
    if b == 13:
        return a
    if c == 13:
        return a + b
    return a + b + c
#4
def fix_teen(n):
    if 13 <= n <= 19 and n not in (15, 16):
        return 0
    return n

def no_teen_sum(a, b, c):
    return fix_teen(a) + fix_teen(b) + fix_teen(c)
#5
def round10(num):
    return (num + 5) // 10 * 10

def round_sum(a, b, c):
    return round10(a) + round10(b) + round10(c)
