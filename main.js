status1 = "";
video = "";
function setup(){
    canvas = createCanvas(350,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    document.getElementById("text-box").value;
}
function modelLoaded(){
    console.log("Model is loaded");   
    status1 = true;
}
function draw(){
    image(video,0,0,350,350);
}