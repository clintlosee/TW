/* Author: Clint Losee

*/
(function($) {
	$.fn.myPlugin = function(){};
})(jQuery);

function mainmenu(){
$(" #nav ul ").css({display: "none"}); // Opera Fix
$(" #nav li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
		});
}

$(function(){
	mainmenu();
});

/*
$(function() {
	$("#content").jPaginate({items: 20});
});


$(document).ready(function() {
	$(".paging").quickPager({pageSize: 14} );
});

(function() {
	$(".paging").quickPager({pageSize: 30} );
})();*/