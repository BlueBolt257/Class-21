//Design for the ground

class Ground {
    //PROPERTIES
    constructor(x, y, w, h){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    //FUNCTIONS
    display(){
        fill("red");
        rectMode(CENTER); //Instructs the computer to take the x & y as the centre of rectangle
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}

/*
trex.visible

this - keyword that refers to the object to be created later

trex = createSprite(50, 60, 50, 50)
*/