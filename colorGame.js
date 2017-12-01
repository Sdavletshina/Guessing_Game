var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.getElementById("hard");


easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares=3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}

})
hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquares=6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length; i++){
squares[i].style.backgroundColor=colors[i];
squares[i].style.display = "block";

}
})

resetButton.addEventListener("click", function(){
//generate all new colors
colors=generateRandomColors(numSquares);
//pick a new color
pickedColor = pickColor();
//change ColorDisplay to match picked color
colorDisplay.textContent = pickedColor;
for(var i = 0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i]; 
}
h1.style.backgroundColor = "#ffdcb2";
messageDisplay.textContent="";
this.textContent = "New Colors";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i<squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];  

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to picked Color
		if (clickedColor===pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "PLAY AGAIN?"
		} else{
			this.style.backgroundColor="#232323";
			this.style.border="none";
			messageDisplay.textContent="Try Again"
	}
		


	});
}
function changeColors(color) {
//loop through all squares
for(var i=0; i<squares.length; i++){
	//change each color to match given color
	squares[i].style.backgroundColor = color;
}

}
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i=0; i<num; i++){
		// get random color and push into arr	
		arr.push(randomColor())

	}
	//return that array 
	return arr;

}
function randomColor(){
	//pick a 'red' from 0 to 255;
	var r = Math.floor(Math.random() * 256);
	//pick a 'green' from 0 to 255;
	var g = Math.floor(Math.random() * 256);
	//pick a 'blue' from 0 to 255;
	var b = Math.floor(Math.random() * 256);



	return "rgb(" + r +", " + g + ", " + b +")";
}