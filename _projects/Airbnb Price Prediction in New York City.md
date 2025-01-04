---
title: "Airbnb Price Prediction in New York City"
collection: projects
type: "Course Project"
permalink: /projects/airbnb_price_prediction_nyc
venue: "Duke University, CS 671 Theory & Alg Machine Learning"
date: 2024-11-01
location: "Durham, USA"
excerpt: "This project was my Kaggle competition in CS 671 (Machine Learning). The task was to predict Airbnb prices in New York City. I achieved a top 5 ranking out of 137 participants and later developed an improved solution outperforming all original submissions in the competition."
tags:
  - Machine Learning
  - Predictive Modeling
  - Boosting
  - Data Science
pinned: true
---

## Overview

This is my Final Project Kaggle Competition: a prediction task for the prices of AirBNBs in New York City based off of information about its location, amenities, host, availability, and more. The project is finished by myself, under the instruction of Gilbert, Louis, and Edward Lehrman Distinguished Professor Cynthia Rudin for the Fall 2024 section of CS 671: Theory & Alg Machine Learning

### Original Write-Up

My original write-up for the project can be viewed directly below:

<iframe src="https://yixiao-wang-stats.github.io/files/Kaggle%20Writeup.pdf" width="100%" height="800px" frameborder="0"></iframe>

Alternatively, you can download the write-up as a PDF [here](https://yixiao-wang-stats.github.io/files/Kaggle%20Writeup.pdf).

### Code

You can view my project code [here](https://github.com/Yixiao-Wang-Stats/Prices-of-AirBNBs-in-New-York-City).

---
## Improved Strategy: Stacking

In my improved approach, I implemented a stacking strategy, which combines the predictions from multiple base models to create a meta-model for enhanced performance. This improved strategy significantly outperformed the original competition submissions and provided better generalization for price predictions.

Detailed stacking strategies involve adding the best 30 parameters of XGBoost and LightGBM along with 20 other weak learners. The detailed code is shown in [original project](https://github.com/Yixiao-Wang-Stats/Prices-of-AirBNBs-in-New-York-City).
