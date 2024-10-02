import { Klass, LexicalNode, ParagraphNode, TextNode } from "lexical";
import { HeadingNode } from "@lexical/rich-text";

export const LexicalNodes: Klass<LexicalNode>[] = [
  HeadingNode,
  ParagraphNode,
  TextNode,
];
