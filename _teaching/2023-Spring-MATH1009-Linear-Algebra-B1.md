---
title: "MATH1009.12 Linear Algebra B1"
collection: teaching
type: "Teaching assistant"
permalink: /teaching/2023-Spring-MATH1009-Linear-Algebra-B1
venue: "University of Science and Technology of China, Mathematics Department"
date: 2023-03-01
location: "Anhui, China"
excerpt: "This course gives an introduction to the basic knowledge of linear algebra." 
---

The main topics include:
------
- Solving a system of linear equations
- Computation of matrix and determinant
- Theory of vector space and linear transformation
- Euclidian space
- Quadratic form

 You are welcome to explore the homepage of the course [here](http://home.ustc.edu.cn/~wyx_mail/linear_algebra_b1.html/) .
 
<div id="echart" style="width: 600px; height: 400px;"></div>
<script type="text/javascript">
    window.onload = function() {
        var chartDom = document.getElementById('echart');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            tooltip: {},
            backgroundColor: '#00',
            visualMap: {
                show: false,
                dimension: 2,
                min: -2.5,
                max: 2.5,
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
                }
            },
            series: [
                {
                    type: 'surface',
                    wireframe: {
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

