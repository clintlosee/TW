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
