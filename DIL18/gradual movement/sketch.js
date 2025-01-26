let player;
let ground;
let walls = [];

let SHABOF; // "shift held at beginning of function"

let maxSpeed = 2;
let velAdder = 0.05;

//experimentation variables
let xDist;
let yDist;
let angleToMouse;
let xVector;
let yVector;

function setup() {
	new Canvas(500, 500);
	displayMode('centered');

	noStroke();

	ground = new Sprite(width/2, height, width, 10, "s");
	ground.color = "white";
	walls[0] = new Sprite(0, height/2, 10, height, "s");
	walls[0].color = "white";
	walls[1] = new Sprite(width, height/2, 10, height, "s");
	walls[1].color = "white";

	player = new Sprite(25, 100, 25, 25, "d");
	player.color = "black";
	player.friction = 0;

	world.gravity.y = 9.8;
}

function draw() {
	background('skyblue');

	SHABOF = kb.pressing("shift"); // this is made in the case that shift is let go of while the big if statement is being executed,
								   // so maxspeed doesn't permanently stay doubled. however i didn't test if that was the case otherwise.
								   // guess we'll never know.

	if(SHABOF){
		maxSpeed = maxSpeed*2;
		velAdder = velAdder*2;
	}

	//not part of DIL, wanted to just experiment
	if(mouse.pressed()){
		xDist = Math.abs(mouse.x - player.x);
		yDist = Math.abs(mouse.y - player.y);

		if (mouse.x > player.x && mouse.y < player.y){
			angleToMouse = Math.atan(yDist/xDist);
		}
		else if(mouse.x < player.x && mouse.y < player.y){
			angleToMouse = Math.PI - Math.atan(yDist/xDist);
		}

		xVector = 6 * Math.cos(angleToMouse);
		yVector = 6 * Math.sin(angleToMouse);

		player.vel.x += xVector;
		player.vel.y -= yVector;
	}

	// ^^ throw player to mouse with a vector of an arguement that points it towards the mouse and a modulus(?) of 6

	if(kb.pressing("d") || kb.pressing("a")){
		if(kb.pressing("d")){
			if(player.vel.x > maxSpeed){
				player.vel.x -= velAdder;
			}
			else{
				player.vel.x += velAdder;
			}
		}
		if(kb.pressing("a")){
			if(player.vel.x < -maxSpeed){
				player.vel.x += velAdder;
			}
			else{
				player.vel.x -= velAdder;
			}
		}
	}
	else{
		if(player.vel.x > 0){
			player.vel.x -= velAdder;
		}
		else if(player.vel.x < 0){
			player.vel.x += velAdder;
		}
	}

	if(SHABOF){
		maxSpeed = maxSpeed/2;
		velAdder = velAdder/2;
	}
}
