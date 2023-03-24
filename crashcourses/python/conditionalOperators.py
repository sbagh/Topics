# == is euqal, != is not equal..etc

x='heLlo'
y='hello'

# print(x != y)
# print(x == y)
# print ('a'> 'Z')

# print(ord('Z'))
# print(ord('z'))

# chained conditions
x=7
y=8
z=0

result1 = x==y
result2 = y>x
result3 = z < x+2

#use and, or, not to chain conditionals together
result4 = result1 or result2
print(result4)

result4 = result1 or not result2
print(result4)

result4 = result1 or result2 or result3
print(result4)

result4 = result1 and result2
print(result4)
