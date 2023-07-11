import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
  try {
    const allUsers = await User.find();
    return NextResponse.json(allUsers, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: error.message || "Something went wrong",
    });
  }
}
