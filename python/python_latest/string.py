name = "Talha"

print(name[0])  # Output: T
print(name[1])  # Output: a
print(len(name))  # Output: 5

print(name[:])  # Output: Talha
print(name[1:4])  # Output: alh


print(name[::2])  # Output: Tlh
print(name[::-1])  # Output: ahlaT

second_name = "Python"
full_name = name + " " + second_name
print(full_name)  # Output: Talha Python
full_name = name + "" + second_name
print(full_name)  # Output: TalhaPython

#name[0] = "M"  # This will raise an error because strings are immutable in Python. You cannot change a character in a string by indexing.
print(name)  # Output: Talha

print("My name is " + name + " and I am learning " + second_name)  # Output: My name is Talha and I am learning Python


print(name.upper())  # Output: TALHA
print(name.lower())  # Output: talha

print(name.startswith("T"))  # Output: True
print(name.endswith("a"))  # Output: True
print(name.find("l"))  # Output: 2
print(name.replace("a", "o"))  # Output: Tolho

print(name.removeprefix("Ta"))  # Output: lha
print(name.removesuffix("ha"))  # Output: Tal

# triple quotes allow for multi-line strings, and we can also use single quote 
message = """hi how are you?
I hope you are doing well.
I am learning Python and it's really fun!
"""
print(message)  # Output: hi how are you? I hope you are doing well. I am learning Python and it's really fun!



#now new_name treat as list and we can access the elements of the array using index
new_name=  name.split("l")  # Output: ['Ta', 'ha']

print(new_name)  # Output: ['Ta', 'ha']

print(new_name[0])  # Output: Ta
print(new_name[1])  # Output: ha
print(type(new_name))  # Output: <class 'list'>
name = "Talha"
six_name = "talhaa"
print(len(six_name))
print(len(name))
length_1=len(name)//2
length_2=len(six_name)//2
print("length of name is ", length_1)
print("length of six_name is ", length_2)
print("this is half length slice " + name[:length_1])
print("this is half length slice " + name[:length_2])

#concatenation

name = "ALi"
name_2 = "usman"
name_3 = "Haider"
new_name_1 = "Start"
new_name_1 = name + "" + new_name_1
print(new_name_1)
new_name_1 = new_name_1 + ""+name_3
print(new_name_1)

new_name_1 = name_3 + "" + new_name_1
print(new_name_1)