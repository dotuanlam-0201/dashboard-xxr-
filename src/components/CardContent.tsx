import { UI_CONFIG } from "#src/contants/ui.ts"
import { Card, CardProps, Flex, Typography } from "antd"
import { ReactNode } from "react"

interface ICardContentProps extends CardProps {
  header: ReactNode
  headerRightSide?: ReactNode
}

const CardContent = (props: ICardContentProps) => {
  return (
    <Card {...props}>
      <Flex align="baseline" justify="space-between">
        <Typography.Title
          style={{ marginBottom: UI_CONFIG.gutter }}
          level={5}
          type="secondary"
        >
          {props.header}
        </Typography.Title>
        {props.headerRightSide}
      </Flex>
      {props.children}
    </Card>
  )
}

export default CardContent
