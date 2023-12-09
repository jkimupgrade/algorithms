def two_sum(nums: list[int], target: int) -> list[int]:
    # solution 1: O(n) space + O(n) time
    prev_map = {}
    for idx, num in enumerate(nums):
        diff = target - num
        if diff in prev_map:
            return [prev_map[diff], idx]
        prev_map[num] = idx
    return 


test1 = two_sum([2,7,11,15], 9)
test2 = two_sum([3,2,4], 6)
test3 = two_sum([3,3], 6)
print(f"Test 1: {'Passed' if test1 == [0, 1] else 'Failed'}")
print(f"Test 2: {'Passed' if test2 == [1, 2] else 'Failed'}")
print(f"Test 3: {'Passed' if test3 == [0, 1] else 'Failed'}")