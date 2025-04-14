import { client, getCollection } from "@/app/lib/client";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const currentid = req.nextUrl.searchParams.get("currentid");
    if (!currentid || !ObjectId.isValid(currentid)) {
      return NextResponse.json(
        { message: "Invalid or missing currentid parameter" },
        { status: 400 }
      );
    }
    const object = new ObjectId(currentid);
    const collection = await getCollection("board");
    const result = await collection
      .find({ _id: object }, { projection: { title: 1, name: 1, detail: 1 } })
      .toArray();
    console.log(result);
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
