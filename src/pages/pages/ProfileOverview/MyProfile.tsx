import imageUser from "#src/assets/dotuanlam.jpeg"
import CardContent from "#src/components/CardContent.tsx"
import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { MY_PROFILE_HASHTAGS_DUMP_DATA } from "#src/pages/pages/ProfileOverview/config.tsx"
import { alpha } from "#src/utilities/alpha.ts"
import Icon from "@ant-design/icons"
import { ChevronDoubleDownIcon, Cog6ToothIcon } from "@heroicons/react/16/solid"
import { Avatar, Flex, Slider, Space, Typography } from "antd"
import { map } from "lodash"

const MyProfile = () => {
  const {
    token: { colorSuccess, colorError, colorPrimary },
  } = useConfigTheme()
  return (
    <CardContent header="My profile">
      <Space size={UI_CONFIG.gutter * 2} direction="vertical">
        <center>
          <Space direction="vertical">
            <Avatar size={100} src={imageUser} />
            <Typography.Title style={{ color: colorPrimary }} level={3}>
              Do Tuan Lam
            </Typography.Title>
          </Space>
        </center>

        <div>
          <Typography.Title level={4}>VIP Training Course</Typography.Title>
          <Slider tooltip={{ open: true }} autoFocus value={90} dots={false} />
        </div>

        <Flex align="center" justify="space-between">
          <Typography.Title level={4}>Hashtags sets</Typography.Title>
          <Icon
            style={{
              background: alpha(colorPrimary, 0.5),
              padding: 12,
              borderRadius: UI_CONFIG.gutter / 3,
              color: colorPrimary,
            }}
            component={Cog6ToothIcon}
          />
        </Flex>

        {map(MY_PROFILE_HASHTAGS_DUMP_DATA, ({ name, tags }, i) => (
          <Flex justify="space-between" align="center" key={i}>
            <Space direction="vertical">
              <Typography.Text>{name}</Typography.Text>
              <Space direction="horizontal">
                {map(tags, (tag, i) => (
                  <Typography.Text
                    style={{ fontSize: 10 }}
                    type="secondary"
                    key={i}
                  >
                    #{tag}
                  </Typography.Text>
                ))}
              </Space>
            </Space>

            <Icon component={ChevronDoubleDownIcon} />
          </Flex>
        ))}
      </Space>
    </CardContent>
  )
}

export default MyProfile
