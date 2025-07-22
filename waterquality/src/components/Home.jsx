// // import React from "react";
// // import { Container, Typography, Button } from "@mui/material";
// // import { useNavigate } from "react-router-dom"; // Import useNavigate

// // const Home = () => {
// //   const navigate = useNavigate(); // Initialize navigation function

// //   const onGetStarted = () => {
// //     navigate("/predict"); // Navigate to /predict when clicked
// //   };

// //   return (
// //     <Container sx={{ textAlign: "center", mt: 5 }}>
// //       <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "white" }}>
// //   Welcome to Water Quality Prediction
// // </Typography>
// // <Typography variant="h6" sx={{ mb: 3, color: "white" }}>
// //   This application helps predict water quality and provides filtration suggestions.
// // </Typography>
      
// //       <Button
// //         variant="contained"
// //         color="primary"
// //         size="large"
// //         onClick={onGetStarted} // Call the function on click
// //         sx={{
// //           mt: 2,
// //           px: 1,
// //           py: 1,
// //           fontSize: "1rem",
// //           borderRadius: "8px",
// //           boxShadow: "3px 3px 10px rgba(0,0,0,0.3)"
// //         }}
// //       >
// //         Get Started
// //       </Button>
// //     </Container>
// //   );
// // };

// // export default Home;
// import React, { useState } from "react";
// import { Container, Typography, Button, Box, IconButton, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
// import SendIcon from "@mui/icons-material/Send";
// import axios from "axios";

// const Home = () => {
//   const navigate = useNavigate();
//   const [chatOpen, setChatOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   // Toggle Chat Window
//   const toggleChat = () => {
//     setChatOpen(!chatOpen);
//   };

//   // Send Message to AI Chatbot
//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages([...messages, userMessage]);

//     try {
//       const response = await axios.post("http://localhost:6000/api/chat", { message: input });

//       const botMessage = { sender: "bot", text: response.data.response || "Sorry, I couldn't understand that." };
//       setMessages([...messages, userMessage, botMessage]);
//     } catch (error) {
//       setMessages([...messages, userMessage, { sender: "bot", text: "Error fetching response." }]);
//     }

//     setInput(""); // Clear input field
//   };

//   return (
//     <Container sx={{ textAlign: "center", mt: 5, position: "relative" }}>
//       {/* Main Title */}
//       <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "white" }}>
//         Welcome to Water Quality Prediction
//       </Typography>
//       <Typography variant="h6" sx={{ mb: 3, color: "white" }}>
//         This application helps predict water quality and provides filtration suggestions.
//       </Typography>

//       {/* Get Started Button */}
//       <Button
//         variant="contained"
//         color="primary"
//         size="large"
//         onClick={() => navigate("/predict")}
//         sx={{
//           mt: 2,
//           px: 3,
//           py: 1,
//           fontSize: "1rem",
//           borderRadius: "8px",
//           boxShadow: "3px 3px 10px rgba(0,0,0,0.3)",
//         }}
//       >
//         Get Started
//       </Button>

//       {/* Floating Chatbot Button */}
//       <Box sx={{ position: "fixed", bottom: 20, left: 20 }}>
//         <IconButton
//           sx={{
//             backgroundColor: "#1976d2",
//             color: "white",
//             "&:hover": { backgroundColor: "#135ba1" },
//             width: 60,
//             height: 60,
//           }}
//           onClick={toggleChat}
//         >
//           <ChatBubbleIcon sx={{ fontSize: 40 }} />
//         </IconButton>
//       </Box>

//       {/* Chatbot Window */}
//       {chatOpen && (
//         <Box
//           sx={{
//             position: "fixed",
//             bottom: 90,
//             left: 20,
//             width: 300,
//             height: 400,
//             backgroundColor: "white",
//             boxShadow: "3px 3px 10px rgba(0,0,0,0.3)",
//             borderRadius: "10px",
//             p: 2,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//           }}
//         >
//           {/* Chatbot Title */}
//           <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
//             Water Chatbot
//           </Typography>

//           {/* Chat Messages */}
//           <Box sx={{ flex: 1, overflowY: "auto", p: 1 }}>
//             {messages.map((msg, index) => (
//               <Typography
//                 key={index}
//                 sx={{
//                   textAlign: msg.sender === "user" ? "right" : "left",
//                   backgroundColor: msg.sender === "user" ? "#ddd" : "#0b93f6",
//                   color: msg.sender === "user" ? "#000" : "#fff",
//                   padding: "5px 10px",
//                   borderRadius: "10px",
//                   margin: "5px 0",
//                   display: "inline-block",
//                 }}
//               >
//                 {msg.text}
//               </Typography>
//             ))}
//           </Box>

//           {/* Chat Input Box */}
//           <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
//             <TextField
//               fullWidth
//               label="Ask about water..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <IconButton color="primary" onClick={sendMessage}>
//               <SendIcon />
//             </IconButton>
//           </Box>
//         </Box>
//       )}
//     </Container>
//   );
// };

// export default Home;
// import React, { useState } from "react";
// import { Container, Typography, Button, Box, IconButton, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
// import SendIcon from "@mui/icons-material/Send";
// import axios from "axios";

// const API_BASE_URL = "http://localhost:3004"; // Make sure this matches the backend URL

// const Home = () => {
//   const navigate = useNavigate();
//   const [chatOpen, setChatOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   // Toggle Chat Window
//   const toggleChat = () => {
//     setChatOpen(!chatOpen);
//   };

//   // Send Message to AI Chatbot
//   const sendMessage = async () => {
//     if (!input.trim()) return;
  
//     const userMessage = { sender: "user", text: input };
//     setMessages([...messages, userMessage]);
  
//     try {
//       const response = await axios.post("http://localhost:3004/api/chat", { message: input });
  
//       // 🔥 Fix: Ensure correct response format
//       const botMessage = { sender: "bot", text: response.data.response || "Sorry, I couldn't understand that." };
  
//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//     } catch (error) {
//       console.error("Chatbot API error:", error);
//       setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: "Error fetching response." }]);
//     }
  
//     setInput(""); // Clear input field
//   };
  
//   return (
//     <Container sx={{ textAlign: "center", mt: 5, position: "relative" }}>
//       <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "white" }}>
//         Welcome to Water Quality Prediction
//       </Typography>
//       <Typography variant="h6" sx={{ mb: 3, color: "white" }}>
//         This application helps predict water quality and provides filtration suggestions.
//       </Typography>

//       {/* Get Started Button */}
//       <Button
//         variant="contained"
//         color="primary"
//         size="large"
//         onClick={() => navigate("/predict")}
//         sx={{
//           mt: 2,
//           px: 3,
//           py: 1,
//           fontSize: "1rem",
//           borderRadius: "8px",
//           boxShadow: "3px 3px 10px rgba(0,0,0,0.3)",
//         }}
//       >
//         Get Started
//       </Button>

//       {/* Floating Chatbot Button */}
//       <Box sx={{ position: "fixed", bottom: 20, left: 20 }}>
//         <IconButton
//           sx={{
//             backgroundColor: "#1976d2",
//             color: "white",
//             "&:hover": { backgroundColor: "#135ba1" },
//             width: 60,
//             height: 60,
//           }}
//           onClick={toggleChat}
//         >
//           <ChatBubbleIcon sx={{ fontSize: 40 }} />
//         </IconButton>
//       </Box>

//       {/* Chatbot Window */}
//       {chatOpen && (
//         <Box
//           sx={{
//             position: "fixed",
//             bottom: 90,
//             left: 20,
//             width: 300,
//             height: 400,
//             backgroundColor: "white",
//             boxShadow: "3px 3px 10px rgba(0,0,0,0.3)",
//             borderRadius: "10px",
//             p: 2,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//           }}
//         >
//           <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
//             Water Chatbot
//           </Typography>

//           {/* Chat Messages */}
//           <Box sx={{ flex: 1, overflowY: "auto", p: 1 }}>
//             {messages.map((msg, index) => (
//               <Typography
//                 key={index}
//                 sx={{
//                   textAlign: msg.sender === "user" ? "right" : "left",
//                   backgroundColor: msg.sender === "user" ? "#ddd" : "#0b93f6",
//                   color: msg.sender === "user" ? "#000" : "#fff",
//                   padding: "5px 10px",
//                   borderRadius: "10px",
//                   margin: "5px 0",
//                   display: "inline-block",
//                 }}
//               >
//                 {msg.text}
//               </Typography>
//             ))}
//           </Box>

//           {/* Chat Input Box */}
//           <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
//             <TextField
//               fullWidth
//               label="Ask about water..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <IconButton color="primary" onClick={sendMessage}>
//               <SendIcon />
//             </IconButton>
//           </Box>
//         </Box>
//       )}
//     </Container>
//   );
// };

// export default Home;
import React, { useState } from "react";
import { Container, Typography, Button, Box, IconButton, TextField, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { motion } from "framer-motion";

const API_BASE_URL = "http://localhost:3004"; // Update this if needed

const Home = () => {
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/chat`, { message: input });

      const botMessage = { sender: "bot", text: response.data.response || "Sorry, I couldn't understand that." };

      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error("Chatbot API error:", error);
      setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: "Error fetching response." }]);
      setIsTyping(false);
    }
  };

  return (
    <Container sx={{ textAlign: "center", mt: 5, position: "relative" }}>
      <Typography variant="h2" sx={{ fontWeight: "bold", color: "white", fontSize: "3rem", lineHeight: "2" }}>
        Welcome to Water Quality Prediction
      </Typography>
      <Typography variant="h3" sx={{ mb: 3, color: "white", fontSize: "1.3rem" }}>
        This application helps predict water quality and provides filtration suggestions.
      </Typography>

      {/* Get Started Button */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate("/predict")}
        sx={{
          mt: 2,
          px: 2,
          py: 1,
          fontSize: "0.9rem",
          borderRadius: "8px",
          boxShadow: "3px 3px 10px rgba(0,0,0,0.3)",
        }}
      >
        Get Started
      </Button>

      {/* Floating Chatbot Button (Bottom Right) */}
      <motion.div whileHover={{ scale: 1.1 }} style={{ position: "fixed", bottom: 15, right: 15 }}>
        <IconButton
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            "&:hover": { backgroundColor: "#135ba1" },
            width: 50,
            height: 50,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          }}
          onClick={toggleChat}
        >
          <ChatBubbleIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </motion.div>

      {/* Chatbot Window */}
      {chatOpen && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            bottom: 75,
            right: 15,
            width: 280,
            height: 350,
            backgroundColor: "#fff",
            boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
            borderRadius: "12px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Chat Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2", fontSize: "1rem" }}>
              Water Chatbot 💧
            </Typography>
            <IconButton onClick={toggleChat} size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Chat Messages */}
          <Box sx={{ flex: 1, overflowY: "auto", p: 1, backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  marginBottom: "6px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    backgroundColor: msg.sender === "user" ? "#1976d2" : "#ddd",
                    color: msg.sender === "user" ? "#fff" : "#000",
                    padding: "6px 10px",
                    borderRadius: "10px",
                    display: "inline-block",
                    maxWidth: "75%",
                    alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  {msg.text}
                </Typography>
              </motion.div>
            ))}
            {isTyping && (
              <Typography sx={{ color: "#999", fontStyle: "italic", textAlign: "left", mt: 1, fontSize: "0.8rem" }}>
                Bot is typing...
              </Typography>
            )}
          </Box>

          {/* Chat Input Box */}
          <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              sx={{
                borderRadius: "8px",
                fontSize: "0.9rem",
                "& .MuiInputBase-input": {
                  padding: "6px",
                },
              }}
            />
            <motion.div whileTap={{ scale: 0.9 }}>
              <IconButton color="primary" onClick={sendMessage}>
                <SendIcon fontSize="small" />
              </IconButton>
            </motion.div>
          </Box>
        </motion.div>
      )}
    </Container>
  );
};

export default Home;
