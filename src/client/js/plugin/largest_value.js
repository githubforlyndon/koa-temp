/**
 * Created by Administrator on 2017/6/5.
 */


var dataHandlers = [
    function (value, index) {
        return [
            '<a href="openurl://fun=ENTERMARKET&code='+value.code+'&setcode='+value.market+'"><p class="color_sname_hb">'+value.name+'</p>'+'<p class="color_scode_hb">'+value.code+'</p></a>',
            '<p class="gzd">'+value.newPrice+'</p>',
            '<p class="pj">'+value.targetPrice+'</p>',
            '<p class="mb_price">'+value.zf+'</p>',
        ]
    }

];
