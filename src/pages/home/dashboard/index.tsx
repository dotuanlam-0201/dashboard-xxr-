import { UI_CONFIG } from "#src/contants/ui.ts"
import MainLayout from "#src/layout/index.tsx"
import DashboardOverview from "#src/pages/home/dashboard/overview.tsx"
import { Card, Col, Row } from "antd"

const Dashboard = () => {
  return (
    <MainLayout>
      <Row wrap gutter={UI_CONFIG.gutter}>
        <Col xs={12} lg={16} xl={18}>
          <DashboardOverview />
        </Col>
        <Col xs={12} lg={8} xl={6}>
          <Card></Card>
        </Col>
      </Row>
    </MainLayout>
  )
}

export default Dashboard
