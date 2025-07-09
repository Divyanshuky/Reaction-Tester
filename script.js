var start = new Date().getTime();

function move() {
    var left = Math.random() * 300;
    var top = Math.random() * 300;
    var size = Math.random() * 200 + 50;
    var colour = '#' + Math.floor(Math.random() * 16777215).toString(16);

    var shape = document.getElementById("shape");
    shape.style.left = left + "px";
    shape.style.top = top + "px";
    shape.style.height = size + "px";
    shape.style.width = size + "px";
    shape.style.backgroundColor = colour;
    shape.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
    shape.style.border = "3px solid #fff";  // <-- Added border for visibility
    shape.style.display = "block";

    start = new Date().getTime();
}
move();

document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var responseTime = (end - start) / 1000;
    alert("Your reaction time: " + responseTime + " seconds");
    move();
};
