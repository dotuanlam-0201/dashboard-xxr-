import logo from "#src/assets/logo.svg"
import { PathRoute } from "#src/contants/route.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { SearchOutlined } from "@ant-design/icons"
import {
  ArrowLeftEndOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
  DocumentTextIcon,
  HomeIcon,
} from "@heroicons/react/16/solid"
import { Button, Input, Layout, Menu, Space, Typography } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import { ItemType } from "antd/es/menu/interface"
import { get } from "lodash"
import { ReactNode, useMemo, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

// type MenuItem = Required<MenuProps>["items"][number]

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const {
    token: { colorPrimary },
  } = useConfigTheme()

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const items = [
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
          key: PathRoute.analytics,
          label: "Analytics",
        },
      ],
    },
    {
      key: "pages",
      icon: <DocumentTextIcon style={{ width: 18 }} />,
      label: "Pages",
      children: [
        {
          key: PathRoute.profile_overview,
          label: "Profile Overview",
        },
        {
          key: PathRoute.user_report,
          label: "User Report",
        },
        {
          key: PathRoute.project,
          label: "All Projects",
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

  const onSelectMenu = (i: any) => {
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

  const title = useMemo(() => {
    let selectMenu = {} as ItemType
    for (let i = 0; i < items.length; i++) {
      if (items[i].key === location.pathname) {
        selectMenu = items[i]
        break
      } else {
        for (let j = 0; j < items[i].children.length; j++) {
          if (items[i].children[j].key === location.pathname) {
            selectMenu = items[i].children[j]
            break
          }
        }
      }
    }
    return get(selectMenu, "label")
  }, [location])

  return (
    <Layout
      style={{
        minHeight: "100%",
        minWidth: 1200,
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
            style={{ fontWeight: 600 }}
            onClick={onSelectMenu}
            defaultSelectedKeys={[PathRoute.dashboard]}
            defaultOpenKeys={["home"]}
            selectedKeys={[location.pathname]}
            mode="inline"
            theme="light"
            inlineCollapsed={collapsed}
            items={items}
          />
          {renderButtonToggleMenu()}
        </Space>
      </Sider>
      <Content style={{ background: "#F4F5F9", minWidth: 1200 }}>
        <Header
          style={{
            background: "inherit",
            margin: "0 auto",
            maxWidth: 1440,
            padding: "24px 0 0 0",
            marginBottom: 28,
            paddingInline: 16,
          }}
        >
          <Space size={100} align="center">
            <Typography.Title
              style={{ marginBottom: 0, color: colorPrimary }}
              level={2}
            >
              {title}
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
            paddingInline: 16,
            paddingBottom: 200,
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  )
}

export default MainLayout
