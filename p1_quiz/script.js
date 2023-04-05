// arreglo que contendra las respuestas correctas
let correctas = [3, 1, 3, 2, 3];

// arreglo donde se guardaran las respuestas del usuario
let opcion_elegida = [];

// variable que acumulara la cantidad de respuestas correctas
let cantidad_correctas = 0;

// *** función que toma el num de preguntas y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada){
    //Guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;

    //código para poner en color blanco el fondo
    id = "p"+num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    //doy el color a label seleccionado
    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

// *** función para comparar los arreglos
function corregir(){
    cantidad_correctas = 0;
    for(i = 0; i < correctas.length; i++){
        if(correctas[i] == opcion_elegida[i]){
            cantidad_correctas++;
        }
    }

    document.getElementById("resultado").innerHTML = cantidad_correctas;

}