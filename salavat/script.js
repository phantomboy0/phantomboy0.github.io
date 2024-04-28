const Sbutton = document.getElementById("sal");

let totalSalavat = 0;
function salavat(params) {
  Sbutton.innerHTML = ++totalSalavat;
}

function reset(params) {
  if (window.confirm("آیا میخواهید تمام صلوات های خود را پاک کنید؟س")) {
    totalSalavat = 0;
    Sbutton.innerHTML = totalSalavat;
  } else {
  }
}
