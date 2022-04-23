import { ButtonShape, ButtonType } from 'antd/lib/button';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

export interface IButtonProps {
  type?: ButtonType;
  children: any;
  size?: SizeType;
  shape?: ButtonShape;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  danger?: boolean;
}
