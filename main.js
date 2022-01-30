canvas=
document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color1="blue"
color2="black"
color3="red"
color4="yellow"
color5="green"


ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.arc(400, 300, 40, 0, 2 * Math.PI);
    ctx.stroke();

ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.arc(490, 300, 40, 0, 2 * Math.PI);
    ctx.stroke();


ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.arc(580, 300, 40, 0, 2 * Math.PI);
    ctx.stroke();

ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 2;
    ctx.arc(450, 335, 40, 0, 2 * Math.PI);
    ctx.stroke();

ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.arc(540, 335, 40, 0, 2 * Math.PI);
    ctx.stroke();