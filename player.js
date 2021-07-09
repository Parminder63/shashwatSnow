class Player{
  constructor(x,y,width,height){
    var options = {
       
        isStatic:true,
    }
    
	// this.image=loadImage("");
	this.body=Bodies.rectangle(x,y,width,height,options);
	this.x = x;
	this.y = y;
	this.width = width;
    this.height = height;
	World.add(world, this.body);
	}

	display(){
	  var pos=this.body.position;	
	  push();
      fill("yellow");
	  rectMode(CENTER);
	  rectMode(CENTER);
	  rect(pos.x,pos.y,this.width,this.height);
	  pop();
 }
}