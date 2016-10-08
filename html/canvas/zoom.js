// From 
// http://www.cnblogs.com/LikeStar/p/5374875.html
(function(){
    // 基础配置
    var config = {
        width : 900,        // 设置canvas的宽
        height : 600,        // 设置canvas的高
        imgSrc : 'ImageZoom/1.jpg',    // 图片路径
        maxScale : 4.0,        // 最大放大倍数
        minScale : 0.1,        // 最小放大倍数
        step : 0.1            // 每次放大、缩小 倍数的变化值
    };

    // 标记是否移动事件
    var isMove = false;
    
    var imgStatus = {
        'scale' : 1.0,
        'rotate' : 0
    };
    var lastStatus = {};
    var currentStatus = {};

    var bigBtn = document.getElementById("bigBtn");
    var smallBtn = document.getElementById("smallBtn");
    var leftRotate = document.getElementById("leftRotate");
    var rightRotate = document.getElementById("rightRotate");
    var canvas = document.getElementById("canvas");
    canvas.width = config.width;
    canvas.height = config.height;
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = config.imgSrc;

    img.onload = function() {
        lastStatus = {
            "imgX" : -1 * img.width / 2,
            "imgY" : -1 * img.height / 2,
            'mouseX' : 0,
            'mouseY' : 0,
            'translateX' : canvas.width / 2,
            'translateY' : canvas.height /2,
            'scale' : 1.0,
            'rotate' : 0
        };
        drawImgByStatus(canvas.width / 2, canvas.height / 2);
    };

    bigBtn.onclick = function() {
        imgStatus.scale = (imgStatus.scale >= config.maxScale) ? config.maxScale : imgStatus.scale + config.step;
        drawImgByStatus(canvas.width / 2, canvas.height / 2);
    }

    smallBtn.onclick = function() {
        imgStatus.scale = (imgStatus.scale <= config.minScale) ? config.minScale : imgStatus.scale - config.step;
        drawImgByStatus(canvas.width / 2, canvas.height / 2);
    }

    leftRotate.onclick = function() {
        var rotate = parseInt(imgStatus.rotate / 90) * 90 - 90;
        imgStatus.rotate = rotate;
        drawImgByStatus(canvas.width / 2, canvas.height / 2);
    }

    rightRotate.onclick = function() {
        var rotate = parseInt(imgStatus.rotate / 90) * 90 + 90;
        imgStatus.rotate = rotate;
        drawImgByStatus(canvas.width / 2, canvas.height / 2);
    }

    canvas.onmousedown = function(e) {
        isMove = true;
        canvas.style.cursor = "move";

        var box = windowToCanvas(e.clientX, e.clientY);
        lastStatus.mouseX = box.x;
        lastStatus.mouseY = box.y;
    }

    canvas.onmouseout = function(e) {
        isMove = false;
        canvas.style.cursor = "default";
    }

    canvas.onmouseup = function(e) {
        isMove = false;
        canvas.style.cursor = "default";
    }

    canvas.onmousemove = function(e) {
        if(isMove) {
            var box = windowToCanvas(e.clientX, e.clientY);
            drawImgByMove(box.x, box.y);
        }
    }
    
    canvas.onmousewheel = function(e) {
        if(e.wheelDelta > 0) {
            imgStatus.scale = (imgStatus.scale >= config.maxScale) ? config.maxScale : imgStatus.scale + config.step;
        } else {
            imgStatus.scale = (imgStatus.scale <= config.minScale) ? config.minScale : imgStatus.scale - config.step;
        }
        var mXY = windowToCanvas(e.clientX, e.clientY);
        drawImgByStatus(mXY.x, mXY.y);
    }

    function drawImgByMove(x, y) {
        lastStatus.translateX = lastStatus.translateX + (x - lastStatus.mouseX);
        lastStatus.translateY = lastStatus.translateY + (y - lastStatus.mouseY);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(lastStatus.translateX, lastStatus.translateY);
        ctx.rotate(imgStatus.rotate * Math.PI / 180);
        ctx.scale(imgStatus.scale, imgStatus.scale);
        ctx.drawImage(img, lastStatus.imgX, lastStatus.imgY, img.width, img.height);
        ctx.restore();

        lastStatus.mouseX = x;
        lastStatus.mouseY = y;
    }

    function drawImgByStatus(x, y) {
    	console.log("Before drawing: ", lastStatus);
        var imgX = lastStatus.imgX - (x - lastStatus.translateX) / lastStatus.scale;
        var imgY = lastStatus.imgY - (y - lastStatus.translateY) / lastStatus.scale;
        console.log(imgX, imgY);
        console.log(x, y);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(imgStatus.rotate * Math.PI / 180);
        ctx.scale(imgStatus.scale, imgStatus.scale);
        ctx.drawImage(img, imgX, imgY, img.width, img.height);
        ctx.restore();

        lastStatus = {
            'imgX' : imgX,
            'imgY' : imgY,
            'translateX' : x,
            'translateY' : y,
            'scale' : imgStatus.scale,
            'rotate' : imgStatus.rotate
        };

        console.log("After drawing: ", lastStatus);
    }

    /**
     * 计算相对于canvas左上角的坐标值
     */
    function windowToCanvas(x, y) {
        var box = canvas.getBoundingClientRect();
        return {
            'x' : x - box.left,
            'y' : y - box.top
        };
    }
})();