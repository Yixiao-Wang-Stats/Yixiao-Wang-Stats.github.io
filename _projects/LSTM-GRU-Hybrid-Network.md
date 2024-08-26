# LSTM-GRU-Hybrid-Network

## Overview
Predicting PM2.5 is crucial for environmental management. In recent years, with the rapid development of machine learning and deep learning, numerous machine learning methods have been applied to time series forecasting, such as RNN, LSTM[^1], and GRU[^2]. However, different models have their own advantages and disadvantages when handling various data types. Recently, some novel architectures have begun integrating different types of neural networks to leverage their respective strengths. The Inception module, a typical example of this approach, was first proposed by GoogLeNet[^3]. Inspired by the Inception algorithm, this project introduces an LSTM-GRU hybrid network architecture for PM2.5 forecasting, combining RNN and LSTM. This architecture demonstrates significant performance improvement compared to models using only LSTM or GRU. Experiments were conducted based on meteorological data from Chengdu between 2013 and 2015, with the corresponding code and test results provided.

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
![LSTM-GRU Hybrid Network](./images/LSTM-GRU_Hybrid_Network.png)

## Simulation Results
![PM Prediction vs Actual](./images/pm_prediction.png)

## Comparison of Different Models
| Model                             | RMSE   | MAE    | MAPE (\%) | Accuracy (\%) |
|-----------------------------------|--------|--------|-----------|---------------|
| ARIMA                             | 94.752 | 88.515 | 256.847   | -             |
| SVR                               | 25.292 | 22.186 | 62.329    | 48.24         |
| DNN                               | 30.504 | 28.693 | 79.258    | -             |
| LSTM                              | 8.682  | 6.151  | 14.051    | 91.56         |
| LSTM-GRU Hybrid Model (Proposed)  | 8.261  | 5.621  | 11.224    | 94.44         |

## References
[^1]: Graves, Alex. "Long short-term memory." *Supervised Sequence Labelling with Recurrent Neural Networks* (2012): 37-45.
[^2]: Bahdanau, Dzmitry, et al. "Neural Machine Translation by Jointly Learning to Align and Translate." *arXiv preprint arXiv:1409.0473* (2014).
[^3]: Szegedy, Christian, et al. "Going deeper with convolutions." *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition*. 2015.
[^4]: Brownlee, Jason. "Multivariate Time Series Forecasting with LSTMs in Keras." [Machine Learning Mastery](https://machinelearningmastery.com/multivariate-time-series-forecasting-lstms-keras/), October 21, 2020.
