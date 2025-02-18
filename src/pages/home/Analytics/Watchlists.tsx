import CardContent from "#src/components/CardContent.tsx"
import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { WATCH_LISTS_DUMP_DATA } from "#src/pages/home/Analytics/config.ts"
import { Segmented, Tooltip } from "antd"
import { get } from "lodash"
import { useState } from "react"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

const WatchLists = () => {
  const {
    token: { colorSuccess, colorWarning },
  } = useConfigTheme()
  const [filter, setFilter] = useState("Daily")

  return (
    <CardContent
      headerRightSide={
        <Segmented<string>
          options={["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]}
          onChange={(value) => {
            setFilter(value)
          }}
        />
      }
      header={"Watchlists"}
    >
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={400}
          height={500}
          data={get(WATCH_LISTS_DUMP_DATA, filter)}
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
          <Line type="monotone" dataKey="pv" stroke={colorSuccess} />
          <Line type="monotone" dataKey="uv" stroke={colorWarning} />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  )
}

export default WatchLists
