---
title: "MATH1009.12 Linear Algebra B1"
collection: portfolio
type: "Teaching assistant"
permalink: /teaching/2023-Spring-MATH1009-Linear-Algebra-B1
venue: "University of Science and Technology of China, Mathematics Department"
date: 2023-03-01
description: "The epiviz.gl project is meant to visualize genomic data using webgl and webworkers, in an effort to give a fluid, high-performance user experience. Visualizations are defined via a declarative specification."
imgLink: "/images/profile.png"
location: "Anhui, China"
---



This course gives an introduction to the basic knowledge of linear algebra. 

The main topics include solving a system of linear equations, the computation of matrix and determinant, the theory of vector space and linear transformation, the Euclidian space, and the quadratic form, etc.



<div id="echart" style="width: 600px; height: 400px;"></div>
<script type="text/javascript">
    var myChart = echarts.init(document.getElementById('echart'));
    
    var option = {
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
          min: -3
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
</script>

Heading 1
======
hahaha
Heading 
