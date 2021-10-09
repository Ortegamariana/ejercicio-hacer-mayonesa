
console.log("MAYONESA SEGUN YO");

function hacer_mayonesa() {
    console.log("Romper un huevo y meterlo en un vaso ondo");
    console.log("Meter 2 tazas de aceite de oliva o girasol");
    console.log("Agregar pizcas de sal al gusto");
    // 2 gotas de limon !  
    console.log("Agregar vinagre media cucharadita.");
    console.log("Introducir la licuadora electrica o manual dentro de la mezcla");
    console.log("Empezar a batir todo hasta emulsionar");
    console.log("Mover de arriba hacia abajo para sacarle aire");
    console.log("Al ver una textura espesa, retira la licuadora");
    console.log("Listo!");
}

function agregar_limon() {
    console.log("Agregar vinagre media cucharadita.");
}

// Argumentos del programa via linea de comandos
const args = process.argv;          
console.log(args);

let runtime = args[0], programm = args[1];
let huevo = args[2], aceite = args[3], limon = args[4], sal = args[5];


if (huevo && aceite && sal) {
    hacer_mayonesa();
    if(limon) {
        agregar_limon();
    }
} else { 
    console.log("Che, no se puede hacer mayonesa");
    console.log("Los argumentos son: huevo, aceite, limon, sal");
}


