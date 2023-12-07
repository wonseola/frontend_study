const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d")

const file = document.getElementById("file");
const textInput = document.getElementById("text");
const savebtn = document.getElementById("save");

const modeBtn = document.getElementById("mode-btn");
const drawBtn = document.getElementById("draw-btn");

const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");

const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const lineWidth = document.getElementById("lineWidth");
const brushSize = document.getElementById("brushSize");
const colorview = document.getElementById("colorview");
const fontSize = document.getElementById("fontsize");
const textSize = document.getElementById("textsize");
const color = document.getElementById("color");




canvas.width=800;
canvas.height=800;
c.lineWidth = lineWidth.value;
c.lineCap="round";
let isPainting = false;
let isFilling = false;
let eraserClick = false;



const buttons = document.querySelectorAll(".btns label");


const canvasHistory = [];
let historyIndex = -1;

function saveCanvasState() {
    const imageData = c.getImageData(0, 0, canvas.width, canvas.height);
    canvasHistory.push(imageData);
    historyIndex++;
}

function undo() {
    if (historyIndex > 0) {
        historyIndex--; 
        const imageData = canvasHistory[historyIndex];
        c.putImageData(imageData, 0, 0); 
    }
}

function redo() {
    if (historyIndex < canvasHistory.length - 1) {
        historyIndex++; 
        const imageData = canvasHistory[historyIndex];
        c.putImageData(imageData, 0, 0);
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "z") {
        event.preventDefault();
        console.log("z누름")
        undo();
    }
});



buttons.forEach(label => {
    label.addEventListener("click", function() {
        buttons.forEach(label => {
            label.classList.remove("active");
        });
        this.classList.add("active");
    });
});


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
    saveCanvasState();
}
function onMouseUp(){
    isPainting = false;
}
function onLineWidthChange(event){  
    c.lineWidth = event.target.value;
    brushSize.innerHTML = "Brush Size " + event.target.value;
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
    color.value = colorValue;
    colorview.innerHTML = "color " + colorValue+ `<style>#colorview { background-color: ${colorValue}; }</style>`;
}

function onModeClick(){
    if(isFilling){
        isFilling = false;
    }else{
        isFilling = true;
    }

}

function DrawAgain(){
    isFilling = false;
    c.strokeStyle="black";
}

function onEraserClick(){
    isFilling = false;
    const backgroundColor = getComputedStyle(canvas).backgroundColor; // 현재 캔버스의 배경색을 가져옵니다.
    c.strokeStyle = backgroundColor;
}

function onCanvasClick(){
    if(isFilling){
        // c.fillRect(0, 0, canvas.width, canvas.height);
        canvas.style.backgroundColor = c.strokeStyle;
    } else if(eraserClick){
        c.globalCompositeOperation = 'destination-out';
    } else {
        c.globalCompositeOperation = 'source-over';
    }
}


function onDestroyClick(){
    if(window.confirm("그림이 모두 사라집니다. 정말 지우실건가요?!😎")){
        c.clearRect(0, 0, canvas.width, canvas.height);
        history.go(0);
    } else{
        return;
    }
    
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
    const size = textSize.value;
    if(text !== ""){
        c.save();
        // c.lineWidth = 0.5;
        c.font=size +"px Arial";
        c.fillText(text,event.offsetX, event.offsetY);
        c.restore();
    }
    
    // console.log(event.offsetX, event.offsetY);
}

function onSaveClick(){
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download ="myDrawing.png";
    a.click();

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
drawBtn.addEventListener("click", DrawAgain);

destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
file.addEventListener("change", onFileChange);

save.addEventListener("click", onSaveClick);


