import React from "react";
import { RichTextPlugin as LexicalRichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import styles from "@/plugins/richTextPlugin/RichTextPlugin.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const RichTextPlugin = () => {
  return (
    <LexicalRichTextPlugin
      contentEditable={
        <div className={cx("richtext-container")}>
          <ContentEditable
            contentEditable
            className={cx("richtext")}
            role="textbox"
          />
        </div>
      }
      placeholder={<div className={cx("placeholder")}>Type here...</div>}
      ErrorBoundary={LexicalErrorBoundary}
    />
  );
};

export default RichTextPlugin;
