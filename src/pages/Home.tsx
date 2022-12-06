import { Card, Content, Panel } from "../components";

import hooksMock from "../utils/constant";

export default function Home() {
  return (
    <Content>
      <Panel title="React Hooks">
        {hooksMock.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ))}
      </Panel>
    </Content>
  );
}
