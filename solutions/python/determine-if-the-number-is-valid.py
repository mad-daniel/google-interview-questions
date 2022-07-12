class STATE:
    START, INTEGER, DECIMAL, UNKNOWN, AFTER_DECIMAL = range(5)

def get_next_state(current_state, ch):
  if (current_state == STATE.START or
        current_state == STATE.INTEGER):
    if ch == '.':
      return STATE.DECIMAL
    elif ch >= '0' and ch <= '9':
      return STATE.INTEGER
    else:
      return STATE.UNKNOWN
      
  if current_state == STATE.DECIMAL:
    if ch >= '0' and ch <= '9':
      return STATE.AFTER_DECIMAL
    else:
      return STATE.UNKNOWN
    
  if current_state == STATE.AFTER_DECIMAL:
    if ch >= '0' and ch <= '9':
      return STATE.AFTER_DECIMAL
    else:
      return STATE.UNKNOWN
  return STATE.UNKNOWN

def is_number_valid(s):
  if not s: 
    return True

  i = 0
  if s[i] == '+' or s[i] == '-':
    i = i + 1

  current_state = STATE.START

  for c in s[i:]:
    current_state = get_next_state(current_state, c)
    if current_state == STATE.UNKNOWN:
      return False
    i = i + 1
   
  if current_state == STATE.DECIMAL:
    return False;
  
  return True


def test(s, expected):
  is_valid = is_number_valid(s)
  print(s, is_valid)
  assert is_valid == expected

def main():
  test("4.325", True)
  test("4.325a", False)
  test("x4.325", False)
  test("4.32.5", False)
  test("4325", True)
  test("1.", False)
  test("1.1.", False)
  test("1.1.1", False)
  test("1.1.1.", False)
  test("+1.1.", False)
  test("+1.1", True)
  test("-1.1.", False)
  test("-1.1", True)
  test("", True)
main()
