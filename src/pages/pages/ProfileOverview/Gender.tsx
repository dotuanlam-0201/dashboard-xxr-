import CardContent from "#src/components/CardContent.tsx"
import { getGenderDumpData } from "#src/pages/pages/ProfileOverview/config.tsx"
import { Badge, Flex, Space, Typography } from "antd"
import { useMemo } from "react"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const Gender = () => {
  const data = useMemo(() => getGenderDumpData(), [])

  return (
    <CardContent header="Gender">
      <ResponsiveContainer aspect={2} width="100%" height="100%">
        <PieChart>
          <Pie
            cornerRadius={100}
            data={data}
            cx={300}
            cy={300}
            startAngle={180}
            endAngle={0}
            innerRadius={250}
            outerRadius={300}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <Flex>
        {data.map(({ name, color }, i) => (
          <Space key={i} size={"small"} direction="horizontal">
            <Badge
              dot
              offset={[30, 10]}
              style={{ background: color, width: 20, height: 20 }}
            >
              <Typography.Text>{name}</Typography.Text>
            </Badge>
          </Space>
        ))}
      </Flex>
    </CardContent>
  )
}

export default Gender
