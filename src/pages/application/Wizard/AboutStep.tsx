import avatar from "#src/assets/dotuanlam.jpeg"
import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { Avatar, Col, DatePicker, Input, Row, Space, Typography } from "antd"
import FormItem from "antd/es/form/FormItem"
import { map } from "lodash"

const AboutStep = () => {
  const {
    token: { colorPrimary },
  } = useConfigTheme()

  const inputs = [
    {
      label: "Last Name",
    },
    {
      label: "Fist Name",
    },
    {
      label: "Email",
    },
    {
      label: "Day of birth",
      input: <DatePicker width={"100%"} size="large" />,
    },
    {
      label: "City",
    },
    {
      label: "Post Code",
    },
  ]
  return (
    <Space direction="vertical" size={"large"}>
      <span>
        <Typography.Title
          style={{ textAlign: "center", color: colorPrimary }}
          level={3}
        >
          Let’s start with the basic information
        </Typography.Title>
        <Typography.Text>
          Let us know your name and email address. Use an address you don’t mind
          other users contact you at
        </Typography.Text>
      </span>

      <Space size={"large"}>
        <Avatar src={avatar} size={80} />
        <span>
          <Typography.Title level={4}>Profile photo</Typography.Title>
          <Typography.Text type="secondary">
            This will be displayed on your profile.
          </Typography.Text>
        </span>
      </Space>

      <Row gutter={UI_CONFIG.row_gutter}>
        {map(inputs, ({ label, input }) => (
          <Col xs={12} key={label}>
            <FormItem layout="vertical" label={label}>
              {input ?? (
                <Input placeholder={`Enter your ${label}`} size="large" />
              )}
            </FormItem>
          </Col>
        ))}
      </Row>
    </Space>
  )
}

export default AboutStep
