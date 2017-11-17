var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

var resetButton = document.getElementById("reset")

var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var numSquares = 6;

colorDisplay.textContent = pickedColor;




//Add initial colors to squares
for (var i = 0; i < squares.length; i++)
{	
	//Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//Add click listerners to squares
	squares[i].addEventListener("click", function()
	{
		//Grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//Compare clicked color


		if (clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}
		else
		{
			this.style.backgroundColor = "steelblue";
			messageDisplay.textContent = "Try Again";


		}
	});
}




function changeColors(color)
{
	//loop through all squares
	for (var i = 0 ; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
	
}



//Getting a random color
function pickColor()
{
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

//Generate 6 random colors
function generateRandomColors(num)
{
	
	//Make an array
	var arr = [];

	//Add num random colors to array
	for (var i = 0; i < num; i++)
	{
		arr.push(randomColor());
	}

	//return that array
	return arr;
}

function randomColor()
{
	//pick random red
	var r = Math.floor(Math.random() * 256);

	//pick random green
	var g = Math.floor(Math.random() * 256);

	//pick random blue
	var b = Math.floor(Math.random() * 256);

	return ("rgb(" + r + ", " + g + ", " + b + ")");
}

resetButton.addEventListener("click", function()
{
	//generate new colors
	colors = generateRandomColors(numSquares);

	//pick new color
	pickedColor = pickColor();

	//change displays
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Game";

	//assign new colors to squares
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}

});

easyBtn.addEventListener("click", function()
{
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i =0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function()
{
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i =0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});