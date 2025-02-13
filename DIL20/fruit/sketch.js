let fruits;
let player;
let score = 0;

const movementSpeed = 11;

function setup() {
	new Canvas(800, 800);
	displayMode('centered');

	fruits = new Group();
	fruits.w = (i) => random(20, 40);
	fruits.h = fruits.w;
	fruits.y = 10;
	fruits.x = (i) => random(0, width);
	fruits.collider = "d";
	player = new Sprite(width/2, height-10, 80, 20, "s");
	world.gravity.y = 9.8;
	setInterval(spawnFruit, 1000);
	textAlign(CENTER);
}

function draw() {
	background('skyblue');
	fill("black");
	textSize(20);
	text("Score: " + score, width/2, 30);
	if(kb.pressing("d")){
		player.x += movementSpeed;
	}
	if(kb.pressing("a")){
		player.x -= movementSpeed;
	}

	for(let fruit of fruits){
		if(fruit.collides(player)){
			fruit.remove()
			score++;
		}
	}
}

function spawnFruit(){
	new fruits.Sprite();
}

