import React, { Component, useState } from "react";
import { Form, Input, Button, Radio, InputNumber } from "antd";
import ImageController from "../../components/ImageController/ImageController";
import { useEffect } from "react";
import { connect } from "react-redux";
import { createPoster } from "../../actions/control";
import {useToasts } from 'react-toast-notifications';

const PosterController = (props) => {
  const [form] = Form.useForm();
  const { addToast } = useToasts();

  const { TextArea } = Input;
  const [poster, setPosterData] = useState({
    name: "",
    price: 80,
    description: "",
    imageWall: {},
    images: [],
    amountArray: [],
    artist: "",
  });
  useEffect(() => {
    console.log("Poster Dta: ", poster);
  });
  const handleName = (e) => {
    let posterCopy = { ...poster };
    posterCopy.name = e.target.value;
    setPosterData(posterCopy);
  };
  const handleArtist = (e) => {
    let posterCopy = { ...poster };
    posterCopy.artist = e.target.value;
    setPosterData(posterCopy);
  };
  const handleDescription = (e) => {
    setPosterData((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };
  const imageWallHandler = (file) => {
    setPosterData((prevState) => ({
      ...prevState,
      imageWall: file,
    }));
  };
  const imageHandler = (fileList) => {
    let posterCopy = { ...poster };
    posterCopy.images = fileList;
    setPosterData(posterCopy);
  };
  const handlePrice = (e) => {
    let posterCopy = { ...poster };
    posterCopy.price = e;
    setPosterData(posterCopy);
  };
  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("name", poster.name);
    formData.append("price", poster.price);
    formData.append("description", poster.description);
    formData.append("imageCoverHover", poster.images[1]);
    formData.append("imageCover", poster.images[0]);
    formData.append("imageWall", poster.imageWall);
    if (poster.images.length > 0)
      poster.images.forEach((el) => formData.append("images", el));
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    props.createPoster(formData).then((res) =>
    res.status === (201 || "success")
      ? addToast('Data successfully added', { appearance: 'success' })
      : addToast(res.message, { appearance: 'error' })
    );
  };
  return (
    <div className="product-managment-container">
      <h1 className="big-title">General information</h1>
      <Form form={form} layout="vertical">
        <Form.Item label="Poster name">
          <Input
            placeholder="Input title"
            size="large"
            width="100"
            onChange={handleName}
          />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea
            placeholder="Descritin about poster"
            autoSize={{ minRows: 4, maxRows: 8 }}
            onChange={handleDescription}
          />
        </Form.Item>
        <Form.Item label="Artist">
          <Input
            placeholder="Artist name"
            size="large"
            width="100"
            onChange={handleArtist}
          />
        </Form.Item>
      </Form>
      <h2 className="big-title" style={{ margin: "20px 0" }}>
        Upload Photos
      </h2>
      <Form>
        <ImageController
          imageHandler={imageHandler}
          imageWallHandler={imageWallHandler}
        />
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
            onChange={handlePrice}
          />
        </Form.Item>
      </Form>
      <Button type="primary" size="large" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};
export default connect(null, { createPoster })(PosterController);
