import CardContent from "#src/components/CardContent.tsx"
import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { SALES_FUNNEL_DUMP_DATA } from "#src/pages/home/Analytics/config.ts"
import { DownOutlined } from "@ant-design/icons"
import { Button, Dropdown, Tooltip } from "antd"
import { get, upperFirst } from "lodash"
import { useState } from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

const SalesFunnel = () => {
  const [filter, setFilter] = useState("month" as string)
  const {
    token: { colorPrimary },
  } = useConfigTheme()
  return (
    <CardContent
      headerRightSide={
        <Dropdown
          arrow
          menu={{
            items: [
              {
                key: "day",
                label: "Day",
              },
              {
                key: "month",
                label: "Month",
              },
              {
                key: "quarter",
                label: "Quarter",
              },
              {
                key: "year",
                label: "Year",
              },
            ],
            onClick: (e) => setFilter(e.key),
          }}
        >
          <Button type="primary">
            {upperFirst(filter)}
            <DownOutlined />
          </Button>
        </Dropdown>
      }
      header={"Sales Funnel"}
    >
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={400}
          height={500}
          data={get(SALES_FUNNEL_DUMP_DATA, filter)}
          syncId="anyId"
          margin={{
            top: UI_CONFIG.gutter,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke={colorPrimary} />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  )
}

export default SalesFunnel
