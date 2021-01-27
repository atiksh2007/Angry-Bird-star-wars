var red,redimage,redback,redbackimage;
var red2,boom2,chuck2,cabage2;
var starwars,starimage;
var b,bimage;
var music
var start,startimage;
var im,imimage;
var next;
var nextimage;
var s
// red var 
var deadline;
var spin,spin2,spinimage;
var yr;
var yr2;
var rground;
var rground2;
var rground3;
var rground4;
var rground5;
var rground6;
var rground7;
var rground8;
var rground9;
var rb1;
var rb2;
var rb3;
var rb4;
var rb5;
var rb6;
var rb7;
var rb8;
var rb9;
var rb10;
var rb11;
var rb12;
var button;
var gate;
var trophy;
var redlazer1;
var redlazer2;
var rc1;
var rc2;
var rc3;
var rc4;
var rg; 
var rg2;
var rg3;
var rg4;
var mw;
 var life;
var final;
var br;
var restart;
var home;
var gun,gunimage;
var lifemeter,lifeimage,medium,half,low,verylow;
var gameState="start";

function preload(){
redimage=loadImage("red.png");
  bimage=loadImage("final battle.jpg");
  starImage=loadImage("Untitled.png");
  startimage=loadImage("start.png");
  imimage=loadImage("music.png")
   music=loadSound("asap.mp3");
  nextimage=loadImage("next.png")
  redbackimage=loadImage("redflip.png");
  lifeimage=loadImage("full.png");
  medium=loadImage("medium.png");
  half=loadImage("half.png");
  low=loadImage("low.png");
  verylow=loadImage("verylow.png");
  gunimage=loadImage("gun.png")
 s=loadSound("wars.mp3")
  spinimage=loadImage("spin1.png");
  chuckimage=loadImage("chuck.png")
  final=loadSound("final.mp3")
}

function setup() {
 createCanvas(600,600);
  // normal objects
  
  //200 is real red pos
red=createSprite(200,200,20,20);
  red.addImage(redimage);
  red.scale=0.1;
  red.visible=false;
  red.debug=true;
  
  chuck=createSprite(200,200,20,20);
  chuck.addImage(chuckimage);
  chuck.scale=0.1;
  chuck.visible=false;
  chuck.debug=true;

  b=createSprite(300,300);
  b.addImage(bimage);
  b.scale=0.4;
  
  starwars=createSprite(300,150);
  starwars.addImage(starImage);
  starwars.scale=0.7;
  
 start=createSprite(300,300);
  start.addImage(startimage);
  start.scale=0.4;
  
  im=createSprite(100,500);
  im.addImage(imimage);
  im.scale=0.3
  
  next=createSprite(530,560);
  next.addImage(nextimage);
  next.scale=0.2;
  next.visible=false;
  
  red2=createSprite(100,100);
  red2.addImage(redimage);
  red2.scale=0.2;
  red2.visible=false;
  
  chuck2=createSprite(300,100);
  chuck2.visible=false;
  chuck2.scale=0.2;
  chuck2.addImage(chuckimage);
  
  // red objects
  rground=createSprite(500,500,1000,200);
  rground.shapeColor="brown"
  rground.visible=false;
  
  rb1=createSprite(600,100,400,200)
  rb1.shapeColor="brown"
  rb1.visible=false;
  
  redlazer1=createSprite(500,250,5,100);
  redlazer1.shapeColor="red";
  redlazer1.visible=false;
  
  rb2=createSprite(1600,300,800,60);
  rb2.visible=false;
  
  rc1=createSprite(1440,250,50,50);
  rc1.shapeColor="red";
  rc1.visible=false;
  
  life=100;
  br=30
  
  rc2=createSprite(1740,250,50,50);
  rc2.shapeColor="red";
  rc2.visible=false;
  
  rb4=createSprite(2300,50,900,50);
  rb4.shapeColor="brown"
  rb4.visible=false;
  
  rground2=createSprite(2600,450,1800,50);
  rground2.shapeColor="brown";
  rground2.visible=false;
  
  rg=createSprite(2500,70,20,20);
  rg.shapeColor="orange";
  rg.visible=false;
  
rb5=createSprite(3200,420,100,100);
  rb5.visible=false;
  rb5.shapeColor="brown";
  
  lifemeter=createSprite(0,50);
  lifemeter.addImage(lifeimage);
  lifemeter.visible=false;
  lifemeter.scale=0.3;
  
  gun=createSprite(0,0)
  gun.addImage(gunimage);
  gun.scale=0.2;
  gun.visible=false;
  
  rground3=createSprite(4000,200,900,100);
  rground3.visible=false;
  rground3.shapeColor="brown";
  rground.depth=2;
  
  rground4=createSprite(4500,550,1500,100);
  rground4.visible=false;
  rground4.shapeColor="brown";
  
  yr=createSprite(4800,200,1000,5);
  yr.visible=false;
  yr.shapeColor="yellow";
  
  spin=createSprite(4200,450,100,100);
  spin.shapeColor="red";

  spin.addImage(spinimage)
  spin.debug=true;
  spin.setCollider("circle",0,0,120);
  
  rc3=createSprite(3600,330,50,200);
  rc3.shapeColor="red";
  rc3.visible=false;
  rc3.depth=1;
  
  rground5=createSprite(6200,400,1500,100);
  rground5.shapeColor="brown";
  rground5.depth=13;
  rground5.visible=false;
  
  rb6=createSprite(5700,350,100,100);
  rb6.shapeColor="brown";
  rb6.visible=false;
  
  rb7=createSprite(6300,350,100,100);
  rb7.shapeColor="brown";
  rb7.visible=false;
  
  redlazer2=createSprite(6000,340,570,10);
  redlazer2.shapeColor="red";
  redlazer2.visible=false;
  
  rb8=createSprite(7500,50,900,50);
  rb8.shapeColor="brown";
  rb8.visible=false;
  
  rground6=createSprite(7500,550,900,50);
  rground6.visible=false;
  rground6.shapeColor="brown"
  
  rc4=createSprite(6800,350,50,50)
  rc4.shapeColor="red"
  rc4.visible=false;
  rc4.depth=0.1;
  
  rg2=createSprite(7200,80,10,20);
  rg2.shapeColor="orange";
  rg2.visible=false;
  
    rg3=createSprite(7500,80,10,20);
  rg3.shapeColor="orange";
  rg3.visible=false;
  
    rg4=createSprite(7800,80,10,20);
  rg4.shapeColor="orange";
  rg4.visible=false;
  
  rground7=createSprite(8700,550,1000,100);
  rground7.shapeColor="brown";
  rground7.visible=false;
  
  yr2=createSprite(8350,300,5,1000);
  yr2.shapeColor="yellow";
  
  spin2=createSprite(9000,400);
  spin2.addImage(spinimage);
  spin2.scale=0.7
      spin2.setCollider("circle",0,0,120);
  
  rground8=createSprite(10200,550,450,100);
  rground8.shapeColor="brown";
  
  rground9=createSprite(11300,550,450,100);
  rground9.shapeColor="brown"
  
  deadline=createSprite(5500,700,50000,100);
  deadline.shapeColor="red";
  
   restart=createSprite(100,400);
  restart.visible=false;
  restart.shapeColor="orange";
  
  home=createSprite(400,400);
  home.visible=false;
  home.shapeColor="red"
  
  rb9=createSprite(11825,550,100,400);
  rb9.shapeColor="brown";
  
  rb10=createSprite(12200,50,1000,100);
  rb10.shapeColor="brown"
  
  rb11=createSprite(12200,400,1000,100)
  rb11.shapeColor="brown"
  
  rb12=createSprite(12800,200,400,500);
  rb12.shapeColor="brown";
  
  button=createSprite(12000,340,10,30);
  button.shapeColor="green"
  button.depth=0.1;
  
  gate=createSprite(12400,200,50,300);
  gate.shapeColor="brown";
  gate.depth=0.1;
  
  trophy=createSprite(12600,200,50,50);
  trophy.shapeColor="yellow";
  
  rggroup=new Group();
  rbullet=new Group();
  rg1group=new Group();
  wgroup=new Group();
}

function draw() {
background("black");
  red.collide(rground);
  red.collide(rb1);
  red.collide(rb2);
  red.collide(rb4);
red.collide(rb5);
  red.collide(rb6);
  red.collide(rb7);
  red.collide(rb11);
  red.collide(rground4);
  red.collide(rground3);
  red.collide(rground2);
  red.collide(rground5);
  red.collide(rground8);
  red.collide(rground9);
  red.collide(rb8);
  red.collide(rb10);
  red.collide(rground6);
  spin.collide(rground4);
  spin2.collide(rground7);
  red.collide(rground7);
  red.collide(rb9);
  red.collide(rb12);
  red.collide(gate);
  red.collide(trophy);
  
    chuck.collide(rground);
  chuck.collide(rb1);
  chuck.collide(rb2);
  chuck.collide(rb4);
  chuck.collide(gate);
  chuck.collide(trophy);
chuck.collide(rb5);
  chuck.collide(rb12);
  chuck.collide(rb6);
  chuck.collide(rb7);
  chuck.collide(rground4);
  chuck.collide(rground3);
  chuck.collide(rground2);
  chuck.collide(rground5);
  chuck.collide(rground8);
  chuck.collide(rground9);
  chuck.collide(rb8);
  chuck.collide(rground6);
  spin.collide(rground4);
  spin2.collide(rground7);
  chuck.collide(rground7);
  chuck.collide(rb10);
  chuck.collide(rb11);
  
  if(gameState==="start"){
    final.stop();
    camera.x=300;
    camera.y=300;
        starwars.visible=true;
    im.visible=true;
    b.visible=true;
    start.visible=true;
    next.visible=false;
    home.visible=false;
    restart.visible=false;
    if(mousePressedOver(im)){
      music.play();
    }
    if(keyDown("d")){
      music.stop();
    }
    if(mousePressedOver(start)&&gameState==="start"){
      gameState="play";
}
    
  }
  
  
  
  if(gameState==="play"){
    starwars.visible=false;
    im.visible=false;
    b.visible=false;
    start.visible=false;
    next.visible=true;
    textSize(50);
    fill("red");
    textFont("horror")
    text("THE WAR",200,50);
    textSize(22);
    text("All birds are being killed for almost 5,000 years By a Empire.",30,80);
    text("called Galactic army.Pigs have ruled the whole star wars galaxy",30,110);
    text("for almost 1,000 years.",30,140)
    text("But the birds have made an allince to stop that empire",30,170);
        textSize(50);
    fill("red");
    textFont("horror")
    text("Story",250,230);
        textSize(22);
    text("Death star is an artifical pig planet.",30,250);
    text("But the main probelm is death star is destroying the birds planet.",30,280);
    text("To stop that. Birds need to defeat darth vader.",30,300);
    if(mousePressedOver(next)&&gameState==="play"){
      gameState="ch"
}
  }
  
  
  if(gameState==="ch"){
    final.stop();
next.visible=false;
chuck2.visible=true;
    red2.visible=true;
    gate.x=12400;
    gate.y=200;
    if(mousePressedOver(red2)&&gameState==="ch"){
gameState="play2"
    }
    if(mousePressedOver(red2)){
s.play();
    }
        if(mousePressedOver(chuck2)&&gameState==="ch"){
gameState="play3"
    }
    if(mousePressedOver(chuck2)){
s.play();
    }
  }
  
  
  
  if(gameState==="play2"){
    lifemeter.addImage(lifeimage)
    camera.x=red.x
    gun.x=red.x-12;

    gun.y=red.y+5
    restart.visible=false;
    home.visible=false;
        rb1.visible=true;
    if(frameCount%10===0){
 rb();
      bob2();
      bob4();
      bob3();
    }
   if(red.collide(button)){
     gate.velocityY=-1;
     
   }
    if(red.collide(trophy)&&gameState==="play2"){
      gameState="win"
      final.play();
    }
    
        if(frameCount%30===0){
umwall();
          umwall2();
    }
    
    
    if(keyDown("up")){
saber();
      red.x=red.x+15
    }
    spin.velocityY=spin.velocityY+22
    spin2.velocityY=spin2.velocityY+22
    red.velocityY=red.velocityY+2
  if(keyWentDown("space")&&red.y>200){
red.velocityY=-35
  }
    
   if( rggroup.isTouching(rground2)){
     rggroup.destroyEach();
}
    
       if( rg1group.isTouching(rground6)){
     rg1group.destroyEach();
}

    
    if(keyWentDown("enter")){
      gun.visible=true;
redgun();
    }
    if(keyWentUp("enter")){
gun.visible=false;
      br=br-30;
    }
    if(br===0){
rbullet.destroyEach();
    }
    chuck2.visible=false;
    lifemeter.x=red.x-170
rground.visible=true
    rground6.visible=true;
  red2.visible=false;
       rb2.visible=true;
    rg2.visible=true;
      redlazer1.visible=true;
  red.visible=true;
    rc1.visible=true;
    rc2.visible=true;
    rc3.visible=true;
    rc4.visible=true;
    rb4.visible=true;
    rb5.visible=true;
    rb6.visible=true;
    rg.visible=true;
    rg3.visible=true;
    rg4.visible=true;
    rb8.visible=true;
    redlazer2.visible=true;
    rb7.visible=true;
    spin.visible=true;
    yr.visible=true;
    rground4.visible=true;
    rground5.visible=true;
    lifemeter.visible=true;
  rground2.visible=true;
    rground7.visible=true;
rb5.visible=true;
    red.collide(wgroup);
    rground3.visible=true;
    
    if(keyDown("right")){
      red.x=red.x+9
      red.addImage(redimage);
    }
    
    
    if(keyDown("left")){
red.x=red.x-9
      red.addImage(redbackimage)
    }
    if(red.isTouching(yr)){
spin.velocityX=19;
}
        if(red.isTouching(yr2)){
      spin2.velocityX=-10
    }
    
red.velocityY=red.velocityY+0.8
    stroke("white");
  strokeWeight(12);
  fill("red");
    textFont("Impact");
    textSize(40)
  text("Press left and right to move. ",200,300);
    text("Press space to jump.",1000,100);
    if(spin.collide(deadline)){
spin.x=4000
  spin.y=450
      spin.velocityX=0;
    }
    if(spin2.collide(deadline)){
  spin2.x=9000;
spin2.y=400
      spin2.velocityX=0;
    }
  
  
  
  if(red.isTouching(redlazer1)||red.isTouching(redlazer2)||red.isTouching(rc1)||red.isTouching(rc2)||red.isTouching(rggroup)||red.isTouching(rg1group)||red.isTouching(rc4)||red.isTouching(rc3)&&gameState==="play2"){
life=life-10
    red.x=red.x-40
  }
  if(red.isTouching(spin)||red.isTouching(spin2)){
     life=life-50
    red.x=red.x+10
     
     }
  
  if(red.isTouching(deadline)&&gameState==="play2"){
    
   gameState="end"
  }
  
  if(life<=75){
lifemeter.addImage(medium)
  }
  if(life<=50){
    lifemeter.addImage(half)
  }
  if(life<=25){
lifemeter.addImage(low);
  }
  if(life<=10){
lifemeter.addImage(verylow);
     }
  if(life<=0){
gameState="end"
  }
  
  }
  
  if(gameState==="win"){
    s.stop();

    home.visible=true;
red.visible=false;
    chuck.visible=false;
    rb1.visible=false;
    redlazer1.visible=false;
    rground.visible=false;
 camera.x=340
   restart.visible=true;
    red.x=300;
    red.y=300;
chuck.x=300;
    chuck.y=300;
    textSize(140);
    textFont("Impact");
    fill("cyan")
    text("YOU WIN",100,300);
    gate.x=12400;
    gate.y=200;
    if(mousePressedOver(restart)&&gameState==="win"){
gameState="ch"
      life=100

    }
      if(mousePressedOver(home)&&gameState==="win"){
gameState="start"
      life=100
    }
  }
  
  if(gameState==="play3"){
    lifemeter.addImage(lifeimage)
    camera.x=chuck.x
    gun.x=chuck.x-12;

    gun.y=chuck.y+5
    restart.visible=false;
    home.visible=false;
        rb1.visible=true;
    if(frameCount%10===0){
 rb();
      bob2();
      bob4();
      bob3();
    }
    
        if(frameCount%30===0){
umwall();
          umwall2();
    }
    
    
    if(keyDown("up")){

      chuck.x=chuck.x+15
    }
    spin.velocityY=spin.velocityY+22
    spin2.velocityY=spin2.velocityY+22
    chuck.velocityY=chuck.velocityY+2
  if(keyWentDown("space")&&chuck.y>200){
chuck.velocityY=-35
  }
    
   if( rggroup.isTouching(rground2)){
     rggroup.destroyEach();
}
    
       if( rg1group.isTouching(rground6)){
     rg1group.destroyEach();
}

    
    if(keyWentDown("enter")){
      gun.visible=true;
redgun();
    }
    if(keyWentUp("enter")){
gun.visible=false;
      br=br-30;
    }
    if(br===0){
rbullet.destroyEach();
    }
    chuck2.visible=false;
    lifemeter.x=chuck.x-170
rground.visible=true
    rground6.visible=true;
  red2.visible=false;
       rb2.visible=true;
    rg2.visible=true;
      redlazer1.visible=true;
  chuck.visible=true;
    rc1.visible=true;
    rc2.visible=true;
    rc3.visible=true;
    rc4.visible=true;
    rb4.visible=true;
    rb5.visible=true;
    rb6.visible=true;
    rg.visible=true;
    rg3.visible=true;
    rg4.visible=true;
    rb8.visible=true;
    redlazer2.visible=true;
    rb7.visible=true;
    spin.visible=true;
    yr.visible=true;
    rground4.visible=true;
    rground5.visible=true;
    lifemeter.visible=true;
  rground2.visible=true;
    rground7.visible=true;
rb5.visible=true;
    chuck.collide(wgroup);
    rground3.visible=true;
    
    if(keyDown("right")){
      chuck.x=chuck.x+15
      chuck.addImage(chuckimage);
    }
    
    
    if(keyDown("left")){
chuck.x=chuck.x-15
 
    }
    if(chuck.isTouching(yr)){
spin.velocityX=19;
}
        if(chuck.isTouching(yr2)){
      spin2.velocityX=-10
    }
    
chuck.velocityY=chuck.velocityY+0.8
    stroke("white");
  strokeWeight(12);
  fill("red");
    textFont("Impact");
    textSize(40)
  text("Press left and right to move. ",200,300);
    text("Press space to jump.",1000,100);
    if(spin.collide(deadline)){
spin.x=4000
  spin.y=450
      spin.velocityX=0;
    }
    if(spin2.collide(deadline)){
  spin2.x=9000;
spin2.y=400
      spin2.velocityX=0;
    }
  
  
  
  if(chuck.isTouching(redlazer1)||chuck.isTouching(redlazer2)||chuck.isTouching(rc1)||chuck.isTouching(rc2)||chuck.isTouching(rggroup)||chuck.isTouching(rg1group)||chuck.isTouching(rc4)||chuck.isTouching(rc3)&&gameState==="play2"){
life=life-10
    chuck.x=chuck.x-40
  }
  if(chuck.isTouching(spin)||chuck.isTouching(spin2)){
     life=life-50
    chuck.x=chuck.x+10
     
     }
  
  if(chuck.isTouching(deadline)&&gameState==="play2"){
    
   gameState="end"
  }
  
  if(life<=75){
lifemeter.addImage(medium)
  }
  if(life<=50){
    lifemeter.addImage(half)
  }
  if(life<=25){
lifemeter.addImage(low);
  }
  if(life<=10){
lifemeter.addImage(verylow);
     }
  if(life<=0){
gameState="end"
  }
  }
  
  if(gameState==="end"){


    s.stop();
    home.visible=true;
red.visible=false;
    chuck.visible=false;
    rb1.visible=false;
    redlazer1.visible=false;
    rground.visible=false;
 camera.x=340
   restart.visible=true;
    red.x=300;
    red.y=300;
chuck.x=300;
    chuck.y=300;
    textSize(140);
    textFont("Impact");
    fill("red")
    text("YOU LOSE",100,300);
    if(mousePressedOver(restart)&&gameState==="end"){
gameState="ch"
      life=100

    }
      if(mousePressedOver(home)&&gameState==="end"){
gameState="start"
      life=100
    }
  }
  
  
  

  
  
  
  
  

  drawSprites();
}
function saber(){
  var lightsaber=createSprite(red.x+45,red.y+10,100,3);
  lightsaber.life=1;
  lightsaber.shapeColor="cyan";
}

function rb (){

var b=createSprite(0,0,10,10);
    b.x=rg.x;
    b.y=rg.y;
    b.shapeColor="red";
  b.velocityY=10;
rggroup.add(b)  

}

function bob2(){
  var b=createSprite(0,0,10,10);
    b.x=rg2.x;
    b.y=rg2.y;
    b.shapeColor="red";
  b.velocityY=10;
rg1group.add(b)  
  
}

function bob3(){
  var b=createSprite(0,0,10,10);
    b.x=rg3.x;
    b.y=rg3.y;
    b.shapeColor="red";
  b.velocityY=10;
rg1group.add(b)  
  
}

function bob4(){
  var b=createSprite(0,0,10,10);
    b.x=rg4.x;
    b.y=rg4.y;
    b.shapeColor="red";
  b.velocityY=10;
rg1group.add(b)  
  
}

function redgun(){
var bullet=createSprite(0,0,10,2);
  bullet.x=red.x;
  bullet.y=red.y+10
  bullet.shapeColor="red";
  bullet.velocityX=22;
  redgun.life=19
rbullet.add(bullet);
}

function umwall(){
var w=createSprite(9600,600,200,10);
  w.velocityY=-8;
  w.shapeColor="brown";
  wgroup.add(w);
}
function umwall2(){
var w=createSprite(10800,600,200,10);
  w.velocityY=-8;
  w.shapeColor="brown";
  wgroup.add(w);
}