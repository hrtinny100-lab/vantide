import{i as c,a as s,x as f}from"./constants-BMPBLtAJ.js";import{c as a}from"./index-1AHWBucV.js";import"./index-z4el0t8e.js";import"./index-DJCgIpmR.js";import"./walletConfig-6IRdRmic.js";import"./sha2-PsZP68hz.js";import"./index.es-DWy6X4lZ.js";import"./index-CJdot1dH.js";import"./to-string-CfGorqUQ.js";import"./http-DtKtQ2Cz.js";import"./index-BSeNjfkP.js";import"./index-CdRv9cz6.js";import"./index-BWFiiVFd.js";import"./index-DS2FJztI.js";import"./index-DamZVL1-.js";const d=c`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,i,e,r){var n=arguments.length,t=n<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,e):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,i,e,r);else for(var m=o.length-1;m>=0;m--)(l=o[m])&&(t=(n<3?l(t):n>3?l(i,e,t):l(i,e))||t);return n>3&&t&&Object.defineProperty(i,e,t),t};let p=class extends s{render(){return f`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};p.styles=d;p=u([a("w3m-transactions-view")],p);export{p as W3mTransactionsView};
