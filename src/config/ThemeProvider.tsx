import { ConfigProvider } from "antd"
import { ReactNode } from "react"

const ThemeProvider = (props: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#6E39CB",
          borderRadius: 12,
        },
        components: {
          Typography: {
            colorPrimary: "#6E39CB",
          },
        },
      }}
    >
      {props.children}
    </ConfigProvider>
  )
}

export default ThemeProvider
