let checkpointsArray = [];
let player;

const checkpointSize = 20;
const movementSpeed = 4;

let oldX;
let oldY;

function setup() {
	new Canvas(750, 750);
	displayMode('centered');

	noStroke();
	for(let i = 0; i < 5; i++){
		checkpointsArray[i] = new Sprite(random(checkpointSize, width-checkpointSize), random(checkpointSize, height-checkpointSize), checkpointSize);
		checkpointsArray[i].collider = "s";
		checkpointsArray[i].color = "gray";
	}
	stroke("black");

	player = new Sprite(width/2, height/2, 30);
	player.collider = "d";
	player.color = "blue";
}

function draw() {
	background('black');
	if(kb.pressing("d")){
		player.x += movementSpeed;
	}
	if(kb.pressing("a")){
		player.x -= movementSpeed;
	}
	if(kb.pressing("s")){
		player.y += movementSpeed;
	}
	if(kb.pressing("w")){
		player.y -= movementSpeed;
	}

	for(let i = 0; i < checkpointsArray.length; i++){
		if(player.collides(checkpointsArray[i])){
			checkpointsArray[i].color = "white";
		}
	}
}
