import { UI_CONFIG } from "#src/contants/ui.ts"
import { useConfigTheme } from "#src/hooks/useConfigTheme.tsx"
import { ACTIVE_USER_DUMP_DATA } from "#src/pages/home/Dashboard/config.ts"
import { Badge, Card, Flex, Typography } from "antd"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const SaleByAge = () => {
  const { token } = useConfigTheme()
  return (
    <Card>
      <Flex justify="space-between">
        <Typography.Title level={5} color="secondary">
          Active users right now
        </Typography.Title>

        <Badge style={{ background: token.colorPrimary }} dot>
          <Typography.Text style={{ color: token.colorPrimary }}>
            Sales
          </Typography.Text>
        </Badge>
      </Flex>

      <ResponsiveContainer width="100%" aspect={3} height="100%">
        <LineChart
          width={500}
          height={300}
          data={ACTIVE_USER_DUMP_DATA}
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
          <Line
            type="monotone"
            dataKey="pv"
            stroke={token.colorPrimary}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke={token.colorSuccess} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default SaleByAge
