import CardContent from "#src/components/CardContent.tsx"
import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { IMPRESSION_DUMP_DATA } from "#src/pages/home/Dashboard/config.ts"
import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts"

const Impression = () => {
  const {
    token: { colorPrimary, colorSuccess },
  } = useConfigTheme()

  return (
    <CardContent header="Impression">
      <ResponsiveContainer aspect={1} width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={IMPRESSION_DUMP_DATA}
          margin={{
            top: UI_CONFIG.gutter,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar
            radius={[UI_CONFIG.gutter, UI_CONFIG.gutter, 0, 0]}
            dataKey="pv"
            fill={colorPrimary}
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            radius={[UI_CONFIG.gutter, UI_CONFIG.gutter, 0, 0]}
            dataKey="uv"
            fill={colorSuccess}
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  )
}

export default Impression
