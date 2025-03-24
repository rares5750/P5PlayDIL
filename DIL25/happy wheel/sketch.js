let playerBody, playerFront, playerRear, axleFront, axleRear;
let floor;

function setup() {
	new Canvas(500, 500);
	displayMode(CENTERED);
	world.gravity.y = 9.81

	floor = new Sprite(width/2, 450, width, 100, "s");
	floor.colour = "green";

	playerBody = new Sprite(width/2, 375, 40, 20, "d");
	playerBody.colour = "white";

	playerFront = new Sprite(width/2 + 13, 390, 12);
	playerFront.colour = "black";
	playerRear = new Sprite(width/2 - 13, 390, 12);
	playerRear.colour = "black";
	
	axleFront = new WheelJoint(playerBody, playerFront);
	axleFront.maxPower = 1;
	axleRear = new WheelJoint(playerBody, playerRear);
	axleRear.maxPower = 1;
}

function draw() {
	background('skyblue');
	if(kb.pressing("a")){
		axleRear.speed--;
		axleFront.speed--;
	}
	if(kb.pressing("d")){
		axleRear.speed++;
		axleFront.speed++;
	}
}
