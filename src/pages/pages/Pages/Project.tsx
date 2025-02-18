import imageUser from "#src/assets/dotuanlam.jpeg"
import iconMembers from "#src/assets/project_members.svg"
import { UI_CONFIG } from "#src/contants/ui.ts"
import MainLayout from "#src/layout/index.tsx"
import { PROJECT_DUMP_DATA } from "#src/pages/pages/Pages/config.tsx"
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Image,
  Row,
  Space,
  Typography,
} from "antd"
import { map } from "lodash"

const Project = () => {
  return (
    <MainLayout>
      <Card>
        <Space size={"large"} direction="vertical">
          <Row justify={"space-between"}>
            <Col>
              <Space align="center">
                <Avatar size={50} src={imageUser} />
                <span>
                  <Typography.Title level={5}>Do Tuan Lam</Typography.Title>
                  <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                    Front End Developer
                  </Typography.Text>
                </span>
              </Space>
            </Col>
            <Col>
              <Space>
                <Button type="primary">App</Button>
                <Button>Messages</Button>
                <Button>Settings</Button>
              </Space>
            </Col>
          </Row>

          <Card title="Some of Our Awesome projects">
            <Row wrap gutter={UI_CONFIG.row_gutter}>
              {map(
                PROJECT_DUMP_DATA,
                ({ logo, name, description, participants, date }, i) => (
                  <Col key={i} xs={8}>
                    <Card>
                      <Space direction="vertical" size={"small"}>
                        <Space>
                          <Avatar size={50} shape="square" src={logo} />
                          <div>
                            <Typography.Title level={5}>
                              {name}
                            </Typography.Title>
                            <Image src={iconMembers} />
                          </div>
                        </Space>

                        <Typography.Text type="secondary">
                          {description}
                        </Typography.Text>

                        <Divider />

                        <Row justify={"space-between"}>
                          <Col>
                            <Space direction="vertical">
                              <Typography.Text>{participants}</Typography.Text>
                              <Typography.Text type="secondary">
                                Participants
                              </Typography.Text>
                            </Space>
                          </Col>
                          <Col>
                            <Space direction="vertical">
                              <Typography.Text>{date}</Typography.Text>
                              <Typography.Text type="secondary">
                                Date
                              </Typography.Text>
                            </Space>
                          </Col>
                        </Row>
                      </Space>
                    </Card>
                  </Col>
                )
              )}
            </Row>
          </Card>
        </Space>
      </Card>
    </MainLayout>
  )
}

export default Project
