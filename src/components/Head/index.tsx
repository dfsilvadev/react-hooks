import { IHeadProps } from "./types";

export default function Head({ title, description = "" }: IHeadProps) {
  document.title = title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", description);

  return <></>;
}
