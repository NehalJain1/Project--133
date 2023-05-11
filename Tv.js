status = "";
Tv_image = "";
objects = [];

function preload(){
    Tv_image = loadImage("Tv.jpeg");
}
    
    function setup(){
    canvas = createCanvas (500,400);
    canvas.position(480,200);
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status5").innerHTML ="Status : Detecting Objects";
    }
 
function draw() {
image(Tv_image,0,0,500,400);

if (status != ""){
    for(i = 0; i < objects. length; i++){
    document.getElementById("status5").innerHTML = "Status: Objects Detected";
    percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 30, objects[i].y + 15);
        noFill();       
        stroke("#FF0000");
        rect(objects[i].x + 20, objects[i].y + 20, objects[i].width + 170, objects[i].height + 190);
    }
}
}

function modelLoaded() {
    console.log("Model loaded");
    status = true;
    objectDetector.detect(Tv_image, gotresults);
}

function gotresults(error,results) {
if(error) {
console.log(error);
}
console.log(results);
objects = results;
}