Status = "";
input_text = "";
percents = "";
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
    if(Status != "") {
        object_detector.detect(video,gotResults);
        for(i = 0;i <objects.length;i++){
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            console.log(objects.length);
            fill("#ff0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x,objects[i].y, objects[i].width, objects[i].height);

            if(objects[i].label == input_text){
                video.stop();
                object_Detector.detect(gotResults);
                document.getElementById("object_found").innerHTML = input_text+" Found";
                var synth = window.speechSynthesis;
                var utterThis = new SpeechSynthesisUtterance(input_text+"found");
                synth.speak(utterThis);
            }
            else{
                document.getElementById("object_found").innerHTML = input_text+"Not found";
            }

        }
    }
}
function gotResults(error,results) {
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        objects = results;
    }
   
}