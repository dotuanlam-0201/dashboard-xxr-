import { UI_CONFIG } from "#src/contants/ui.ts"
import MainLayout from "#src/layout/index.tsx"
import EarnByItem from "#src/pages/home/Dashboard/EarnByItem.tsx"
import EarnThisMonth from "#src/pages/home/Dashboard/EarnThisMonth.tsx"
import Impression from "#src/pages/home/Dashboard/Impression.tsx"
import DashboardOverview from "#src/pages/home/Dashboard/Overview.tsx"
import SaleByAge from "#src/pages/home/Dashboard/SaleByAge.tsx"
import { Col, Row, Space } from "antd"

const Dashboard = () => {
  return (
    <MainLayout>
      <Row wrap gutter={[UI_CONFIG.gutter, UI_CONFIG.gutter]}>
        <Col xs={12} lg={16} xl={18}>
          <Space style={{ width: "100%" }} direction="vertical" size={"large"}>
            <DashboardOverview />
            <SaleByAge />
          </Space>
        </Col>
        <Col xs={12} lg={8} xl={6}>
          <Space style={{ width: "100%" }} direction="vertical" size={"large"}>
            <EarnThisMonth />
            <EarnByItem />
            <Impression />
          </Space>
        </Col>
      </Row>
    </MainLayout>
  )
}

export default Dashboard
