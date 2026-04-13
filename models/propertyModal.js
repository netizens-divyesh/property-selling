const mongoose = require("mongoose");
const toJSONPlugin = require("@plugins/toJSON");

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  type: {
    type: String,
    enum: ["house", "apartment", "land", "commercial"],
    required: [true, "Type is required"],
  },
  area: {
    type: Number,
    required: [true, "Area is required"],
  },
  images: {
    type: [String],
    required: [true, "Images are required"],
  },
  status: {
    type: String,
    enum: ["available", "sold", "rented", "under_construction"],
    default: "available",
  },
});

propertySchema.plugin(toJSONPlugin);

module.exports = mongoose.model("Property", propertySchema);
