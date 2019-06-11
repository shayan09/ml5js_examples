let mobilenet;

function setup() {
    createCanvas(400, 300);
    img_dog = createImg('./dog.jpg', imageReady);

    img_dog.hide();

    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function modelReady() {
    console.log('Model is Ready');

    mobilenet.predict(img_dog, result);
}

function result(err, res) {
    if(err) {
        console.error(err);
    }
    else {
        console.log(res[0].className);
    }
}

function imageReady() {
    console.log('Image is ready');
    image(img_dog, 0, 0, 400, 300);
}

function draw() {

}