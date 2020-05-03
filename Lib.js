function isTouching(mrect,frect){
   if (mrect.x-frect.x<=mrect.width/2+mrect.width/2 && mrect.y-frect.y<=mrect.height/2+mrect.height/2 &&  frect.x-mrect.x<=mrect.width/2+mrect.width/2 && frect.y-mrect.y<=mrect.height/2+mrect.height/2){
    // frect.shapeColor="green";
   // mrect.shapeColor="green";
    return true;
  }
  else{
   // frect.shapeColor="red";
   // mrect.shapeColor="red";
    return false;
  }
  }

   