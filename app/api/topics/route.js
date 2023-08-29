import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(requst) {
  const { title, description } = await requst.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic created" }, { status: 201 });
}

export async function GET(request) {
  await connectMongoDB();
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
