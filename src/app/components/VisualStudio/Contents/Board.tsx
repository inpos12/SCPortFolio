import axios, { AxiosError } from "axios";
import styled from "styled-components";
import {
  ContentRow,
  CodeBox,
  PreGrayText,
  SendButton,
  Input,
} from "./ContentesStyles";
import { GrayText, Hr, Icon, Row } from "../../common/CommonStyles";
import { useEffect, useState } from "react";
import IconList from "../../common/icon";
import { Data, DetailOwnProps } from "@/app/type/ApiData";
export const BoardContent: React.FC = () => {
  const [list, setList] = useState<Data[]>([]);
  const [detailTab, setDetailTab] = useState(false);
  const [detaillist, setDetailList] = useState([]);
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
    BoardView();
  }, []);

  // 디테일창 GET요청청
  async function DetailTabHandler(id: Object) {
    const GetApi = "/api/board/detail";
    try {
      const result = await axios.get(GetApi, { params: { currentid: id } });
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
        <h1 className="mt-10 mb-20">BoardContent</h1>
        <Hr />
        <GrayText className="mb-20">방문기록을 남겨주세요</GrayText>
        <Hr />
        <CodeBox className="mb-20">
          <PreGrayText>
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
          </PreGrayText>
        </CodeBox>
        <CodeBox className="mb-20" as="form" onSubmit={BoardAddHandler}>
          <GrayText className="mb-20">Title</GrayText>
          <Input name="title" className="mb-20" placeholder="Enter Title" />
          <GrayText className="mb-20">Your name</GrayText>
          <Input name="name" className="mb-20" placeholder="Enter Your Name" />
          <GrayText className="mb-20">Message</GrayText>
          <Input
            name="detail"
            $height="100px"
            as="textarea"
            placeholder="Write a message..."
          />
          <SendButton>Submit</SendButton>
        </CodeBox>
        <h1 className="mb-20">방명록</h1>
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
            <h3 style={{ width: "90%", borderRight: "1px solid #4c4c4c" }}>
              {item.title}
            </h3>
            <h3>{item.name}</h3>
          </CodeBox>
        ))}

        {detailTab && <DetailContent item={detaillist} button={setDetailTab} />}
      </ContentRow>
    </>
  );
};
const FullBackground = styled(ContentRow)`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba(30, 30, 30, 0.5);
`;
const ModalBox = styled(CodeBox)`
  position: absolute;
  background-color: #3c3c3c;
  border: 1px solid #6a6a6a;
  max-width: 500px;
  width: 100%;
  top: 33%;
  left: 33%;
  transform: translate(-25% -25%);
  padding: 0;
`;

const DetailContent: React.FC<DetailOwnProps> = (props) => {
  return (
    <>
      {props.item.map((item, index) => (
        <FullBackground $maxHeight="auto" $maxWidth="auto" key={index}>
          <ModalBox>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "10px 8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Icon
                  $filter={true}
                  $padding="0"
                  $zindex="1"
                  $maxWidth="20px"
                  src={IconList.FileIcon}
                  alt="fileicon"
                />
                <p className="ml-15">{item.title}</p>
              </div>
              <div>
                <p
                  onClick={() => {
                    props.button(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  x
                </p>
              </div>
            </div>
            <CodeBox
              style={{
                padding: "10px 8px ",
                borderTop: "1px solid #6a6a6a",
                borderBottom: "1px solid #6a6a6a",
                borderRadius: "0",
                margin: "0",
              }}
            >
              <h2>{item.title}</h2>
              <GrayText className="mb-10" as="h4">
                by {item.name}
              </GrayText>
              <Hr />
              <p>{item.detail}</p>
            </CodeBox>
            <Row
              $maxHeight="auto"
              $maxWidth="auto"
              style={{ textAlign: "right", padding: "10px 8px" }}
            >
              <SendButton
                onClick={() => {
                  props.button(false);
                }}
              >
                Close
              </SendButton>
            </Row>
          </ModalBox>
        </FullBackground>
      ))}
    </>
  );
};
