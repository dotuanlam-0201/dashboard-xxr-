import logo from "#src/assets/logo.svg"
import { PathRoute } from "#src/contants/route.ts"
import { SearchOutlined } from "@ant-design/icons"
import {
  ArrowLeftEndOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
  HomeIcon,
} from "@heroicons/react/16/solid"
import { Button, Input, Layout, Menu, MenuProps, Space, Typography } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import MenuItem from "antd/es/menu/MenuItem"
import { ReactNode, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

type MenuItem = Required<MenuProps>["items"][number]

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const items: MenuItem[] = [
    {
      key: "home",
      icon: <HomeIcon style={{ width: 18 }} />,
      label: "Home",
      children: [
        {
          key: PathRoute.dashboard,
          label: "Dashboard",
        },
        {
          key: PathRoute.analytic,
          label: "Analytics",
        },
      ],
    },
  ]

  const renderButtonToggleMenu = () => {
    return (
      <center>
        <Button type="default" onClick={toggleCollapsed}>
          {collapsed ? (
            <ArrowRightEndOnRectangleIcon style={{ width: 18 }} />
          ) : (
            <ArrowLeftEndOnRectangleIcon style={{ width: 18 }} />
          )}
        </Button>
      </center>
    )
  }

  const onSelectMenu = (i: MenuInfo) => {
    navigate(i.key)
  }
  const renderLogo = () => {
    return (
      <center>
        <Link to={PathRoute.dashboard}>
          <img width={collapsed ? 40 : 80} src={logo} />
        </Link>
      </center>
    )
  }
  return (
    <Layout
      style={{
        minHeight: "100%",
      }}
    >
      <Sider
        style={{ paddingTop: 32 }}
        collapsed={collapsed}
        theme="light"
        width={218}
      >
        <Space size={"large"} style={{ width: "100%" }} direction="vertical">
          {renderLogo()}
          <Menu
            onClick={onSelectMenu}
            defaultSelectedKeys={[PathRoute.dashboard]}
            defaultOpenKeys={["home"]}
            mode="inline"
            theme="light"
            inlineCollapsed={collapsed}
            items={items}
          />
          {renderButtonToggleMenu()}
        </Space>
      </Sider>
      <Content style={{ background: "#F4F5F9" }}>
        <Header
          style={{
            background: "inherit",
            margin: "0 auto",
            maxWidth: 1440,
            minWidth: 1200,
            padding: "24px 0 0 0",
            marginBottom: 28,
            paddingInline: 16,
          }}
        >
          <Space size={100} align="center">
            <Typography.Title
              style={{ marginBottom: 0 }}
              level={2}
              type="secondary"
            >
              Dashboard
            </Typography.Title>
            <Input
              style={{ width: 400 }}
              allowClear
              width={200}
              suffix={<SearchOutlined />}
              placeholder="Search anything here... "
              size="large"
            />
          </Space>
        </Header>
        <div
          style={{
            margin: "0 auto",
            maxWidth: 1440,
            minWidth: 1200,
            paddingInline: 16,
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  )
}

export default MainLayout
