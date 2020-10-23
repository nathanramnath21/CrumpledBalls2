class Paper {
    constructor(x,y,r) {
        var options = {
            isStatic:false,
            restitution:0.3,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        this.image = loadImage("png's/paper.png");
        World.add(world, this.body);

    }
    display(){
        var paperpos=this.body.position;

        push()
        translate(paperpos.x, paperpos.y)
        rectMode(CENTER)
        fill("white")
        //ellipse(0,0,this.r, this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop()
    }
}