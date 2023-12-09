def largest_rectangle_area(heights: list[int]) -> int:
    """
    Given an array of integers 'heights' representing the histogram's bar height
    where the width of each bar is '1', return the area of the largest rectangle
    in the histogram
    https://leetcode.com/problems/largest-rectangle-in-histogram/
    Time: O(n)
    Space: O(n)
    """
    max_area = 0
    stack = [] # pair: (index, height)

    for i, h in enumerate(heights):
        start = i
        while stack and stack[-1][1] > h:
            index, height = stack.pop()
            max_area = max(max_area, height * (i - index))
            start = index
        stack.append((start, h))
    
    for i, h in stack:
        max_area = max(max_area, h * (len(heights) - i))
    
    return max_area



test_1 = largest_rectangle_area([2,1,5,6,2,3])
test_2 = largest_rectangle_area([2,4])

print(f"Test 1: {'Passed' if test_1 == 10 else 'Failed'}")
print(f"Test 2: {'Passed' if test_2 == 4 else 'Failed'}")