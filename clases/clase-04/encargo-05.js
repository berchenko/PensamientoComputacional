Alicia Berchenko

let circleX = 200

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
//si el tamaño random se pone sobre backround cada vez que se presione play el tamaño será distinto
  circleSize = random(20,250);
  stroke(255)
  fill(220)
  if(mouseX > 200)
    fill(255,00,200);
  //sigue movimiento del mouse, si se posiciona sobre backround funciona como un pincel
  circle(mouseX,mouseY,circleSize)
//su movimiento es lineal en ejeX y desaparece del lienzo
  circle(circleX,200,30)
// el +5 regula la velocidad
 circleX = circleX + 5;

  
  textSize(30);
  textAlign(CENTER, CENTER);
  text("tipografia" + frameCount, 200, 200);

}
