                   // CONTROL DEL ESTADO
let cantidad = 12; 
                   // CONTADOR DE PUNTOS
let espacio = 0;   
                   // TAMAÑOS
let tamano = 25;   
                    // VELOCIDAD DE LOS VIRUS
let velocidad = 50;  
                    // WEBCAM
let captura;

function setup() {
  createCanvas(800, 800);
  
                    // INICIO WEBCAM
  captura = createCapture(VIDEO);
  captura.size(800, 800);
  captura.hide();
}

function draw() {
                  // ESTADO DEL JUEGO MENU PRINCIPAL
  if (cantidad == 12) {
    background(15, 20, 30);
    dibujarInterfaz("HACKER CAM", "Esquiva los virus. Llega a 100 puntos para activar la cámara.", "Haz CLIC para comenzar");
  } 
  
                  // INICIO
  else if (cantidad == 13) {
                   // FONDO NEGRO NO WEBCAM
    background(20); 
    
    
    tamano = map(mouseX, 0, width, 15, 40);
    
               //PUNTAJE + TIEMPO
    espacio += 0.2;
                  // BUCLES 
    
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        
                // POSICIONES SOLEMNE 2
        let posX = (x * 180 + 100 + random(-2, 2)) % width;
        let posY = (y * 180 + (espacio * velocidad)) % height;

              // CONDICIONAL 1 (COLOR PARA X PAR)
        
        if (x % 2 == 0) {
                // VIRUS ROSADO
          fill(255, 192, 203); 
        }
        
        // CONDICIONAL 2 (COLOR PARA X IMPAR)
        if (x % 2 != 0) {
                        // VIRUS CELESTE
          fill(0, 255, 200); 
        }

                   // FUNCIÓN PROPIA 1
        dibujarCirculo(posX, posY, tamano);

                      // CONDICIONAL 3 
       
        if (dist(posX, posY, mouseX, mouseY) < tamano) {
          espacio -= 0.5; 
        }
      }
    }

                     // JUGADOR MOUSE
    fill(255);
    ellipse(mouseX, mouseY, 15);
    
                       // JUEGO 
    fill(255);
    textSize(20);
    textAlign(LEFT);
    text("Progreso de señal: " + int(espacio) + "%", 30, 50);
    
                         // GANASTE
    if (espacio >= 100) {
      cantidad = 14; // Cambia a Estado 2: ¡Ganaste!
    }
  } 
  
  else if (cantidad == 14) {

                      // WEBCAM GANASTE
    image(captura, 0, 0, width, height);
    
                      // FILTRO DE HACKER 
    filter(THRESHOLD, 0.4); 
    
                         //TEXTO 
    dibujarInterfaz("¡SEÑAL RESTABLECIDA!", "Felicidades, hackeaste el sistema. Mírate en pantalla.", "Haz CLIC para volver a jugar");
  }
}


                          // FUNCION PROPIA ANTIGUA 
function dibujarCirculo(x, y, t) {
  let ruido = random(-5, 5);
  noStroke();
  ellipse(x, y, t + ruido);
}

                       // FUNCION PROPIA 2 TEXTOS 
function dibujarInterfaz(titulo, subtitulo, instruccion) {
  textAlign(CENTER, CENTER);
  
                        // FONDO SEMI TRANSPARENTE BAJA OPACIDAD
  fill(0, 180);
  rect(width/2 - 300, height/2 - 100, 600, 220, 10);
  
  fill(0, 255, 100);
  textSize(35);
  text(titulo, width / 2, height / 2 - 50);
  
  fill(255);
  textSize(18);
  text(subtitulo, width / 2, height / 2 + 10);
  
  fill(170);
  textSize(15);
  text(instruccion, width / 2, height / 2 + 60);
}


                     // INPUT  CAMBIOS DE ESTADO
function mousePressed() {
  if (cantidad == 12) {
    cantidad = 13; // Empieza el juego
    espacio = 0;   // Resetea porcentaje a 0%
  } else if (cantidad == 14) {
    cantidad = 12; // Resetea al Menú inicial
  }
}