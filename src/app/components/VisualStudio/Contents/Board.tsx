import axios, { AxiosError } from "axios";
import styled from "styled-components";
import {
  ContentRow,
  CodeBox,
  PreGrayText,
  SendButton,
  Input,
} from "./ContentStyle/ContentesStyles";
import {
  BodyText,
  CodeText,
  GrayText,
  Heading1,
  Heading2,
  Heading3,
  Hr,
  Icon,
  Row,
  SmallText,
  SubText,
} from "../../common/CommonStyles";
import { useEffect, useState } from "react";
import IconList from "../../common/icon";
import { Data, DetailOwnProps } from "@/app/type/ApiData";
import { DetailList } from "./Board/DetailList";
export const BoardContent: React.FC = () => {
  const [list, setList] = useState<Data[]>([]);
  const [detailTab, setDetailTab] = useState(false);
  const [detaillist, setDetailList] = useState([]);

  // 방명록 리스트 불러오는 함수
  async function BoardView() {
    const GetApi = "/api/board/";
    try {
      const result = await axios.get(GetApi);
      if (result.status === 200) {
        setList(result.data.result);
      }
    } catch (err) {
      console.log(err);
    }
  }
  async function BoardAddHandler(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const detail = (form.elements.namedItem("detail") as HTMLInputElement)
      .value;
    const PostApi = "/api/board/";
    try {
      const result = await axios.post(PostApi, { title, name, detail });
      if (result.status === 200) {
        alert(result.data.message);
        BoardView();
      }
    } catch (err) {
      // AxiosError로 타입을 지정
      if (err instanceof AxiosError) {
        if (err.response && err.response.status === 501) {
          alert(err.response.data.message);
        } else {
          alert(err.response?.data?.message || "Unknown error");
        }
      } else {
        alert("Unexpected error occurred");
      }
    }
  }

  useEffect(() => {
    BoardView();
  }, []);

  // 디테일창 GET요청청
  async function DetailTabHandler(id: Object) {
    const GetApi = "/api/board/detail";
    try {
      const result = await axios.get(GetApi, { params: { currentid: id } });
      console.log(id);
      if (result.status === 200) {
        setDetailTab((prev) => !prev);
        setDetailList(result.data.result);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <ContentRow $maxHeight="auto" $maxWidth="auto" className="fade-in">
        <Heading1 className="mt-10 mb-20">BoardContent</Heading1>
        <Hr />
        <BodyText className="mb-20">방문기록을 남겨주세요</BodyText>
        <Hr />
        <CodeBox className="mb-20">
          <CodeText $GrayColor={true}>
            {`// Board.js
import axios from "axios"
 async function BoardAddHandler(e) {
    e.preventDefault();
    const PostApi = {/* ApiUrl*/};
    const title = e.target.title.value;
    const name = e.target.name.value;
    const detail = e.target.detail.value;
    try {
      const result = await axios.post(PostApi, { title, name, detail });
      if (result.status === 200) {
        {/* Success */}
      }
    } catch (err) {
 {/* Error  */}
    }
  }
 return (
    <div>
      {/* Board form and entries */}
    </div>
  );
}`}
          </CodeText>
        </CodeBox>
        <CodeBox className="mb-5" as="form" onSubmit={BoardAddHandler}>
          <SubText $GrayColor={true} className="mb-5">
            Title
          </SubText>
          <Input name="title" className="mb-5" placeholder="Enter Title" />
          <SubText $GrayColor={true} className="mb-5">
            Your name
          </SubText>
          <Input
            name="name"
            className="mb-5"
            placeholder="Enter Your Name"
            maxLength={3}
          />
          <SubText $GrayColor={true} className="mb-5">
            Message
          </SubText>
          <Input
            as="textarea"
            name="detail"
            $height="100px"
            placeholder="Write a message..."
          />
          <SendButton>Submit</SendButton>
        </CodeBox>
        <Heading2 className="mb-20">방명록</Heading2>
        {list.map((item, index) => (
          <CodeBox
            onClick={() => {
              DetailTabHandler(item._id);
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 30px",
              cursor: "pointer",
            }}
            key={index}
            className="mb-20"
          >
            <BodyText
              style={{ width: "90%", borderRight: "1px solid #4c4c4c" }}
            >
              {item.title}
            </BodyText>
            <BodyText>{item.name}</BodyText>
          </CodeBox>
        ))}
        {detailTab && <DetailList item={detaillist} button={setDetailTab} />}
      </ContentRow>
    </>
  );
};
