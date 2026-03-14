import{i as y,r as E,a as f,x as a,e as M,d as b,a3 as m,O as j,g as p,m as S,R as g,ak as X,l as $,f as w,n as ge,o as st,ai as ve,k as Ie,ab as qe,T as Oe,S as oe,M as He,u as Fe,c as lt}from"./constants-BMPBLtAJ.js";import{n as c,c as h,o as u,r as d,U as P}from"./index-1AHWBucV.js";import"./index-BWFiiVFd.js";import{n as at}from"./networkMd-C2LxY7V0.js";import"./index-C-sdOd7E.js";import"./index-DIjJpWMz.js";import"./index-DS2FJztI.js";import"./index-C3vzan_K.js";import"./index-DWfZvkM4.js";import"./index-Be4IHTJO.js";import"./index-CdRv9cz6.js";import"./index-BD2Bcvcu.js";import{e as Ge,n as Xe}from"./ref-Csg4BIxb.js";import"./index-fUXkaBea.js";import"./index-rkm7du_E.js";import"./index-DtOypTZf.js";const ct=y`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Qe=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};const Re=4;let re=class extends f{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<Re;return a`${this.walletImages.slice(0,Re).map(({src:n,walletName:i})=>a`
            <wui-wallet-image
              size="inherit"
              imageSrc=${n}
              name=${u(i)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(Re-this.walletImages.length)].map(()=>a` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};re.styles=[E,ct];Qe([c({type:Array})],re.prototype,"walletImages",void 0);re=Qe([h("wui-all-wallets-image")],re);const dt=y`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var _=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let x=class extends f{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return a`
      <button ?disabled=${this.disabled} tabindex=${u(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?a` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?a` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?a`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?a`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?a`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?a`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?a`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};x.styles=[E,M,dt];_([c({type:Array})],x.prototype,"walletImages",void 0);_([c()],x.prototype,"imageSrc",void 0);_([c()],x.prototype,"name",void 0);_([c()],x.prototype,"tagLabel",void 0);_([c()],x.prototype,"tagVariant",void 0);_([c()],x.prototype,"icon",void 0);_([c()],x.prototype,"walletIcon",void 0);_([c()],x.prototype,"tabIdx",void 0);_([c({type:Boolean})],x.prototype,"installed",void 0);_([c({type:Boolean})],x.prototype,"disabled",void 0);_([c({type:Boolean})],x.prototype,"showAllWallets",void 0);_([c({type:Boolean})],x.prototype,"loading",void 0);_([c({type:String})],x.prototype,"loadingSpinnerColor",void 0);x=_([h("wui-list-wallet")],x);var H=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let B=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.count=m.state.count,this.filteredCount=m.state.filteredWallets.length,this.isFetchingRecommendedWallets=m.state.isFetchingRecommendedWallets,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e),m.subscribeKey("count",e=>this.count=e),m.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),m.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(v=>v.id==="walletConnect"),{allWallets:n}=j.state;if(!e||n==="HIDE"||n==="ONLY_MOBILE"&&!p.isMobile())return null;const i=m.state.featured.length,o=this.count+i,t=o<10?o:Math.floor(o/10)*10,r=this.filteredCount>0?this.filteredCount:t;let l=`${r}`;return this.filteredCount>0?l=`${this.filteredCount}`:r<o&&(l=`${r}+`),a`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${l}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${u(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){S.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),g.push("AllWallets")}};H([c()],B.prototype,"tabIdx",void 0);H([d()],B.prototype,"connectors",void 0);H([d()],B.prototype,"count",void 0);H([d()],B.prototype,"filteredCount",void 0);H([d()],B.prototype,"isFetchingRecommendedWallets",void 0);B=H([h("w3m-all-wallets-widget")],B);var Le=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let se=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(n=>n.type==="ANNOUNCED");return e?.length?a`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(X.showConnector).map(n=>a`
              <wui-list-wallet
                imageSrc=${u($.getConnectorImage(n))}
                name=${n.name??"Unknown"}
                @click=${()=>this.onConnector(n)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${n.id}`}
                .installed=${!0}
                tabIdx=${u(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.id==="walletConnect"?p.isMobile()?g.push("AllWallets"):g.push("ConnectingWalletConnect"):g.push("ConnectingExternal",{connector:e})}};Le([c()],se.prototype,"tabIdx",void 0);Le([d()],se.prototype,"connectors",void 0);se=Le([h("w3m-connect-announced-widget")],se);var ye=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let Q=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.loading=!1,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e)),p.isTelegram()&&p.isIos()&&(this.loading=!w.state.wcUri,this.unsubscribe.push(w.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=j.state;if(!e?.length)return this.style.cssText="display: none",null;const n=this.filterOutDuplicateWallets(e);return a`<wui-flex flexDirection="column" gap="xs">
      ${n.map(i=>a`
          <wui-list-wallet
            imageSrc=${u($.getWalletImage(i))}
            name=${i.name??"Unknown"}
            @click=${()=>this.onConnectWallet(i)}
            data-testid=${`wallet-selector-${i.id}`}
            tabIdx=${u(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const n=ge.getRecentWallets(),i=this.connectors.map(l=>l.info?.rdns).filter(Boolean),o=n.map(l=>l.rdns).filter(Boolean),t=i.concat(o);if(t.includes("io.metamask.mobile")&&p.isMobile()){const l=t.indexOf("io.metamask.mobile");t[l]="io.metamask"}return e.filter(l=>!t.includes(String(l?.rdns)))}onConnectWallet(e){this.loading||g.push("ConnectingWalletConnect",{wallet:e})}};ye([c()],Q.prototype,"tabIdx",void 0);ye([d()],Q.prototype,"connectors",void 0);ye([d()],Q.prototype,"loading",void 0);Q=ye([h("w3m-connect-custom-widget")],Q);var Pe=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let le=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const i=this.connectors.filter(o=>o.type==="EXTERNAL").filter(X.showConnector).filter(o=>o.id!==st.CONNECTOR_ID.COINBASE_SDK);return i?.length?a`
      <wui-flex flexDirection="column" gap="xs">
        ${i.map(o=>a`
            <wui-list-wallet
              imageSrc=${u($.getConnectorImage(o))}
              .installed=${!0}
              name=${o.name??"Unknown"}
              data-testid=${`wallet-selector-external-${o.id}`}
              @click=${()=>this.onConnector(o)}
              tabIdx=${u(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){g.push("ConnectingExternal",{connector:e})}};Pe([c()],le.prototype,"tabIdx",void 0);Pe([d()],le.prototype,"connectors",void 0);le=Pe([h("w3m-connect-external-widget")],le);var De=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let ae=class extends f{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?a`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(e=>a`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${u($.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${u(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){b.selectWalletConnector(e)}};De([c()],ae.prototype,"tabIdx",void 0);De([c()],ae.prototype,"wallets",void 0);ae=De([h("w3m-connect-featured-widget")],ae);var ke=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let ce=class extends f{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){const e=this.connectors.filter(X.showConnector);return e.length===0?(this.style.cssText="display: none",null):a`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(n=>a`
            <wui-list-wallet
              imageSrc=${u($.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${n.id}`}
              @click=${()=>this.onConnector(n)}
              tabIdx=${u(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){b.setActiveConnector(e),g.push("ConnectingExternal",{connector:e})}};ke([c()],ce.prototype,"tabIdx",void 0);ke([c()],ce.prototype,"connectors",void 0);ce=ke([h("w3m-connect-injected-widget")],ce);var Ae=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let de=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(n=>n.type==="MULTI_CHAIN"&&n.name!=="WalletConnect");return e?.length?a`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(n=>a`
            <wui-list-wallet
              imageSrc=${u($.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${n.id}`}
              @click=${()=>this.onConnector(n)}
              tabIdx=${u(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){b.setActiveConnector(e),g.push("ConnectingMultiChain")}};Ae([c()],de.prototype,"tabIdx",void 0);Ae([d()],de.prototype,"connectors",void 0);de=Ae([h("w3m-connect-multi-chain-widget")],de);var xe=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let J=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.loading=!1,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e)),p.isTelegram()&&p.isIos()&&(this.loading=!w.state.wcUri,this.unsubscribe.push(w.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const n=ge.getRecentWallets().filter(i=>!ve.isExcluded(i)).filter(i=>!this.hasWalletConnector(i)).filter(i=>this.isWalletCompatibleWithCurrentChain(i));return n.length?a`
      <wui-flex flexDirection="column" gap="xs">
        ${n.map(i=>a`
            <wui-list-wallet
              imageSrc=${u($.getWalletImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnectWallet(i)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${u(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){this.loading||b.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(n=>n.id===e.id||n.name===e.name)}isWalletCompatibleWithCurrentChain(e){const n=Ie.state.activeChain;return n&&e.chains?e.chains.some(i=>{const o=i.split(":")[0];return n===o}):!0}};xe([c()],J.prototype,"tabIdx",void 0);xe([d()],J.prototype,"connectors",void 0);xe([d()],J.prototype,"loading",void 0);J=xe([h("w3m-connect-recent-widget")],J);var Ce=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let Y=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,p.isTelegram()&&p.isIos()&&(this.loading=!w.state.wcUri,this.unsubscribe.push(w.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const{connectors:e}=b.state,{customWallets:n,featuredWalletIds:i}=j.state,o=ge.getRecentWallets(),t=e.find(R=>R.id==="walletConnect"),l=e.filter(R=>R.type==="INJECTED"||R.type==="ANNOUNCED"||R.type==="MULTI_CHAIN").filter(R=>R.name!=="Browser Wallet");if(!t)return null;if(i||n||!this.wallets.length)return this.style.cssText="display: none",null;const v=l.length+o.length,A=Math.max(0,2-v),I=ve.filterOutDuplicateWallets(this.wallets).slice(0,A);return I.length?a`
      <wui-flex flexDirection="column" gap="xs">
        ${I.map(R=>a`
            <wui-list-wallet
              imageSrc=${u($.getWalletImage(R))}
              name=${R?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(R)}
              tabIdx=${u(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){if(this.loading)return;const n=b.getConnector(e.id,e.rdns);n?g.push("ConnectingExternal",{connector:n}):g.push("ConnectingWalletConnect",{wallet:e})}};Ce([c()],Y.prototype,"tabIdx",void 0);Ce([c()],Y.prototype,"wallets",void 0);Ce([d()],Y.prototype,"loading",void 0);Y=Ce([h("w3m-connect-recommended-widget")],Y);var $e=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let Z=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.connectorImages=qe.state.connectorImages,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e),qe.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(p.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(i=>i.id==="walletConnect");if(!e)return this.style.cssText="display: none",null;const n=e.imageUrl||this.connectorImages[e?.imageId??""];return a`
      <wui-list-wallet
        imageSrc=${u(n)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${u(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(e){b.setActiveConnector(e),g.push("ConnectingWalletConnect")}};$e([c()],Z.prototype,"tabIdx",void 0);$e([d()],Z.prototype,"connectors",void 0);$e([d()],Z.prototype,"connectorImages",void 0);Z=$e([h("w3m-connect-walletconnect-widget")],Z);const ut=y`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var te=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let U=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.recommended=m.state.recommended,this.featured=m.state.featured,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e),m.subscribeKey("recommended",e=>this.recommended=e),m.subscribeKey("featured",e=>this.featured=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:e,recent:n,announced:i,injected:o,multiChain:t,recommended:r,featured:l,external:v}=X.getConnectorsByType(this.connectors,this.recommended,this.featured);return X.getConnectorTypeOrder({custom:e,recent:n,announced:i,injected:o,multiChain:t,recommended:r,featured:l,external:v}).map(I=>{switch(I){case"injected":return a`
            ${t.length?a`<w3m-connect-multi-chain-widget
                  tabIdx=${u(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?a`<w3m-connect-announced-widget
                  tabIdx=${u(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${o.length?a`<w3m-connect-injected-widget
                  .connectors=${o}
                  tabIdx=${u(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return a`<w3m-connect-walletconnect-widget
            tabIdx=${u(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return a`<w3m-connect-recent-widget
            tabIdx=${u(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return a`<w3m-connect-featured-widget
            .wallets=${l}
            tabIdx=${u(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return a`<w3m-connect-custom-widget
            tabIdx=${u(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return a`<w3m-connect-external-widget
            tabIdx=${u(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return a`<w3m-connect-recommended-widget
            .wallets=${r}
            tabIdx=${u(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${I}`),null}})}};U.styles=ut;te([c()],U.prototype,"tabIdx",void 0);te([d()],U.prototype,"connectors",void 0);te([d()],U.prototype,"recommended",void 0);te([d()],U.prototype,"featured",void 0);U=te([h("w3m-connector-list")],U);const pt=y`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var k=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let T=class extends f{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,n)=>{const i=n===this.activeTab;return a`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?a`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,n){const i=this.buttons[this.activeTab],o=this.buttons[e],t=i?.querySelector("wui-text"),r=o?.querySelector("wui-text"),l=o?.getBoundingClientRect(),v=r?.getBoundingClientRect();i&&t&&!n&&e!==this.activeTab&&(t.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&l&&v&&r&&(e!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(l.width+v.width)+6}px`,o.animate([{width:`${l.width+v.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),r.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};T.styles=[E,M,pt];k([c({type:Array})],T.prototype,"tabs",void 0);k([c()],T.prototype,"onTabChange",void 0);k([c({type:Array})],T.prototype,"buttons",void 0);k([c({type:Boolean})],T.prototype,"disabled",void 0);k([c()],T.prototype,"localTabWidth",void 0);k([d()],T.prototype,"activeTab",void 0);k([d()],T.prototype,"isDense",void 0);T=k([h("wui-tabs")],T);var Be=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let ue=class extends f{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return a`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:n})=>n),e}onTabChange(e){const n=this.platformTabs[e];n&&this.onSelectPlatfrom?.(n)}};Be([c({type:Array})],ue.prototype,"platforms",void 0);Be([c()],ue.prototype,"onSelectPlatfrom",void 0);ue=Be([h("w3m-connecting-header")],ue);const ht=y`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var We=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let z=class extends f{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return a`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};z.styles=[E,M,ht];We([c({type:Boolean})],z.prototype,"disabled",void 0);We([c()],z.prototype,"label",void 0);We([c()],z.prototype,"buttonLabel",void 0);z=We([h("wui-cta-button")],z);const ft=y`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Je=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let pe=class extends f{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:n,play_store:i,chrome_store:o,homepage:t}=this.wallet,r=p.isMobile(),l=p.isIos(),v=p.isAndroid(),A=[n,i,t,o].filter(Boolean).length>1,I=P.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return A&&!r?a`
        <wui-cta-button
          label=${`Don't have ${I}?`}
          buttonLabel="Get"
          @click=${()=>g.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!A&&t?a`
        <wui-cta-button
          label=${`Don't have ${I}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&l?a`
        <wui-cta-button
          label=${`Don't have ${I}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&v?a`
        <wui-cta-button
          label=${`Don't have ${I}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&p.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&p.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&p.openHref(this.wallet.homepage,"_blank")}};pe.styles=[ft];Je([c({type:Object})],pe.prototype,"wallet",void 0);pe=Je([h("w3m-mobile-download-links")],pe);const wt=y`
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

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
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
`;var L=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};class C extends f{constructor(){super(),this.wallet=g.state.data?.wallet,this.connector=g.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=$.getWalletImage(this.wallet)??$.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=w.state.wcUri,this.error=w.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(w.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),w.subscribeKey("wcError",e=>this.error=e)),(p.isTelegram()||p.isSafari())&&p.isIos()&&w.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),w.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.error&&(n="Connection declined"),a`
      <wui-flex
        data-error=${u(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${u(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?a`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?a`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){w.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const e=Oe.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return a`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(p.copyToClopboard(this.uri),oe.showSuccess("Link copied"))}catch{oe.showError("Failed to copy")}}}C.styles=wt;L([d()],C.prototype,"isRetrying",void 0);L([d()],C.prototype,"uri",void 0);L([d()],C.prototype,"error",void 0);L([d()],C.prototype,"ready",void 0);L([d()],C.prototype,"showRetry",void 0);L([d()],C.prototype,"secondaryBtnLabel",void 0);L([d()],C.prototype,"secondaryLabel",void 0);L([d()],C.prototype,"isLoading",void 0);L([c({type:Boolean})],C.prototype,"isMobile",void 0);L([c()],C.prototype,"onRetry",void 0);var mt=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let Me=class extends C{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),S.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=b.state,n=e.find(i=>i.type==="ANNOUNCED"&&i.info?.rdns===this.wallet?.rdns||i.type==="INJECTED"||i.name===this.wallet?.name);if(n)await w.connectExternal(n,n.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");He.close(),S.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){S.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Me=mt([h("w3m-connecting-wc-browser")],Me);var bt=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let ze=class extends C{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),S.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:n}=this.wallet,{redirect:i,href:o}=p.formatNativeUrl(e,this.uri);w.setWcLinking({name:n,href:o}),w.setRecentWallet(this.wallet),p.openHref(i,"_blank")}catch{this.error=!0}}};ze=bt([h("w3m-connecting-wc-desktop")],ze);var F=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let N=class extends C{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=j.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,link_mode:n,name:i}=this.wallet,{redirect:o,redirectUniversalLink:t,href:r}=p.formatNativeUrl(e,this.uri,n);this.redirectDeeplink=o,this.redirectUniversalLink=t,this.target=p.isIframe()?"_top":"_self",w.setWcLinking({name:i,href:r}),w.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?p.openHref(this.redirectUniversalLink,this.target):p.openHref(this.redirectDeeplink,this.target)}catch(e){S.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=Fe.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(w.subscribeKey("wcUri",()=>{this.onHandleURI()})),S.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){w.setWcError(!1),this.onConnect?.()}};F([d()],N.prototype,"redirectDeeplink",void 0);F([d()],N.prototype,"redirectUniversalLink",void 0);F([d()],N.prototype,"target",void 0);F([d()],N.prototype,"preferUniversalLinks",void 0);F([d()],N.prototype,"isLoading",void 0);N=F([h("w3m-connecting-wc-mobile")],N);const gt=y`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var vt=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let je=class extends C{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),S.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),a`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return w.setWcLinking(void 0),w.setRecentWallet(this.wallet),a` <wui-qr-code
      size=${e}
      theme=${Oe.state.themeMode}
      uri=${this.uri}
      imageSrc=${u($.getWalletImage(this.wallet))}
      color=${u(Oe.state.themeVariables["--w3m-qr-color"])}
      alt=${u(n)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return a`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};je.styles=gt;je=vt([h("w3m-connecting-wc-qrcode")],je);var yt=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let Ke=class extends f{constructor(){if(super(),this.wallet=g.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");S.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return a`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${u($.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Ke=yt([h("w3m-connecting-wc-unsupported")],Ke);var Ye=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let Se=class extends C{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=Fe.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(w.subscribeKey("wcUri",()=>{this.updateLoadingState()})),S.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:n}=this.wallet,{redirect:i,href:o}=p.formatUniversalUrl(e,this.uri);w.setWcLinking({name:n,href:o}),w.setRecentWallet(this.wallet),p.openHref(i,"_blank")}catch{this.error=!0}}};Ye([d()],Se.prototype,"isLoading",void 0);Se=Ye([h("w3m-connecting-wc-web")],Se);var ne=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let K=class extends f{constructor(){super(),this.wallet=g.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!j.state.siwx,this.remoteFeatures=j.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(j.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?a`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if(!(this.platform==="browser"||j.state.manualWCControl&&!e))try{const{wcPairingExpiry:n,status:i}=w.state;(e||j.state.enableEmbedded||p.isPairingExpired(n)||i==="connecting")&&(await w.connectWalletConnect(),this.isSiwxEnabled||He.close())}catch(n){S.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:n?.message??"Unknown"}}),w.setWcError(!0),oe.showError(n.message??"Connection error"),w.resetWcConnection(),g.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:e,desktop_link:n,webapp_link:i,injected:o,rdns:t}=this.wallet,r=o?.map(({injected_id:rt})=>rt).filter(Boolean),l=[...t?[t]:r??[]],v=j.state.isUniversalProvider?!1:l.length,A=e,I=i,R=w.checkInstalled(l),Ne=v&&R,ot=n&&!p.isMobile();Ne&&!Ie.state.noAdapters&&this.platforms.push("browser"),A&&this.platforms.push(p.isMobile()?"mobile":"qrcode"),I&&this.platforms.push("web"),ot&&this.platforms.push("desktop"),!Ne&&v&&!Ie.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return a`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return a`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return a`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return a`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return a`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return a`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?a`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const n=this.shadowRoot?.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ne([d()],K.prototype,"platform",void 0);ne([d()],K.prototype,"platforms",void 0);ne([d()],K.prototype,"isSiwxEnabled",void 0);ne([d()],K.prototype,"remoteFeatures",void 0);K=ne([h("w3m-connecting-wc-view")],K);var Ze=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let he=class extends f{constructor(){super(...arguments),this.isMobile=p.isMobile()}render(){if(this.isMobile){const{featured:e,recommended:n}=m.state,{customWallets:i}=j.state,o=ge.getRecentWallets(),t=e.length||n.length||i?.length||o.length;return a`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${t?a`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return a`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};Ze([d()],he.prototype,"isMobile",void 0);he=Ze([h("w3m-connecting-wc-basic-view")],he);const xt=y`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var et=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let fe=class extends f{constructor(){super(...arguments),this.inputElementRef=Ge(),this.checked=void 0}render(){return a`
      <label>
        <input
          ${Xe(this.inputElementRef)}
          type="checkbox"
          ?checked=${u(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};fe.styles=[E,M,lt,xt];et([c({type:Boolean})],fe.prototype,"checked",void 0);fe=et([h("wui-switch")],fe);const Ct=y`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var tt=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let we=class extends f{constructor(){super(...arguments),this.checked=void 0}render(){return a`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${u(this.checked)}></wui-switch>
      </button>
    `}};we.styles=[E,M,Ct];tt([c({type:Boolean})],we.prototype,"checked",void 0);we=tt([h("wui-certified-switch")],we);const $t=y`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var nt=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let me=class extends f{constructor(){super(...arguments),this.icon="copy"}render(){return a`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};me.styles=[E,M,$t];nt([c()],me.prototype,"icon",void 0);me=nt([h("wui-input-element")],me);const Wt=y`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var _t=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let Te=class extends f{constructor(){super(...arguments),this.inputComponentRef=Ge()}render(){return a`
      <wui-input-text
        ${Xe(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const n=this.inputComponentRef.value?.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};Te.styles=[E,Wt];Te=_t([h("wui-search-bar")],Te);const Rt=y`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var it=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let be=class extends f{constructor(){super(...arguments),this.type="wallet"}render(){return a`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?a` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${at}`:a`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};be.styles=[E,M,Rt];it([c()],be.prototype,"type",void 0);be=it([h("wui-card-select-loader")],be);const It=y`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var O=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let W=class extends f{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&P.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&P.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&P.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&P.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&P.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&P.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&P.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&P.getSpacingStyles(this.margin,3)};
    `,a`<slot></slot>`}};W.styles=[E,It];O([c()],W.prototype,"gridTemplateRows",void 0);O([c()],W.prototype,"gridTemplateColumns",void 0);O([c()],W.prototype,"justifyItems",void 0);O([c()],W.prototype,"alignItems",void 0);O([c()],W.prototype,"justifyContent",void 0);O([c()],W.prototype,"alignContent",void 0);O([c()],W.prototype,"columnGap",void 0);O([c()],W.prototype,"rowGap",void 0);O([c()],W.prototype,"gap",void 0);O([c()],W.prototype,"padding",void 0);O([c()],W.prototype,"margin",void 0);W=O([h("wui-grid")],W);const Ot=y`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var ie=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let q=class extends f{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e=this.wallet?.badge_type==="certified";return a`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${u(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?a`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():a`
      <wui-wallet-image
        size="md"
        imageSrc=${u(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return a`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=$.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await $.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};q.styles=Ot;ie([d()],q.prototype,"visible",void 0);ie([d()],q.prototype,"imageSrc",void 0);ie([d()],q.prototype,"imageLoading",void 0);ie([c()],q.prototype,"wallet",void 0);q=ie([h("w3m-all-wallets-list-item")],q);const jt=y`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var G=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};const Ve="local-paginator";let D=class extends f{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!m.state.wallets.length,this.wallets=m.state.wallets,this.recommended=m.state.recommended,this.featured=m.state.featured,this.filteredWallets=m.state.filteredWallets,this.unsubscribe.push(m.subscribeKey("wallets",e=>this.wallets=e),m.subscribeKey("recommended",e=>this.recommended=e),m.subscribeKey("featured",e=>this.featured=e),m.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return a`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const e=this.shadowRoot?.querySelector("wui-grid");e&&(await m.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,n){return[...Array(e)].map(()=>a`
        <wui-card-select-loader type="wallet" id=${u(n)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=this.filteredWallets?.length>0?p.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):p.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return ve.markWalletsAsInstalled(e).map(i=>a`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(i)}
          .wallet=${i}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:n,featured:i,count:o}=m.state,t=window.innerWidth<352?3:4,r=e.length+n.length;let v=Math.ceil(r/t)*t-r+t;return v-=e.length?i.length%t:0,o===0&&i.length>0?null:o===0||[...i,...e,...n].length<o?this.shimmerTemplate(v,Ve):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${Ve}`);e&&(this.paginationObserver=new IntersectionObserver(([n])=>{if(n?.isIntersecting&&!this.loading){const{page:i,count:o,wallets:t}=m.state;t.length<o&&m.fetchWalletsByPage({page:i+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){b.selectWalletConnector(e)}};D.styles=jt;G([d()],D.prototype,"loading",void 0);G([d()],D.prototype,"wallets",void 0);G([d()],D.prototype,"recommended",void 0);G([d()],D.prototype,"featured",void 0);G([d()],D.prototype,"filteredWallets",void 0);D=G([h("w3m-all-wallets-list")],D);const St=y`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var _e=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let V=class extends f{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?a`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await m.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=m.state,n=ve.markWalletsAsInstalled(e);return e.length?a`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${n.map(i=>a`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(i)}
              .wallet=${i}
              data-testid="wallet-search-item-${i.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:a`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){b.selectWalletConnector(e)}};V.styles=St;_e([d()],V.prototype,"loading",void 0);_e([c()],V.prototype,"query",void 0);_e([c()],V.prototype,"badge",void 0);V=_e([h("w3m-all-wallets-search")],V);var Ue=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let ee=class extends f{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=p.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return a`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?a`<w3m-all-wallets-search
            query=${this.search}
            badge=${u(this.badge)}
          ></w3m-all-wallets-search>`:a`<w3m-all-wallets-list badge=${u(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",oe.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return p.isMobile()?a`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){g.push("ConnectingWalletConnect")}};Ue([d()],ee.prototype,"search",void 0);Ue([d()],ee.prototype,"badge",void 0);ee=Ue([h("w3m-all-wallets-view")],ee);var Tt=function(s,e,n,i){var o=arguments.length,t=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,n,i);else for(var l=s.length-1;l>=0;l--)(r=s[l])&&(t=(o<3?r(t):o>3?r(e,n,t):r(e,n))||t);return o>3&&t&&Object.defineProperty(e,n,t),t};let Ee=class extends f{constructor(){super(...arguments),this.wallet=g.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return a`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?a`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?a`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?a`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?a`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&p.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&p.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&p.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&p.openHref(this.wallet.homepage,"_blank")}};Ee=Tt([h("w3m-downloads-view")],Ee);const Tn=Object.freeze(Object.defineProperty({__proto__:null,get W3mAllWalletsView(){return ee},get W3mConnectingWcBasicView(){return he},get W3mDownloadsView(){return Ee}},Symbol.toStringTag,{value:"Module"}));export{C as W,ee as a,K as b,he as c,Ee as d,Tn as e};
