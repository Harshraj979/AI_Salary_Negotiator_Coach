const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const { generateNegotiationResponse } = require('./services/geminiService');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server working");
})

app.post("/api/negotiate", async (req, res) => {
    const data = req.body;

    console.log("Recieved data: ", data);

    try {
        const reply = await generateNegotiationResponse(data);
        res.json({
            message: "Data recieved Successfully",
            data: data,
            reply: reply
        });
    } catch (error) {
        console.error("Error generating response:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})