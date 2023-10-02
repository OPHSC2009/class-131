img=""

function preload(){
img=loadImage("carwithman.jpg")
}

function setup(){
    canvas=createCanvas(700,500)
    canvas.center()
}

function draw(){
image(img,0,0,700,500)
}