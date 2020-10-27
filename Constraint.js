class YeeYee{
    constructor(body1,point2){
        var options = {
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.0175
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        //console.log(this.chain)
        this.yeet1 = loadImage("sprites/sling1.png")
        this.yeet2 = loadImage("sprites/sling2.png")
        this.yeet3 = loadImage("sprites/sling3.png")
    }
    display(){
        push();
        imageMode(CENTER)
        image(this.yeet1,250,160,38,120);
        image(this.yeet2,225,135,38,80);
        pop();
        if (this.chain.bodyA){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.pointB;
        push();
        strokeWeight(10);
        stroke("#301708");
        line(posA.x-25,posA.y,posB.x-13,posB.y+20);
        line(posA.x+25,posA.y,posB.x+25,posB.y+20);
        imageMode(CENTER);
        if (posA.x>230){
            image(this.yeet3,posA.x+26,posA.y+3,15,30);
        } else {
            image(this.yeet3,posA.x-26,posA.y+3,15,30);
        }
        //line(posA.x,posA.y,posB.x,posB.y);
        pop();
        }
    }
    attach(body){
        this.chain.bodyA=body;
    }
    fly() {
        this.chain.bodyA=false;
    }
}