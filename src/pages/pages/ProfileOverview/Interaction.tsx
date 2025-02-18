import CardContent from "#src/components/CardContent.tsx"
import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { FOLLOWERS_DUMP_DATA } from "#src/pages/pages/ProfileOverview/config.tsx"
import { Tooltip } from "antd"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

const Interaction = () => {
  const {
    token: { colorSuccess, colorError, colorPrimary },
  } = useConfigTheme()
  return (
    <CardContent header="Interaction">
      <ResponsiveContainer aspect={2} width="100%" height={"100%"}>
        <LineChart
          width={500}
          height={500}
          data={FOLLOWERS_DUMP_DATA}
          margin={{
            top: UI_CONFIG.gutter,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            dot={false}
            type="monotone"
            dataKey="pv"
            stroke={colorPrimary}
            strokeDasharray="5 5"
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="amt"
            stroke={colorSuccess}
            strokeDasharray="5 5"
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="uv"
            stroke={colorError}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  )
}

export default Interaction
