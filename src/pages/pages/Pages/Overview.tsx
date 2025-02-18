import { UI_CONFIG } from "#src/contants/ui.ts"
import { REPORT_OVERVIEW_DUMP_DATA } from "#src/pages/pages/Pages/config.tsx"
import { Card, Col, Row, Typography } from "antd"
import { map } from "lodash"
import numeral from "numeral"

const ReportOverview = () => {
  return (
    <Card>
      <Row wrap gutter={UI_CONFIG.row_gutter}>
        {map(REPORT_OVERVIEW_DUMP_DATA, ({ label, value }, key) => (
          <Col key={key} xs={12} lg={6}>
            <Typography.Title level={2}>
              {numeral(value).format("$0.00")}
            </Typography.Title>
            <Typography.Text type="secondary">{label}</Typography.Text>
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export default ReportOverview
