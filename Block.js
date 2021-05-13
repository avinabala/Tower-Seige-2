class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.visiblity = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("block.png")
      World.add(world, this.body);
      
    }
   
    display(){
      var pos = this.body.position;
      var angle = this.body.angle
      if(this.body.speed <5){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
      }else{
      World.remove(world, this.body);
      push();
      this.visiblity = this.visiblity - 5;
      tint(255,this.visiblity);
      image(this.image, pos.x, pos.y,this.width, this.height);
      pop();
    }
  }
}