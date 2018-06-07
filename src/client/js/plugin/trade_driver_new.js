/**
 * 对表格中的每一行数据进行处理
 * 数组的下标表示第几个tab
 * value 表格的一行数据
 * index 第几行
 */
var dataHandlers = [
  function (value, index) {
    // 处理股票名称和代码
    var stock = value.nameCode.split('/');
    var nameCode =
      '<a href="openurl://fun=ENTERMARKET&code='+stock[1]+'&setcode='+value.market+'"><p class="color_sname_hb">' + stock[0] + '</p>' +
      '<p class="color_scode_hb">' + stock[1] + '</p></a>';
    // 处理红涨绿跌
    var todayRatio;
    if(Number(value.todayRatio) > 0 ){
      todayRatio = '<span class="rise_num color_rise">' + value.todayRatio + '%</span>';
    }else if(Number(value.todayRatio) < 0 ){
      todayRatio = '<span class="rise_num color_fall">' + value.todayRatio + '%</span>';
    }else{
      todayRatio = '<span class="rise_num">' + value.todayRatio + '%</span>';
    }

    // 处理日期
    var date = value.signalTime.split('/');
    var signalTime =
      '<p>' + date[0] + '</p>' +
      '<span>' + date[1] + '天</span>';
    // 处理信号状态
    var signalStatus = {
      "1": "未确立",
      "2": "已确立",
      "3": "已结束"
    }[value.signalStatus];
    var status;
    if(value.signalStatus==="1"){
      status='<span class="status_text color_wran">'+signalStatus+'</span>';
    }else if(value.signalStatus==="2"){
      status='<span class="status_text color_rise">'+signalStatus+'</span>';
    }else if(value.signalStatus==="3"){
      status='<span class="status_text">'+signalStatus+'</span>';
    }
    return [
      nameCode,
      todayRatio,
      signalTime,
      status,
      value.signalLevel,
    ]
  },
  function (value, index) {
    // 处理股票名称和代码
    var stock = value.nameCode.split('/');
    var nameCode =
      '<a href="openurl://fun=ENTERMARKET&code='+stock[1]+'&setcode='+value.market+'"><p class="color_sname_hb">' + stock[0] + '</p>' +
      '<p class="color_scode_hb">' + stock[1] +'</p></a>';
    //处理信号等级
    var signalLevel = '<span style="display:none">'+Number(value.signalLevel)+'</span>';
    for (var i = 0; i < Number(value.signalLevel); i++) {
      signalLevel += '<i class="fa fa-star-o" aria-hidden="true"></i>'
    }
    // 处理红涨绿跌
    var todayRatio;
    if(Number(value.todayRatio) > 0 ){
      todayRatio = '<span class="rise_num color_rise">' + value.todayRatio + '%</span>';
    }else if(Number(value.todayRatio) < 0 ){
      todayRatio = '<span class="rise_num color_fall">' + value.todayRatio + '%</span>';
    }else{
      todayRatio = '<span class="rise_num">' + value.todayRatio + '%</span>';
    }

    // 处理日期
    var date = value.signalTime.split('/');
    var signalTime =
      '<p>' + date[0] + '</p>' +
      '<span>' + date[1] + '天</span>';
    // 处理信号状态
    var signalStatus = {
      "1": "未确立",
      "2": "已确立",
      "3": "已结束"
    }[value.signalStatus];
    var status;
    if(value.signalStatus==="1"){
      status='<span class="status_text color_wran">'+signalStatus+'</span>';
    }else if(value.signalStatus==="2"){
      status='<span class="status_text color_rise">'+signalStatus+'</span>';
    }else if(value.signalStatus==="3"){
      status='<span class="status_text">'+signalStatus+'</span>';
    }
    return [
      nameCode,
      signalLevel,
      todayRatio,
      signalTime,
      status,
    ]
  },

  function (value, index) {
    // 处理股票名称和代码
    var stock = value.nameCode.split('/');
    var nameCode =
      '<a href="openurl://fun=ENTERMARKET&code='+stock[1]+'&setcode='+value.market+'"><p class="color_sname_hb">' + stock[0] + '</p>' +
      '<p class="color_scode_hb">' + stock[1] +'</p></a>';
    // 处理红涨绿跌
    var todayRatio;
    if(Number(value.todayRatio) > 0 ){
      todayRatio = '<span class="rise_num color_rise">' + value.todayRatio + '%</span>';
    }else if(Number(value.todayRatio) < 0 ){
      todayRatio = '<span class="rise_num color_fall">' + value.todayRatio + '%</span>';
    }else{
      todayRatio = '<span class="rise_num">' + value.todayRatio + '%</span>';
    }

    // 处理日期
    var date = value.signalTime.split('/');
    var signalTime =
      '<p>' + date[0] + '</p>' +
      '<span>' + date[1] + '天</span>';
    // 处理信号状态
    var signal = value.signalStatus.split('/');
    var signalStatus = {
      "1": "未确立",
      "2": "已确立",
      "3": "已结束"
    }[signal[0]];
    var status;
    if(signal[0]==="1"){
      status='<span class="status_text color_wran">'+signalStatus+'</span>'+'<p>前' + signal[1] + '交易日</p>';
    }else if(signal[0]==="2"){
      status='<span class="status_text color_rise">'+signalStatus+'</span>'+'<p>前' + signal[1] + '交易日</p>';
    }else if(signal[0]==="3"){
      status='<span class="status_text">'+signalStatus+'</span>'+'<p>前' + signal[1] + '交易日</p>';
    }
    return [
      nameCode,
      todayRatio,
      signalTime,
      status,
      value.signalLevel,
    ]
  }
]