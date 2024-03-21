import React from "react";
import data from "../../public/contents/contents.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const ReadPage = () => {
  const content = data;

  return (
    <div>
      {content.map((item, index) => (
        <ReactMarkdown
          className={"prose"}
          key={index}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {item}
        </ReactMarkdown>
      ))}
    </div>
  );
};

export default ReadPage;
