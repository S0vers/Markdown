import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ForwardRefEditor } from "./ForwardRedEditor";
import "@mdxeditor/editor/style.css";

const EditorComp = dynamic(() => import("./EditorComponent"), { ssr: false });

const markdown = `
  * Item 1
  * Item 2
  * Item 3
    * nested item

  1. Item 1
  2. Item 2
`;

export default function Home() {
  return (
    <>
      <br />
      <div style={{ border: "1px solid black" }}>
        <Suspense fallback={null}>
          <ForwardRefEditor markdown={markdown} />
        </Suspense>
      </div>
    </>
  );
}
