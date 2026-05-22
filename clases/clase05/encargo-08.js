let QUOKA;


// vamos a cambiar la posicion
let posX = 140;
let posY = 80;

// variable para guardar la dirección
let dirY = 1;

function setup() {
  createCanvas(400, 400);
  QUOKA = loadImage("https://tse2.mm.bing.net/th/id/OIP.u20uUGuSDJKPQzKctUz1iwHaFj?pid=Api&P=0&h=180");
}

function draw() {
  background(220);
  image(QUOKA, posX, posY, 100, 100);
  
  //actualizamos la posicion
  //dir es hacia abajo si es 1
  // hacia arriba si es -1
  posY = posY + 1 * dirY;
  
  if (posY > height*4/5  - 100){
    dirY = -1; //cambia a direccion 
  }
  if (posY < height*1/5){
    dirY =  1; //cambia a direccion 
  }
  
  line(0,height*1/5, width, height *1/5);
  line(0,height*4/5, width, height *4/5);
  
}

