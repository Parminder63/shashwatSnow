class Snow{
	constructor(x,y,r){
		var options={
			restitution :0.1,
            friction :0.3,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("snow4.webp");
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display(){
		var Pos=this.body.position;	
		push()
		// translate(Pos.x, Pos.y);
		// rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, Pos.x,Pos.y,this.r*2, this.r*2);
		pop()
 }
}