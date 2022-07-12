def find_max_sum_sub_array(A):
  if len(A) < 1:
    return 0

  curr_max = A[0]
  global_max = A[0]
  lengthA = len(A)
  for i in range(1, lengthA):
    if curr_max < 0:
      curr_max = A[i]
    else:
      curr_max += A[i]
    if global_max < curr_max:
      global_max = curr_max
  return global_max

v = [-4, 2, -5, 1, 2, 3, 6, -5, 1]
sum = find_max_sum_sub_array(v)
print("Sum of largest subarray: " + str(sum))
