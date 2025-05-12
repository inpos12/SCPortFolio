import { MongoClient, ServerApiVersion } from "mongodb";
const uri: string | undefined = process.env.MONGO_CLIENT_URL;
if (!uri) {
  throw new Error("MongoDB URI is not defined");
}
export const client = new MongoClient(uri, {
  maxPoolSize: 200, // 👈 원하는 커넥션 풀 크기 설정
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  // poolSize, waitQueueTimeoutMS, serverSelectionTimeoutMS은 `MongoClientOptions`에서 지원되지 않음
});

export async function getCollection(collectionName: string) {
  try {
    await client.connect();
    const db = client.db("portfolio");
    return db.collection(collectionName);
  } catch (error) {
    console.error("DB connection failed:", error);
    throw new Error("Failed to connect to database");
  }
}
