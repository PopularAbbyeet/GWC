

 //LOAD IMAGES AND OTHER 
let startButton;
let screen = 0;
let counter = 0;
let j;
let fall;
let textvar;
let plum;
let plumIMG;

function preload(){
	plumIMG = loadImage('plum.png');
}

 //SETUP RUNS ONCE 
function setup() {
  background("palegreen");
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(100);
  fill(0);
  noStroke();
  world.gravity.y = 10;
	
  //cursor1 = loadImage('/assets/cursor/astro_arrow.cur');
  //cursor(cursor1, pointer.x, pointer.y);
  text("Plum Rise",width /2, height /2 - 100);


  // Create buttons for all screens
  startButton = new Sprite(width/2, height /2 + 150);
}

function draw() {
  // Always display enter button style (only visible when on-screen)
	background("palegreen");

	startButton.w = 200;
	startButton.h = 100;
	startButton.collider = "k";
	startButton.color = "plum";
	
	drawSprites();
	textSize(40);
	textvar = text("Start!",width /2, height /2 + 200);
	  // Check enter button
	if (startButton.mouse.presses()) {
		showScreen1();
	    	screen = 1;


	}

}
//FUNCTIONS TO DISPLAY SCREENS 
function showScreen1() {
  background("lightblue");
  startButton.pos = { x: -100, y: -100 };
  textvar.pos =  { x: -100, y: -100 };
  plum = new Sprite(plumIMG, width/2, height/2 -300);
	

  	  
}





/*

Collision ex:

if (spriteA.collides(spriteB)) {
    // Code to execute when spriteA first collides with spriteB
    console.log("Sprites are colliding!");
  }




*/


*/
