var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    eraseBtn = document.getElementById('eraseBtn'),
    strokeStyleSelect = document.getElementById('strokeStyleSheet'),
    guideWiresCheckbox = document.getElementById('guidewireCheckbox'),
    drawingSurfaceImageData,
    mousedown = {},
    rubberandRect = {},
    dragging = false,
    guidewires = guideWiresCheckbox.checked;


// 绘制网格
function drawGrid(color, stepx, stepy) {
    context.strokeStyle = color;
    context.lineWidth = 0.5;
    //绘制竖线
    for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, context.canvas.height);
        context.stroke();
    }
    // 绘制横线
    for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(context.canvas.width, i);
        context.stroke();
    }
}

// 获得x,y坐标
function windowToCanvas(x, y) {
    // 获得元素大小及相对视窗的位置。
    var bbox = canvas.getBoundingClientRect();
    return {
        x: x - bbox.left * (canvas.width / bbox.width),
        y: y - bbox.top * (canvas.height / bbox.height)
    }

}

// 保存绘图表面
function saveDrawingSurface() {
    drawingSurfaceImageData = context.getImageData(0, 0, canvas.width, canvas.height);
}

// 恢复绘图表面
function restoreDrawingSurface() {
    // 将图像数据放回canvas画布
    context.putImageData(drawingSurfaceImageData, 0, 0);
}

function updateRubberbandRectangle(loc) {
    rubberandRect.width = Math.abs(loc.x - mousedown.x);
    rubberandRect.height = Math.abs(loc.y - mousedown.y);

    if (loc.x > mousedown.x) {
        rubberandRect.left = mousedown.x;
    } else {
        rubberandRect.left = loc.x;
    }

    if (loc.y > mousedown.y) {
        rubberandRect.top = mousedown.y;
    } else {
        rubberandRect.top = loc.y;
    }
}

function drawRubberbandShape(loc) {
    context.beginPath();
    context.moveTo(mousedown.x, mousedown.y);
    context.lineTo(loc.x, loc.y);
    context.stroke();
}

function updateRubberband(loc) {
    updateRubberbandRectangle(loc);
    drawRubberbandShape(loc);
}

function drawHorizontalLine(y) {
    context.beginPath();
    context.moveTo(0, y + 0.5);
    context.lineTo(context.canvas.width, y + 0.5);
    context.stroke();
}

function drawVerticalLine(x) {
    context.beginPath();
    context.moveTo(x + 0.5, 0);
    context.lineTo(x + 0.5, context.canvas.height);
    context.stroke();
}

function drawGuidewires(x, y) {
    context.save();
    context.strokeStyle = "rgba(0, 0, 230, 0.4)";
    context.lineWidth = 0.5;
    drawVerticalLine(x);
    drawHorizontalLine(y);
    context.restore();
}

canvas.onmousedown = function(e) {
    var loc = windowToCanvas(e.clientX, e.clientY);
    e.preventDefault();
    saveDrawingSurface();
    mousedown.x = loc.x;
    mousedown.y = loc.y;
    dragging = true;
    console.log("mousedown");
}

canvas.onmousemove = function(e) {
	
    var loc;
    if (dragging) {
    	console.log("mousemove");
        e.preventDefault();
        loc = windowToCanvas(e.clientX, e.clientY);
        restoreDrawingSurface();
        updateRubberband(loc);
        if (guidewires) {
            drawGuidewires(loc.x, loc.y);
        }
    }
 
}

canvas.onmouseup = function(e) {
    loc = windowToCanvas(e.clientX, e.clientY);
    restoreDrawingSurface();
    updateRubberband(loc);
    dragging = false;
    console.log("mouseup");
}

eraseBtn.onclick = function(e) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid('lightgray', 10, 10);
    saveDrawingSurface();
}

strokeStyleSheet.onchange = function(e) {
    context.strokeStyle = strokeStyleSelect.value;
}

guideWiresCheckbox.onchange = function(e) {
    guidewires = guideWiresCheckbox.checked;
}
drawGrid('lightgray', 10, 10);
context.strokeStyle = strokeStyleSelect.value;

