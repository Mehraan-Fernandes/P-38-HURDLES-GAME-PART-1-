class Form{
    constructor(){
        this.heading = createElement("h3");
        this.input = createInput("Enter Your Name");
        this.submit = createButton("Submit");
        
    }

    display(){
        this.heading.html("HURDLES : THE GAME");
        this.heading.position(width/2-165,height/2-200);
        this.input.position(width/2-165,height/2);
        this.submit.position(width/2+20,height/2)

        this.submit.mousePressed(()=>{
            this.hideEntry();
        });
    }
    hideEntry(){
        this.heading.hide();
        this.input.hide();
        this.submit.hide();
    }
}