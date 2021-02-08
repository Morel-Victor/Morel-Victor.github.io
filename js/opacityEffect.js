
/* EFFECT SCROLLDOWN SECTION*/

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        $('#about').css("opacity", 1- $(window).scrollTop() / 1500) 
    }) 
})


