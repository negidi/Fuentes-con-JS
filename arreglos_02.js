let arreglo = []
for (i=0; i< 10; i++)

{
    arreglo.push(parseInt(Math.random()*100))
}
arreglo.sort()

for (i=0; i< arreglo.length; i++)
{
    console.log((i+1)+". "+arreglo[i])
}