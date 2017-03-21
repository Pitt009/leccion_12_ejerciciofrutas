function agregarFruta(){
  var texto = document.getElementById('li').value;
  var lin = document.createElement("LI");
  li.innerHTML = texto == ""?"(fruta que no existe)" :texto;
  document.getElementById('lista').appendChild(li);

  }
