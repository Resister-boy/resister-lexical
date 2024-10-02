import React from "react";
import classNames from "classnames/bind";
import styles from "@/app/create-post/page.module.scss";
import CreatePostClient from "@/app/create-post/client";
import LexicalStateShareProvider from "@/context/lexicalStateShareContext/LexicalStateShareProvider";

const cn = classNames.bind(styles);

const CreatePost = (): JSX.Element => {
  return (
    <main className={cn("container")}>
      <LexicalStateShareProvider>
        <CreatePostClient />
      </LexicalStateShareProvider>
    </main>
  );
};

export default CreatePost;
