(function($){
	$.fn.pagination = function(){
	var params = {
			url:"",
			page_size :4,
			page_number:1,
			size:5,
			hander:function(data){
			}
	};
	for(var attr in arguments[0]){
		params[attr]= arguments[0][attr];
	}
	var init_ajax = function(){
		var  page=arguments[0];
		var  obj = arguments[1];
		$.ajax({
			url:params.url,
			type:"post",
			data:{
				"page.page_number":page,
				"page.page_count":params.page_size},
			dataType:"json",
			success:function(data){
				
				$(".sta_number span").text(data["total_page"]);
				var size = data["size"];
				var page_html ="";
				page_html+="<ul><li><a><span class='arrow_left'></span></a></li>";
				var begin = 1;
				var end =begin+params["size"]-1;
				var difference = page-(begin+end)/2;
				if(params["size"]>size){// 3 >  5
					end = size;
				}else{
					if(page>(begin+end)/2){
					if((end+difference)<size){
						end +=difference;	
					}else{
						end = size;
					}
					begin =end-params["size"]+1;
					}else if(page<(begin+end)/2){
						if((begin+difference)>1){
							begin  +=difference;
						}else{
							begin =1;
						}
						end  = begin+params["size"]-1;
					}
				} for(var i=begin;i<end+1;++i){
					page_html +="<li><a>"+i+"</a></li>";
				}
				page_html+="<li><a><span class='arrow_right'></span></a></li><div class='clr'></div></ul>";
				$(".page").empty().append(page_html);
				$(".page li").click(function(){
					if($(this).children().first().text() != null){
						page_number =$(this).children().first().text();
						init_ajax(page_number);
					}
				});
				var obj1=$(".page ul").children().first();
				for(var i=0;i<page-begin+1;++i){
					obj1 =$(obj1).next();
				}
				$(".page_active").removeClass("page_active");
				obj1.addClass("page_active");
				params.hander(data);
			}
			
		});
	}
	
	
	init_ajax(1);
	
}}(jQuery));