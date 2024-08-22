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
- Solving a system of linear equations
- Computation of matrix and determinant
- Theory of vector space and linear transformation
- Euclidian space
- Quadratic form

 You are welcome to explore the homepage of the course [here](http://home.ustc.edu.cn/~wyx_mail/linear_algebra_b1.html/) .
<div id="echart" style="width: 600px; height: 400px;"></div>
<script type="text/javascript">
    var myChart = echarts.init(document.getElementById('echart'));
    var option = {
 tooltip: {},
  backgroundColor: '#fff',
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
          step: 0.05
        },
        z: function (x, y) {
          if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
            return '-';
          }
          return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
        }
      }
    }
  ]
};

option && myChart.setOption(option);

</script>

