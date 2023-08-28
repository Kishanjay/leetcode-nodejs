def is_palindrome1(s):
  for i in range(len(s) / 2):
    startIndex = i
    endIndex = len(s)-1-i

    if (s[startIndex] != s[endIndex]):
      return False
  return True


def is_palindrome2(s): 
  rev_s = s[::-1]
  return s == rev_s

def is_palindrome3(s):
  if (len(s) <= 1): 
    return True
  
  if (s[0] != s[len(s)-1]):
    return False
  
  
  return is_palindrome3(s[1, len(s)-2])
  
