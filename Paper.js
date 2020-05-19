class Paper{
    constructor(){
        var options ={
            restitution :0.2,
            friction :0.5,
            density :1.2
        }
        this.body = Bodies.circle(250,540,23,options);
        this.radius=23;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.height);
    }
}