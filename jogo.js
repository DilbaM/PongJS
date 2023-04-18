//variaveis bola
let xbolinha =300;
let ybolinha = 240;
let tbolinha = 20;
raio = tbolinha/2
let vbolinha = 5
let abolinha = 3;
//variaveis raquete
let xraquete =5;
let yraquete =240;
let craquete =10;
let araquete = 100;
//variavel colisão
let colidiu = false
//variaveis raquete oponente 
let xraquetep2 = 580;
let yraquetep2 = 240;
let voponente;
//variaveis pontos
let pontos1 = 0;
let pontos2 = 0;
//variaveis sons
let raquetada;
let ponto;
let trilha;

//function preload(){
  trilha = loadSound ("ÉSal.mp3")
  ponto = loadSound ("ponto.mp3")
  raquetada = loadSound ("raquetada.mp3")
//}

function setup() {
  createCanvas(600, 480);
  //trilha.loop();
}

function draw() {
  background(0,0,0);
  mostrabola()
  movimentobola()
  colisao(xraquete, yraquete)
  raquete(xraquete, yraquete)
  raquete(xraquetep2,yraquetep2)
  movimentoraquete()
  btraquetes(xraquete, yraquete)
  btraquetes(xraquetep2, yraquetep2) 
  movimentoponente()
  pontuacao()
  
}

function mostrabola(){
    circle(xbolinha,ybolinha,tbolinha);
}

function movimentobola() {
   xbolinha += vbolinha;
   ybolinha += abolinha;
}

function colisao(){
  if (xbolinha + raio > width){
    vbolinha *= -1;
    pontos1 += 1;
  }
  if (xbolinha - raio < 0){
    vbolinha *= -1;
    pontos2 += 1;
  }
  if (ybolinha + raio > height || ybolinha - raio < 0){
    abolinha *= -1;
  }
  
}
function raquete(x,y) {
  rect(x,y,craquete,araquete)
}

function movimentoraquete(){
   if (keyIsDown(UP_ARROW)){ 
    yraquete -= +5;
   } 
  if (keyIsDown(DOWN_ARROW)){ 
    yraquete -= -5;
   } 
}
 function btraquetes(x, y){
   colidiu = collideRectCircle(x, y, craquete, araquete, xbolinha, ybolinha, raio);
   if (colidiu){
     vbolinha *=-1;
     //raquetada.play()
   }
 }

function movimentoponente() {
  if (keyIsDown(87)){ 
    yraquetep2 -= +5;
   } 
  if (keyIsDown(83)){ 
    yraquetep2 -= -5;
   } 
}
function pontuacao (){
  stroke(255);
  textSize(20);
  textAlign(CENTER)
  fill(color (255,150,0));
  rect(175, 5, 50, 30);
  fill(255);
  text(pontos1, 200, 25);
  fill(color (255,150,0));
  rect(375, 5, 50, 30);
  fill(255);
  text(pontos2, 400, 25);
}
