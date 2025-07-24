# Water Quality Prediction Using IoT

A smart project for real-time monitoring and machine learning-driven analysis of water quality using IoT—a summary based on experience from my resume.

---

## Overview

Water Quality Prediction is an IoT-based system that integrates hardware sensors, cloud database streaming, and machine learning to analyze and forecast water safety. The project is designed for scalable, real-time data monitoring with interactive dashboards and interpretable AI results.

---

## Features

- **Real-Time Monitoring**  
  ESP32 microcontroller and sensor suite (pH, turbidity, temperature, TDS) for instant water parameter collection.

- **Cloud Data Streaming**  
  Live sensor readings streamed to Firebase for seamless storage and accessibility.

- **Machine Learning Analytics**  
  XGBoost model deployed in Python predicts water safety based on incoming data.

- **User Dashboard**  
  React-based web interface for real-time visualization and AI-explained predictions.

- **Scalability & Responsiveness**  
  Modern UI/UX with routing, styled-components, and live graphs.

---

## Tech Stack

| Component       | Technology                      |
|-----------------|--------------------------------|
| Microcontroller | ESP32                          |
| Sensors         | pH, Turbidity, Temperature, TDS |
| Backend         | Firebase, ML (Python/XGBoost)  |
| Frontend        | React                          |
| Data Streaming  | Firebase Realtime Database      |

---

## Architecture

1. **Data Collection**  
   The ESP32 board gathers water quality data using multiple sensors.

2. **Data Transmission**  
   Sensor readings are sent wirelessly to Firebase.

3. **Machine Learning**  
   A Python XGBoost model evaluates new sensor data and predicts water safety.

4. **Visualization**  
   The React dashboard displays metrics, historical trends, and AI-driven explanations.

---

## How to Use

1. **Setup ESP32 and Sensors**  
   Flash firmware and wire up sensors (pH, turbidity, temperature, TDS).

2. **Configure Firebase**  
   Create a Firebase project and set up real-time database integration.

3. **Backend ML Model**  
   Deploy the XGBoost Python model to serve predictions on new sensor data.

4. **Run Frontend Dashboard**  
   Start the React app for live monitoring and visualization.

---

## Key Highlights

- **AI-Powered Explanations**  
  The dashboard offers understandable, AI-based explanations for each water safety score.

- **Integrated IoT and Data Science**  
  Combines embedded systems, cloud streaming, and predictive analytics in one workflow.

- **End-to-End Solution**  
  From physical sensors to actionable data visualizations, every step is automated and user-friendly.

---

## Credits

Developed by **Hrudhay, Santosh and myself** during undergraduate studies, demonstrating skills in IoT, cloud integration, machine learning, and modern web technologies.

Visit my [Portfolio](https://abhiramgobburiportfolio.netlify.app/), [LinkedIn](https://linkedin.com/in/abhiramgobburi) for more information.
