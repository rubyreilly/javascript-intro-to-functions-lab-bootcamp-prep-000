<<<<<<< HEAD
=======
var uppercase="HELLO!"
uppercase.toUpperCase()===uppercase
var lowercase= "hello!"
lowercase.toLowerCase()===lowercase
var mixedCase= "Hi there!"
mixedCase.toLowerCase()===mixedCase
mixedCase.toUpperCase()===mixedCase


>>>>>>> cb051194078fa87141897612fe1f78acd3370ff0
function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
<<<<<<< HEAD
  console.log(string.toUpperCase())
  return string
}
  
  
function logWhisper(string){
  console.log(string.toLowerCase())
  return string
}

function sayHiToGrandma(string){
  if (string.toLowerCase()===string){
    return "I can't hear you!"
  }
  
  if (string.toUpperCase()===string){
    return "YES INDEED!"
  }
  
  if(string==="I love you, Grandma."){
    return "I love you, too."
  }
=======
  console.log(string.toUpperCase)
  return string
}

function logWhisper(string){
  console.log(string.toLowerCase)
  return
}

function sayHiToGrandma(string){
  //if string is LC returns "I can't hear you!"
  //if string is UC returns "YES INDEED!"
  //if string is "I love you, Grandma." returns "I love you,too."
>>>>>>> cb051194078fa87141897612fe1f78acd3370ff0
}