class Game {
  constructor() {
   
    
  }
  start(){
    form=new Form();
    form.display();

  // resizeCanvas(600,600)

   this.createPlayArea();

   p1=createSprite(80,300,20,80)
   p1.shapeColor="black"
   p2=createSprite(580,300,20,80)
   p2.shapeColor="white"
  // players=new Group()

  players=[p1,p2];


  }

  getState(){
    var gameStateRef=database.ref("gameState")
    gameStateRef.on("value",function(data){
      gameState=data.val()
    })
    
  }

  update(state){
    database.ref("/").update({
      gameState:state
    })





  }
  createPlayArea(){

    var b1=createSprite(width/2-150,20,600,20);
    var b2=createSprite(width/2-150,570,600,20);
    var b3=createSprite(50,295,20,570);
    var b4=createSprite(width/2+150,295,20,570);
  
   
  }

  play(){
    this.handleElements();

    drawSprites();
  }

}