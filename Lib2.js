function bounceoff(r1,r2){
    if (r1.x-r2.x<=r1.width/2+r2.width/2 && r2.x-r1.x<=r2.width/2+r1.width/2){
      r1.velocityX=r1.velocityX*(-1);
      r2.velocityX=r2.velocityX*(-1);
      
    }
    if (r1.x>700 || r1.x<100){
      r1.velocityX=r1.velocityX*(-1);
    }
    if (r2.x>700 || r2.x<100){
      r2.velocityX=r2.velocityX*(-1);
    }
    else if(r1.y-r2.y<=r1.height/2+r2.height/2 && r2.y-r1.y<=r2.height/2+r1.height/2){
      r1.velocityY=r1.velocityY*(-1);
      r2.velocityY=r2.velocityY*(-1);
     if (r1.y>400 || r1.y<0){
      r1.velocityY=r1.velocityY*(-1);
    }
    if (r2.y>400 || r2.y<0){
      r2.velocityY=r2.velocityY*(-1);
    }
    }
     
    }
 