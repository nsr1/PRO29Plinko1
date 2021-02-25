class Polygon{
    constructor(x,y,radius){
    this.x = x
    this.y = y
    this.r = radius
    this.body = Bodies.rectangle(this.x,this.y,this.r/2)
    this.image = loadImage("sprites/polygon.png")
    World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        push()
        translate(pos.x, pos.y)
        ellipseMode(RADIUS);
        fill("pink");
        imageMode(RADIUS)
        image(this.image,0,0,this.r,this.r)
        pop()
            }
}