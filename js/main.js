window.onload=function(){
  $('.one_fourth_box').each(function(){
				$(this).hover(function(){
					$(this).children('.ofb-img').stop(true).animate({top:'-135px'})
					$(this).children('.ofb-img-bottom').stop(true).animate({top:'25px'})
					$(this).children('.ofb-text').stop(true).animate({top:'160px'})
					$(this).children('.ofb-text-top').stop(true).animate({top:'25px'})
					$(this).children('.ofb-bg').stop(true,true).fadeIn();
				},function(){
					$(this).children('.ofb-img').stop(true).animate({top:'25px'})
					$(this).children('.ofb-img-bottom').stop(true).animate({top:'160px'})
					$(this).children('.ofb-text').stop(true).animate({top:'25px'})
					$(this).children('.ofb-text-top').stop(true).animate({top:'-110px'})
					$(this).children('.ofb-bg').stop(true,true).fadeOut();
				})
			})

};