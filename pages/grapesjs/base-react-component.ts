import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import grapesjs from "grapesjs";
import React from 'react';
import lodash from 'lodash';

export default (editor: grapesjs.Editor) => {
    const domc = editor.Components;
    const defType = domc.getType('default');
    const defModel = defType.model;
    const wrpChld = 'data-chld';

    // Main React component
    domc.addType('react-component', {
        model: {
            toHTML(opts = {}) {
                return defModel.prototype.toHTML.call(this, {
                    ...opts,
                    tag: this.get('type')
                });
            }
        },
        view: {
            tagName: 'div',

            init() {
                const { model } = this;
                this.listenTo(model, 'change:attributes', this.render);
                this.listenTo(model.components(), 'add remove reset', this.__upRender);
            },

            getChildrenContainer() {
                const { childrenContainer } = this;
                if (childrenContainer) return childrenContainer;

                this.childrenContainer = document.createElement('childc');

                return this.childrenContainer;
            },

            /**
             * We need this container to understand if the React component is able
             * to render children
             */
            createReactChildWrap() {
                return React.createElement('span', { [wrpChld]: true });
            },

            createReactEl(cmp, props) {
                return React.createElement(cmp, props, this.createReactChildWrap());
            },

            mountReact(cmp, el) {
                if (lodash.has(this.modelOpt, 'action')) {
                    // const Root = createRoot(el)
                    // Root.render(cmp)
                    // this.Root = Root;
                    // console.log("LENG ~ mountReact ~ cmp, el", lodash.cloneDeep(this.modelOpt), this, cmp, el)
                    // https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
                    ReactDOM.render(cmp, el);
                }
            },
            removed() {
                if (this.Root && this.Root.unmount) {
                    this.Root.unmount()
                }
            },
            render() {
                const { model, el } = this;
                this.updateAttributes();
                this.renderChildren();
                const reactEl = this.createReactEl(model.get('component'), {
                    ...model.get('attributes')
                });
                this.mountReact(reactEl, el);
                const chld = el.querySelector(`span[${wrpChld}]`);
                // If the container is found, the react component is able to render children
                if (chld) {
                    const chldCont = this.getChildrenContainer();
                    while (chldCont.firstChild) {
                        chld.appendChild(chldCont.firstChild);
                    }
                }

                return this;
            },

            __upRender() {
                clearTimeout(this._upr);
                this._upr = setTimeout(() => this.render());
            }
        }
    });
};
