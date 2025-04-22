let enemigo = "Roshan";
let vida = 2500;
let golpebasico = 150;
let turno = 1;

// Inicia un bucle 'while' que continuará ejecutándose mientras la 'vida' sea mayor que 0.
while (vida > 0) {
  // Reduce el valor de la variable 'vida' restándole el valor de 'golpebasico' en cada iteración.
  vida = vida - golpebasico;
  // Muestra un mensaje en la consola indicando el daño recibido, el turno actual y la vida restante.
  // Se concatenan cadenas de texto con los valores de las variables para formar el mensaje.
  console.log("Has recibido " + golpebasico + " de daño en el turno " + turno + ", tienes " + vida + " de vida.");
  // Incrementa el valor de la variable 'turno' en 1 después de cada ataque.
  turno++;
}

// Este mensaje se mostrará en la consola una vez que la condición del bucle 'while' (vida > 0) sea falsa,
// es decir, cuando la vida llegue a 0 o menos.
console.log(enemigo + " te ha eliminado en el turno " + turno + ". Buen intento.");