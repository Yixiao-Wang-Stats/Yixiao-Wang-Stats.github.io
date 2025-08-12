---
title: "FlashSVD: Memory-Efficient Inference with Streaming for Low-Rank Models"
collection: research
type: "Conference 2025"
permalink: /research/FlashSVD
venue: "Duke University"
date: 2025-08-01
location: "NC, United States"
excerpt: "An end-to-end rank-aware streaming inference framework for SVD-compressed large language models. FlashSVD fuses low-rank projection kernels into attention and feed-forward pipelines, avoiding full-size activation buffers and reducing peak activation memory by up to 70.2% without accuracy loss."
tags:
  - Large Language Model
  - Model Compression
  - Memory Efficiency
---

## Abstract

Singular Value Decomposition (SVD) has recently seen a surge of interest as a simple yet powerful tool
for large language models (LLMs) compression, with a growing number of works demonstrating 20-80%
parameter reductions at minimal accuracy loss. Previous SVD-based approaches have focused primarily on
reducing the memory footprint of model weights, largely overlooking the additional activation memory overhead
incurred during inference when applying truncated factors via standard dense CUDA kernels. Our experiments
demonstrate that this activation overhead, scaling with sequence length and hidden dimension, prevents current
SVD compression techniques from achieving any reduction in peak inference memory, thereby limiting their
viability for real-world, on-device deployments.

We introduce **FlashSVD**, a novel, end-to-end rank-aware streaming inference framework specifically designed
for SVD-compressed large language models. FlashSVD can be seamlessly integrated with any model that
employs SVD-based methods for parameter reduction. By fusing low-rank projection kernels directly into both
the self-attention and feed-forward network (FFN) pipelines, FlashSVD avoid materializing full-size activation
buffers. Instead, small tiles of the truncated factors are loaded into on-chip SRAM, multiplied and reduced on the
fly, and immediately evicted, preserving high GPU occupancy and adding no extra latency. On standard encoder
benchmarks (e.g., BERT-Base), FlashSVD cuts peak activation memory by up to 70.2% and intermediate
transient memory by 75%, all while incur no accuracy loss with upstreaming compression methods, offering a
practical path toward memory-constrained deployment of low-rank LLMs.
