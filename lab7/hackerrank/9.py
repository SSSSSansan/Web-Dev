import numpy as np

n, m = map(int, input().split())
A = np.array([list(map(int, input().split())) for _ in range(n)])
B = np.array([list(map(int, input().split())) for _ in range(n)])

print(A + B)
print(A - B)
print(A * B)
print(A // B)
print(A % B)
print(A ** B)
