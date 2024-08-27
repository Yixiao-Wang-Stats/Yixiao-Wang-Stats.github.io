---
title: "LSTM-GRU Hybrid Network"
collection: projects
type: "Course Project"
permalink: /projects/LSTM-GRU-Hybrid-Network
venue: "University of Science and Technology of China, Mathematics Department"
date: 2024-01-20
location: "Anhui, China"
excerpt: "This is my final project for _Time Series Analysis_ course"
---
## Overview
Predicting PM2.5 is crucial for environmental management. In recent years, with the rapid development of machine learning and deep learning, numerous machine learning methods have been applied to time series forecasting, such as RNN, LSTM[^1], and GRU[^2]. However, different models have their own advantages and disadvantages when handling various data types. Recently, some novel architectures have begun integrating different types of neural networks to leverage their respective strengths. The Inception module, a typical example of this approach, was first proposed by GoogLeNet[^3]. Inspired by the Inception algorithm, this project introduces an LSTM-GRU hybrid network architecture for PM2.5 forecasting, combining RNN and LSTM. This architecture demonstrates significant performance improvement compared to models using only LSTM or GRU. Experiments were conducted based on meteorological data from Chengdu between 2013 and 2015, with the corresponding code and test results provided.

The thesis is available [here](files/LSTMGRU.pdf).
## Inspiration and Methodology
- The inspiration for the Inception module in this project is entirely derived from GoogLeNet[^3].
- The strategy for converting time series data into supervised learning format is based on another method for analyzing PM2.5 forecasting. For more details, refer to [Jason Brownlee's article](https://machinelearningmastery.com/multivariate-time-series-forecasting-lstms-keras/)[^4].
- The neural network framework diagrams in this project were adapted using resources from [dair-ai/ml-visuals](https://github.com/dair-ai/ml-visuals).

## Data and Code Access
The data and code used in this study can be accessed on my GitHub repository: [LSTM-GRU-Hybrid-Network](https://github.com/Yixiao-Wang-Stats/LSTM-GRU-Hybrid-Network).

## Dataset
The dataset used in this project is sourced from the [UCI Machine Learning Repository](https://archive.ics.uci.edu/dataset/394/pm2+5+data+of+five+chinese+cities).

## Project Background
This project is based on my senior year time series analysis course. The original text was in Chinese, and the content has been directly translated by ChatGPT-4. Please excuse any discrepancies that may arise from the translation.

## Model Architecture
![LSTM-GRU Hybrid Network](/images/LSTM-GRU-Hybrid-Network.png)

## Simulation Results
![PM Prediction vs Actual](/images/pm-prediction.png)

<h2> Comparison of Different Models</h2>
<table>
    <thead>
        <tr>
            <th>模型</th>
            <th>RMSE</th>
            <th>MAE</th>
            <th>MAPE (%)</th>
            <th>准确率 (%)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ARIMA</td>
            <td>94.752</td>
            <td>88.515</td>
            <td>256.847</td>
            <td>-</td>
        </tr>
        <tr>
            <td>SVR</td>
            <td>25.292</td>
            <td>22.186</td>
            <td>62.329</td>
            <td>48.24</td>
        </tr>
        <tr>
            <td>DNN</td>
            <td>30.504</td>
            <td>28.693</td>
            <td>79.258</td>
            <td>-</td>
        </tr>
        <tr>
            <td>LSTM</td>
            <td>8.682</td>
            <td>6.151</td>
            <td>14.051</td>
            <td>91.56</td>
        </tr>
        <tr>
            <td>LSTM-GRU 混合模型（建议的）</td>
            <td>8.261</td>
            <td>5.621</td>
            <td>11.224</td>
            <td>94.44</td>
        </tr>
    </tbody>
</table>


## References
[^1]: Graves, Alex. "Long short-term memory." *Supervised Sequence Labelling with Recurrent Neural Networks* (2012): 37-45.
[^2]: Bahdanau, Dzmitry, et al. "Neural Machine Translation by Jointly Learning to Align and Translate." *arXiv preprint arXiv:1409.0473* (2014).
[^3]: Szegedy, Christian, et al. "Going deeper with convolutions." *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition*. 2015.
[^4]: Brownlee, Jason. "Multivariate Time Series Forecasting with LSTMs in Keras." [Machine Learning Mastery](https://machinelearningmastery.com/multivariate-time-series-forecasting-lstms-keras/), October 21, 2020.
