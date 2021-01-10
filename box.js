class Box{
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visiblity=255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      if(this.body.speed<7){
        rectMode(CENTER);
        fill("lightGreen");
        rect(pos.x, pos.y, this.width, this.height);
      } else {
        World.remove(world,this.body);
        push();
        this.visiblity=this.visiblity-5;
        tint(255,this.visiblity)
        pop();
      }
    }
  }; 