
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".squares");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#newColors");
var modeButtons = document.querySelectorAll(".mode");

init()

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
	})
}
}

function setUpSquares(){
	for (var i=0; i<squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked squares
		var clickedColor=this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor===pickedColor){
			message.textContent="Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again?"
		} else{
			message.textContent="Try Again!";
			this.style.backgroundColor="#444243";
		}
	})
}
}

function reset(){
	//generate all new colors
	colors = generateRandomColor(numSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent=pickedColor;
	h1.style.backgroundColor="#b24e79";
	message.textContent="";
	resetButton.textContent="New Colors";
	//change colors of squares
	for (var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i=0; i<squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i=0; i<num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r  + ", " + g + ", " + b + ")"
}
