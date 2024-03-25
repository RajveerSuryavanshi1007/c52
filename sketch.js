var canvas;
var backgroundImage;
var database, gameState,game;
var form, player, playerCount;



var p1,p2;
var players=[];
//BP
function preload() {
 
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
 // game.getState();
   game.start();
 
}

//BP
function draw() {
  background("red")

  if(playerCount===2){
    game.update(1)
  }

  if(gameState===1){
    game.play();
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
