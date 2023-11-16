import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(requst) {
  const { title, description } = await requst.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(requst) {
  const id = requst.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
