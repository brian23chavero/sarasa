/* EJERCICIO 3
debemos cargar 10 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar:
marca del producto
Tipo de galletita : "con sal", "sin sal", "dulces".
cantidad de cajas: mas de 0
cantidad de kilos por caja:mas de 0
nombre proveedor
origen: "nacional", "mercosur", "resto del mundo"
Se pide informar por document.write:

a) el ingreso nacional con la menor cantidad de cajas.
b) el proveedor de las galletitas dulces que menos kilos tiene por caja.
c) el origen que tiene mayor cantidad de cajas en total */
function mostrar() {
  let tipoJuguete;
  let origen;
  let precio;
  /* a */
  let contadorMuneca = 0;
  let contadorRompecabezas = 0;
  let contadorPelota = 0;
  let mayorVendido;
  /* b */
  let promedioImportados;
  let contadorImportados = 0;
  let acumPrecio = 0;

  /* c */
  let importeTotal = 0;
  /* d */
  let flagRompecabezas = 1;
  let precioBarato;
  let ivaTotal;

  let respuesta;
  do {
    tipoJuguete = prompt(
      "ingrese tipo de juguete muñeca,rompecabezas o pelota "
    );
    while (
      tipoJuguete != "muñeca" &&
      tipoJuguete != "rompecabezas" &&
      tipoJuguete != "pelota"
    ) {
      tipoJuguete = prompt(
        "Error,reingrese tipo de juguete muñeca,rompecabezas o pelota "
      );
    }
    origen = prompt("ingrese origen nacional o importado");
    while (origen != "nacional" && origen != "importado") {
      origen = prompt("Error,reingrese origen nacional o importado");
    }
    precio = parseFloat(prompt("ingrese precio entre 1000 y 5000"));

    while (isNaN(precio) || precio < 1000 || precio > 5000) {
      precio = parseFloat(prompt("ingrese precio entre 1000 y 5000"));
    }

    switch (tipoJuguete) {
      case "muñeca":
        contadorMuneca++;
        break;

      case "pelota":
        contadorPelota++;
        break;

      case "rompecabezas":
        contadorRompecabezas++;

        if (
          origen == "nacional" &&
          (flagRompecabezas || precio < precioBarato)
        ) {
          precioBarato = precio;
        }
        break;
    }
    if (origen == "importado") {
      acumPrecio = acumPrecio + precio;
      contadorImportados++;
    }
    importeTotal = importeTotal + precio;

    respuesta = prompt("desea ingresar nuevamente");
  } while (respuesta == "si");

  if (
    contadorMuneca > contadorPelota &&
    contadorMuneca > contadorRompecabezas
  ) {
    mayorVendido = "muñeca";
  } else if (
    contadorPelota >= contadorMuneca &&
    contadorMuneca > contadorRompecabezas
  ) {
    mayorVendido = "pelota";
  } else {
    mayorVendido = "rompecabezas";
  }
  ivaTotal = (21 * 100) / importeTotal;

  if (contadorImportados > 0) {
    promedioImportados = acumPrecio / contadorImportados;
    console.log("El promedio de importados es de " + promedioImportados);
  }
  console.log("El juguete mas vendido es " + mayorVendido);
  console.log("La recaudacion total es de " + importeTotal);
  console.log("El precio de rompezabezas mas barato es de " + precioBarato);
  console.log("En total se precio de iva " + ivaTotal);
}
