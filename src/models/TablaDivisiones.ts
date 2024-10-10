class Fila {
  numeroFila: number;
  alto: number;
  columnas: Columnas[];

  constructor(numeroFila: number, alto: number) {
    this.numeroFila = numeroFila;
    this.alto = alto;
    this.columnas = [];
  }

  añadirColumnas(columnas: Columnas) {
    this.columnas.push(columnas);
  }
}

class Columna {
  numeroColumna: number;
  numeroFila: number;
  ancho: number;

  constructor(numeroColumna: number, ancho: number, numeroFila: number) {
    this.numeroColumna = numeroColumna;
    this.numeroFila = numeroFila;
    this.ancho = ancho;
  }
}

class Columnas {
  anchoTotal: number;
  fila?: Fila;
  contadorColumnas: number;
  columnas: Columna[];

  constructor(anchoTotal: number) {
    this.anchoTotal = anchoTotal;
    this.contadorColumnas = 0;
    this.columnas = [];
  }

  añadirPrimeraColumna(fila: Fila) {
    this.contadorColumnas++;
    const columna = new Columna(this.contadorColumnas, this.anchoTotal, fila.numeroFila);
    this.columnas.push(columna);
  }

  añadirColumna(columnaOrigen: Columna) {
    const nueva_ancho = columnaOrigen.ancho / 2;
    columnaOrigen.ancho = nueva_ancho;
    const ancho = nueva_ancho;

    this.contadorColumnas++;
    const columnas = new Columnas(this.anchoTotal);
    columnas.añadirPrimeraColumna(this.fila!);
  }
}

export class TablaDivisiones {
  alto: number;
  ancho: number;
  filas: Fila[];
  totalFilas: number;

  constructor(alto: number, ancho: number) {
    this.alto = alto;
    this.ancho = ancho;
    this.filas = [];
    this.totalFilas = 0;
  }

  añadirPrimeraFila() {
    this.totalFilas++;
    const fila = new Fila(this.totalFilas, this.alto);
    const columnas = new Columnas(this.ancho);
    columnas.añadirPrimeraColumna(fila);
    fila.añadirColumnas(columnas);
    this.filas.push(fila);
  }

  añadirFila(filaOrigen: Fila) {
    const nueva_altura = filaOrigen.alto / 2;
    filaOrigen.alto = nueva_altura;
    const altura = nueva_altura;
    
    this.totalFilas++;
    const fila = new Fila(this.totalFilas, altura);
    this.filas.push(fila);
  }
}