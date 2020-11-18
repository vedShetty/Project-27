class Bob{
    constructor(x, y){
        var options = {
            'restitution':1.0, 
            'friction':0,
            'frictionAir':0.03,
            'density':0.8
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.diameter = 30;
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        stroke("black");
        fill("violet");
        ellipse(0,0,this.diameter);
        pop();      
   }

}
