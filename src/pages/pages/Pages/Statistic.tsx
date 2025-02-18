import CardContent from "#src/components/CardContent.tsx"
import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { SALES_FUNNEL_DUMP_DATA } from "#src/pages/home/Analytics/config.ts"
import { alpha } from "#src/utilities/alpha.ts"
import Icon from "@ant-design/icons"
import { ChevronDownIcon } from "@heroicons/react/16/solid"
import { Button, Dropdown, Tooltip, Typography } from "antd"
import { get, upperFirst } from "lodash"
import { useState } from "react"
import {
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

const ReportStatistic = () => {
  const [filter, setFilter] = useState("month" as string)
  const {
    token: { colorPrimary, colorInfo },
  } = useConfigTheme()
  return (
    <CardContent
      header={"Statistics"}
      headerRightSide={
        <Dropdown
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
            {upperFirst(filter)} <Icon component={ChevronDownIcon} />
          </Button>
        </Dropdown>
      }
    >
      <Typography.Title level={4}>Sales closed</Typography.Title>

      <ResponsiveContainer aspect={2} width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={get(SALES_FUNNEL_DUMP_DATA, filter)}
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
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} stroke={alpha(colorPrimary, 0.5)} />
          <Bar
            radius={UI_CONFIG.gutter * 2}
            dataKey="pv"
            fill={alpha(colorPrimary, 0.5)}
          />
          <Bar
            radius={UI_CONFIG.gutter * 2}
            dataKey="uv"
            fill={alpha(colorInfo, 0.5)}
          />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  )
}

export default ReportStatistic
