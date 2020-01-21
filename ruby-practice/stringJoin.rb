# joins 2 strings by delimiter
# input(s)
# * delimiter - the string to join on
# * value1 - the first string value
# * value2 - the second string value
# output: string with the values joined

def stringJoin (string1, string2, delimiter)
  return "#{string1} #{delimiter} #{string2}"
end

# test
string1 = 'hello'
string2 = 'world'
delimiter = '|'
test = stringJoin(string1, string2, delimiter)
puts "pipe delimited => #{test}"