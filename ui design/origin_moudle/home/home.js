
var recentip = new Vue({
    el: '#recentip',
    data: {
        ths: [
            {text: "排名"},
            {text: "频繁访问IP"},
            {text: "最后访问时间"},
            {text: "访问次数"}
        ],
        trs: [
            {num:1, tds:['A','B','C']},
            {num:2, tds:['D','E','F']},
            {num:3, tds:['G','H','I']},
            {num:4, tds:['J','K','L']}
        ]
    }
    })

var recentdata = new Vue({
    el: '#recentdata',
    data: {
        ths: [
            {text: "数据包编号"},
            {text: "包含协议"},
            {text: "交付时间"},
            {text: "长度"}
        ],
        trs: [
            {num:1, tds:['A','B','C']},
            {num:2, tds:['D','E','F']},
            {num:3, tds:['G','H','I']},
            {num:4, tds:['J','K','L']}
        ]
    }
    })


var chart = echarts.init(document.getElementById('netflow_echarts'));

var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 100; i++) {
    xAxisData.push('类目' + i);
    data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
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