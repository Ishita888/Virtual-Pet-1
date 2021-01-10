//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

function preload(){
   //load images here
   dog_img = loadImage("images/dogmg.png");
   happyDog_img = loadImage("images/dogmg1.png");
}

function setup() {
   createCanvas(500, 500);
   database = firebase.database();
   dog = createSprite(250, 250);
   dog.addImage(dog_img);
   foodStock = database.ref('Food');
   foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog_img);
  }
  drawSprites();
  //add styles here
  fill("black");
  text("Remaining Food: " + foodS, 200, 120);
  textSize(20)
  text("Note: Press UP_ARROW Key To Feed Drago Milk", 40, 20)
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}