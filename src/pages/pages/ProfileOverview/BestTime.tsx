import CardContent from "#src/components/CardContent.tsx"
import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { BEST_TIME_DUMP_DATA } from "#src/pages/pages/ProfileOverview/config.tsx"
import { Segmented } from "antd"
import { get } from "lodash"
import { useState } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts"

const BestTime = () => {
  const [filter, setFilter] = useState("Days" as string)
  const {
    token: { colorPrimary },
  } = useConfigTheme()
  return (
    <CardContent
      style={{ height: "100%" }}
      headerRightSide={
        <Segmented<string>
          options={["Days", "Hours"]}
          onChange={(value) => {
            setFilter(value)
          }}
        />
      }
      header={"Best Time"}
    >
      <ResponsiveContainer aspect={2} width="100%" height="100%">
        <BarChart
          width={500}
          height={500}
          data={get(BEST_TIME_DUMP_DATA, filter)}
        >
          <Bar
            radius={[UI_CONFIG.gutter, UI_CONFIG.gutter, 0, 0]}
            dataKey="uv"
            fill={colorPrimary}
          />
          <XAxis dataKey={"name"} />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  )
}

export default BestTime
