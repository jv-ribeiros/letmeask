import { ButtonHTMLAttributes } from "react";

import { Div } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};
export function CustomButton({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <Div>
      <button className={`button ${isOutlined && "outlined"}`} {...props} />
    </Div>
  );
}
