import imageUser from "#src/assets/dotuanlam.jpeg"
import google from "#src/assets/google.svg"
import { UI_CONFIG } from "#src/contants/ui.ts"
import MainLayout from "#src/layout/index.tsx"
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons"

import {
  Avatar,
  Button,
  Card,
  Col,
  DatePicker,
  Flex,
  GetProp,
  Image,
  Input,
  message,
  Row,
  Space,
  Typography,
  Upload,
  UploadProps,
} from "antd"
import FormItem from "antd/es/form/FormItem"
import TextArea from "antd/es/input/TextArea"
import { map } from "lodash"
import { useState } from "react"

const Setting = () => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>()

  const forms = [
    {
      label: "Full Name",
      input: <Input placeholder="Enter..." size="large" />,
    },
    {
      label: "Last Name",
      input: <Input placeholder="Enter..." size="large" />,
    },
    {
      label: "Email Address",
      input: <Input placeholder="Enter..." size="large" />,
    },
    {
      label: "Username",
      input: <Input placeholder="Enter..." size="large" />,
    },
    {
      label: "Phone Number",
      input: <Input placeholder="Enter..." size="large" />,
    },
    {
      label: "City",
      input: <Input placeholder="Enter..." size="large" />,
    },
    {
      label: "Country Name",
      input: <Input placeholder="Enter..." size="large" />,
    },
    {
      label: "Zip code",
      input: <Input placeholder="Enter..." size="large" />,
    },
    {
      label: "Bio",
      input: <TextArea placeholder="Enter..." rows={10} size="large" />,
    },
    {
      label: "Date of birth",
      input: <DatePicker size="large" />,
    },
  ]

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true)
      return
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  )

  return (
    <MainLayout>
      <Flex style={{ marginBottom: UI_CONFIG.gutter }} justify="space-between">
        <Space direction="vertical" style={{ width: "fit-content" }}>
          <Typography.Title level={2}>Setting Details</Typography.Title>
          <Typography.Text type="secondary">
            Update your photo and personal details here.
          </Typography.Text>
        </Space>
        <Space style={{ width: "fit-content" }}>
          <Button>Cancel</Button>
          <Button type="primary">Save</Button>
        </Space>
      </Flex>

      <Row wrap={false} gutter={UI_CONFIG.row_gutter}>
        <Col xs={12} lg={16} xl={18}>
          <Card title={"Personal information"}>
            <Row gutter={UI_CONFIG.row_gutter}>
              {map(forms, ({ label, input }, i) => (
                <Col xs={24} md={12}>
                  <FormItem key={i} layout="vertical" label={label}>
                    {input}
                  </FormItem>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>

        <Col flex={1}>
          <Space direction="vertical" size={"large"}>
            <Card title="Your Photo">
              <Space direction="vertical" size={"large"}>
                <Space>
                  <Avatar src={imageUser} size={40} />
                  <span>
                    <Typography.Title level={5}>Do Tuan Lam</Typography.Title>
                    <Typography.Text type="secondary">
                      Front end Developer
                    </Typography.Text>
                  </span>
                </Space>

                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{ width: "100%" }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Space>
            </Card>

            <Card>
              <Space direction="vertical" size={"middle"}>
                <Flex align="center" justify="space-between">
                  <Image src={google} />
                  <Button type="primary">Connect</Button>
                </Flex>

                <Typography.Text>
                  Use Google to sign in to your account.{" "}
                  <a>Click here to learn more.</a>
                </Typography.Text>
              </Space>
            </Card>
          </Space>
        </Col>
      </Row>
    </MainLayout>
  )
}

export default Setting

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0]

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener("load", () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png"
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!")
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!")
  }
  return isJpgOrPng && isLt2M
}
