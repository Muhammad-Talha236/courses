number = True
print(number)
print(type(number))

a = 1

print(a == number) # True, because 'a' is an integer with a value of 1, while 'number' is a boolean with a value of True. In Python, True is equivalent to 1 and False is equivalent to 0 when used in numeric contexts, but they are different types.

print(a is number) # False, because 'a' and 'number' are different objects in memory. The 'is' operator checks for object identity, not value equality.

print( number == 20)
print(number == 19)

new_number = False
print(new_number)

print( a >= 1)

c = a >=1

print(c)
print(type(c)) # <class 'bool'>, because the result of the comparison 'a >= 1' is a boolean value (True or False).

d = True +1 
e = False + 1
f = True + True
g = False + False

print(d) # 2, because True is treated as 1 in numeric contexts.
print(e) # 1, because False is treated as 0 in numeric contexts.
print(f) # 2, because both True values are treated as 1 in numeric contexts.
print(g) # 0, because both False values are treated as 0 in numeric contexts.

print(type(d)) # <class 'int'>, because the result of adding a boolean and an integer is an integer.
print(type(e)) # <class 'int'>, because the result of adding a boolean and an integer is an integer.
print(type(f)) # <class 'int'>, because the result of adding two boolean values is an integer.
print(type(g)) # <class 'int'>, because the result of adding two boolean values is an integer.

print( True + 1) # 2, because True is treated as 1 in numeric contexts.
print( False + 1) # 1, because False is treated as 0 in
print( True + True) # 2, because both True values are treated as 1 in numeric contexts.
print( False + False) # 0, because both False values are treated as 0 in numeric contexts.