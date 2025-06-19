---
title: "Enhanced Cyclic Coordinate Descent Methods for
Elastic Net Penalized Linear Models"
collection: research
type: "NeurIPS 2025 (Submitted)"
permalink: /research/SADA
venue: "Duke University"
date: 2025-05-15
location: "NC, United States"
excerpt: "A theoretically grounded optimization method that enhances classical coordinate descent by unrolling updates across blocks and applying Taylor-based curvature correction. ECCD achieves up to 13× speedup and maintains sub-10⁻⁵ relative error across logistic and Poisson GLMs, outperforming glmnet, biglasso, and ncvreg on high-dimensional benchmarks."

Sitemap
Follow: GitHub Feed
© 2025 Your Name. Powered by Jekyll & AcademicPages, a fork of Minimal Mistakes.
✦"
tags:
  - Generalized Linear Model
  - Numerical Method
  - Stable Accelerating
---

## Abstract

We present a novel enhanced cyclic coordinate descent (ECCD) framework for1
solving generalized linear models with elastic net constraints that reduces training2
time in comparison to existing state-of-the-art methods. We redesign the CD3
method by performing a Taylor expansion around the current iterate to avoid4
nonlinear operations arising in the gradient computation. By introducing this5
approximation we are able to unroll the vector recurrences occurring in the CD6
method and reformulate the resulting computations into more efficient batched7
computations. We show empirically that the recurrence can be unrolled by a8
tunable integer parameter, s, such that s > 1 yields performance improvements9
without affecting convergence, whereas s = 1 yields the original CD method. A key10
advantage of ECCD is that it avoids the convergence delay and numerical instability11
exhibited by block coordinate descent. Finally, we implement our proposed method12
in C++ using Eigen to accelerate linear algebra computations. Comparison of our13
method against existing state-of-the-art solvers show performance improvements14
up 13× for regularization path variant on benchmark datasets obtained from the15
LIBSVM repository.
