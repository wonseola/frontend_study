const canvas = document.querySelector("canvas");


const file = document.getElementById("file");
const textInput = document.getElementById("text");

const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");

const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const c = canvas.getContext("2d")
const lineWidth = document.getElementById("lineWidth");
const color = document.getElementById("color");
canvas.width=500;
canvas.height=500;
c.lineWidth = lineWidth.value;
c.lineCap="round";
let isPainting = false;
let isFilling = false;


function onMove(event){
    if(isPainting){
        c.lineTo(event.offsetX, event.offsetY);
        c.stroke();
        return;
    }
    c.beginPath();
    c.moveTo(event.offsetX, event.offsetY);

}
function onMouseDown(){
    isPainting = true;
}
function onMouseUp(){
    isPainting = false;
}

function onLineWidthChange(event){  
    c.lineWidth = event.target.value;
}
function onColorChange(event){
    c.strokeStyle = event.target.value;
    c.fillStyle = event.target.value;

}

function onColorClick(event){
    const colorValue = event.target.dataset.color
    // console.dir(event.target.dataset.color);
    c.strokeStyle = colorValue;
    c.fillStyle = colorValue;
    color.value = colorValue
}

function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill";
    }else{
        isFilling = true;
        modeBtn.innerText = "Draw";

    }
}

function onCanvasClick(){
    if(isFilling){
        c.fillRect(0, 0, canvas.width, canvas.height);

    }
}

function onDestroyClick(){
    c.fillStyle="white";
    c.fillRect(0, 0, canvas.width, canvas.height);

}

function onEraserClick(){
    c.strokeStyle="white";
    isFilling = flase;
    modeBtn.innerText = "Draw";

}

function onFileChange(event){
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    // console.log(url);
    const image = new Image();
    image.src = url;
    image.onload = function(){
        c.drawImage(image, 0, 0, canvas.width, canvas.height);
        file.value = null;
    }
}


function onDoubleClick(event){
    const text = textInput.value;
    if(text !== ""){
        c.save();
        c.lineWidth = 0.5;
        c.font="30px serif"
        c.fillText(text,event.offsetX, event.offsetY);
        c.restore();
    }
    
    // console.log(event.offsetX, event.offsetY);
}


canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseUp)

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
canvas.addEventListener("click", onCanvasClick);
colorOptions.forEach(color => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
file.addEventListener("change", onFileChange);


// const colors = [
//     "#ffb6ad", 
//     "#ffd9ad",
//     "#faffad",
//     "#c8ffad",
//     "#adffdb",
//     "#add7ff",
//     "#b9adff",
//     "#feadff",
// ]

// let offsetX, offsetY = 0;

// c.moveTo(0, 0);
// function onClick(event){
//     c.beginPath();
//     c.moveTo(offsetX, offsetY);
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     c.strokeStyle = color;
//     c.lineTo(event.offsetX, event.offsetY);
//     c.stroke();
// }

// function onMouse(event){
//     c.beginPath();
//     // c.fillStyle = "white"
//     // c.fillRect(0, 0, canvas.width, canvas.height)
//     // c.beginPath();
//     offsetX = event.offsetX;
//     offsetY = event.offsetY
// }

// canvas.addEventListener("mousemove", onClick);
// canvas.addEventListener("click",onMouse)





// c.fillRect(210 - 40, 200 - 30, 15, 100);
// c.fillRect(350 - 40, 200 - 30, 15, 100);
// c.fillRect(260 - 40, 200 - 30, 60, 200);

// c.arc(250, 100, 50, 0, 2 * Math.PI);
// c.fill()

// c.beginPath();
// c.fillStyle="tan"
// c.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI);
// c.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI);

// c.fill();