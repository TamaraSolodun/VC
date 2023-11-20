import { Button, message, Space } from "antd";

export default function Message({
  typeMessage,
  textMessage,
}: {
  typeMessage: string;
  textMessage: string;
}): JSX.Element {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = (): void => {
    messageApi.open({
      type: typeMessage,
      content: textMessage,
    });
  };

  return (
    <>
      {contextHolder}
      <Button onClick={showMessage}>{typeMessage}</Button>
    </>
  );
}
