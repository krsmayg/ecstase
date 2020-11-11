import React, { Component, useEffect, useState } from "react";
import { Table, Tag, Space, Button, Popconfirm } from "antd";
import { connect } from "react-redux";
import { fetchPosters } from "../../actions/index";
import { deletePoster } from "../../actions/control";
import Spinner from "../../components/UI/Spinner/Spinner";
import { imageUrl } from "../../api/axiosConfig";
import {Link} from "react-router-dom"
const PosterTablePage = (props) => {
  const [posterData, setPosterData] = useState([]);
  useEffect(() => {
    props.fetchPosters().then((res) => {
      setPosterData(res);
    });
  }, []);
  const handleDelete = (id, e) => {
    e.preventDefault();
    const data = posterData.filter((item) => item._id !== id);
    setPosterData(data);
    props.deletePoster(id);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    render: (text, record) => <Link to={`/wallshop?artwork=${record.slug}`}>{text}</Link>,
    },
    {
        title: "Slug",
        dataIndex: "slug",
        key: "slug",
      },
    {
        title: "Artist",
        dataIndex: "artist",
        key: "artist",
        },
    {
      title: "Image",
      key: "imageWall",
      dataIndex: "imageWall",
      render: (src) => (
        <img src={`${imageUrl}/posters/${src}`} width={40}></img>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={(event) => handleDelete(record._id, event)}
          >
            <Button>Delete</Button>
          </Popconfirm>
          <Button style={{marginLeft: 5 }}>Update</Button>
        </>
      ),
    },
  ];
  const renderTable = () => {
    return !props.posters ? (
      <Spinner />
    ) : (
      <Table columns={columns} dataSource={posterData} rowKey="_id" />
    );
  };
  return (
    <>
      <h2>Table of Posters</h2>
      {renderTable()}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    posters: state.posters,
  };
};
export default connect(mapStateToProps, { fetchPosters, deletePoster })(
  PosterTablePage
);
