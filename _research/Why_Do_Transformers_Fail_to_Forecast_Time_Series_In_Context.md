---
title: "Why Do Transformers Fail to Forecast Time Series In-Context?"
collection: research
type: "Conference 2025"
permalink: /research/Why_Do_Transformers_Fail_to_Forecast_Time_Series_In_Context
venue: "Duke University"
date: 2025-08-30
location: "NC, United States"
excerpt: "We provide the first rigorous theoretical analysis of why Transformers underperform on time series forecasting in-context. Under AR(p) data, we prove that linear self-attention cannot beat classical linear predictors in expected MSE, show asymptotic recovery of the optimal linear predictor as context grows, and demonstrate exponential collapse under Chain-of-Thought inference."
tags:
  - Time Series Forecasting
  - In-Context Learning
  - Transformers
  - Theory
---


## Abstract

Time series forecasting (TSF) remains a challenging and largely unsolved problem in machine learning, despite significant recent efforts leveraging Large Language Models (LLMs), which predominantly rely on Transformer architectures.
Empirical evidence consistently shows that even powerful Transformers often fail to outperform much simpler models, e.g., linear models, on TSF tasks; however, a rigorous theoretical understanding of this phenomenon remains limited.
In this paper, we provide a theoretical analysis of Transformers' limitations for TSF through the lens of In-Context Learning (ICL) theory.
Specifically, under AR(\(p\)) data, we establish that: (1) Linear Self-Attention (LSA) models \textit{cannot} achieve lower expected MSE than classical linear models for in-context forecasting; (2) as the context length approaches to infinity, LSA asymptotically recovers the optimal linear predictor; and (3) under Chain-of-Thought (CoT) style inference, predictions collapse to the mean exponentially. 
We empirically validate these findings through carefully designed experiments.
Our theory not only sheds light on several previously underexplored phenomena but also offers practical insights for designing more effective forecasting architectures.
We hope our work encourages the broader research community to revisit the fundamental theoretical limitations of TSF and to critically evaluate the direct application of increasingly sophisticated architectures without deeper scrutiny.
