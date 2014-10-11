jQuery(function()
{
	var body = $('body').attr('class');
	
	if(body == 'index-page' || body == 'blog-page' || body == 'about-page') {
		var img = $('.my-header').find('img');
		$(img).each(function() {
			var src = $(this).attr('src');
			var new_src = src.replace('-black', '-white');
			$(this).attr('src', new_src);
		})

		$('.hamburger').css({'top': '10px', 'position': 'relative'});
	}

	var ctr = 0;
	var img_length = $('.index-page .img-bg').length;
	$('.index-page .img-bg').eq(img_length-1).fadeIn(0);
	setInterval(function() {
		$('.index-page .img-bg').fadeOut();
		$('.index-page .img-bg').eq(ctr).fadeIn();
		ctr += 1;
		if(ctr == img_length){
			ctr = 0;
		}
	}, 5000)

	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if(scroll >= 705){
			// $('.index-page .my-header, .about-page .my-header').css({'position': 'fixed', 'top': '0px'});
			// $('.index-page .mini-nav, .about-page .mini-nav').css({'position': 'fixed', 'top': '80px'});
		}else{
			// $('.index-page .my-header, .about-page .my-header').css({'position': 'absolute', 'top': '705px'});
			// $('.index-page .mini-nav, .about-page .mini-nav').css({'position': 'absolute', 'top': '790px'});
		}
	})

	$('.slide-nav li').on('click', function() {
		$('.slide').fadeOut();
		$('.slide').eq($(this).index()).fadeIn();
	})

	$('.click-animate').on('click', function() {
		$('.side-nav li').css({'list-style':'circle'});
		var lvl = $(this).index() -1;
		var pos = $('.level').eq(lvl).position();

		$('body').animate({scrollTop: pos.top}, 500);
	})

	$('.side-nav ul').mouseenter(function() {
		$(this).animate({'width': '157px'}, 'fast');
		$('.word').animate({'position': 'relative', 'left': '57px'}, 'fast');
	}).mouseleave(function() {
		$(this).animate({'width': '57px'}, 'fast');
		$('.word').animate({'position': 'absolute', 'left': '-157px'}, 'fast');
	})

	$('.add-to-tray').on('click', function() {
		$('body').css({'overflow': 'hidden'});
		$('.global-opacity').show();
		$('.order-modal').show();

		var prodId = $(this).attr('data-prodId');
		
		$('.all-modal').load('/order/' + prodId);
	})

	$('.new-cart').on('click', function() {
		$('body').css({'overflow': 'hidden'});
		$('.global-opacity').show();
		$('.tray-modal').show();
		$('.all-modal').load('/tray');
	})

	$(document).on('click', '.checkout', function()	{
		$('.all-modal').load('checkout-modal.php');
		$('body').css({'overflow': 'hidden'});
		$('.global-opacity').fadeIn();
		$('.checkout-modal').fadeIn();
	})

	$('.contact-click').on('click', function() {
		$('body').css({'overflow': 'hidden'});
		$('.global-opacity').fadeIn();
		$('.contact-modal').fadeIn();
		$('.all-modal').load('/contact');
	})

	$('.btn-inquiry').addClass('choosen');
	$(document).on('click', '.btn-reservation', function() {
		$('.btn-inquiry').removeClass('choosen');
		$(this).addClass('choosen');
		$('.inquiry').fadeOut();
		$('.reservation').delay(300).fadeIn();
	})

	$(document).on('click', '.btn-inquiry', function() {
		$('.btn-reservation').removeClass('choosen');
		$(this).addClass('choosen');
		$('.reservation').fadeOut();
		$('.inquiry').delay(300).fadeIn();
	})

	$(document).on('click', '.modal-cancel, .place-order, .close-x, .addToCart', function() {
		$('body').css({'overflow': 'auto'});
		$('.global-opacity').hide();
		$('.tray-modal').hide();
		$('.order-modal').hide();
		$('.checkout-modal').hide();
		$('.contact-modal').hide();
	})

	$(".hamburger").click(function() {
		if($(".mini-nav").is(":hidden")){
			$(".mini-nav").show("normal");
		}else{
			$(".mini-nav").hide("normal");
		}
	})

	var ani = 0;
	var len = $('.category-menu').find('.click-animate').length * 160;
	$('.category-menu').css({'width': len});

	$('.left-menu').on('click', function() {
		if(ani != 0){
			ani -= 150;
		}
		$('.category-menu').animate({'right': ani}, 250);
	})

	$('.right-menu').on('click', function() {
		if(ani < len - 400){
			ani += 150;
		}
		$('.category-menu').animate({'right': ani}, 250);
	})

	// Add to cart
	$('.addToCart').on('click', function() {
		var id = $(this).data('prodId');
		console.log(id);
	});
})