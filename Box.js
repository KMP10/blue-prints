class box{
  constructor(x,y,width,height){
   var options = {
    restitution:1
    

   }
     this.object = Bodies.rectangle(x,y,width,height,options);
    // this.width = width;
     //this.height = height;
     World.add(world,this.object);

  }

   display(){
   var pos = this.object.Position;
    
  rectMode(CENTER);
  rect(pos.x,pos.y,this.width,this.height);
    


   }

}