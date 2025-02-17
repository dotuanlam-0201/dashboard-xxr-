import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { ANALYTICS_OVERVIEW } from "#src/pages/home/Analytics/config.ts"
import { Card, Col, Row, Space, Tag, Typography } from "antd"
import numeral from "numeral"

const AnalyticsOverview = () => {
  const {
    token: { colorPrimary },
  } = useConfigTheme()
  return (
    <Card>
      <Row gutter={UI_CONFIG.gutter * 2}>
        {ANALYTICS_OVERVIEW.map(
          ({ title, value, description, percentage, isIncrease, format }) => (
            <Col xs={12} xl={6}>
              <Space
                style={{ width: "100%" }}
                direction="vertical"
                size={"middle"}
              >
                <Typography.Text>
                  {title}
                  <Tag
                    style={{ marginLeft: UI_CONFIG.gutter }}
                    color={isIncrease ? "success" : "error"}
                  >
                    {isIncrease ? "+" : "-"} {percentage} %
                  </Tag>
                </Typography.Text>
                <Typography.Title style={{ color: colorPrimary, margin: 0 }}>
                  {numeral(value).format(format)}
                </Typography.Title>
                <Typography.Text type="secondary">
                  {description}
                </Typography.Text>
              </Space>
            </Col>
          )
        )}
      </Row>
    </Card>
  )
}

export default AnalyticsOverview
