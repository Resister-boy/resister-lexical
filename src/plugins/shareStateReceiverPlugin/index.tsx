import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLexicalStateShare } from "@/context/lexicalStateShareContext/LexicalStateShareContext";
import React, { useEffect } from "react";

const ShareStateReceiverPlugin = () => {
  const { stateStr } = useLexicalStateShare();
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    console.log(
      "ShareStateReceiverPlugin: stateStr",
      JSON.parse(stateStr ?? "{}")
    );

    if (stateStr) {
      const editorState = editor.parseEditorState(stateStr);
      editor.update(() => {
        editor.setEditorState(editorState);
      });
    }
  }, [editor, stateStr]);

  return null;
};

export default ShareStateReceiverPlugin;
