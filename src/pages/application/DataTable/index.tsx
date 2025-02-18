import MainLayout from "#src/layout/index.tsx"
import { DATA_TABLES_DUMP_DATA } from "#src/pages/application/DataTable/config.ts"
import { Table } from "antd"

const DataTable = () => {
  return (
    <MainLayout>
      <Table
        dataSource={DATA_TABLES_DUMP_DATA}
        columns={[
          {
            key: "name",
            title: "Name",
            render(record) {
              return record.name
            },
          },
          {
            key: "position",
            title: "Position",
            render(record) {
              return record.position
            },
          },
          {
            key: "age",
            title: "Age",
            render(record) {
              return record.age
            },
          },
          {
            key: "office",
            title: "Office",
            render(record) {
              return record.office
            },
          },
          {
            key: "salary",
            title: "Salary",
            render(record) {
              return record.salary
            },
          },
          {
            key: "date",
            title: "Start date",
            render(record) {
              return record.startDate
            },
          },
        ]}
      />
    </MainLayout>
  )
}

export default DataTable
