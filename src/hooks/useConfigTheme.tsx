import { theme } from "antd"

export const useConfigTheme = () => {
  const { token } = theme.useToken()
  return { token }
}
