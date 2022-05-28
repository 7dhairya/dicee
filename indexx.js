var randomNumber1=Math.floor(Math.random()*6)+1;
var r1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", r1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var r2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", r2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Tikki mosi wins";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="Dhairya chachu wins";
}
else{
  document.querySelector("h1").innerHTML="--Draw--";
}
