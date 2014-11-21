$(document).ready(function(){
	var selects = $('.comparison-selection select'), // selects
		results = $('.panel-toggle'), // results containers
		mobileNav = $('.mobile-nav .panel-heading'), // navigation
		selected = mobileNav.filter('.selected'), // selected section
		eltIndex = selected.length ? mobileNav.index(selected) : 0, // index of the selected section, if no selected section : index is set to 0
		mobileCarousel = $('.mobile-carousel .glyphicon'), // prev & next arrows
		click = 'onTap' in window ? 'tap' : 'click'; // tap for touch devices, click for others

	carouselUpdate(); // we run the function to show / hide the sections

	mobileNav.add(mobileCarousel).on(click,function(){ // when an arrow or a section is clicked / tap
		var elt = $(this);
		if(elt.hasClass('panel-heading')){ // if it's a section ...
			eltIndex = mobileNav.index(elt); // ... we set the current index to the index of the section
		}else if(!elt.hasClass('inactive')){ // if it's an arrow ...
			elt.hasClass('glyphicon-chevron-right') ? eltIndex++ : eltIndex--; // ... we increase / decrease the curent index
		}
		carouselUpdate(); // we run the function to show / hide the sections
	});

	$('.comparison').compare({ // we instaciate the comparison plugin
		selection:'.comparison-selection',
		results:'.comparison-results'
	});

	function carouselUpdate(){
		mobileNav.removeClass('selected'); // we remove all the 'selected' classes on the navigation elts
		mobileNav.eq(eltIndex).addClass('selected'); // and we add the class to the current one

		results.removeClass('active'); // we remove all the 'active' classes on the results
		results.eq(eltIndex).addClass('active'); // and we add the class to the current one

		mobileCarousel.removeClass('inactive'); // we remove all the 'inactive' classes the arrows
		if(eltIndex === 0){
			mobileCarousel.filter('.glyphicon-chevron-left').addClass('inactive'); // if it's the first element we disable the left arrow
		}else if(eltIndex === mobileNav.length-1){
			mobileCarousel.filter('.glyphicon-chevron-right').addClass('inactive'); // if it's the last element we disable the right arrow
		}
	}
});