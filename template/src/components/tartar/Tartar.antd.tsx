import React from 'react'
import './Tartar.antd.less'
import { Button, Typography, Layout, Space, notification, Popover, InputNumber, Form } from 'antd'
import { SmileTwoTone } from '@ant-design/icons'
import { TartarProps, TartarState } from './index'

const { Content } = Layout
const { Paragraph, Text, Title } = Typography

class TartarAntd extends React.Component<TartarProps, TartarState> {
  constructor(props: TartarProps) {
    super(props)
    this.state = {
      popVisible: false
    }
  }

  handleAdd = (count: number) => {
    const { add } = this.props
    add(count)
    this.setState({ popVisible: false })
    this.openNotification(count)
  }

  openNotification = (count: number) => notification.success({
    message: 'Sucessful!',
    description:
        `You have added ${count} tartar sauce sucessful! Try to check later by clicking the History button.`,
    duration: 5
  })

  render() {
    const { popVisible } = this.state
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
            <Popover
              content={
                <Form
                  initialValues={{ count: 3 }}
                  onFinish={values => this.handleAdd(values.count)}
                >
                  <Form.Item
                    name="count" label={
                      <Space direction="horizontal">
                        <SmileTwoTone twoToneColor="#eb2f96" />
                        How much tart sauce to add
                      </Space>
                    }
                  >
                    <InputNumber size="small" min={1} max={100} step={1} style={{ width: '4rem' }} />
                  </Form.Item>
                  <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
                    <Button size="small" type="primary" htmlType="submit">Ok</Button>
                    <Button size="small" onClick={() => this.setState({ popVisible: false })}>Cancel</Button>
                  </Space>
                </Form>
                }
              trigger="click"
              visible={popVisible}
            >
              <Button type="primary" onClick={() => this.setState({ popVisible: true })}>Have a try</Button>
            </Popover>
            <Button>Show History</Button>
          </Space>
        </Content>
      </Layout>
    )
  }
}

export default TartarAntd
