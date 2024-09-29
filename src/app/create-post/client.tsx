"use client";
import React, { ComponentProps, FC } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import styles from "@/app/create-post/client.module.scss";
import classNames from "classnames/bind";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalNodes } from "@/nodes";
import MarkdownPlugin from "@/plugins/markdownPlugin";

const cn = classNames.bind(styles);

const CreatePostClient: FC = (): JSX.Element => {
  const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] =
    {
      namespace: "resister-lexical",
      nodes: [...LexicalNodes],
      onError: (error: Error) => {
        console.error(error);
      },
    };
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className={cn("lexical-shell")}>
        <RichTextPlugin
          contentEditable={
            <ContentEditable className={cn("content-editable")} />
          }
          placeholder={<div className={cn("placeholder")}>글을 써주세요</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      <AutoFocusPlugin />
      <MarkdownPlugin />
      <HistoryPlugin />
    </LexicalComposer>
  );
};

export default CreatePostClient;
