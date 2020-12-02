var Canvas = document.getElementById("MyCanvas");

ctx = Canvas.getContext("2d");


var IgA = [
    "Img_1.jpeg",
    "Img_2.jpeg",
    "Img_3.jpeg",
    "Img_4.jpeg"
];
var RanNo = Math.floor(Math.random() * 5);
var BackImg = IgA[RanNo];
var RovImg = "rover.png";
var RovX = 10;
var RovY = 10;
var KeyP;
function Add() {
    Bag_IT = new Image();
    Bag_IT.onload = UpBack;
    Bag_IT.src = BackImg;

    Rov_IT = new Image();
    Rov_IT.onload = UpRov;
    Rov_IT.src = RovImg;
}

function UpBack(){
   ctx.drawImage(Bag_IT, 0, 0, Canvas.width, Canvas.height);
}

function UpRov(){
    ctx.drawImage(Rov_IT, RovX, RovY, 100, 90);
}

window.addEventListener("keydown", MyKeyD);

function MyKeyD(e) {
   KeyP = e.keyCode;
   if (KeyP == "38"){
       up();
       console.log("Up");      
   }
   if (KeyP == "37"){
    left();
    console.log("Left");      
}
if (KeyP == "39"){
    right();
    console.log("Right");      
}
if (KeyP == "40"){
    down();
    console.log("Down");      
}
}

function up() {
    if (RovY >= 0){
        RovY = RovY - 10;
        console.log("X and Y coordinates are: " + "X= " +RovX + " Y= " + RovY);
        UpBack();
        UpRov();
    }
}

function down() {
    if (RovY <= 500){
        RovY = RovY + 10;
        console.log("X and Y coordinates are: " + "X= " +RovX + " Y= " + RovY);
        UpBack();
        UpRov();
    }
}

function left() {
    if (RovX >= 0){
        RovX = RovX - 10;
        console.log("X and Y coordinates are: " + "X= " +RovX + " Y= " + RovY);
        UpBack();
        UpRov();
    }
}

function right() {
    if (RovX <= 500){
        RovX = RovX + 10;
        console.log("X and Y coordinates are: " + "X= " +RovX + " Y= " + RovY);
        UpBack();
        UpRov();
    }
}