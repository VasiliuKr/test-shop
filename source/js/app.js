

$(document).ready( function() {
    $( ".filter__slider-element" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        // $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    // $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    //   " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

$(document).ready(function() {
  $( ".product-card__tabs" ).tabs()
});

/*------------ Module for toggling filter items---------*/

var filterToggle = (function () {

  var container = $('.filter__item');

  var init = function () {
    _hideFilterItems();
    _setUpListeners();
    // то, что должно произойти сразу
  };

  var _setUpListeners = function () {
    // прослушка событий...
    $('.filter__more').on('click', _toggleFilter);
  };

  var _hideFilterItems = function () {

    container.each(function() {
      var $this = $(this),
          items = $this.find('.filter__choose-item');

      if (items.size() > 6) {
        items.each(function(i) {
          if (i > 5) items.eq(i).addClass('inactive');
        });
      }
    });
  };

  var _toggleFilter = function (e) {
    e.preventDefault();

    var $this = $(this),
        arrow = $this.find('.icon'),
        items = $this.closest('.filter__content').find('.filter__choose-item');
    // const span = $this.find('.filter__more-text'),
    //       text = span.text();
        
    if ($this.hasClass('active')) {
      if (items.size() > 6) {
        items.each(function(i) {
          if (i > 5) items.eq(i).addClass('inactive');
        });
        $this.removeClass('active');
        // span.html(text);
      }
      
      $this.removeClass('active');
    } else {
      items.each(function(i) {
        items.eq(i).removeClass('inactive');
      });
      $this.addClass('active');
      // span.html('Свернуть');
    }
  };

  return {
    init: init
  };

})();

filterToggle.init();

/*------Module for adding products to cart------*/

var myCart = (function () {

  var productsAmount = 0;

  var init = function () {
    _setUpListeners();
    // то, что должно произойти сразу
  };

  var _setUpListeners = function () {
    // прослушка событий...
    $('.order__button_cart').on('click', _addToCart);
    $('.products__button').on('click', _addToCart);
  };

  var _addToCart = function (e) {
    e.preventDefault();
    var cartText = $('.cart__text');
    productsAmount++;
    cartText.text('В корзине ' + productsAmount + ' добавленных товаров');
  };

  return {
    init: init
  };

})();

myCart.init();