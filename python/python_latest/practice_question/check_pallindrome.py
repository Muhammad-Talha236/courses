name = "abba"
length = len(name)

i=0
j=length - 1
is_pallindrom = True

while i<j:
    if(name[i]!=name[j]):
        is_pallindrom = False
        break
    i=i+1
    j = j-1

if(is_pallindrom):
    print("String is pallindrom "+name)
else:
    print("string is not pallindrome "+name)