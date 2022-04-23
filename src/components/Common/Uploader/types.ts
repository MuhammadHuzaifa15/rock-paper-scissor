import { UploadChangeParam } from "antd/lib/upload";

export interface IUploader {
    onChange: (e: UploadChangeParam) => void;
    title: string
}