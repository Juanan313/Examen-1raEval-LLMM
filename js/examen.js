



function contarParrafos() {
    var x = document.getElementsByTagName("p");
    return x;
}

function añadirParrafo() {
    x = contarParrafos().length
    var elemento = document.getElementById("void");
    var para = document.createElement("p");
    var node = document.createTextNode("En esta página habían parrafos "+x+" y ahora hay "+(x+1)+".");
    para.appendChild(node);
    elemento.appendChild(para);
}