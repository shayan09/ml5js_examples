let mobilenet;
let video;
let label;
let button1;
let button2;
let button3;

function setup() {
    createCanvas(400, 300);

    video = createCapture(VIDEO);

    video.hide();

    mobilenet = ml5.featureExtractor('MobileNet', modelReady);

    classifier = mobilenet.classification(video, videoReady);

    button1 = createButton('Pen');
    button1.mousePressed(function() {
        classifier.addImage('Pen');
    })

    button2 = createButton('Band');
    button2.mousePressed(function() {
        classifier.addImage('Band');
    })

    button3 = createButton('Train');
    button3.mousePressed(function() {
        classifier.train(whileTraining)
    })
}

function whileTraining(loss) {
    if(loss == null) {
        console.log('Training is complete');
        classifier.classify(result);
    }
    else {
        console.log(loss);
    }
}

function modelReady() {
    console.log('Model is Ready');
}

function videoReady() {
    console.log('Video is ready');
}

function result(err, res) {
    if(err) {
        console.error(err);
    }
    else {
        label = res;
        classifier.classify(result);
    }   
}

function draw() {
    image(video, 0, 0, 400, 300);
    fill(0);
    textSize(36);
    text(label, 10, 100);
}