import User from "@/models/user";
import bcrypt from "bcryptjs";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { firstName, lastName, email, password, phoneNumber } = await req.json();

    if (!firstName || !lastName || !email || !password || !phoneNumber) {
      return NextResponse.json({ message: "Todos los campos son obligatorios." }, { status: 400 });
    }

    await connectMongoDB();
    // Verificar si ya existe un usuario con el mismo correo electrónico
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // Si el usuario ya existe, devolver un error
      return NextResponse.json({ message: "El email ya está registrado." }, { status: 409 });
    }

    // Si el usuario no existe, continuar con la creación
    const hashedPassword = await bcrypt.hash(password, 10);
    const name = `${firstName} ${lastName}`;
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phoneNumber
    });
    await newUser.save();
    return new NextResponse(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/auth/signup", error);
    return NextResponse.json({ message: "An error occurred while registering the user." }, { status: 500 });
  }
}
