import express from "express";
import LinkModels from "../models/LinkModels.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const links = await LinkModels.find();
        res.json(links);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
});

export default router;