import React, { useState } from "react";
import { Button, Modal } from "antd";
// export default class Test extends React.Component<any> {
//   state = {
//     open: false,
//   };
//   public render() {
//     return <div>我是组件</div>;
//   }
// }
export default function () {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(!open)}>我是按钮</Button>
      <Modal open={open} onCancel={() => setOpen(false)}>
        我是弹框
      </Modal>
    </div>
  );
}
