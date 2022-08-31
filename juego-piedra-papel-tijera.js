// crear un juego de piedra papel o tijera con la computadora
var option1 = "piedra";
var option2 = "papel";
var option3 = "tijera";

var resultado = function (user, compu){
if (user !=compu){
   if(user === option1 && compu === option2)
    console.log('compu is the winner')
}
if (user !=compu){
    if(user === option1 && compu === option3)
    console.log ('user is the winner')
}
if (user !=compu){
    if(user === option2 && compu === option1)
    console.log ('user is the winner')
}
if (user !=compu){
    if(user === option2 && compu === option3)
console.log('compu is the winner')
}
if (user !=compu){
    if(user === option3 && compu === option1)
    console.log('compu is the winner')
}
if (user !=compu){
    if(user === option3 && compu === option2)
    console.log('user is the winner')
}
else{
    console.log('again')
}

}
