import 'regenerator-runtime/runtime';
import React from "react";
import { motion } from "framer-motion";
import { FaMicrophone, FaStop, FaClipboard } from "react-icons/fa";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./App.css";

function App() {
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transcript);
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="container">
      <h2 className="title">Speech to Text!</h2>
      <p className="description">
        A react hook that converts speech from the microphone to text and makes it
        available to your react component!
      </p>

      <motion.div
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {transcript}
      </motion.div>

      <div className="btn-style">
        <motion.button
          className="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={copyToClipboard}
        >
          <FaClipboard /> Copy
        </motion.button>
        <motion.button
          className="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startListening}
        >
          <FaMicrophone /> Start
        </motion.button>
        <motion.button
          className="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={stopListening}
        >
          <FaStop /> Stop
        </motion.button>
      </div>
    </div>
  );
}

export default App;
