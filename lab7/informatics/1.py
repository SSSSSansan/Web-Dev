import math
#A
a = int(input())
b = int(input())

print(math.sqrt(a**2 + b**2))
#B
n = int(input())

print("The next number for the number", n, "is", n + 1, end=".\n")
print("The previous number for the number", n, "is", n - 1, end=".")
#C
N = int(input())
K = int(input())

print(K // N)
#D
N = int(input())
K = int(input())

print(K % N)
#E
v = int(input())
t = int(input())

print((v * t) % 109)
