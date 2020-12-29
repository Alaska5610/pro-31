class division{
    constructor(x,y,width,height){
        var option={
            isStatic: true,
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
        display(){
            var pos =this.body.position;
            rectMode(CENTER);
            fill(255,255,255);
            rect(pos.x, pos.y, this.width, this.height);
    }
}