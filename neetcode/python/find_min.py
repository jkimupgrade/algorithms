def find_min(nums: list[int]) -> int:
    """
    https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
    Time: O(log n)
    """
    res = nums[0]
    l, r = 0, len(nums) - 1

    while l <= r:
        if nums[l] < nums[r]:
            res = min(res, nums[l])
            break

        m = (l + r) // 2
        res = min(res, nums[m])
        if nums[m] >= nums[l]:
            l = m + 1
        else:
            r = m - 1
    return res




test_1 = find_min([3,4,5,1,2])
test_2 = find_min([4,5,6,7,0,1,2])
test_3 = find_min([11,13,15,17])

print(f"Test 1: {'Passed' if test_1 == 1 else 'Failed'}")
print(f"Test 2: {'Passed' if test_2 == 0 else 'Failed'}")
print(f"Test 3: {'Passed' if test_3 == 11 else 'Failed'}")
