def print_all_braces_rec(n, left_count, right_count, output, result):
  if left_count >= n and right_count >= n:
    result.append(copy.copy(output));
    
  if left_count < n:
    output += '{'
    print_all_braces_rec(n, left_count + 1, right_count, output, result)
    output.pop()

  if right_count < left_count:
    output += '}'
    print_all_braces_rec(n, left_count, right_count + 1, output, result)
    output.pop()

def print_all_braces(n):
  output = []
  result = []
  print_all_braces_rec(n, 0, 0, output, result)
  return result

result = print_all_braces(3)

for rs in result: 
  print(rs)
