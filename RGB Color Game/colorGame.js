
var numSquare = 6;
var colors = [];
var squares = document.querySelectorAll("#squares");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length;i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		//this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
		if (this.textContent === "Easy") {
			numSquare = 3;
		}else{
			numSquare = 6;
		}
		reset();
	});
}
}

function setupSquares(){
	for (var i = 0; i< squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			messageDisplay.classList.remove("wrong");
			messageDisplay.classList.add("correct");
			resetButton.textContent = "Play Again!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}	
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!";
			messageDisplay.classList.add("wrong");
			messageDisplay.classList.remove("correct");
		}
	});
}
}


/*easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquare = 3;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor;
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquare = 6;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor;
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		
	}
});*/

resetButton.addEventListener("click", function(){
	reset();
	/*colors = generateRandomColors(numSquare);
	pickedColor = pickColor(1);
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i< squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";*/
});

//colorDisplay.textContent = pickColor;



function changeColors(color){
	for(var i= 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}