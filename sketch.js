let baseURLImage = 'https://oscaraccorsi.github.io/pictures/';
let logo;


function preload() {
  logo = loadImage(baseURLImage + 'good one white.png');
}

let mic;
let horizonArray = [];
let restrArray = [];
let lineHorizon;
let multVol = 2000;
let restr;
let restrStart;
let vol;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  
}  

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  horizonArray = [height/2, height/3, height/4, height/2+height/3, height/2+height/4, height/2];
  lineHorizon = random(horizonArray);
  
  restrArray = [width/10, width/9, width/8, width/7, width/6, width/5, width/4];
  restrStart = random(restrArray);
  restr = 0;
  
  mic = new p5.AudioIn();
  mic.start();
  rectMode(CENTER);
  frameRate(10);
  blendMode(HARD_LIGHT);
  
  
  //setInterval(horizon, 1000*10);
    
}

function draw() {
  background(30, 20);

  noStroke();
  vol = mic.getLevel();
  
  if(vol >= 0.5) {
    console.log(vol);
    horizon();
  }
  
  if(vol < 0.5) {
    restringimento();
  }
  
  if(vol >= 0.6) {
    reloadPage();
  }
  
  fill(random(255),random(255),random(255), random(255) ); 
  rect(width/2, lineHorizon+(random(-vol*multVol, vol*multVol)), (width-restrStart)-restr, vol*multVol);
}

function horizon() {
  lineHorizon = random(horizonArray);
}

function restringimento() {
  restr = vol*3000 ;
}
function reloadPage() {
  window.location.reload();
}
 function keyPressed() {
   reloadPage();   
 }