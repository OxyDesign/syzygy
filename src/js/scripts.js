$(document).ready(function(){
    $('.comparison').compare({
    	selection:'.comparison-selection',
    	results:'.comparison-results'
    });

    $(window).resize(function(){
    	console.log('resize');
    });
});