function week() {
    $("#healthecharts1").show();
    $("#healthecharts2").hide();
    $("#healthecharts3").hide();
    var myChart = echarts.init(document.getElementById('healthecharts1'));
    var option = {
        title: {
            text: '一周内血压变化',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['收缩压', '舒张压']
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value',
            scale: 'ture',
            name: '血压(mmHg)'
        },
        series: [{
                name: '收缩压',
                type: 'line',
                data: [130, 134, 136, 132, 135, 130, 134],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            },
            {
                name: '舒张压',
                type: 'line',
                data: [80, 82, 80, 75, 76, 80, 74],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' },
                    ]
                }
            }
        ]
    }
    myChart.setOption(option);
};

function month() {
    $("#healthecharts1").hide();
    $("#healthecharts2").show();
    $("#healthecharts3").hide();
    var myChart = echarts.init(document.getElementById('healthecharts2'));
    var option = {
        title: {
            text: '一个月内血压变化',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['收缩压', '舒张压']
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value',
            scale: 'ture',
            name: '血压(mmHg)'
        },
        series: [{
                name: '收缩压',
                type: 'line',
                data: [130, 134, 136, 132, 135, 130, 134],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            },
            {
                name: '舒张压',
                type: 'line',
                data: [80, 82, 80, 75, 76, 80, 74],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' },
                    ]
                }
            }
        ]
    }
    myChart.setOption(option);
};

function year() {
    $("#healthecharts1").hide();
    $("#healthecharts2").hide();
    $("#healthecharts3").show();
    var myChart = echarts.init(document.getElementById('healthecharts3'));
    var option = {
        title: {
            text: '一年内血压变化',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['收缩压', '舒张压']
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value',
            scale: 'ture',
            name: '血压(mmHg)'
        },
        series: [{
                name: '收缩压',
                type: 'line',
                data: [130, 134, 136, 132, 135, 130, 134],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            },
            {
                name: '舒张压',
                type: 'line',
                data: [80, 82, 80, 75, 76, 80, 74],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' },
                    ]
                }
            }
        ]
    }
    myChart.setOption(option);
};