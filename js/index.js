var instance 
$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.modal').modal();
  $('.collapsible').collapsible();
  $('.slider').slider();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
        
});



let text = "Ver más";

function showMore(){

  text = text == "Ver más" ? "Ver menos" : "Ver más";

  $("#showMoreBtn").html(text)

  $(".seeMoreDiv").slideToggle(250)
  

  
  
}
