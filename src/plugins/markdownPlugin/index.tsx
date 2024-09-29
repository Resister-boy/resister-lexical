import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import * as React from "react";

const MarkdownPlugin: React.FC = (): JSX.Element => {
  return <MarkdownShortcutPlugin />;
};

export default MarkdownPlugin;
