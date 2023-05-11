status = "";
AC_image = "";
objects = [];

function preload(){
    AC_image = loadImage("scissors.webp");
}
    
    function setup(){
    canvas = createCanvas (500,400);
    canvas.position(480,200);
    object_detector = ml5.objectDetector('cocossd',modellLoaded);
    document.getElementById("status1").innerHTML ="Status : Detecting Objects";
    }

function draw() {
image(AC_image,0,0,500,400);

if(status != "") {
    for(i = 0; i < objects.length; i++) {
document.getElementById("status1").innerHTML = "Status : Objects Detected";
fill("#fc0303");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[i].x - 50, objects[i].y - 170);
noFill();
stroke("#fc0303");
rect(objects[i].x - 50, objects[i].y - 167, objects[i].width - 700, objects[i].height - 330);
    }
}
}

function modellLoaded(){
    console.log("Model Loaded!");
    status = true;
    object_detector.detect(AC_image, gotresults);
    }

    function gotresults(error,results) {
        if(error) {
        console.log(error);
        }
        console.log(results);
        objects = results;
        }
    
