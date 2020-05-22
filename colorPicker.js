var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	// initializes mode button event listeners
	for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		// removes selected from both buttons to be safe, and adds it to the clicked button
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
  };
};

function setupSquares() {
	  // Assigns each square to each of the color elements in colors
	squares.forEach(function(element, i) {
	// add listener to squares:
		element.addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors();
				//Change reset button to playAgain
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";		
			};
		});
	});
};

function reset() {
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	resetButton.textContent = "New Colors";
	// change the rgb span
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	// change colors of squares on page
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		};		
	};
};


// old code replaced by "reset()" function:

// easyBtn.addEventListener("click", function() {
// 	this.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 		// assigns first 3 squares, and hides the next 3
// 		if(colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 		squares[i].style.display = "none";	
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function() {
// 	this.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";	
// 		}
// });

resetButton.addEventListener("click", function() {
	reset();

	// // generate all new buttons
	// colors = generateRandomColors(numSquares);
	// // pick a new random color from array
	// pickedColor = pickColor();
	// this.textContent = "New Colors";
	// // change the rgb span
	// colorDisplay.textContent = pickedColor;
	// messageDisplay.textContent = "";
	// h1.style.backgroundColor = "steelblue";
	// // change colors of squares on page
	// for(var i = 0; i < squares.length; i++) {
	// 	squares[i].style.backgroundColor = colors[i];
	// }
});

function changeColors() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = pickedColor;
	}
	h1.style.backgroundColor = pickedColor;
}

function pickColor() {
	// Generates a random number between 0 and the length of the colors array
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// repeat num times
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
};

function randomColor() {
	var rgbs = [];
	for (var i = 0; i < 3; i++) {
			rgbs.push(Math.floor(Math.random() * 256));
		};
	return ("rgb(" + rgbs[0] + ", " + rgbs[1] + ", " + rgbs[2] + ")");
};

