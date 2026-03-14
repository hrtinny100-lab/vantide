import{i as m,r as A,e as E,a as f,x as c,k as l,l as C,O as b,ab as fe,j as p,g as v,M as $,m as k,n as Ke,d as x,o as y,R as g,u as P,S as U,W as _,f as X,ag as zt,C as ct,B as Nt,q as Vt,a1 as Ft,ai as lt,a3 as Mt,aj as Kt,aa as ut}from"./constants-BMPBLtAJ.js";import{n as u,c as w,o as h,U as B,r as d,a as dt}from"./index-1AHWBucV.js";import"./index-DamZVL1-.js";import"./index-rkm7du_E.js";import"./index-BID3KehH.js";import"./index-BWFiiVFd.js";import{W as Ko}from"./index-D7VIYjVG.js";import"./index-BkZTFfoC.js";import"./index-DtOypTZf.js";import"./index-DIjJpWMz.js";import{W as Ht}from"./basic-BMC_eoJr.js";import{a as Go,c as qo,b as Yo,d as Xo}from"./basic-BMC_eoJr.js";import"./index-C-sdOd7E.js";import"./index-BjhNznXe.js";import"./index-z4el0t8e.js";import"./index-DS2FJztI.js";import{M as pt}from"./index-CY6Gzoic.js";import"./index-74lgU4xS.js";import"./index-ChqPndUK.js";import{e as Gt,n as qt}from"./ref-Csg4BIxb.js";import"./index-BqfHVHNV.js";import{O as Ie}from"./index-eF-MIft1.js";import{e as Yt}from"./index-JICeZze8.js";import{W as Xt}from"./index-1lVJ-ylQ.js";import{N as Jt}from"./index-8_N5dZVz.js";import"./networkMd-C2LxY7V0.js";import"./index-DzNMWkT0.js";import"./index-fUXkaBea.js";import"./index-DJCgIpmR.js";import"./walletConfig-6IRdRmic.js";import"./sha2-PsZP68hz.js";import"./index.es-DWy6X4lZ.js";import"./index-CJdot1dH.js";import"./to-string-CfGorqUQ.js";import"./http-DtKtQ2Cz.js";import"./index-C3vzan_K.js";import"./index-DWfZvkM4.js";import"./index-Be4IHTJO.js";import"./index-D_sE5vDe.js";import"./index-CdRv9cz6.js";import"./index-BD2Bcvcu.js";import"./ConstantsUtil-Dmg8YACJ.js";import"./index-BSeNjfkP.js";const Qt=m`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var z=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let O=class extends f{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return c`
      <button
        ?disabled=${this.disabled}
        class=${h(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?B.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return c` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?c`<wui-image src=${this.networkSrc}></wui-image>`:c`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,i=this.loading?c`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:c`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return c`${e} ${i}`}return null}};O.styles=[A,E,Qt];z([u()],O.prototype,"networkSrc",void 0);z([u()],O.prototype,"avatarSrc",void 0);z([u()],O.prototype,"balance",void 0);z([u({type:Boolean})],O.prototype,"isUnsupportedChain",void 0);z([u({type:Boolean})],O.prototype,"disabled",void 0);z([u({type:Boolean})],O.prototype,"loading",void 0);z([u()],O.prototype,"address",void 0);z([u()],O.prototype,"profileName",void 0);z([u()],O.prototype,"charsStart",void 0);z([u()],O.prototype,"charsEnd",void 0);O=z([w("wui-account-button")],O);var N=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};class T extends f{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=l.getAccountData(this.namespace)?.caipAddress,this.balanceVal=l.getAccountData(this.namespace)?.balance,this.balanceSymbol=l.getAccountData(this.namespace)?.balanceSymbol,this.profileName=l.getAccountData(this.namespace)?.profileName,this.profileImage=l.getAccountData(this.namespace)?.profileImage,this.network=l.getNetworkData(this.namespace)?.caipNetwork,this.networkImage=C.getNetworkImage(this.network),this.isSupported=b.state.allowUnsupportedChain?!0:l.state.activeChain?l.checkIfSupportedNetwork(l.state.activeChain):!0}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(l.subscribeChainProp("accountState",i=>{this.caipAddress=i?.caipAddress,this.balanceVal=i?.balance,this.balanceSymbol=i?.balanceSymbol,this.profileName=i?.profileName,this.profileImage=i?.profileImage},e),l.subscribeChainProp("networkState",i=>{this.network=i?.caipNetwork,this.isSupported=l.checkIfSupportedNetwork(e,i?.caipNetwork),this.networkImage=C.getNetworkImage(i?.caipNetwork)},e)):this.unsubscribe.push(fe.subscribeNetworkImages(()=>{this.networkImage=C.getNetworkImage(this.network)}),l.subscribeKey("activeCaipAddress",i=>{this.caipAddress=i}),p.subscribeKey("balance",i=>this.balanceVal=i),p.subscribeKey("balanceSymbol",i=>this.balanceSymbol=i),p.subscribeKey("profileName",i=>this.profileName=i),p.subscribeKey("profileImage",i=>this.profileImage=i),l.subscribeKey("activeCaipNetwork",i=>{this.network=i,this.networkImage=C.getNetworkImage(i),this.isSupported=i?.chainNamespace?l.checkIfSupportedNetwork(i?.chainNamespace):!0,this.fetchNetworkImage(i)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!l.state.activeChain)return null;const e=this.balance==="show",i=typeof this.balanceVal!="string";return c`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${b.state.allowUnsupportedChain?!1:!this.isSupported}
        address=${h(v.getPlainAddress(this.caipAddress))}
        profileName=${h(this.profileName)}
        networkSrc=${h(this.networkImage)}
        avatarSrc=${h(this.profileImage)}
        balance=${e?v.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${i}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||b.state.allowUnsupportedChain?$.open({namespace:this.namespace}):$.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await C.fetchNetworkImage(e?.assets?.imageId))}}N([u({type:Boolean})],T.prototype,"disabled",void 0);N([u()],T.prototype,"balance",void 0);N([u()],T.prototype,"charsStart",void 0);N([u()],T.prototype,"charsEnd",void 0);N([u()],T.prototype,"namespace",void 0);N([d()],T.prototype,"caipAddress",void 0);N([d()],T.prototype,"balanceVal",void 0);N([d()],T.prototype,"balanceSymbol",void 0);N([d()],T.prototype,"profileName",void 0);N([d()],T.prototype,"profileImage",void 0);N([d()],T.prototype,"network",void 0);N([d()],T.prototype,"networkImage",void 0);N([d()],T.prototype,"isSupported",void 0);let ht=class extends T{};ht=N([w("w3m-account-button")],ht);let wt=class extends T{};wt=N([w("appkit-account-button")],wt);const Zt=m`
  :host {
    display: block;
    width: max-content;
  }
`;var V=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};class D extends f{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=l.state.activeCaipAddress}firstUpdated(){this.namespace?this.unsubscribe.push(l.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(l.subscribeKey("activeCaipAddress",e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?c`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${h(this.balance)}
            .charsStart=${h(this.charsStart)}
            .charsEnd=${h(this.charsEnd)}
            namespace=${h(this.namespace)}
          >
          </appkit-account-button>
        `:c`
          <appkit-connect-button
            size=${h(this.size)}
            label=${h(this.label)}
            loadingLabel=${h(this.loadingLabel)}
            namespace=${h(this.namespace)}
          ></appkit-connect-button>
        `}}D.styles=Zt;V([u({type:Boolean})],D.prototype,"disabled",void 0);V([u()],D.prototype,"balance",void 0);V([u()],D.prototype,"size",void 0);V([u()],D.prototype,"label",void 0);V([u()],D.prototype,"loadingLabel",void 0);V([u()],D.prototype,"charsStart",void 0);V([u()],D.prototype,"charsEnd",void 0);V([u()],D.prototype,"namespace",void 0);V([d()],D.prototype,"caipAddress",void 0);let ft=class extends D{};ft=V([w("w3m-button")],ft);let gt=class extends D{};gt=V([w("appkit-button")],gt);const ei=m`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var et=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let xe=class extends f{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return c`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?c`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};xe.styles=[A,E,ei];et([u()],xe.prototype,"size",void 0);et([u({type:Boolean})],xe.prototype,"loading",void 0);xe=et([w("wui-connect-button")],xe);var ee=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};class te extends f{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=$.state.open,this.loading=this.namespace?$.state.loadingNamespaceMap.get(this.namespace):$.state.loading,this.unsubscribe.push($.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      <wui-connect-button
        size=${h(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?$.close():this.loading||$.open({view:"Connect",namespace:this.namespace})}}ee([u()],te.prototype,"size",void 0);ee([u()],te.prototype,"label",void 0);ee([u()],te.prototype,"loadingLabel",void 0);ee([u()],te.prototype,"namespace",void 0);ee([d()],te.prototype,"open",void 0);ee([d()],te.prototype,"loading",void 0);let mt=class extends te{};mt=ee([w("w3m-connect-button")],mt);let bt=class extends te{};bt=ee([w("appkit-connect-button")],bt);const ti=m`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var je=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ce=class extends f{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return c`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?c`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?c`<wui-image src=${this.imageSrc}></wui-image>`:c`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ce.styles=[A,E,ti];je([u()],ce.prototype,"imageSrc",void 0);je([u({type:Boolean})],ce.prototype,"isUnsupportedChain",void 0);je([u({type:Boolean})],ce.prototype,"disabled",void 0);ce=je([w("wui-network-button")],ce);const ii=m`
  :host {
    display: block;
    width: max-content;
  }
`;var Y=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};class K extends f{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=l.state.activeCaipNetwork,this.networkImage=C.getNetworkImage(this.network),this.caipAddress=l.state.activeCaipAddress,this.loading=$.state.loading,this.isSupported=b.state.allowUnsupportedChain?!0:l.state.activeChain?l.checkIfSupportedNetwork(l.state.activeChain):!0,this.unsubscribe.push(fe.subscribeNetworkImages(()=>{this.networkImage=C.getNetworkImage(this.network)}),l.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),l.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=C.getNetworkImage(e),this.isSupported=e?.chainNamespace?l.checkIfSupportedNetwork(e.chainNamespace):!0,C.fetchNetworkImage(e?.assets?.imageId)}),$.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){C.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.network?l.checkIfSupportedNetwork(this.network.chainNamespace):!0;return c`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${b.state.allowUnsupportedChain?!1:!e}
        imageSrc=${h(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?!this.isSupported&&!b.state.allowUnsupportedChain?"Switch Network":this.network.name:this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(k.sendEvent({type:"track",event:"CLICK_NETWORKS"}),$.open({view:"Networks"}))}}K.styles=ii;Y([u({type:Boolean})],K.prototype,"disabled",void 0);Y([u({type:String})],K.prototype,"label",void 0);Y([d()],K.prototype,"network",void 0);Y([d()],K.prototype,"networkImage",void 0);Y([d()],K.prototype,"caipAddress",void 0);Y([d()],K.prototype,"loading",void 0);Y([d()],K.prototype,"isSupported",void 0);let xt=class extends K{};xt=Y([w("w3m-network-button")],xt);let vt=class extends K{};vt=Y([w("appkit-network-button")],vt);const ni=m`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var Ue=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let le=class extends f{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return c`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};le.styles=[A,E,ni];Ue([u()],le.prototype,"label",void 0);Ue([u()],le.prototype,"description",void 0);Ue([u()],le.prototype,"icon",void 0);le=Ue([w("wui-notice-card")],le);var Tt=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let He=class extends f{constructor(){super(),this.unsubscribe=[],this.socialProvider=Ke.getConnectedSocialProvider(),this.socialUsername=Ke.getConnectedSocialUsername(),this.namespace=l.state.activeChain,this.unsubscribe.push(l.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=x.getConnectorId(this.namespace),i=x.getAuthConnector();if(!i||e!==y.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const n=i.provider.getEmail()??"";return!n&&!this.socialUsername?(this.style.cssText="display: none",null):c`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(n,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(n)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,i){i||g.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?this.socialProvider==="discord"&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};Tt([d()],He.prototype,"namespace",void 0);He=Tt([w("w3m-account-auth-button")],He);var H=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let L=class extends f{constructor(){super(),this.usubscribe=[],this.networkImages=fe.state.networkImages,this.address=p.state.address,this.profileImage=p.state.profileImage,this.profileName=p.state.profileName,this.network=l.state.activeCaipNetwork,this.preferredAccountTypes=p.state.preferredAccountTypes,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(p.subscribe(e=>{e.address&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountTypes=e.preferredAccountTypes)}),p.subscribeKey("preferredAccountTypes",e=>this.preferredAccountTypes=e),l.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[this.network?.assets?.imageId??""];return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${h(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${B.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${h(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const e=this.network?.chainNamespace,i=x.getConnectorId(e),n=x.getAuthConnector();return!l.checkIfNamesSupported()||!n||i!==y.CONNECTOR_ID.AUTH||this.profileName?null:c`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=this.network?.chainNamespace,i=x.getConnectorId(e),n=x.getAuthConnector(),{origin:o}=location;return!n||i!==y.CONNECTOR_ID.AUTH||o.includes(P.SECURE_SITE)?null:c`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=l.getAllRequestedCaipNetworks(),i=e?e.length>1:!1,n=e?.find(({id:o})=>o===this.network?.id);return i||!n}onCopyAddress(){try{this.address&&(v.copyToClopboard(this.address),U.showSuccess("Address copied"))}catch{U.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const e=this.network?.chainNamespace,i=l.checkIfSmartAccountEnabled(),n=x.getConnectorId(e);return!x.getAuthConnector()||n!==y.CONNECTOR_ID.AUTH||!i?null:(this.switched||(this.text=this.preferredAccountTypes?.[e]===_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),c`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `)}onChooseName(){g.push("ChooseAccountName")}async changePreferredAccountType(){const e=this.network?.chainNamespace,i=l.checkIfSmartAccountEnabled(),n=this.preferredAccountTypes?.[e]===_.ACCOUNT_TYPES.SMART_ACCOUNT||!i?_.ACCOUNT_TYPES.EOA:_.ACCOUNT_TYPES.SMART_ACCOUNT;x.getAuthConnector()&&(this.loading=!0,await X.setPreferredAccountType(n,e),this.text=n===_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,zt.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&g.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await X.disconnect(),$.close()}catch{k.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),U.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){k.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),g.push("UpgradeEmailWallet")}};H([d()],L.prototype,"address",void 0);H([d()],L.prototype,"profileImage",void 0);H([d()],L.prototype,"profileName",void 0);H([d()],L.prototype,"network",void 0);H([d()],L.prototype,"preferredAccountTypes",void 0);H([d()],L.prototype,"disconnecting",void 0);H([d()],L.prototype,"loading",void 0);H([d()],L.prototype,"switched",void 0);H([d()],L.prototype,"text",void 0);L=H([w("w3m-account-settings-view")],L);const oi=m`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var re=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let G=class extends f{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail"}render(){const e=l.state.activeChain,n=x.getConnectorId(e)===y.CONNECTOR_ID.AUTH;return c`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${n?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${B.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){if(e.target instanceof HTMLElement&&e.target.id==="copy-address"){this.onCopyClick?.(e);return}this.onProfileClick?.(e)}getIconTemplate(e){return c`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};G.styles=[A,E,oi];re([u()],G.prototype,"avatarSrc",void 0);re([u()],G.prototype,"profileName",void 0);re([u()],G.prototype,"address",void 0);re([u()],G.prototype,"icon",void 0);re([u()],G.prototype,"onProfileClick",void 0);re([u()],G.prototype,"onCopyClick",void 0);G=re([w("wui-profile-button-v2")],G);const ai=m`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var W=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let S=class extends f{constructor(){super(),this.unsubscribe=[],this.caipAddress=p.state.caipAddress,this.address=v.getPlainAddress(p.state.caipAddress),this.allAccounts=p.state.allAccounts,this.profileImage=p.state.profileImage,this.profileName=p.state.profileName,this.disconnecting=!1,this.balance=p.state.balance,this.balanceSymbol=p.state.balanceSymbol,this.features=b.state.features,this.remoteFeatures=b.state.remoteFeatures,this.namespace=l.state.activeChain,this.chainId=l.state.activeCaipNetwork?.id,this.unsubscribe.push(p.subscribeKey("caipAddress",e=>{this.address=v.getPlainAddress(e),this.caipAddress=e}),p.subscribeKey("balance",e=>this.balance=e),p.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),p.subscribeKey("profileName",e=>this.profileName=e),p.subscribeKey("profileImage",e=>this.profileImage=e),b.subscribeKey("features",e=>this.features=e),b.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),p.subscribeKey("allAccounts",e=>{this.allAccounts=e}),b.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),l.subscribeKey("activeChain",e=>this.namespace=e),l.subscribeKey("activeCaipNetwork",e=>{if(e){const[i,n]=e?.caipNetworkId?.split(":")||[];i&&n&&(this.namespace=i,this.chainId=n)}}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress)return null;const e=l.state.activeChain!==y.CHAIN.SOLANA&&this.allAccounts.length>1;return c`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${e?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${v.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){if(!this.namespace)return null;const e=this.remoteFeatures?.onramp,i=P.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);return!e||!i?null:c`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||P.DEFAULT_FEATURES.walletFeaturesOrder).map(i=>{switch(i){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.remoteFeatures?.activity&&P.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?c` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){const e=this.remoteFeatures?.swaps,i=l.state.activeChain===y.CHAIN.EVM;return!e||!i?null:c`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){const e=this.features?.send,i=l.state.activeChain,n=P.SEND_SUPPORTED_NAMESPACES.includes(i);return!e||!n?null:c`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=l.state.activeChain,i=x.getConnectorId(e),n=x.getAuthConnector(),{origin:o}=location;return!n||i!==y.CONNECTOR_ID.AUTH||o.includes(P.SECURE_SITE)?null:c`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){g.push("SwitchAddress")}handleClickPay(){g.push("OnRampProviders")}handleClickSwap(){g.push("Swap")}handleClickSend(){g.push("WalletSend")}explorerBtnTemplate(){return p.state.addressExplorerUrl?c`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return c`
      <wui-avatar
        alt=${h(this.caipAddress)}
        address=${h(v.getPlainAddress(this.caipAddress))}
        imageSrc=${h(this.profileImage===null?void 0:this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?B.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):B.getTruncateString({string:this.address||"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.allAccounts.find(n=>n.address===this.address),i=p.state.addressLabels.get(this.address);return this.namespace==="bip122"?this.btcAccountsTemplate():c`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${h(this.address)}
        icon="${e?.type===_.ACCOUNT_TYPES.SMART_ACCOUNT&&l.state.activeChain===y.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${h(this.profileImage?this.profileImage:void 0)}
        profileName=${h(i||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}btcAccountsTemplate(){return c`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${h(this.profileImage?this.profileImage:void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{label:"Payment"},{label:"Ordinals"}]}
        .onTabChange=${e=>p.setCaipAddress(`bip122:${this.chainId}:${this.allAccounts[e]?.address||""}`,this.namespace)}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${B.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`}onCopyAddress(){try{this.address&&(v.copyToClopboard(this.address),U.showSuccess("Address copied"))}catch{U.showError("Failed to copy")}}onTransactions(){const e=l.state.activeChain;k.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:p.state.preferredAccountTypes?.[e]===_.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await X.disconnect(),$.close()}catch{k.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),U.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=p.state.addressExplorerUrl;e&&v.openHref(e,"_blank")}onGoToUpgradeView(){k.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),g.push("UpgradeEmailWallet")}};S.styles=ai;W([d()],S.prototype,"caipAddress",void 0);W([d()],S.prototype,"address",void 0);W([d()],S.prototype,"allAccounts",void 0);W([d()],S.prototype,"profileImage",void 0);W([d()],S.prototype,"profileName",void 0);W([d()],S.prototype,"disconnecting",void 0);W([d()],S.prototype,"balance",void 0);W([d()],S.prototype,"balanceSymbol",void 0);W([d()],S.prototype,"features",void 0);W([d()],S.prototype,"remoteFeatures",void 0);W([d()],S.prototype,"namespace",void 0);W([d()],S.prototype,"chainId",void 0);S=W([w("w3m-account-default-widget")],S);const ri=m`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var tt=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ve=class extends f{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return c`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};ve.styles=[A,ri];tt([u()],ve.prototype,"dollars",void 0);tt([u()],ve.prototype,"pennies",void 0);ve=tt([w("wui-balance")],ve);const si=m`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var ge=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let J=class extends f{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return c`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${B.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?c`<wui-image src=${this.networkSrc}></wui-image>`:c`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};J.styles=[A,E,si];ge([u()],J.prototype,"networkSrc",void 0);ge([u()],J.prototype,"avatarSrc",void 0);ge([u()],J.prototype,"profileName",void 0);ge([u()],J.prototype,"address",void 0);ge([u()],J.prototype,"icon",void 0);J=ge([w("wui-profile-button")],J);const ci=m`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Be=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ue=class extends f{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,c`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};ue.styles=[A,E,ci];Be([u()],ue.prototype,"placement",void 0);Be([u()],ue.prototype,"variant",void 0);Be([u()],ue.prototype,"message",void 0);ue=Be([w("wui-tooltip")],ue);const li={getTabsByNamespace(r){return!!r&&r===y.CHAIN.EVM?b.state.remoteFeatures?.activity===!1?ct.ACCOUNT_TABS.filter(i=>i.label!=="Activity"):ct.ACCOUNT_TABS:[]}},ui=m`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var di=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ge=class extends f{render(){return c`<w3m-activity-list page="account"></w3m-activity-list>`}};Ge.styles=ui;Ge=di([w("w3m-account-activity-widget")],Ge);const pi=m`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var hi=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let qe=class extends f{render(){return c`${this.nftTemplate()}`}nftTemplate(){return c` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){g.push("WalletReceive")}};qe.styles=pi;qe=hi([w("w3m-account-nfts-widget")],qe);const wi=m`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var ie=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let M=class extends f{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return c`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?c` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:c`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};M.styles=[A,E,wi];ie([u()],M.prototype,"icon",void 0);ie([u()],M.prototype,"text",void 0);ie([u()],M.prototype,"description",void 0);ie([u()],M.prototype,"tag",void 0);ie([u()],M.prototype,"iconBackgroundColor",void 0);ie([u()],M.prototype,"iconColor",void 0);ie([u({type:Boolean})],M.prototype,"disabled",void 0);M=ie([w("wui-list-description")],M);const fi=m`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var it=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ye=class extends f{constructor(){super(),this.unsubscribe=[],this.tokenBalance=p.state.tokenBalance,this.remoteFeatures=b.state.remoteFeatures,this.unsubscribe.push(p.subscribe(e=>{this.tokenBalance=e.tokenBalance}),b.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?c`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:c` <wui-flex flexDirection="column" gap="xs"
      >${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?c`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description>`:c``}tokenItemTemplate(){return this.tokenBalance?.map(e=>c`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){g.push("WalletReceive")}onBuyClick(){const e=l.state.activeChain;k.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:p.state.preferredAccountTypes?.[e]===_.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("OnRampProviders")}};ye.styles=fi;it([d()],ye.prototype,"tokenBalance",void 0);it([d()],ye.prototype,"remoteFeatures",void 0);ye=it([w("w3m-account-tokens-widget")],ye);const gi=m`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var F=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const mi=48,bi=430;let R=class extends f{constructor(){super(),this.unsubscribe=[],this.address=p.state.address,this.profileImage=p.state.profileImage,this.profileName=p.state.profileName,this.network=l.state.activeCaipNetwork,this.currentTab=p.state.currentTab,this.tokenBalance=p.state.tokenBalance,this.features=b.state.features,this.remoteFeatures=b.state.remoteFeatures,this.networkImage=C.getNetworkImage(this.network),this.unsubscribe.push(fe.subscribeNetworkImages(()=>{this.networkImage=C.getNetworkImage(this.network)}),p.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):$.close()}),l.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=C.getNetworkImage(this.network)}),b.subscribeKey("features",e=>this.features=e),b.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){p.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");return c`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${h(this.address)}
        networkSrc=${h(this.networkImage)}
        icon="chevronBottom"
        avatarSrc=${h(this.profileImage?this.profileImage:void 0)}
        profileName=${h(this.profileName??void 0)}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()} ${this.tabsTemplate()}
      ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){const e=this.features?.walletFeaturesOrder||P.DEFAULT_FEATURES.walletFeaturesOrder;return e.every(n=>n==="send"||n==="receive"?!this.features?.[n]:n==="swaps"||n==="onramp"?!this.remoteFeatures?.[n]:!0)?null:c`<wui-flex gap="s">
      ${e.map(n=>{switch(n){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"receive":return this.receiveTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}onrampTemplate(){return this.remoteFeatures?.onramp?c`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){const e=this.remoteFeatures?.swaps,i=l.state.activeChain===y.CHAIN.EVM;return!e||!i?null:c`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `}receiveTemplate(){return this.features?.receive?c`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){const e=this.features?.send,i=l.state.activeChain,n=P.SEND_SUPPORTED_NAMESPACES.includes(i);return!e||!n?null:c`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval(()=>p.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===y.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return this.currentTab===0?c`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?c`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?c`<w3m-account-activity-widget></w3m-account-activity-widget>`:c`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const e=v.calculateBalance(this.tokenBalance),{dollars:i="0",pennies:n="00"}=v.formatTokenBalance(e);return c`<wui-balance dollars=${i} pennies=${n}></wui-balance>`}return c`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const e=li.getTabsByNamespace(l.state.activeChain);if(e.length===0)return null;const i=v.isMobile()&&window.innerWidth<bi;let n="104px";return i?n=`${(window.innerWidth-mi)/e.length}px`:e.length===2?n="156px":n="104px",c`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      localTabWidth=${n}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){p.setCurrentTab(e)}onProfileButtonClick(){const{allAccounts:e}=p.state;e.length>1?g.push("Profile"):g.push("AccountSettings")}onBuyClick(){g.push("OnRampProviders")}onSwapClick(){const e=l.state.activeChain;this.network?.caipNetworkId&&!P.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?g.push("UnsupportedChain",{swapUnsupportedChain:!0}):(k.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:p.state.preferredAccountTypes?.[e]===_.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("Swap"))}onReceiveClick(){g.push("WalletReceive")}onSendClick(){const e=l.state.activeChain;k.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:p.state.preferredAccountTypes?.[e]===_.ACCOUNT_TYPES.SMART_ACCOUNT}}),g.push("WalletSend")}};R.styles=gi;F([d()],R.prototype,"watchTokenBalance",void 0);F([d()],R.prototype,"address",void 0);F([d()],R.prototype,"profileImage",void 0);F([d()],R.prototype,"profileName",void 0);F([d()],R.prototype,"network",void 0);F([d()],R.prototype,"currentTab",void 0);F([d()],R.prototype,"tokenBalance",void 0);F([d()],R.prototype,"features",void 0);F([d()],R.prototype,"remoteFeatures",void 0);F([d()],R.prototype,"networkImage",void 0);R=F([w("w3m-account-wallet-features-widget")],R);var It=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ye=class extends f{constructor(){super(),this.unsubscribe=[],this.namespace=l.state.activeChain,this.unsubscribe.push(l.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;const e=x.getConnectorId(this.namespace),i=x.getAuthConnector();return c`
      ${i&&e===y.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return c`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return c`<w3m-account-default-widget></w3m-account-default-widget>`}};It([d()],Ye.prototype,"namespace",void 0);Ye=It([w("w3m-account-view")],Ye);const xi=m`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var Se=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ne=class extends f{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.labels=p.state.addressLabels,this.caipNetwork=l.state.activeCaipNetwork,this.socialProvider=Ke.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){super.connectedCallback(),Nt.getBalance(this.accountAddress,this.caipNetwork?.caipNetworkId).then(e=>{let i=this.balance;e.balances.length>0&&(i=e.balances.reduce((n,o)=>n+(o?.value||0),0)),this.balance=i,this.fetchingBalance=!1,this.requestUpdate()}).catch(()=>{this.fetchingBalance=!1,this.requestUpdate()})}render(){const e=this.getLabel(),i=l.state.activeChain,n=x.getConnectorId(i);return this.shouldShowIcon=n===y.CONNECTOR_ID.AUTH,c`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?c`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===_.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:c`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${B.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance?c`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:c` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `}getLabel(){let e=this.labels?.get(this.accountAddress);const i=l.state.activeChain,n=x.getConnectorId(i);return!e&&n===y.CONNECTOR_ID.AUTH?e=`${this.accountType==="eoa"?this.socialProvider??"Email":"Smart"} Account`:e||(e="EOA"),e}};ne.styles=[A,E,xi];Se([u()],ne.prototype,"accountAddress",void 0);Se([u()],ne.prototype,"accountType",void 0);Se([u({type:Boolean})],ne.prototype,"selected",void 0);Se([u({type:Function})],ne.prototype,"onSelect",void 0);ne=Se([w("wui-list-account")],ne);const vi=m`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;var me=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Q=class extends f{constructor(){super(),this.usubscribe=[],this.address=p.state.address,this.profileImage=p.state.profileImage,this.profileName=p.state.profileName,this.accounts=p.state.allAccounts,this.loading=!1,this.usubscribe.push(p.subscribeKey("address",e=>{e?this.address=e:$.close()})),this.usubscribe.push(p.subscribeKey("profileImage",e=>{this.profileImage=e})),this.usubscribe.push(p.subscribeKey("profileName",e=>{this.profileName=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-profile-view: No account provided");return c`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${h(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName?B.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):B.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>g.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return c`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map(e=>this.accountTemplate(e))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){const i=l.state.activeCaipNetwork?.chainNamespace;if(this.loading=!0,x.getAuthConnector()){const o=e.type;await X.setPreferredAccountType(o,i)}p.setShouldUpdateToAddress(e.address,i),this.loading=!1}accountTemplate(e){return c`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":c`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            .loading=${this.loading}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.address&&(v.copyToClopboard(this.address),U.showSuccess("Address copied"))}catch{U.showError("Failed to copy")}}};Q.styles=vi;me([d()],Q.prototype,"address",void 0);me([d()],Q.prototype,"profileImage",void 0);me([d()],Q.prototype,"profileName",void 0);me([d()],Q.prototype,"accounts",void 0);me([d()],Q.prototype,"loading",void 0);Q=me([w("w3m-profile-view")],Q);const yi=m`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var Le=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let de=class extends f{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return c`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};de.styles=[A,E,yi];Le([u()],de.prototype,"imageSrc",void 0);Le([u()],de.prototype,"text",void 0);Le([u()],de.prototype,"size",void 0);de=Le([w("wui-banner-img")],de);const Ci=m`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var nt=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ce=class extends f{constructor(){super(),this.metadata=b.state.metadata,this.allAccounts=p.state.allAccounts||[],this.balances={},this.labels=p.state.addressLabels,this.currentAddress=p.state.address||"",this.caipNetwork=l.state.activeCaipNetwork,p.subscribeKey("allAccounts",e=>{this.allAccounts=e})}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach(e=>{Nt.getBalance(e.address,this.caipNetwork?.caipNetworkId).then(i=>{let n=this.balances[e.address]||0;i.balances.length>0&&(n=i.balances.reduce((o,t)=>o+(t?.value||0),0)),this.balances[e.address]=n,this.requestUpdate()})})}getAddressIcon(e){return e==="smartAccount"?"lightbulb":"mail"}render(){return c`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${h(this.metadata?.icons[0])}
          text=${h(this.metadata?.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map((e,i)=>this.getAddressTemplate(e,i))}
      </wui-flex>
    `}getAddressTemplate(e,i){const n=this.labels?.get(e.address),o=l.state.activeChain,a=x.getConnectorId(o)===y.CONNECTOR_ID.AUTH;return c`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${a?c`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:c`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${n||B.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${typeof this.balances[e.address]=="number"?`$${this.balances[e.address]?.toFixed(2)}`:c`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${e.address?.toLowerCase()===this.currentAddress?.toLowerCase()?"":c`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${i}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){const i=l.state.activeCaipNetwork,n=i?.chainNamespace,o=`${n}:${i?.id}:${e}`;p.setCaipAddress(o,n),$.close()}};Ce.styles=Ci;nt([d()],Ce.prototype,"allAccounts",void 0);nt([d()],Ce.prototype,"balances",void 0);Ce=nt([w("w3m-switch-address-view")],Ce);const ki=m`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var ze=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let pe=class extends f{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return c`
      <button ?disabled=${this.disabled} tabindex=${h(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};pe.styles=[A,E,ki];ze([u()],pe.prototype,"text",void 0);ze([u({type:Boolean})],pe.prototype,"disabled",void 0);ze([u()],pe.prototype,"tabIdx",void 0);pe=ze([w("wui-list-button")],pe);const $i=m`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Ne=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let oe=class extends f{constructor(){super(...arguments),this.unsubscribe=[],this.formRef=Gt(),this.email="",this.loading=!1,this.error=""}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{e.key==="Enter"&&this.onSubmitEmail(e)})}render(){return c`
      <form ${qt(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${h(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?c`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?c`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?c`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(!y.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(n=>n===l.state.activeChain)){const n=l.getFirstCaipNetworkSupportsAuthConnector();if(n){g.push("SwitchNetwork",{network:n});return}}try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=x.getAuthConnector();if(!n)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:o}=await n.provider.connectEmail({email:this.email});k.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),o==="VERIFY_OTP"?(k.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),g.push("EmailVerifyOtp",{email:this.email})):o==="VERIFY_DEVICE"?g.push("EmailVerifyDevice",{email:this.email}):o==="CONNECT"&&(await X.connectExternal(n,l.state.activeChain),g.replace("Account"))}catch(n){v.parseError(n)?.includes("Invalid email")?this.error="Invalid email. Try again.":U.showError(n)}finally{this.loading=!1}}onFocusEvent(){k.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};oe.styles=$i;Ne([u()],oe.prototype,"tabIdx",void 0);Ne([d()],oe.prototype,"email",void 0);Ne([d()],oe.prototype,"loading",void 0);Ne([d()],oe.prototype,"error",void 0);oe=Ne([w("w3m-email-login-widget")],oe);const Ai=m`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Ve=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let he=class extends f{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return c`
      <button ?disabled=${this.disabled} tabindex=${h(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};he.styles=[A,E,Ai];Ve([u()],he.prototype,"logo",void 0);Ve([u({type:Boolean})],he.prototype,"disabled",void 0);Ve([u()],he.prototype,"tabIdx",void 0);he=Ve([w("wui-logo-select")],he);const Si=m`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var se=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const yt=2,Ct=6;let q=class extends f{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=x.state.connectors,this.remoteFeatures=b.state.remoteFeatures,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.isPwaLoading=!1,this.unsubscribe.push(x.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(i=>i.type==="AUTH")}),b.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){const e=this.walletGuide==="explore";let i=this.remoteFeatures?.socials;return!i&&e?(i=P.DEFAULT_SOCIALS,this.renderTopViewContent(i)):i?this.renderTopViewContent(i):null}renderTopViewContent(e){return e.length===2?c` <wui-flex gap="xs">
        ${e.slice(0,yt).map(i=>c`<wui-logo-select
              data-testid=${`social-selector-${i}`}
              @click=${()=>{this.onSocialClick(i)}}
              logo=${i}
              tabIdx=${h(this.tabIdx)}
              ?disabled=${this.isPwaLoading}
            ></wui-logo-select>`)}
      </wui-flex>`:c` <wui-list-social
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      logo=${h(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${h(this.tabIdx)}
      ?disabled=${this.isPwaLoading}
    ></wui-list-social>`}bottomViewTemplate(){let e=this.remoteFeatures?.socials;const i=this.walletGuide==="explore";return(!this.authConnector||!e||e.length===0)&&i&&(e=P.DEFAULT_SOCIALS),!e||e.length<=yt?null:e&&e.length>Ct?c`<wui-flex gap="xs">
        ${e.slice(1,Ct-1).map(o=>c`<wui-logo-select
              data-testid=${`social-selector-${o}`}
              @click=${()=>{this.onSocialClick(o)}}
              logo=${o}
              tabIdx=${h(this.tabIdx)}
              ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${h(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?c`<wui-flex gap="xs">
      ${e.slice(1,e.length).map(o=>c`<wui-logo-select
            data-testid=${`social-selector-${o}`}
            @click=${()=>{this.onSocialClick(o)}}
            logo=${o}
            tabIdx=${h(this.tabIdx)}
            ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){g.push("ConnectSocials")}async onSocialClick(e){if(!y.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(n=>n===l.state.activeChain)){const n=l.getFirstCaipNetworkSupportsAuthConnector();if(n){g.push("SwitchNetwork",{network:n});return}}e&&await Yt(e)}async handlePwaFrameLoad(){if(v.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof Xt&&await this.authConnector.provider.init()}catch(e){Vt.open({shortMessage:"Error loading embedded wallet in PWA",longMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}};q.styles=Si;se([u()],q.prototype,"walletGuide",void 0);se([u()],q.prototype,"tabIdx",void 0);se([d()],q.prototype,"connectors",void 0);se([d()],q.prototype,"remoteFeatures",void 0);se([d()],q.prototype,"authConnector",void 0);se([d()],q.prototype,"isPwaLoading",void 0);q=se([w("w3m-social-login-widget")],q);const Ni=m`
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var ot=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ke=class extends f{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return this.walletGuide==="explore"?c`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:c`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s","0","s","0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${h(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){g.push("Create")}};ke.styles=Ni;ot([u()],ke.prototype,"tabIdx",void 0);ot([u()],ke.prototype,"walletGuide",void 0);ke=ot([w("w3m-wallet-guide")],ke);var Et=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Xe=class extends f{constructor(){super(...arguments),this.tabIdx=void 0}render(){return c`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${h(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${h(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Et([u()],Xe.prototype,"tabIdx",void 0);Xe=Et([w("w3m-wallet-login-list")],Xe);const Ti=m`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var j=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const Ii=470;let I=class extends f{constructor(){super(),this.unsubscribe=[],this.connectors=x.state.connectors,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.features=b.state.features,this.remoteFeatures=b.state.remoteFeatures,this.enableWallets=b.state.enableWallets,this.noAdapters=l.state.noAdapters,this.walletGuide="get-started",this.checked=Ie.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!l.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!l.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(x.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(i=>i.type==="AUTH"),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),b.subscribeKey("features",e=>{this.features=e}),b.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),b.subscribeKey("enableWallets",e=>this.enableWallets=e),l.subscribeKey("noAdapters",e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures)),Ie.subscribeKey("isLegalCheckboxChecked",e=>this.checked=e))}disconnectedCallback(){this.unsubscribe.forEach(i=>i()),this.resizeObserver?.disconnect(),this.shadowRoot?.querySelector(".connect")?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:i}=b.state,n=b.state.features?.legalCheckbox,a=!!(e||i)&&!!n&&this.walletGuide==="get-started"&&!this.checked,s={connect:!0,disabled:a},Me=b.state.enableWalletGuide,Ut=this.enableWallets,Bt=this.isSocialEnabled||this.authConnector,Lt=a?-1:void 0;return c`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${dt(s)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${Bt&&Ut&&Me&&this.walletGuide==="get-started"?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(Lt)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(a)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}setEmailAndSocialEnableCheck(e,i){this.isEmailEnabled=i?.email&&!e,this.isSocialEnabled=i?.socials&&i.socials.length>0&&!e,this.remoteFeatures=i,this.noAdapters=e}checkIfAuthEnabled(e){const i=e.filter(o=>o.type===Ft.CONNECTOR_TYPE_AUTH).map(o=>o.chain);return y.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(o=>i.includes(o))}renderConnectMethod(e){const i=lt.getConnectOrderMethod(this.features,this.connectors);return c`${i.map((n,o)=>{switch(n){case"email":return c`${this.emailTemplate(e)} ${this.separatorTemplate(o,"email")}`;case"social":return c`${this.socialListTemplate(e)}
          ${this.separatorTemplate(o,"social")}`;case"wallet":return c`${this.walletListTemplate(e)}
          ${this.separatorTemplate(o,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const n=lt.getConnectOrderMethod(this.features,this.connectors)[e+1];return n?this.checkMethodEnabled(n)?n:this.checkIsThereNextMethod(e+1):void 0}separatorTemplate(e,i){const n=this.checkIsThereNextMethod(e),o=this.walletGuide==="explore";switch(i){case"wallet":return this.enableWallets&&n&&!o?c`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const t=n==="social";return this.isAuthEnabled&&this.isEmailEnabled&&!t&&n?c`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const t=n==="email";return this.isAuthEnabled&&this.isSocialEnabled&&!t&&n?c`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return!this.isEmailEnabled||!this.isAuthEnabled?null:c`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${h(e)}
    ></w3m-email-login-widget>`}socialListTemplate(e){return!this.isSocialEnabled||!this.isAuthEnabled?null:c`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${h(e)}
    ></w3m-social-login-widget>`}walletListTemplate(e){const i=this.enableWallets,n=this.features?.emailShowWallets===!1,o=this.features?.collapseWallets,t=n||o;return!i||(v.isTelegram()&&(v.isSafari()||v.isIos())&&X.connectWalletConnect().catch(s=>({})),this.walletGuide==="explore")?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&t?c`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${h(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:c`<w3m-wallet-login-list tabIdx=${h(e)}></w3m-wallet-login-list>`}guideTemplate(e=!1){if(!b.state.enableWalletGuide)return null;const n={guide:!0,disabled:e},o=e?-1:void 0;return!this.authConnector&&!this.isSocialEnabled?null:c`
      ${this.walletGuide==="explore"&&!l.state.noAdapters?c`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`:null}
      <w3m-wallet-guide
        class=${dt(n)}
        tabIdx=${h(o)}
        walletGuide=${this.walletGuide}
      ></w3m-wallet-guide>
    `}legalCheckboxTemplate(){return this.walletGuide==="explore"?null:c`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".connect");if(!e)return;e.scrollHeight>Ii?(e.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 40px,
          black calc(100% - 40px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--connect-scroll--top-opacity",pt.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",pt.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){g.push("ConnectWallets")}};I.styles=Ti;j([d()],I.prototype,"connectors",void 0);j([d()],I.prototype,"authConnector",void 0);j([d()],I.prototype,"features",void 0);j([d()],I.prototype,"remoteFeatures",void 0);j([d()],I.prototype,"enableWallets",void 0);j([d()],I.prototype,"noAdapters",void 0);j([u()],I.prototype,"walletGuide",void 0);j([d()],I.prototype,"checked",void 0);j([d()],I.prototype,"isEmailEnabled",void 0);j([d()],I.prototype,"isSocialEnabled",void 0);j([d()],I.prototype,"isAuthEnabled",void 0);I=j([w("w3m-connect-view")],I);var Ei=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let kt=class extends Ht{constructor(){if(super(),this.externalViewUnsubscribe=[],!this.connector)throw new Error("w3m-connecting-view: No connector provided");k.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(l.subscribeKey("activeCaipAddress",e=>{e&&$.close()}))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id!==y.CONNECTOR_ID.COINBASE_SDK||!this.error)&&(await X.connectExternal(this.connector,this.connector.chain),k.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){k.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};kt=Ei([w("w3m-connecting-external-view")],kt);const _i=m`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var _t=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ee=class extends f{constructor(){super(),this.unsubscribe=[],this.activeConnector=x.state.activeConnector,this.unsubscribe.push(x.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${h(C.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map(e=>e.name?c`
            <wui-list-wallet
              imageSrc=${h(C.getChainImage(e.chain))}
              name=${y.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              data-testid="wui-list-chain-${e.chain}"
            ></wui-list-wallet>
          `:null)}onConnector(e){const i=this.activeConnector?.connectors?.find(n=>n.chain===e.chain);if(!i){U.showError("Failed to find connector");return}i.id==="walletConnect"?v.isMobile()?g.push("AllWallets"):g.push("ConnectingWalletConnect"):g.push("ConnectingExternal",{connector:i})}};Ee.styles=_i;_t([d()],Ee.prototype,"activeConnector",void 0);Ee=_t([w("w3m-connecting-multi-chain-view")],Ee);const Oi=m`
  .continue-button-container {
    width: 100%;
  }
`;var Ot=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let _e=class extends f{constructor(){super(...arguments),this.loading=!1}render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{v.openHref(Jt.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return c` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return c`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){const e=l.state.activeChain;g.push("RegisterAccountName"),k.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:p.state.preferredAccountTypes?.[e]===_.ACCOUNT_TYPES.SMART_ACCOUNT}})}};_e.styles=Oi;Ot([d()],_e.prototype,"loading",void 0);_e=Ot([w("w3m-choose-account-name-view")],_e);var Ri=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const Wi="https://walletconnect.com/explorer";let $t=class extends f{render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{v.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:i}=Mt.state,{customWallets:n}=b.state;return[...i,...n??[],...e].slice(0,4).map(t=>c`
        <wui-list-wallet
          name=${t.name??"Unknown"}
          tagVariant="main"
          imageSrc=${h(C.getWalletImage(t))}
          @click=${()=>{v.openHref(t.homepage??Wi,"_blank")}}
        ></wui-list-wallet>
      `)}};$t=Ri([w("w3m-get-wallet-view")],$t);var Rt=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Je=class extends f{constructor(){super(...arguments),this.data=[]}render(){return c`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>c`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(i=>c`<wui-visual name=${i}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};Rt([u({type:Array})],Je.prototype,"data",void 0);Je=Rt([w("w3m-help-widget")],Je);var Pi=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const Di=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let At=class extends f{render(){return c`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Di}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){k.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),g.push("GetWallet")}};At=Pi([w("w3m-what-is-a-wallet-view")],At);const ji=m`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Wt=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Oe=class extends f{constructor(){super(),this.unsubscribe=[],this.checked=Ie.state.isLegalCheckboxChecked,this.unsubscribe.push(Ie.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:i}=b.state,n=b.state.features?.legalCheckbox,t=!!(e||i)&&!!n,a=t&&!this.checked,s=a?-1:void 0;return c`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${t?["0","s","s","s"]:"s"}
        gap="xs"
        class=${h(a?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${h(s)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};Oe.styles=ji;Wt([d()],Oe.prototype,"checked",void 0);Oe=Wt([w("w3m-connect-wallets-view")],Oe);const Ui=m`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Bi=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Qe=class extends f{render(){return c`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Qe.styles=[A,Ui];Qe=Bi([w("wui-loading-hexagon")],Qe);const Li=m`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var at=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let $e=class extends f{constructor(){super(),this.network=g.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),i=this.getSubLabel();return c`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${h(C.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:c`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${i}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=l.state.activeChain,i=x.getConnectorId(e);return x.getAuthConnector()&&i===y.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const e=l.state.activeChain,i=x.getConnectorId(e);return x.getAuthConnector()&&i===y.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onSwitchNetwork(){try{this.error=!1,l.state.activeChain!==this.network?.chainNamespace&&l.setIsSwitchingNamespace(!0),this.network&&l.switchActiveNetwork(this.network)}catch{this.error=!0}}};$e.styles=Li;at([d()],$e.prototype,"showRetry",void 0);at([d()],$e.prototype,"error",void 0);$e=at([w("w3m-network-switch-view")],$e);const zi=m`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var be=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Z=class extends f{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return c`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?c`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?c`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:c`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};Z.styles=[A,E,zi];be([u()],Z.prototype,"imageSrc",void 0);be([u()],Z.prototype,"name",void 0);be([u({type:Boolean})],Z.prototype,"disabled",void 0);be([u({type:Boolean})],Z.prototype,"selected",void 0);be([u({type:Boolean})],Z.prototype,"transparent",void 0);Z=be([w("wui-list-network")],Z);const Vi=m`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var Te=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let ae=class extends f{constructor(){super(),this.unsubscribe=[],this.network=l.state.activeCaipNetwork,this.requestedCaipNetworks=l.getCaipNetworks(),this.search="",this.onDebouncedSearch=v.debounce(e=>{this.search=e},100),this.unsubscribe.push(fe.subscribeNetworkImages(()=>this.requestUpdate()),l.subscribeKey("activeCaipNetwork",e=>this.network=e),l.subscribe(()=>{this.requestedCaipNetworks=l.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return c`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){k.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),g.push("WhatIsANetwork")}networksTemplate(){const e=l.getAllApprovedCaipNetworkIds(),i=v.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=i?.filter(n=>n?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=i,this.filteredNetworks?.map(n=>c`
        <wui-list-network
          .selected=${this.network?.id===n.id}
          imageSrc=${h(C.getNetworkImage(n))}
          type="network"
          name=${n.name??n.id}
          @click=${()=>this.onSwitchNetwork(n)}
          .disabled=${this.getNetworkDisabled(n)}
          data-testid=${`w3m-network-switch-${n.name??n.id}`}
        ></wui-list-network>
      `)}getNetworkDisabled(e){const i=e.chainNamespace,n=p.getCaipAddress(i),o=l.getAllApprovedCaipNetworkIds(),t=l.getNetworkProp("supportsAllNetworks",i)!==!1,a=x.getConnectorId(i),s=x.getAuthConnector(),Me=a===y.CONNECTOR_ID.AUTH&&s;return!n||t||Me?!1:!o?.includes(e.caipNetworkId)}onSwitchNetwork(e){Kt.onSwitchNetwork({network:e})}};ae.styles=Vi;Te([d()],ae.prototype,"network",void 0);Te([d()],ae.prototype,"requestedCaipNetworks",void 0);Te([d()],ae.prototype,"filteredNetworks",void 0);Te([d()],ae.prototype,"search",void 0);ae=Te([w("w3m-networks-view")],ae);const Fi=m`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var Pt=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const Mi={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let Re=class extends f{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=g.state.data?.switchToChain,this.caipNetwork=g.state.data?.network,this.activeChain=l.state.activeChain}firstUpdated(){this.unsubscribe.push(l.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.switchToChain?y.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const i=y.CHAIN_NAME_MAP[this.switchToChain];return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${h(Mi[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${i}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${i}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(l.setIsSwitchingNamespace(!0),x.setFilterByNamespace(this.switchToChain),this.caipNetwork?await l.switchActiveNetwork(this.caipNetwork):l.setActiveNamespace(this.switchToChain),g.reset("Connect"))}};Re.styles=Fi;Pt([u()],Re.prototype,"activeChain",void 0);Re=Pt([w("w3m-switch-active-chain-view")],Re);var Ki=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};const Hi=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let St=class extends f{render(){return c`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Hi}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{v.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};St=Ki([w("w3m-what-is-a-network-view")],St);const Gi=m`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Dt=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let We=class extends f{constructor(){super(),this.swapUnsupportedChain=g.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconecting=!1,this.unsubscribe.push(fe.subscribeNetworkImages(()=>this.requestUpdate()))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?c`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:c`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=l.getAllRequestedCaipNetworks(),i=l.getAllApprovedCaipNetworkIds(),n=v.sortRequestedNetworks(i,e);return(this.swapUnsupportedChain?n.filter(t=>P.SWAP_SUPPORTED_NETWORKS.includes(t.caipNetworkId)):n).map(t=>c`
        <wui-list-network
          imageSrc=${h(C.getNetworkImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(t)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await X.disconnect(),$.close()}catch{k.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),U.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const i=p.state.caipAddress,n=l.getAllApprovedCaipNetworkIds(),o=l.getNetworkProp("supportsAllNetworks",e.chainNamespace),t=g.state.data;i?n?.includes(e.caipNetworkId)?await l.switchActiveNetwork(e):o?g.push("SwitchNetwork",{...t,network:e}):g.push("SwitchNetwork",{...t,network:e}):i||(l.setActiveCaipNetwork(e),g.push("Connect"))}};We.styles=Gi;Dt([d()],We.prototype,"disconecting",void 0);We=Dt([w("w3m-unsupported-chain-view")],We);const qi=m`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var rt=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ae=class extends f{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return c`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Ae.styles=[A,E,qi];rt([u()],Ae.prototype,"icon",void 0);rt([u()],Ae.prototype,"text",void 0);Ae=rt([w("wui-banner")],Ae);const Yi=m`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var jt=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Pe=class extends f{constructor(){super(),this.unsubscribe=[],this.preferredAccountTypes=p.state.preferredAccountTypes,this.unsubscribe.push(p.subscribeKey("preferredAccountTypes",e=>{this.preferredAccountTypes=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=l.getAllRequestedCaipNetworks(),i=l.getAllApprovedCaipNetworkIds(),n=l.state.activeCaipNetwork,o=l.checkIfSmartAccountEnabled();let t=v.sortRequestedNetworks(i,e);if(o&&this.preferredAccountTypes?.[n?.chainNamespace]===_.ACCOUNT_TYPES.SMART_ACCOUNT){if(!n)return null;t=[n]}return t.filter(s=>s.chainNamespace===n?.chainNamespace).map(s=>c`
        <wui-list-network
          imageSrc=${h(C.getNetworkImage(s))}
          name=${s.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};Pe.styles=Yi;jt([d()],Pe.prototype,"preferredAccountTypes",void 0);Pe=jt([w("w3m-wallet-compatible-networks-view")],Pe);const Xi=m`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Fe=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let we=class extends f{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,c`${this.templateVisual()}`}templateVisual(){return this.imageSrc?c`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:c`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};we.styles=[A,Xi];Fe([u()],we.prototype,"imageSrc",void 0);Fe([u()],we.prototype,"alt",void 0);Fe([u({type:Boolean})],we.prototype,"borderRadiusFull",void 0);we=Fe([w("wui-visual-thumbnail")],we);const Ji=m`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Qi=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let Ze=class extends f{constructor(){super(...arguments),this.dappImageUrl=b.state.metadata?.icons,this.walletImageUrl=p.state.connectedWalletInfo?.icon}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return c`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,i){e.animate([{transform:"translateX(0px)"},{transform:i}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Ze.styles=Ji;Ze=Qi([w("w3m-siwx-sign-message-thumbnails")],Ze);var st=function(r,e,i,n){var o=arguments.length,t=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,i,n);else for(var s=r.length-1;s>=0;s--)(a=r[s])&&(t=(o<3?a(t):o>3?a(e,i,t):a(e,i))||t);return o>3&&t&&Object.defineProperty(e,i,t),t};let De=class extends f{constructor(){super(...arguments),this.dappName=b.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return c`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,await ut.requestSignMessage().finally(()=>this.isSigning=!1)}async onCancel(){this.isCancelling=!0,await ut.cancelSignMessage().finally(()=>this.isCancelling=!1)}};st([d()],De.prototype,"isCancelling",void 0);st([d()],De.prototype,"isSigning",void 0);De=st([w("w3m-siwx-sign-message-view")],De);export{wt as AppKitAccountButton,gt as AppKitButton,bt as AppKitConnectButton,vt as AppKitNetworkButton,ht as W3mAccountButton,L as W3mAccountSettingsView,Ye as W3mAccountView,Go as W3mAllWalletsView,ft as W3mButton,_e as W3mChooseAccountNameView,mt as W3mConnectButton,I as W3mConnectView,Oe as W3mConnectWalletsView,kt as W3mConnectingExternalView,Ee as W3mConnectingMultiChainView,qo as W3mConnectingWcBasicView,Yo as W3mConnectingWcView,Xo as W3mDownloadsView,$t as W3mGetWalletView,xt as W3mNetworkButton,$e as W3mNetworkSwitchView,ae as W3mNetworksView,Q as W3mProfileView,Ko as W3mRouter,De as W3mSIWXSignMessageView,Re as W3mSwitchActiveChainView,Ce as W3mSwitchAddressView,We as W3mUnsupportedChainView,Pe as W3mWalletCompatibleNetworksView,St as W3mWhatIsANetworkView,At as W3mWhatIsAWalletView};
