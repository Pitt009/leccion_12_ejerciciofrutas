function agregarFruta(){
  var nombreFruta = document.getElementById('nombreFruta').value
  var frutaAgregada = document.createElement("li");
  frutaAgregada.id= nombreFruta;
  frutaAgregada.innerHTML= "<span onclick='eliminar(this)'>X</span>" + nombreFruta;
  lista.appendChild(frutaAgregada);
  //frutaAgregada.innerText = nombreFruta;
  }


function eliminar(elemento) {
    var id=elemento.parentNode.getAttribute("id");
    node=document.getElementById( id);
    node.parentNode.removeChild(node);
 }