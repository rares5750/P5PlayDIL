let platform;
let level = 0;
const velocityMultiplier = 0.3;
let right;
let left;

function setup() {
	new Canvas(500, 750);
	displayMode('centered');

	right = new Sprite(width, height/2, 5, height, "s");
	right.color = "black";
	left = new Sprite(0, height/2, 5, height, "s");
	left.color = "black";

	platform = new Sprite(width/2, height - 5, width/2, 10, "d");
	platform.color = "white";
	platform.vel.x = 2;
	platform.friction = 0;
	world.gravity.y = 0;
}

function draw() {
	background('black');
	if(platform.collides(right)){
		platform.vel.x = -2;
	}
	if(platform.collides(left)){
		platform.vel.x = 2;
	}
	if(keyIsDown(" ")){
		platform.
	}
}
