function mostrar() {
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let respuesta;

  let flagJ = 1;
  let edadJ;
  let tipoJ;
  let sexoJ;

  let acumReptiles = 0;
  let promedioReptiles = 0;

  let tipoMax;
  let contadorMamifero = 0;
  let contadorAve = 0;
  let contadorReptil = 0;

  let totalTipo;
  let porcentajeAves;

  do {
    nombre = prompt("ingrese nombre minimo 3 caracteres y maximo 8");
    while (!(nombre.length >= 3 && nombre.length <= 8)) {
      nombre = prompt("Error,reingrese nombre minimo 3 caracteres y maximo 8");
    }
    edad = parseInt(prompt("ingrese edad mayor a 0"));
    while (isNaN(edad) || edad > 0) {
      edad = parseInt(prompt("Error,reingrese edad mayor a 0"));
    }
    sangre = prompt("ingrese tipo de sangre fria o calida");
    while (sangre != "fria" && sangre != "calida") {
      sangre = prompt("Error,reingrese tipo de sangre fria o calida");
    }
    tipo = prompt(" ingrese tipo:mamifero, ave, reptil ");
    if (tipo != "reptil" && sangre != "fria") {
      tipo = prompt("Los reptiles son de sangre fria ");
    } else {
      while (!(tipo == "reptil" || tipo == "mamifero" || tipo == "ave")) {
        tipo = prompt("Error! ,reingrese tipo mamifero, ave, reptil");
      }
    }
    sexo = prompt("ingrese sexo m o h");
    while (sexo != "m" && sexo != "h") {
      sexo = prompt("Error,reingrese sexo m o h");
    }

    if (tipo == "reptil") {
      acumReptiles = acumReptiles + edad;
      contadorReptil++;
    } else if (tipo == "mamifero") {
      contadorMamifero++;
    } else {
      contadorAve++;
    }
    if (flagJ || edad < edadJ) {
      edadJ = edad;
      tipoJ = tipo;
      sexoJ = sexo;
      flagJ = 0;
    }
    respuesta = prompt(" desea ingresar otra mascota");
  } while (respuesta == "si");

  if (contadorReptil > contadorAve && contadorReptil > contadorMamifero) {
    tipoMax = "reptil";
  } else if (contadorAve >= contadorReptil && contadorAve > contadorMamifero) {
    tipoMax = "ave";
  } else {
    tipoMax = "mamifero";
  }
  if (contadorReptil > 0) {
    promedioReptiles = acumReptiles / contadorReptil;
  }
  totalTipo = contadorReptil + contadorAve + contadorMamifero;

  if (contadorReptil > 0) {
    console.log(
      "El promedio de edad de los reptiles es de " + promedioReptiles
    );
  }
  console.log(
    "La mascota mas joven es de tipo " +
      tipoJ +
      " y tiene de sexo " +
      sexoJ +
      " y cuenta con una edad de " +
      edadJ
  );
  if (contadorAve > 0) {
    porcentajeAves = (contadorAve * 100) / totalTipo;
    console.log("El porcentaje de aves es de " + porcentajeAves);
  }
  console.log("El tipo de que mas mascotas ahi es de " + tipoMax);
}
