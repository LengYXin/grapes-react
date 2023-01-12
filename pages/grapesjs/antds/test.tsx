import * as React from "react";

export interface IAppProps {}

export default class App extends React.Component<IAppProps> {
  componentDidMount(): void {
    console.log("LENG ~ App ~ componentDidMount ~ componentDidMount");
  }
  componentWillUnmount(): void {
    console.log("LENG ~ App ~ componentWillUnmount ~ componentWillUnmount");
  }
  public render() {
    return <div>哈哈哈哈哈哈</div>;
  }
}
