function composeSlickCarouselPrimary(s) {
    s.slick({
      infinite: 0,
      autoplay: 0,
      slidesToShow: 5,
      prevArrow: '<div class="slick-prev slick-arrow" style="display: block;"><img src="https://cdn-image.staticsfly.com/i/landingpages/graphics/arrow-orange-left.png"></div>',
      nextArrow: '<div class="slick-next slick-arrow" style="display: block;"><img src="https://cdn-image.staticsfly.com/i/landingpages/graphics/arrow-orange-right.png"></div>',
      responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    })
}

$(document).ready(function() {
    composeSlickCarouselPrimary($(".carousel"))
})
    