import { login, signUp } from '@/api';
import { Button, Modal, Checkbox, Form, Input, message } from 'antd';
import React, { useState } from 'react';
const SignUp = ({ isOpen, close }) => {
  const [form] = Form.useForm();
  const showModal = () => {
    close(true);
  };
  const handleOk = () => {
    console.log(form);

    form.submit();
  };
  const handleCancel = () => {
    close(false);
  };
  const onFinish = async (values) => {
    console.log(values);

    const response = await signUp(values);

	if (response.ok) {
        console.log(response);
	} else if (response.status < 500) {
        message.error(response.errors);
	} else {
		return ['An error occurred. Please try again.'];
	}
    close(false);
  };
  return (
    <>
      <Modal forceRender okText={'Submit'} title="Sign Up Twitter" open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          form={form}
          name="basic"
          labelCol={{
        span: 6,
      }}
          wrapperCol={{
        span: 16,
      }}
          initialValues={{
        remember: true,
      }}
          onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default SignUp;