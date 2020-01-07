$(document).ready(function(){
	//header menu
	$('.lines').click(function(){
		$('.sub-title').removeClass('open').addClass('close')
		$('.sub-menu').hide()
		$('.gnb-wrap').toggleClass('on');
		$('.container').toggleClass('off');
		$('.footer').toggleClass('off');

		if($('.gnb-wrap').hasClass('on')==true){
			$('.gnb-wrap').css('display', 'block')
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
		}
		else{
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
	$('.sub-title').click(function(){
		if($(this).hasClass('open')==false){

			$('.open').removeClass('open').addClass('close')
			$(this).removeClass('close').addClass('open')

			$('.open').next().slideDown();
			$('.close').next().slideUp();			
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
		speed: 500,  
		pause: 4000, 
		controls: false, 
		pager: true, 
		infiniteLoop: true, 
		tickerHover: true, 
		touchEnabled: true, 
		useCSS: false,
	})
})