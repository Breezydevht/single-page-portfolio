import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
}, { collection: "link" });

export default mongoose.model("Link", LinkSchema);