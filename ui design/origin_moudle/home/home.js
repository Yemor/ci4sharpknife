var recentdata = new Vue({
    el: '#recentdata',
    data: {
        ths: [
            { text: "数据包编号" },
            { text: "数据内容" },
            { text: "交付时间" },
            { text: "长度(bytes)" }
        ],
        trs: [
        ]
    }
})

var recentip = new Vue({
    el: '#recentip',
    data: {
        ths: [
            { text: "排名" },
            { text: "频繁访问IP" },
            { text: "最后访问时间" },
            { text: "访问次数" }
        ],
        trs: [
            { num: 1, tds: ['A', 'B', 'C'] },
            { num: 2, tds: ['D', 'E', 'F'] },
            { num: 3, tds: ['G', 'H', 'I'] },
            { num: 4, tds: ['J', 'K', 'L'] }
        ]
    }
})



var chart = echarts.init(document.getElementById('netflow_echarts'));

var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 100; i++) {
    xAxisData.push('类目' + i);
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
}

option = {
    title: {
        text: ''
    },
    legend: {
        data: ['bar', 'bar2']
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
            return idx * 10;
        }
    }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
            return idx * 10 + 100;
        }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};

chart.setOption(option);

$(function()
{
    // console.log("test");
    // var request = new XMLHttpRequest();
    // request.open("GET", "http://localhost/sharpknife/view/networkdata");
    // request.setRequestHeader('content-type', 'application/json');
    // request.withCredentials = true;
    // request.send();
    // request.onreadystatechange = function() {
    //     if(request.readyState==4 && request.status==200)
    //     {
    //         console.log(request.response)
    //         // var res = JSON.parse(request.response);
    //         // console.log(res);
    //     }
    //     else
    //     {
    //         alert("aaa");
    //     }
    // }
    console.log(recentdata)
    // axios.get('http://localhost/sharpknife/view/networkdata')
    // .then(function (response) {
    //     console.log(response.data);
    //     console.log(typeof(JSON.stringify(response.data)));
    //     // recentdata.trs=response.data;
    //     // console.log(recentdata.trs);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
    result = $.ajax({
        method: "POST",
        url: "http://localhost/sharpknife/view/networkdata",
        success: function (data) {
            console.log("success");
            console.log(data);
            console.log(recentdata);
            recentdata.trs=data;
        },
        error: function (data) {
            console.log("error");
            alert("初始化请求失败");
        },
        complete:function(data) {
            console.log("complete");
        }
    });
    // console.log("after");
    // console.log(result.responseText);
    // console.log(result);
    // recentdata = new Vue({
    //     el: '#recentdata',
    //     data: {
    //         ths: [
    //             { text: "数据包编号" },
    //             { text: "数据内容" },
    //             { text: "交付时间" },
    //             { text: "长度" }
    //         ],
    //         trs: result
    //     }
    // })
})