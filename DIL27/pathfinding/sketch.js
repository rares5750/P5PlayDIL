let tilemap;
let player, player2;
let wall, exit, start;
let node, node2;
var grid, finder, path, path2;
let startDecider, endDecider;
let startDecider2;

let counter = 0;
let counter2 = 0;

let map = ["===============e=",
"=s..............=",
"=============.=.=",
"e.......=....s=.=",
"=.=.=.=.=.....=.=",
"=.=.=.=.=.=.=.=.=",
"=.=.=.....=.=.=.=",
"=.=.=.===.=.=.=.=",
"=.=.=.....=.=.=.=",
"=.=.=======.=.=.=",
"=.=.......=.=...e",
"=.=.=====.=.=====",
"=.=....s=.=....s=",
"=.=.=====.=======",
"=.=.............=",
"es..............e",
"================="];

let matrix = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1],
	[1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1],
	[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1],
	[1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0],
	[1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1],
	[1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1],
	[1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1],
	[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1]
];

function setup() {
	new Canvas(680, 680);
	displayMode(CENTER);

	wall = new Group();
	wall.tile = "=";
	wall.colour = "gray";
	wall.collider = "s";
	wall.h = 40;
	wall.w = 40;

	exit = new wall.Group();
	exit.colour = "yellow";
	exit.collider = "n";
	exit.tile = "e";

	start = new wall.Group();
	start.opacity = 0;
	start.collider = "n";
	start.tile = "s";

	tilemap = new Tiles(map, 20, 20, 40, 40);

	startDecider = Math.floor(random(0, start.length));
	startDecider2 = startDecider;
	endDecider = Math.floor(random(0, exit.length));

	exit[endDecider].colour = "red";

	player = new Sprite(start[startDecider].x, start[startDecider].y, 20);
	player.colour = "blue";

	while(startDecider2 == startDecider){
		startDecider2 = Math.floor(random(0, start.length));
	}

	player2 = new Sprite(start[startDecider2].x, start[startDecider2].y, 20);
	player2.colour = "red";


	grid = new PF.Grid(matrix);
	finder = new PF.AStarFinder();
	path = finder.findPath(Math.floor(player.x / 40), Math.floor(player.y / 40), Math.floor(exit[endDecider].x / 40), Math.floor(exit[endDecider].y / 40), grid);
	path2 = finder.findPath(Math.floor(player2.x / 40), Math.floor(player2.y / 40), Math.floor(exit[endDecider].x / 40), Math.floor(exit[endDecider].y / 40), grid);

	
	console.log(grid);
	console.log(Math.floor(player2.x / 40));
	console.log(Math.floor(player2.y / 40));
	console.log(Math.floor(exit[endDecider].x / 40));
	console.log(Math.floor(exit[endDecider].y / 40));

	node = new Group();
	node.visited = false;
	node.radius = 10;
	node.collider = "n";
	console.log(path);
	for(p of path){
		let n = new node.Sprite((p[0]*40) + 20, (p[1]*40) + 20);
		n.visible = false;
	}
	

	node2 = new Group();
	node2.visited = false;
	node2.radius = 10;
	node2.collider = "n";
	console.log(path2);
	for(p2 of path2){
		let n2 = new node2.Sprite((p2[0]*40) + 20, (p2[1]*40) + 20);
		n2.visible = false;
	}

}

function draw() {
	background('skyblue');
	if(node[counter]){
		player.speed = 4;
		player.moveTo(node[counter])
		if(player.overlaps(node[counter])){
			counter++;
		}
	}

	if(node2[counter2]){
		player2.speed = 4;
		player2.moveTo(node2[counter2])
		if(player2.overlaps(node2[counter2])){
			counter2++;
		}
	}
}
