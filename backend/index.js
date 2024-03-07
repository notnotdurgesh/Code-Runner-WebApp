const express = require("express");
const axios = require("axios");
const cors = require("cors");


const app = express();
const PORT = 3000; 

app.use(express.json());
app.use(cors());

const languagesDic = {
  python: 'main.py',
  javascript: 'main.js',
  java: 'Main.java',
  c: 'main.c',
  cpp: 'main.cpp',
  swift: 'main.swift',
  kotlin: 'main.kt',
  bash: 'main.sh',
  typescript: 'main.ts',
  mysql: 'main.sql',
  groovy: 'main.groovy',
  html: 'index.html'
};


/**
 * Enhanced error handling function to provide more specific error messages to the client.
 * @param {Error} error The error object.
 * @returns {Object} An object containing an appropriate error message.
 */
function handleError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls outside the range of 2xx
    console.error("Error:", error.response.data);
    return { error: "OneCompiler API error: " + error.response.data.message }; // More specific error
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in browser environments
    console.error("Error:", error.request);
    return { error: "Error connecting to OneCompiler API" };
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Error:", error.message);
    return { error: "Internal server error" }; // Generic error for unexpected issues
  }
}



app.post("/", async (req, res) => {
  try {
    const { content: code, language } = req.body; 

    if (!code || !language) {
      return res.status(400).json({ error: "Missing required content (code, language) in request body" });
    }

    const options = {
      method: "POST",
      url: "https://onecompiler-apis.p.rapidapi.com/api/v1/run",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "<enter-api-key (get one from https://rapidapi.com/onecompiler-onecompiler-default/api/onecompiler-apis/) >", 
        "X-RapidAPI-Host": "onecompiler-apis.p.rapidapi.com",
      },
      data: {
        language,
        stdin: "Peter",
        files: [
          {
            name: languagesDic[language],
            content: code,
          },
        ],
      },
    };

    const response = await axios.request(options);

    res.status(200).json(response.data);
    console.log("Code execution successful:", response.data);
  } catch (error) {
    const detailedError = handleError(error); // Use enhanced error handling
    res.status(500).json(detailedError);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
