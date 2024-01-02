import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
      validate: {
        validator: function (value) {
          return value.includes(" ") && value.length >= 3 && value.length <= 20;
        },
        message: (props) => `${props.value} is not a valid full name!`,
      },
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email is invalid"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
