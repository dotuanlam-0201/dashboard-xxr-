import CardContent from "#src/components/CardContent.tsx"
import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import {
  FOLLOWERS_DUMP_DATA,
  PROFILE_OVERVIEW_ACTIONS_DUMP_DATA,
} from "#src/pages/pages/ProfileOverview/config.tsx"
import { Badge, Col, Flex, Row, Space, Tooltip, Typography } from "antd"
import { map } from "lodash"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

const Followers = () => {
  const {
    token: { colorSuccess, colorError, colorPrimary },
  } = useConfigTheme()
  return (
    <Row gutter={UI_CONFIG.row_gutter}>
      <Col xs={16}>
        <CardContent
          headerRightSide={
            <Space size={UI_CONFIG.gutter * 2} style={{ width: "fit-content" }}>
              <Badge offset={[-60, 12]} dot status="error">
                <Typography.Text type="danger">Income</Typography.Text>
              </Badge>
              <Badge offset={[-70, 12]} status="success" dot color="error">
                <Typography.Text type="success">Outcome</Typography.Text>
              </Badge>
            </Space>
          }
          header={"Followers"}
        >
          <ResponsiveContainer aspect={2} width="100%" height={"100%"}>
            <LineChart
              width={500}
              height={500}
              data={FOLLOWERS_DUMP_DATA}
              margin={{
                top: UI_CONFIG.gutter,
                right: 20,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                strokeWidth={2}
                type="monotone"
                dataKey="pv"
                stroke={colorSuccess}
                activeDot={{ r: 8 }}
              />
              <Line
                strokeWidth={2}
                type="monotone"
                dataKey="uv"
                stroke={colorError}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Col>
      <Col xs={8}>
        <CardContent style={{ minHeight: "100%" }} header="Actions">
          <Row gutter={[UI_CONFIG.gutter * 1.5, UI_CONFIG.gutter * 1.5]}>
            {map(PROFILE_OVERVIEW_ACTIONS_DUMP_DATA, ({ label, value }, i) => (
              <Col xs={24} key={i}>
                <Flex justify="space-between">
                  <Typography.Text>{label}</Typography.Text>
                  <Typography.Text
                    style={{ color: colorPrimary, fontWeight: 600 }}
                  >
                    {value}
                  </Typography.Text>
                </Flex>
              </Col>
            ))}
          </Row>
        </CardContent>
      </Col>
    </Row>
  )
}

export default Followers
