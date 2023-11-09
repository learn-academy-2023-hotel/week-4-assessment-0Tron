# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
reposts1 = 7
reposts2 = 42
reposts3 = 221
# Expected output: '7 is odd'
# Expected output: '42 is even'
# Expected output: '221 is odd'

def check_num value
    if value.odd?
        'odd'
    else
        'even'
    end
end

# p check_num reposts1
# p check_num reposts2
# p check_num reposts3
p "#{reposts1} is #{check_num reposts1}"
p "#{reposts2} is #{check_num reposts2}"
p "#{reposts3} is #{check_num reposts3}"
# output:
# "7 is odd"
# "42 is even"
# "221 is odd"

# Pseudo code:
# I started by calling my method check_num and my argument value. 
# I made a conditional statement by passing the value(argument) through the built in method called .odd? and closing it out with end.

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
beatles_album2 = 'Sgt Pepper'
beatles_album3 = 'Abbey Road'
# Expected output: 'Rbbr Sl'
# Expected output: 'Sgt Pppr'
# Expected output: 'bby Rd'

def no_vowels value
    value.delete('aeiouAEIOU')
end

p no_vowels beatles_album1
p no_vowels beatles_album2
p no_vowels beatles_album3

#output:
# "Rbbr Sl"
# "Sgt Pppr"
# "bby Rd"

# Pseudo code:
# I started by calling my method no_vowels and my argument value
# i passed my argument and then used the .delete method to get rid of any vowels in the strings

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
palindrome_test_case2 = 'LEARN'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Racecar is a palindrome'
# Expected output: 'LEARN is not a palindrome'
# Expected output: 'Rotator is a palindrome'

def palindrome value 
    new_value = value.downcase
    new_value == new_value.reverse
end

# p palindrome palindrome_test_case1 (True)
# p palindrome palindrome_test_case2 (False)
# p palindrome palindrome_test_case3 (True)
p "#{palindrome_test_case1} is a palindrome"
p "#{palindrome_test_case2} is not a palindrome"
p "#{palindrome_test_case3} is a palindrome"

# Pseudo code:
# Created a method called palindrome with an argument called value
# we used the .downcase method to convert everything into lowercase
# at first i didnt do this and i kept getting a false for Racecar and then i realized that the first letter didn't match. i tested it by lowering the first R and it worked, thats when i knew i had to lower the entire string.
# the new value (which is now lowercase) checks to see if the string is the same when reversed.