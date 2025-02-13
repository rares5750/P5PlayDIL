let zombies;
let player;
let score = 0;
let finalScore;
let gameOver = false;

const movementSpeed = 5;

function setup() {
	new Canvas(800, 800);
	displayMode('centered');

	zombies = new Group();
	zombies.w = 30;
	zombies.h = 30;
	zombies.color = "green";
	zombies.collider = "d";
	zombies.speed = 4;

	player = new Sprite(width/2, height/2, 30);
	setInterval(spawnZombie, 2000);
	setInterval(iterateScore, 1500);
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
	else{
		zombies.collider = "s";
		player.collider = "s";
		textSize(32);
		text("Game Over!", width/2, height/2);
		textSize(16);
		text("Press Space to restart.", width/2, height/2 + 32);
		if(kb.presses(" ")){
			score = 0;
			allSprites.remove();
			zombies.collider = "d";
			player = new Sprite(width/2, height/2, 30);
			gameOver = false;
		}
	}
}

function spawnZombie(){
	if(!gameOver){
		new zombies.Sprite(width*Math.round(random()), random(0, height));
	}
}

function iterateScore(){
	if(!gameOver){
		score++;
	}
}