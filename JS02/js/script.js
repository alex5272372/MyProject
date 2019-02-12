let m, n;
do {
    m = prompt('Input first number', '');
} while (m !== null && (isNaN(m) || m <= 1 || m != parseInt(m)));
while (m !== null) {
    n = prompt(`First number is ${m}, input second number`, '');
    if (n === null || !isNaN(n) && n > m && n == parseInt(n)) break;
}
let simpleNumbers = [];

/*from math import sqrt
n = input("n=")
lst=[]
for i in xrange(2, n+1):
for j in lst:
if j > int((sqrt(i)) + 1):
lst.append(i)
break
if (i % j == 0):
break
else:
lst.append(i)
print lst*/
