# EXAMEN
## Hacker cam.
Martina Chacana


   

# 1. Descripción Objetiva
## ¿Qué es el proyecto?
Es un videojuego interactivo de supervivencia y destreza desarrollado en la plataforma p5.js. El objetivo principal es esquivar amenazas digitales (virus informáticos en forma de círculos dinámicos) para recuperar la señal del sistema y desbloquear la transmisión de la cámara web.

## ¿Qué se ve en pantalla?
- En el Menú: Un fondo oscuro con tipografía en alta definición de color verde cibernético que indica las instrucciones.

- En el Juego: Una interfaz interactiva con un contador de progreso que se actualiza en tiempo real, un cursor blanco controlado por el usuario y una matriz de círculos vibrantes (rojos y celestes) que se desplazan de forma continua.

- Al Ganar: El feed de video de la webcam del usuario desplegado a pantalla completa con un filtro de umbral monocromático (THRESHOLD) de alto contraste y un mensaje de éxito.

  # ¿Qué elementos visuales aparecen?

  Círculos dinámicos con distorsión por ruido, texto paramétrico variable, rectángulos de interfaz semi-transparentes y captura de video digital filtrada.

  # ¿Qué inputs utiliza?
  - Posición en el eje X del mouse **(mouseX)** para alterar el tamaño de la amenaza.
  - Movimiento libre del ratón **(mouseX, mouseY)** para el control de la posición del usuario.
  - Eventos de clic **(mousePressed)** para transiciones lógicas entre pantallas.
 
    # ¿Qué outputs genera?
    Un lienzo gráfico dinámico y reactivo que se actualiza a 60 cuadros por segundo, renderizado adaptativo de geometría y texto, y la proyección procesada de la webcam.

    ## 2. Descripción Conceptual
   **Idea central:** El juego explora la idea de la "privacidad y la recompensa digital" mediante una narrativa de hackeo. El usuario se encuentra en un entorno donde su identidad visual (la cámara) está cifrada por ruido y bloques de código; el esfuerzo de la interacción mecánica se premia con la recuperación de su propia imagen.



# Corriente o referente de diseño
Se adscribe a la estética del Cyberpunk y el Glitch Art. Se enfoca en interfaces de terminales computacionales retro-futuristas donde predominan las pantallas oscuras con elementos de alto contraste geométrico.

# Referentes visuales, históricos o teóricos
Se inspira visualmente en las interfaces del cine de ciencia ficción clásico (como Matrix o Alien) donde los gráficos vectoriales crudos y los sistemas de rejilla estructuran la información. Teóricamente, se apoya en el concepto de "Arte Generativo controlado", donde el algoritmo dicta el patrón, pero el azar y el usuario controlan el resultado final.

# Principio de diseño explorado: Feedback y Reactividad
El diseño no es estático; cada acción del usuario provoca un cambio inmediato en las propiedades formales del sistema (escala de los objetos, alteración de variables y cambio de color).


## 3. Sistema Computacional
# Inputs
Valores de hardware del cursor **(mouseX, mouseY, click)** y el flujo de arreglos de píxeles en tiempo real provenientes de la captura de video **(VIDEO)**.


 # Procesos
 Cálculo de matrices de posición mediante bucles for anidados multiplicados por factores temporales.

- Mapeo lineal de datos de entrada mediante la función **map()**.

- Inyección de ruido aleatorio a través de **random().**

- Cálculo de distancias euclidianas para detección de colisiones **(dist()).**

  # Estados

 - cantidad == 12: Estado 0 - Menú de Inicio. El sistema está pasivo, congelando mecánicas.

- cantidad == 13: Estado 1 - Juego Activo. El sistema procesa amenazas, colisiones y acumula puntaje.

- cantidad == 14: Estado 2 - Pantalla de Victoria. Detiene la lógica del juego y activa/filtra la webcam.

# Eventos
**mousePressed()**, disparador de hardware que evalúa el valor numérico de la variable de control **(cantidad)** para resetear o avanzar de estado.

# Outputs
Render en el Canvas de p5.js variando entre texto plano, gráficos abstractos y video manipulado por filtros digitales en tiempo real


## 4. Explicación de la Interacción

# Qué datos entran al sistema
Las coordenadas vectoriales **(X, Y)** del mouse del usuario y los fotogramas continuos de la webcam.
# Cómo se procesan
El valor de mouseX entra a una función lineal **map()** que reduce y restringe el rango de pixeles de la pantalla a un tamaño ideal para los obstáculos **(entre 15 y 40 px).** Simultáneamente, la posición del usuario se compara de forma aritmética con las coordenadas cambiantes de la matriz de virus mediante cálculo geométrico de distancias.
# Cómo se transforman
Si la distancia entre el usuario y un obstáculo es menor que el radio de este, se ejecuta una resta de penalización en la variable de progreso espacio. Al mismo tiempo, la variable del tiempo espacio se le inyecta un multiplicador basado en la velocidad para desplazar los objetos de arriba hacia abajo verticalmente en bucle continuo empleando el operador residuo **(%).**
# Qué respuestas producen
Una animación continua de caída de objetos interactivos que reaccionan creciendo o disminuyendo según la posición del cursor, y el paso inmediato de una pantalla negra a una imagen en vivo del estudiante al completarse el objetivo numérico.


## 5. Recursos Multimedia Utilizados
# Tipo de recurso utilizado
Captura de video digital en tiempo real mediante periférico **(Webcam)** utilizando el método **createCapture(VIDEO).**

# Función que cumple dentro del proyecto
Funciona como un componente lógico y narrativo estricto dentro del flujo del programa. No es decorativo debido a que su inicialización visual permanece completamente oculta en los estados 0 y 1, actuando como la condición y recompensa del algoritmo de victoria. Adicionalmente, se procesa en tiempo real con la función **filter(THRESHOLD)** para mimetizarse con la estética conceptual del juego.

## 6. Principales Decisiones Tomadas

# Dificultades encontradas
El reto técnico más grande fue diseñar un videojuego interactivo con múltiples pantallas, lógicas de colisión diferentes y acumulación de puntaje sin poder declarar nuevas variables globales. El código original limitaba estrictamente el uso a 4 variables específicas **(cantidad, espacio, tamano, velocidad).**


# Soluciones y aprendizajes obtenidos
Se aprendió a optimizar la arquitectura del código mediante la reutilización de variables. Se descubrió que una variable no está atada a su nombre literal; por ejemplo, la variable cantidad (diseñada originalmente para contar círculos) puede funcionar a nivel de lógica computacional como una máquina de estados numéricos binarios o secuenciales, permitiendo estructurar un sistema complejo y dinámico bajo severas restricciones técnicas de memoria.
