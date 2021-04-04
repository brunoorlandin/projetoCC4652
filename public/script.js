var Gas;
var Fumaca;
function Get() {
  var requests = new XMLHttpRequest();
  requests.onreadystatechange = function() {
      if (requests.readyState == 4) {
          dados = JSON.parse(requests.responseText);
          Gas = dados.gas;
          Fumaca = dados.fumaca;
          document.getElementById('fumaca').innerHTML = '<h2> Fumaça: '+Fumaca+'</h2>'
          document.getElementById('gas').innerHTML = '<h2> Gás: '+Gas+'</h2>'
      };
  };
  try {
      requests.open("GET", "http://127.0.0.1:3000/api/Receber");
      requests.send();
  } catch (e) {
      console.log(e);
  }
}
function Start(params) {
    setInterval(Get,1000);
}