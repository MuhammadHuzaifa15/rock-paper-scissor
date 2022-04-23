import React from "react";
import { Button as AntdButton } from "antd";
import { IButtonProps } from "./types";

const Button = function ({
  type = "default",
  children,
  onClick,
  size,
  danger,
}: IButtonProps) {
  return (
    <AntdButton type={type} onClick={onClick} size={size} danger={danger}>
      {children}
    </AntdButton>
  );
};
export default Button;
