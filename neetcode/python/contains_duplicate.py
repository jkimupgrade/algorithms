def contains_duplicate(nums: list[int]) -> bool:
    # solution 1: time O(n) | space O(n)
    seenBefore = {}
    for idx, num in enumerate(nums, start=1):
        if seenBefore.get(num):
            return True
        else:
            seenBefore[num] = idx
    return False

    # solution 2: time O(n) | space O(n)
    uniqueNums = set()
    for num in nums:
        if num in uniqueNums:
            return True
        uniqueNums.add(num)
    return False

    # solution 3: time O(n) | space O(n)
    return len(nums) != len(set(nums))



test1 = contains_duplicate([1,2,3,1])
test2 = contains_duplicate([1,2,3,4])
test3 = contains_duplicate([1,1,1,3,3,4,3,2,4,2])
print(f"[1,2,3,1]: {'Passed' if test1 == True else 'Failed'}")
print(f"[1,2,3,4]: {'Passed' if test2 == False else 'Failed'}")
print(f"[1,1,1,3,3,4,3,2,4,2]: {'Passed' if test3 == True else 'Failed'}")