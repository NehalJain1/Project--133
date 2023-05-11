status = "";
Bulb_image = "";
objects = [];

function preload(){
    Bulb_image = loadImage("Clock.jpeg");
}
    
    function setup(){
    canvas = createCanvas (500,500);
    canvas.position(480,200);
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status3").innerHTML ="Status : Detecting Objects";
    }

function draw() {
image(Bulb_image,0,0,500,500);

if (status != ""){
    for(i = 0; i < objects. length; i++){
    document.getElementById("status3").innerHTML = "Status: Objects Detected";
    percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x - 30, objects[i].y - 8);
        noFill();       
        stroke("#FF0000");
        rect(objects[i].x - 20, objects[i].y - 5, objects[i].width - 90, objects[i].height - 90);
    }
}
}

function modelLoaded() {
    console.log("Model loaded");
    status = true;
    objectDetector.detect(Bulb_image, gotresults);
}

function gotresults(error,results) {
if(error) {
console.log(error);
}
console.log(results);
objects = results;
}