import { Button, Modal } from "antd";
import Head from "next/head";
import React from "react";
// import requirejs from "requirejs";
import Image from "next/image";
// import "systemjs";
// import { Inter } from '@next/font/google'
import dynamic from "next/dynamic";
import Btn from "../components/btn";
import easytoanalyze from "../public/scripts/easytoanalyze";

// if (process.browser) {
//   // @ts-ignore
//   window.react = React;
//   // console.log("LENG ~ window.React", window.React)
//   System.addImportMap({
//     imports: {
//       react: "app:react",
//     },
//   });
//   System.set("app:react", { default: React, __useDefault: true });
// }
// @ts-ignore
// import  easytoanalyze from 'http://localhost:3000/scripts/easytoanalyze.js'
// const inter = Inter({ subsets: ['latin'] })
async function test() {
  // @ts-ignore
  // const Antd = await import("http://localhost:3000/scripts/easytoanalyze.js"); //new URL('/antd.js', import.meta.url)
  // console.log("LENG ~ Home ~ Antd", Antd);
  // const test = await System.import("http://localhost:3000/scripts/test.umd.js");
  const test = await import("http://localhost:3000/scripts/test.tsx?v=2");
  console.log("LENG ~ test ~ test", test);
  // requirejs(["helper/util"], function(util) {
  //   //此函数在加载scripts/helper/util.js时调用。
  //   //如果util.js调用define()，则直到
  //   //util的依赖项已加载，util参数将保持
  //   //“helper/util"的模块值。
  // });
}

export default function Home() {
  // test();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Test />
      {/* <Webview /> */}
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
}
class Test extends React.Component<any> {
  state = {
    open: false,
  };
  public render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          我是按钮
        </Button>
        <Modal
          open={this.state.open}
          onCancel={() => this.setState({ open: false })}
        >
          <Test2 />
        </Modal>
      </div>
    );
  }
}
class Test2 extends React.Component<any> {
  state = {
    open: false,
  };
  // url = "http://localhost:3000/scripts/test.js?v=3";
  Webview = dynamic(() => import('http://localhost:3000/scripts/test.js?v=3'), {
    ssr: false,
  });
  public render() {
    console.log("LENG ~ Test2 ~ render ~ render")
    return <this.Webview />;
  }
}
