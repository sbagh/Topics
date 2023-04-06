x =[4, True,'hi']
y='hi'

print(len(x))
print(len(y))

x.append('hello')
print(x)

x.extend([4,5,3,2,5])
print(x)

z=x.pop()
print(z)

x.pop(0)
print(x)
print(x[1])

x[0]='notHi'
print(x[0])

# tuples:
x = (0,0,2,2)

print (x[0])
# tuples are immutable
# x[0]=5
# print(x[0])