import React, { Component } from "react";
import { Form, Input, Button, Radio, InputNumber } from "antd";
import ImageController from "../../components/ImageController/ImageController";

const PosterController = (props) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;

  return (
    <div className="product-managment-container">
      <h1 className="big-title">General information</h1>
      <Form form={form}>
        <Form.Item label="Poster name">
          <Input placeholder="Input title" size="large" width="100" />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea
            placeholder="Descritin about poster"
            autoSize={{ minRows: 4, maxRows: 8 }}
          />
        </Form.Item>
        <Form.Item label="Artist">
          <Input placeholder="Artist name" size="large" width="100" />
        </Form.Item>
      </Form>
      <h2 className="big-title" style={{ margin: "20px 0" }}>
        Sizes Amount
      </h2>
      <Form layout="inline">
        <Form.Item label="S">
          <InputNumber defaultValue={0} min={0} />
        </Form.Item>
        <Form.Item label="M">
          <InputNumber defaultValue={0} min={0} />
        </Form.Item>
        <Form.Item label="L">
          <InputNumber defaultValue={0} min={0} />
        </Form.Item>
      </Form>
      <h2 className="big-title" style={{ margin: "20px 0" }}>
        Upload Photos
      </h2>
      <Form>
        <ImageController />
      </Form>
      <h2 className="big-title" style={{ margin: "20px 0" }}>
        Price
      </h2>
      <Form>
        <Form.Item label="Poster Price">
          <InputNumber
            defaultValue={80}
            min={40}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>
      </Form>
      <Button type="primary" size="large">
          Submit
      </Button>
    </div>
  );
};

export default PosterController;
