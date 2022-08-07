Status = "";
input_text = "";
function setup() {
    canvas = createCanvas(400,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,250);
    video.hide();
}
function start() {
    object = ml5.objectdetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects...";
    input_text = getElementById("input_id").value;
}
function modelLoaded() {
    console.log("Model has been Loaded");
    Status = true;
}
function draw() {
    image(video, 0, 0, 400, 250);
}