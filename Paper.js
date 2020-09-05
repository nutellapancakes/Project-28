class Paper{
    constructor(x,y){
        var options ={
            restitution:0.3,
            friction:0.5,
            density:1.5,
        }
        this.body = Matter.Bodies.circle(x,y,15,options);
        this.radius = 40;
        this.image = loadImage("paper ball.png")
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        //fill("white");
        //ellipseMode(CENTER);
        //ellipse(pos.x,pos.y,this.radius,this.radius);
        image(this.image,pos.x,pos.y-20,this.radius,this.radius);
    }
}