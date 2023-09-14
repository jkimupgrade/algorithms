def car_fleet(target: int, position: list[int], speed: [int]) -> int:
    """
    https://leetcode.com/problems/car-fleet/
    """
    pair = [[p, s] for p, s in zip(position, speed)]
    stack = []

    for p, s in sorted(pair)[::-1]: # reverse sorted order
        stack.append((target - p) / s)
        if len(stack) >= 2 and stack[-1] <= stack[-2]:
            stack.pop()
    return len(stack)



test_1 = car_fleet(target=12, position=[10,8,0,5,3], speed=[2,4,1,1,3])
test_2 = car_fleet(target=10, position=[3], speed=[3])
test_3 = car_fleet(target=100, position=[0,2,4], speed=[4,2,1])

print(f"Test 1: {'Passed' if test_1 == 3 else 'Failed'}")
print(f"Test 2: {'Passed' if test_2 == 1 else 'Failed'}")
print(f"Test 3: {'Passed' if test_3 == 1 else 'Failed'}")