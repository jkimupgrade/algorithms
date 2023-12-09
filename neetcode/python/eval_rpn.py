def eval_rpn(tokens: list[str]) -> int:
    """
    You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
    Evaluate the expression. Return an integer that represents the value of the expression.

    Time complexity: O(n)
    Memory complexity: O(n)
    """
    stack = []
    for c in tokens:
        if c == "+":
            stack.append(stack.pop() + stack.pop())
        elif c == "-":
            a, b = stack.pop(), stack.pop()
            stack.append(b - a)
        elif c == "*":
            stack.append(stack.pop() * stack.pop())
        elif c == "/":
            a, b = stack.pop(), stack.pop()
            stack.append(int(b / a))
        else:
            stack.append(int(c))

    return stack[0]


test_1 = eval_rpn(["2","1","+","3","*"])
test_2 = eval_rpn(["4","13","5","/","+"])
test_3 = eval_rpn(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])

print(f"test_1: {'Passed' if test_1 == 9 else 'Failed'}")
print(f"test_2: {'Passed' if test_2 == 6 else 'Failed'}")
print(f"test_3: {'Passed' if test_3 == 22 else 'Failed'}")
