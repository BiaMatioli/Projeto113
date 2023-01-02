function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();

    camera = createCapture(VIDEO);
    camera.size(450, 400);
    camera.hide()
}

function draw(){
    rect(0, 0, 640, 480);
    circle(0, 75, 150, 100);
    circle(0, 175, 150, 100);
    circle(0, 275, 150, 100);
    circle(0, 375, 150, 100);
    circle(0, 475, 150, 100);
    circle(0, 575, 150, 100);

    circle(640, 75, 150, 100);
    circle(640, 175, 150, 100);
    circle(640, 275, 150, 100);
    circle(640, 375, 150, 100);
    circle(640, 475, 150, 100);
    circle(640, 575, 150, 100);
    image(camera, 150, 75, 350, 350);
}

function tirarFoto(){
    save("foto.png");
}