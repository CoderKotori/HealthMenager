    $(document).ready(function() {
        $("button[id='btn_day']").click(function() {

            var data = [];
            var myChart = echarts.init(document.getElementById('healthecharts'));
            var option = {
                title: {
                    text: '一天内血压变化',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                legend: {
                    data: ['舒张压', '收缩压'],
                },
                dataZoom: [{
                        show: true,
                        realtime: true,
                        start: 0,
                        end: 50,
                        maxSpan: '0.27',
                        minSpan: '0.27',
                    },
                    {
                        type: 'inside',
                        realtime: true,
                        start: 0,
                        end: 50
                    }
                ],
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { onZero: false },
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    name: '血压(mmHg)',
                    type: 'value',
                    scale: 'ture',
                    boundaryGap: [0, '100%']
                },
                series: [{
                        name: '舒张压',
                        type: 'line',
                        data: [10, 11, 15, 13, 12, 13, 10],
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
                        name: '收缩压',
                        type: 'line',
                        data: [1, -2, 2, 5, 3, 2, 0],
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
                    }
                ]
            }
            myChart.setOption(option);
        })
    });

    $(document).ready(function() {
        $("button[id='btn_week']").click(function() {

            var data = [];
            var myChart = echarts.init(document.getElementById('healthecharts'));
            var option = {
                title: {
                    text: '一周内血压变化',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                legend: {
                    data: ['舒张压', '收缩压'],
                },
                dataZoom: [{
                        show: true,
                        realtime: true,
                        start: 0,
                        end: 50,
                        maxSpan: '1.91',
                        minSpan: '1.91',
                    },
                    {
                        type: 'inside',
                        realtime: true,
                        start: 0,
                        end: 50
                    }
                ],
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { onZero: false },
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    name: '血压(mmHg)',
                    type: 'value',
                    scale: 'ture',
                    boundaryGap: [0, '100%']
                },
                series: [{
                        name: '舒张压',
                        type: 'line',
                        data: [10, 11, 15, 13, 12, 13, 10],
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
                        name: '收缩压',
                        type: 'line',
                        data: [1, -2, 2, 5, 3, 2, 0],
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
                    }
                ]
            }
            myChart.setOption(option);
        })
    });
    $(document).ready(function() {
        $("button[id='btn_month']").click(function() {

            var data = [];
            var myChart = echarts.init(document.getElementById('healthecharts'));
            var option = {
                title: {
                    text: '一月内血压变化',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                legend: {
                    data: ['舒张压', '收缩压'],
                },
                dataZoom: [{
                        show: true,
                        realtime: true,
                        start: 0,
                        end: 50,
                        maxSpan: '8.33',
                        minSpan: '8.33',
                    },
                    {
                        type: 'inside',
                        realtime: true,
                        start: 0,
                        end: 50
                    }
                ],
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { onZero: false },
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    name: '血压(mmHg)',
                    type: 'value',
                    scale: 'ture',
                    boundaryGap: [0, '100%']
                },
                series: [{
                        name: '舒张压',
                        type: 'line',
                        data: [10, 11, 15, 13, 12, 13, 10],
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
                        name: '收缩压',
                        type: 'line',
                        data: [1, -2, 2, 5, 3, 2, 0],
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
                    }
                ]
            }
            myChart.setOption(option);
        })
    });
    $(document).ready(function() {
        $("button[id='btn_year']").click(function() {

            var data = [];
            var myChart = echarts.init(document.getElementById('healthecharts'));
            var option = {
                title: {
                    text: '一年内血压变化',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                legend: {
                    data: ['舒张压', '收缩压'],
                },
                dataZoom: [{
                        show: true,
                        realtime: true,
                        start: 0,
                        end: 50,
                        maxSpan: '100',
                        minSpan: '100',
                    },
                    {
                        type: 'inside',
                        realtime: true,
                        start: 0,
                        end: 50
                    }
                ],
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { onZero: false },
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    name: '血压(mmHg)',
                    type: 'value',
                    scale: 'ture',
                    boundaryGap: [0, '100%']
                },
                series: [{
                        name: '舒张压',
                        type: 'line',
                        data: [10, 11, 15, 13, 12, 13, 10],
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
                        name: '收缩压',
                        type: 'line',
                        data: [1, -2, 2, 5, 3, 2, 0],
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
                    }
                ]
            }
            myChart.setOption(option);
        })
    });