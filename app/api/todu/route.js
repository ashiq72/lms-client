import connectMongoDB from "@/libs/mongodb";
import Toduss from "@/models/todu";
import { NextResponse } from "next/server";

export async function POST(requst) {
  const { title, description } = await requst.json();
  await connectMongoDB();
  await Toduss.create({ title, description });
  return NextResponse.json({ message: "Todu created" }, { status: 201 });
}
