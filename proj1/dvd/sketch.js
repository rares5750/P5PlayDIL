let dvd;
let roof;
let floor;
let right;
let left;

function setup() {
	new Canvas(800, 500);
	displayMode('centered');

	dvd = new Sprite(width/2, height/2, 40, 20, "d");
	dvd.friction = 0;

	roof = new Sprite(width/2, -2, width, 8, "s");
	roof.color = "white";
	floor = new Sprite(width/2, height + 2, width, 8, "s");
	floor.color = "white";
	right = new Sprite(width + 2, height/2, 8, height, "s");
	right.color = "white";
	left = new Sprite(-2, height/2, 8, height, "s");
	left.color = "white";

	world.gravity.y = 0;
	world.gravity.x = 0;
	dvd.vel.y = 5;
	dvd.vel.x = 5;
}

function draw() {
	background('black');

	if(dvd.collides(right)){
		dvd.vel.x = -5;
	}
	if(dvd.collides(left)){
		dvd.vel.x = 5;
	}
	if(dvd.collides(roof)){
		dvd.vel.y = 5;
	}
	if(dvd.collides(floor)){
		dvd.vel.y = -5;
	}
}
