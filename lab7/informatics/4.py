#A
numbers = list(map(int, input().split()))
print(*numbers[::2])

#B
def even_numbers(lst):
    return [num for num in lst if num % 2 == 0]

if __name__ == "__main__":
    lst = list(map(int, input().split()))
    print(*even_numbers(lst))

#C
def count_positive_numbers(numbers):
    return sum(1 for num in numbers if num > 0)

if __name__ == "__main__":
    numbers = list(map(int, input().split()))
    print(count_positive_numbers(numbers))

#D
def larger_than_previous(numbers):
    result = [numbers[i] for i in range(1, len(numbers)) if numbers[i] > numbers[i - 1]]
    return result

if __name__ == "__main__":
    numbers = list(map(int, input().split()))
    print(*larger_than_previous(numbers))

#E
def first_same_sign_pair(numbers):
    for i in range(len(numbers) - 1):
        if numbers[i] * numbers[i + 1] > 0:  
            return numbers[i], numbers[i + 1]
    return None

if __name__ == "__main__":
    numbers = list(map(int, input().split()))
    result = first_same_sign_pair(numbers)
    if result:
        print(*result)

#F
def count_local_maxima(numbers):
    count = 0
    for i in range(1, len(numbers) - 1):
        if numbers[i] > numbers[i - 1] and numbers[i] > numbers[i + 1]:
            count += 1
    return count

if __name__ == "__main__":
    numbers = list(map(int, input().split()))
    print(count_local_maxima(numbers))

#G
def max_element_and_index(numbers):
    max_value = max(numbers)
    max_index = numbers.index(max_value)
    return max_value, max_index

if __name__ == "__main__":
    numbers = list(map(int, input().split()))
    value, index = max_element_and_index(numbers)
    print(value, index)
