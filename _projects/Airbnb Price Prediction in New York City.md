---
title: "Airbnb Price Prediction in New York City"
collection: projects
type: "Course Project"
permalink: /projects/airbnb_price_prediction_nyc
venue: "Duke University, CS 671 Theory & Alg Machine Learning"
date: 2024-11-01
location: "Durham, USA"
excerpt: "This project was my Kaggle competition in CS 671 (Machine Learning). The task was to predict Airbnb prices in New York City. I achieved a top 5 ranking out of 137 participants and later developed an improved solution outperforming all original submissions in the competition."
---

## Overview

This is my Final Project Kaggle Competition: a prediction task for the prices of AirBNBs in New York City based off of information about its location, amenities, host, availability, and more. The project is finished by myself, under the instruction of Gilbert, Louis, and Edward Lehrman Distinguished Professor Cynthia Rudin for the Fall 2024 section of CS 671: Theory & Alg Machine Learning

### Original Write-Up

My original write-up for the project can be viewed directly below:

<iframe src="https://yixiao-wang-stats.github.io/files/Kaggle%20Writeup.pdf" width="100%" height="800px" frameborder="0"></iframe>

Alternatively, you can download the write-up as a PDF [here](https://yixiao-wang-stats.github.io/files/Kaggle%20Writeup.pdf).

### Code

You can view my project code [here](#).

---
## Improved Strategy: Stacking

In my improved approach, I implemented a stacking strategy, which combines the predictions from multiple base models to create a meta-model for enhanced performance. This improved strategy significantly outperformed the original competition submissions and provided better generalization for price predictions.

Detailed stacking strategies involve adding the best 30 parameters of XGBoost and LightGBM along with 20 other weak learners. The detailed code is shown below:

```python
import json
from sklearn.ensemble import StackingRegressor
from sklearn.linear_model import LinearRegression, Ridge, Lasso, ElasticNet, BayesianRidge
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import ExtraTreesRegressor, BaggingRegressor, GradientBoostingRegressor
from sklearn.neural_network import MLPRegressor
from sklearn.svm import SVR
from sklearn.neighbors import KNeighborsRegressor
from xgboost import XGBRegressor
import lightgbm as lgb
from sklearn.metrics import mean_squared_error
import numpy as np

# Load the best parameters for LightGBM and XGBoost
with open("/content/drive/My Drive/Colab Notebooks/final_project/best_lgbm_params.json", "r") as f:
    best_params_lgb_list = json.load(f)

with open("/content/drive/My Drive/Colab Notebooks/final_project/best_xgb_params.json", "r") as f:
    best_params_xgb_list = json.load(f)

# Define 20 weak learners
base_learners = [
    ('lr', LinearRegression()),
    ('ridge', Ridge(alpha=1.0)),
    ('lasso', Lasso(alpha=0.1)),
    ('elastic', ElasticNet(alpha=0.1, l1_ratio=0.5)),
    ('bayesian', BayesianRidge()),
    ('dt', DecisionTreeRegressor(max_depth=5)),
    ('extra_trees', ExtraTreesRegressor(n_estimators=100)),
    ('bag_dt', BaggingRegressor(estimator=DecisionTreeRegressor(), n_estimators=10)),
    ('gbr_50', GradientBoostingRegressor(n_estimators=50, learning_rate=0.1)),
    ('mlp_50', MLPRegressor(hidden_layer_sizes=(50,), max_iter=500, random_state=42)),
    ('svr_rbf', SVR(kernel='rbf', C=1.0, epsilon=0.1)),
    ('knn', KNeighborsRegressor(n_neighbors=5)),
    ('gbr_100', GradientBoostingRegressor(n_estimators=100, learning_rate=0.1)),
    ('bag_knn', BaggingRegressor(estimator=KNeighborsRegressor(), n_estimators=10)),
    ('ridge_05', Ridge(alpha=0.5)),
    ('elastic_05', ElasticNet(alpha=0.05, l1_ratio=0.7)),
    ('dt_7', DecisionTreeRegressor(max_depth=7)),
    ('svr_linear', SVR(kernel='linear', C=0.5)),
    ('gbr_200', GradientBoostingRegressor(n_estimators=200, learning_rate=0.05)),
    ('mlp_100', MLPRegressor(hidden_layer_sizes=(100,), max_iter=300, random_state=42))
]

# Add models with the best parameters for LightGBM and XGBoost
for i, params in enumerate(best_params_lgb_list):
    base_learners.append((f'lgbm_{i+1}', lgb.LGBMRegressor(**params)))

for i, params in enumerate(best_params_xgb_list):
    base_learners.append((f'xgb_{i+1}', XGBRegressor(**params)))

# Define the meta learner
meta_learner = LinearRegression()

print("Training base learners...")
trained_learners = []
for i, (name, model) in enumerate(base_learners):
    print(f"Training {i+1}/{len(base_learners)}: {name}")
    model.fit(X_train, y_train)
    trained_learners.append((name, model))
    y_pred = model.predict(X_test)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    print(f"Finished {name}: RMSE = {rmse:.4f}")

# Train the stacking regressor
stacking_model = StackingRegressor(estimators=trained_learners, final_estimator=meta_learner, passthrough=False)

stacking_model.fit(X_train, y_train)

# Predict using the stacking model
y_pred_stacking = stacking_model.predict(X_test)

# Calculate RMSE
rmse_stacking = np.sqrt(mean_squared_error(y_test, y_pred_stacking))
print(f"\nStacking Regressor RMSE: {rmse_stacking:.4f}")

