let particles = [];
let flash = 400;

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {

// fondo oscuro fijo
background(0);

// TEXTURA VHS
// se crea una variable i que se repita por el lienzo 1000 veces, i es solo un contador: empieza en 0 y va aumentando de 1 en 1
// i++ significa "sumar 1"
// el bucle se repite hasta que i llegue a 1000
for(let i = 0; i < 1000; i++){

// stroke define el color del punto
// 180 = gris claro
// 255 = opacidad máxima
stroke(180, 255);

// point dibuja un punto
// random(width) = posición aleatoria horizontal
// random(height) = posición aleatoria vertical
point(random(width), random(height));

}

// movimiento del mouse
// ! es NO
// != es "NO ES IGUAL"
// !== es "ESTRICTAMENTE DISTINTO"
  
// si movedX NO es igual a 0
// O movedY NO es igual a 0
// entonces interacting será true

let interacting = movedX !== 0 | movedY !== 0;

// | significa OR, es decir, "si el mouse se movió horizontal o verticalmente" luz ambiente SOLO si se mueve mouse

// MOVIMIENTO DE AURA ROJA

if(interacting){

let aura = map(mouseX, 0, width, 100, 400);

noStroke();
// fill(rojo, verde, azul, transparencia)
fill(180, 40, 40, 60);

// ellipse(x,y,tamaño)
ellipse(width/2, height/2, aura);

}

push();
  
translate(width/2, height/2);

// ahora el centro del sistema de coordenadas, pasa al centro de la pantalla, entonces x=0 y y=0 ya NO es la esquina, ahora es el centro del canvas, por eso la espada aparece centrada

// ROTACIÓN ESPADA
  
if(interacting){

rotate(map(mouseX, 0, width, -3, 3));

// 0.5 radianes ≈ 28 grados
// es decir, -0.5 rota hacia la izquierda, 0.5 rota hacia la derecha
}

// ESPADA
stroke(200);
strokeWeight(7);

line(0, -120, 0, 120);
line(-40, 40, 40, 40);

// pop restaura el sistema anterior
pop();

// push guarda temporalmente transformaciones, como rotate y translate, pop vuelve al estado anterior, sin pop todo el resto del código seguiría activo

// generar partículas SOLO al mover mouse
if(interacting){

for(let i = 0; i < 3; i++){

particles.push(new Particle());

}
}
// for crea partículas, i empieza en 0, mientras sea menor a 3 seguirá creando partículas, o sea crea 3 partículas por frame
// particles.push() lo guarda dentro del array particles

// PARTICULAS
  
for(let i = particles.length-1; i >= 0; i--){

// particles.length = cantidad de partículas, se empieza desde la última porque algunas se eliminan durante el recorrido

particles[i].update();
particles[i].display();

// update()= ACTUALIZA valores, mueve partículas, cambia opacidad, cambia tamaño
// display()= DIBUJA visualmente la partícula
  
// update = lógica, display = apariencia

if(particles[i].alpha <= 0){

// splice elimina elementos del array

// i = posición, 1 = elimina solo un elemento

particles.splice(i,1);
}
}

// FLASH
if(flash > 0){
fill(255, flash);

// rectángulo cubre toda la pantalla
rect(0,0,width,height);
// reduce transparencia gradualmente
flash -= 10;
}

// TEXTO
  
fill(255,150);
noStroke();
textAlign(CENTER);
textSize(16);
text("mueve el mouse para despertar la atmósfera • click para destello", width/2, height - 40);
// height - 40, lo sube 40 píxeles desde abajo
}

// CLICK = DESTELLO
function mousePressed(){ 

flash = 255;
}

class Particle {

constructor(){

// constructor se ejecuta automáticamente, cada vez que nace una partícula, aquí se crean sus propiedades
// this: cada partícula tiene SUS propios valores, ejemplo una puede ser roja, otra naranja, una puede ir rápido otra lento

this.x = width/2;
this.y = height/2;

// vx= velocidad horizontal vy= velocidad vertical
// movedX * 0.1 agrega impulso según el movimiento real del mouse, si mueves fuerte el mouse, partículas salen más rápido

this.vx = random(-2,2) + movedX * 0.1;

this.vy = random(-3,-1);
  this.alpha -= 4;

// tamaño aleatorio
this.size = random(0,15);

// opacidad inicial
this.alpha = 255;

// color rojizo cálido
// r = rojo g = verde b = azul

this.r = random(150,255);
this.g = random(20,70);
this.b = random(20,40);

}

update(){

// POSICIÓN

// + = "sumar y guardar" equivalente a: this.x = this.x + this.vx

this.x += this.vx;
this.y += this.vy;

// OPACIDAD

// cada frame pierde 4 de alpha, entonces desaparece lentamente

this.alpha -= 4;

// TAMAÑO disminuye lentamente

// *= significa multiplicar y guardar
this.size *=1

}

display(){

noStroke();

// usa el color guardado en la partícula incluyendo transparencia alpha

fill(this.r, this.g, this.b, this.alpha);
ellipse(this.x, this.y, this.size);

}
}
