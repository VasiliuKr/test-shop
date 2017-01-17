$(document).ready(function() {
	$('.fancybox').fancybox();
});

var productGallery = (function () {

	var init = function () {
		_setUpListeners();
		// то, что должно произойти сразу
	};

	var _setUpListeners = function () {
		// прослушка событий...
		$('.gallery__link').on('click', _showProduct);
	};

	var _showProduct = function (e) {
		e.preventDefault();
		var $this = $(this),
				smallImg = $this.find('.fancybox__small'),
				smallImgSrc = smallImg.attr('src'),
				fancyBox = $this.closest('.product-card').find('.fancybox'),
				fancyImg = fancyBox.find('.product-card__pic');

		fancyBox.attr('href', smallImgSrc);
		fancyImg.attr('src', smallImgSrc);

		console.log(smallImgSrc);
		console.log(fancyBox);
		console.log(fancyImg);	
	};

	return {
		init: init
	};

})();

productGallery.init();