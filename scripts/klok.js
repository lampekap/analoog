window.onload = function startKlok() {

  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var x = window.matchMedia("(max-width: 700px)");

  var posH = (30 * h)+ 0.5 * m ;
  var posM = 6 * m;
  var posS = 6 * s;

  document.getElementById('uurWijzer').style.transform = "rotate("+ posH +"deg)";
  document.getElementById('minWijzer').style.transform = "rotate("+ posM +"deg)";
  document.getElementById('secWijzer').style.transform = "rotate("+ posS +"deg)";

  if (x.matches) {
    klein(h);
  }else {
    groot(h);
  }


  setTimeout(startKlok, 500);
}