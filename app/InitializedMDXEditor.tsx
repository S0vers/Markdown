"use client";
// InitializedMDXEditor.tsx
import type { ForwardedRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  toolbarPlugin,
  BoldItalicUnderlineToggles,
  UndoRedo,
  type MDXEditorMethods,
  type MDXEditorProps,
  InsertImage,
  InsertTable,
  CreateLink,
  BlockTypeSelect,
  ListsToggle,
  tablePlugin,
  InsertThematicBreak,
  linkDialogPlugin,
  imagePlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <InsertImage />
              <InsertTable />
              <CreateLink />
              <BlockTypeSelect />
              <ListsToggle />
              <InsertThematicBreak />
            </>
          ),
        }),
        tablePlugin(),
        linkDialogPlugin(),
        listsPlugin(),
        thematicBreakPlugin(),
        imagePlugin({
          imageUploadHandler: () => {
            return Promise.resolve("https://picsum.photos/200/300");
          },
          imageAutocompleteSuggestions: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/200",
          ],
        }),
      ]}
      {...props}
      ref={editorRef}
    />
  );
}
