import CardContent from "#src/components/CardContent.tsx"
import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { alpha } from "#src/utilities/alpha.ts"
import { Tooltip, Typography } from "antd"
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
} from "recharts"

const ReportPaymentLoanIncome = ({ label }: { label: string }) => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]
  const {
    token: { colorPrimary },
  } = useConfigTheme()
  return (
    <CardContent header={label}>
      <Typography.Title level={4}>$7,124.80</Typography.Title>

      <ResponsiveContainer aspect={1.5} width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: UI_CONFIG.gutter,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" stackId="a" fill={colorPrimary} />
          <Bar
            radius={[UI_CONFIG.gutter, UI_CONFIG.gutter, 0, 0]}
            dataKey="uv"
            stackId="a"
            fill={alpha(colorPrimary, 0.5)}
          />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  )
}

export default ReportPaymentLoanIncome
