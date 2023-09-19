import mongoose from "mongoose";

const formModelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    telNumber: {
      type: Number,
      required: true,
    },
    cameraCount: {
      type: Number,
      required: true,
    },
    utpCables: {
      type: String,
      required: true,
    },
    nightTime: {
      type: String,
      required: true,
    },
    howLong: {
      type: String,
      required: true,
    },
    money: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Neperžiūrėtas",
    },
  },
  {
    timestamps: true,
  }
);

const Forma = mongoose.model("Form", formModelSchema);

export default Forma;
