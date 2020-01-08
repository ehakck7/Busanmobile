$(document).ready(function(){
	//header menu
	$('.lines').click(function(){
		$('.sub-title').removeClass('open').addClass('close')
		$('.sub-menu').hide()
		$('.gnb-wrap').toggleClass('on');
		$('.container').toggle();
		$('.footer').toggle();

		if($('.gnb-wrap').hasClass('on')){
			$('.gnb-wrap').show()
			$('.gnb-wrap').animate({
				width: '100%',
				opacity: '1'
			},500)

			$('.line1').css('position', 'absolute')
			$('.line1').css('transform', 'rotate(45deg)')
			$('.line1').animate({top: '7px'},300)

			$('.line2').animate({
				opacity: '0'
			},300)

			$('.line3').css('position', 'absolute')
			$('.line3').css('transform', 'rotate(-45deg)')
			$('.line3').animate({top: '7px'},300)
		}else{
			$('.gnb-wrap').animate({
				display: 'none',
				width: '0',
				opacity: '0'
			},300)

			$('.line1').css('transform', 'rotate(0deg)')
			$('.line1').animate({top: '0'},300)

			$('.line2').animate({
				opacity: '1'
			},300)

			$('.line3').css('transform', 'rotate(0deg)')
			$('.line3').animate({top: '16px'},300)
		}
	})
	
	//sub menu(아코디언 메뉴)
	$('.sub-title .depth1').click(function(e){
		event.preventDefault()
		if(!$(this).hasClass('active')){
			$('.sub-title .depth1').removeClass('active')
			$('.sub-title .depth1').parent().next().slideUp();
			$(this).addClass('active');
			$(this).parent().next().slideDown();
		}
	})

	//search
	$('.search-icon').click(function(){
		$('.search').toggle();
		$('.search-box').val('');
	})

	//program (bxslider)
	$('.program').bxSlider({
		mode: 'horizontal', 
		auto: true,
		pager: true, 
		controls: false, 
		speed: 500,  
		slideMargin: 20,
		infiniteLoop: true, 
	})
})