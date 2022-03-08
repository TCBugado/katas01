function oneThroughTwenty() {
  let crescente = []
  for(let i=1; i<=20; i++){
    crescente.push(i)
  } 
  return crescente
}

oneThroughTwenty();

function evensToTwenty() {
let pares = []
for(let i=1; i<=20; i++){
  if(i % 2 === 0){
    pares.push(i)
    }
}
return pares
}

evensToTwenty()

function oddsToTwenty() {
  let impares = []
  for(let i=1; i<=20; i++){
    if(i % 2 !== 0){
    impares.push(i)
    }
}
return impares
}

oddsToTwenty()

function multiplesOfFive() {
  let multiplos5 = []
  for(let i=1; i<=100; i++){
    if(i % 5 === 0){
    multiplos5.push(i)
    }
}
return multiplos5
}

multiplesOfFive()

function squareNumbers() {
let quadradosPerfeitos = []
for(let i=1; i<=10; i++){
  quadradosPerfeitos.push(i**2)
  }
  return quadradosPerfeitos
}

squareNumbers()

function countingBackwards() {
let decrescente = []
for(let i=20; i>0; i--){
  decrescente.push(i)
}
return decrescente
}

countingBackwards()

function evenNumbersBackwards() {
let paresDecrescente = []
for(let i=20; i>0; i--){
  if(i % 2 === 0){
  paresDecrescente.push(i)
  }
}
return paresDecrescente
}

evenNumbersBackwards()

function oddNumbersBackwards() {
let imparesDecrescente = []
for(let i=20; i>0; i--){
  if(i % 2 !== 0){
  imparesDecrescente.push(i)
  }
}
return imparesDecrescente
}

oddNumbersBackwards()

function multiplesOfFiveBackwards() {
let multiplos5Decrescente = []
for(let i=100; i>0; i--){
  if(i % 5 === 0){
  multiplos5Decrescente.push(i)
  }
}
return multiplos5Decrescente
}

multiplesOfFiveBackwards()

function squareNumbersBackwards() {
  let quadradosPerfeitosDecrescente = []
 for(let i=10; i>0; i--){
    quadradosPerfeitosDecrescente.push(i**2)
 }
 return quadradosPerfeitosDecrescente
}

squareNumbersBackwards()
