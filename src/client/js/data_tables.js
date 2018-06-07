var GLOBAL_VAL = {
  page: 1,
  size: 20,
  orderBy:'-zdf',  //后端排序
  order:false,    //前端排序
  th_no:0,        //排序切换参数
  num:0           //强制默认排序初始化参数
}
$(document).ready(function () {
  'use strict';

  var url, table, index = 0,
    hasNav = $('.header-nav a').length !== 1;
  var target=false;
  if (!hasNav) {
    $('.fund-table-wrapper').css('top', '0px');
    $('.header-nav').hide();
  } else {
    $('.header-nav a').click(function (event) {
      event.preventDefault();
      var $tab = $(this);
      url = $tab.attr('data-url');
      index = $tab.attr('data-index');
      $tab.addClass('active').siblings().removeClass('active');
        if(url.indexOf('tradeDriverNew')!=-1){
            GLOBAL_VAL.orderBy='-time';
            if(index==="1"){
              GLOBAL_VAL.order=[3,'desc'];
            }else{
              GLOBAL_VAL.order=[2,'desc'];
            }
        }else if(url.indexOf('snipeNew')!=-1){
          GLOBAL_VAL.order=[2,'desc'];
          GLOBAL_VAL.orderBy='-zdf';
        }else if(url.indexOf('soldierNew')!=-1){
          GLOBAL_VAL.order=[1,'desc'];
          GLOBAL_VAL.orderBy='-zdf';
        }else if(url.indexOf('winDriverNew')!=-1){
          GLOBAL_VAL.order=[2,'desc'];
          GLOBAL_VAL.orderBy='-zdf';
        }
      delete GLOBAL_VAL.thead;
      delete GLOBAL_VAL.table;
      GLOBAL_VAL.th_no=0;
      GLOBAL_VAL.page=1;
      GLOBAL_VAL.num=0;
      //重置滚动到顶部
      document.documentElement.scrollTop = document.body.scrollTop = 0;
      renderTable(url, index);
    });
  }

  url = $('.active').attr('data-url');
    if(url.indexOf('snipeNew')!=-1){
        target=[2,3];
        GLOBAL_VAL.order=[2,'desc'];
    }else if(url.indexOf('soldierNew')!=-1){
        target=[1,2,3];
        GLOBAL_VAL.order=[1,'desc'];
    }else if(url.indexOf('winDriverNew')!=-1){
        target=[3,4,5,6];
        GLOBAL_VAL.order=[2,'desc'];
    }else if(url.indexOf('tradeDriverNew')!=-1){
        GLOBAL_VAL.order=[2,'desc'];
        GLOBAL_VAL.orderBy='-time';
    }
  (function () {
    renderTable(url, 0);
    // setInterval(function () {
    //   renderTable(url, index);
    // }, 30 * 1000);
  })();

  function renderTable(url,index,me,upload) {
    if(upload){
      delete GLOBAL_VAL.table;
    }

    if ( GLOBAL_VAL['page'] ===1||upload) {
      $('.custom-loading').show();
    }

    return $.ajax({
      url:url+"&page="+GLOBAL_VAL.page+"&size="+GLOBAL_VAL.size+"&order="+GLOBAL_VAL.orderBy+"&upload="+upload,
      type: 'GET',
    })
      .fail(function (error) {
        console.error(error);
      })
      .done(function (data) {
          if(!GLOBAL_VAL['thead']){
            drawTableHead(data);
          }
          initTable(data, dataHandlers[index],me,upload);
       });
  }

  function drawTableHead(data) {
    var $tableWrapper = $('#table-div'),
      tableHeaders = '';
    $.each(data.columns, function (i, val) {
      tableHeaders += "<th id="+i+">" + val.title+"</th>";
    });
    $tableWrapper
      .empty()
      .append('<table id="table"><thead><tr>' + tableHeaders + '</tr></thead></table>');
      GLOBAL_VAL.thead=true;


      $('#table-div th').click(function (event) {
        event.preventDefault();
        var th_no = $(this).index();
          //非股票池里面的点击或第一列点击就直接返回
          if(!hasNav || th_no === 0){
              return;
          }
        if(GLOBAL_VAL['th_no']!==th_no){
          GLOBAL_VAL['num'] = 1;
        }
        setOrderto(th_no);
        GLOBAL_VAL['page'] = 1;
        delete GLOBAL_VAL.table;
        delete GLOBAL_VAL.thead;
        renderTable($('.header-nav a.active').attr('data-url'),index);
      });

  }

  function initTable(data, dataHandler, me, upload) {
    if (GLOBAL_VAL['table']) {
      if (data.data.length > 0) {
        GLOBAL_VAL['table'].rows.add(data.data.map(dataHandler)).draw();
      }
      else if (data.data.length == 0 && me){
          // 锁定
        me.lock();
        me.noData(true);
      }
    } else {
      GLOBAL_VAL['table'] = $('#table').DataTable({
        scrollX: true,
        paging: false,
        destroy: true,
        searching: false,
        info: false,
        stateSave: true,
        autoWidth: false,
        ordering: false,
        //order : GLOBAL_VAL.order,
        columnDefs: [
          {orderable: false, targets:0 },
          {orderDataType: "dom-text", targets: target,type: "signed-num"}],
        fixedColumns: {
          leftColumns: 1
        },
        language: { emptyTable: " "},
        data: data.data.map(dataHandler),
      });

       if (data.data.length !== 0) {
          initDropload();
      } else {
         $('tbody').remove();
         $('.no_data').empty();
         $('.no_data').append('暂无数据');
         $('html').css('background-color','#ffffff');
       }

      //在切换的时候强制默认排序
      if(!upload){
        if(GLOBAL_VAL['num']%2 === 0){
          $("#table-div th").attr("class", "");
          $("#" + GLOBAL_VAL.order[0]).attr("class", "sorting_desc");
          GLOBAL_VAL.num++;
        }
        else if(GLOBAL_VAL['num'] % 2 === 1){
          $("#table-div th").attr("class", "");
          $("#"+GLOBAL_VAL.order[0]).attr("class", "sorting_asc");
          GLOBAL_VAL.num++;
        }
      }

    }
    $('.custom-loading').hide();
    if (me) {
      me.resetload();
    }
    }





  function initDropload(data) {
    $('#table_wrapper').dropload({
      scrollArea: window,
      domUp: {
        domClass: 'dropload-up',
        domRefresh: '<div class="dropload-refresh">↓&nbsp;&nbsp;下拉刷新</div>',
        domUpdate: '<table class="dropload-table"><tr><td rowspan="2">↑&nbsp;&nbsp;</td><td>松开立即更新</td></tr><tr><td>最后更新：今天&nbsp;<span id="dropload-time"><span></td></tr></table><script>var nowTime = updateTime();$("#dropload-time").html(nowTime);function updateTime(){var day = new Date();return day.getHours() + ":" + (day.getMinutes() > 9 ? day.getMinutes() : "0" + day.getMinutes());}</script>',
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
         renderTable(url, index,me,true);
         me.resetload();
         me.unlock();
         me.noData(false);
         },1000);
      },
      loadDownFn: function(me) {
        // 第一页且无滚动，则隐藏‘加载中’
        if (GLOBAL_VAL['page'] == 1 && (document.body.scrollTop == 0 && document.documentElement.scrollTop == 0)) {
          me.noData(true);
          me.resetload();
          setTimeout(function() {
            $('div.dropload-load').hide();
          }, 0);
        }
        else {
          GLOBAL_VAL.page++;
          renderTable($('.header-nav a.active').attr('data-url'), index,me);
        }
      },
      threshold: 50
    });
  }

  //切换排序--后端参数
  function changeSort(currentSort,th_no) {
    if(GLOBAL_VAL.th_no===th_no){
      var str=currentSort.substring(0,1);
      if(str==='-'){
        return '';
      }else{
        return '-';
      }
    }else {
      return '';
    }
  }

  //切换排序--前端参数
  function changeSortClient(sort,th_no) {
    if(sort==='-'){
      GLOBAL_VAL.order=[th_no,'desc'];
    }else{
      GLOBAL_VAL.order=[th_no,'asc'];
    }
  }

  //设置后台排序的参数
  function setOrderto(th_no) {
    if(url.indexOf('tradeDriverNew')!=-1){
      if(index==='1'){
        if(th_no===1){
          GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'star';
          changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
          GLOBAL_VAL.th_no=th_no;
        }else if(th_no===2){
          GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'zdf';
          changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
          GLOBAL_VAL.th_no=th_no;
        }else if(th_no===3){
          GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'time';
          changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
          GLOBAL_VAL.th_no=th_no;
        }else if(th_no===4){
          GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'status';
          changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
          GLOBAL_VAL.th_no=th_no;
        }
      }else{
        if(th_no===1){
          GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'zdf';
          changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
          GLOBAL_VAL.th_no=th_no;
        }else if(th_no===2){
          GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'time';
          changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
          GLOBAL_VAL.th_no=th_no;
        }else if(th_no===3){
          GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'status';
          changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
          GLOBAL_VAL.th_no=th_no;
        }
      }
    }else if(url.indexOf('soldierNew')!=-1){
      if(th_no===1){
        GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'zdf';
        changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
        GLOBAL_VAL.th_no=th_no;
      }else if(th_no===2){
        GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'time';
        changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
        GLOBAL_VAL.th_no=th_no;
      }else if(th_no===3){
        GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'price';
        changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
        GLOBAL_VAL.th_no=th_no;
      }
    }else if(url.indexOf('snipeNew')!=-1){
      if(th_no===1){
        GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'star';
        changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
        GLOBAL_VAL.th_no=th_no;
      }else if(th_no===2){
        GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'zdf';
        changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
        GLOBAL_VAL.th_no=th_no;
      }else if(th_no===3){
        GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'time';
        changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
        GLOBAL_VAL.th_no=th_no;
      }
    }else if(url.indexOf('winDriverNew')!=-1){
      if(th_no===1){
        GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'price';
        changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
        GLOBAL_VAL.th_no=th_no;
      }else if(th_no===2){
        GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'zdf';
        changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
        GLOBAL_VAL.th_no=th_no;
      }else if(th_no===3){
        GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'hugeBuy';
        changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
        GLOBAL_VAL.th_no=th_no;
      }else if(th_no===4){
        GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'bigBuy';
        changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
        GLOBAL_VAL.th_no=th_no;
      }else if(th_no===5){
        GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'midBuy';
        changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
        GLOBAL_VAL.th_no=th_no;
      }else if(th_no===6){
        GLOBAL_VAL.orderBy=changeSort(GLOBAL_VAL.orderBy,th_no)+'smallBuy';
        changeSortClient(changeSort(GLOBAL_VAL.orderBy,th_no),th_no);
        GLOBAL_VAL.th_no=th_no;
      }

    }
  }

});

