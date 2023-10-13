
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  // await connectMongoDB();
  // await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  // await connectMongoDB();
  // const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic: 'teste o get id' }, { status: 200 });
}