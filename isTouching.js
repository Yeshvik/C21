function isTouching(p,q){ //p,q are parameters
    if (p.x-q.x<p.width/2+q.width/2&&q.x-p.x<p.width/2+q.width/2&&p.y-q.y<p.height/2+q.height/2&&q.y-p.y<p.height/2+q.height/2){
     return true;
    }
    else {
      return false;  
    }
  }