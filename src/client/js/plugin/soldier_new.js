/**
 * Created by Administrator on 2017/6/5.
 */

var dataHandlers = [
    function (value, index) {
        var  nameCode,zdf,choosedZdf,time,price,choosedPrice;
            nameCode='<a href="openurl://fun=ENTERMARKET&code='+value.code+'&setcode='+value.market+'"><p class="stock_name color_sname_hb">'+value.name+'</p><p class="stock_code color_scode_hb">'+value.code+'</p></a>';
        if(value.zdf>0){
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur color_rise">'+value.zdf+'%</p>';
                }else if(value.zdf<0){
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur color_fall">'+value.zdf+'%</p>';
                }else{
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur">'+value.zdf+'%</p>';
                }
        if(value.price-value.choosedPrice>0){
            choosedZdf='<p class="rise_num_select color_rise">'+value.choosedZdf+'%</p>';
                }else if(value.price-value.choosedPrice<0){
            choosedZdf='<p class="rise_num_select color_fall">'+value.choosedZdf+'%</p>';
                }else{
            choosedZdf='<p class="rise_num_select">'+value.choosedZdf+'%</p>';
                }
          time='<input type="hidden" value="'+value.sortTime+'"><p class="time">'+value.date+'</p><p class="hour_time">'+value.time+'</p>';
        if(value.zdf>0){
            price='<input type="hidden" value="'+value.price+'"><p class="rise_num_cur color_rise">'+value.price+'</p>';
                }else if(value.zdf<0){
            price='<input type="hidden" value="'+value.price+'"><p class="rise_num_cur color_fall">'+value.price+'</p>';
                }else{
            price='<input type="hidden" value="'+value.price+'"><p class="rise_num_cur">'+value.price+'</p>';
                }
          choosedPrice='<p class="price_select">'+value.choosedPrice+'</p>';
        return [
            nameCode,
            zdf+choosedZdf,
            time,
            price+choosedPrice
        ]
    },
    function (value, index) {
        var  nameCode,zdf,choosedZdf,time,price,choosedPrice;
            nameCode='<a href="openurl://fun=ENTERMARKET&code='+value.code+'&setcode='+value.market+'"><p class="stock_name color_sname_hb">'+value.name+'</p><p class="stock_code color_sname_hb">'+value.code+'</p></a>';
        if(value.zdf>0){
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur color_rise">'+value.zdf+'%</p>';
        }else if(value.zdf<0){
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur color_fall">'+value.zdf+'%</p>';
        }else{
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur">'+value.zdf+'%</p>';
        }
        if(value.price-value.choosedPrice>0){
            choosedZdf='<p class="rise_num_select color_rise">'+value.choosedZdf+'%</p>';
        }else if(value.price-value.choosedPrice<0){
            choosedZdf='<p class="rise_num_select color_fall">'+value.choosedZdf+'%</p>';
        }else{
            choosedZdf='<p class="rise_num_select">'+value.choosedZdf+'%</p>';
        }
        time='<input type="hidden" value="'+value.sortTime+'"><p class="time">'+value.date+'</p><p class="hour_time">'+value.time+'</p>';
        if(value.zdf>0){
            price='<input type="hidden" value="'+value.price+'"><p class="rise_num_cur color_rise">'+value.price+'</p>';
        }else if(value.zdf<0){
            price='<input type="hidden" value="'+value.price+'"><p class="rise_num_cur color_fall">'+value.price+'</p>';
        }else{
            price='<input type="hidden" value="'+value.price+'"><p class="rise_num_cur">'+value.price+'</p>';
        }
        choosedPrice='<p class="price_select">'+value.choosedPrice+'</p>';
        return [
            nameCode,
            zdf+choosedZdf,
            time,
            price+choosedPrice
        ]
    },
    function (value, index) {
        var  nameCode,zdf,choosedZdf,time,price,choosedPrice;
            nameCode='<a href="openurl://fun=ENTERMARKET&code='+value.code+'&setcode='+value.market+'"><p class="stock_name color_sname_hb">'+value.name+'</p><p class="stock_code color_sname_hb">'+value.code+'</p></a>';
        if(value.zdf>0){
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur color_rise">'+value.zdf+'%</p>';
        }else if(value.zdf<0){
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur color_fall">'+value.zdf+'%</p>';
        }else{
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur">'+value.zdf+'%</p>';
        }
        if(value.price-value.choosedPrice>0){
            choosedZdf='<p class="rise_num_select color_rise">'+value.choosedZdf+'%</p>';
        }else if(value.price-value.choosedPrice<0){
            choosedZdf='<p class="rise_num_select color_fall">'+value.choosedZdf+'%</p>';
        }else{
            choosedZdf='<p class="rise_num_select">'+value.choosedZdf+'%</p>';
        }
        time='<input type="hidden" value="'+value.sortTime+'"><p class="time">'+value.date+'</p><p class="hour_time">'+value.time+'</p>';
        if(value.zdf>0){
            price='<input type="hidden" value="'+value.price+'"><p class="rise_num_cur color_rise">'+value.price+'</p>';
        }else if(value.zdf<0){
            price='<input type="hidden" value="'+value.price+'"><p class="rise_num_cur color_fall">'+value.price+'</p>';
        }else{
            price='<input type="hidden" value="'+value.price+'"><p class="rise_num_cur">'+value.price+'</p>';
        }
        choosedPrice='<p class="price_select">'+value.choosedPrice+'</p>';
        return [
            nameCode,
            zdf+choosedZdf,
            time,
            price+choosedPrice
        ]
    }
];


$(".help_btn").click(function(){
    $('.header-nav').hide();
    var str='<div class="prompt_wrap"> <div class="prompt_text">黄色代表具有涨停潜力（蓄能+冲刺），红色代表已确认信息，即将冲击涨停（蓄能+冲刺+涨停）。</div></div>';
    $("#tip").html(str);
});
$("#tip").click(function(){
    $(this).empty();
    $('.header-nav').show();
});