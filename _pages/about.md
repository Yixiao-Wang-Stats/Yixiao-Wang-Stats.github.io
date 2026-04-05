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


<div class="background-container">
  <!-- 纯正文（无白框） -->
  <div class="overlay-content">
  <div class="watermark"></div>   <!-- 水印层 -->
    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.8rem;">
      <!-- <h1 style="margin: 0; font-size: 1.75rem;">Yixiao Wang</h1> -->
      <h1 style="margin: 0; font-size: 1.75rem;">
        <span style="font-weight: 800;">Yixiao</span>
        <span style="font-weight: 300;">Wang</span>
      </h1>
      <a href="/files/CV_Yixiao_Wang.pdf" style="font-size: 0.95rem; text-decoration: none;">
        <i class="fas fa-file-pdf" aria-hidden="true" style="margin-right: 4px;"></i> Download CV
      </a>
    </div>
    <p>
    Hello! I am a Statistics master’s student in 
    <a href="https://users.cs.duke.edu/~cynthia/home.html">Prof. Cynthia Rudin</a>'s 
    <a href="https://users.cs.duke.edu/~cynthia/lab.html">Interpretable Machine Learning Lab</a> 
    at <a href="https://www.duke.edu/">Duke University</a>. 
    My research focuses on building interpretable, scalable, and efficient machine learning models.  
    I am interested in sparse models and variable importance, motivated by the question: 
    <i>What model should we use, and which features truly matter?</i>
    </p>
    <p>
    I feel fortunate to have previously collaborated with 
    <a href="https://anruzhang.github.io/">Prof. Anru Zhang</a> on deep learning theory, 
    <a href="https://aditya08.github.io/">Prof. Aditya Devarakonda</a> on accelerating solvers for penalized regression, 
    and <a href="https://cei.pratt.duke.edu/people/yiran-chen">Prof. Yiran Chen</a> on accelerating generative models. Prior to Duke, I earned my honors B.S. in Mathematics at <a href="https://en.ustc.edu.cn/">University of Science and Technology of China</a> through the <a href="https://en.scgy.ustc.edu.cn/">School of the Gifted Young</a>. 
    </p>
  </div>
</div>
<h1 style="margin: 0; font-size: 1.75rem; z-index: 2;">
      <span style="font-weight: 300;">News and Highlights</span>
    </h1>
<div class="background-container">
  <div class="overlay-content">
    <div class="watermark2"></div>
    <ul class="news-list">

       <li>
          <i class="fa-solid fa-award" aria-hidden="true"></i>
          <span class="news-date">03/2026</span>
          <span class="news-text">
            Awarded the Centennial & Graduate Professional Fellowship at Duke University (one of the most prestigious and competitive honors for incoming graduate students).
          </span>
        </li>
      
        <li>
          <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
          <span class="news-date">02/2026</span>
          <span class="news-text">
            I am excited to announce that I will join the Department of Computer Science at Duke University as a PhD student in Fall 2026.
          </span>
        </li>
      
        <li>
          <i class="fa-solid fa-star" aria-hidden="true"></i>
          <span class="news-date">01/2026</span>
          <span class="news-text">
            A little personal milestone: First-author papers accepted at all three major AI conferences: ICML, ICLR, and NeurIPS.
          </span>
        </li>

      <li>
        <i class="fa-regular fa-file-lines" aria-hidden="true"></i>
        <span class="news-date">01/2026</span>
        <span class="news-text">One paper accepted in ICLR 2026.</span>
      </li>
      <li>
        <i class="fa-regular fa-file-lines" aria-hidden="true"></i>
        <span class="news-date">09/2025</span>
        <span class="news-text">One paper accepted in AAAI 2026.</span>
      </li>
      <li>
        <i class="fa-regular fa-file-lines" aria-hidden="true"></i>
        <span class="news-date">09/2025</span>
        <span class="news-text">
          Two papers accepted in NeurIPS 2025 and NeurIPS 2025 Workshop (Oral).
        </span>
      </li>
      <li>
        <i class="fa-regular fa-file-lines" aria-hidden="true"></i>
        <span class="news-date">05/2025</span>
        <span class="news-text">One paper accepted in ICML 2025.</span>
      </li>
      <li>
        <i class="fa-solid fa-graduation-cap" aria-hidden="true"></i>
        <span class="news-date">07/2024</span>
        <span class="news-text">
          I earned my honors B.S. in Mathematics at the University of Science and Technology of China.
        </span>
      </li>
      <li>
        <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
        <span class="news-date">03/2024</span>
        <span class="news-text">
          I am excited to announce that I will join the Department of Statistical Science at Duke University as an M.S. student in Fall 2024.
        </span>
      </li>
    </ul>
  </div>  
</div>

<h1 style="margin: 0; font-size: 1.75rem;">
        <span style="font-weight: 300;">Selected Publications</span>
      </h1>

<div class="project-block">
  <img src="/images/sada.png" alt="SADA Project Figure">
  <div class="project-info">
    <p class="project-title">
      <a href="https://yixiao-wang-stats.github.io/research/SADA" style="color: inherit; text-decoration: none;">
        <strong>SADA: Stability-guided Adaptive Diffusion Acceleration</strong>
      </a>
    </p>

    <p class="project-meta">
      <span class="authors" data-show="3" data-toggle="text">
        <span class="author">Ting Jiang*</span>
        <span class="author"><strong>Yixiao Wang*</strong></span>
        <span class="author">Hancheng Ye*</span>
        <span class="author">Zishan Shao</span>
        <span class="author">Jingwei Sun</span>
        <span class="author">Jingyang Zhang</span>
        <span class="author">Zekai Chen</span>
        <span class="author">Jianyi Zhang</span>
        <span class="author">Yiran Chen</span>
        <span class="author">Hai Li</span>
      </span>
      <br>
      <em>ICML 2025</em>
    </p>

    <p class="project-links">
      <a href="https://arxiv.org/pdf/2507.17135">Paper</a>
      <a href="https://github.com/Ting-Justin-Jiang/sada-icml">Code</a>
      <a href="https://yixiao-wang-stats.github.io/SADA/">Page</a>
      <a href="https://yixiao-wang-stats.github.io/files/sada_slides.pdf">Slide</a>
    </p>
  </div>
</div>

<div class="project-block">
  <img src="/images/eccd.png" alt="ECCD Project Figure">
  <div class="project-info">
    <p class="project-title">
      <a href="https://yixiao-wang-stats.github.io/research/ECCD" style="color: inherit; text-decoration: none;">
        <strong>Enhanced Cyclic Coordinate Descent for Elastic Net GLMs</strong>
      </a>
    </p>

    <p class="project-meta">
      <span class="authors" data-show="3" data-toggle="text">
        <span class="author"><strong>Yixiao Wang*</strong></span>
        <span class="author">Zishan Shao*</span>
        <span class="author">Ting Jiang</span>
        <span class="author">Aditya Devarakonda</span>
      </span>
      <br>
      <em>NeurIPS 2025</em>
    </p>

    <p class="project-links">
      <a href="https://arxiv.org/pdf/2510.19999">Paper</a>
      <a href="https://github.com/Yixiao-Wang-Stats/ECCD">Code</a>
    </p>
  </div>
</div>

<div class="project-block">
  <img src="/images/Reasoning_Flow.png" alt="Reasoning Flow Project Figure">
  <div class="project-info">
    <p class="project-title">
      <a href="https://yixiao-wang-stats.github.io/research/reasoning_flow" style="color: inherit; text-decoration: none;">
        <strong>The Geometry of Reasoning: Flowing Logics In Representation Space</strong>
      </a>
    </p>

    <p class="project-meta">
      <span class="authors" data-show="3" data-toggle="text">
        <span class="author">Yufa Zhou*</span>
        <span class="author"><strong>Yixiao Wang*</strong></span>
        <span class="author">Xunjian Yin*</span>
        <span class="author">Shuyan Zhou</span>
        <span class="author">Anru Zhang</span>
      </span>
      <br>
      <em>ICLR 2026</em>
    </p>

    <p class="project-links">
      <a href="https://arxiv.org/abs/2510.09782">Paper</a>
      <a href="https://github.com/MasterZhou1/Reasoning-Flow">Code</a>
      <a href="https://huggingface.co/datasets/MasterZhou/Reasoning-Flow">Database</a>
    </p>
  </div>
</div>

<div class="project-block">
  <img src="/images/lsa_not_for_tsf.png" alt="ICL Time Series Project Figure">
  <div class="project-info">
    <p class="project-title">
      <a href="https://yixiao-wang-stats.github.io/research/Why_Do_Transformers_Fail_to_Forecast_Time_Series_In_Context" style="color: inherit; text-decoration: none;">
        <strong>Why Do Transformers Fail to Forecast Time Series In-Context?</strong>
      </a>
    </p>

    <p class="project-meta">
      <span class="authors" data-show="3" data-toggle="text">
        <span class="author">Yufa Zhou*</span>
        <span class="author"><strong>Yixiao Wang*</strong></span>
        <span class="author">Surbhi Goel</span>
        <span class="author">Anru Zhang</span>
      </span>
      <br>
      <em>NeurIPS 2025 Workshop on WCTD</em> <strong>(oral, 3/68; acceptance rate 40%)</strong>
    </p>

    <p class="project-links">
      <a href="https://arxiv.org/abs/2510.09776">Paper</a>
      <a href="https://github.com/MasterZhou1/ICL-Time-Series">Code</a>
    </p>
  </div>
</div>

<div class="project-block">
  <img src="/images/zeus.png" alt="ZEUS Project Figure">
  <div class="project-info">
    <p class="project-title">
      <a href="https://yixiao-wang-stats.github.io/research/ZEUS" style="color: inherit; text-decoration: none;">
        <strong>ZEUS: Zero-shot Efficient Unified Sparsity for Generative Models</strong>
      </a>
    </p>

    <p class="project-meta">
      <span class="authors" data-show="3" data-toggle="text">
        <span class="author"><strong>Yixiao Wang*</strong></span>
        <span class="author">Ting Jiang*</span>
        <span class="author">Zishan Shao*</span>
        <span class="author">Hancheng Ye</span>
        <span class="author">Jingwei Sun</span>
        <span class="author">Mingyuan Ma</span>
        <span class="author">Jianyi Zhang</span>
        <span class="author">Yiran Chen</span>
        <span class="author">Hai Li</span>
      </span>
    </p>

    <p class="project-links">
      <a href="https://arxiv.org/abs/2604.01552">Paper</a>
      <a href="https://github.com/Ting-Justin-Jiang/ZEUS">Code</a>
      <a href="https://yixiao-wang-stats.github.io/zeus/">Page</a>
    </p>
  </div>
</div>

<div class="project-block">
  <img src="/images/flashsvd.png" alt="FlashSVD Project Figure">
  <div class="project-info">
    <p class="project-title">
      <a href="https://yixiao-wang-stats.github.io/research/FlashSVD" style="color: inherit; text-decoration: none;">
        <strong>FlashSVD: Memory-Efficient Inference with Streaming for Low-Rank Models</strong>
      </a>
    </p>

    <p class="project-meta">
      <span class="authors" data-show="3" data-toggle="text">
        <span class="author">Zishan Shao</span>
        <span class="author"><strong>Yixiao Wang</strong></span>
        <span class="author">Qinsi Wang</span>
        <span class="author">Ting Jiang</span>
        <span class="author">Zhixu Du</span>
        <span class="author">Hancheng Ye</span>
        <span class="author">Danyang Zhuo</span>
        <span class="author">Yiran Chen</span>
        <span class="author">Hai Li</span>
      </span>
      <br>
      <em>AAAI 2026</em>
    </p>

    <p class="project-links">
      <a href="https://arxiv.org/abs/2508.01506">Paper</a>
      <a href="https://github.com/Zishan-Shao/FlashSVD">Code</a>
    </p>
  </div>
</div>

<p style="font-size: 0.9em; color: #555; margin-top: 1em;">
  * Equal contribution
</p>

<!-- <div class="background-container">
  <div class="watermark"></div>  
    纯正文（无白框）
  <div class="overlay-content">
      <h1>Research Interests</h1>
     <p>
  My research interests lie at the intersection of statistical machine learning, deep learning, and generative modeling, 
  with an emphasis on rigorous theoretical foundations, interpretability, and real-world relevance. 
  I am particularly interested in developing principled frameworks that provide formal guarantees on model behavior 
  while remaining applicable to practical machine learning challenges.
</p>
<p>
  In traditional machine learning, I focus on regression models, modern optimal tree-based methods, 
  and the theoretical underpinnings of their integration. 
  I am also interested in understanding and enhancing the statistical properties of these hybrid approaches. 
  In the domain of deep learning, my work explores generative models and attention-based architectures,  
  aiming to uncover their mathematical structure and provide insights into their generalization, expressivity, and reliability. 
  Ultimately, my goal is to advance machine learning methods that are both theoretically sound and impactful in practice.
</p>

  </div>
</div> -->
