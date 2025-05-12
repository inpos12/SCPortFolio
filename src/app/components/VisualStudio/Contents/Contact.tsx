import React from "react";
import axios, { AxiosError } from "axios";
import {
  ContentRow,
  PreGrayText,
  CodeBox,
  Input,
  SendButton,
} from "./ContentStyle/ContentesStyles";
import {
  BodyText,
  CodeText,
  GrayText,
  Heading1,
  SubText,
} from "../../common/CommonStyles";
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
      <ContentRow $maxHeight="auto" $maxWidth="auto">
        <Heading1 className="mt-10 mb-20">ContactContent</Heading1>
        <Hr />
        <BodyText className="mb-20">
          궁금한 점이 있으시면 언제든지 메일 주세요
        </BodyText>
        <Hr />
        <CodeBox className="mb-20">
          <CodeText $GrayColor={true}>
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
          </CodeText>
        </CodeBox>
        <CodeBox className="mb-5" as="form" onSubmit={SendMailHandler}>
          <SubText $GrayColor={true} className="mb-5">
            Email
          </SubText>
          <Input
            name="email"
            className="mb-5"
            placeholder="Your.email.@example.com"
          />
          <SubText $GrayColor={true} className="mb-5">
            Title
          </SubText>
          <Input name="title" className="mb-5" placeholder="Enter Title" />
          <SubText $GrayColor={true} className="mb-5">
            Message
          </SubText>
          <Input
            as="textarea"
            name="text"
            $height="100px"
            placeholder="Write a message..."
            className="mb-10"
          />
          <SendButton>Send Message</SendButton>
        </CodeBox>
      </ContentRow>
    </>
  );
};
