---
permalink: /
author_profile: true
layout: single
redirect_from: 
  - /about/
  - /about.html
---

<!-- 加载图标样式（如果还没加载） -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<link rel="stylesheet" href="/assets/css/cv.css">
<link rel="stylesheet" href="/assets/css/custom.css">

<!-- 顶部标题与下载按钮对齐 -->
<div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.5rem;">
  <h1 style="margin: 0; font-size: 1.75rem;">Yixiao Wang</h1>
  <a href="/files/CV_YixiaoWang_revised.pdf" style="font-size: 0.95rem; text-decoration: none;">
    <i class="fas fa-file-pdf" aria-hidden="true" style="margin-right: 4px;"></i> Download CV
  </a>
</div>

About Me
======
Originally from China, I skipped grades and was admitted to the [University of Science and Technology of China](https://en.ustc.edu.cn/) to study Mathematics and Statistics at [School of Gifted Young](https://en.scgy.ustc.edu.cn/). I am currently a first-year master student in the [Statistics Department](https://stat.duke.edu/) at [Duke University](https://stat.duke.edu/). My research interests include machine learning theory, functional data analysis, and their applications. At USTC, I particularly enjoyed my time as a teaching assistant for *[Linear Algebra B1](https://yixiao-wang-stats.github.io/teaching/2023-Spring-MATH1009-Linear-Algebra-B1)*, as it provided me with the opportunity to teach students directly, and I was recognized as one of the best TAs at USTC. In my free time, I enjoy creating art, especially origami (click [here](https://yixiao-wang-stats.github.io/hobby_miscellaneous/) to see my artwork).

Research Interests
===============
Statistical and Machine Learning, Deep Learning, Generative Models, with a focus on both theoretical foundations and real-world applications.

Recent Projects
===============

<div class="project-block">
  <img src="/images/sada.png" alt="SADA Project Figure">
  <div class="project-info">
    <p class="project-title">
      <strong>SADA: Stability-guided Adaptive Diffusion Acceleration</strong>
    </p>
    <p>
      Ting Jiang*, <strong>Yixiao Wang*</strong>, Hancheng Ye*, Zishan Shao, Jingwei Sun, Jingyang Zhang, Zekai Chen, Jianyi Zhang, Yiran Chen, Hai Li<br>
      <em>ICML 2025</em>
    </p>
    <p class="project-links">
      <a href="https://arxiv.org/abs/2406.xxxx">Paper</a> |
      <a href="https://github.com/Ting-Justin-Jiang/sada-icml">Code</a> |
      <a href="https://github.com/Ting-Justin-Jiang/sada-icml">Slide</a>
    </p>
    <p>
      A training-free diffusion acceleration framework that jointly exploits step-wise and token-wise sparsity via a unified stability criterion.
      SADA achieves ≥ 1.8× speedup while maintaining LPIPS ≤ 0.10 and FID ≤ 4.5, significantly outperforming prior methods on SD-2, SDXL, Flux, and ControlNet.
    </p>
  </div>
</div>

<div class="project-block">
  <img src="/images/eccd.png" alt="ECCD Project Figure">
  <div class="project-info">
    <p class="project-title">
      <strong>ECCD: Enhanced Cyclic Coordinate Descent for Elastic Net GLMs</strong>
    </p>
    <p>
      <strong>Yixiao Wang*</strong>, Zishan Shao*, Ting Jiang, Aditya Devarakonda<br>
      <em>NeurIPS 2025 (Submitted)</em>
    </p>
    <p class="project-links">
      <a href="https://arxiv.org/abs/2406.xxxx">Paper</a> |
      <a href="https://github.com/Yixiao-Wang/eccd-neurips">Code</a>
      <a href="https://github.com/Ting-Justin-Jiang/sada-icml">Slide</a>
    </p>
    <p>
      A theoretically grounded optimization method that enhances classical coordinate descent by unrolling updates across blocks and applying Taylor-based curvature correction. ECCD achieves up to 13× speedup and maintains sub-10⁻⁵ relative error across logistic and Poisson GLMs, outperforming glmnet, biglasso, and ncvreg on high-dimensional benchmarks.
    </p>
  </div>
</div>


