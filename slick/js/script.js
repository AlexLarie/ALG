$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:7,
		slidesToScroll:5,
		autoplay:true,
		speed:1000,
		autoplaySpeed:2000,
		adaptivHeight:false,
		centerMode: true,
		centerPadding: '20px',
		lazyLoad: 'ondemand',
		asNavFor: ".slider2",
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2,
					slidesToScroll:1,
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1,
					dots:false,
				}
			}
		]
	});
	$('.slider2').slick({
		arrows:true,
		dots:false,
		fade:true,
		slidesToShow:1,
		rows:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		adaptivHeight:true,
		lazyLoad: 'ondemand',
		asNavFor:'.slider',
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});


