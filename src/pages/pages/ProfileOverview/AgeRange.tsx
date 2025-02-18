import CardContent from "#src/components/CardContent.tsx"
import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { GENDER_RANGE_DUMP_DATA } from "#src/pages/pages/ProfileOverview/config.tsx"
import { alpha } from "#src/utilities/alpha.ts"
import { Segmented, Tooltip } from "antd"
import { get } from "lodash"
import { useState } from "react"
import { Bar, BarChart, Rectangle, ResponsiveContainer, XAxis } from "recharts"

const AgeRange = () => {
  const [filter, setFilter] = useState("All" as string)
  const {
    token: { colorPrimary },
  } = useConfigTheme()
  return (
    <CardContent
      headerRightSide={
        <Segmented<string>
          options={["All", "Men", "Women"]}
          onChange={(value) => {
            setFilter(value)
          }}
        />
      }
      header={"Age Rage"}
    >
      <ResponsiveContainer aspect={1.3} width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={get(GENDER_RANGE_DUMP_DATA, filter)}
          margin={{
            top: UI_CONFIG.gutter,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis strokeOpacity={0} dataKey="name" />
          <Tooltip />
          <Bar
            radius={80}
            dataKey="pv"
            fill={colorPrimary}
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            radius={80}
            dataKey="uv"
            fill={alpha(colorPrimary, 0.5)}
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  )
}

export default AgeRange
