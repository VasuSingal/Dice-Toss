var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = document.querySelectorAll("img")[0]
var image2 = document.querySelectorAll("img")[1]

image1.setAttribute("src", "images/dice" + randomNumber1 + ".png")

image2.setAttribute("src", "images/dice" + randomNumber2 + ".png")

//if Player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 WINS!"
}

//if Player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 WINS!🚩"
}

//Draw
else {
  document.querySelector("h1").innerHTML = "DRAW!!"
}
