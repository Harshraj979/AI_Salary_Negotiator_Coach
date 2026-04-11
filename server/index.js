const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); // Must be called before requiring services that use process.env

const cors = require('cors');
const path = require('path');
const { generateNegotiationResponse } = require('./services/geminiService');

const app=express();

app.use(cors());
app.use(express.json());

// Serve the static files from the client folder
app.use(express.static(path.join(__dirname, '../client')));

app.get("/",(req,res)=>{
    res.send("Server working");
})

app.post("/api/negotiate", async (req,res)=>{
    const data=req.body;

    console.log("Recieved data: ",data);

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
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})