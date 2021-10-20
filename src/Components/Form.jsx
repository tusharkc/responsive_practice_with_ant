import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Modal } from "antd";

function FormComponent() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };
  const onSubmit = (values) => {
    if (email || phoneNumber === true) {
      setIsModalVisible2(true);
    }
  };

  const handleOk = () => {
    setIsModalVisible2(false);
  };

  const handleCancel = () => {
    setIsModalVisible2(false);
  };

  return (
    <div>
      <Form
        name="nest-messages"
        onFinish={onSubmit}
        validateMessages={validateMessages}
        layout="vertical"
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 200,
        }}
      >
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input
            style={{ border: "1px solid grey", width: 300 }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="Phone Number"
          label="Phone Number"
          rules={[{ required: true, min: 10 }]}
        >
          <Input
            style={{
              width: 300,
              border: error === true ? "1px solid red" : "1px solid grey",
            }}
            onChange={(e) => {
              if (e.target.value.length < 10) {
                setError(true);
              } else {
                setPhoneNumber(e.target.value);
                setError(false);
              }
            }}
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          onClick={onSubmit}
          style={{ width: 300 }}
        >
          Submit
        </Button>

        <Modal
          visible={isModalVisible2}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            email and phone number is {email} and {phoneNumber}
          </p>
        </Modal>
      </Form>
    </div>
  );
}

export default FormComponent;
