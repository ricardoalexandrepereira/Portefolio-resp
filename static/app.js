var radius = 600;
var autoRotate = true;
var rotateSpeed = -110;
var imgWidth = 120;
var imgHeight = 170;

setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = document.querySelectorAll('.anc');
var aVid = document.getElementsByTagName('video');



var aEle = [...aImg, ...aVid]

ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

var ground = document.getElementById("ground");
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime){
    for(var i = 0; i < aEle.length; i++){
        aEle[i].style.transform = "rotateY(" + (i *(360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
}

function applyTransform (ogj){
    if(tY > 100) tY = 100;
    if(tY < 0) tY = 0;

    ogj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes){
    ospin.style.animationPlayState = (yes ? 'running' : 'paused');
}

var sX, sY, nX, nY, desX = 0;
desY = 0;
tX = 0;
tY = 10;

if(autoRotate){
    var animationName = (rotateSpeed > 0 ? "spin" : "spinRevert");
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

document.onpointerdown = function (e){
    clearInterval(odrag.timer);
    e = e || window.event;
    var sX = e.clientX,
        sY = e.clientY;

       
       
    this.onpointermove = function (e){
        e = e || window.event;
        var nX = e.clientX,
            nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(odrag)
        sX = nX;
        sY = nY;
    };

    this.onpointerup = (e)=>{
        odrag.timer = setInterval(function(){
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTransform(odrag);
            playSpin(false);
            if(Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5){
                clearInterval(odrag.timer);
                playSpin(true);
            }
        }, 17);
        this.onpointermove = this.onpointerup = null;
    };
    return false;
}


document.onmousewheel = (e)=>{
    e = e || window.event;
    var d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
}





//cartoon


document.addEventListener("mousemove", (e)=>{
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const cartoon = document.querySelector("#anchoragem")
    const rekt = cartoon.getBoundingClientRect();
    const cartoonX = rekt.left + rekt.width / 2;
    const cartoonY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouseX, mouseY, cartoonX, cartoonY);

    console.log(angleDeg)

    const eyes = document.querySelectorAll(".eye");

    eyes.forEach(eye=>{
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        cartoon.style.filter = `hue-rotate(${angleDeg}deg)`;
    })
})

function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}


var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

var xmouse, ymouse;

$on('mousemove', function (e){
    xmouse = e.clientX || e.pageX
    ymouse = e.clientY || e.pageY
});

var fly = $('#fly');
var x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    tx = 0,
    tx = 0,
    key = 0;

    var followMouse = function followMouse(){
        key = requestAnimationFrame(followMouse);


        if(!x || !y){
            x = xmouse;
            y = ymouse;
        }else{
            dx = (xmouse - x) * 0.125;
            dy = (ymouse - y) * 0.125;
            if(Math.abs(dx) + Math.abs(dy) < 0.5){
                x = xmouse;
                y = ymouse;
            }else{
                x += dx;
                y +=dy;
            }
        }

        fly.style.left = x + 'px';
        fly.style.top = y + 'px';
    }

    //initializing loader 
    const preLoader = document.getElementById('pre-loader');

    window.addEventListener('load',()=>{
        preLoader.style.display = 'none';
    })
     
    
   