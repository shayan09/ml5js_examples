let mobilenet;
let video;
let label;

function setup() {
    createCanvas(400, 300);

    video = createCapture(VIDEO);

    video.hide();

    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function modelReady() {
    console.log('Model is Ready');

    mobilenet.predict(result);
}

function imageReady() {
    console.log('Image is ready');
}

function result(err, res) {
    if(err) {
        console.error(err);
    }
    else {
        label = res[0].className;
        mobilenet.predict(result);
    }   
}

function draw() {
    image(video, 0, 0, 400, 300);
    fill(0);
    textSize(32);
    text(label, 10, 200);
}