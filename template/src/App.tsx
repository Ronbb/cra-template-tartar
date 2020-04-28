import React from 'react'
import './App.less'
import { Button, Typography, Layout, Space } from 'antd'

const { Content } = Layout
const { Paragraph, Text, Title } = Typography

class App extends React.Component {
  render() {
    return (
      <Layout className="App">
        <Content className="App-content">
          <Typography className="tar-tar">
            <Title>Tartar sauce</Title>
            <Paragraph>
              <Text strong>Tartar sauce</Text>(French: <Text underline>sauce tartare</Text>; also
              spelled <Text strong>Tartare sauce</Text> in the UK, New Zealand, Australia, South
              other parts of the Commonwealth) is a condiment primarily composed of mayonnaise and
              finely chopped capers. Tartar sauce can also be enhanced with the addition of
              gherkins, other varieties of pickles, and lemon juice as well as herbs such as dill
              and parsley.
            </Paragraph>
            <Paragraph>
              It is most often used as a condiment with seafood dishes such as clam strips, fried
              oysters, fish and chips, fish sandwiches, and fish fingers, among many other dishes.
            </Paragraph>
          </Typography>
          <Space>
            <Button type="primary">Have a try</Button>
            <Button>No interest</Button>
          </Space>
        </Content>
      </Layout>
    )
  }
}

export default App
