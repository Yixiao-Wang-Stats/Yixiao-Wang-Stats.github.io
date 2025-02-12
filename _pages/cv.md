---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<link rel="stylesheet" href="/assets/css/cv.css">

<div id="as_pdf">
  <a href="/files/CV_YixiaoWang_revised.pdf">
    <i class="fas fa-file-pdf" aria-hidden="true"></i> Download
  </a>
</div>

<h2>EDUCATION</h2>
<hr>
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div>
    <strong>Duke University</strong><br>
    <span>M.S., Statistical Science</span><br>
    <span><strong>GPA:</strong> 4.00/4.00, <strong>Ranking:</strong> 1/45</span>
  </div>
  <span style="text-align: right;"><em>Aug. 2024 - May. 2026 (Expected)</em></span>
</div>

<br>

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div>
    <strong>University of Science and Technology of China, School of the Gifted Young</strong><br>
    <span>B.S., Mathematics and Applied Mathematics <strong>(Outstanding Graduate)</strong></span><br>
    <em>Major in Probability and Statistics track</em><br>
    <span><strong>GPA (WES Converted):</strong> 3.91/4.00, <strong>Ranking:</strong> 9/92</span>
  </div>
  <span style="text-align: right;"><em>Aug. 2020 - Jun. 2024 </em></span>
</div>


<h2>RESEARCH</h2>
<hr>

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div>
    <h3>Enhanced Cyclic Coordinate Descent | Co-First Author (In Progress)</h3>
    <p><em>Supervised by Assistant Professor Aditya Devarakonda at Wake Forest University.</em></p>
    <ul>
      <li>Proposed and developed a novel Taylor expansion-based approximation method to replace block coordinate descent (BCD) in GLM with elastic net/LASSO.</li>
      <li>Ensured convergence while accelerating computation, achieving a 2–3× speedup over GLMnet in R to date.</li>
      <li>Fully responsible for algorithmic development and theoretical proofs.</li>
      <li>Aiming to complete this work by April 2025.</li>
    </ul>
  </div>
  <span style="text-align: right; white-space: nowrap;"><em>Dec. 2024 - Present</em></span>
</div>

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div>
    <h3>Stability-guided Adaptive Diffusion Acceleration | Co-First Author (ICML 2025 Submission)</h3>
    <p><em>Collaborated with students in Professor Yiran Chen’s group at Duke University.</em></p>
    <ul>
      <li>Developed a stable guided method based on probability flow ODE to accelerate diffusion models by selecting appropriate skipping strategies and providing approximations in the sampling process.</li>
      <li>Ensured stability across various solvers, including DPM-Solver++ and the Euler solver.</li>
      <li>Fully responsible for algorithmic development and theoretical proofs.</li>
    </ul>
  </div>
  <span style="text-align: right; white-space: nowrap;"><em>Mon. 2025</em></span>
</div>

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <div>
    <h3>Trimmed Mean for Partially Observed Functional Data | Bachelor’s Thesis</h3>
    <p><em>Supervised by Associate Professor Lan Xiaohong from USTC.</em></p>
    <ul>
      <li>Defined the trimmed mean for partially observed functional data.</li>
      <li>Proved strong consistency of depth function for partially observed functional data and the trimmed mean.</li>
      <li>Conducted numerical simulations experiment and corresponding R code.</li>
      <li><strong>Thesis:</strong> <a href="https://arxiv.org/abs/2408.13062">arXiv</a> | <strong>Code:</strong> <a href="https://github.com/Yixiao-Wang-Stats/TMoPOFD">GitHub</a>.</li>
    </ul>
  </div>
  <span style="text-align: right; white-space: nowrap;"><em>Feb. 2024 - May. 2024</em></span>
</div>

<h2>RELEVANT COURSEWORK</h2>
<hr>
<div>
  <p><strong>Mathematics & Statistics:</strong> Probability Theory (Original & Advanced, Honors, both A+), Advanced Probability Theory (A+), Mathematical Statistics (Original & Advanced, Honors, both A+), Bayesian Analysis, Time Series Analysis (A), Stochastic Processes (A-), Predictive Inference (A), Statistical Inference (A), Functional Analysis (A-), Real Analysis (A-), Complex Analysis, Mathematical Analysis I (A+), II (A), III (A-), Abstract Algebra (A-), Linear Algebra I (A+), II (A-), Fundamentals of Algebra (A), Differential Equations (A+), Operations Research, Differential Geometry (A), Fundamentals of Geometry (A).</p>
  <p><strong>Computer Science:</strong> Machine Learning Theory & Algorithms (A), Data Structures and Databases (A), C Programming (A+), R Programming (A), Python Programming (A), MATLAB (A-), Linux (A-).</p>
  <p><strong>Physics:</strong> Mechanics (A-), Optics (A), Electromagnetism (A), Atomic Physics (A+), Thermodynamics (A+), Basic Circuit Theory (A), University Physics Laboratory I (A-).</p>
</div>





<h2>PROJECTS</h2>
<hr>
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <h3><strong>Airbnb Price Prediction in New York City</strong> | CS 671 Machine Learning Kaggle Competition</h3>
  <span style="text-align: right;"><em>Nov. 2024</em></span>
</div>
<ul>
  <li>Predicted Airbnb prices using property information and achieved <strong>top 5 out of 137 participants</strong>.</li>
  <li>Developed an advanced stacking solution, outperforming all original submissions.</li>
  <li><strong>Report:</strong> <a href="https://yixiao-wang-stats.github.io/files/Kaggle%20Writeup.pdf">PDF</a> | <strong>Code:</strong> <a href="https://github.com/Yixiao-Wang-Stats/Prices-of-AirBNBs-in-New-York-City">GitHub</a></li>
</ul>

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <h3><strong>Basketball Breakdown: NCAA Shiny App</strong> | STA 532 R Programming Course Project</h3>
  <span style="text-align: right;"><em>Dec. 2024</em></span>
</div>
<ul>
  <li>Designed and developed the <strong>Competition Analysis</strong> and <strong>Schedule</strong> pages.</li>
  <li>Integrated all pages into a cohesive shiny app.</li>
  <li>Enhanced user experience with animations for loading, smoother page navigation, and partial optimizations for the <strong>Prediction</strong> page.</li>
  <li><strong>App:</strong> <a href="https://yixiaowang.shinyapps.io/NCAA_Data_Archive/">NCAA Data Archive</a> | <strong>Report:</strong> <a href="https://yixiao-wang-stats.github.io/files/NCAA_write_up.pdf">PDF</a> | <strong>Code:</strong> <a href="https://github.com/Yixiao-Wang-Stats/Basketball-Breakdown-NCAA-Shiny-App">GitHub</a></li>
</ul>

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <h3><strong>LSTM-GRU Hybrid Network</strong> | Time Series Analysis Course Project</h3>
  <span style="text-align: right;"><em>Feb.–Mar. 2024</em></span>
</div>
<ul>
  <li>Preprocessed PM2.5 pollution data from Chengdu.</li>
  <li>Designed an <strong>LSTM-GRU hybrid network</strong>, inspired by GoogLeNet, achieving a <strong>30% error rate reduction</strong> over standard LSTM models.</li>
  <li><strong>Report:</strong> <a href="https://yixiao-wang-stats.github.io/files/LSTMGRU.pdf">PDF</a> | <strong>Code:</strong> <a href="https://github.com/Yixiao-Wang-Stats/LSTM-GRU-Hybrid-Network">GitHub</a></li>
</ul>

<h2>PRESENTATION</h2>
<hr>
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <h3>Probability Theory Seminar | Presenter</h3>
  <span style="text-align: right;"><em>Apr. 2023</em></span>
</div>
<ul>
  <li>Delivered a special presentation with more than 10 fellow students, focusing on random matrix methods.</li>
  <li>The slides are available <a href="https://yixiao-wang-stats.github.io/files/random-matrix.pdf">here</a>.</li>
</ul>

<h2>TEACHING</h2>
<hr>
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <h3>Linear Algebra B1 | Teaching Assistant</h3>
  <span style="text-align: right;"><em>Mar. 2023–Jul. 2023</em></span>
</div>
<ul>
  <li>Built the <a href="http://home.ustc.edu.cn/~wyx_mail/linear_algebra_b1.html/">course homepage</a> and served as the group leader, managing a course group with over 100 students.</li>
  <li>Organized weekly problem-solving sessions during weekends, spending over 40 hours of personal teaching time, and engaging with more than 200 participants, showcasing strong teaching and communication skills.</li>
  <li>Independently completed solution sets for over 100 post-course exercises and provided analysis and answers to all past exam papers.</li>
</ul>

<h2>INTERNSHIP</h2>
<hr>
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <h3>Thermo Fisher Scientific | Data Cleaning Internship</h3>
  <span style="text-align: right;"><em>Sep. 2023–Dec. 2023</em></span>
</div>
<ul>
  <li>Cleaned and categorized more than 2000 customer data queries and matched them with Excel.</li>
  <li>Wrote Excel functions to add wildcards to the dataset to be cleaned, significantly improving team efficiency.</li>
  <li>Summarized the data cleansing techniques and conducted team training sessions.</li>
</ul>

<h2>AWARDS & HONORS</h2>
<hr>
<ul>
  <li><strong>Outstanding Graduate</strong> from the University of Science and Technology of China (USTC), Class of 2024 (Top 20%).</li>
  <li><strong>China Petroleum Scholarship</strong> (2023): Awarded to only 3 students in the School of the Gifted Young at USTC.</li>
  <li><strong>Excellent Teaching Assistant</strong> (Spring 2023): Ranked in the top 3 at USTC, among over 1000 TAs.</li>
  <li><strong>Silver Prize for Outstanding Student Scholarship</strong> (2022 and 2021): Awarded to the top 15% of students at USTC.</li>
  <li><strong>First Prize</strong> in the Chinese Mathematical Competitions for University Students (2022 and 2021): Ranked in the top 1% of all participants.</li>
  <li><strong>Excellent President</strong> of the School Club (2022).</li>
  <li><strong>QiangWeiFengGongDeYu (Diligence and Moral Conduct) Scholarship</strong> (2022).</li>
  <li><strong>Bronze Prize</strong> for Outstanding Freshmen Scholarship (2020): Awarded to the top 35% of students at USTC.</li>
</ul>


<h2>ACTIVITIES & LEADERSHIP</h2>
<hr>
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <h3>Origami Club, USTC | President</h3>
  <span style="text-align: right;"><em>Jun. 2021–Jun. 2022</em></span>
</div>
<ul>
  <li>Designed and organized the first origami exhibition <a href="https://ef.ustc.edu.cn/info/1061/1284.htm">“Vividly Comes to Life on Paper”</a> in USTC.</li>
  <li>Conducted origami teaching sessions twice per month, sharing the art of origami with over 200 participants.</li>
</ul>

<div style="display: flex; justify-content: space-between; align-items: flex-start;">
  <h3>Hefei Chunyu Parent Support Center for Intellectually Disabled Children | Volunteer</h3>
  <span style="text-align: right;"><em>Sep. 2021–Jan. 2022</em></span>
</div>
<ul>
  <li>Played basketball with autistic children and helped coaches to keep order in class once per week.</li>
</ul>

<h2>ADDITIONAL INFORMATION</h2>
<hr>
<p><strong>Language:</strong></p>
<ul>
  <li>Chinese (Mandarin and Sichuanese dialect), English (TOEFL 103 with 23 in Speaking)</li>
</ul>

<p><strong>Programming & Software Skills:</strong></p>
<ul>
  <li>Python (main), R, LaTeX, C, MATLAB, HTML, CSS, SPSS, Office, etc.</li>
</ul>
<p><strong>Interests:</strong></p>
<ul>
  <li>Origami, click <a href="https://yixiao-wang-stats.github.io/hobby_miscellaneous/">here</a>  to see my  artwork.</li>
</ul>
