<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Y. Wang - Personal Website</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Favicon -->
  <link rel="icon" href="/images/favicon.ico" type="image/x-icon">

  <!-- Font and Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">

  <!-- Custom Style -->
  <style>
    body {
      font-family: 'Open Sans', sans-serif;
      margin: 0;
      padding: 0 2rem;
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
      background: #fff;
      color: #333;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-top: 2rem;
    }
    header h1 {
      margin: 0;
      font-size: 2rem;
    }
    .cv-link {
      font-size: 0.95rem;
      text-decoration: none;
      color: #333;
    }
    nav {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }
    nav a {
      margin-right: 1rem;
      text-decoration: none;
      color: #0056b3;
    }
    section {
      margin-bottom: 3rem;
    }
    h2 {
      color: #990000;
      margin-top: 2rem;
    }
    .project {
      display: flex;
      gap: 1.5rem;
      margin-top: 1.5rem;
      align-items: flex-start;
    }
    .project img {
      width: 300px;
      border-radius: 6px;
      border: 1px solid #ddd;
    }
    .project-info {
      flex: 1;
    }
    .project-title {
      font-weight: bold;
      font-size: 1.1rem;
      color: #b30000;
    }
    .project-links a {
      margin-right: 1rem;
      color: #0056b3;
      text-decoration: none;
    }
    footer {
      text-align: center;
      font-size: 0.8rem;
      color: #777;
      margin-bottom: 2rem;
    }
  </style>
</head>

<body>

  <!-- Header -->
  <header>
    <h1>Y. Wang</h1>
    <a class="cv-link" href="/files/CV_YixiaoWang_revised.pdf">
      <i class="fas fa-file-pdf"></i> Download CV
    </a>
  </header>

  <!-- Navigation -->
  <nav>
    <a href="#about">About Me</a>
    <a href="#projects">Projects</a>
    <a href="/files/CV_YixiaoWang_revised.pdf">CV</a>
    <a href="mailto:your@email.com">Contact</a>
  </nav>

  <!-- About Section -->
  <section id="about">
    <h2>About Me</h2>
    <p>
      Originally from China, I skipped grades and was admitted to the
      <a href="https://en.ustc.edu.cn/">University of Science and Technology of China</a>
      to study Mathematics and Statistics at
      <a href="https://en.scgy.ustc.edu.cn/">School of Gifted Young</a>. I am currently a first-year master's student in the
      <a href="https://stat.duke.edu/">Statistics Department</a> at Duke University. My research interests include machine learning theory,
      functional data analysis, and their applications. I particularly enjoyed my time as a teaching assistant for
      <a href="https://yixiao-wang-stats.github.io/teaching/2023-Spring-MATH1009-Linear-Algebra-B1"><em>Linear Algebra B1</em></a>,
      where I was recognized as one of the best TAs at USTC. In my free time, I enjoy creating art,
      especially origami (click <a href="https://yixiao-wang-stats.github.io/hobby_miscellaneous/">here</a> to see my artwork).
    </p>
  </section>

  <!-- Projects Section -->
  <section id="projects">
    <h2>Recent Projects</h2>

    <div class="project">
      <img src="/images/livecodebench.png" alt="LiveCodeBench Figure">
      <div class="project-info">
        <div class="project-title">
          LiveCodeBench Pro: How Do Olympiad Medalists Judge LLMs in Competitive Programming?
        </div>
        <p>
          Zihan Zheng*, Zerui Cheng*, Zeyu Shen*, Shang Zhou*, Kaiyuan Liu*, Hansen He*,
          Dongruixuan Li, Stanley Wei, Hangyi Hao, Jianzhu Yao, Peiyao Sheng, Zixuan Wang,
          <strong>Wenhao Chai</strong>, Aleksandra Korolova, Peter Henderson, Sanjeev Arora, Pramod Viswanath,
          Jingbo Shang, <strong>Saining Xie</strong><br>
          <em>arXiv preprint, 2025</em>
        </p>
        <div class="project-links">
          <a href="https://livecodebench.github.io">Project Page</a>
          <a href="https://arxiv.org/abs/2406.xxxx">Paper</a>
          <a href="https://github.com/livecodebench/livecodebench">Code</a>
          <a href="https://livecodebench.github.io/data">Data</a>
        </div>
        <p>
          Models like o3-high, o4-mini, and Gemini 2.5 Pro score 0% on hard competitive programming problems.
        </p>
      </div>
    </div>
  </section>

  <footer>
    © 2025 Y. Wang. All rights reserved.
  </footer>

</body>
</html>
