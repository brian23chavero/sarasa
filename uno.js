// EJERCICIO 1
/*  Para una veterinaria se necesita un programa que permita ingresar datos de perros 
 con su precio de vacunación a pagar hasta que el cliente quiera. 
 Por cada perro, se ingresa:
  raza: (validar "sharpei", "galgo", "pastor").
  nombre,
  edad (entre 1 y 25),
  peso (mas de 0),
  precio de consulta (desde 500 hasta 1500)
 Se pide informar por alert:
 a)El importe a pagar mas caro de los "pastor".
 b)El importe total a pagar con descuento (solo si corresponde)
 	Si se vacunan más de 2 perros, se obtiene un 20% de descuento sobre el total a pagar.
 	Si se vacunan más de 4 perros, se obtiene un 30% de descuento sobre el total a pagar.
 	Si se vacunan más de 6 perros, se obtiene un 40% de descuento sobre el total a pagar.
 c)La raza con más cantidad de perros mayores a 10 años
 d)Nombre, raza y edad del perro más joven ingresado
  */
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
