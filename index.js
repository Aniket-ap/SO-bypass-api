const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

// app.get("/api", async (req, res) => {
//   const url = `${process.env.GET_API}`;
//   try {
//     const response = await axios.get(url, {
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
//       },
//     });
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

app.post('/submit-form', async (req, res) => {
  const apiUrl = 'https://app.shootorder.com/items/contacts/?access_token=hes4c7izEe7Rsx4C0GkP4KKBeNqB9JJv';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (response.ok) {
      console.log('Form submitted successfully!');
      res.sendStatus(200);
    } else {
      console.error('Error submitting form:', response.statusText);
      res.sendStatus(response.status);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
