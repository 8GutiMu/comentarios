
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
      break;x

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
      document.getElementById("contenidoUsuario").style.backgroundColor = "none";
      return 5;
      break;

  }
}

function subirComentario(){
  var text= document.getElementById("textoUsuario").value;

  var node = document.createElement("p");
  var textnode = document.createTextNode(text);

  var node2 = document.createElement("hr");
  var textnode2 = document.createTextNode("");

  node.appendChild(textnode);
  document.getElementById("comentarios").appendChild(node);

  node.appendChild(textnode2);
  document.getElementById("comentarios").appendChild(node2);

  var para = document.getElementById("comentarios");
  para.insertBefore(node, para.childNodes[0]);

  var para2 = document.getElementById("comentarios");
  para2.insertBefore(node2, para2.childNodes[0]);

}
