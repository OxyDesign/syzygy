$(document).ready(function(){
	var selects = $('.comparison-selection select'),
		results = $('.panel-toggle'),
		mobileNav = $('.mobile-nav .panel-heading'),
		selected = mobileNav.filter('.selected'),
		eltIndex = selected.length ? mobileNav.index(selected) : 0,
		mobileCarousel = $('.mobile-carousel .glyphicon'),
		click = "onTap" in window ? 'tap' : 'click';

	carouselUpdate();

	mobileNav.add(mobileCarousel).on(click,function(){
		var elt = $(this);
		if(elt.hasClass('panel-heading')){
			eltIndex = mobileNav.index(elt);
		}else if(!elt.hasClass('inactive')){
			elt.hasClass('glyphicon-chevron-right') ? eltIndex++ : eltIndex--;
		}
		carouselUpdate();
	});

	$('.comparison').compare({
		selection:'.comparison-selection',
		results:'.comparison-results'
	});

	function carouselUpdate(){
		mobileNav.removeClass('selected');
		mobileNav.eq(eltIndex).addClass('selected');

		results.removeClass('active');
		results.eq(eltIndex).addClass('active');

		mobileCarousel.removeClass('inactive');
		if(eltIndex === 0){
			mobileCarousel.filter('.glyphicon-chevron-left').addClass('inactive');
		}else if(eltIndex === mobileNav.length-1){
			mobileCarousel.filter('.glyphicon-chevron-right').addClass('inactive');
		}
	}
});