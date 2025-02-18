import { UI_CONFIG } from "#src/contants/ui.ts"
import { getProfileOverviewDumpData } from "#src/pages/pages/ProfileOverview/config.tsx"
import Icon from "@ant-design/icons"
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/16/solid"
import { Card, Col, Row, Space, Tag, Typography } from "antd"
import { useMemo } from "react"
import { Line, LineChart, ResponsiveContainer } from "recharts"

const Statistic = () => {
  const PROFILE_OVERVIEW_DUMP_DATA = useMemo(
    () => getProfileOverviewDumpData(),
    []
  )

  return (
    <Row gutter={UI_CONFIG.row_gutter}>
      {PROFILE_OVERVIEW_DUMP_DATA.map(
        (
          {
            value,
            isIncrease,
            description,
            data,
            valueAffix,
            percentage,
            color,
          },
          i
        ) => (
          <Col key={i} xs={8}>
            <Card>
              <Space direction="vertical">
                <Typography.Title
                  style={{
                    marginBottom: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: UI_CONFIG.gutter / 2,
                  }}
                  level={2}
                >
                  {value}
                  {valueAffix}
                  <Tag color={isIncrease ? "success" : "error"}>
                    <Icon
                      component={isIncrease ? ArrowUpIcon : ArrowDownIcon}
                    />
                    {percentage} %
                  </Tag>
                </Typography.Title>
                <Typography.Text type="secondary">
                  {description}
                </Typography.Text>
              </Space>

              <ResponsiveContainer aspect={3} width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <Line
                    dot={false}
                    type="monotone"
                    dataKey="pv"
                    stroke={color}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        )
      )}
    </Row>
  )
}

export default Statistic
