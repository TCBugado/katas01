function oneThroughTwenty(array) {
    let contador = 0 
    for(let array=1; array<=20; array++){
      contador ++
      return contador
      // console.log([i])
    } 
}

 oneThroughTwenty();

function evensToTwenty() {
    
  for(let i=1; i<=20; i++){
    if(i % 2 === 0){
      console.log([i])
      }
  }
  
}

evensToTwenty()

function oddsToTwenty() {
    
    for(let i=1; i<=20; i++){
      if(i % 2 !== 0){
      console.log([i])
      }
  }
   
}

oddsToTwenty()

function multiplesOfFive() {
    
    for(let i=1; i<=100; i++){
      if(i % 5 === 0){
      console.log([i])
      }
  }

}

multiplesOfFive()

function squareNumbers() {
    
  for(let i=1; i<=10; i++){
    console.log(i**2)
    }
    
}

squareNumbers()

function countingBackwards() {
    
  for(let i=20; i>0; i--){
    console.log([i])
  }
}

countingBackwards()

function evenNumbersBackwards() {
    
  for(let i=20; i>0; i--){
    if(i % 2 === 0){
    console.log([i])
    }
 
  }
  
}

evenNumbersBackwards()

function oddNumbersBackwards() {
 
  for(let i=20; i>0; i--){
    if(i % 2 !== 0){
    console.log([i])
    }
  }
  
}

oddNumbersBackwards()

function multiplesOfFiveBackwards() {
    
  for(let i=100; i>0; i--){
    if(i % 5 === 0){
    console.log([i])
    }
  }
  
}

multiplesOfFiveBackwards()

function squareNumbersBackwards() {
    
   for(let i=10; i>0; i--){
      console.log(i**2)
   }
}

squareNumbersBackwards()
