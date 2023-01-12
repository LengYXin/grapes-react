import * as React from "react";
import grapesjs from "grapesjs";
import webpage from "grapesjs-preset-webpage";
import blocks from "grapesjs-blocks-basic";
import zh from "grapesjs/src/i18n/locale/zh";
import "grapesjs/dist/css/grapes.min.css";
import { Layout } from "antd";
import BaseReactComponent from "./base-react-component";
import ReactComponents from "./react-components";
import MuiComponents from "./mui-components";
import AntdComponents from "./antds";

const { Header, Footer, Sider, Content } = Layout;
export interface IAppProps {}

export default class App extends React.Component<IAppProps> {
  componentDidMount(): void {
    const editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: "#gjs",
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: "100%",
      width: "100%",
      showOffsets:true,
      // Disable the storage manager for the moment
      storageManager: false,
      selectorManager: { componentFirst: true },
      i18n: {
        locale: "zh", // default locale
        detectLocale: true, // by default, the editor will detect the language
        // localeFallback: 'en', // default fallback
        messages: { zh },
      },
      plugins: [
        BaseReactComponent,
        ReactComponents,
        MuiComponents,
        AntdComponents,
        blocks,
        webpage,
        // (editor) =>
        //   webpage(editor, {
        //     /* options */
        //   }),
      ],
      // Avoid any default panel
      // panels: { defaults: [] },
      // deviceManager: {
      //   // devices: [
      //   //   {
      //   //     name: "Desktop",
      //   //     width: "", // default size
      //   //   },
      //   //   {
      //   //     name: "Mobile",
      //   //     width: "320px", // this value will be used on canvas width
      //   //     widthMedia: "480px", // this value will be used in CSS @media
      //   //   },
      //   // ],
      // },
      // blockManager: {
      //   // appendTo: "#blocks",
      //   blocks: [
      //     {
      //       id: "section", // id is mandatory
      //       label: "<b>Section</b>", // You can use HTML/SVG inside labels
      //       attributes: { class: "gjs-block-section" },
      //       content: ` <MuiButton variant='contained' color='primary'>
      //       Click Me
      //     </MuiButton>`,
      //     },
      //     {
      //       id: "text",
      //       label: "Text",
      //       content: '<div data-gjs-type="text">Insert your text here</div>',
      //     },
      //     {
      //       id: "image",
      //       label: "Image",
      //       // Select the component once it's dropped
      //       select: true,
      //       // You can pass components as a JSON instead of a simple HTML string,
      //       // in this case we also use a defined component type `image`
      //       content: { type: "image" },
      //       // This triggers `active` event on dropped components and the `image`
      //       // reacts by opening the AssetManager
      //       activate: true,
      //     },
      //   ],
      // },
    });
    console.log("LENG ~ App ~ componentDidMount ~ Document", editor);
  }
  public render() {
    return (
      <div className="h-full w-full">
        <div id="gjs"></div>
        <div className="absolute right-0 top-0" id="blocks"></div>
      </div>
      // <Layout className="min-h-screen">
      //   <Header>Header</Header>
      //   <Content id="gjs">
      //   </Content>
      // </Layout>
    );
  }
}
