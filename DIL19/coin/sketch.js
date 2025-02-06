let score = 0;
let player;
let coinArray = [];

const movementSpeed = 5;

function setup() {
	new Canvas(800, 800);
	displayMode('centered');

	player = new Sprite(width/2, height/2, 30, 30, "d");
	player.color = "white";
	for(let i = 0; i < 6; i++){
		coinArray[i] = new Sprite(random(0, width), random(0, height), 20, 20, "s");
		coinArray[i].img = "💲";
	}
}

function draw() {
	background('gray');
	
	textSize(32);
	textAlign(CENTER);
	fill("white");
	text("Score: " + score, width/2, 32);

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

	for(let i = 0; i < coinArray.length; i++){
		if(player.collides(coinArray[i])){
			score++;
			coinArray[i].remove();
			coinArray[i] = new Sprite(random(0, width), random(0, height), 20, 20, "s");
			coinArray[i].img = "💲";
		}
	}
}
