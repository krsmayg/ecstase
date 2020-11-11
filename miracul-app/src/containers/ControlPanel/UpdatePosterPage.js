import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axiosConfig from "../../api/axiosConfig";
import { Form, Input, Button, Radio, InputNumber } from "antd";
class Size {
  constructor(name, current) {
    this.name = name;
    this.current = current;
    this.of = current;
  }
}
const UpdatePosterPage = (props) => {
  const [poster, setPoster] = useState({});
  const [form] = Form.useForm();
  const { TextArea } = Input;
  useEffect(() => {
    const query = props.location.search;
    const id = query.split("=")[1];
    axiosConfig
      .get(`/posters/${id}`)
      .then((res) => {
        setPoster(res.data.data.doc);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleName = (e) => {
    let posterCopy = { ...poster };
    posterCopy.name = e.target.value;
    setPoster(posterCopy);
  };
  const handleArtist = (e) => {
    let posterCopy = { ...poster };
    posterCopy.artist = e.target.value;
    setPoster(posterCopy);
  };
  const handleDescription = (e) => {
    setPoster((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };
  const handlePrice = (e) => {
    let posterCopy = { ...poster };
    posterCopy.price = e;
    setPoster(posterCopy);
  };
  const sizeHandler = (e, name) => {
    const size = new Size(name, e);
    let posterCopy = { ...poster };
    if (
      !posterCopy.amountArray.find((el) => el.name === size.name) ||
      posterCopy.amountArray.length == 0
    ) {
      posterCopy.amountArray.push(size);
    } else {
      const index = posterCopy.amountArray.findIndex(
        (el) => el.name === size.name
      );
      posterCopy.amountArray[index].current = size.current;
      posterCopy.amountArray[index].of = size.current;
    }
    setPoster(posterCopy);
    console.log(poster);
  };
  const handleSubmit = () => {
    console.log('submit');
    axiosConfig.patch(`/posters/${poster._id}`, poster).then(res => {
        console.log(res);
    }).catch(err => console.log(err));
  }
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
              value={poster.name}
            />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea
              placeholder="Descritin about poster"
              autoSize={{ minRows: 4, maxRows: 8 }}
              onChange={handleDescription}
              value={poster.description}

            />
          </Form.Item>
          <Form.Item label="Artist">
            <Input
              placeholder="Artist name"
              size="large"
              width="100"
              onChange={handleArtist}
              value={poster.artist}

            />
          </Form.Item>
        </Form>
        <h2 className="big-title" style={{ margin: "20px 0" }}>
          Sizes Amount
        </h2>
        <Form layout="inline">
          <Form.Item label="S">
            <InputNumber
              defaultValue={0}
              min={0}
              onChange={(e) => sizeHandler(e, "S")}
            />
          </Form.Item>
          <Form.Item label="M">
            <InputNumber
              defaultValue={0}
              min={0}
              onChange={(e) => sizeHandler(e, "M")}
            />
          </Form.Item>
          <Form.Item label="L">
            <InputNumber
              defaultValue={0}
              min={0}
              onChange={(e) => sizeHandler(e, "L")}
            />
          </Form.Item>
        </Form>
        <h2 className="big-title" style={{ margin: "20px 0" }}>
          Price
        </h2>
        <Form>
          <Form.Item label="Poster Price">
            <InputNumber
              value={poster.price}
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

export default withRouter(UpdatePosterPage);
