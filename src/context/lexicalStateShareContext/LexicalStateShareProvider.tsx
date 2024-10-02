"use client";
import { EditorState } from "lexical";
import React, { ReactNode, useMemo, useState } from "react";
import { LexicalStateShareContext } from "@/context/lexicalStateShareContext/LexicalStateShareContext";

type Props = {
  children: ReactNode;
};

const LexicalStateShareProvider = ({ children }: Props) => {
  const [stateStr, setStateStr] = useState<string | null>(null);
  const [state, setState] = useState<EditorState | null>(null);

  const contextValue = useMemo(() => {
    return {
      stateStr,
      setStateStr,
      state,
      setState,
    };
  }, [stateStr, state]);

  return (
    <LexicalStateShareContext.Provider value={contextValue}>
      {children}
    </LexicalStateShareContext.Provider>
  );
};

export default LexicalStateShareProvider;
