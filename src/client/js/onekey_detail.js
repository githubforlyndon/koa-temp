/**
 * Created by liliang on 2017/5/12.
 */

$(function(){
    //每隔时段启动
    setInterval("sortby()","30000");
    var price=0;
    var zdf=0;
    $("#th_price").click(function(){
        ++price;
        $("#th_zf a").empty();
        $("#th_price a").empty();
        var str1='<img src="'+ctx+'/img/rise_fu.png" class="rise_fu_icon" alt=""><input type="hidden" id="sortby" value="-price">';
        var str2='<img src="'+ctx+'/img/fall_fu.png" class="rise_fu_icon" alt=""><input type="hidden" id="sortby" value="+price">';
        if(price%2==0){
            $("#th_price a").append(str1);
        }else{
            $("#th_price a").append(str2);
        }
        sortby();


    });

    $("#th_zf").click(function(){
        ++zdf;
        $("#th_zf a").empty();
        $("#th_price a").empty();
        var str1='<img src="'+ctx+'/img/rise_fu.png" class="rise_fu_icon" alt=""><input type="hidden" id="sortby" value="-zdf">';
        var str2='<img src="'+ctx+'/img/fall_fu.png" class="rise_fu_icon" alt=""><input type="hidden" id="sortby" value="+zdf">';
        if(zdf%2==0){
            $("#th_zf a").append(str1);
        }else{
            $("#th_zf a").append(str2);
        }
        sortby();
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
            domRefresh: '<div class="dropload-refresh">↑上拉加载更多</div>',
            domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData: '<div class="dropload-noData">暂无数据</div>'
        },
        loadUpFn: function (me) {
            setTimeout(function(){
            sortby();
            me.resetload();
            },1000);
        },
        threshold: 50
    });

})


 var sortby=function(){
     var index = $("#number").val();
     var sortby = $("#sortby").val();

     $.ajax({
         url: ctx+'/onekey/getStockhq/detail?sortby=' + sortby + '&index=' + index,
         type: 'get',
         data: '',
         success: function (result) {
             appendStock(result);
         }
     });

 }


var appendStock=function(result){
        if(result.data.length>0) {
            var html = ejs.render(stock_detail, {data: result.data});
            $("#detail").html(html);
        }
    }

