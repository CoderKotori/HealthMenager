var option = {
    backgroundColor: 'white',
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '90%',
        data: [
            { value: 0.5, name: '高血压' },
            { value: 0.3, name: '糖尿病' },
            { value: 0.2, name: '其他慢性病' },
        ],
        roseType: 'angle',
        label: {
            normal: {
                textStyle: {
                    color: 'rgba(0, 0, 0, 0.8)'
                }
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: '#808080'
                }
            }
        },

    }]
};