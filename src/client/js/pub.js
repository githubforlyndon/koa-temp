$(function(){
	 //每隔时段启动
	 // setInterval("showStock()","30000");
	 showStock();
	//tab切换
	var index = 0;
	$(".tab_nav div").click(function(){
		index = $(this).index();
		$(".tab_nav div").removeClass("active");
		$(this).addClass("active");
		$(".tabs_ctn .tabs_itme").hide();
		$(".tabs_ctn .tabs_itme").eq(index).show();
	});

	$('#wrapper').dropload({
		scrollArea: window,
		domUp: {
			domClass: 'dropload-up',
			domRefresh: '<div class="dropload-refresh">↓&nbsp;&nbsp;下拉刷新</div>',
			domUpdate: '<table class="dropload-table"><tr><td rowspan="2">↑&nbsp;&nbsp;</td><td>&nbsp;&nbsp;&nbsp;松开立即更新</td></tr><tr><td>最后更新：今天&nbsp;<span id="dropload-time"><span></td></tr></table><script>var nowTime = updateTime();$("#dropload-time").html(nowTime);function updateTime(){var day = new Date();return day.getHours() + ":" + (day.getMinutes() > 9 ? day.getMinutes() : "0" + day.getMinutes());}</script>',
			domLoad: '<div class="top"><p>正在刷新数据中…</p><p>最后更新：今天&nbsp;<span id="dropload-time2"><span></p></div><script>var nowTime = updateTime();$("#dropload-time2").html(nowTime);function updateTime(){var day = new Date();return day.getHours() + ":" + (day.getMinutes() > 9 ? day.getMinutes() : "0" + day.getMinutes());}</script>'
		},
		domDown: {
			domClass: 'dropload-down',
			domRefresh: '<div class="dropload-refresh">↑&nbsp;&nbsp;上拉加载更多</div>',
			domLoad: '<div class="dropload-load"><span class="loading"></span>&nbsp;&nbsp;加载中...</div>',
			domNoData: '<div class="dropload-noData">暂无数据</div>'
		},
		loadUpFn: function (me) {
			setTimeout(function(){
			showStock();
			me.resetload();
			},1000);
		},
		threshold: 50
	});

})


 var showStock=function(){
	 $.ajax({
		 url: ctx+'/onekey/getStockhq/',
		 type: 'get',
		 data: '',
		 success: function (result) {
			 appendStock(result);
		 }
	 });

}

 var appendStock=function(result){
 	if(result.data&&result.data.length>0) {
		for (var i = 1; i <= result.data.length; i++) {
			var json = result.data[i - 1];
			var html = ejs.render(stock, {list: json});
			$("#" + i).html(html);
		}
	}


}


var detail=function(obj){
	location.href=ctx+"/onekey/getStockhq/detail/?id="+obj.id+"&index="+obj.index+"&name="+obj.name+"&m_desc="+obj.m_desc;
}


