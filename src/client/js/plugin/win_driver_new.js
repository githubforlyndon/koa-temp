/**
 * Created by Administrator on 2017/6/5.
 */

var dataHandlers = [
    function (value, index) {
        var nameCode=  '<a href="openurl://fun=ENTERMARKET&code='+value.code+'&setcode='+value.market+'"><p class="color_sname_hb">'+value.name+'</p>'+'<p class="color_scode_hb">'+value.code+'</p><p style="display:none">'+value.market+'</p></a>';
        var newPrice,zdf,hugeBuy,bigBuy,midBuy,smallBuy;
        if(value.zdf>0){
            newPrice=  '<div class="lastest_price color_rise">'+value.price+'</div>';
                zdf=    '<div class="change_fu color_rise">'+value.zdf+'%</div>';
        }else if(value.zdf<0){
            newPrice=  '<div class="lastest_price color_fall">'+value.price+'</div>';
            zdf=    '<div class="change_fu color_fall">'+value.zdf+'%</div>';
        }else {
            newPrice=  '<div class="lastest_price">'+value.price+'</div>';
            zdf=    '<div class="change_fu">'+value.zdf+'%</div>';
        }
       if(value.hugeBuy.num>0){
           hugeBuy='<input type="hidden" value="'+value.hugeBuy.init+'"><div class="td_buy color_rise">'+value.hugeBuy.num+value.hugeBuy.unit+'</div>';
               }else if(value.hugeBuy.num<0){
           hugeBuy='<input type="hidden" value="'+value.hugeBuy.init+'"><div class="td_buy color_fall">'+value.hugeBuy.num+value.hugeBuy.unit+'</div>';
                } else{
           hugeBuy='<input type="hidden" value="'+value.hugeBuy.init+'"><div class="td_buy">'+value.hugeBuy.num+value.hugeBuy.unit+'</div>';
                }
        if(value.bigBuy.num>0){
            bigBuy='<input type="hidden" value="'+value.bigBuy.init+'"><div class="td_buy color_rise">'+value.bigBuy.num+value.bigBuy.unit+'</div>';
        }else if(value.bigBuy.num<0){
            bigBuy='<input type="hidden" value="'+value.bigBuy.init+'"><div class="td_buy color_fall">'+value.bigBuy.num+value.bigBuy.unit+'</div>';
        } else{
            bigBuy='<input type="hidden" value="'+value.bigBuy.init+'"><div class="td_buy">'+value.bigBuy.num+value.bigBuy.unit+'</div>';
        }
        if(value.midBuy.num>0){
            midBuy='<input type="hidden" value="'+value.midBuy.init+'"><div class="td_buy color_rise">'+value.midBuy.num+value.midBuy.unit+'</div>';
        }else if(value.midBuy.num<0){
            midBuy='<input type="hidden" value="'+value.midBuy.init+'"><div class="td_buy color_fall">'+value.midBuy.num+value.midBuy.unit+'</div>';
        } else{
            midBuy='<input type="hidden" value="'+value.midBuy.init+'"><div class="td_buy">'+value.midBuy.num+value.midBuy.unit+'</div>';
        }
        if(value.smallBuy.num>0){
            smallBuy='<input type="hidden" value="'+value.smallBuy.init+'"><div class="td_buy color_rise">'+value.smallBuy.num+value.smallBuy.unit+'</div>';
        }else if(value.smallBuy.num<0){
            smallBuy='<input type="hidden" value="'+value.smallBuy.init+'"><div class="td_buy color_fall">'+value.smallBuy.num+value.smallBuy.unit+'</div>';
        } else{
            smallBuy='<input type="hidden" value="'+value.smallBuy.init+'"><div class="td_buy">'+value.smallBuy.num+value.smallBuy.unit+'</div>';
        }

        return [
            nameCode,
            newPrice,
            zdf,
            hugeBuy,
            bigBuy,
            midBuy,
            smallBuy
        ]
    },
    function (value, index) {
        var nameCode=  '<a href="openurl://fun=ENTERMARKET&code='+value.code+'&setcode='+value.market+'"><p class="color_sname_hb">'+value.name+'</p>'+'<p class="color_scode_hb">'+value.code+'</p><p style="display:none">'+value.market+'</p></a>';
        var newPrice,zdf,hugeBuy,bigBuy,midBuy,smallBuy;
        if(value.zdf>0){
            newPrice=  '<div class="lastest_price color_rise">'+value.price+'</div>';
            zdf=    '<div class="change_fu color_rise">'+value.zdf+'%</div>';
        }else if(value.zdf<0){
            newPrice=  '<div class="lastest_price color_fall">'+value.price+'</div>';
            zdf=    '<div class="change_fu color_fall">'+value.zdf+'%</div>';
        }else {
            newPrice=  '<div class="lastest_price">'+value.price+'</div>';
            zdf=    '<div class="change_fu">'+value.zdf+'%</div>';
        }
        if(value.hugeBuy.num>0){
            hugeBuy='<input type="hidden" value="'+value.hugeBuy.init+'"><div class="td_buy color_rise">'+value.hugeBuy.num+value.hugeBuy.unit+'</div>';
        }else if(value.hugeBuy.num<0){
            hugeBuy='<input type="hidden" value="'+value.hugeBuy.init+'"><div class="td_buy color_fall">'+value.hugeBuy.num+value.hugeBuy.unit+'</div>';
        } else{
            hugeBuy='<input type="hidden" value="'+value.hugeBuy.init+'"><div class="td_buy">'+value.hugeBuy.num+value.hugeBuy.unit+'</div>';
        }
        if(value.bigBuy.num>0){
            bigBuy='<input type="hidden" value="'+value.bigBuy.init+'"><div class="td_buy color_rise">'+value.bigBuy.num+value.bigBuy.unit+'</div>';
        }else if(value.bigBuy.num<0){
            bigBuy='<input type="hidden" value="'+value.bigBuy.init+'"><div class="td_buy color_fall">'+value.bigBuy.num+value.bigBuy.unit+'</div>';
        } else{
            bigBuy='<input type="hidden" value="'+value.bigBuy.init+'"><div class="td_buy">'+value.bigBuy.num+value.bigBuy.unit+'</div>';
        }
        if(value.midBuy.num>0){
            midBuy='<input type="hidden" value="'+value.midBuy.init+'"><div class="td_buy color_rise">'+value.midBuy.num+value.midBuy.unit+'</div>';
        }else if(value.midBuy.num<0){
            midBuy='<input type="hidden" value="'+value.midBuy.init+'"><div class="td_buy color_fall">'+value.midBuy.num+value.midBuy.unit+'</div>';
        } else{
            midBuy='<input type="hidden" value="'+value.midBuy.init+'"><div class="td_buy">'+value.midBuy.num+value.midBuy.unit+'</div>';
        }
        if(value.smallBuy.num>0){
            smallBuy='<input type="hidden" value="'+value.smallBuy.init+'"><div class="td_buy color_rise">'+value.smallBuy.num+value.smallBuy.unit+'</div>';
        }else if(value.smallBuy.num<0){
            smallBuy='<input type="hidden" value="'+value.smallBuy.init+'"><div class="td_buy color_fall">'+value.smallBuy.num+value.smallBuy.unit+'</div>';
        } else{
            smallBuy='<input type="hidden" value="'+value.smallBuy.init+'"><div class="td_buy">'+value.smallBuy.num+value.smallBuy.unit+'</div>';
        }

        return [
            nameCode,
            newPrice,
            zdf,
            hugeBuy,
            bigBuy,
            midBuy,
            smallBuy
        ]
    }

];




