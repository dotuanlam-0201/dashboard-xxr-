import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { JOB_DUMP_DATA } from "#src/pages/application/Wizard/config.ts"
import { Card, Col, Radio, Row, Space, Typography } from "antd"
import { map } from "lodash"

const AccountStep = () => {
  const {
    token: { colorPrimary },
  } = useConfigTheme()
  return (
    <Card>
      <Space direction="vertical" size={"large"}>
        <Space direction="vertical" align="center">
          <Typography.Title
            style={{ textAlign: "center", color: colorPrimary }}
            level={3}
          >
            What are you doing? (checkboxes)
          </Typography.Title>
          <Typography.Text>
            Give us more detail about you. What do you enjoy doing in your spare
            time?
          </Typography.Text>
        </Space>

        <Radio.Group defaultValue="a" size="large">
          <Row gutter={UI_CONFIG.row_gutter}>
            {map(JOB_DUMP_DATA, (job, i) => (
              <Col key={i} xs={8}>
                <Card>
                  <Radio value={job}>{job}</Radio>
                </Card>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </Space>
    </Card>
  )
}

export default AccountStep
