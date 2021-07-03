class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = loadImage("./assets/player.png");

        var bodyOptions = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, bodyOptions);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        image(this.img, 0, 0, this.width, this.height);
        pop();
    }
}