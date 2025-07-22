# # from flask import Flask, request, jsonify
# # import numpy as np
# # import joblib
# # import tensorflow as tf
# # from sklearn.preprocessing import StandardScaler
# # from flask_cors import CORS

# # app = Flask(__name__)
# # CORS(app)  # Allow frontend to call API

# # # ✅ Load trained ML model and scaler
# # model = tf.keras.models.load_model("model.h5")
# # scaler = joblib.load("scaler.pkl")

# # @app.route('/predict', methods=['POST'])
# # def predict():
# #     try:
# #         data = request.json
# #         print("Received Data:", data)  # Debug log

# #         # ✅ Convert input data to numpy array
# #         features = np.array([[data['pH'], data['hardness'], data['TDS'], data['turbidity']]])

# #         # ✅ Standardize input features
# #         features_scaled = scaler.transform(features)

# #         # ✅ Make prediction
# #         prediction = model.predict(features_scaled)
# #         prediction_class = np.argmax(prediction, axis=1)[0]  # Get class label

# #         # ✅ Convert prediction to readable output
# #         result = {
# #             0: {"status": "Safe", "reason": "Water quality is good", "filtration": "No filtration needed"},
# #             1: {"status": "Unsafe", "reason": "High TDS detected", "filtration": "Reverse Osmosis"},
# #             2: {"status": "Unsafe", "reason": "High Turbidity detected", "filtration": "Sand Filtration"},
# #             3: {"status": "Unsafe", "reason": "Low pH detected", "filtration": "pH Balancing"}
# #         }.get(prediction_class, {"status": "Error", "reason": "Unknown issue", "filtration": "Check manually"})

# #         print("Sending Response:", result)  # Debug log
# #         return jsonify(result)
    
# #     except Exception as e:
# #         print("Error:", str(e))
# #         return jsonify({"status": "Error", "reason": str(e), "filtration": "N/A"}), 500

# # if __name__ == '__main__':
# #     app.run(debug=True)
# # from flask import Flask, request, jsonify
# # import numpy as np
# # import joblib
# # import tensorflow as tf
# # from flask_cors import CORS

# # app = Flask(__name__)
# # CORS(app)  # Allow frontend to call API

# # # Load trained model and scaler
# # model = tf.keras.models.load_model("model.h5")
# # scaler = joblib.load("scaler.pkl")

# # @app.route('/predict', methods=['POST'])
# # def predict():
# #     try:
# #         data = request.json
# #         print("Received Data:", data)  # Debug log

# #         # Convert input data to numpy array
# #         features = np.array([[data['pH'], data['hardness'], data['TDS'], data['turbidity']]])

# #         # Standardize input features
# #         features_scaled = scaler.transform(features)

# #         # Make prediction
# #         prediction = model.predict(features_scaled)
# #         prediction_class = int(prediction[0][0] > 0.5)  # Binary classification

# #         # Convert prediction to readable output
# #         result = {
# #             0: {"status": "Safe", "reason": "Water quality is good", "filtration": "No filtration needed"},
# #             1: {"status": "Unsafe", "reason": "Contaminants detected", "filtration": "Advanced filtration needed"}
# #         }.get(prediction_class, {"status": "Error", "reason": "Unknown issue", "filtration": "Check manually"})

# #         print("Sending Response:", result)  # Debug log
# #         return jsonify(result)

# #     except Exception as e:
# #         print("Error:", str(e))
# #         return jsonify({"status": "Error", "reason": str(e), "filtration": "N/A"}), 500

# # if __name__ == '__main__':
# #     app.run(debug=True)
# from flask import Flask, request, jsonify
# import numpy as np
# import pandas as pd
# import joblib
# import tensorflow as tf
# import google.generativeai as genai
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)  # Allow frontend requests

# # Load trained model and scaler
# model = tf.keras.models.load_model("model.h5")
# scaler = joblib.load("scaler.pkl")

# # Get correct feature names from scaler
# expected_features = scaler.feature_names_in_

# # Configure Gemini AI API Key
# GEMINI_API_KEY = "AIzaSyB3GEaCvdPyWjSe6iOFfvpzT8m5Mg5xANg"  # Replace with actual API key
# genai.configure(api_key=GEMINI_API_KEY)

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         data = request.json
#         print("Received Data:", data)

#         # Create input data with correct feature names
#         input_data = {feature: float(data.get(feature, 0)) for feature in expected_features}

#         # Convert to DataFrame
#         features = pd.DataFrame([input_data])

#         # Standardize input
#         features_scaled = scaler.transform(features)

#         # Make ML prediction
#         prediction = model.predict(features_scaled)
#         prediction_class = int(prediction[0][0] > 0.5)  # Binary classification (0: Safe, 1: Unsafe)

#         # Map prediction to response
#         prediction_info = {
#             0: {"status": "Safe", "reason": "Water quality is good", "filtration": "No filtration needed"},
#             1: {"status": "Unsafe", "reason": "Contaminants detected", "filtration": "Advanced filtration needed"}
#         }.get(prediction_class, {"status": "Error", "reason": "Unknown issue", "filtration": "Check manually"})

#         # Generate AI Explanation
#         prompt = f"""
# Analyze the water quality based on the following parameters:

# 🔹 **pH Level:** {data['pH']}  
# 🔹 **Hardness:** {data['hardness']} mg/L  
# 🔹 **Total Dissolved Solids (TDS):** {data['TDS']} ppm  
# 🔹 **Turbidity:** {data['turbidity']} NTU  

# The ML model has classified the water as **"{prediction_info['status']}"** because:  
# **"{prediction_info['reason']}."**

# ### 📌 Required Response:
# 1️⃣ **Scientific Explanation:**  
#    - Explain the role of each parameter in determining water quality.  
#    - Mention safe limits and how deviations impact health and usability.  

# 2️⃣ **Detailed Analysis Based on Given Parameters:**  
#    - Discuss the effect of the specific values provided.  
#    - Compare them with safe water standards.  

# 3️⃣ **Filtration Techniques for Improvement:**  
#    - Suggest effective filtration methods tailored to the detected issues.  
#    - Explain how each method works.  

# 4️⃣ **Preventive Measures to Maintain Water Quality:**  
#    - List practical steps for ensuring long-term water safety.  
#    - Provide recommendations for regular monitoring and treatment.  

# 5️⃣ **Step-by-Step Water Purification Process:**  
#    - Offer a clear, actionable guide to filtering and purifying the water.  
#    - Ensure the explanation is structured in simple steps.  

# **⚡ Response Format:**  
# - Use bullet points for clarity.  
# - Provide structured, easy-to-read explanations.  
# - Keep the response informative and user-friendly.  
# """

       

#         try:
#             ai_model = genai.GenerativeModel("gemini-1.5-pro")
#             chat_response = ai_model.generate_content(prompt)
#             explanation = chat_response.text if hasattr(chat_response, "text") else "AI explanation not available."
#         except Exception as e:
#             explanation = f"AI explanation failed: {str(e)}"

#         # Return response
#         result = {
#             "status": prediction_info["status"],
#             "reason": prediction_info["reason"],
#             "filtration": prediction_info["filtration"],
#             "AI Explanation": explanation
#         }
#         print("Response:", result)
#         return jsonify(result)

#     except Exception as e:
#         print("Error:", str(e))
#         return jsonify({"status": "Error", "reason": str(e), "filtration": "N/A", "AI Explanation": "N/A"}), 500

# if __name__ == '__main__':
#     app.run(debug=True)
from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import joblib
import tensorflow as tf
import google.generativeai as genai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend requests

# Load trained model and scaler
model = tf.keras.models.load_model("model.h5")
scaler = joblib.load("scaler.pkl")

# Get correct feature names from scaler
expected_features = scaler.feature_names_in_

# Configure Gemini AI API Key
genai.configure(api_key="AIzaSyDjDGhg9-nvyisPAao_0oiNY40XPaL-fjY")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        print("Received Data:", data)

        # Create input data with correct feature names
        input_data = {feature: float(data.get(feature, 0)) for feature in expected_features}
        
        # Convert to DataFrame
        features = pd.DataFrame([input_data])
        
        # Standardize input
        features_scaled = scaler.transform(features)
        
        # Make ML prediction
        prediction = model.predict(features_scaled)
        ml_prediction = int(prediction[0][0] > 0.5)  # Binary classification (0: Safe, 1: Unsafe)
        
        # Map ML prediction to response
        ml_result = "Safe" if ml_prediction == 0 else "Unsafe"
        
        # Generate AI Prediction
        ai_prompt = f"""


🔹 **pH Level:** {data['pH']}  
🔹 **Hardness:** {data['hardness']} mg/L  
🔹 **Total Dissolved Solids (TDS):** {data['TDS']} ppm  
🔹 **Turbidity:** {data['turbidity']} NTU  

Predict whether the water is **Safe or Unsafe** based on these values(one word).
"""
        try:
            ai_model = genai.GenerativeModel("gemini-1.5-pro")
            chat_response = ai_model.generate_content(ai_prompt)
            ai_prediction = chat_response.text.strip() if hasattr(chat_response, "text") else "Unknown"
        except Exception as e:
            ai_prediction = "Error"
        
        # Determine final water quality status
        if ai_prediction == "Safe" or ml_result == "Safe":
            final_status = "Safe"
            reason = "Water quality is good"
            filtration = "No filtration needed"
            ai_explanation = "N/A"
        else:
            final_status = "Unsafe"
            reason = "Contaminants detected"
            filtration = "Advanced filtration needed"

            # Generate AI explanation if water is unsafe
            explain_prompt = f"""
Analyze the water quality based on the following parameters:

🔹 **pH Level:** {data['pH']}  
🔹 **Hardness:** {data['hardness']} mg/L  
🔹 **Total Dissolved Solids (TDS):** {data['TDS']} ppm  
🔹 **Turbidity:** {data['turbidity']} NTU  

The ML model has classified the water as **"Unsafe"** because:  
**"{reason}"**

### 📌 Required Response:
1️⃣ **Scientific Explanation:** Explain the role of each parameter in determining water quality and mention safe limits.  
2️⃣ **Detailed Analysis Based on Given Parameters:** Discuss the effect of the specific values provided.  
3️⃣ **Filtration Techniques for Improvement:** Suggest effective filtration methods tailored to the detected issues.  
4️⃣ **Preventive Measures to Maintain Water Quality:** List practical steps for ensuring long-term water safety.  
5️⃣ **Step-by-Step Water Purification Process:** Offer a clear, actionable guide to filtering and purifying the water.  
"""
            try:
                explain_response = ai_model.generate_content(explain_prompt)
                ai_explanation = explain_response.text if hasattr(explain_response, "text") else "AI explanation not available."
            except Exception as e:
                ai_explanation = f"AI explanation failed: {str(e)}"
        
        # Return response
        result = {
            "status": final_status,
            "reason": reason,
            "filtration": filtration,
            "AI Prediction": ai_prediction,
            "ML Prediction": ml_result,
            "AI Explanation": ai_explanation
        }
        print("Response:", result)
        return jsonify(result)
    
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"status": "Error", "reason": str(e), "filtration": "N/A", "AI Prediction": "N/A", "ML Prediction": "N/A", "AI Explanation": "N/A"}), 500

if __name__ == '__main__':
    app.run(debug=True)
