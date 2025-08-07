//Press a button to choose your path
//See the README file for more information


/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
let angle = 360 / symmetry;
let symmetry = 22;


/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  angleMode(DEGREES);
  textSize(20);
  noStroke();

  // Home screen background + text
  background("lightblue");
  text(
    "Minigames!",width / 2, height / 2 - 100);


  // Create buttons for all screens
  enterButton = new Sprite(width / 2, height / 2 + 100);

  // Start hidden/off-screen
  a1Button = new Sprite(-100, -100);
  a2Button = new Sprite(-100, -100);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-100, -100);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Always display enter button style (only visible when on-screen)
  enterButton.w = 200;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = "plum";
  enterButton.text = "Play";

  // Check enter button
  if (enterButton.mouse.presses()) {
    showScreen1();
    screen = 1;
  }

  // Screen 1 choices
  if (screen === 1) {
    a1Button.w = 50;
    a1Button.h = 50;
    a1Button.collider = "k";
    a1Button.color = "plum";
    a1Button.text = "Kaleidescope";

    a2Button.w = 50;
    a2Button.h = 50;
    a2Button.collider = "k";
    a2Button.color = "plum";
    a2Button.text = "Circle clicker";


    if (a1Button.mouse.presses()) {
      showScreen2();
      screen = 2;
    } else if (a2Button.mouse.presses()) {
      showScreen5();
      screen = 5;
    }
  }

  if (screen === 2) {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      let lineStartX = mouseX - width / 2;
      let lineStartY = mouseY - height / 2;
      let lineEndX = pmouseX - width / 2;
      let lineEndY = pmouseY - height / 2;
  
      // And, if the mouse is pressed while in the canvas...
      if (mouseIsPressed === true) {
        // For every reflective section the canvas is split into, draw the cursor's
        // coordinates while pressed...
        for (let i = 0; i < symmetry; i++) {
          rotate(angle);
          stroke(255);
          strokeWeight(3);
          line(lineStartX, lineStartY, lineEndX, lineEndY);
  
          // ... and reflect the line within the symmetry sections as well.
          push();
          scale(1, -1);
          line(lineStartX, lineStartY, lineEndX, lineEndY);
          pop();
        }
      }
    }

  }


}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1() {
  background("lightyellow");
  enterButton.pos = { x: -100, y: -100 };

  a1Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
  a2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
}

function showScreen2() {
  background("palegreen");
  text("You find a guy in the bush with a knife!\n Do you try to fight him?", width / 2, height / 2 - 100);

  // Hide A buttons
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -200, y: -200 };

  // Show B buttons
  b1Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
  b2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
}

function showScreen3() {
  background("lavender");
  text("As you confront the guy, \n He stabs you!!\n You die, the end.", width / 2, height / 2 - 100);

  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
}


}


