def sum_loop(arr):
    total = 0

    for x in arr:
        total += x

    return total

def sum_recursive(arr):
    if arr == [] :
        return 0
        
    return arr[0] + sum_recursive(arr[1:])

my_arr = [ 1, 2, 3, 4, 5 ]
print sum_loop(my_arr)
print sum_recursive(my_arr)
