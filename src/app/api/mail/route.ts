import nodemail from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  const { email, title, text } = await req.json();
  if (!email || !title || !text) {
    return NextResponse.json(
      { message: "빈칸을 확인해주세요" },
      { status: 500 }
    );
  }
  const transporter = nodemail.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false, // TLS 사용
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  try {
    const info = await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `[문의]${title}`,
      text: `
          [email]: ${email} 
         ${text}
     `,
    });
    console.log("Email sent: ", info.response);
    return NextResponse.json({ message: "메일 보내기 완료!" }, { status: 200 });
  } catch (err) {
    console.log("Error sending email: ", err);
    return NextResponse.json({ message: "Email sent error" }, { status: 500 });
  }
}
