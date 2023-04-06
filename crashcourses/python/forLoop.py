for i in range(10):
    print(i)
    
# range: start, stop (up to but not include), step
# if 1 argument: it will be stop (defualt start is 0 and step 1)

for i in range (10, -1, -1):
    print(i)
    
    
x = [3,4,5,34,2,6]

for i in range(len(x)):
    print("x[i] is", x[i])
    
# or enumerate

for  i, element in enumerate(x):
    print(i, element)