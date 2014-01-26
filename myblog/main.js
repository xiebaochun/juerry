window.onload=function(){
	var arrow=document.getElementsByClassName("arrow");
	var degrees=0;
	var time=setInterval(function(){
        degrees++;
		$(".arrow").css({'-webkit-transform' : 'rotateX('+degrees+'deg)',
         '-moz-transform' : 'rotate('+degrees+'deg)',  
         '-ms-transform' : 'rotate('+degrees+'deg)',  
         '-o-transform' : 'rotate('+degrees+'deg)',  
          'transform' : 'rotate('+degrees+'deg)',  
               'zoom' : 1
	});
	  if(degrees>360){degrees=0;}	
	},5);
}