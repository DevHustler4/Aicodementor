import { models, model, Schema, Document } from "mongoose";

export interface UserInterface extends Document {
  _id: string;
  name: string;
  email: string;
  image: string;
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
});

export const User = models?.User || model("User", userSchema);
