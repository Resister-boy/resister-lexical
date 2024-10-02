"use client";
import React, { ComponentProps } from "react";
import styles from "@/app/create-post/client.module.scss";
import classNames from "classnames/bind";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { LexicalNodes } from "@/nodes";
import RichTextPlugin from "@/plugins/richTextPlugin";
import ShareStateSenderPlugin from "@/plugins/shareStateSenderPlugin";
import ShareStateReceiverPlugin from "@/plugins/shareStateReceiverPlugin";

const cx = classNames.bind(styles);

const CreatePostClient = () => {
  const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] =
    {
      namespace: "resister-lexical",
      nodes: [...LexicalNodes],
      onError: (error: Error) => {
        console.error(error);
      },
    };
  return (
    <section className={cx("lexical-shell")}>
      <div className={cx("wrapper")}>
        <LexicalComposer initialConfig={initialConfig}>
          <div className={cx("content-editable")}>
            <RichTextPlugin />
          </div>
          <ShareStateSenderPlugin />
        </LexicalComposer>
      </div>
      <div className={cx("wrapper")}>
        <LexicalComposer initialConfig={initialConfig}>
          <div className={cx("content-editable")}>
            <RichTextPlugin />
          </div>
          <ShareStateReceiverPlugin />
        </LexicalComposer>
      </div>
    </section>
  );
};

export default CreatePostClient;
