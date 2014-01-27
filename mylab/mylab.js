$(document).ready(function(){
	var isMouseOver=false;
	var isTimeOut=false;
	var isFirstMouseOverIn=true;
	console.log("DOM is already!");
	$("#header_nav>ul>li").mouseover(function(){
		var _this=$(this);
        currentIndex=_this.index("#header_nav>ul>li");
        console.log(currentIndex);
        isMouseOver=true;
       
	    if(isMouseOver){
	    	var timeCount=0;
	        if(isFirstMouseOverIn){
	            isFirstMouseOverIn=false;

	            setTimeout(function(){     
		         show(currentIndex);
		        },200);
		            
	            var time =setInterval(function(){
	            timeCount++;
	            if(timeCount>5){
	              timeCount=0;
	              isMouseOver=false;
	              isFirstMouseOverIn=true;
	              time&&clearInterval(time);
	            }
	    	   },40);	
	        } 
	    
	    }
    });
	function show(index) {         
	    $.easing.def = "easeOutQuad";
	    $("#drag_ctr").stop(false, true).animate({ left: index * 100+10 }, 300);
        $("#navtext_"+index).css("color","#E01B6A");
        setTimeout(function(){$("#navtext_"+index).css("color","#fff");},500);
     }
});