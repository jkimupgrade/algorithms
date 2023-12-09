from collections import Counter

def is_anagram(s: str, t: str) -> bool:
    # # solution 1: store char counts in has map (loop) and compare counts (loop)
    # # time: O(s+t) | space: O(s+t)
    if len(s) != len(t):
        return False
    
    count_s, count_t = {}, {}

    for i in range(len(s)):
        count_s[s[i]] = 1 + count_s.get(s[i], 0)
        count_t[t[i]] = 1 + count_t.get(t[i], 0)
    
    for c in count_s:
        if count_s[c] != count_t.get(c, 0):
            return False
    
    return True

    # solution 2: use Python's Counter
    # time: O(s+t) | space: O(s+t)
    return Counter(s) == Counter(t)
    
    # solution 3: sort and compare
    # time: O(nlog(n)) | space: O(n)
    return sorted(s) == sorted(t)


test1 = is_anagram("anagram", "nagaram")
test2 = is_anagram("rat", "car")
print(f"Test 1: {'Passed' if test1 == True else 'Failed'}")
print(f"Test 2: {'Passed' if test2 == False else 'Failed'}")