import { Alert } from "antd";

function ErrorAlert({ error }): JSX.Element | null {
  return error ? (
    <Alert message="Error" description={error} type="error" showIcon />
  ) : null;
}

export default ErrorAlert;
