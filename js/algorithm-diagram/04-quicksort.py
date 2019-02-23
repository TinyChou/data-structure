def quick_sort(arr):
    if len(arr) < 2:
        return arr
    else:
        privot = arr[0]
        less = [ i for i in arr[1:] if i <= privot ]
        greater = [ i for i in arr[1:] if i > privot ]
        return quick_sort(less) + [ privot ] + quick_sort(greater)

print quick_sort([ 10, 5, 2, 3 ])
