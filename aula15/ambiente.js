 let num = [ 5,8,2,9,3]
 num.sort()
 num.push(1)
 console.log(num)
 console.log(`O vetor tem ${num.length} posições`)
 console.log(`O primeiro valor é ${num[1]}`)
 let pos = num.indexOf(4)
 if ( pos== -1){
    console.log('Não existe esse elemento')
 } else {
    console.log(`o valor 8 está na posição ${pos}`)
 }
 