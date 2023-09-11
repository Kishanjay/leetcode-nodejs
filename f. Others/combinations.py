def combinations(chars):

  #  "", [a,b,c]
  # "a", [b,c]
  # "ab", [c]
  # "abc", []
  # "ac", [b]
  
  def gen(base, options):
    if len(options) == 0:
      return [base]

    result = []

    for i in range(len(options)):
      remaining_options = options.copy() # a,b,c

      # a
      cur_option = remaining_options.pop(i) # b, c

      # a .... [b,c]
      result.extend(gen(base+cur_option, remaining_options))

    return result

  result = gen("", chars)
  print(result)
    

combinations(["a","b","c"])


# combinations unique full length
# abc, acb, bac, bca, cab, cba


# combinations dupplicates full length
# aaa, aab, aac, aba, abb, abc, aca, acb, acc, ... etc.


# combinations unique any length
# a, b, c, ab, ac, ba, bc, ca, cb, abc, acb, bac, bca, cab, cba


# combinations dupplicates any length
# a, b, c, aa, ab, ac, ba, bb, bc, ca, cb, cc, aaa, aab, aac, aba, abb, abc, aca, acb, acc



# ""a, ""b, ""c

# ""aa, ""ab, ""ac, ""ba, ""bb, ""bc