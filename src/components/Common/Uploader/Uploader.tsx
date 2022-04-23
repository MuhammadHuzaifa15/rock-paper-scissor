import React from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { IUploader } from "./types";
import { UploadRequestOption } from "rc-upload/lib/interface";
import { UploadChangeParam } from "antd/lib/upload";

const Uploader = ({ onChange, title }: IUploader) => {
  const props = {
    customRequest: (e: UploadRequestOption) => {
      console.log(e);
    },
    onChange: (info: UploadChangeParam) => {
      onChange(info);
    },
  };
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>{title}</Button>
    </Upload>
  );
};

export default Uploader;
