def search_in_rotated_sorted_array(nums: list[int], target: int) -> int:
    """
    https://leetcode.com/problems/search-in-rotated-sorted-array/
    
    Time: O(log n)
    """
    l, r = 0, len(nums) - 1

    while l <= r:
        mid = (l + r) // 2
        if target == nums[mid]:
            return mid
        
        # left sorted portion
        if nums[l] <= nums[mid]:
            if target > nums[mid] or target < nums[l]:
                l = mid + 1
            else:
                r = mid - 1
        # right sorted portion
        else:
            if target < nums[mid] or target > nums[r]:
                r = mid - 1
            else:
                l = mid + 1
    
    return -1

test_1 = search_in_rotated_sorted_array([4,5,6,7,0,1,2], 0)
test_2 = search_in_rotated_sorted_array([4,5,6,7,0,1,2], 3)
test_3 = search_in_rotated_sorted_array([1], 0)

print(f"Test 1: {'Passed' if test_1 == 4 else 'Failed'}")
print(f"Test 2: {'Passed' if test_2 == -1 else 'Failed'}")
print(f"Test 3: {'Passed' if test_3 == -1 else 'Failed'}")