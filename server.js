const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.json({ limit: "1mb" }));

app.post("/run", async (req, res) => {
    try {
        const response = await fetch("https://emkc.org/api/v2/piston/execute", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Execution server error" });
    }
});

app.get("/", (req, res) => {
    res.send("Judge Backend Running");
});

app.listen(3000, () => console.log("Server running"));
