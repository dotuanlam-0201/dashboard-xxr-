import CardContent from "#src/components/CardContent.tsx"
import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import MainLayout from "#src/layout/index.tsx"
import { CALENDAR_DUMP_DATA } from "#src/pages/application/Calendar/config.ts"
import Icon from "@ant-design/icons"
import { CakeIcon } from "@heroicons/react/16/solid"
import { Calendar, Card, Col, Flex, Row, Space, Tag, Typography } from "antd"
import { map } from "lodash"

const CalendarPage = () => {
  const {
    token: { colorPrimary },
  } = useConfigTheme()
  return (
    <MainLayout>
      <Row gutter={UI_CONFIG.row_gutter}>
        <Col xs={12} md={8} xl={6}>
          <CardContent
            style={{ maxHeight: 800, overflow: "auto" }}
            header="Details Day"
          >
            <Typography.Text>Don't miss scheduled events</Typography.Text>
            <Space
              style={{ marginTop: UI_CONFIG.gutter }}
              direction="vertical"
              size={UI_CONFIG.gutter}
            >
              {map(
                CALENDAR_DUMP_DATA,
                ({ name, location, date, time, color }, i) => (
                  <Card key={i}>
                    <Space direction="vertical" size={"middle"}>
                      <Flex justify="space-between">
                        <Typography.Title level={5}>{name}</Typography.Title>
                        <Tag color={color}>{time}</Tag>
                      </Flex>
                      <Typography.Text>{location}</Typography.Text>
                      <Space>
                        <Icon
                          style={{ color: colorPrimary }}
                          component={CakeIcon}
                        />{" "}
                        {date}
                      </Space>
                    </Space>
                  </Card>
                )
              )}
            </Space>
          </CardContent>
        </Col>
        <Col xs={14} md={16} xl={18}>
          <Calendar />
        </Col>
      </Row>
    </MainLayout>
  )
}

export default CalendarPage
