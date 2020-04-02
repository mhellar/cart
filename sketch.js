var img; // Declare variable 'img'.
var song;
var songTwo;

function preload(){

  img = loadImage('traffic.png'); // Load the image
    song = loadSound('traffic4.mp3');
	songTwo = loadSound('horn.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  

song.loop();

}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
}

function mousePressed() {
	if(mouseX > 200 && mouseX < 320 && mouseY > 200 && mouseY < 300){
    songTwo.play();
   // background(0,255,0); // first I want to get it to stop and play when you click
    //anywhere and then I will get it to only be on the position of the wheel horn
  }
}


function mouseReleased(){
 //  background(255,0,0);
  if (songTwo.isPlaying() ) { // .isPlaying() returns a boolean
    songTwo.stop();
  }

}