let zombies;
let player;
let score = 0;
let finalScore;
let gameOver = false;

const movementSpeed = 4;

function setup() {
	new Canvas(800, 800);
	displayMode('centered');

	zombies = new Group();
	zombies.w = 20;
	zombies.h = 20;
	zombies.color = "green";
	zombies.collider = "d";

	player = new Sprite(width/2, height/2, 20);
	setInterval(spawnZombie, 3500);
	setInterval(iterateScore, 1000);
}

function draw() {
	background('darkgray');
	textAlign(CENTER);
	textSize(32);
	text("Score: " + score, width/2, 30);

	if(!gameOver){
		if(kb.pressing("w")){
			player.y -= movementSpeed;
		}
		if(kb.pressing("s")){
			player.y += movementSpeed;
		}
		if(kb.pressing("a")){
			player.x -= movementSpeed;
		}
		if(kb.pressing("d")){
			player.x += movementSpeed;
		}

		for(let zombie of zombies){
			zombie.moveTo(player);
		}
		if(zombies.collides(player)){
			gameOver = true;
			finalScore = score;
		}
	}
}

function spawnZombie(){
	new zombies.Sprite(width*Math.round(random()), random(0, height));
}

function iterateScore(){
	score++;
}