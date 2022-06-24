function nomeIdade(nome,idade){
  if (idade>=18){
    return (`${nome}, é maior de idade e tem ${idade} anos.`)
} else{
  return  (`${nome}, é menor de idade e tem ${idade} anos.`)
}
}

console.log(nomeIdade('Maia',4));
console.log(nomeIdade('Princesa',14));
console.log(nomeIdade('Jade',10));
console.log(nomeIdade('Thifanny',12));
