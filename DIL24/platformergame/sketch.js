let ball;
let walls;
let player;
let jumpSound;
let bgMusic;

let map;
let coins, coinCollect;

let mapTiles = [
"............",
"............",
"......c.....",
"............",
"............",
"=....===...=",
"=..........=",
"=..........=",
".===.....==.",
"............",
"............",
"============"]

function preload(){
	coinCollect = loadSound("coin1.wav");
	jumpSound = loadSound("jump.wav");
	bgMusic = loadSound("one_0.mp3");
}

function setup(){
	new Canvas(750, 750);
	displayMode("centered");
	bgMusic.setVolume(0.5);

	walls = new Group();
	walls.tile  = "=";
	walls.color = "gray";
	walls.collider = "s";
	walls.w = 75;
	walls.h = 75;
	walls.friction = 1;

	coins = new Group();
	coins.tile = "c";
	coins.color = "yellow";
	coins.collider = "n";
	coins.diameter = 15;


	player = new Sprite(width/2, height-20, 25, 50, "d");
	player.color = "white";
	player.rotationLock = true;

	world.gravity.y = 9.8;

	map = new Tiles(mapTiles, -75/2, -75/2, walls.w, walls.h);
}

function draw() {
	background('skyblue');

	if(!bgMusic.isPlaying()){
		bgMusic.play();
	}

	if(kb.pressing("a")){
		player.vel.x = -4;
	}
	if(kb.pressing("d")){
		player.vel.x = 4;
	}
	if(kb.pressed("w")){
		player.vel.y = -10;
		jumpSound.play();
	}

	for(let coin of coins){
		if(player.overlaps(coin)){
			coinCollect.play();
			coin.remove();
		}
	}
}
