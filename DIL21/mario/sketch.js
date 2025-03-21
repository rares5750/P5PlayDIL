let level;
let bricks;

function setup() {
	new Canvas(1000, 500);
	displayMode('centered');
	noStroke();
	bricks = new Group();
	bricks.w = 8;
	bricks.h = 8;
	bricks.collider = "s"
	bricks.color = "white"
	bricks.tile = "=";

	level = new Tiles(
		["........................................................................................................................",
		"..............=..............................=======..===............=........===..====.................................",
		"........................................................................................................................",
		"........................................................................................................................",
		"..............................==...==..............................................................=..=.....====........",
		".........=..=====........==...==...==......==...........=....==...=..=..=...=.......==............==..==................",
		"...................==....==...==...==............................................................===..===...............",
		"...................==....==...==...==...........................................................====..====...........=..",
		"=======================================..==========..===============================================..==================",
		"=======================================..==========..===============================================..==================",
		"........................................................................................................................",
		"........................................................................................................................"],
		20,
		height/2,
		bricks.w,
		bricks.h
	)

}

function draw() {
	background('skyblue');
}
