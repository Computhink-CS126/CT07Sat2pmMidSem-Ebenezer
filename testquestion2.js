let ball;
let gorund;
function setup(){
    new Canvas(600,400);
    background(0); 
    world.gravity.y = 10;
    gorund = new Sprite(300, 380, 600, 20,"static");
}
function draw(){
    clear()
    if (mouse.presses()){
        fill (random(255),random(255),random(255));
        ball = new Sprite(mouse.x, mouse.y, 20,"dynamic");
        ball.bounciness = 0.8
    }
  
}