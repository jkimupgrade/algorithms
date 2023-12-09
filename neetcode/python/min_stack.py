class MinStack:
    """
    Design a stack that supports push, pop, top, and retrieving the minimum element in constant time
    """

    def __init__(self):
        self.stack = []
        self.minStack = []
    
    def push(self, val: int) -> None:
        self.stack.append(val)
        val = min(val, self.minStack[-1] if self.minStack else val)
        self.minStack.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.minStack.pop()
    
    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]
    

obj = MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
param_1 = obj.getMin()
obj.pop()
param_2 = obj.top()
param_3 = obj.getMin()

print(f"param_1: {'Passed' if param_1 == -3 else 'Failed'}")
print(f"param_2: {'Passed' if param_2 == 0 else 'Failed'}")
print(f"param_3: {'Passed' if param_3 == -2 else 'Failed'}")