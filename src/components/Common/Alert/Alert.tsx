import React, { useMemo } from "react";
import { Alert as AntdAlert } from "antd";
import { IAlertProps } from "./type";

const Alert = (props:IAlertProps) => {
  const { action, message, description, type, closeable, onClose } = props;

  const actions = useMemo(() => (action ? action() : undefined), [action]);

  return (
    <AntdAlert
      message={message}
      description={description}
      type={type}
      onClose={onClose}
      action={actions}
      closable={closeable}
    />
  );
};

export default Alert;
