---
title: "MATH1009.12 Linear Algebra B1"
collection: teaching
type: "Undergraduate course"
permalink: /teaching/2023-Spring-MATH1009-Linear-Algebra-B1
venue: "University of Science and Technology of China, Mathematics Department"
date: 2023-03-01
location: "Anhui, China"
---

This is a description of a teaching experience. You can use markdown like any other post.
<div id="graph_al" style="width: 600px; height: 400px;"></div>

<script type="text/javascript">
    // 确保在页面加载后执行
    window.onload = function() {
        var chartDom = document.getElementById('graph_al');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            tooltip: {},
            backgroundColor: '#00',
            visualMap: {
                show: false,
                dimension: 2,
                min: -1,
                max: 1,
                inRange: {
                    color: [
                        '#313695',
                        '#4575b4',
                        '#74add1',
                        '#abd9e9',
                        '#e0f3f8',
                        '#ffffbf',
                        '#fee090',
                        '#fdae61',
                        '#f46d43',
                        '#d73027',
                        '#a50026'
                    ]
                }
            },
            xAxis3D: {
                type: 'value'
            },
            yAxis3D: {
                type: 'value'
            },
            zAxis3D: {
                type: 'value'
            },
            grid3D: {
                viewControl: {
                    // projection: 'orthographic'
                }
            },
            series: [
                {
                    type: 'surface',
                    wireframe: {
                        // show: false
                    },
                    equation: {
                        x: {
                            step: 0.05
                        },
                        y: {
                            step: 0.05,
                            min: -3
                        },
                        z: function (x, y) {
                            return x + y;
                        }
                    }
                },
                {
                    type: 'surface',
                    wireframe: {
                        // show: false
                    },
                    equation: {
                        x: {
                            step: 0.05
                        },
                        y: {
                            step: 0.05,
                            min: -3,
                        },
                        z: function (x, y) {
                            return -2 * x;
                        }
                    }
                },
                {
                    type: 'surface',
                    wireframe: {
                        // show: false
                    },
                    equation: {
                        x: {
                            step: 0.05
                        },
                        y: {
                            step: 0.05,
                            min: -3
                        },
                        z: function (x, y) {
                            return x - 1;
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    };
</script>

Heading 1
======
hahaha
Heading 2
======

Heading 3
======
