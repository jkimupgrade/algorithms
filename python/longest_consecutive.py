def longest_consecutive(nums: list[int]) -> int:
    """
    Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.
    You must write an algorithm that runs in `O(n)` time

    time: O(n)
    memory: O(n)
    """
    num_set = set(nums)
    longest = 0

    for n in nums:
        # check if n is start of a sequence
        if (n - 1) not in num_set:
            length = 0
            while (n + length) in num_set:
                length += 1
            longest = max(length, longest)
    return longest


test1 = longest_consecutive([100,4,200,1,3,2]);
test2 = longest_consecutive([0,3,7,2,5,8,4,6,0,1]);
print(f"Test 1: {'Passed' if test1 == 4 else 'Failed'}")
print(f"Test 2: {'Passed' if test2 == 9 else 'Failed'}")


