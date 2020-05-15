class Ground{
    constructor(x, y, width, height){
       var options={
           restitution : 0,
           friction : 1, 
           isStatic : true,    
           } 
            this.body = Bodies.rectangle(x, y, width, height,options);
              World.add(world, this.body);  
        
    }
    display(){
        var pos = this.body.position; 
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, 400, 20);   
    }
     
}