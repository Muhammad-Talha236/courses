# This is an example of an octal number in Python 2.x. In Python 3.x, octal numbers are represented with a '0o' prefix.
#number = 034323444

number = 34323444
print(number)

print(type(number))

#python supports integers of arbitrary size. This means that you can work with very large integers without worrying about overflow errors. In Python 3.x, the int type can handle arbitrarily large integers, limited only by the available memory of your system.
number = 999999999999999999999999999999999999999999999999999999999999999999
print(number)
print(type(number))


a = 10
b= 20
c = a/b #type of c will be float because in python 3.x, the division operator (/) always returns a float, even if both operands are integers. If you want to perform integer division and get an integer result, you can use the floor division operator (//).
d = a//b #type of d will be int because the floor division operator (//) returns the largest integer less than or equal to the result of the division.
print(a/b)
print(type(c))
print(type(d))

#python supports binary, octal, and hexadecimal number systems. You can represent numbers in these systems using specific prefixes
population = 1000000000
print(population)
a  = 1_000_000_000
print(a)

print(a == population) # True because both a and population have the same value of 10000000000, even though they are represented differently (a uses underscores for readability). The comparison operator (==) checks for equality of values, not representation.

#python supports binary, octal, and hexadecimal number systems. You can represent numbers in these systems using specific prefixes:
decimal_number = 42
binary_number = 0b101010  # binary representation of 42
octal_number = 0o52      # octal representation of 42
hexadecimal_number = 0x2A  # hexadecimal representation of 42

print("Decimal:", decimal_number)
print("Binary:", binary_number)
print("Octal:", octal_number)
print("Hexadecimal:", hexadecimal_number)