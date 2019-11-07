let activeDropDown = location.href.substring(location.href.lastIndexOf('#') + 1);

switch(activeDropDown){

    case "gastosMedicosMayores":
        
        $("#gastosMedicosMayores").addClass("active");

        $('html, body').animate({
            scrollTop: $('#'+activeDropDown).offset().top
        }, 700);
    break;
    
    case "gastosMedicosMenores":

        $('html, body').animate({
            scrollTop: $('#'+activeDropDown).offset().top
        }, 700);
            
        $("#gastosMedicosMenores").addClass("active");
            
    break;

    case "mercancias":

        $('html, body').animate({
            scrollTop: $('#'+activeDropDown).offset().top
        }, 700);
            
        $("#mercancias").addClass("active");
            
    break;

    case "autos":

        $('html, body').animate({
            scrollTop: $('#'+activeDropDown).offset().top
        }, 700);
            
        $("#autos").addClass("active");
            
    break;

    case "vida":

        $('html, body').animate({
            scrollTop: $('#'+activeDropDown).offset().top
        }, 700);
            
        $("#vida").addClass("active");
            
    break;

    case "proteccion":

        $('html, body').animate({
            scrollTop: $('#'+activeDropDown).offset().top
        }, 700);
            
        $("#proteccion").addClass("active");
            
    break;

    case "civil":

        $('html, body').animate({
            scrollTop: $('#'+activeDropDown).offset().top
        }, 700);
            
        $("#civil").addClass("active");
            
    break;

    case "ahorro":

        $('html, body').animate({
            scrollTop: $('#'+activeDropDown).offset().top
        }, 700);
            
        $("#ahorro").addClass("active");
            
    break;

    case "casa":

        $('html, body').animate({
            scrollTop: $('#'+activeDropDown).offset().top
        }, 700);
            
        $("#casa").addClass("active");
            
    break;

    case "hombreClave":

        $('html, body').animate({
            scrollTop: $('#'+activeDropDown).offset().top
        }, 700);

        $("#hombreClave").addClass("active");
        
    break;

}