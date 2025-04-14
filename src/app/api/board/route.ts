import { client, getCollection } from "@/app/lib/client";
import { NextRequest, NextResponse } from "next/server";
interface Board {
  title: string;
  name: string;
  detail: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { title, name, detail }: Board = await req.json();
    if (!title || !name || !detail) {
      return NextResponse.json(
        { message: "빈칸을 확인해주세요~" },
        { status: 501 }
      );
    }
    const collection = await getCollection("board");
    await collection.insertOne({ title, name, detail });
    return NextResponse.json({ message: "등록성공" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "알수없는 오류발생" }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function GET() {
  try {
    const collection = await getCollection("board");
    const result = await collection
      .find({}, { projection: { _id: 1, title: 1, name: 1, detail: 1 } })
      .toArray();
    return NextResponse.json({ result }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error", error: (err as Error).message },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
