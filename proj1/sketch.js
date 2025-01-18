let ball;
let playing = true;
let doubleScore = 0;
let score = 0;
let jumped = false;

let pipesArray = [];

function setup() {
	new Canvas(800, 500);
	displayMode('centered');
	world.gravity.y = 10;
	floor = new Sprite(width/2, height, width, 10, "s");
	floor.layer = -1;
	floor.color = "#64FF64";

	ball = new Sprite();
	ball.diameter = 50;
	ball.color = "yellow";
	ball.vel.y = -4;
	setInterval(spawnPipe, 1500);
}

function draw() {
	if(playing){
		background('skyblue');
		
		if(keyIsDown(" ") && !jumped){
			ball.vel.y = -4;
			jumped = true;
		}

		if(!keyIsDown(" ") && jumped){
			jumped = false;
		}

		for(let i = 0; i < pipesArray.length; i++){
			if(pipesArray[i].x < -100){
				pipesArray.splice(i, 1);
			}
			pipesArray[i].x -= 3.5;
			if(ball.colliding(pipesArray[i]) || ball.colliding(floor)){
				playing = false;
			}
			if(pipesArray[i].x < ball.x + 1.75 && pipesArray[i].x > ball.x - 1.75){ 				// if the balls x value matches with the top pipe. since this runs twice, score has to be halved.
				doubleScore++;
				score = doubleScore/2;
			}
		}

		allSprites.draw();
		textSize(50);
		text(score, width/2, 50);
	}
	else{
		ball.collider = "s";
		allSprites.draw();
		textSize(86);
		textAlign(CENTER);
		text("Final score: " + score, width/2, height/2);
		textSize(32);
		text("Press Space to play again.", width/2, height/2 + 86);
		if(kb.pressed(" ")){
			playing = true;
			pipesArray = [];
			score = 0;
			doubleScore = 0;
			allSprites.remove();

			floor = new Sprite(width/2, height, width, 10, "s");
			floor.layer = -1;
			floor.color = "#64FF64";

			ball = new Sprite();
			ball.diameter = 50;
			ball.color = "yellow";
		}
	}
}

function spawnPipe(){
	let randYVal = random(height/6, height/1.5);
	let nextIndex = pipesArray.length

	// spawns top pipe
	pipesArray[nextIndex] = new Sprite(width + 200, randYVal - 225, 50, 400, "s");  
	pipesArray[nextIndex].color = "green";
	pipesArray[nextIndex].layer = -2;

	// spawns bottom pipe
	pipesArray[nextIndex + 1] = new Sprite(width + 200, randYVal + 325, 50, 400, "s"); 
	pipesArray[nextIndex + 1].color = "green";
	pipesArray[nextIndex + 1].layer = -2;
}
