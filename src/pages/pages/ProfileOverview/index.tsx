import { UI_CONFIG } from "#src/contants/ui.ts"
import MainLayout from "#src/layout/index.tsx"
import AgeRange from "#src/pages/pages/ProfileOverview/AgeRange.tsx"
import BestTime from "#src/pages/pages/ProfileOverview/BestTime.tsx"
import Followers from "#src/pages/pages/ProfileOverview/Followers.tsx"
import Gender from "#src/pages/pages/ProfileOverview/Gender.tsx"
import Interaction from "#src/pages/pages/ProfileOverview/Interaction.tsx"
import MyProfile from "#src/pages/pages/ProfileOverview/MyProfile.tsx"
import Statistic from "#src/pages/pages/ProfileOverview/Statistic.tsx"
import { Col, Row, Space } from "antd"

const PagesOverview = () => {
  return (
    <MainLayout>
      <Row wrap gutter={UI_CONFIG.row_gutter}>
        <Col xs={14} lg={16} xl={18}>
          <Space direction="vertical" size={UI_CONFIG.gutter}>
            <Statistic />
            <Followers />
            <Row wrap gutter={UI_CONFIG.row_gutter}>
              <Col xs={12}>
                <Interaction />
              </Col>
              <Col xs={12}>
                <BestTime />
              </Col>
            </Row>
            <Row wrap gutter={UI_CONFIG.row_gutter}>
              <Col xs={16}>
                <Gender />
              </Col>
              <Col xs={8}>
                <AgeRange />
              </Col>
            </Row>
          </Space>
        </Col>
        <Col xs={10} lg={8} xl={6}>
          <MyProfile />
        </Col>
      </Row>
    </MainLayout>
  )
}

export default PagesOverview
