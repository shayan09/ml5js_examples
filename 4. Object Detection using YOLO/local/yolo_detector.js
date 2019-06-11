let model;
let objects = [];
let video;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(640, 480);

    video.hide();

    model = ml5.YOLO(video, ModelReady);
}

function ModelReady() {
    console.log('Model is ready');
    detect();
}

function draw() {
    image(video, 0, 0, 640, 480);
    console.log(objects.length);
    for(var i = 0; i < objects.length; i++) {
        fill(0, 0, 0);
        noStroke();
        text(objects[i].className, objects[i].x*640, objects[i].y*480);
        textSize(24);
        console.log(objects[i].className);
        noFill();
        strokeWeight(4);
        stroke(0, 0, 255);
        rect(objects[i].x*640, objects[i].y*480, objects[i].w*640, objects[i].h*480);
    }
}

function detect() {
    model.detect(function(err, results) {
        objects = results;
        detect();
    })
}