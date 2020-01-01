$(document).ready(function(){
  var context = "div#A001";

  var A001 = {
    init: function() {
            $('#txtYmd', context).datepicker({
                            showOn: 'button',
                            buttonImageOnly: true,
                            buttonImage: '/css/images/calendar-icon.png',
                            changeMonth: true,
                            changeYear: true,
                            showAnim: 'slideDown',
                            duration: 'fast',
                            dateFormat: 'yy/mm/dd',
                            yearRange: '2010:2030',
                        });
            $('#multiSelect', context).multiselect({
                height: 175,
                minWidth: 305,
                selectedList: 1,
                checkAllText: '全選択',
                uncheckAllText: '全選択解除',
                noneSelectedText: '未選択',
                selectedText: '# 個選択',
                position: {
                        my:'center',
                        at:'center'
                    }
                });
        },
    jqgridLoad: function(){

                        var url = '/A001/gridView'
                        var obj = new Object();

                        common.postJson(url, JSON.stringify(obj),
                            function(data) {
                                alert("検索成功");
                                // grid 削除
                                $.jgrid.gridUnload("#gridReq");
                                $("#gridReq").jqGrid({
                                    data:data,
                                    datatype:"local",
                                    colNames:['チーム','ID','名前','ポジション','背番号','生年月日','国籍'],
                                    colModel:[
                                      {index:'team', name:'team'},
                                      {index:'id', name:'id'},
                                      {index:'name', name:'name'},
                                      {index:'position', name:'position'},
                                      {index:'no', name:'no'},
                                      {index:'birth', name:'birth'},
                                      {index:'nationality', name:'nationality'},
                                    ],
                                    loadui: "disable",
                                    mutiselect:false,
                                    jsonReader:{
                                      repeatitems : false,
                                    },
                                    loadComplete: function(){
                                        $(".ui-jqgrid-sortable", context).unbind("click").bind("click", function(){A001.jqgridLoad()});
                                    },
//                                    onSortCol: function() {return "stop"},
                                    sortname: 'position',
                                    sortorder: "desc",
                                    caption:'Real Madrid',
                                    rowNum:6,
                                    rowList:[6,10,20],
                                    viewrecords:true,
                                    pager:'pg02'
                                });
//                                alert("検索成功");
                            },
                            function(XMLHttpRequest, textStatus, errorThrown) {
                                alert("検索失敗");
                            }
                        );
                      },

  };

  A001.init();

  $("#search", context).bind("click", function(){A001.jqgridLoad()});

//  $("#gridReq tbody").click(function () {
//      alert("header clicked!S");
//                                var table = $("#gridReq").DataTable();
//                                var columnIdx = table.column(this).index();
//                                console.log(columnIdx);
//                              });

  function sortList() {
  alert("1--1");
  return;
                     var sortKey = "";
                     var sortId = $(".ui-jqgrid-labels th[aria-selected='true']", context).attr("id");
                     var direction = $("#"+sortId+" .ui-state-disabled", context).siblings().attr("sort");
                     var name = sortId.substring(8);
                     switch(name) {
                         case "team":
                             sortKey = "1";
                             break;
                         case "id":
                             sortKey = "2";
                             break;
                         case "name":
                            sortKey = "3";
                            break;
                         case "position":
                            sortKey = "4";
                            break;
                         case "no":
                            sortKey = "5";
                            break;
                         case "birth":
                            sortKey = "6";
                            break;
                         case "nationality":
                            sortKey = "7";
                            break;
                         default:
                            sortKey = "";
                     }

                }

  var teamData = [
                {fc:"milan", no:"7", name:"shevchenko", position:"Forward"},
                {fc:"milan", no:"22", name:"kaka", position:"MidFielder"},
                {fc:"milan", no:"10", name:"seedorf", position:"MidFielder"},
                {fc:"milan", no:"11", name:"ibrahimobic", position:"Forward"},
                {fc:"milan", no:"5", name:"nesta", position:"Defender"},
                {fc:"milan", no:"9", name:"inzaghi", position:"Forward"},
             ];

  $("#grid").click(function(){
  $.jgrid.gridUnload("#gridReq");return;
    $("#list").jqGrid({
        data:teamData,
        datatype:"local",
        colNames:['チーム','番号','名前','ポジション'],
        colModel:[
          {name:'fc', index:'fc'},
          {name:'no', index:'no'},
          {name:'name', index:'name'},
          {name:'position', index:'position'},
        ],
        onSortCol: function() {sortList()},
        mutiselect:false,
        caption:'AC Milan',
        rowNum:5,
        rowList:[5,10,20],
        viewrecords:true,
        pager:'pg01'
    });
  });

    $("#save").click(function(){
        var postdata = new Object();
        postdata["id"] = $('#id').val();
        postdata["name"] = $('#name').val();
        postdata["team"] = $('#team').val();
        postdata["position"] = $('#position').val();

        alert("save1");
        $.ajax({
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
          },
          url: "/A001/save",
          type: "POST",
          cache: false,
          dataType: "json",
          data: JSON.stringify(postdata),
          success: function(obj){
            $("#team").value = obj.team;
            alert("receive json: team is " + obj.team);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
            alert("error:" + XMLHttpRequest);
            alert("status:" + textStatus);
            alert("errorThrown:" + errorThrown);
          }
        });
    });
});
(function ohayou() {
  alert("ohayou!");
})();