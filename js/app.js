var boton = document.getElementById('btn');
boton.addEventListener('click', showmenu);

function showmenu() {
  var navegador = document.getElementById('opcs-menu');
  if (navegador.classList.contains('disabled-menu')) {
    navegador.classList.remove('disabled-menu');
    navegador.classList.add('enabled-menu');
  } else {
    navegador.classList.add('disabled-menu');
    navegador.classList.remove('enabled-menu');
    
  }
}

