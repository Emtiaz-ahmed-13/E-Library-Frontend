import { Button } from "antd";
import React from "react";
const CustomBtn = ({
  ButtonText,
  onClick,
}: {
  ButtonText: string;
  onClick?: () => void;
}) => {
  return (
    <Button className="custom-btn" type="text" onClick={onClick}>
      {ButtonText}
    </Button>
  );
};

export default CustomBtn;
