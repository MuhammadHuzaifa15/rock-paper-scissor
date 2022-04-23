export interface IAlertProps {
  message?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  action: () => JSX.Element;
  description: string;
  closeable: boolean;
  onClose: () => void
}
