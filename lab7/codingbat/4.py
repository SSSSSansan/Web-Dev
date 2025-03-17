#1
def first_last6(nums):
    return nums[0] == 6 or nums[-1] == 6
#2
def same_first_last(nums):
    return len(nums) >= 1 and nums[0] == nums[-1]
#3
def make_pi():
    return [3, 1, 4]
#4
def common_end(a, b):
    return a[0] == b[0] or a[-1] == b[-1]
#5
def sum3(nums):
    return sum(nums)
#6
def rotate_left3(nums):
    return nums[1:] + [nums[0]]

