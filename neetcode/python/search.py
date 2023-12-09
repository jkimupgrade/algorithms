def search(nums: list[int], target: int) -> int:
    """
    https://leetcode.com/problems/binary-search/
    Time: O(log n)
    """
    l, r = 0, len(nums) - 1

    while l <= r:
        m = l + (r - l) // 2 # prevents overflow
        if nums[m] > target:
            r = m - 1
        elif nums[m] < target:
            l = m + 1
        else:
            return m
    return -1



test_1 = search([-1,0,3,5,9,12], 9)
test_2 = search([-1,0,3,5,9,12], 2)

print(f"Test 1: {'Passed' if test_1 == 4 else 'Failed'}")
print(f"Test 2: {'Passed' if test_2 == -1 else 'Failed'}")