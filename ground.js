class Ground{
    constructor(x,y,width,height){
      var options = {
          isStatic:true,
      }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      World.add(world, this.body);
      }
  
      display(){
        var pos=this.body.position;	
        push();
        fill("brown");
        rectMode(CENTER);
        rectMode(CENTER);
        rect(0,0,pos.x,pos.y);
        pop();
   }
  }