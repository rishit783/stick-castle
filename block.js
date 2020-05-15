class Block{
    constructor(x, y, width, height){
       var options={
           restitution : 0,
           friction : 1,
           density : 1,     
           } 
            this.body = Bodies.rectangle(x, y, width, height,options);
              World.add(world, this.body);  
        
    }
    display(){
        var pos = this.body.position; 
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, 100, 20);   
    }
     
}