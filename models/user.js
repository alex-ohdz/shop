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
        message: "El nombre completo debe incluir al menos un espacio y tener entre 3 y 20 caracteres.",
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
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\+?[1-9]\d{1,14}$/, "El número de teléfono debe ser válido y estar en formato internacional (+123456789)."],

    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
