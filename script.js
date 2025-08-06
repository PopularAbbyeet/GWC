//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let startButton;
let screen = 0;
let counter = 0;
let j;
let fall;
let textvar;
let plum;
let plumIMG;

/* LOAD IMAGES AND OTHER */

function preload(){
	plumIMG = loadImage('plum.png');
}

//   
/* SETUP RUNS ONCE */
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(100);
  fill(0);
  noStroke();
  world.gravity.y = 10;
	
  //cursor1 = loadImage('/assets/cursor/astro_arrow.cur');
  //cursor(cursor1, pointer.x, pointer.y);

  // Home screen background + text
  background("palegreen");
  text("Plum Rise",width /2, height /2 - 100);


  // Create buttons for all screens
  startButton = new Sprite(width/2, height /2 + 150);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Always display enter button style (only visible when on-screen)
 	startButton.w = 200;
  	startButton.h = 100;
  	startButton.collider = "k";
  	startButton.color = "plum";

	textSize(40);
	textvar = text("Start!",width /2, height /2 + 200);

  // Check enter button
	if (startButton.mouse.presses()) {
    		showScreen1();
    		screen = 1;
    		if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    			let fs = fullscreen();
   			fullscreen(!fs);
			textvar.remove();
    		}
  	}
}
/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1() {
  background("lightblue");
  startButton.pos = { x: -100, y: -100 };
	
  plum = new Sprite(plumIMG, width/2, height/2 -300);
  if (screen === 1) {
	  frameRate(50);
	  if (frameCount % 50 == 0) {
		  new Sprite(random(canvas.width), 0, 30, 30);
	  }
	  if (mouse.presses()) {
		  let s = world.getSpriteAt(mouse);
		  if (s) {
			  j = new GrabberJoint(s);
			  j.maxForce = 1000;
		  }
	  }

	  if (mouse.pressing() && j) j.target = mouse;
	  if (mouse.released() && j) j.remove();
	  }
   else if (screen > 1) {
	   frameRate(0);
   }
  	  
}





/*

Collision ex:

if (spriteA.collides(spriteB)) {
    // Code to execute when spriteA first collides with spriteB
    console.log("Sprites are colliding!");
  }




*


*/
