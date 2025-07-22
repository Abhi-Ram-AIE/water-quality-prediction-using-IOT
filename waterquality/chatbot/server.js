// // // // // const express = require("express");
// // // // // const cors = require("cors");
// // // // // const bodyParser = require("body-parser");
// // // // // const axios = require("axios");
// // // // // const { GoogleGenerativeAI } = require("@google/generative-ai");

// // // // // const app = express();
// // // // // const PORT = 3004;

// // // // // // Middleware
// // // // // app.use(cors());
// // // // // app.use(bodyParser.json());

// // // // // // Initialize Google AI
// // // // // const API_KEY = "AIzaSyAh4x3zZRCkxBQrgQD0VOJKnnbZ3228G2g"; // Replace with your actual API key
// // // // // const genAI = new GoogleGenerativeAI(API_KEY);
// // // // // const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

// // // // // // Chatbot Route
// // // // // app.post("/api/chat", async (req, res) => {
// // // // //   try {
// // // // //     const userMessage = req.body.message;
// // // // //     if (!userMessage) return res.status(400).json({ error: "Message is required" });

// // // // //     console.log("User Message:", userMessage); // Debugging

// // // // //     const result = await model.generateContent(userMessage);
// // // // //     const responseText = result.response.text();

// // // // //     console.log("Bot Response:", responseText); // Debugging

// // // // //     res.json({ response: responseText });
// // // // //   } catch (error) {
// // // // //     console.error("Error processing chatbot request:", error);
// // // // //     res.status(500).json({ error: "Internal Server Error" });
// // // // //   }
// // // // // });

// // // // // // Start Server
// // // // // app.listen(PORT, () => {
// // // // //   console.log(`🚀 Server running on http://localhost:${PORT}`);
// // // // // });
// // // // const express = require("express");
// // // // const cors = require("cors");
// // // // const bodyParser = require("body-parser");
// // // // const { GoogleGenerativeAI } = require("@google/generative-ai");

// // // // const app = express();
// // // // const PORT = 3004;

// // // // // Middleware
// // // // app.use(cors());
// // // // app.use(bodyParser.json());

// // // // // Initialize Google AI
// // // // const API_KEY = "AIzaSyAh4x3zZRCkxBQrgQD0VOJKnnbZ3228G2g"; // Replace with your actual API key
// // // // const genAI = new GoogleGenerativeAI(API_KEY);
// // // // const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

// // // // // Function to check if the question is water-related
// // // // async function isWaterRelated(message) {
// // // //   const filterPrompt = `You are an AI that verifies if a question is related to water, pollution, pH, filtration, or the environment.
// // // //   Answer only with "YES" or "NO".

// // // //   Question: ${message}
// // // //   Answer: `;

// // // //   try {
// // // //     const response = await model.generateContent(filterPrompt);
// // // //     const answer = response.response.text().trim().toUpperCase();
// // // //     return answer === "YES";
// // // //   } catch (error) {
// // // //     console.error("Error checking relevance:", error);
// // // //     return false;
// // // //   }
// // // // }

// // // // // Chatbot Route
// // // // app.post("/api/chat", async (req, res) => {
// // // //   try {
// // // //     const userMessage = req.body.message;
// // // //     if (!userMessage) return res.status(400).json({ error: "Message is required" });

// // // //     console.log("User Message:", userMessage);

// // // //     // Check if the question is water-related
// // // //     const relevant = await isWaterRelated(userMessage);
// // // //     if (!relevant) {
// // // //       return res.json({ response: "I can only answer questions about water, pollution, filtration, and related topics." });
// // // //     }

// // // //     // AI Prompt for Water-Related Response
// // // //     const chatPrompt = `You are a water specialist AI. Keep answers under 20 words.
    
// // // //     User: ${userMessage} 
// // // //     AI: `;

// // // //     const response = await model.generateContent(chatPrompt);
// // // //     let botReply = response.response.text();

// // // //     // Limit the response to 20 words
// // // //     botReply = botReply.split(" ").slice(0, 20).join(" ");

// // // //     console.log("Bot Response:", botReply);

// // // //     res.json({ response: botReply });
// // // //   } catch (error) {
// // // //     console.error("Error processing chatbot request:", error);
// // // //     res.status(500).json({ response: "Sorry, I can only generate responses for water-related queries." });
// // // //   }
// // // // });

// // // // // Start Server
// // // // app.listen(PORT, () => {
// // // //   console.log(`🚀 Server running on http://localhost:${PORT}`);
// // // // });
// // // const express = require("express");
// // // const cors = require("cors");
// // // const bodyParser = require("body-parser");
// // // const { GoogleGenerativeAI } = require("@google/generative-ai");

// // // const app = express();
// // // const PORT = 3004;

// // // // Middleware
// // // app.use(cors());
// // // app.use(bodyParser.json());

// // // // Initialize Google AI
// // // const API_KEY = "AIzaSyAh4x3zZRCkxBQrgQD0VOJKnnbZ3228G2g"; // 🔴 Replace with your actual Gemini AI API key
// // // const genAI = new GoogleGenerativeAI(API_KEY);
// // // const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

// // // // Chatbot Route
// // // app.post("/api/chat", async (req, res) => {
// // //   try {
// // //     const userMessage = req.body.message.toLowerCase();

// // //     // ✅ Friendly Greetings
// // //     const greetings = ["hi", "hello", "hey", "how are you", "good morning", "good evening"];
// // //     if (greetings.some(greet => userMessage.includes(greet))) {
// // //       return res.json({ response: "Hi! How can I assist you with water-related topics today?" });
// // //     }

// // //     // ✅ Allowed Water Topics (Including pH, TDS, Hardness, etc.)
// // //     const waterTopics = [
// // //       "water", "ph", "ph value", "ph level", "pollution", "filtration", "ocean", "lake", "river",
// // //       "groundwater", "drinking water", "wastewater", "sewage",
// // //       "hydrology", "moisture", "sanitation", "irrigation", "rain",
// // //       "stormwater", "water cycle", "desalination", "water conservation",
// // //       "water quality", "contamination", "acid rain", "hydropower", "water scarcity",
// // //       "tds", "hardness", "alkalinity", "chlorine", "fluoride", "nitrate", "bacteria"
// // //     ];
    
// // //     const isRelevant = waterTopics.some(topic => userMessage.includes(topic));
// // //     if (!isRelevant) {
// // //       return res.json({ response: "I can only answer questions about water, pollution, filtration, and related topics." });
// // //     }

// // //     // ✅ Generate AI Response (Limited to 20 Words)
// // //     const chatPrompt = `You are an AI assistant specialized in water-related topics. 
// // //     Answer in a maximum of 20 words. 
// // //     User: ${userMessage} 
// // //     AI: `;

// // //     const response = await model.generateContent(chatPrompt);
// // //     let botReply = response.response.text().split(" ").slice(0, 20).join(" ");
// // //     console.log(botReply)

// // //     res.json({ response: botReply });
// // //   } catch (error) {
// // //     console.error("Error generating response:", error);
// // //     res.status(500).json({ response: "Sorry, I can only answer water-related questions." });
// // //   }
// // // });

// // // // ✅ Start Server
// // // app.listen(PORT, () => {
// // //   console.log(`🚀 Server running on http://localhost:${PORT}`);
// // // });
// // const express = require("express");
// // const cors = require("cors");
// // const bodyParser = require("body-parser");
// // const { GoogleGenerativeAI } = require("@google/generative-ai");

// // const app = express();
// // const PORT = 3004;

// // // Middleware
// // app.use(cors());
// // app.use(bodyParser.json());

// // // Initialize Google Gemini AI
// // const API_KEY = "AIzaSyAh4x3zZRCkxBQrgQD0VOJKnnbZ3228G2g"; // Replace with your actual API key
// // const genAI = new GoogleGenerativeAI(API_KEY);
// // const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

// // // Store conversation history per user
// // const userConversations = {};

// // // Allowed water-related topics
// // const waterTopics = [
// //   "water", "pollution", "filtration", "aquatic", "ocean", "lake", "river",
// //   "groundwater", "drinking water", "wastewater", "sewage", "hydrology",
// //   "moisture", "wetlands", "sanitation", "irrigation", "drought", "rain",
// //   "stormwater", "water cycle", "desalination", "water conservation",
// //   "water quality", "contamination", "acid rain", "hydropower", "pH",
// //   "water testing", "water safety", "freshwater", "saltwater", "boiling water"
// // ];

// // // Chatbot Route
// // app.post("/api/chat", async (req, res) => {
// //   try {
// //     const { message, userId } = req.body;
// //     if (!message) return res.status(400).json({ response: "Message is required." });

// //     // Check if it's a greeting
// //     const greetings = ["hi", "hello", "hey"];
// //     if (greetings.includes(message.toLowerCase())) {
// //       return res.json({ response: "Hi! How can I assist you with water-related topics today?" });
// //     }

// //     // Ensure user has a conversation history
// //     if (!userConversations[userId]) {
// //       userConversations[userId] = [];
// //     }

// //     // Add user message to history
// //     userConversations[userId].push(`User: ${message}`);

// //     // Check if the query is related to water
// //     const isWaterRelated = waterTopics.some(topic => message.toLowerCase().includes(topic));
// //     if (!isWaterRelated) {
// //       return res.json({ response: "I can only answer questions about water, pollution, filtration, and related topics." });
// //     }

// //     // Create a prompt with conversation history
// //     const chatHistory = userConversations[userId].join("\n");
// //     const prompt = `${chatHistory}\nAI (reply in max 20 words):`;

// //     // Get AI response
// //     const response = await model.generateContent(prompt);
// //     let botReply = response.response.text();

// //     // Limit response to 20 words
// //     botReply = botReply.split(" ").slice(0, 20).join(" ");

// //     // Store AI response in history
// //     userConversations[userId].push(`AI: ${botReply}`);

// //     res.json({ response: botReply });

// //   } catch (error) {
// //     console.error("Error processing chatbot request:", error);
// //     res.status(500).json({ response: "Sorry, I can only answer water-related questions." });
// //   }
// // });

// // // Start Server
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on http://localhost:${PORT}`);
// // AIzaSyAh4x3zZRCkxBQrgQD0VOJKnnbZ3228G2g
// // });
// // const express = require("express");
// // const cors = require("cors");
// // const bodyParser = require("body-parser");
// // const { GoogleGenerativeAI } = require("@google/generative-ai");

// // const app = express();
// // const PORT = 3004;

// // // Middleware
// // app.use(cors());
// // app.use(bodyParser.json());

// // // Initialize Google Gemini AI
// // const API_KEY = "AIzaSyAh4x3zZRCkxBQrgQD0VOJKnnbZ3228G2g"; // Replace with your actual API key
// // const genAI = new GoogleGenerativeAI(API_KEY);
// // const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

// // // Store conversation history per user
// // const userConversations = {};

// // // Common greetings (lowercase variations)
// // const greetings = ["hi", "hello", "hey", "hii", "good morning", "good evening", "good afternoon"];

// // // Chatbot Route
// // app.post("/api/chat", async (req, res) => {
// //   try {
// //     const { message, userId } = req.body;
// //     if (!message) return res.status(400).json({ response: "Message is required." });

// //     // Convert message to lowercase and trim spaces
// //     const lowerMessage = message.toLowerCase().trim();

// //     // ✅ **Check for greetings first**
// //     if (greetings.some(greet => lowerMessage.includes(greet))) {
// //       return res.json({ response: "Hi! How can I assist you with water-related topics today?" });
// //     }

// //     // ✅ **Step 1: Ask AI if the question is water-related**
// //     const validationPrompt = `Does this question relate to water, pollution, filtration, or related topics? Answer only 'yes' or 'no':\n"${message}"`;
// //     const validationResponse = await model.generateContent(validationPrompt);
// //     const isWaterRelated = validationResponse.response.text().toLowerCase().includes("yes");

// //     if (!isWaterRelated) {
// //       return res.json({ response: "I can only answer water-related questions." });
// //     }

// //     // Ensure user has a conversation history
// //     if (!userConversations[userId]) {
// //       userConversations[userId] = [];
// //     }

// //     // Add user message to history
// //     userConversations[userId].push(`User: ${lowerMessage}`);

// //     // ✅ **Step 2: Get AI's response to the water-related question**
// //     const chatHistory = userConversations[userId].join("\n");
// //     const prompt = `${chatHistory}\nAI (reply in max 20 words):`;

// //     const response = await model.generateContent(prompt);
// //     let botReply = response.response.text();

// //     // Limit response to 20 words
// //     botReply = botReply.split(" ").slice(0, 20).join(" ");

// //     // Store AI response in history
// //     userConversations[userId].push(`AI: ${botReply}`);

// //     res.json({ response: botReply });

// //   } catch (error) {
// //     console.error("Error processing chatbot request:", error);
// //     res.status(500).json({ response: "Sorry, something went wrong. Please try again!" });
// //   }
// // });

// // // Start Server
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on http://localhost:${PORT}`);
// // });
// // const express = require("express");
// // const cors = require("cors");
// // const bodyParser = require("body-parser");
// // const { GoogleGenerativeAI } = require("@google/generative-ai");

// // const app = express();
// // const PORT = 3004;

// // // Middleware
// // app.use(cors());
// // app.use(bodyParser.json());

// // // Initialize Google Gemini AI
// // const API_KEY = "AIzaSyAU1P7pwqVcQAMeQv1rciAiJQqRCNP6Urs"; // Replace with your actual API key
// // const genAI = new GoogleGenerativeAI(API_KEY);
// // const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

// // // Store user conversation history and cache responses
// // const userConversations = {};
// // const responseCache = {};

// // // Allowed water-related topics
// // const waterTopics = [
// //   "water", "pollution", "filtration", "aquatic", "ocean", "lake", "river",
// //   "groundwater", "drinking water", "wastewater", "sewage", "hydrology",
// //   "moisture", "wetlands", "sanitation", "irrigation", "drought", "rain",
// //   "stormwater", "water cycle", "desalination", "water conservation",
// //   "water quality", "contamination", "acid rain", "hydropower", "pH",
// //   "water testing", "water safety", "freshwater", "saltwater", "boiling water"
// // ];

// // // Function to check if the message is water-related
// // async function checkIfWaterRelated(message) {
// //   try {
// //     const response = await model.generateContent(
// //       `Is the following question related to water, pollution, or filtration? Answer only "yes" or "no".\n\nQuestion: "${message}"`
// //     );
// //     const answer = response.response.text().trim().toLowerCase();
// //     return answer.includes("yes");
// //   } catch (error) {
// //     console.error("Error checking topic:", error);
// //     return false; // Assume not water-related if API call fails
// //   }
// // }

// // // Chatbot Route
// // app.post("/api/chat", async (req, res) => {
// //   try {
// //     let { message, userId } = req.body;
// //     if (!message) return res.status(400).json({ response: "Message is required." });

// //     message = message.toLowerCase().trim(); // Convert to lowercase for consistency

// //     // Check for greetings
// //     const greetings = ["hi", "hello", "hey"];
// //     if (greetings.includes(message)) {
// //       return res.json({ response: "Hi! How can I assist you with water-related topics today?" });
// //     }

// //     // Check if the query has already been cached (to reduce API calls)
// //     if (responseCache[message]) {
// //       return res.json({ response: responseCache[message] });
// //     }

// //     // Ensure user has a conversation history
// //     if (!userConversations[userId]) {
// //       userConversations[userId] = [];
// //     }

// //     // Add user message to history
// //     userConversations[userId].push(`User: ${message}`);

// //     // First, check if the message is related to water
// //     const isWaterRelated = await checkIfWaterRelated(message);
// //     if (!isWaterRelated) {
// //       return res.json({ response: "I'm unable to answer that. I specialize in water, pollution, and related topics." });
// //     }

// //     // Create a prompt with conversation history
// //     const chatHistory = userConversations[userId].join("\n");
// //     const prompt = `${chatHistory}\nAI (reply in max 20 words):`;

// //     // Get AI response
// //     const response = await model.generateContent(prompt);
// //     let botReply = response.response.text().trim();

// //     // Limit response to 20 words
// //     botReply = botReply.split(" ").slice(0, 20).join(" ");

// //     // Store AI response in history and cache
// //     userConversations[userId].push(`AI: ${botReply}`);
// //     responseCache[message] = botReply; // Save to cache

// //     res.json({ response: botReply });

// //   } catch (error) {
// //     console.error("Error processing chatbot request:", error);
// //     res.status(500).json({ response: "Sorry, I can only answer water-related questions." });
// //   }
// // });

// // // Start Server
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on http://localhost:${PORT}`);
// // });
// // Chatbot Route
// app.post("/api/chat", async (req, res) => {
//     try {
//         let { message, userId } = req.body;
//         if (!message) return res.status(400).json({ response: "Message is required." });

//         message = message.toLowerCase().trim(); // Convert to lowercase for consistency

//         // ✅ Fix: Check for greetings
//         const greetings = ["hi", "hello", "hey", "hii", "hlo"];
//         if (greetings.includes(message)) {
//             return res.json({ response: "Hi! How can I help you with water-related topics today?" });
//         }

//         // Check if the query has already been cached (to reduce API calls)
//         if (responseCache[message]) {
//             return res.json({ response: responseCache[message] });
//         }

//         // Ensure user has a conversation history
//         if (!userConversations[userId]) {
//             userConversations[userId] = [];
//         }

//         // Add user message to history
//         userConversations[userId].push(`User: ${message}`);

//         // First, check if the message is related to water
//         const isWaterRelated = await checkIfWaterRelated(message);
//         if (!isWaterRelated) {
//             return res.json({ response: "I'm unable to answer that. I specialize in water, pollution, and related topics." });
//         }

//         // Create a prompt with conversation history
//         const chatHistory = userConversations[userId].join("\n");
//         const prompt = `${chatHistory}\nAI (reply in max 20 words):`;

//         // Get AI response
//         const response = await model.generateContent(prompt);
        
//         if (!response || !response.response || !response.response.text) {
//             console.error("Invalid AI response structure:", response);
//             return res.json({ response: "Sorry, I couldn't generate a response." });
//         }

//         let botReply = response.response.text().trim();

//         // Limit response to 20 words
//         botReply = botReply.split(" ").slice(0, 20).join(" ");

//         // Store AI response in history and cache
//         userConversations[userId].push(`AI: ${botReply}`);
//         responseCache[message] = botReply; // Save to cache

//         res.json({ response: botReply });

//     } catch (error) {
//         console.error("Error processing chatbot request:", error);
//         res.status(500).json({ response: "Sorry, I can only answer water-related questions." });
//     }
// });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 3004;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Google Gemini AI
const API_KEY = "AIzaSyAU1P7pwqVcQAMeQv1rciAiJQqRCNP6Urs"; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

// Store user conversation history and cache responses
const userConversations = {};
const responseCache = {};

// Allowed water-related topics
const waterTopics = [
  "water", "pollution", "filtration", "aquatic", "ocean", "lake", "river",
  "groundwater", "drinking water", "wastewater", "sewage", "hydrology",
  "moisture", "wetlands", "sanitation", "irrigation", "drought", "rain",
  "stormwater", "water cycle", "desalination", "water conservation",
  "water quality", "contamination", "acid rain", "hydropower", "pH",
  "water testing", "water safety", "freshwater", "saltwater", "boiling water"
];

// Function to check if the message is water-related
async function checkIfWaterRelated(message) {
    try {
        const response = await model.generateContent(
            `Is the following question related to water, pollution, or filtration? Answer only "yes" or "no".\n\nQuestion: "${message}"`
        );
        
        if (!response || !response.response || !response.response.text) {
            console.error("Invalid AI response structure:", response);
            return false;
        }

        const answer = response.response.text().trim().toLowerCase();
        return answer.includes("yes");
    } catch (error) {
        console.error("Error checking topic:", error);
        return false; // Assume not water-related if API call fails
    }
}

// Chatbot Route
app.post("/api/chat", async (req, res) => {
    try {
        let { message, userId } = req.body;
        if (!message) return res.status(400).json({ response: "Message is required." });

        message = message.toLowerCase().trim(); // Convert to lowercase for consistency

        // ✅ Fix: Check for greetings
        const greetings = ["hi", "hello", "hey", "hii", "hlo"];
        if (greetings.includes(message)) {
            return res.json({ response: "Hi! How can I help you with water-related topics today?" });
        }

        // Check if the query has already been cached (to reduce API calls)
        if (responseCache[message]) {
            return res.json({ response: responseCache[message] });
        }

        // Ensure user has a conversation history
        if (!userConversations[userId]) {
            userConversations[userId] = [];
        }

        // Add user message to history
        userConversations[userId].push(`User: ${message}`);

        // First, check if the message is related to water
        const isWaterRelated = await checkIfWaterRelated(message);
        if (!isWaterRelated) {
            return res.json({ response: "I'm unable to answer that. I specialize in water, pollution, and related topics." });
        }

        // Create a prompt with conversation history
        const chatHistory = userConversations[userId].join("\n");
        const prompt = `${chatHistory}\nAI (reply in max 20 words):`;

        // Get AI response
        const response = await model.generateContent(prompt);
        
        if (!response || !response.response || !response.response.text) {
            console.error("Invalid AI response structure:", response);
            return res.json({ response: "Sorry, I couldn't generate a response." });
        }

        let botReply = response.response.text().trim();

        // Limit response to 20 words
        botReply = botReply.split(" ").slice(0, 20).join(" ");

        // Store AI response in history and cache
        userConversations[userId].push(`AI: ${botReply}`);
        responseCache[message] = botReply; // Save to cache

        res.json({ response: botReply });

    } catch (error) {
        console.error("Error processing chatbot request:", error);
        res.status(500).json({ response: "Sorry, I can only answer water-related questions." });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

