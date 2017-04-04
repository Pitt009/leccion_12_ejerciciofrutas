function agregarFruta(){
  var nombreFruta = document.getElementById('nombreFruta').value
  var frutaAgregada = document.createElement("li");
  lista.appendChild(frutaAgregada);
  frutaAgregada.innerText = nombreFruta;
  }
