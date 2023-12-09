def topk_frequent(nums: list[int], k: int) -> list[int]:
    # solution 1: bucket sort
    # O(n) time + O(n) space
    count = {}
    freq = [[] for i in range(len(nums) + 1)]

    for n in nums:
        count[n] = 1 + count.get(n, 0)
    for n, c in count.items():
        freq[c].append(n)
    
    res = []

    for i in range(len(freq) - 1, 0, -1):
        for n in freq[i]:
            res.append(n)
            if (len(res) == k):
                return res



test1 = topk_frequent([1,1,1,2,2,3], 2)
test2 = topk_frequent([1], 1)
print(f"Test 1: {'Passed' if test1 == [1, 2] else 'Failed'}")
print(f"Test 2: {'Passed' if test2 == [1] else 'Failed'}")