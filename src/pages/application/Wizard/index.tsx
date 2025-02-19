import { UI_CONFIG } from "#src/contants/ui.ts"
import MainLayout from "#src/layout/index.tsx"
import AboutStep from "#src/pages/application/Wizard/AboutStep.tsx"
import AccountStep from "#src/pages/application/Wizard/AccountStep.tsx"
import AddressStep from "#src/pages/application/Wizard/AddressStep.tsx"
import Icon from "@ant-design/icons"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid"
import { Button, Card, Flex, Space, Steps } from "antd"
import { useState } from "react"

const WizardPage = () => {
  const [step, setStep] = useState(0)
  console.log("🚀 ~ WizardPage ~ step:", step)

  const renderForm = () => {
    switch (step) {
      case 0:
        return <AboutStep />
      case 1:
        return <AccountStep />
      case 2:
        return <AddressStep />
      default:
        return <AboutStep />
    }
  }

  const handleNext = () => {
    setStep((prev) => (prev < 2 ? prev + 1 : prev))
  }
  const handlePrevious = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <MainLayout>
      <Space
        style={{ width: 800, margin: "0 auto" }}
        direction="vertical"
        size={UI_CONFIG.gutter}
      >
        <Steps
          current={step}
          onChange={(e) => setStep(e)}
          size="small"
          items={[
            {
              title: "About",
            },
            {
              title: "Account",
            },
            {
              title: "Address",
            },
          ]}
        />
        <Card>
          <Space direction="vertical" size={UI_CONFIG.gutter}>
            {renderForm()}
            <Flex justify="space-between">
              <Button disabled={step === 0} onClick={handlePrevious}>
                <Icon component={ChevronLeftIcon} /> Previous
              </Button>
              <Button onClick={handleNext} type="primary">
                Next <Icon component={ChevronRightIcon} />
              </Button>
            </Flex>
          </Space>
        </Card>
      </Space>
    </MainLayout>
  )
}

export default WizardPage
