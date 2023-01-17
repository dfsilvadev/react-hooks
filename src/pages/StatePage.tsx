import {
  Article,
  Blockquote,
  Breadcrumbs,
  Code,
  Count,
  Head
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
        <Article title="O que o useState faz?">
          Ele declara um variável state. Nossa variável é chamada de{" "}
          <Code>count</Code> mas poderíamos chamar de qualquer coisa, como{" "}
          <Code>banana</Code>. Esta é uma maneira de “preservar” alguns valores
          entre as chamadas de funções — <Code>useState</Code> é uma nova
          maneira de usar as mesmas capacidades que o <Code>this.state</Code>{" "}
          tem em uma classe. Normalmente, variáveis “desaparecem” quando a
          função sai mas variáveis de state são preservadas pelo React.
        </Article>

        <Article title="O que passamos para o useState como argumento?">
          O único argumento para o Hook <Code>useState()</Code> é o state
          inicial. Diferente de classes, o state não tem que ser um objeto.
          Podemos manter um número ou uma string se for tudo que precisamos. No
          nosso exemplo, apenas queremos um número para quantas vezes o usuário
          clicou, então passamos 0 como state inicial para nossa variável. (Se
          quiséssemos guardar dois valores diferentes no state, chamaríamos{" "}
          <Code>useState()</Code> duas vezes.)
        </Article>

        <Article title="O que useState retorna?">
          Ele retorna um par de valores: o state atual e uma função que atualiza
          o state. É por isso que escrevemos{" "}
          <Code>const [count, setCount] = useState()</Code>. Isto é similar ao{" "}
          <Code>this.state.count</Code> e <Code>this.setState</Code> em uma
          classe, exceto o fato de pegá-los em par.
        </Article>

        <Article title="Caso de uso">
          <Count />
        </Article>
      </Blockquote>
    </>
  );
}
