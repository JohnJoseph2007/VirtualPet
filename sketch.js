//Create variables here
var dog, dogImg, happydogImg;
var db = firebase.database();
var foodS;
var foodStock = 20;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happydogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  dog = createSprite(250, 400, 20, 20);
  dog.addImage("dog image", dogImg);
  dog.scale = 0.2;

  db.ref("Food").on("value", function(data) {
    foodS = data.val();
  })
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.changeImage(happydogImg);
  }
  fill("white");
  text("Food Stock : " + foodS, 220, 250)
}

function writeStock(x) {
  if(x<=0) {
    x=0;
  }else{
    x-=1;
  }

  db.ref("/").update({Food:x});
}

