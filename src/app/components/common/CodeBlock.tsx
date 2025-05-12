import React from "react";
import { CodeText } from "./CommonStyles";

type CodeBlockProps = {
  data: object;
};
export const CodeBlock: React.FC<CodeBlockProps> = (props) => {
  return (
    <>
      <CodeText $GrayColor={true}>
        {JSON.stringify(props.data, null, 2)}
      </CodeText>
    </>
  );
};
