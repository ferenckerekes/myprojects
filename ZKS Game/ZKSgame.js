//alert("Kedvenc szinem a zöld. Te a kék, S én a sárga.");
/*var game = {}

game.init = function(){
	reset();
	playing();
	verify();
	
}
*/

var squares = document.querySelectorAll("#squares");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var name1 = document.querySelector("#name1");
var name2 = document.querySelector("#name2");
var gameTitle = document.querySelector("#gameTitle");
var nextButton = document.querySelector("#nextRound");
var big1 = document.querySelector(".big1");
var big2 = document.querySelector(".big2");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var playerOne = 1;
var playerTwo = 2;
var nextRoundScore = 1;
//var playerSelected;
var activPlayerColor = "blue";
var activPlayer = playerOne;
var playerOneName = "";
var playerTwoName = "";
var winGame = false;
var winRound = false;
numInput.value = 1;

//init();

/*function init(){
	playing();
	verify();
	reset();
}*/




playing();



function playing(){

for(var i = 0; i < squares.length; i++){
	squares[i].value = 0;
	

	squares[i].addEventListener("click", function(){


		if (this.value === 0 && winGame === false && winRound === false) {
			this.style.background = activPlayerColor;
			this.value = activPlayer;
			//activPlayerName();
			changePlayer();
			
			changeColor();
			verify();

		}
	});
}
}



resetButton.addEventListener("click", function(){
	reset();
	//messageDisplay.style.color = "steelblue";
});

nextButton.addEventListener("click", function(){
	nextRoundScore++;
	nextRound();
	//messageDisplay.style.color = "steelblue";
});


numInput.addEventListener("change", function(){
	changeInput();
});



function changeInput(){
	if (Number(numInput.value) > 9) {
		numInput.value = 9;
	} else if(Number(numInput.value) < 1){
		numInput.value = 1;
	}
}

function changeColor() {
	if(activPlayerColor === "blue"){
		activPlayerColor = "yellow";
	} else {
		activPlayerColor = "blue";
	}
}

function changePlayer(){
	if(activPlayer === playerOne){
		activPlayer = playerTwo;
		activPlayerName();
	} else {
		activPlayer = playerOne;
		activPlayerName();
	}
}

function changeActivPlayer(){
	if (nextRoundScore % 2 !== 0) {
		activPlayer = playerOne;
	} else {
		activPlayer = playerTwo;
	}
}

function changeActivPlayerColor(){
	if (nextRoundScore % 2 !== 0) {
		activPlayerColor = "blue";
	} else {
		activPlayerColor = "yellow";
	}
}

function activPlayerName(){
	if (activPlayer === playerOne && 
		playerOneName !== "" && 
		playerOneName !== "Name" && 
		playerOneName !== undefined && 
		playerOneName !== null) {
		//playerOneName.style.color = "blue";
		messageDisplay.textContent = "Activ: " + playerOneName;
	} else if (activPlayer === playerTwo && 
		playerTwoName !== "" && 
		playerTwoName !== "Name" && 
		playerTwoName !== undefined && 
		playerTwoName !== null) {
		//playerTwoName.style.color = "yellow";
		messageDisplay.textContent = "Activ: " + playerTwoName;
	} else {
		messageDisplay.textContent = "";
	}
}


function reset(){
	activPlayer = playerOne;
	activPlayerColor = "blue";
	p1Score = 0;
	big1.textContent = "";
	p2Score = 0;
	big2.textContent = "";
	nextRoundScore = 1;
	winGame = false;
	winRound = false;
	messageDisplay.style.color = "steelblue";
	messageDisplay.textContent = "";
	numInput.value = 3;
	for(var i = 0; i < squares.length; i++){
		squares[i].value = 0;
		squares[i].style.background = "green";
	}

	if(document.getElementById("checked1").checked){
		name1.textContent = playerOneName;

		messageDisplay.textContent = "Activ: " + playerOneName;
	} else {
		name1.textContent = "Name";
	}

	if(document.getElementById("checked2").checked){
		name2.textContent = playerTwoName;
	} else {
		name2.textContent = "Name";
	}
}


function nextRound(){
	if (p1Score !== Number(numInput.value) && p2Score !== Number(numInput.value)) {

	changeActivPlayer();
	changeActivPlayerColor();
	winRound = false;
	messageDisplay.style.color = "steelblue";
	activPlayerName();

	//messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		squares[i].value = 0;
		squares[i].style.background = "green";
	}
	/*if (playerOneName === null || playerTwoName === null || 
		playerOneName === undefined || playerTwoName === undefined
		) {
		messageDisplay.textContent = "";
	}*/
}
}

function verify(){
	
		if (squares[0].value === 1 && squares[1].value === 1 && squares[2].value === 1 || 
			squares[3].value === 1 && squares[4].value === 1 && squares[5].value === 1 || 
			squares[6].value === 1 && squares[7].value === 1 && squares[8].value === 1 || 
			squares[0].value === 1 && squares[3].value === 1 && squares[6].value === 1 || 
			squares[1].value === 1 && squares[4].value === 1 && squares[7].value === 1 || 
			squares[2].value === 1 && squares[5].value === 1 && squares[8].value === 1 || 
			squares[0].value === 1 && squares[4].value === 1 && squares[8].value === 1 || 
			squares[2].value === 1 && squares[4].value === 1 && squares[6].value === 1 ) {
			//alert("BLUE WIN!");
			p1Score++;
			big1.textContent = p1Score;
			winRound = true;
			messageDisplay.style.color = "blue";
			if (playerOneName !== null) {
					messageDisplay.textContent = playerOneName + " WIN THE ROUND ";
				} else {
					messageDisplay.textContent = "BLUE WIN THE ROUND ";
				}
			if (p1Score === Number(numInput.value)) {
				console.log("blue win");	
				winGame = true;		
				messageDisplay.style.color = "blue";
				messageDisplay.textContent = playerOneName + " WIN THE GAME";
			}
			//return

		} else if(squares[0].value === 2 && squares[1].value === 2 && squares[2].value === 2 || 
				squares[3].value === 2 && squares[4].value === 2 && squares[5].value === 2 || 
				squares[6].value === 2 && squares[7].value === 2 && squares[8].value === 2 || 
				squares[0].value === 2 && squares[3].value === 2 && squares[6].value === 2 || 
				squares[1].value === 2 && squares[4].value === 2 && squares[7].value === 2 || 
				squares[2].value === 2 && squares[5].value === 2 && squares[8].value === 2 || 
				squares[0].value === 2 && squares[4].value === 2 && squares[8].value === 2 || 
				squares[2].value === 2 && squares[4].value === 2 && squares[6].value === 2 ) {
				//alert("YELLOW WIN!");
				p2Score++;
				big2.textContent = p2Score;
				winRound = true;
				messageDisplay.style.color = "yellow";
				if (playerTwoName !== null) {
					messageDisplay.textContent = playerTwoName + " WIN THE ROUND";
				} else {
					messageDisplay.textContent = "YELLOW WIN THE ROUND";
				}
				if (p2Score === Number(numInput.value)) {
					console.log("yellow win");
					winGame = true;	
					messageDisplay.style.color = "yellow";
					messageDisplay.textContent = playerTwoName + " WIN THE GAME";		
				}
		} 

		
	
}

gameTitle.addEventListener("click", function() {
	reset();
	messageDisplay.textContent = "New Game!";
});

name1.addEventListener("click", function() {
	playerOneName = prompt("Player one name:");
	if(playerOneName !== "" && playerOneName !== undefined && playerOneName !== null){
		name1.textContent = playerOneName;
		document.getElementById("message").innerHTML = "Activ: " + playerOneName;

	} else {
		name1.textContent = "Name";
	}
});

name2.addEventListener("click", function() {
	playerTwoName = prompt("Player two name:");
	if(playerTwoName !== "" && playerTwoName !== undefined && playerTwoName !== null){
		name2.textContent = playerTwoName;
	} else {
		name2.textContent = "Name";
	}
});

