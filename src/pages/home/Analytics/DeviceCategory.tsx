import CardContent from "#src/components/CardContent.tsx"
import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import Icon, {
  DesktopOutlined,
  MobileOutlined,
  TabletOutlined,
} from "@ant-design/icons"
import { TvIcon } from "@heroicons/react/16/solid"
import { Flex, Space, Typography } from "antd"

const DeviceCategory = () => {
  const {
    token: { colorPrimary, borderRadiusLG, colorBgLayout },
  } = useConfigTheme()
  const devices = [
    {
      name: "Mobile",
      icon: <MobileOutlined style={{ color: colorPrimary }} />,
      percentage: 96.42,
    },
    {
      name: "Desktop",
      icon: <DesktopOutlined style={{ color: colorPrimary }} />,
      percentage: 2.76,
    },
    {
      name: "Tablet",
      icon: <TabletOutlined style={{ color: colorPrimary }} />,
      percentage: 0.82,
    },
    {
      name: "TV",
      icon: <Icon style={{ color: colorPrimary }} component={TvIcon} />,
      percentage: 12.3,
    },
  ]
  return (
    <CardContent header="Device Category">
      <Space style={{ width: "100%" }} direction="vertical" size={40}>
        {devices.map(({ name, icon, percentage }) => (
          <Flex align="center" justify="space-between">
            <Flex gap={UI_CONFIG.gutter} align="center">
              <span
                style={{
                  background: colorBgLayout,
                  borderRadius: borderRadiusLG,
                  padding: 16,
                }}
              >
                {icon}
              </span>
              <Typography.Title level={5}>{name}</Typography.Title>
            </Flex>
            <Typography.Text>{percentage}%</Typography.Text>
          </Flex>
        ))}
      </Space>
    </CardContent>
  )
}

export default DeviceCategory
