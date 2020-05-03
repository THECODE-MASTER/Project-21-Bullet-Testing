function preload(){
  bi=loadImage("b.png");
  bu=loadImage("bu.png");
}
function setup() {
  createCanvas(1250,400);
  bullet=createSprite (50, 200, 30, 30);
  bullet.velocityX=0;
  bullet.scale=0.2;
  bullet.addImage(bu);
  wall=createSprite(1200,200,60,200);
  wall.shapeColor=rgb(80,80,80);
  state=1;
  speed="";
  weight="";
  thick="";
}

function draw() {
  if (state==1 || state==1.5){
    background("black");
    fill("white");
    textSize(20);
    if (state==1){
      text("Enter Speed"+"   "+speed,525,200);
      if (World.frameCount % 30==0){
      state=1.5;
      }
    }
    else {
      text("Enter Speed_"+" "+speed,525,200);
      if (World.frameCount % 30==0){
        state=1;
        }
        }
        textSize(15);
        text(" Conditions: speed > 223 && speed <321",480,218);
        text(" Press Enter key to continue ",480,238);
    if (keyWentDown("1")){
      speed=speed+""+1
    }
    if (keyWentDown("2")){
      speed=speed+""+2
    }
    if (keyWentDown("3")){
      speed=speed+""+3
    }
    if (keyWentDown("4")){
      speed=speed+""+4
    }
    if (keyWentDown("5")){
      speed=speed+""+5
    }
    if (keyWentDown("6")){
      speed=speed+""+6
    }
    if (keyWentDown("7")){
      speed=speed+""+7
    }
    if (keyWentDown("8")){
      speed=speed+""+8
    }
    if (keyWentDown("9")){
      speed=speed+""+9
    }
    if (keyWentDown("0")){
      speed=speed+""+0
    }
    if (keyWentDown("left")){
      speed="";
    }
    if(keyWentDown("enter")){
      if (speed>=223 && speed<=321)
      state=state+1;
      else {
        speed="";
      }
    }
    }
    else if (state==2 || state==2.5){
      background("black");
      fill("white");
      textSize(20);
      if (state==2){
        text("Enter Weight"+"   "+weight,525,200);
        if (World.frameCount % 30==0){
        state=2.5;
        }
      }
      else {
        text("Enter Weight_"+" "+weight,525,200);
        if (World.frameCount % 30==0){
          state=2;
          }
          }
          textSize(15);
          text(" Conditions: weight > 30 && weight <52",480,218);
          text(" Press Enter key to continue ",480,238);
      if (keyWentDown("1")){
        weight=weight+""+1
      }
      if (keyWentDown("2")){
        weight=weight+""+2
      }
      if (keyWentDown("3")){
        weight=weight+""+3
      }
      if (keyWentDown("4")){
        weight=weight+""+4
      }
      if (keyWentDown("5")){
        weight=weight+""+5
      }
      if (keyWentDown("6")){
        weight=weight+""+6
      }
      if (keyWentDown("7")){
        weight=weight+""+7
      }
      if (keyWentDown("8")){
        weight=weight+""+8
      }
      if (keyWentDown("9")){
        weight=weight+""+9
      }
      if (keyWentDown("0")){
        weight=weight+""+0
      }
      if (keyWentDown("left")){
        weight="";
      }
      if(keyWentDown("enter")){
        if (weight>=30 && weight<=52)
        state=state+1;
        else {
          weight="";
        }
      }
      }
      else if (state==3 || state==3.5){
        background("black");
        fill("white");
        textSize(20);
        if (state==3){
          text("Enter Thickness"+"   "+thick,525,200);
          if (World.frameCount % 30==0){
          state=3.5;
          }
        }
        else {
          text("Enter Thickness_"+" "+thick,525,200);
          if (World.frameCount % 30==0){
            state=3;
            }
            }
            textSize(15);
            text(" Conditions: Wall thickness > 22 && Wall thickness <83",450,218);
            text(" Press Enter key to continue ",480,238);
        if (keyWentDown("1")){
          thick=thick+""+1
        }
        if (keyWentDown("2")){
          thick=thick+""+2
        }
        if (keyWentDown("3")){
          thick=thick+""+3
        }
        if (keyWentDown("4")){
          thick=thick+""+4
        }
        if (keyWentDown("5")){
          thick=thick+""+5
        }
        if (keyWentDown("6")){
          thick=thick+""+6
        }
        if (keyWentDown("7")){
          thick=thick+""+7
        }
        if (keyWentDown("8")){
          thick=thick+""+8
        }
        if (keyWentDown("9")){
          thick=thick+""+9
        }
        if (keyWentDown("0")){
          thick=thick+""+0
        }
        if (keyWentDown("left")){
          thick="";
        }
        if(keyWentDown("enter")){
          if (thick>=22 && thick<=83)
          state=state+1;
          else {
            thick="";
          }
        }
        }
    else if(state==4 || state==4.5){
  background("black");  
 if (keyWentDown("left")){
   state=1;
 }
 if (keyWentDown("space")){
  state=5;
}
 fill("white");
 textSize(20);
 text("Press space key to simulate",525,200);
 textSize(15);
text("Press left key to enter all values again",525,218);
}
 else if(state==5 || state==5.5){
  background(bi);
 if (isTouching(bullet,wall)){
  bullet.velocityX=0;
  wall.width=thick;
  result= 0.5*speed*speed*weight
  resulto=thick*thick*thick
  result=result/resulto;
  result=Math.round(result);
  fill("orange");
  textSize(20);
  text("Speed: "+speed,950,160);
  text("Weight: "+weight,950,200);
  text("Wall Thickness: "+thick,950,240);
  text("Result: "+result,950,280); 
  text("Press space key to restart",525,300);
  if (result>=10){
    wall.shapeColor="rgb(300,0,0)";
  }
  else{
    wall.shapeColor="rgb(0,300,0)";
  }
  if (keyWentDown("space")){
    state=1;
    speed="";
    weight="";
    thick="";
    bullet.x=50;
    wall.shapeColor=rgb(80,80,80);
  }
 }
 else{
  bullet.velocityX=speed/10;
  wall.width=thick;
  }
 drawSprites();
 } 
}