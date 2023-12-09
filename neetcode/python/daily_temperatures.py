def daily_temperatures(temperatures: list[int]) -> list[int]:
    """
    Given an array of integers 'temperatures' represents the daily tempeatures, 
    return an array 'answer' such that 'answer[i]' is the number of days you 
    have to wait after the 'ith' day to get a warmer temperature. If there is no
    future day for which this is possible, keep 'answer[i] == 0' instead. 
    """
    res = [0] * len(temperatures)
    stack = [] # pair: [temp, index]

    for i, t in enumerate(temperatures):
        while stack and t > stack[-1][0]:
            stack_t, stack_i = stack.pop()
            res[stack_i] = (i - stack_i)
        stack.append([t, i])
    return res


test_1 = daily_temperatures([73,74,75,71,69,72,76,73])
test_2 = daily_temperatures([30,40,50,60])
test_3 = daily_temperatures([30,60,90])

print(f"test_1: {'Passed' if test_1 == [1,1,4,2,1,1,0,0] else 'Failed'}")
print(f"test_2: {'Passed' if test_2 == [1,1,1,0] else 'Failed'}")
print(f"test_3: {'Passed' if test_3 == [1,1,0] else 'Failed'}")
