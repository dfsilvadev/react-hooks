import {
  Blockquote,
  Breadcrumbs,
  Head,
  Heading,
  Paragraph
} from "../components";

export default function StatePage() {
  return (
    <>
      <Head
        title="useState Hooks"
        description="Conceitos básicos sobre o hook useState e um caso de uso"
      />
      <Breadcrumbs pageName="useState Hooks" />

      <Blockquote cite="https://pt-br.reactjs.org/docs/hooks-state.html">
        <Heading>O que o useState faz?</Heading>

        <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
      </Blockquote>
    </>
  );
}
