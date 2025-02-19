import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { Col, Input, Row, Space, Typography } from "antd"
import FormItem from "antd/es/form/FormItem"
import { map } from "lodash"

const AddressStep = () => {
  const {
    token: { colorPrimary },
  } = useConfigTheme()

  const inputs = [
    {
      label: "Street name",
    },
    {
      label: "Street no",
    },
    {
      label: "City",
    },
    {
      label: "Country",
    },
  ]
  return (
    <Space direction="vertical" size={"large"}>
      <span>
        <Typography.Title
          style={{ textAlign: "center", color: colorPrimary }}
          level={3}
        >
          Are you living in nice area?
        </Typography.Title>
        <Typography.Text>
          One thing I love about the later sunsets is the chance to go for a
          walk through the neighborhood woods before dinner
        </Typography.Text>
      </span>

      <Row gutter={UI_CONFIG.row_gutter}>
        {map(inputs, ({ label }) => (
          <Col xs={12} key={label}>
            <FormItem layout="vertical" label={label}>
              <Input placeholder={`Enter your ${label}`} size="large" />
            </FormItem>
          </Col>
        ))}
      </Row>
    </Space>
  )
}

export default AddressStep
