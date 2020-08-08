class Player {
    constructor() {
        //For this project i have used vectors as it was difficult using matter.js 
        this.pos = createVector(0,570);
        this.vel = createVector(3,0);
        this.acc = createVector(0,0);

        //World.add(world, this.body);
    }

    applyForce(force) {
        this.acc.add(force)
    }

    update(){
        this.vel.add(this.acc);
        this.pos.add(this.vel)
        this.acc.set(0,0);
    }

    
    display() {        
        push();
        rectMode(CENTER);
        fill(50,93,95);
        rect(this.pos.x,this.pos.y,20,60);
        pop();
    }

    edges(){
        if(this.pos.y + 31  > height){
            this.vel.y *= 0
            this.pos.y = height-30
        }
    }


}