
function mostrar(){
  var text= document.getElementById("textoUsuario").value;
  document.getElementById("contenidoUsuario").innerHTML = text;
};

function texto(op){
  switch (op) {
    case 1:
        document.getElementById("contenidoUsuario").style.fontSize= "40px";
        break;
    case 2:
        document.getElementById("contenidoUsuario").style.fontSize= "20px";
      break;
    case 3:
        document.getElementById("contenidoUsuario").style.fontSize= "11px";
      break;
    }
}


function alineacion(op) {
  switch (op) {
    case 1:
      document.getElementById("contenidoUsuario").style.textAlign = "right";
      break;x

    case 2:
      document.getElementById("contenidoUsuario").style.textAlign = "center";
      break;

    case 3:
      document.getElementById("contenidoUsuario").style.textAlign = "left";
      break;

  }
}

function color(op) {
  switch (op) {
    case 1:
      document.getElementById("contenidoUsuario").style.color = "blue";
      break;

    case 2:
      document.getElementById("contenidoUsuario").style.color = "pink";
      break;

    case 3:
      document.getElementById("contenidoUsuario").style.color = "purple";
      break;
    case 4:
      document.getElementById("contenidoUsuario").style.color = "black";
      break;

  }
}

function fondoColor(op) {
  switch (op) {
    case 1:
      document.getElementById("contenidoUsuario").style.backgroundColor = "lightblue";
      return 1;
      break;

    case 2:
      document.getElementById("contenidoUsuario").style.backgroundColor = "lightpink";
      return 2;
      break;

    case 3:
      document.getElementById("contenidoUsuario").style.backgroundColor = "purple";
      return 3;
      break;
    case 4:
      document.getElementById("contenidoUsuario").style.backgroundColor = "darkgrey";
      return 4;
      break;
    case 5:
      document.getElementById("contenidoUsuario").style.backgroundColor = "white";
      return 5;
      break;

  }
}

function subirComentario(){

  var text4 = document.getElementById("textoUsuario").value;

  //crear elemento parrafo
  var node = document.createElement("p");
  var textnode = document.createTextNode(text4);

  //crear elemento linea
  var node2 = document.createElement("hr");
  var textnode2 = document.createTextNode("");

  //nodo de parrafo
  node.appendChild(textnode);
  document.getElementById("comentarios").appendChild(node);

  //nodo de linea
  node.appendChild(textnode2);
  document.getElementById("comentarios").appendChild(node2);

  // insetar parrafo antes de el otro
  var para = document.getElementById("comentarios");
  para.insertBefore(node, para.childNodes[0]);


  // insertar linea antes de
  var para2 = document.getElementById("comentarios");
  para2.insertBefore(node2, para2.childNodes[0]);
/*


//clonar textitoooo
  var itm = document.getElementById("contenidoUsuario").lastChild;
  var cln = itm.cloneNode(true);
  var para5= document.getElementById("comentarios");
  para5.insertBefore(cln, para5.childNodes[1]);
  console.log(itm,cln,para5)
*/
}
