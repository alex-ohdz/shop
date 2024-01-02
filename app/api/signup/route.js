import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signIn } from "next-auth/client";

export async function POST(req) {
  try {
    const { email, name, password } = await req.json();

    if (password < 6)
      return NextResponse.json(
        { message: "La contraseña debe tener al menos 6 caracteres" },
        { status: 400 }
      );

      const userFound = await User.findOne({ email });

    if (userFound)
      return NextResponse.json(
        {
          message: "Email ya existente",
        },
        {
          status: 409,
        }
      );

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("Datos recibidos en /api/register:", { name, email, password });
    await connectMongoDB();

    await User.create({ email, name, password: hashedPassword });

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      throw new Error(result.error);
    }

    return NextResponse.json({ message: "Usuario Registrado." }, { status: 201 });
  } catch (error) {
    console.error("Error en /api/register:", error);
    console.error("Error en el servidor:", error); 
    return NextResponse.json(
      { message: "Error al registrar al usuario", error: error.message },
      { status: 500 }
    );
  }
}
