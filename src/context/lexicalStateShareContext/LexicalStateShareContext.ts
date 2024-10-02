import { EditorState } from "lexical";
import {
  Context,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

export type LexicalStateShareShape = {
  stateStr: string | null;
  setStateStr: Dispatch<SetStateAction<string | null>>;
  state: EditorState | null;
  setState: Dispatch<SetStateAction<EditorState | null>>;
};

export const LexicalStateShareContext: Context<LexicalStateShareShape> =
  createContext<LexicalStateShareShape>({
    stateStr: null,
    setStateStr: () => {},
    state: null,
    setState: () => {},
  });

export const useLexicalStateShare = () => {
  return useContext(LexicalStateShareContext);
};
