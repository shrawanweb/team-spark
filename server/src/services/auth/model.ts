import { model, Schema } from "mongoose";

interface UserDocument {
  name: string;
  email: string;
  refreshToken?: string | null;
  authToken?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserDocument>(
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
    refreshToken: {
      type: String,
      default: null,
    },
    authToken: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const User = model<UserDocument>("User", userSchema);
export { User, UserDocument };
