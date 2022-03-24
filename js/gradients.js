if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
  $('#gradient').addClass('safari');
}

// gradient 1 
function animate_gradient1() {
  $('#gradient1.gradient_block .gradient_after').animate(
      {opacity:'1'}
      ,3000
  )
  .animate(
      {opacity:'0'}
      ,3000
      ,animate_gradient1
  ); 
}


// gradient 2 
function animate_gradient2() {
  $('#gradient2.gradient_block .gradient_after').animate(
      {opacity:'1'}
      ,2000
  )
  .animate(
      {opacity:'0'}
      ,2000
      ,animate_gradient2
  ); 
}


// gradient 3 
function animate_gradient3() {
  $('#gradient3.gradient_block .gradient_after').animate(
      {opacity:'1'}
      ,1000
  )
  .animate(
      {opacity:'0'}
      ,1000
      ,animate_gradient3
  ); 
}


// gradient 4 
function animate_gradient4() {
  $('#gradient4.gradient_block .gradient_after').animate(
      {opacity:'1'}
      ,2000
  )
  .animate(
      {opacity:'0'}
      ,2000
      ,animate_gradient4
  ); 
}


// gradient 5 
function animate_gradient5() {
  $('#gradient5.gradient_block .gradient_after').animate(
      {opacity:'1'}
      ,2000
  )
  .animate(
      {opacity:'0'}
      ,2000
      ,animate_gradient5
  ); 
}


// gradient 6 
function animate_gradient6() {
  $('#gradient6.gradient_block .gradient_after').animate(
      {opacity:'1'}
      ,5000
  )
  .animate(
      {opacity:'0'}
      ,5000
      ,animate_gradient6
  ); 
}


// gradient 7 
function animate_gradient7() {
  $('#gradient7.gradient_block .gradient_after').animate(
      {opacity:'1'}
      ,2000
  )
  .animate(
      {opacity:'0'}
      ,2000
      ,animate_gradient7
  ); 
}



// gradient 8 
function animate_gradient8() {
  $('#gradient8.gradient_block .gradient_after').animate(
      {opacity:'1'}
      ,3000
  )
  .animate(
      {opacity:'0'}
      ,3000
      ,animate_gradient8
  ); 
}


// gradient 9 
function animate_gradient9() {
  $('#gradient9.gradient_block .gradient_after').animate(
      {opacity:'1'}
      ,2000
  )
  .animate(
      {opacity:'0'}
      ,2000
      ,animate_gradient9
  ); 
}


// gradient 10 
function animate_gradient10() {
  $('#gradient10.gradient_block .gradient_after').animate(
      {opacity:'1'}
      ,3000
  )
  .animate(
      {opacity:'0'}
      ,3000
      ,animate_gradient10
  ); 
}



// gradient 11 
function animate_gradient11() {
  $('#gradient11.gradient_block .gradient_after').animate(
      {opacity:'1'}
      ,3000
  )
  .animate(
      {opacity:'0'}
      ,3000
      ,animate_gradient11
  ); 
}



// gradient 12 
function animate_gradient12() {
  $('#gradient12.gradient_block .gradient_after').animate(
      {opacity:'1'}
      ,4000
  )
  .animate(
      {opacity:'0'}
      ,4000
      ,animate_gradient12
  ); 
}



// gradient 3a 
function animate_gradient3a() {
  $('#gradient3').animate(
      {height:'90%',width:'90%'}
      ,3500
  )
  .animate(
      {height:'80%',width:'80%'}
      ,3500
      ,animate_gradient3a
  ); 
}


// gradient 4a 
function animate_gradient4a() {
  $('#gradient4').animate(
      {height:'70%',width:'70%'}
      ,4000
  )
  .animate(
      {height:'60%',width:'60%'}
      ,4000
      ,animate_gradient4a
  ); 
}


// gradient 5a 
function animate_gradient5a() {
  $('#gradient5').animate(
      {height:'70%',width:'70%'}
      ,6000
  )
  .animate(
      {height:'80%',width:'80%'}
      ,6000
      ,animate_gradient5a
  ); 
}


// gradient 6a 
function animate_gradient6a() {
  $('#gradient6').animate(
      {height:'90%',width:'90%'}
      ,6000
  )
  .animate(
      {height:'80%',width:'80%'}
      ,6000
      ,animate_gradient6a
  ); 
}


// gradient 7a 
function animate_gradient7a() {
  $('#gradient7').animate(
      {height:'90%',width:'90%'}
      ,4000
  )
  .animate(
      {height:'80%',width:'80%'}
      ,4000
      ,animate_gradient7a
  ); 
}

// gradient 8a 
function animate_gradient8a() {
  $('#gradient8').animate(
      {height:'75%',width:'75%',top:'-40%',left:'30%'}
      ,5000
  )
  .animate(
      {height:'80%',width:'80%',top:'-50%',left:'26%'}
      ,5000
      ,animate_gradient8a
  ); 
}


// gradient 9a 
function animate_gradient9a() {
  $('#gradient9').animate(
      {height:'75%',width:'70%'}
      ,4000
  )
  .animate(
      {height:'80%',width:'80%'}
      ,4000
      ,animate_gradient9a
  ); 
}


// gradient 10a 
function animate_gradient10a() {
  $('#gradient10').animate(
      {height:'85%',width:'55%',top:'-5%',right:'-20%'}
      ,6000
  )
  .animate(
      {height:'80%',width:'50%',top:'-10%',right:'-26%'}
      ,6000
      ,animate_gradient10a
  ); 
}


// gradient 11a 
function animate_gradient11a() {
  $('#gradient11').animate(
      {height:'85%',width:'85%',bottom:'-5%',right:'-15%'}
      ,5000
  )
  .animate(
      {height:'80%',width:'80%',bottom:'-10%',right:'-21%'}
      ,5000
      ,animate_gradient11a
  ); 
}

// gradient 12a 
function animate_gradient12a() {
  $('#gradient12').animate(
      {height:'90%',width:'90%',bottom:'-10%',left:'8%'}
      ,4000
  )
  .animate(
      {height:'80%',width:'80%',bottom:'-20%',left:'2%'}
      ,4000
      ,animate_gradient12a
  ); 
}





if (/Android/i.test(navigator.userAgent) || (/Android/i.test(navigator.platform))) {
//
}
else {

//animate_gradient2();
//animate_gradient3();
//animate_gradient4();
//animate_gradient5();
animate_gradient6();
animate_gradient7();
animate_gradient8();
animate_gradient9();
animate_gradient10();
animate_gradient11();
animate_gradient12();

//animate_gradient3a();
//animate_gradient4a();
//animate_gradient5a();
animate_gradient6a();
animate_gradient7a();
animate_gradient8a();
animate_gradient9a();
animate_gradient10a();
animate_gradient11a();
animate_gradient12a();

}