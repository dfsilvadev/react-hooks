import { IBlockquoteProps } from "./types";

export default function Blockquote({ cite, children }: IBlockquoteProps) {
  return <blockquote cite={cite}>{children}</blockquote>;
}
