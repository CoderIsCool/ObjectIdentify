pic = "";
function setup()
{
    canvas = createCanvas(700, 550);
    canvas.center();
}
function preload()
{
    pic = loadImage("TAJMAHAL.jpeg");
}
function draw()
{
    image(pic,0,0,700,550);
    fill("#053754");
    noFill();
    text("Taj Mahal",75,105);
    rect(30,60,450,350);
    stroke("#053754");
    
}