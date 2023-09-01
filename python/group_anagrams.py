from collections import defaultdict


def group_anagrams(strs: list[str]) -> list[list[str]]:
    # solution 1: O(n*m) time + O(m)
    # n=average length of each str
    # m=length of strs list
    res = defaultdict(list) # mapping char count to list of anagrams

    for str in strs:
        count = [0] * 26 # a...z

        for char in str:
            count[ord(char) - ord("a")] += 1
        
        res[tuple(count)].append(str)

    return res.values()
    


test1 = group_anagrams(["eat","tea","tan","ate","nat","bat"])
test2 = group_anagrams([""])
test3 = group_anagrams(["a"])
print(f"Test 1: {'Passed' if list(test1) == [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']] else 'Failed'}")
print(f"Test 2: {'Passed' if list(test2) == [['']] else 'Failed'}")
print(f"Test 3: {'Passed' if list(test3) == [['a']] else 'Failed'}")