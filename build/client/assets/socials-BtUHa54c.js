import{i as E,a as L,d as S,O as b,R as g,u as W,x as l,g as C,q as A,j as d,C as D,k as _,m as u,f as R,n as T,S as y,y as F,M as O,T as P}from"./constants-BMPBLtAJ.js";import{n as j,r as c,c as k,o as v}from"./index-1AHWBucV.js";import{O as I}from"./index-eF-MIft1.js";import{e as q}from"./index-JICeZze8.js";import{W as z}from"./index-1lVJ-ylQ.js";import"./index-BWFiiVFd.js";import"./index-C3vzan_K.js";import"./index-DIjJpWMz.js";import"./index-DS2FJztI.js";import"./index-Be4IHTJO.js";import"./index-CdRv9cz6.js";import"./index-DJCgIpmR.js";import"./walletConfig-6IRdRmic.js";import"./sha2-PsZP68hz.js";import"./index.es-DWy6X4lZ.js";import"./index-CJdot1dH.js";import"./to-string-CfGorqUQ.js";import"./http-DtKtQ2Cz.js";import"./ref-Csg4BIxb.js";import"./index-BD2Bcvcu.js";import"./ConstantsUtil-Dmg8YACJ.js";import"./index-rkm7du_E.js";import"./index-DamZVL1-.js";import"./index-D_sE5vDe.js";const M=E`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var w=function(s,e,i,o){var r=arguments.length,t=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(t=(r<3?n(t):r>3?n(e,i,t):n(e,i))||t);return r>3&&t&&Object.defineProperty(e,i,t),t};let h=class extends L{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=S.state.connectors,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.remoteFeatures=b.state.remoteFeatures,this.isPwaLoading=!1,this.unsubscribe.push(S.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(i=>i.type==="AUTH")}),b.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.remoteFeatures?.socials||[];const i=!!this.authConnector,o=e?.length,r=g.state.view==="ConnectSocials";return(!i||!o)&&!r?null:(r&&!o&&(e=W.DEFAULT_SOCIALS),l` <wui-flex flexDirection="column" gap="xs">
      ${e.map(t=>l`<wui-list-social
            @click=${()=>{this.onSocialClick(t)}}
            data-testid=${`social-selector-${t}`}
            name=${t}
            logo=${t}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`)}async onSocialClick(e){e&&await q(e)}async handlePwaFrameLoad(){if(C.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof z&&await this.authConnector.provider.init()}catch(e){A.open({shortMessage:"Error loading embedded wallet in PWA",longMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}};h.styles=M;w([j()],h.prototype,"tabIdx",void 0);w([c()],h.prototype,"connectors",void 0);w([c()],h.prototype,"authConnector",void 0);w([c()],h.prototype,"remoteFeatures",void 0);w([c()],h.prototype,"isPwaLoading",void 0);h=w([k("w3m-social-login-list")],h);const N=E`
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
`;var U=function(s,e,i,o){var r=arguments.length,t=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(t=(r<3?n(t):r>3?n(e,i,t):n(e,i))||t);return r>3&&t&&Object.defineProperty(e,i,t),t};let $=class extends L{constructor(){super(),this.unsubscribe=[],this.checked=I.state.isLegalCheckboxChecked,this.unsubscribe.push(I.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:i}=b.state,o=b.state.features?.legalCheckbox,t=!!(e||i)&&!!o,n=t&&!this.checked,a=n?-1:void 0;return l`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${t?["0","s","s","s"]:"s"}
        gap="xs"
        class=${v(n?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${v(a)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};$.styles=N;U([c()],$.prototype,"checked",void 0);$=U([k("w3m-connect-socials-view")],$);const V=E`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
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
  .capitalize {
    text-transform: capitalize;
  }
`;var m=function(s,e,i,o){var r=arguments.length,t=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(t=(r<3?n(t):r>3?n(e,i,t):n(e,i))||t);return r>3&&t&&Object.defineProperty(e,i,t),t};let p=class extends L{constructor(){super(),this.unsubscribe=[],this.socialProvider=d.state.socialProvider,this.socialWindow=d.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=S.getAuthConnector(),this.handleSocialConnection=async i=>{if(i.data?.resultUri)if(i.origin===D.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),d.setSocialWindow(void 0,_.state.activeChain)),this.connecting=!0,this.updateMessage();const o=i.data.resultUri;this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await R.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:o},this.authConnector.chain),this.socialProvider&&(T.setConnectedSocialProvider(this.socialProvider),u.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch{this.error=!0,this.updateMessage(),this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else g.goBack(),y.showError("Untrusted Origin"),this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},F.EmbeddedWalletAbortController.signal.addEventListener("abort",()=>{this.socialWindow&&(this.socialWindow.close(),d.setSocialWindow(void 0,_.state.activeChain))}),this.unsubscribe.push(d.subscribe(i=>{i.socialProvider&&(this.socialProvider=i.socialProvider),i.socialWindow&&(this.socialWindow=i.socialWindow),i.address&&(O.state.open||b.state.enableEmbedded)&&O.close()})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1),this.socialWindow?.close(),d.setSocialWindow(void 0,_.state.activeChain)}render(){return l`
      <wui-flex
        data-error=${v(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${v(this.socialProvider)}></wui-logo>
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
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=P.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}connectSocial(){const e=setInterval(()=>{this.socialWindow?.closed&&(!this.connecting&&g.state.view==="ConnectingSocial"&&(this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),g.goBack()),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};p.styles=V;m([c()],p.prototype,"socialProvider",void 0);m([c()],p.prototype,"socialWindow",void 0);m([c()],p.prototype,"error",void 0);m([c()],p.prototype,"connecting",void 0);m([c()],p.prototype,"message",void 0);p=m([k("w3m-connecting-social-view")],p);const G=E`
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

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;var x=function(s,e,i,o){var r=arguments.length,t=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,i,o);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(t=(r<3?n(t):r>3?n(e,i,t):n(e,i))||t);return r>3&&t&&Object.defineProperty(e,i,t),t};let f=class extends L{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=d.state.socialProvider,this.uri=d.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=S.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(d.subscribeKey("farcasterUrl",e=>{e&&(this.uri=e,this.connectFarcaster())}),d.subscribeKey("socialProvider",e=>{e&&(this.socialProvider=e)})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`${this.platformTemplate()}`}platformTemplate(){return C.isMobile()?l`${this.mobileTemplate()}`:l`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?l`${this.loadingTemplate()}`:l`${this.qrTemplate()}`}qrTemplate(){return l` <wui-flex
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
    </wui-flex>`}loadingTemplate(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
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
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return l` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
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
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=P.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await this.authConnector?.provider.connectFarcaster(),this.socialProvider&&(T.setConnectedSocialProvider(this.socialProvider),u.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0,await R.connectExternal(this.authConnector,this.authConnector.chain),this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,O.close()}catch(e){this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}}),g.goBack(),y.showError(e)}}mobileLinkTemplate(){return l`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&C.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40;return l` <wui-qr-code
      size=${e}
      theme=${P.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${v(P.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(C.copyToClopboard(this.uri),y.showSuccess("Link copied"))}catch{y.showError("Failed to copy")}}};f.styles=G;x([c()],f.prototype,"socialProvider",void 0);x([c()],f.prototype,"uri",void 0);x([c()],f.prototype,"ready",void 0);x([c()],f.prototype,"loading",void 0);f=x([k("w3m-connecting-farcaster-view")],f);export{$ as W3mConnectSocialsView,f as W3mConnectingFarcasterView,p as W3mConnectingSocialView};
