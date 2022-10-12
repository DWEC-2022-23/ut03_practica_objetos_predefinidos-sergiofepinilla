//Funcion que devuelve los dias restantes hasta los reyes magos de 2023
function reyesMagos(fecha) {
  //Fuerzo un formato mm/dd/yyyy
  if (fecha.length == 10) {
    //Limito la fecha
    date1 = new Date(fecha);

    //Compruebo fecha valida
    if (date1 instanceof Date && !isNaN(date1)) {
      //Declaro variable con la fecha de los proximos reyes magos
      var date2 = new Date("01/06/2023");
      var tiempoDiferencia = date2.getTime() - date1.getTime();
      var diasDiferencia = tiempoDiferencia / (1000 * 3600 * 24);
      //Fixeo resultados
      var fixedDiasDirefencia = diasDiferencia.toFixed(0);
      if (fixedDiasDirefencia > 0) {
        document.getElementById("resultadoReyes").innerText =
          "Resultado : " + fixedDiasDirefencia + " dias restantes.";
      } else {
        document.getElementById("resultadoReyes").innerText =
          "Resultado : Los reyes magos de 2023 fueron hace " +
          fixedDiasDirefencia.slice(1) +
          " dias.";
      }
    } else {
      document.getElementById("resultadoReyes").innerText =
        "Fecha no valida. Revise el formato.";
    }
  } else {
    document.getElementById("resultadoReyes").innerText =
      "Fecha no valida. Revise el formato.";
  }
}
//Funcion que devuelve el area y la longitud de la circunferencia
function calcularAreaCirculo(radio) {
  parseInt(radio);
  const pi = 3.1416;
  var r = parseFloat(radio);
  var area = pi * r * r;
  var fixedArea = area.toFixed(2);
  const longitud = pi * (r * 2);
  var fixedLongitud = longitud.toFixed(2);
  //Compruebo si no me ha pasado un numero como parametro
  if (isNaN(fixedArea)) {
    document.getElementById("resultadoArea").innerText =
      "No ha introduzido un numero valido";
  } else {
    document.getElementById("resultadoArea").innerText =
      "El area es : " +
      fixedArea +
      "\nLa longitud de la circunferencia es : " +
      fixedLongitud;
  }
}

function mostrarFecha() {
  var currentDate = new Date();
  var currentDay = "";

  //Switch para pasar el valor de getDay() a String
  switch (currentDate.getDay()) {
    case 1:
      currentDay = "Lunes";
      break;
    case 2:
      currentDay = "Martes";
      break;
    case 3:
      currentDay = "Miercoles";
      break;
    case 4:
      currentDay = "Jueves";
      break;
    case 5:
      currentDay = "Viernes";
      break;
    case 6:
      currentDay = "Sabado";
      break;
    case 7:
      currentDay = "Domingo";
      break;
    default:
      currentDay = "No se ha podido obtener el dia";
      break;
  }
  //Array para obtener el mes con la funcion getMonth()
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  //Creacion de la variable con todos los datos
  var datetime =
    "Hoy es " +
    currentDay +
    " " +
    currentDate.getDate() +
    " de " +
    monthNames[currentDate.getMonth()] +
    " y son las " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    " horas";
  document.getElementById("resultadoHora").innerText =
    "Resultado : " + datetime;
}

function randomNum(comienzo, fin) {
  //Funcion para general numeros aleatorios de comienzo a fin, excluyendo estos.
  comienzo = Number(comienzo) + 1;
  let n = Math.floor(Math.random() * (Number(fin) - comienzo) + comienzo);
  document.getElementById("resultadoNumAleatorio").innerText =
    "Numero Aleatorio :" + n;
}

function mitadCar(cadena) {
  //Funcion que corta la palabra por dos y muestra el valor del prinpio
  document.getElementById("resultadoCadena").innerText =
    "Resultado :" + cadena.slice(0, cadena.length / 2);
}
function ultimoCaracter(cadena) {
  //Funcion que devuelve la ultima letra de una cadena
  document.getElementById("resultadoCadena").innerText =
    "Resultado :" + cadena.slice(-1);
}
function cadenaInversa(cadena) {
  //Funcion que invierte el orden de un String
  document.getElementById("resultadoCadena").innerText =
    "Resultado :" + cadena.split("").reverse().join("");
}
function cadenaGuiones(cadena) {
  //Funcion que devuelve el string con un guion entre cada caracter
  cadena = cadena.replace(/ /g, ""); //Uso del regex para quitar todos los espacios y evitar dobles guiones
  let n = cadena.split(""); //Convierte en string en un array para crear el nuevo string de manera sencilla
  let fixedCadena = "";
  for (let i = 0; i < n.length; i++) {
    fixedCadena += n[i] + "-";
  }
  document.getElementById("resultadoCadena").innerText =
    "Resultado :" + fixedCadena.slice(0, -1); //Slice al final para quitar el ultimo guion
}

function contarVocales(cadena) {
  document.getElementById("resultadoCadena").innerText =
    "Resultado :" + cadena.match(/[aeiou]/gi).length; //Cuenta las vocales (g = global / i = cuenta Mayus y Minus)
}
