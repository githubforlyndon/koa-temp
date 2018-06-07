/**
 * Created by Administrator on 2017/6/4.
 */
var dataHandlers = [
    function (value, index) {
        return [
            '<a href="openurl://fun=ENTERMARKET&code='+value.code+'&setcode='+value.market+'"><p class="color_sname_hb">'+value.name+'</p>'+'<p class="color_scode_hb">'+value.code+'</p></a>',
            '<p class="gzd">'+value.attention+'</p>',
            '<p class="pj">'+value.rate+'</p>',
            '<p class="mb_price">'+value.targetPrice+'</p>',
        ]
    }

];