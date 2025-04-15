import PathFinding from "./PathFinding.js-master/src/PathFinding";

let tilemap;
let player;
let wall;
let node;
var grid, finder, path;

let counter = 0;

let map = ["=================",
"=...............=",
"=============.=.=",
"=.......=.....=.=",
"=.=.=.=.=.....=.=",
"=.=.=.=.=.=.=.=.=",
"=.=.=.....=.=.=.=",
"=.=.=.===.=.=.=.=",
"=.=.=.....=.=.=.=",
"=.=.=======.=.=.=",
"=.=.......=.=...=",
"=.=.=====.=.=====",
"=.=.....=.=.....=",
"=.=.=====.=======",
"=.=.............=",
"=...............=",
"================="];

let matrix = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
	[0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1],
	[1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1],
	[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1],
	[1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1],
	[1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1],
	[1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1],
	[1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1],
	[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1]
];

function setup() {
	new Canvas(680, 680);
	displayMode(CENTER);

	player = new Sprite(80, 60, 20);

	wall = new Group();
	wall.tile = "=";
	wall.colour = "gray";
	wall.collider = "s";
	wall.h = 40;
	wall.w = 40;

	tilemap = new Tiles(map, 20, 20, 40, 40);

	grid = new PathFinding.Grid(matrix);
	finder = new PathFinding.AStarFinder();
	path = finder.findPath(2,2,10,17,grid);

	node = new Group();
	node.visited = false;
	node.radius = 10;
	node.collider = "n";
	console.log(path);
	for(p of path){
		let n = new node.Sprite((p[0]*40) + 20, (p[1]*40) + 20);
		n.visible = false;
	}
}

function draw() {
	background('skyblue');
	if(node[counter]){
		player.moveTo(node[counter])
		if(player.overlaps(node[counter])){
			counter++;
		}
	}
}
