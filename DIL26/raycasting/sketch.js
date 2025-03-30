let sprites;
let player;
let enemies, enemy1, enemy2;
let walls;
let map;
let tilemap = ["=================",
"=...............=",
"=...............=",
"=...............=",
"=...=========...=",
"=...=.......=...=",
"=...=.......=...=",
"=......===......=",
"=.......=.......=",
"===.....=.......=",
"===.....=.......=",
"=............====",
"=............====",
"=...............=",
"=...............=",
"=...............=",
"================="];

function setup() {
	new Canvas(750, 750);
	displayMode(CENTERED);

	player = new Sprite(width/2, 700, 30);
	player.colour = "blue";
	player.isPlayer = true;

	walls = new Group();
	walls.collider = "s";
	walls.tile = "=";
	walls.strokeWeight = 0;
	walls.colour = "white";

	enemies = new Group();
	enemies.diameter = 25;
	enemies.colour = "green";
	enemies.collider = "d";

	enemy1 = new enemies.Sprite(285, 100);
	enemy2 = new enemies.Sprite(width - 285, 100);

	map = new Tiles(tilemap, -25, -25, 50, 50);
}

function draw() {
	background('skyblue');

	if(kb.pressing("w")){
		player.y -= 4;
	}
	if(kb.pressing("d")){
		player.x += 4;
	}
	if(kb.pressing("a")){
		player.x -= 4;
	}
	if(kb.pressing("s")){
		player.y += 4;
	}

	for(let enemy of enemies){
		sprites = world.rayCast(enemy, player);
		if(sprites.isPlayer){
			enemy.speed = 3;
			enemy.moveTo(player);
		}
		else{
			enemy.speed = 0;
		}
	}
}
