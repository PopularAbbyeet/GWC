//Press a button to choose your path
//See the README file for more information


/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Home screen background + text
  background("lightblue");
  text(
    "Minigame game!",width / 2, height / 2 - 100);


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
  enterButton.text = "Enter.. if you dare";

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
    a1Button.text = "Yes";

    a2Button.w = 50;
    a2Button.h = 50;
    a2Button.collider = "k";
    a2Button.color = "plum";
    a2Button.text = "No";


    if (a1Button.mouse.presses()) {
      showScreen2();
      screen = 2;
    } else if (a2Button.mouse.presses()) {
      showScreen5();
      screen = 5;
    }
  }

  // Screen 2 choices
  if (screen === 2) {
    b1Button.w = 50;
    b1Button.h = 50;
    b1Button.collider = "k";
    b1Button.color = "plum";
    b1Button.text = "Yes";

    b2Button.w = 50;
    b2Button.h = 50;
    b2Button.collider = "k";
    b2Button.color = "plum";
    b2Button.text = "No";

    if (b1Button.mouse.presses()) {
      showScreen3();
      screen = 3;
    } else if (b2Button.mouse.presses()) {
      showScreen4();
      screen = 4;
    }
  }

  print(screen);
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1() {
  background("lightyellow");
  text("You hear a rustle in the bushes nearby,\n do you investigate?", width / 2, height / 2 - 100);

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

function showScreen4() {
  background("plum");
  text("You run away.\n You reach the city, and are safe.\n You live, yay!", width / 2, height / 2 - 100);

  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
}


