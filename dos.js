function mostrar() {
  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let notaPromedio;
  let edad;

  let contadorFisica = 0;
  let contadorQuimica = 0;
  let contadorSistemas = 0;

  let flagFisica = 1;
  let nombreFisica;
  let notaFisica;
  let porcentajeFisica;
  let porcentajeQuimica;
  let porcentajeSistemas;

  let flagF = 1;
  let nombreJ;
  let edadJ;
  let totalAlumnos;

  let flagMasMaterias = 1;
  let edadMasMaterias;
  let nombreMasMaterias;
  let cantidadMasMaterias;

  let contadorVueltas;

  for (contadorVueltas = 0; contadorVueltas < 500; contadorVueltas++) {
    nombre = prompt("ingrese nombre");
    carrera = prompt("ingrese carrera Quimica,Fisica o Sistemas");
    while (
      carrera != "Quimica" &&
      carrera != "Fisica" &&
      carrera != "Sistemas"
    ) {
      carrera = prompt("Error,reingrese carrera Quimica,Fisica o Sistemas");
    }
    sexo = prompt("ingrese sexo masculino, femenino o no binario");
    while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario") {
      sexo = prompt("Error,ingrese sexo masculino, femenino o no binario");
    }
    cantidadMaterias = parseInt(prompt("ingrese cantidadMaterias entre 1 y 5"));
    while (
      isNaN(cantidadMaterias) ||
      cantidadMaterias < 1 ||
      cantidadMaterias > 5
    ) {
      cantidadMaterias = parseInt(
        prompt("Error,reingrese cantidadMaterias entre 1 y 5")
      );
    }
    notaPromedio = parseInt(prompt("ingrese notaPromedio entre 1 y 10"));
    while (isNaN(notaPromedio) || notaPromedio < 0 || notaPromedio > 10) {
      notaPromedio = parseInt(
        prompt("Error,reingrese notaPromedio entre 1 y 10")
      );
    }
    edad = prompt("ingrese edad");
    while (isNaN(edad) || edad > 0) {
      edad = prompt("Error,reingrese edad");
    }
    switch (carrera) {
      case "Fisica":
        contadorFisica++;
        if (flagFisica || notaPromedio > notaFisica) {
          notaFisica = notaPromedio;
          nombreFisica = nombre;
        }
        break;

      case "Quimica":
        contadorQuimica++;
        break;

      case "Sistemas":
        contadorSistemas++;
        break;
    }
    if (flagF || edad < edadJ) {
      edadJ = edad;
      nombreJ = nombre;
    }
    if (
      (carrera != "Quimica" && flagMasMaterias) ||
      cantidadMaterias > cantidadMasMaterias
    ) {
      cantidadMasMaterias = cantidadMaterias;
      edadMasMaterias = edad;
      nombreMasMaterias = nombre;
      flagMasMaterias = 0;
    }
  }
  totalAlumnos = contadorSistemas + contadorFisica + contadorQuimica;
  if (contadorSistemas > 0) {
    porcentajeSistemas = (contadorSistemas * 100) / totalAlumnos;
    console.log(
      "En total ahi " + porcentajeSistemas + " de alumnos en sistemas"
    );
  } else {
    console.log("no poseen alumnos en sistemas");
  }
  if (contadorFisica > 0) {
    console.log("En toatl ahi " + porcentajeFisica + " de alumnos en fisica");
  } else {
    console.log("usted no posee alumnos de fisica");
  }
  if (contadorQuimica > 0) {
    console.log("En toatl ahi " + porcentajeQuimica + " de alumnos en fisica");
  } else {
    console.log("usted no posee alumnos de fisica");
  }

  if (flagFisica) {
    console.log("no ingreso alumnos que estudian la carrera de fisica");
  } else {
    console.log(
      "El nombre del mejor promedio de los que estudian fisica es de " +
        notaFisica +
        " y su nombre es " +
        nombreFisica
    );
  }
  if (flagF) {
    console.log("usted solo ha ingresado alumnos masculinos y no binarios");
  } else {
    console.log(
      "El nombre de la alumna mas joven es " +
        nombreJ +
        " y su edad es de " +
        edadJ
    );
  }
  if (flagMasMaterias) {
    console.log("usted solo tiene alumnos de quimica");
  } else {
    console.log(
      " la edad del estudiante que cursa mas materias es " +
        edadMasMaterias +
        " y su nombre es " +
        nombreMasMaterias +
        " y cursa " +
        cantidadMasMaterias +
        " de materias"
    );
  }
}
