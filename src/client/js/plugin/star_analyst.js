/**
 * Created by Administrator on 2017/6/5.
 */


var dataHandlers = [
    function (value, index) {
        return [
            '<a href="openurl://fun=ENTERMARKET&code='+value.code+'&setcode='+value.market+'"><p class="stock_name">'+value.name+'</p>'+'<p class="stock_code">'+value.code+'</p><p style="display:none">'+value.market+'</p></a>',
            '<p class="gzd">'+value.starAnalyst+'</p>',
            '<p class="pj">'+value.rate+'</p>',
            '<p class="mb_price">'+value.targetPrice+'</p>',
        ]
    }

];
