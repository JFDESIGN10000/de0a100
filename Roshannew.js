let enemigo = "Roshan";
let vida = 2500;
let golpebasico = 150;
let turno = 1;

// Inicia un bucle 'while' que continuará ejecutándose mientras la 'vida' sea mayor que 0.
while (vida > 0) {
  // Reduce el valor de la variable 'vida' restándole el valor de 'golpebasico' en cada iteración.
  vida -= golpebasico; // Esta es una forma abreviada de escribir: vida = vida - golpebasico;
  // Muestra un mensaje en la consola utilizando una plantilla literal para insertar los valores de las variables.
  // Las plantillas literales se definen con backticks (`) y las variables se insertan con ${variable}.
  console.log(`Has recibido ${golpebasico} de daño en el turno ${turno}, tienes ${vida} de vida.`);
  // Incrementa el valor de la variable 'turno' en 1 después de cada ataque.
  turno++;
}

// Este mensaje se mostrará en la consola una vez que la condición del bucle 'while' (vida > 0) sea falsa.
// También utiliza una plantilla literal para mostrar el nombre del enemigo y el turno en que eliminó al jugador.
console.log(`${enemigo} te ha eliminado en el turno ${turno}. Buen intento.`);