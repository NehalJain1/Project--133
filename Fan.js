status = "";
Chair_image = "";
objects = [];

function preload(){
    Chair_image = loadImage("Chair.jpeg");
}
    
    function setup(){
    canvas = createCanvas (500,400);
    canvas.position(480,200);
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status4").innerHTML ="Status : Detecting Objects";
    }

function draw() {
image(Chair_image,0,0,500,400);

if (status != ""){
    for(i = 0; i < objects. length; i++){
    document.getElementById("status4").innerHTML = "Status: Objects Detected";
    percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x - 10, objects[i].y + 15);
        noFill();       
        stroke("#FF0000");
        rect(objects[i].x + 45, objects[i].y, objects[i].width + 190, objects[i].height + 175);
    }
}
}

function modelLoaded() {
    console.log("Model loaded");
    status = true;
    objectDetector.detect(Chair_image, gotresults);
}

function gotresults(error,results) {
if(error) {
console.log(error);
}
console.log(results);
objects = results;
}