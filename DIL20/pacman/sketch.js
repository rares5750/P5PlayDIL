let pacman;
let pellets;
let score = 0;

function setup() {
	new Canvas(800, 800);
	displayMode('centered');

	pacman = new Sprite(width/2, height/2, 20);
	pacman.collider = "d";
	pacman.color = "yellow";

	pellets = new Group();
	pellets.collider = "n";
	pellets.w = 5;
	pellets.h = 5;
	pellets.x = (i) => random(0, width);
	pellets.y = (i) => random(0, height);
	pellets.color = "white";

	textAlign(CENTER);
	textSize(20);
}

function draw() {
	background('black');
	pellets.amount = 10;

	if(!kb.pressed("a") && !kb.pressed("d")){
		if(kb.pressed("w")){
			pacman.vel.y = -3;
			pacman.vel.x = 0;
		}
		else if(kb.pressed("s")){
			pacman.vel.y = 3;
			pacman.vel.x = 0;
		}
	}
	else{
		if(kb.pressed("d")){
			pacman.vel.x = 3;
			pacman.vel.y = 0;
		}
		else if(kb.pressed("a")){
			pacman.vel.x = -3;
			pacman.vel.y = 0;
		}
	}
	fill("white")

	text("Score: " + score, width/2, 30);

	pacman.overlaps(pellets, collectPellet);
}

function collectPellet(player, groupCollided){
	groupCollided.remove();
	score++;
}
