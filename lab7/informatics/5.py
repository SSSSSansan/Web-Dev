#A
def min_four(a, b, c, d):
    return min(a, b, c, d)

if __name__ == "__main__":
    a, b, c, d = map(int, input().split())
    print(min_four(a, b, c, d))

#B
def power(a, n):
    return a ** n

if __name__ == "__main__":
    a, n = map(float, input().split())
    n = int(n)  
    print(power(a, n))

#C
def xor(x, y):
    return (x + y) % 2  

if __name__ == "__main__":
    x, y = map(int, input().split())
    print(xor(x, y))

