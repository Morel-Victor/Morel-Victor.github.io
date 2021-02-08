
/*MENU REDUCTION ON MOBILE NAVBAR*/

$(document).ready(function () {

    $(document).click(function (event) {

        let clickover = $(event.target);
        let _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {

            $(".navbar-toggler").click();

        }

    });

});