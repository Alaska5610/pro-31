class plinko
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0,
			}
		this.x=x;
		this.y=y;
		this.r=10;
		
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
		var pos=this.body.position;
        var angle = this.body.angle;

			push()
            translate(pos.x,pos.y);
            rotate(angle);
			rectMode(CENTER)
            noStroke();
            fill(255,255,255);
            ellipseMode(RADIUS);
			ellipse(0,0,this.r, this.r);
			pop()
			
    }

}