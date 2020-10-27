class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.bigSmoke = loadImage("sprites/smoke.png");
    this.trajedy = [];
  }

  display() {
    if (this.body.velocity.x > 10 && this.body.position.x > 200){
    var posit = [this.body.position.x,this.body.position.y];
    this.trajedy.push(posit);
  }
    for (var i = 0;i < this.trajedy.length;i += 1) {
      image(this.bigSmoke,this.trajedy[i][0],this.trajedy[i][1])
    }
    super.display();
  }
}
