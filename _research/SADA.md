---
title: "SADA: Stability-guided Adaptive Diffusion Acceleration"
collection: research
type: "ICML 2025"
permalink: /research/SADA
venue: "Duke University"
date: 2025-01-01
location: "NC, United States"
excerpt: "A training-free diffusion acceleration framework that jointly exploits step-wise and token-wise sparsity via a unified stability criterion. SADA achieves ≥ 1.8× speedup while maintaining LPIPS ≤ 0.10 and FID ≤ 4.5, significantly outperforming prior methods on SD-2, SDXL, Flux, and ControlNet."
tags:
  - Generative Model
  - Numerical Method
  - Stable Accelerating
---

## Abstract

Diffusion models have achieved remarkable success in generative tasks but suffer from high computational costs due to their iterative sampling
process and quadratic-attention costs. Existing
training-free acceleration strategies that reduce
per-step computation cost, while effectively reducing sampling time, demonstrate low faithfulness compared to the original baseline. We hypothesize that this fidelity gap arises because
(a) different prompts correspond to varying denoising trajectory, and (b) such methods do not
consider the underlying ODE formulation and
its numerical solution. In this paper, we propose Stability-guided Adaptive Diffusion Acceleration (SADA), a novel paradigm that unifies step-wise and token-wise sparsity decisions
via a single stability criterion to accelerate sampling of ODE-based generative models (Diffusion
and Flow-matching). For (a), SADA adaptively
allocates sparsity based on the sampling trajectory. For (b), SADA introduces principled approximation schemes that leverage the precise gradient information from the numerical ODE solver.
Comprehensive evaluations on SD-2, SDXL, and
Flux using both EDM and DPM++ solvers reveal consistent ≥ 1.8× speedups with minimal fidelity degradation (LPIPS ≤ 0.10 and FID ≤ 4.5)
compared to unmodified baselines, significantly
outperforming prior methods. Moreover, SADA
adapts seamlessly to other pipelines and modalities: It accelerates ControlNet without any modifications and speeds up MusicLDM by 1.8× with
∼ 0.01 spectrogram LPIPS. Our code is available at: [GitHub Repository](https://github.com/Ting-Justin-Jiang/sadaicml).

