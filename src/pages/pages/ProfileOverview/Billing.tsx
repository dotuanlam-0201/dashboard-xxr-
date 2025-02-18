import iconMembers from "#src/assets/project_members.svg"
import iconVisa from "#src/assets/visa.svg"
import { UI_CONFIG } from "#src/contants/ui.ts"
import MainLayout from "#src/layout/index.tsx"
import {
  BILLING_HISTORY_DUMP_DATA,
  TypeBillingHistory,
} from "#src/pages/pages/ProfileOverview/config.tsx"
import Icon from "@ant-design/icons"
import { Cog6ToothIcon } from "@heroicons/react/16/solid"
import {
  Button,
  Card,
  Col,
  Flex,
  Image,
  Row,
  Space,
  Table,
  Tag,
  Typography,
} from "antd"
import { ColumnsType } from "antd/es/table"

const Billing = () => {
  return (
    <MainLayout>
      <Row gutter={UI_CONFIG.row_gutter}>
        <Col xs={24} lg={12}>
          <BasicPlan />
        </Col>
        <Col xs={24} lg={12}>
          <PaymentMethod />
        </Col>
        <Col xs={24}>
          <BillingHistory />
        </Col>
      </Row>
    </MainLayout>
  )
}

export default Billing

const BasicPlan = () => {
  return (
    <Card style={{ height: "100%" }}>
      <Space direction="vertical" size={"large"}>
        <Flex justify="space-between" align="center">
          <span>
            <Typography.Title level={3}>Basic plan</Typography.Title>
            <Typography.Text type="secondary">
              Our most popular plan for small teams.
            </Typography.Text>
          </span>

          <Typography.Title level={3}>
            $20 / <Typography.Text type="secondary"> month</Typography.Text>
          </Typography.Title>
        </Flex>

        <Image width={200} src={iconMembers} />
      </Space>
    </Card>
  )
}

const PaymentMethod = () => {
  return (
    <Card>
      <Typography.Title level={3}>Payment method</Typography.Title>
      <Typography.Text type="secondary">
        Change how you pay for your plan.
      </Typography.Text>

      <Card style={{ marginTop: UI_CONFIG.gutter }}>
        <Flex justify="space-between" align="center">
          <Space size={"large"}>
            <Image height={40} src={iconVisa} />
            <span>
              <Typography.Title level={5}>Visa ending in 6789</Typography.Title>
              <Typography.Text style={{ fontSize: 10 }} type="secondary">
                Expiry 01/2023
              </Typography.Text>
            </span>
          </Space>
          <Button type="primary">
            <Icon component={Cog6ToothIcon} /> Edit
          </Button>
        </Flex>
      </Card>
    </Card>
  )
}

const BillingHistory = () => {
  const columns = [
    {
      key: "billing",
      title: "Billing",
      render(record: TypeBillingHistory) {
        return (
          <Typography.Text>
            {record.billing} <Tag>{record.isPaid ? "Paid" : "Unpaid"}</Tag>
          </Typography.Text>
        )
      },
    },
    {
      key: "billing_date",
      title: "Billing Date",
      render(record: TypeBillingHistory) {
        return record.billing_date
      },
    },
    {
      key: "amount",
      title: "Amount",
      render(record: TypeBillingHistory) {
        return record.amount
      },
    },
    {
      key: "plan",
      title: "Plan",
      render(record: TypeBillingHistory) {
        return record.plan
      },
    },
    {
      key: "users",
      title: "Users",
      render(record: TypeBillingHistory) {
        return record.users + " " + "Users"
      },
    },
  ] as ColumnsType<any>
  return (
    <Card>
      <Space style={{ marginBottom: UI_CONFIG.gutter }} direction="vertical">
        <Typography.Title level={3}>Billing history</Typography.Title>
        <Typography.Text type="secondary">
          Download your previous plan receipts and usage details.
        </Typography.Text>
      </Space>
      <Table dataSource={BILLING_HISTORY_DUMP_DATA} columns={columns} />
    </Card>
  )
}
