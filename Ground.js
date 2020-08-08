class Ground {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width;
        this.height = height;
//        World.add(world, this.body);
    }

    display() {
        rectMode(CENTER);
       // noStroke();
        fill(55,250,62);
        rect(this.x, this.y, this.width, this.height);
    }

}