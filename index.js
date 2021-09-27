var random1 = Math.random();
random1 = Math.floor(random1 *6) +1;
var randomDiceImage1 = "images/dice" + random1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);


var random2 = Math.floor(Math.random() * 6) +1;

var randomDiceImage2 = "images/dice" + random2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if(random1 > random2)
document.querySelector("h1").innerHTML = "Player 1 Wins";
else if(random1 < random2)
document.querySelector("h1").innerHTML = "Player 2 Wins";
else
document.querySelector("h1").innerHTML = "Draw";
