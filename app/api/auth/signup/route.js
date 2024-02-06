import User from "@/models/user";
import bcrypt from "bcryptjs";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { firstName, lastName, email, password, phoneNumber } =
      await req.json();

    if (!firstName || !lastName || !email || !password || !phoneNumber) {
      return NextResponse.json(
        { message: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    await connectMongoDB();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "El email ya está registrado." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await new User({
      name: `${firstName} ${lastName}`,
      email,
      password: hashedPassword,
      phoneNumber,
    }).save();

    // En lugar de manejar JWT y cookies, simplemente devolvemos una respuesta exitosa.
    // La lógica de inicio de sesión se manejará a través de la página de inicio de sesión de next-auth
    return new Response(
      JSON.stringify({
        message: "Registro exitoso. Por favor, inicia sesión.",
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error in POST /api/auth/signup", error);
    return NextResponse.json(
      { message: "Ocurrió un error durante el registro." },
      { status: 500 }
    );
  }
}
