# splits a string into a collection based on the delimiter
# input 
# * value: the string to be split
# * delimiter: the splitting delimter
# output: an array of strings

def stringSplit(string, delimiter)
  return string.split(delimiter)
end
  

# test
pipe = 'hello | my | name | is | Jim | Kim | .'
hat = 'hello ^ my ^ name ^ is ^ Jim ^ Kim ^ .'
ampersand = 'hello & my & name & is & Jim & Kim & .'
tilde = 'hello ~ my ~ name ~ is ~ Jim ~ Kim ~ .'
escape = 'hello \ my \ name \ is \ Jim \ Kim \ .'

pipeTest = stringSplit(pipe, '|')
puts "pipe delimited => #{pipeTest}"

hatTest = stringSplit(hat, '^')
puts "hat delimited => #{hatTest}"

ampersandTest = stringSplit(ampersand, '&');
puts "ampersand delimited => #{ampersandTest}"

tildeTest = stringSplit(tilde, '~')
puts "tilde delimited => #{tildeTest}"

escapeTest = stringSplit(escape, '\\')
puts "escape delimited => #{escapeTest}"
