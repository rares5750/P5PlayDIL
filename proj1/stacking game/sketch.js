let left;
let right;
let stackArray = [];
let index = 0;
let level = 1;
const movementMultiplier = 0.2;
let playedPiece;

let currentLeft;
let previousLeft;
let midBetweenLefts;
let diffBetweenLefts;

let currentRight;
let previousRight;
let midBetweenRights;
let diffBetweenRights;

let gameOver = false;

function setup() {
	new Canvas(500, 750);
	displayMode('centered');
	world.gravity.y = 0;

	left = new Sprite(0, height/2, 10, height, "s");
	left.color = "white";
	right = new Sprite(width, height/2, 10, height, "s");
	right.color = "white";

	stackArray[index] = new Sprite(width/2, height - 5, width/2, 9, "s");
	stackArray[index].color = "white";

	index++;

	stackArray[index] = new Sprite(width/2, height - 15, width/2, 9, "d");
	stackArray[index].color = "white";
	stackArray[index].vel.x = 2;
	stackArray[index].friction = 0;
}

function draw() {
	background('black');
	if(!gameOver){
		if(stackArray[index].collides(right)){
			stackArray[index].vel.x = -2 - (level-1)*movementMultiplier;
		}
		if(stackArray[index].collides(left)){
			stackArray[index].vel.x = 2 + (level-1)*movementMultiplier;
		}
	
		currentLeft = stackArray[index].x - stackArray[index].width/2;
		previousLeft = stackArray[index - 1].x - stackArray[index - 1].width/2;
	
		currentRight = stackArray[index].x + stackArray[index].width/2;
		previousRight = stackArray[index - 1].x + stackArray[index - 1].width/2;
	
		if(kb.pressed(" ") && (currentLeft > previousRight || currentRight < previousLeft)){
			stackArray[index].remove();
			gameOver = true;
		}
		
		if(kb.pressed(" ") && currentLeft <= previousLeft && !gameOver){
			diffBetweenLefts = previousLeft - currentLeft;
			midBetweenLefts = (currentLeft - previousLeft)/2;
	
			stackArray[index].remove();
	
			playedPiece = stackArray.pop();
			stackArray[index] = new Sprite(playedPiece.x + midBetweenLefts, height - 5 - 10*level, playedPiece.width - diffBetweenLefts, 9, "s");
			stackArray[index].color = "white";
	
			index++;
			level++;
			stackArray[index] = new Sprite(playedPiece.x + midBetweenLefts, height - 5 - 10*level, playedPiece.width - diffBetweenLefts, 9, "d");
			stackArray[index].color = "white";
			stackArray[index].vel.x = 2 + (level-1)*movementMultiplier;
			stackArray[index].friction = 0;
		}
		else if(kb.pressed(" ") && currentRight >= previousRight && !gameOver){
			diffBetweenRights = currentRight - previousRight;
			midBetweenRights = (previousRight - currentRight)/2;
	
			stackArray[index].remove();
	
			playedPiece = stackArray.pop();
			stackArray[index] = new Sprite(playedPiece.x - midBetweenRights, height - 5 - 10*level, playedPiece.width - diffBetweenRights, 9, "s");
			stackArray[index].color = "white";
	
			index++;
			level++;
			stackArray[index] = new Sprite(playedPiece.x - midBetweenRights, height - 5 - 10*level, playedPiece.width - diffBetweenRights, 9, "d");
			stackArray[index].color = "white";
			stackArray[index].vel.x = 2 + (level-1)*movementMultiplier;
			stackArray[index].friction = 0;
		}
	}
	else{
		textAlign(CENTER);
		textSize(40);
		fill("white");
		text("Game Over. Score: " + String(level - 1), width/2, height/2);
		textSize(20);
		text("Press space to restart.", width/2, height/2 + 25);
		if(kb.pressed(" ")){
			gameOver = false;
			allSprites.remove();

			stackArray = [];
			index = 0;
			level = 1;
			
			left = new Sprite(0, height/2, 10, height, "s");
			left.color = "white";
			right = new Sprite(width, height/2, 10, height, "s");
			right.color = "white";

			stackArray[index] = new Sprite(width/2, height - 5, width/2, 9, "s");
			stackArray[index].color = "white";

			index++;

			stackArray[index] = new Sprite(width/2, height - 15, width/2, 9, "d");
			stackArray[index].color = "white";
			stackArray[index].vel.x = 2;
			stackArray[index].friction = 0;
		}
	}
}
