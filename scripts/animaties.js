var animatieF = document.getElementById('frame');
var animatieU = document.getElementById('uurWijzer');
var animatieM = document.getElementById('minWijzer');
var animatieS = document.getElementById('secWijzer');

var tl1 = new TimelineMax();
var myAnimation = tl1.from([animatieF,animatieM,animatieS,animatieU], 2.1, {scaleY:0.1, scaleX:0.1, ease:Power0.easeOut });	 
   
