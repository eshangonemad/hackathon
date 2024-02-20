
function TooCalc(){
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=300,height=500,left=350,top=400`;//data to open no menu login

open('https://eshangonemad.github.io/calculator', 'test', params);//opens up a no menu version of login
}
function load(){
  
if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
window.location.assign("/alerts/mobile.html");console.log('checkcom')
    
}else{
  console.log('wurks?')
     document.getElementById("cs").style.display = "none";document.getElementById("mathex").style.display = "none";document.getElementById("bio").style.display = "none";document.getElementById("chem").style.display = "none";document.getElementById("phy").style.display = "none";document.getElementById("evm").style.display = "none";document.getElementById("bstds").style.display = "none";document.getElementById("eco").style.display = "none";

if (localStorage.getItem("cos") === null) {
  window.location.assign("/start/start.html");
} else {
  var chemi = parseInt(localStorage.getItem("chemi"));
  var biol = parseInt(localStorage.getItem("biol"));
  var mathext = parseInt(localStorage.getItem("mathext"));
  var phys = parseInt(localStorage.getItem("phys"));
  var cos = parseInt(localStorage.getItem("cos"));
  
  var evos = parseInt(localStorage.getItem("evos"));
  var bsos = parseInt(localStorage.getItem("bsos"));
  var eco = parseInt(localStorage.getItem("eco"));
  if (chemi === 1) {
    document.getElementById("chem").style.display = "block";
  }
  if (biol === 1) {
    document.getElementById("bio").style.display = "block";
  }
  if (mathext === 1) {
    document.getElementById("mathex").style.display = "block";
  }
  if (phys === 1) {
    document.getElementById("phy").style.display = "block";
  }
  if (cos === 1) {
    document.getElementById("cs").style.display = "block";
  }
  if (bsos === 1) {
    document.getElementById("bstds").style.display = "block";
  }
    if (evos === 1) {
    document.getElementById("evm").style.display = "block";
  }
    if (eco === 1) {
    document.getElementById("eco").style.display = "block";
  }
}
}
}

function chemcl(){
  document.getElementById('load').src = "/resources/chemistry.html";
}
function cscl(){
  document.getElementById('load').src = "/resources/cs.html";
}
function phycl(){
  document.getElementById('load').src = "/resources/physics.html";
}
function mexcl(){
  document.getElementById('load').src = "/resources/mathex.html";
}
function bicl(){
  document.getElementById('load').src = "/resources/biology.html";
}
function Giauth(){
   document.getElementById('load').src = "/home/home.html";
  }


function evcl(){
  document.getElementById('load').src= "/resources/EVM.html"
}

function bscl(){
  document.getElementById('load').src= "/resources/bstds.html"
}
function eccl(){
  document.getElementById('load').src= "/resources/economics.html"
}