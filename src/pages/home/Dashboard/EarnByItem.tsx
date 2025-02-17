import CardContent from "#src/components/CardContent.tsx"
import { LIST_EARNING_BY_ITEMS } from "#src/pages/home/Dashboard/config.ts"
import { ArrowRightOutlined } from "@ant-design/icons"
import { Space, Typography } from "antd"

const EarnByItem = () => {
  return (
    <CardContent header="Earnings by item ">
      <Space direction="vertical" size={"middle"}>
        {LIST_EARNING_BY_ITEMS.map(({ icon, title, subtitle }, i) => (
          <Space size={"large"} align="center" key={i}>
            <img src={icon} />
            <div>
              <Typography.Title
                style={{ marginBottom: 0 }}
                className="mb-0"
                level={5}
              >
                {title}
              </Typography.Title>
              <Typography.Text type="secondary">{subtitle}</Typography.Text>
            </div>
            <ArrowRightOutlined />
          </Space>
        ))}
      </Space>
    </CardContent>
  )
}

export default EarnByItem
