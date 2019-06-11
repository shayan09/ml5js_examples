p5.disableFriendlyErrors = true; // disables FES

let model;
let objects = [];

function setup() {
    createCanvas(640, 480);
    img = createImg("./street.jpeg", imageReady);
    model = ml5.YOLO(modelReady);
    img.hide();
}

function imageReady() {
    console.log('Image is ready');
    image(img, 0, 0, 640, 480);
}

function modelReady() {
    console.log('Model is ready');
    model.detect(img, gotResults);
}

function gotResults(err, results) {
    if (err) {
      console.log(err);
    }
    objects = results;
}

function draw() {
    for (let i = 0; i < objects.length; i++) {
        if(objects[i].classProb > 0.50) {
            noStroke();
            fill(0, 255, 0);
            text(objects[i].className + " " + nfc(objects[i].classProb * 100.0, 2) + "%", objects[i].x * width + 5, objects[i].y * height + 15);
            noFill();
            strokeWeight(4);
            stroke(0, 255, 0);
            rect(objects[i].x * width, objects[i].y * height, objects[i].w * width, objects[i].h * height);
        }
      }
}

