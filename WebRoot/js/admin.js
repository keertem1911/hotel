/*! rely on jquery */
$(document).ready(function() {
	$(".navmenu").hide();
	$(".thirdmenu").hide();
	//展开二级菜单
	$(".mainmenu li a").click(function(){
		var navmenu = $(this).parent().children(".navmenu");
		if(navmenu.is(":hidden")){
			navmenu.slideToggle("slow");
		}else{
			navmenu.slideUp("slow");
		}
	});
	//展开三级菜单
	$(".navmenu li a").click(function(){
		var thirdmenu = $(this).parent().children(".thirdmenu");
		if(thirdmenu.is(":hidden")){
			$(this).children("span").removeClass("add_nav").addClass("reduce_nav");
			thirdmenu.slideToggle("slow");
		}else{
			$(this).children("span").removeClass("reduce_nav").addClass("add_nav");
			thirdmenu.slideUp("slow");
		}
	});
	//收起左侧菜单
	$("#left_on").click(function(){
		$("#main_left").hide();
		$("#main_middle").css("left","0");
		$("#main_right").css("width","99.3%");//.animate({width:"99.3%"});
		$("#left_off").show();
		$("#left_on").hide();
	});
	//打开左侧菜单
	$("#left_off").click(function(){
	    $("#main_left").show();
		$("#main_middle").removeAttr("style");
		$("#main_right").removeAttr("style");//.animate({width:"79.3%"});
		$("#left_off").hide();
		$("#left_on").show();	
	});
});
