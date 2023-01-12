import React from "react";
import { Button, ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import modal from "./modal";
import drawer from "./drawer";
import test from "./test";
import grapesjs from "grapesjs";
export default (editor:grapesjs.Editor) => {
  const { Blocks, Components } = editor;
  const sheetsManager = new Map();
  // Helper for MUI components
  const addCmp = ({ type, component, props }) => {
    Components.addType(type, {
      extend: "react-component",
      model: {
        defaults: {
          ...props,
          component,
        },
      },
      view: {
        /**
         * We need this in order to render MUI styles in the canvas
         */
        createReactEl(this: any, Cmp, props) {
          // const cmpMain = React.createElement(
          //   cmp,
          //   props,
          //   this.createReactChildWrap()
          // );
          return (
            <StyleProvider container={this.em.get("Canvas").getDocument().head}>
              <ConfigProvider
                getTargetContainer={() => this.em.get("Canvas").getWindow()}
                getPopupContainer={() => this.em.get("Canvas").getBody()}
              >
                <Cmp {...props}>{this.createReactChildWrap()}</Cmp>
              </ConfigProvider>
            </StyleProvider>
          );
          // React.createElement(
          //   StyleProvider,
          //   {
          //     container: this.em.get("Canvas").getDocument().head,
          //   },
          //   cmpMain
          // );
        },
      },
      isComponent: (el) => el.tagName === type.toUpperCase(),
    });

    Blocks.add(type, {
      label: type,
      category: "Antd",
      content: { type },
    });
  };
  addCmp({ type: "modal", component: modal, props: {} });
  addCmp({ type: "drawer", component: drawer, props: {} });
  addCmp({ type: "test", component: test, props: {} });
  addCmp({
    type: "AntdButton",
    component: Button,
    props: {
      attributes: {
        color: "primary",
        variant: "contained",
      },
      components: "Click me",
      traits: [
        {
          type: "select",
          label: "Variant",
          name: "variant",
          options: [
            { value: "contained", name: "Contained" },
            { value: "outlined", name: "Outlined" },
          ],
        },

        {
          type: "checkbox",
          label: "Disabled",
          name: "disabled",
        },
        {
          type: "select",
          label: "Color",
          name: "color",
          options: [
            { value: "primary", name: "Primary" },
            { value: "secondary", name: "Secondary" },
          ],
        },
      ],
    },
  });
};
