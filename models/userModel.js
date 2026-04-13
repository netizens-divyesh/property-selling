const mongoose = require("mongoose");
const toJSON = require("@plugins/toJSON");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Email address is required"],
      unique: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true },
);

userSchema.plugin(toJSON);

module.exports = mongoose.model("User", userSchema);
