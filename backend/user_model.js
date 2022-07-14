const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    email_verification: { type: Boolean, default: false },
    countryCode: { type: String, default: "+91" },
    userImage: { type: String },
    userLat: { type: Number, default: 0 },
    userLong: { type: Number, default: 0 },
    workAddress: { type: String, default: "" },
    homeAddress: { type: String, default: "" },
    deleteFlag: { type: Boolean, default: false },
    status: { type: Boolean, default: true },
    paymentCards: { type: Array, default: [] },
  },
  {
    timestamps: true,
  },
  {
    collection: "user-data",
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
