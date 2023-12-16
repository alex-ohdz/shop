import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email,name, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Datos recibidos en /api/register:", { name, email, password });
    await connectMongoDB();
    
    // Asegúrate de que el modelo User pueda manejar firstName y lastName
    await User.create({ email, name,  password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
} catch (error) {
  console.error("Error en /api/register:", error);
	console.error('Error en el servidor:', error); // Para depuración
	return NextResponse.json({ message: 'Error al registrar al usuario', error: error.message }, { status: 500 });
  }
}

