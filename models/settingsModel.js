const mongoose = require("mongoose");
const toJSON = require("@plugins/toJSON");

const settingsSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      default: "Ava Thompson",
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      default: "admin@propertyhub.com",
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
    },
    companyName: {
      type: String,
      trim: true,
      default: "PropertyHub Realty",
    },
    phone: {
      type: String,
      trim: true,
      default: "+1 234 567 890",
    },
    bio: {
      type: String,
      trim: true,
      default: "Workspace owner for sales operations, listings, and performance reviews.",
    },
    language: {
      type: String,
      enum: ["English", "Hindi", "Gujarati"],
      default: "English",
    },
    theme: {
      type: String,
      enum: ["Light", "System", "Dark"],
      default: "Light",
    },
    visibility: {
      type: String,
      enum: ["Team only", "Managers and admins", "All staff"],
      default: "Team only",
    },
    propertyAlerts: {
      type: Boolean,
      default: true,
    },
    leadEmails: {
      type: Boolean,
      default: true,
    },
    weeklyDigest: {
      type: Boolean,
      default: false,
    },
    securityAlerts: {
      type: Boolean,
      default: true,
    },
    twoFactor: {
      type: Boolean,
      default: true,
    },
    sessionTimeout: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

settingsSchema.plugin(toJSON);

module.exports = mongoose.model("Settings", settingsSchema);
