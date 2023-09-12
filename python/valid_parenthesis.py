def valid_parenthesis(s: str) -> bool:
    """
    Given string 's' containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:
    - Open brackets must be closed by the same type of brackets.
    - Open brackets must be closed in the correct order.
    - Every close bracket has a corresponding open bracket of the same type.

    Time complexity: O(n)
    Memory complexity: O(n)
    """
    stack = []
    close_to_open = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for c in s:
        if c in close_to_open:
            if stack and stack[-1] == close_to_open[c]:
                stack.pop()
            else:
                return False
        else:
            stack.append(c)
    
    return True if not stack else False


test_1 = valid_parenthesis("()")
test_2 = valid_parenthesis("()[]{}")
test_3 = valid_parenthesis("(])")
test_4 = valid_parenthesis(")(")
test_5 = valid_parenthesis("([)]")

print(f"test_1: {'Passed' if test_1 == True else 'Failed'}")
print(f"test_2: {'Passed' if test_2 == True else 'Failed'}")
print(f"test_3: {'Passed' if test_3 == False else 'Failed'}")
print(f"test_4: {'Passed' if test_4 == False else 'Failed'}")
print(f"test_5: {'Passed' if test_5 == False else 'Failed'}")