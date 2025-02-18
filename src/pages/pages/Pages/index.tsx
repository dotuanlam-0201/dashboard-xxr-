import { UI_CONFIG } from "#src/contants/ui.ts"
import MainLayout from "#src/layout/index.tsx"
import ReportOverview from "#src/pages/pages/Pages/Overview.tsx"
import ReportPaymentLoanIncome from "#src/pages/pages/Pages/Payment.tsx"
import ReportStatistics from "#src/pages/pages/Pages/Statistic.tsx"
import { Col, Row } from "antd"

const Report = () => {
  return (
    <MainLayout>
      <Row gutter={UI_CONFIG.row_gutter}>
        <Col xs={24}>
          <ReportOverview />
        </Col>
        <Col xs={24}>
          <ReportStatistics />
        </Col>
        <Col xs={24}>
          <Row gutter={UI_CONFIG.row_gutter}>
            <Col xs={12}>
              <ReportPaymentLoanIncome label="Payment" />
            </Col>
            <Col xs={12}>
              <ReportPaymentLoanIncome label="Loan Income" />
            </Col>
          </Row>
        </Col>
      </Row>
    </MainLayout>
  )
}

export default Report
