$(document).ready(function() {

	/*------------------- Products slider --------------------*/

	var productsSlider = $("#products__slider").lightSlider( {
		item: 5,
		autoWidth: false,
		slideMove: 1, // slidemove will be 1 if loop is true
		slideMargin: 10,
		loop: true,  // infinite loop
		pager: false,  // delete dots
		controls: false // delete controls for styling own ones
	});

	$('.controls__btn_prev').on('click', function () {
		productsSlider.goToPrevSlide();
	});
	$('.controls__btn_next').on('click', function () {
		productsSlider.goToNextSlide();
	});

/*------------------- Brands slider --------------------*/

	var brandsSlider = $("#brands__slider").lightSlider( {
		item: 7,
		autoWidth: false,
		slideMove: 1, // slidemove will be 1 if loop is true
		slideMargin: 10,
		loop: true,  // infinite loop
		pager: false,  // delete dots
		controls: false // delete controls for styling own ones
	});

	$('.small-controls__btn_prev').on('click', function () {
		brandsSlider.goToPrevSlide();
	});
	$('.small-controls__btn_next').on('click', function () {
		brandsSlider.goToNextSlide();
	});
});