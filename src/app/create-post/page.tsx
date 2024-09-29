import React from "react";
import { FC } from "react";

import classNames from "classnames/bind";
import CreatePostClient from "@/app/create-post/client";
import styles from "@/app/create-post/page.module.scss";

const cn = classNames.bind(styles);

const CreatePost: FC = (): JSX.Element => {
  return (
    <main className={cn("container")}>
      <CreatePostClient />
    </main>
  );
};

export default CreatePost;
