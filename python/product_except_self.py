def product_except_self(nums: list[int]) -> list[int]:
    # O(n) time + O(n) memory
    res = [1] * len(nums)

    prefix = 1
    for i in range(len(nums)):
        res[i] = prefix
        prefix *= nums[i]
    postfix = 1
    for i in range(len(nums)-1, -1, -1):
        res[i] *= postfix
        postfix *= nums[i]
    
    return res



nums1 = [1, 2, 3, 4]
nums2 = [-1, 1, 0, -3, 3]
print(f"Test 1: {'Passed' if product_except_self(nums1) == [24, 12, 8, 6] else 'Failed'}")
print(f"Test 2: {'Passed' if product_except_self(nums2) == [0, 0, 9, 0, 0] else 'Failed'}")

