#1
def count_evens(nums):
    return sum(1 for num in nums if num % 2 == 0)
#2
def big_diff(nums):
    return max(nums) - min(nums)
#3
def centered_average(nums):
    nums.sort()
    return sum(nums[1:-1]) // (len(nums) - 2)
#4
def sum13(nums):
    total = 0
    skip = False
    for num in nums:
        if num == 13:
            skip = True
            continue
        if skip:
            skip = False
            continue
        total += num
    return total
#5
def sum67(nums):
    total = 0
    ignore = False
    for num in nums:
        if num == 6:
            ignore = True
        elif num == 7 and ignore:
            ignore = False
        elif not ignore:
            total += num
    return total


