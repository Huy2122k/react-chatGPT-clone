require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// adding body-parser and cors
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.json({ message: "Hello world!" });
});

app.post("/", async (req, res) => {
  try {
    const { message } = req.body;
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${message}` }],
      max_tokens: 4000,
      temperature: 0.3,
    });
    res.json({ botResponse: response.data.choices[0].message.content });
  } catch (error) {
    console.log(error);
    res.json({ botResponse: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.timeout = 120000;

module.exports = app;
