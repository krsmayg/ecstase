import React, { useState, useEffect } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import ImgCrop from "antd-img-crop";

const ImageController = (props) => {
  const [fileList, setFileList] = useState([]);
  const fileProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
  }
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    let fileListCopy = fileList.map((files) => files.originFileObj);
    props.imageHandler(fileListCopy);
    console.log("Image array: ", fileListCopy);
  };

  const onChangeImageWall = (info) => {
    if (info.file.status !== 'uploading') {
      console.log('Here');
      console.log(info.file, info.fileList);
      props.imageWallHandler(info.file.originFileObj);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <>
      <ImgCrop rotate>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 4 && "+ Upload"}
        </Upload>
      </ImgCrop>
      <h2>Image Wall</h2>
      <Upload {...fileProps} onChange={onChangeImageWall}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      ,
    </>
  );
};

export default ImageController;
