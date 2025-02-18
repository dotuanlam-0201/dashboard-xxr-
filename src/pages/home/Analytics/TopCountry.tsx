import CardContent from "#src/components/CardContent.tsx"
import { UI_CONFIG } from "#src/contants/ui.ts"
import Icon from "@ant-design/icons"
import { Flex, Space, Typography } from "antd"
import { DE, ES, PK, US } from "country-flag-icons/react/1x1"

const TopCountries = () => {
  const countries = [
    {
      icon: (
        <Icon
          style={{ fontSize: 24 }}
          component={US as React.ComponentType<any>}
        />
      ),
      name: "United State",
      percentage: 54,
    },
    {
      icon: (
        <Icon
          style={{ fontSize: 24 }}
          component={PK as React.ComponentType<any>}
        />
      ),
      name: "Pakistan",
      percentage: 32,
    },
    {
      icon: (
        <Icon
          style={{ fontSize: 24 }}
          component={DE as React.ComponentType<any>}
        />
      ),
      name: "Germany",
      percentage: 27,
    },
    {
      icon: (
        <Icon
          style={{ fontSize: 24 }}
          component={ES as React.ComponentType<any>}
        />
      ),
      name: "Spain",
      percentage: 25,
    },
  ]
  return (
    <CardContent header="Top Countries">
      <Space style={{ width: "100%" }} direction="vertical" size={40}>
        {countries.map(({ name, icon, percentage }) => (
          <Flex align="center" justify="space-between">
            <Flex gap={UI_CONFIG.gutter} align="center">
              {icon}
              <Typography.Title level={5}>{name}</Typography.Title>
            </Flex>
            <Typography.Text>{percentage}%</Typography.Text>
          </Flex>
        ))}
      </Space>
    </CardContent>
  )
}

export default TopCountries
