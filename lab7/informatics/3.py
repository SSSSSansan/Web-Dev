#A
a = int(input())
b = int(input())

for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=" ")

#B
def find_numbers(a, b, c, d):
    result = [i for i in range(a, b + 1) if i % d == c]
    return result

if __name__ == "__main__":
    a, b, c, d = map(int, input().split())
    print(*find_numbers(a, b, c, d))

#C
import math

def find_perfect_squares(a, b):
    result = [i for i in range(a, b + 1) if math.isqrt(i) ** 2 == i]
    return result

if __name__ == "__main__":
    a, b = map(int, input().split())
    print(*find_perfect_squares(a, b))

#D
def count_digit_occurrences(x, d):
    return str(x).count(str(d))

if __name__ == "__main__":
    x, d = map(int, input().split())
    print(count_digit_occurrences(x, d))

#E
def sum_of_digits(x):
    return sum(int(digit) for digit in str(x))

if __name__ == "__main__":
    x = int(input())
    print(sum_of_digits(x))
#F
def reverse_number(x):
    return int(str(x)[::-1])

if __name__ == "__main__":
    x = int(input())
    print(reverse_number(x))

#G
def smallest_divisor(x):
    for i in range(2, x + 1):
        if x % i == 0:
            return i

if __name__ == "__main__":
    x = int(input())
    print(smallest_divisor(x))
