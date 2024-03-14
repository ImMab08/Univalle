import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { connectDB } from "@/libs/mongodb"
import User from '@/models/user'

export async function POST(request: Request) {

  const {code, email, password} = await request.json()
  console.log(code, email, password);

  if (!password || password.length < 6 ) return NextResponse.json({
    message: "Password must be at least 6 characters"
  }, {
    status: 400
  });

  try {
    await connectDB()
    const userFound = await User.findOne({email});

    if (userFound) return NextResponse.json({
      message: "Email already exist"
    }, {
      status: 409,
    });
  
    const hashPassword =  await bcrypt.hash(password, 12)
  
    const user = new User({
      code,
      email,  
      password: hashPassword
    });
  
    const savedUser = await user.save();
    console.log(savedUser);
  
    return NextResponse.json(savedUser);
  } catch (error) {
    console.log(error)
    return NextResponse.error();
  }
}