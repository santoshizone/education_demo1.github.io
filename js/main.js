var preloader = document.getElementById("loader1");
  function loadfunction(){
    preloader.style.display = "none";}





$(document).ready(function(){

$('.sec2_col1').waypoint(function(direction){

    $('.sec2_col1').addClass(' animated fadeInLeft')
    $('.sec2_col2').addClass(' animated fadeInRight')
    
   
    

   
  },{
    offset:'50%'
  })


$('.feature_col1').waypoint(function(direction){

    $('.feature_col1').addClass(' animated slideInDown')
    $('.feature_col2').addClass(' animated slideInUp')
    $('.feature_col3').addClass(' animated slideInDown')
    
   
    

   
  },{
    offset:'50%'
  })



$('.media1').waypoint(function(direction){

    $('.media1').addClass(' animated slideInLeft')
    $('.media2').addClass(' animated slideInRight')
   
    
   
    

   
  },{
    offset:'50%'
  })





});



mybutton = document.getElementById("myBtn2");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

