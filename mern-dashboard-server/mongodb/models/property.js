import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    platform: {type: String, required: false},
    startDate: {type: Date, required: false},
    endDate: {type: Date, required: false},
    description: { type: String, required: false },
    propertyType: { type: String, required: false },
    location: { type: String, required: false },
    investedAmount: { type: Number, required: false },
    photo: { type: String, required: false },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const propertyModel = mongoose.model("Property", PropertySchema);

export default propertyModel;
