window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(evt) {
    var alpha = evt.alpha || 0;
    var beta = evt.beta || 0;
    var gamma = evt.gamma || 0;

    document.getElementById("a").innerHTML = "Alpha = " + alpha.toFixed(2);
    document.getElementById("b").innerHTML = "Beta = " + beta.toFixed(2);
    document.getElementById("c").innerHTML = "Gamma = " + gamma.toFixed(2);

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    var centru = {x: canvas.width / 2, y: canvas.height / 2};
    var latura_patrat = 50;

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.translate(centru.x, centru.y); 
    context.rotate(alpha * Math.PI / 180);  

    context.beginPath();
    context.rect(-latura_patrat / 2, -latura_patrat / 2, latura_patrat, latura_patrat);
    context.stroke();
}
