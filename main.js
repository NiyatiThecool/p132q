img= "";
status = "";

function preload() {
   img= loadImage(bedroom.jpg)
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetecter.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function setup() {
    canvas = createCanavas(640, 420);
    canvas.center();
    objectDetecter = m15.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("dog, 45, 75");
    nofill();
    stroke('#FF0000');
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Cat", 320, 120);
    nofill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);
}