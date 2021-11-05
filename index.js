class Mayonesa {
    constructor (receta, ingredientes, utensilios, cantidades) {
      this.receta = receta;
      this.ingredientes = ingredientes;
      this.utensilios = utensilios;
      this.cantidades =cantidades;
    }
    // Getter
    get ingredientes() {
       return this.calcCantidades();
     }
    // Método
    calcCantidades () {
      return this.cantidades ;
    }
                 }