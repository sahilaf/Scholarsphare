import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

function Ai({ email }) {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  async function generateAnswer() {
    if (!input.trim()) return;
  
    const userMessage = { sender: "user", text: input, email: email };
    setChatHistory(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);
  
    try {
      // Save user message to the backend
      await axios.post("http://localhost:8081/savemessage", userMessage);
  
      // Proceed to generate AI response
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBjdMYvfFb7eVPgpVMRLVtAjsrqaR9H708",
        { contents: [{ parts: [{ text: input }] }] }
      );
  
      const aiResponse = response.data?.candidates[0]?.content.parts[0]?.text;
      if (aiResponse) {
        const aiMessage = { sender: "ai", text: aiResponse, email: email};
        setChatHistory(prev => [...prev, aiMessage]);
  
        // Save AI message to the backend
        await axios.post("http://localhost:8081/savemessage", aiMessage);
      } else {
        throw new Error("Invalid AI response");
      }
    } catch (error) {
      console.error("Error generating answer:", error);
      setChatHistory(prev => [
        ...prev,
        { sender: "ai", text: "Sorry, I couldn't generate an answer." }
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function fetchChatHistory() {
    try {
      const response = await axios.get(
        `http://localhost:8081/getmessages/${email}`
      );
      console.log("Fetched chat history:", response.data);
      setChatHistory(response.data);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  }

  async function clearChatHistory() {
    try {
      await axios.delete(`http://localhost:8081/clearchat/${email}`);
      setChatHistory([]);
    } catch (error) {
      console.error("Error clearing chat history:", error);
    }
  }

  useEffect(() => {
    fetchChatHistory();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, loading]);

  return (
    <div className="flex flex-col h-screen bg-black">
      <div className="flex flex-col flex-grow max-w-2xl mx-auto bg-black rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-semibold text-white mb-4">AI Chat</h1>
        <div className="flex-grow overflow-y-auto mb-4 p-4 border border-[#00DF9A] rounded-lg bg-black">
          {Array.isArray(chatHistory) &&
            chatHistory.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg max-w-lg ${
                  message.sender === "user"
                    ? "bg-[#00DF9A] text-white self-end"
                    : "bg-white/5 text-white self-start"
                }`}
              >
                <div className="font-semibold">
                  {message.sender === "user" ? "You" : "AI"}:
                </div>
                <div>{message.text}</div>
              </div>
            ))}
          {loading && (
            <div className="mb-2 p-2 rounded-lg max-w-lg bg-gray-300 text-gray-900 self-start">
              <div className="font-semibold">AI:</div>
              <div>Generating response...</div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        <div className="flex items-center w-full text-black">
          <form
            className="flex w-full"
            onSubmit={(e) => {
              e.preventDefault();
              generateAnswer();
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00DF9A] mr-2"
              placeholder="Type your message here..."
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#00DF9A] text-white rounded-lg hover:bg-[#00df989a] focus:outline-none focus:ring-2 focus:ring-[#00DF9A]"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg ml-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            onClick={clearChatHistory}
          >
            Clear Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ai;
