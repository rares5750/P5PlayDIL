let ball;
let playing = true;
let score;

let pipesArray = [];

function setup() {
	new Canvas(800, 500);
	displayMode('centered');
	world.gravity.y = 10;
	floor = new Sprite(width/2, height, width, 10, "s");
	floor.layer = 2;
	floor.color = "#64FF64";

	ball = new Sprite();
	ball.diameter = 50;
	ball.color = "yellow";
	setInterval(spawnPipe, 1500);
}

function draw() {
	if(playing){
		background('skyblue');
		if(kb.pressed(" ")){
			ball.vel.y = -3;
		}

		for(let i = 0; i < pipesArray.length; i++){
			if(pipesArray[i].x < -100){
				pipesArray.splice(i, 1);
			}
			pipesArray[i].x -= 3.5;
			if(ball.colliding(pipesArray[i])){
				playing = false;
			}
		}
	}
	else{
		ball.vel.y = 0;
	}
}

function spawnPipe(){
	let randYVal = random(height/6, height/1.5);
	let nextIndex = pipesArray.length

	// spawns top pipe
	pipesArray[nextIndex] = new Sprite(width + 200, randYVal - 225, 50, 400, "s");  
	pipesArray[nextIndex].color = "green";
	pipesArray[nextIndex].layer = 1;

	// spawns bottom pipe
	pipesArray[nextIndex + 1] = new Sprite(width + 200, randYVal + 325, 50, 400, "s"); 
	pipesArray[nextIndex + 1].color = "green";
	pipesArray[nextIndex + 1].layer = 1;
}
