import chart from "#src/assets/chart.svg"
import lineChart from "#src/assets/line-chart.svg"

import clickIcon from "#src/assets/click.svg"
import itemIcon from "#src/assets/item.svg"
import saleIcon from "#src/assets/sale.svg"
import userIcon from "#src/assets/user.svg"

import CardContent from "#src/components/CardContent.tsx"
import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { FileTextFilled } from "@ant-design/icons"
import { Card, Col, Divider, Row, Space, Typography } from "antd"
import numeral from "numeral"

const items = [
  {
    icon: userIcon,
    label: "Users",
    value: 30000,
  },
  {
    icon: clickIcon,
    label: "Clicks",
    value: 1000000,
  },
  {
    icon: saleIcon,
    label: "Sales",
    value: 345,
    format: "0$",
  },
  {
    icon: itemIcon,
    label: "Items",
    value: 100,
  },
]

const DashboardOverview = () => {
  const { token } = useConfigTheme()
  return (
    <CardContent header="Active users right now">
      <Space size={"large"} direction="horizontal">
        <Space direction="vertical">
          <Typography.Title
            level={1}
            style={{
              color: token.colorPrimary,
              fontSize: 64,
              marginBottom: 0,
            }}
          >
            300
          </Typography.Title>

          <Typography.Text>
            <FileTextFilled style={{ color: token.colorPrimary }} /> Page views
            per minute
          </Typography.Text>

          <Divider />

          <img style={{ maxWidth: "100%" }} src={lineChart} />

          <Typography.Text>
            Upgrade your payout method in setting
          </Typography.Text>
        </Space>

        <img style={{ maxWidth: "100%" }} src={chart} />
      </Space>

      <Row
        wrap
        gutter={[UI_CONFIG.gutter, UI_CONFIG.gutter]}
        style={{ marginTop: UI_CONFIG.gutter }}
      >
        {items.map(({ icon, value, label, format = "0a" }) => (
          <Col xs={12} xl={6}>
            <Card size="small">
              <Space align="center">
                <img src={icon} />
                <Typography.Text>{label}</Typography.Text>
              </Space>
              <Typography.Title>
                {numeral(value).format(format)}
              </Typography.Title>
            </Card>
          </Col>
        ))}
      </Row>
    </CardContent>
  )
}

export default DashboardOverview
