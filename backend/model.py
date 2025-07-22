# # import pandas as pd
# # import numpy as np
# # import tensorflow as tf
# # from tensorflow import keras
# # from sklearn.model_selection import train_test_split
# # from sklearn.preprocessing import StandardScaler
# # import joblib  # Correct way to save scaler

# # # Load Dataset
# # df = pd.read_csv("water_potability.csv")
# # print(df.columns)

# # # Select only required features
# # X = df[["ph", "Hardness", "Solids", "Turbidity"]]
# # y = df["Potability"]  # Assuming 'Potability' column is the target (Safe/Unsafe)

# # # Handle missing values (if any)
# # X.fillna(X.mean(), inplace=True)
# # y.fillna(y.mode()[0], inplace=True)

# # # Normalize Data
# # scaler = StandardScaler()
# # X_scaled = scaler.fit_transform(X)

# # # Train/Test Split
# # X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# # # Build Deep Learning Model
# # model = keras.Sequential([
# #     keras.layers.Dense(16, activation="relu", input_shape=(X_train.shape[1],)),
# #     keras.layers.Dense(8, activation="relu"),
# #     keras.layers.Dense(1, activation="sigmoid")  # Sigmoid for binary classification
# # ])

# # model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])

# # # Train Model
# # model.fit(X_train, y_train, epochs=50, validation_data=(X_test, y_test))
# # test_loss, test_accuracy = model.evaluate(X_test, y_test)
# # print(f"✅ Model Test Accuracy: {test_accuracy:.4f}")
# # # Save Model & Scaler
# # model.save("model.h5")  # Save model
# # joblib.dump(scaler, "scaler.pkl")  # Save scaler correctly


# # print("✅ Model training completed and saved!")
# # Install missing dependencies


# # Import Libraries
# import pandas as pd
# import numpy as np
# import shap
# import optuna
# import seaborn as sns
# import lightgbm as lgb
# import tensorflow as tf
# import matplotlib.pyplot as plt
# from tensorflow import keras
# from xgboost import XGBClassifier
# from imblearn.over_sampling import SMOTE
# from sklearn.model_selection import train_test_split
# from sklearn.preprocessing import StandardScaler, PolynomialFeatures
# from sklearn.metrics import accuracy_score, classification_report
# from sklearn.ensemble import StackingClassifier
# from sklearn.linear_model import LogisticRegression

# # Load Dataset
# df = pd.read_csv("water_potability.csv")  # Update with correct path
# print(df.columns)

# # Handle Missing Values
# df.fillna(df.median(), inplace=True)

# # Remove Outliers using Interquartile Range (IQR)
# Q1 = df.quantile(0.25)
# Q3 = df.quantile(0.75)
# IQR = Q3 - Q1
# df = df[~((df < (Q1 - 1.5 * IQR)) | (df > (Q3 + 1.5 * IQR))).any(axis=1)]

# # Feature Importance using SHAP
# X = df.drop(columns=['Potability'])
# y = df['Potability']

# xgb = XGBClassifier()
# xgb.fit(X, y)

# explainer = shap.Explainer(xgb)
# shap_values = explainer(X)
# shap.summary_plot(shap_values, X)  # Visualize important features

# # Select Top Features Based on SHAP
# feature_importance = pd.Series(xgb.feature_importances_, index=X.columns).sort_values(ascending=False)
# top_features = feature_importance[:6].index.tolist()  # Select top 6 features
# print("Selected Features:", top_features)

# X = df[top_features]

# # Create Polynomial Features (Feature Engineering)
# poly = PolynomialFeatures(degree=2, interaction_only=True)
# X_poly = poly.fit_transform(X)

# # Fix Data Imbalance using SMOTE
# smote = SMOTE()
# X_resampled, y_resampled = smote.fit_resample(X_poly, y)

# # Normalize Data (Scaling)
# scaler = StandardScaler()
# X_scaled = scaler.fit_transform(X_resampled)

# # Split Data (80% Train, 20% Test)
# X_train, X_test, y_train, y_test = train_test_split(X_scaled, y_resampled, test_size=0.2, random_state=42)

# # Hyperparameter Tuning using Optuna
# def objective(trial):
#     params = {
#         'n_estimators': trial.suggest_int('n_estimators', 100, 500),
#         'max_depth': trial.suggest_int('max_depth', 3, 10),
#         'learning_rate': trial.suggest_float('learning_rate', 0.01, 0.3),
#         'subsample': trial.suggest_float('subsample', 0.5, 1.0),
#     }
    
#     model = XGBClassifier(**params)
#     model.fit(X_train, y_train)
#     return accuracy_score(y_test, model.predict(X_test))

# study = optuna.create_study(direction='maximize')
# study.optimize(objective, n_trials=20)

# best_params = study.best_params
# print("Best Parameters:", best_params)

# # Build Optimized XGBoost Model
# xgb_model = XGBClassifier(**best_params)
# xgb_model.fit(X_train, y_train)
# xgb_pred = xgb_model.predict(X_test)
# xgb_acc = accuracy_score(y_test, xgb_pred)
# print(f"✅ XGBoost Model Accuracy: {xgb_acc * 100:.2f}%")

# # Build Optimized LightGBM Model
# lgb_model = lgb.LGBMClassifier(n_estimators=300, learning_rate=0.05)
# lgb_model.fit(X_train, y_train)
# lgb_pred = lgb_model.predict(X_test)
# lgb_acc = accuracy_score(y_test, lgb_pred)
# print(f"✅ LightGBM Model Accuracy: {lgb_acc * 100:.2f}%")

# # Build Deep Learning Model
# model = keras.Sequential([
#     keras.layers.Dense(256, activation='relu', input_shape=(X_train.shape[1],)),
#     keras.layers.Dense(128, activation='relu'),
#     keras.layers.Dense(64, activation='relu'),
#     keras.layers.Dense(32, activation='relu'),
#     keras.layers.Dense(1, activation='sigmoid')  # Binary Classification
# ])

# # Compile Model
# model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# # Train Model
# model.fit(X_train, y_train, epochs=50, batch_size=32, validation_data=(X_test, y_test))

# # Evaluate Model
# y_pred = (model.predict(X_test) > 0.5).astype(int)
# dl_acc = accuracy_score(y_test, y_pred)
# print(f"✅ Deep Learning Model Accuracy: {dl_acc * 100:.2f}%")

# # Stacked Ensemble Model (XGBoost + LightGBM + Deep Learning)
# stacking_model = StackingClassifier(
#     estimators=[('xgb', xgb_model), ('lgbm', lgb_model), ('dl', LogisticRegression())],
#     final_estimator=LogisticRegression()
# )

# stacking_model.fit(X_train, y_train)
# stacking_pred = stacking_model.predict(X_test)
# stacking_acc = accuracy_score(y_test, stacking_pred)
# print(f"🎯 Final Stacked Model Accuracy: {stacking_acc * 100:.2f}%")

import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow import keras
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import joblib

# Load Dataset
df = pd.read_csv("water_potability.csv")

# Select Features & Target
X = df[["ph", "Hardness", "Solids", "Turbidity"]]  # Ensure correct feature names
y = df["Potability"]

# Handle Missing Values
X.fillna(X.mean(), inplace=True)
y.fillna(y.mode()[0], inplace=True)

# Normalize Data
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Train/Test Split
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Build Deep Learning Model
model = keras.Sequential([
    keras.layers.Dense(16, activation="relu", input_shape=(X_train.shape[1],)),
    keras.layers.Dense(8, activation="relu"),
    keras.layers.Dense(1, activation="sigmoid")  # Sigmoid for binary classification
])

model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])

# Train Model
model.fit(X_train, y_train, epochs=50, validation_data=(X_test, y_test))
test_loss, test_accuracy = model.evaluate(X_test, y_test)
print(f"✅ Model Test Accuracy: {test_accuracy:.4f}")

# Save Model & Scaler
model.save("model.h5")
joblib.dump(scaler, "scaler.pkl")

print("✅ Model training completed and saved!")
