/*
    Author: Clint Losee
*/
/* jshint -W117 */
(function () {
    if ($('body.has-glossary').length > 0) {
        $('.paging').quickPager({pageSize: 30});
    }

    function mainmenu() {
        $('#nav ul').css({display: 'none'}); // Opera Fix
        $('#nav li').hover(function() {
                $(this).find('ul:first').css({visibility: 'visible', display: 'none'}).show(400);
            }, function () {
                $(this).find('ul:first').css({visibility: 'hidden'});
            });
    }

    $(function () {
        mainmenu();
    });
})();

function validate(e) {
    e.preventDefault();
    if( document.contactForm.name.value == "" ) {
        alert( "Please provide your name." );
        document.contactForm.name.focus() ;
        return false;
    }
    if( document.contactForm.email.value == "" ) {
        alert( "Please provide your Email." );
        document.contactForm.email.focus() ;
        return false;
    }
    if( document.contactForm.comments.value == "" ) {
        alert( "Please enter comments for your request." );
        return false;
    }
    alert("Your form is being submitted.  Thank you.");
    return( true );
}