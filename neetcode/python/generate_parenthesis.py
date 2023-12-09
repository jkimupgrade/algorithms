def generate_parenthesis(n: int) -> list[str]:
    """
    Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
    """
    # only add open parenthesis if open < n
    # only add closing parenthesis if closed < open
    # valid if open == close == n
    stack = []
    res = []

    def backtrack(open_n, closed_n):
        if open_n == closed_n == n:
            res.append("".join(stack))
            return
        
        if open_n < n:
            stack.append("(")
            backtrack(open_n + 1, closed_n)
            stack.pop()

        if closed_n < open_n:
            stack.append(")")
            backtrack(open_n, closed_n + 1)
            stack.pop()
    
    backtrack(0, 0)
    return res


test_1 = generate_parenthesis(3)
test_2 = generate_parenthesis(1)

print(f"test_1: {'Passed' if test_1 == ['((()))','(()())','(())()','()(())','()()()'] else 'Failed'}")
print(f"test_2: {'Passed' if test_2 == ['()'] else 'Failed'}")
