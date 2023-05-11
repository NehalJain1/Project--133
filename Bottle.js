status = "";
Bottle_image = "";
objects = [];

function preload(){
    Bottle_image = loadImage("Bottle.jpeg");
}
    
    function setup(){
    canvas = createCanvas (500,400);
    canvas.position(480,200);
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status2").innerHTML ="Status : Detecting Objects";
    }

function draw() {
image(Bottle_image,0,0,500,400);

if (status != ""){
    for(i = 0; i < objects.length; i++){
    document.getElementById("status2").innerHTML = "Status: Objects Detected";
    percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 100, objects[i].y + 15);
        noFill();       
        stroke("#FF0000");
        rect(objects[i].x + 100, objects[i].y + 20, objects[i].width + 120, objects[i].height + 100);
    }
}
}

function modelLoaded() {
    console.log("Model loaded");
    status = true;
    objectDetector.detect(Bottle_image, gotresults);
}

function gotresults(error,results) {
if(error) {
console.log(error);
}
console.log(results);
objects = results;
}