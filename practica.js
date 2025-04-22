let mochila = [
  "Poción de curación",
  "Elixir",
  "Antídoto",
  "Pokébola"
];

let i = 0;

while (i < mochila.length) {
  console.log(`Revisando objeto ${i + 1}: ${mochila[i]}`);
  i++;
    if (mochila[i] === "Elixir") {
        console.log("¡Objeto raro detectado!!");
        break; // Salir del bucle si se encuentra el antídoto
    }
}

console.log("Fin de la revisión del inventario");
