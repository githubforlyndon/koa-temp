var dataHandlers = [
    function (value, index) {
        var nameCode=  '<a href="openurl://fun=ENTERMARKET&code='+value.code+'&setcode='+value.market+'"><p class="color_sname_hb">'+value.name+'</p>'+'<p class="color_scode_hb">'+value.code+'</p></a>';
        var zdf,maxZdf,time;
        var signalLevel = '<span style="display:none">'+Number(value.star)+'</span>';
        for (var i = 0; i < Number(value.star); i++) {
            signalLevel += '<i class="fa fa-star-o" aria-hidden="true"></i>'
        }
        if(value.zdf>0){
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur color_rise">'+value.zdf+'%</p>';
                }else if (value.zdf<0){
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur color_fall">'+value.zdf+'%</p>';
                }else {
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur">'+value.zdf+'%</p>';
                }
        if(value.maxZdf>0){
            maxZdf='<p class="rise_num_select color_rise">'+value.maxZdf+'%</p>';
                }else if (value.maxZdf<0){
            maxZdf='<p class="rise_num_select color_fall">'+value.maxZdf+'%</p>';
                }else {
            maxZdf='<p class="rise_num_select">'+value.maxZdf+'%</p>';
                }
           time= '<input type="hidden" value="'+value.sortTime+'"><p class="time">'+value.date+'</p> <p class="hour_time">'+value.time+'</p>';
        return [
            nameCode,
            signalLevel,
            zdf+maxZdf,
            time
        ]
    },
    function (value, index) {
        var nameCode=  '<a href="openurl://fun=ENTERMARKET&code='+value.code+'&setcode='+value.market+'"><p class="color_sname_hb">'+value.name+'</p>'+'<p class="color_scode_hb">'+value.code+'</p></a>';
        var zdf,maxZdf,time;
        var signalLevel = '<span style="display:none">'+Number(value.star)+'</span>';
        for (var i = 0; i < Number(value.star); i++) {
            signalLevel += '<i class="fa fa-star-o" aria-hidden="true"></i>'
        }
        if(value.zdf>0){
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur color_rise">'+value.zdf+'%</p>';
        }else if (value.zdf<0){
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur color_fall">'+value.zdf+'%</p>';
        }else {
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur">'+value.zdf+'%</p>';
        }
        if(value.maxZdf>0){
            maxZdf='<p class="rise_num_select color_rise">'+value.maxZdf+'%</p>';
        }else if (value.maxZdf<0){
            maxZdf='<p class="rise_num_select color_fall">'+value.maxZdf+'%</p>';
        }else {
            maxZdf='<p class="rise_num_select">'+value.maxZdf+'%</p>';
        }
        time= '<input type="hidden" value="'+value.sortTime+'"><p class="time">'+value.date+'</p> <p class="hour_time">'+value.time+'</p>';
        return [
            nameCode,
            signalLevel,
            zdf+maxZdf,
            time
        ]
    },
    function (value, index) {
        var nameCode=  '<a href="openurl://fun=ENTERMARKET&code='+value.code+'&setcode='+value.market+'"><p class="color_sname_hb">'+value.name+'</p>'+'<p class="color_scode_hb">'+value.code+'</p></a>';;
        var zdf,maxZdf,time;
        var signalLevel = '<span style="display:none">'+Number(value.star)+'</span>';
        for (var i = 0; i < Number(value.star); i++) {
            signalLevel += '<i class="fa fa-star-o" aria-hidden="true"></i>'
        }
        if(value.zdf>0){
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur color_rise">'+value.zdf+'%</p>';
        }else if (value.zdf<0){
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur color_fall">'+value.zdf+'%</p>';
        }else {
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur">'+value.zdf+'%</p>';
        }
        if(value.maxZdf>0){
            maxZdf='<p class="rise_num_select color_rise">'+value.maxZdf+'%</p>';
        }else if (value.maxZdf<0){
            maxZdf='<p class="rise_num_select color_fall">'+value.maxZdf+'%</p>';
        }else {
            maxZdf='<p class="rise_num_select">'+value.maxZdf+'%</p>';
        }
        time= '<input type="hidden" value="'+value.sortTime+'"><p class="time">'+value.date+'</p> <p class="hour_time">'+value.time+'</p>';
        return [
            nameCode,
            signalLevel,
            zdf+maxZdf,
            time
        ]
    },
    function (value, index) {
        var nameCode=  '<a href="openurl://fun=ENTERMARKET&code='+value.code+'&setcode='+value.market+'"><p class="color_sname_hb">'+value.name+'</p>'+'<p class="color_scode_hb">'+value.code+'</p></a>';
        var zdf,maxZdf,time;
        var signalLevel = '<span style="display:none">'+Number(value.star)+'</span>';
        for (var i = 0; i < Number(value.star); i++) {
            signalLevel += '<i class="fa fa-star-o" aria-hidden="true"></i>'
        }
        if(value.zdf>0){
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur color_rise">'+value.zdf+'%</p>';
        }else if (value.zdf<0){
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur color_fall">'+value.zdf+'%</p>';
        }else {
            zdf='<input type="hidden" value="'+value.zdf+'"><p class="rise_num_cur">'+value.zdf+'%</p>';
        }
        if(value.maxZdf>0){
            maxZdf='<p class="rise_num_select color_rise">'+value.maxZdf+'%</p>';
        }else if (value.maxZdf<0){
            maxZdf='<p class="rise_num_select color_fall">'+value.maxZdf+'%</p>';
        }else {
            maxZdf='<p class="rise_num_select">'+value.maxZdf+'%</p>';
        }
        time= '<input type="hidden" value="'+value.sortTime+'"><p class="time">'+value.date+'</p><p class="hour_time">'+value.time+'</p>';
        return [
            nameCode,
            signalLevel,
            zdf+maxZdf,
            time
        ]
    }

];
