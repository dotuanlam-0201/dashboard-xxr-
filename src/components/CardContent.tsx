import { UI_CONFIG } from "#src/contants/ui.ts"
import { Card, CardProps, Typography } from "antd"
import { ReactNode } from "react"

interface ICardContentProps extends CardProps {
  header: ReactNode
}

const CardContent = (props: ICardContentProps) => {
  return (
    <Card {...props}>
      {typeof props.header === "string" ? (
        <Typography.Title
          style={{ marginBottom: UI_CONFIG.gutter }}
          level={5}
          type="secondary"
        >
          {props.header}
        </Typography.Title>
      ) : (
        props.header
      )}
      {props.children}
    </Card>
  )
}

export default CardContent
