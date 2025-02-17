import CardContent from "#src/components/CardContent.tsx"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { Button, Space, Typography } from "antd"

const EarnThisMonth = () => {
  const {
    token: { colorPrimary, colorSuccess },
  } = useConfigTheme()
  return (
    <CardContent header="Your earning this month">
      <Space direction="vertical" size={"large"}>
        <Typography.Title
          style={{ color: colorPrimary, fontSize: 64, marginBottom: 0 }}
        >
          735.2$
        </Typography.Title>
        <Typography.Title style={{ color: colorSuccess }} level={5}>
          Update your payout method in Setting
        </Typography.Title>
        <Button type="primary" size="large" style={{ width: "100%" }}>
          Withdraw All Earnings
        </Button>
      </Space>
    </CardContent>
  )
}

export default EarnThisMonth
