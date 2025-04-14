import React from "react";
import axios, { AxiosError } from "axios";
import {
  ContentRow,
  PreGrayText,
  CodeBox,
  Input,
  SendButton,
} from "./ContentesStyles";
import { GrayText } from "../../common/CommonStyles";
import { Hr } from "../../common/CommonStyles";
export const ContactContent: React.FC = () => {
  async function SendMailHandler(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    const PostApi = "/api/mail";
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const text = (form.elements.namedItem("text") as HTMLInputElement).value;
    try {
      const result = await axios.post(PostApi, { email, title, text });
      if (result.status === 200) {
        alert(result.data.message);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response && err.response.status === 500) {
          alert(err.response.data.message);
        } else {
          alert("알수없는에러");
        }
      }
    }
  }

  return (
    <>
      <ContentRow $maxHeight="auto" $maxWidth="auto" className="fade-in">
        <h1 className="mt-10 mb-20">ContactContent</h1>
        <Hr />
        <GrayText className="mb-20">
          궁금한 점이 있으시면 언제든지 메일 주세요
        </GrayText>
        <Hr />
        <CodeBox className="mb-20">
          <PreGrayText>
            {`// Contact.js
import axios from "axios";
async function SendMailHandler(e) {
  e.preventDefault();
  const PostApi = {/* ApiUrl*/};
  const email = e.target.email.value;
  const title = e.target.title.value;
  const text = e.target.text.value;
  try {
    const result = await axios.post(PostApi, { email, title, text });
  } catch (err) {
    {/* Error response */}
  }
}
return (
  <div>
    {/* Contact form */}
  </div>
);`}
          </PreGrayText>
        </CodeBox>
        <CodeBox className="mb-20" as="form" onSubmit={SendMailHandler}>
          <GrayText className="mb-20">Email</GrayText>
          <Input
            name="email"
            className="mb-20"
            placeholder="Your.email.@example.com"
          />
          <GrayText className="mb-20">Title</GrayText>
          <Input name="title" className="mb-20" placeholder="Enter Title" />
          <GrayText className="mb-20">Message</GrayText>
          <Input
            name="text"
            $height="100px"
            as="textarea"
            placeholder="Write a message..."
            className="mb-10"
          />
          <SendButton>Send Message</SendButton>
        </CodeBox>
      </ContentRow>
    </>
  );
};
