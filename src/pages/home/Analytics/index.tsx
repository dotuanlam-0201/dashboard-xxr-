import { UI_CONFIG } from "#src/contants/ui.ts"
import MainLayout from "#src/layout/index.tsx"
import DeviceCategory from "#src/pages/home/Analytics/DeviceCategory.tsx"
import AnalyticsOverview from "#src/pages/home/Analytics/Overview.tsx"
import SalesFunnel from "#src/pages/home/Analytics/SalesFunnel.tsx"
import TopCountries from "#src/pages/home/Analytics/TopCountries.tsx"
import WatchLists from "#src/pages/home/Analytics/Watchlists.tsx"
import { Col, Row, Space } from "antd"

export const Analytics = () => {
  return (
    <MainLayout>
      <Row wrap gutter={[UI_CONFIG.gutter, UI_CONFIG.gutter]}>
        <Col xs={24}>
          <AnalyticsOverview />
        </Col>
        <Col xs={14} lg={16} xxl={18}>
          <Space style={{ width: "100%" }} size={"large"} direction="vertical">
            <SalesFunnel />
            <WatchLists />
          </Space>
        </Col>

        <Col xs={10} lg={8} xxl={6}>
          <Space style={{ width: "100%" }} size={"large"} direction="vertical">
            <DeviceCategory />
            <TopCountries />
          </Space>
        </Col>
      </Row>
    </MainLayout>
  )
}
