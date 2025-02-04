---
title: "Trimmed Mean for Partially Observed Functional Data"
collection: research
type: "Bachelor's Thesis"
permalink: /research/Trimmed-Mean-for-Partially-Observed-Functional-Data
venue: "University of Science and Technology of China, Mathematics Department"
date: 2024-05-01
location: "Anhui, China"
excerpt: "This is my bachelor's thesis. In this thesis, I introduce the concept of the trimmed mean for partially observed functional data, prove the strong consistency of the estimator, and present results from simulation experiments."
tags:
  - Functional Data
  - Trimmed Mean
  - Data Depth
  - Strong Consistency
  - R Language
---
## Thesis
<iframe src="https://yixiao-wang-stats.github.io/files/Trimmed%20Mean%20for%20Partially%20Observed%20Functional%20Data.pdf" width="100%" height="800px" frameborder="0"></iframe>

## Overview

In this bachelor's thesis, titled *Trimmed Mean for Partially Observed Functional Data*, we introduce the trimmed mean for partially observed functional data. We prove the robustness and strong consistency of this method. The work primarily references the following studies:

- **Integrated Depths for Partially Observed Functional Data**  
  *Authors*: A. Elías, R. Jiménez, A. M. Paganoni, L. M. Sangalli  
  *Journal*: Journal of Computational and Graphical Statistics (2022)  
  *DOI*: [10.1080/10618600.2022.2070171](https://doi.org/10.1080/10618600.2022.2070171)

- **Trimmed Means for Functional Data**  
  *Authors*: Ricardo Fraiman, Graciela Muniz  
  *Institutions*: Universidad de San Andrés, Buenos Aires, Argentina & Universidad de la República, Montevideo, Uruguay  
  *Year*: May 2001  
  *AMS 1980 Subject Classifications*: 62G07, 62G05  
  *DOI*: [10.1007/BF02595706](https://doi.org/10.1007/BF02595706)

## Mathematical Definition
<script type="text/javascript" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script>
<div class="mathjax-content">
The \(\alpha\)-trimmed mean for partially observed functions is defined as the mean of the \(n - \lfloor n\alpha \rfloor\) deepest observed values. More precisely, for \(\beta > 0\), the sample version of the trimmed mean is given by:

  <p>
    $$ \hat{\mu}_{n}(t) = \frac{\sum_{i=1}^{n} \mathbf{1}_{[\beta,+\infty)}\left(POIFD_{n}\left(X_{i}\right)\right) \mathbf{1}_{\text{observed}}\left(X_{i}(t)\right) X_{i}(t)}{\sum_{i=1}^{n} \mathbf{1}_{[\beta,+\infty)}\left(POIFD_{n}\left(X_{i}\right)\right) \mathbf{1}_{\text{observed}}\left(X_{i}(t)\right)} $$
  </p>
  <p>where \(\beta\) satisfies:</p>
  <p>
    $$ \frac{1}{n} \sum_{i=1}^{n} \mathbf{1}_{[\beta,+\infty)}\left(POIFD_{n}\left(X_{i}\right)\right) \approx 1-\alpha $$
  </p>

where \(POIFD_{n}(X)\) is the Partially Observed Integrated Functional Depth of \(X\).
</div>

You can also download the original thesis at [Integrated Depths for Partially Observed Functional Data](https://doi.org/10.1080/10618600.2022.2070171) for more details.
## Coding

The code for this thesis is available in the repository: [TMoPOFD GitHub Repository](https://github.com/Yixiao-Wang-Stats/TMoPOFD). This repository contains the simulation code for the **Trimmed Mean for Partially Observed Functional Data (TMoPOFD)**, based on the Partially Observed Integrated Functional Depth (POIFD) method.

The code aims to define the trimmed mean for partially observed functional data using the POIFD method and to establish the strong convergence of this estimator. Additionally, the code utilizes the package from the study *Integrated Depths for Partially Observed Functional Data* to generate POIFD-related work, which is available at [https://github.com/aefdz/fdaPOIFD](https://github.com/aefdz/fdaPOIFD).

## Usage Example

Below is an example of how to simulate data and plot the trimmed mean using this code:

```r
# Simulate the data
SimulateModel <- simulateModel(
  len = 200,
  p = 50,
  q = 0.3,
  M = 10,
  pollution_type = "asymmetric"
)

# Plot the data
plotTrimmedMean(data, alpha = 0.3, type = "FMD")
```
In the plot, the green line represents the trimmed mean, the yellow line represents the mean before trimming, and the blue lines represent the functions that were trimmed.

<img src="/images/trimmedmean.png" style="display: block; margin: auto;" />

