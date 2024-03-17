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
    // throw new Error ('Not implemented')
    await connectDB()

    //verify code
    const userFoundCode = await User.findOne({code});
    if (userFoundCode) return NextResponse.json({
      message: "Code already exist"
    }, {
      status: 409,
    });
        
    //verify email
    const userFoundEmail = await User.findOne({email});
    if (userFoundEmail) return NextResponse.json({
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
  
    return NextResponse.json({
      _id: savedUser._id,
      code: savedUser.code,
      email: savedUser.email
    });
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return NextResponse.json({
        message: error.message
      }, {
        status: 400
      });
    }
  }
}