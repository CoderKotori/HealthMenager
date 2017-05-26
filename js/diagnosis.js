var option = {
    backgroundColor: 'white',
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '90%',
        data: [
            { value: 0.23, name: '视频广告' },
            { value: 0.27, name: '联盟广告' },
            { value: 0.31, name: '邮件营销' },
            { value: 0.33, name: '直接访问' },
            { value: 0.4, name: '搜索引擎' }

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