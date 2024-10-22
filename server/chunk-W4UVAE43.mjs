import './polyfills.server.mjs';
import{a as Ct,b as Mt,c as kt,f as Dt,j as Tt,m as Ft}from"./chunk-ZMLEDHGB.mjs";import{Aa as B,Ba as o,Ca as a,Da as w,E as ht,Ea as V,F as ut,Fa as F,Ga as d,H as mt,Ha as v,J as pt,K as p,L as f,N as x,P as l,Q as T,Qa as xt,T as _,U as g,V as b,W as ft,Ya as Et,ab as O,c as rt,da as E,f as ot,fa as R,fb as wt,ib as At,ja as gt,ka as K,la as _t,n as H,o as at,pa as P,q as ct,ra as j,sa as bt,ta as vt,ua as yt,v as dt,x as lt,xa as It}from"./chunk-NOGTELAM.mjs";import{a as D}from"./chunk-5XUXGTUW.mjs";var Ot=(()=>{class e{constructor(){this.title="my-website"}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=_({type:e,selectors:[["app-root"]],standalone:!0,features:[v],decls:2,vars:0,consts:[[1,"main-content"]],template:function(n,s){n&1&&(o(0,"div",0),w(1,"router-outlet"),a())},dependencies:[Tt]})}}return e})();var G;try{G=typeof Intl<"u"&&Intl.v8BreakIterator}catch{G=!1}var N=(()=>{class e{constructor(t){this._platformId=t,this.isBrowser=this._platformId?At(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||G)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static{this.\u0275fac=function(n){return new(n||e)(l(gt))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var S;function de(){if(S==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>S=!0}))}finally{S=S||!1}return S}function $(e){return de()?e:!!e.capture}function Rt(e){return e.composedPath?e.composedPath()[0]:e.target}function St(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function W(e){return Array.isArray(e)?e:[e]}function Y(e){return e instanceof R?e.nativeElement:e}var Lt=new Set,A,le=(()=>{class e{constructor(t,n){this._platform=t,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ue}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&he(t,this._nonce),this._matchMedia(t)}static{this.\u0275fac=function(n){return new(n||e)(l(N),l(_t,8))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function he(e,i){if(!Lt.has(e))try{A||(A=document.createElement("style"),i&&A.setAttribute("nonce",i),A.setAttribute("type","text/css"),document.head.appendChild(A)),A.sheet&&(A.sheet.insertRule(`@media ${e} {body{ }}`,0),Lt.add(e))}catch(t){console.error(t)}}function ue(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var jt=(()=>{class e{constructor(t,n){this._mediaMatcher=t,this._zone=n,this._queries=new Map,this._destroySubject=new ot}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Pt(W(t)).some(s=>this._registerQuery(s).mql.matches)}observe(t){let s=Pt(W(t)).map(c=>this._registerQuery(c).observable),r=at(s);return r=ct(r.pipe(lt(1)),r.pipe(ht(1),dt(0))),r.pipe(H(c=>{let m={matches:!1,breakpoints:{}};return c.forEach(({matches:M,query:k})=>{m.matches=m.matches||M,m.breakpoints[k]=M}),m}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let n=this._mediaMatcher.matchMedia(t),r={observable:new rt(c=>{let m=M=>this._zone.run(()=>c.next(M));return n.addListener(m),()=>{n.removeListener(m)}}).pipe(ut(n),H(({matches:c})=>({query:t,matches:c})),mt(this._destroySubject)),mql:n};return this._queries.set(t,r),r}static{this.\u0275fac=function(n){return new(n||e)(l(le),l(E))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Pt(e){return e.map(i=>i.split(",")).reduce((i,t)=>i.concat(t)).map(i=>i.trim())}function zt(e){return e.buttons===0||e.detail===0}function Ut(e){let i=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var C=function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e}(C||{}),Bt="cdk-high-contrast-black-on-white",Vt="cdk-high-contrast-white-on-black",Z="cdk-high-contrast-active",Ht=(()=>{class e{constructor(t,n){this._platform=t,this._document=n,this._breakpointSubscription=T(jt).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return C.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let n=this._document.defaultView||window,s=n&&n.getComputedStyle?n.getComputedStyle(t):null,r=(s&&s.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return C.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return C.BLACK_ON_WHITE}return C.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Z,Bt,Vt),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===C.BLACK_ON_WHITE?t.add(Z,Bt):n===C.WHITE_ON_BLACK&&t.add(Z,Vt)}}static{this.\u0275fac=function(n){return new(n||e)(l(N),l(O))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var X=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=f({})}}return e})();function ve(){return!0}var ye=new x("mat-sanity-checks",{providedIn:"root",factory:ve}),J=(()=>{class e{constructor(t,n,s){this._sanityChecks=n,this._document=s,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return St()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[t]}static{this.\u0275fac=function(n){return new(n||e)(l(Ht),l(ye,8),l(O))}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=f({imports:[X,X]})}}return e})();var u=function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e}(u||{}),q=class{constructor(i,t,n,s=!1){this._renderer=i,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=s,this.state=u.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Kt=$({passive:!0,capture:!0}),Q=class{constructor(){this._events=new Map,this._delegateEventHandler=i=>{let t=Rt(i);t&&this._events.get(i.type)?.forEach((n,s)=>{(s===t||s.contains(t))&&n.forEach(r=>r.handleEvent(i))})}}addHandler(i,t,n,s){let r=this._events.get(t);if(r){let c=r.get(n);c?c.add(s):r.set(n,new Set([s]))}else this._events.set(t,new Map([[n,new Set([s])]])),i.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Kt)})}removeHandler(i,t,n){let s=this._events.get(i);if(!s)return;let r=s.get(t);r&&(r.delete(n),r.size===0&&s.delete(t),s.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Kt)))}},Gt={enterDuration:225,exitDuration:150},Ie=800,$t=$({passive:!0,capture:!0}),Wt=["mousedown","touchstart"],Yt=["mouseup","mouseleave","touchend","touchcancel"],Zt=class e{static{this._eventManager=new Q}constructor(i,t,n,s){this._target=i,this._ngZone=t,this._platform=s,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,s.isBrowser&&(this._containerElement=Y(n))}fadeInRipple(i,t,n={}){let s=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=D(D({},Gt),n.animation);n.centered&&(i=s.left+s.width/2,t=s.top+s.height/2);let c=n.radius||xe(i,t,s),m=i-s.left,M=t-s.top,k=r.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${m-c}px`,h.style.top=`${M-c}px`,h.style.height=`${c*2}px`,h.style.width=`${c*2}px`,n.color!=null&&(h.style.backgroundColor=n.color),h.style.transitionDuration=`${k}ms`,this._containerElement.appendChild(h);let et=window.getComputedStyle(h),ce=et.transitionProperty,it=et.transitionDuration,z=ce==="none"||it==="0s"||it==="0s, 0s"||s.width===0&&s.height===0,I=new q(this,h,n,z);h.style.transform="scale3d(1, 1, 1)",I.state=u.FADING_IN,n.persistent||(this._mostRecentTransientRipple=I);let L=null;return!z&&(k||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let nt=()=>{L&&(L.fallbackTimer=null),clearTimeout(st),this._finishRippleTransition(I)},U=()=>this._destroyRipple(I),st=setTimeout(U,k+100);h.addEventListener("transitionend",nt),h.addEventListener("transitioncancel",U),L={onTransitionEnd:nt,onTransitionCancel:U,fallbackTimer:st}}),this._activeRipples.set(I,L),(z||!k)&&this._finishRippleTransition(I),I}fadeOutRipple(i){if(i.state===u.FADING_OUT||i.state===u.HIDDEN)return;let t=i.element,n=D(D({},Gt),i.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity="0",i.state=u.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let t=Y(i);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Wt.forEach(n=>{e._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Yt.forEach(t=>{this._triggerElement.addEventListener(t,this,$t)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===u.FADING_IN?this._startFadeOutTransition(i):i.state===u.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let t=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=u.VISIBLE,!n&&(!t||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let t=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=u.HIDDEN,t!==null&&(i.element.removeEventListener("transitionend",t.onTransitionEnd),i.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),i.element.remove()}_onMousedown(i){let t=zt(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Ie;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Ut(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=i.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let t=i.state===u.VISIBLE||i.config.terminateOnPointerUp&&i.state===u.FADING_IN;!i.config.persistent&&t&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Wt.forEach(t=>e._eventManager.removeHandler(t,i,this)),this._pointerUpEventsRegistered&&(Yt.forEach(t=>i.removeEventListener(t,this,$t)),this._pointerUpEventsRegistered=!1))}};function xe(e,i,t){let n=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),s=Math.max(Math.abs(i-t.top),Math.abs(i-t.bottom));return Math.sqrt(n*n+s*s)}var Ee=["*"];var we=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Ae=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Ce=new x("MAT_CARD_CONFIG"),Xt=(()=>{class e{constructor(t){this.appearance=t?.appearance||"raised"}static{this.\u0275fac=function(n){return new(n||e)(j(Ce,8))}}static{this.\u0275cmp=_({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(n,s){n&2&&B("mat-mdc-card-outlined",s.appearance==="outlined")("mdc-card--outlined",s.appearance==="outlined")},inputs:{appearance:"appearance"},exportAs:["matCard"],standalone:!0,features:[v],ngContentSelectors:Ee,decls:1,vars:0,template:function(n,s){n&1&&(V(),F(0))},styles:['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-app-surface-container-low));border-color:var(--mdc-elevated-card-container-color, var(--mat-app-surface-container-low));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-app-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-app-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-app-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-app-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-app-corner-medium));border-width:var(--mdc-outlined-card-outline-width);border-color:var(--mdc-outlined-card-outline-color, var(--mat-app-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-app-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-app-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-app-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-app-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-app-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-app-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-app-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-app-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-app-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-app-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-app-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-app-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0})}}return e})(),qt=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275dir=b({type:e,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"],standalone:!0})}}return e})();var Qt=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275dir=b({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"],standalone:!0})}}return e})(),Jt=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275dir=b({type:e,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"],standalone:!0})}}return e})(),te=(()=>{class e{constructor(){this.align="start"}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275dir=b({type:e,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(n,s){n&2&&B("mat-mdc-card-actions-align-end",s.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"],standalone:!0})}}return e})(),ee=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=_({type:e,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],standalone:!0,features:[v],ngContentSelectors:Ae,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,s){n&1&&(V(we),F(0),o(1,"div",0),F(2,1),a(),F(3,2))},encapsulation:2,changeDetection:0})}}return e})();var ie=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=g({type:e})}static{this.\u0275inj=f({imports:[J,wt,J]})}}return e})();var ne=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=_({type:e,selectors:[["app-homepage"]],standalone:!0,features:[v],decls:77,vars:0,consts:[["rel","preconnect","href",P`https://fonts.googleapis.com`],["rel","preconnect","href",P`https://fonts.gstatic.com`,"crossorigin",""],["href",P`https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Playwrite+US+Trad:wght@100..400&family=Poppins:ital,wght@0,400;0,500;1,400;1,500&display=swap`,"rel","stylesheet"],[1,"homepage-container"],[1,"intro-box"],[1,"intro-left"],[1,"name"],[1,"intro-right"],[1,"name2"],[1,"about-box"],[1,"about-heading"],[1,"about-description"],[1,"about-picture"],["src","assets/images/profile-pic.jpg","alt","Profile Pic"],[1,"about-text"],[1,"about-buttons"],[1,"about-me-button"],[1,"about-resume-button"],["href","https://www.linkedin.com/in/gauravmrao/","target","_blank",1,"about-linkedin-button"],["src","assets/icons/linkedin-green.png","alt","Linkedin Icon","onmouseover","this.src='assets/icons/linkedin-light-green.png'","onmouseout","this.src='assets/icons/linkedin-green.png'"],[1,"projects-box"],[1,"projects-heading"],[1,"projects-cards"],[1,"project1"],[1,"project-title"],[1,"project-technologies"],["href","https://github.com/largeweb/ai-website-builder/tree/main","target","_blank"],["mat-button",""],[1,"project2"],["href","https://github.com/Gauravmrao/virtual-whiteboarding","target","_blank"],[1,"project3"],["href","https://github.com/Gauravmrao/AI-bot-tictacoe","target","_blank"],[1,"projects-link"]],template:function(n,s){n&1&&(w(0,"link",0)(1,"link",1)(2,"link",2),o(3,"div",3)(4,"div",4)(5,"div",5)(6,"h1",6),d(7,"Hi, I'm Gaurav"),a()(),o(8,"div",7)(9,"h1",8),d(10,"and I'm making the world my playground!"),a()()(),o(11,"div",9)(12,"div",10)(13,"h1"),d(14,"About Me"),a()(),o(15,"div",11)(16,"div",12),w(17,"img",13),a(),o(18,"div",14)(19,"p"),d(20,"Hey! I'm Gaurav Rao, a recent graduate from UNC Chapel Hill with degrees in Computer Science and Economics, as well as a Neuroscience Minor."),a(),o(21,"p"),d(22,"To me, working with technology presents the opportunity to leverage my creativity to solve human-centric problems. I remember attempting to program lego robots to do my chores in elementary school, and the feeling of wonder that arose from realizing the endless potential of technology to make our lives easier. I have been chasing this feeling since, and I now strive to apply my skills in building a better, more sustainable, and user-friendly world. With a strong technical foundation in fullstack development and data science, I am looking for the next opportunity to contribute my skills, grow my knowledge, and build robust software solutions."),a(),o(23,"div",15)(24,"button",16),d(25," More About Me "),a(),o(26,"button",17),d(27," My Resume "),a(),o(28,"a",18),w(29,"img",19),a()()()()(),o(30,"div",20)(31,"div",21)(32,"h1"),d(33,"Projects"),a()(),o(34,"div",22)(35,"mat-card",23)(36,"mat-card-header")(37,"mat-card-title",24),d(38,"Sketch.UI"),a(),o(39,"mat-card-subtitle",25),d(40,"React, Javascript, HTML, Python"),a()(),o(41,"mat-card-content")(42,"p"),d(43," AI application to convert human text input & hand-drawn UI sketches into reusable HTML and CSS code. "),a()(),o(44,"mat-card-actions")(45,"a",26)(46,"button",27),d(47,"View Project on Github"),a()()()(),o(48,"mat-card",28)(49,"mat-card-header")(50,"mat-card-title",24),d(51,"Virtual Whiteboarding"),a(),o(52,"mat-card-subtitle",25),d(53,"ML, Python, OpenCV, MediaPipe"),a()(),o(54,"mat-card-content")(55,"p"),d(56," ML-driven Computer Vision application to enable on-screen live drawing using intuitive hand motions. "),a()(),o(57,"mat-card-actions")(58,"a",29)(59,"button",27),d(60,"View Project on Github"),a()()()(),o(61,"mat-card",30)(62,"mat-card-header")(63,"mat-card-title",24),d(64,"AI Tic-Tac-Toe"),a(),o(65,"mat-card-subtitle",25),d(66,"Python, AI"),a()(),o(67,"mat-card-content")(68,"p"),d(69," Tic Tac Toe game with an AI that uses the Minimax algorithm to determine optimal moves. "),a()(),o(70,"mat-card-actions")(71,"a",31)(72,"button",27),d(73,"View Project on Github"),a()()()()(),o(74,"div",32)(75,"button"),d(76,"More Projects"),a()()()())},dependencies:[ie,Xt,te,Qt,ee,Jt,qt],styles:[".homepage-container[_ngcontent-%COMP%]{font-family:Arial,sans-serif}.intro-box[_ngcontent-%COMP%]{text-align:center;height:100vh;display:flex}.intro-left[_ngcontent-%COMP%], .intro-right[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:center}.intro-left[_ngcontent-%COMP%]{background-color:#fefbf4;color:#364e1a}.name[_ngcontent-%COMP%]{font-family:Playwrite US Trad,cursive;font-optical-sizing:auto;font-weight:325;font-style:normal;font-size:48px;margin-bottom:20px;background-image:linear-gradient(90deg,#364e1a 50%,#fefbf4 50%);background-size:200% 100%;background-position:100%;-webkit-background-clip:text;color:transparent;animation:_ngcontent-%COMP%_reveal 2s steps(30) .25s forwards}@keyframes _ngcontent-%COMP%_reveal{to{background-position:0%}}.intro-right[_ngcontent-%COMP%]{font-family:Pixelify Sans,sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;background-color:#1c1c1c;color:#fefbf4}.name2[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;border-right:2px solid #fefbf4;animation:_ngcontent-%COMP%_invisible 2.5s,_ngcontent-%COMP%_typing 3s steps(30,end) 2.5s forwards,_ngcontent-%COMP%_blink-caret .75s step-end infinite 3s}@keyframes _ngcontent-%COMP%_invisible{0%{opacity:0}to{opacity:0}}@keyframes _ngcontent-%COMP%_typing{0%{width:0;visibility:visible}to{width:100%;white-space:wrap}}@keyframes _ngcontent-%COMP%_blink-caret{0%,to{border-color:transparent}50%{border-color:#fefbf4}}.about-box[_ngcontent-%COMP%]{margin-top:10px;background-color:#fff4db;display:flex;align-items:flex-start;justify-content:flex-start;width:100%;flex-direction:column}.about-heading[_ngcontent-%COMP%]{font-family:Playwrite US Trad,cursive;font-optical-sizing:auto;font-weight:150;font-style:normal;color:#364e1a;font-size:15px;text-decoration:underline;margin-left:100px;margin-top:40px}.about-description[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-bottom:40px}.about-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px;height:auto;margin-left:100px}.about-text[_ngcontent-%COMP%]{flex:1;font-family:Poppins,sans-serif;font-weight:400;font-style:normal;font-size:20px;margin-left:40px;margin-right:100px;color:#1c1c1c}.about-buttons[_ngcontent-%COMP%]{margin-top:15px;display:flex;justify-content:flex-start}.about-me-button[_ngcontent-%COMP%], .about-resume-button[_ngcontent-%COMP%]{font-family:Playwrite US Trad,cursive;font-size:16px;font-weight:350;font-style:normal;background-color:#364e1a;color:#fefbf4;padding:5px 10px;margin-right:30px;border-radius:10px;cursor:pointer;height:50px}.about-me-button[_ngcontent-%COMP%]:hover, .about-resume-button[_ngcontent-%COMP%]:hover{background-color:#62734e}.about-linkedin-button[_ngcontent-%COMP%]{background-color:transparent;border:transparent}.about-linkedin-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;width:auto;cursor:pointer}.projects-box[_ngcontent-%COMP%]{margin-top:10px;background-color:#2b2b2b;display:flex;flex-direction:column;justify-content:flex-start;width:100%}.projects-heading[_ngcontent-%COMP%]{font-family:Pixelify Sans,sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;color:#fefbf4;font-size:20px;text-decoration:underline;margin-left:100px;margin-top:40px}.projects-cards[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-evenly;margin-bottom:40px;font-family:Poppins,sans-serif;font-weight:400;font-style:normal}mat-card[_ngcontent-%COMP%]{max-width:420px;margin:20px;background-color:#1c1c1c;color:#fefbf4}.project-title[_ngcontent-%COMP%]{font-family:Pixelify Sans,sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;font-size:28px}.project-technologies[_ngcontent-%COMP%]{margin-top:5px;font-style:italic;color:#fefbf4}"]})}}return e})();var se=[{path:"",component:ne},{path:"**",redirectTo:"",pathMatch:"full"}];var ke="@",De=(()=>{class e{constructor(t,n,s,r,c){this.doc=t,this.delegate=n,this.zone=s,this.animationType=r,this.moduleImpl=c,this._rendererFactoryPromise=null,this.scheduler=T(vt,{optional:!0}),this.loadingSchedulerFn=T(Te,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-LXY7242L.mjs").then(s=>s),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(t):n=t(),n.catch(s=>{throw new pt(5300,!1)}).then(({\u0275createEngine:s,\u0275AnimationRendererFactory:r})=>{this._engine=s(this.animationType,this.doc);let c=new r(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(t,n){let s=this.delegate.createRenderer(t,n);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let r=new tt(s);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(c=>{let m=c.createRenderer(t,n);r.use(m),this.scheduler?.notify(10)}).catch(c=>{r.use(s)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(n){bt()}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac})}}return e})(),tt=class{constructor(i){this.delegate=i,this.replay=[],this.\u0275type=1}use(i){if(this.delegate=i,this.replay!==null){for(let t of this.replay)t(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,t){return this.delegate.createElement(i,t)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,t){this.delegate.appendChild(i,t)}insertBefore(i,t,n,s){this.delegate.insertBefore(i,t,n,s)}removeChild(i,t,n){this.delegate.removeChild(i,t,n)}selectRootElement(i,t){return this.delegate.selectRootElement(i,t)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,t,n,s){this.delegate.setAttribute(i,t,n,s)}removeAttribute(i,t,n){this.delegate.removeAttribute(i,t,n)}addClass(i,t){this.delegate.addClass(i,t)}removeClass(i,t){this.delegate.removeClass(i,t)}setStyle(i,t,n,s){this.delegate.setStyle(i,t,n,s)}removeStyle(i,t,n){this.delegate.removeStyle(i,t,n)}setProperty(i,t,n){this.shouldReplay(t)&&this.replay.push(s=>s.setProperty(i,t,n)),this.delegate.setProperty(i,t,n)}setValue(i,t){this.delegate.setValue(i,t)}listen(i,t,n){return this.shouldReplay(t)&&this.replay.push(s=>s.listen(i,t,n)),this.delegate.listen(i,t,n)}shouldReplay(i){return this.replay!==null&&i.startsWith(ke)}},Te=new x("");function re(e="animations"){return It("NgAsyncAnimations"),ft([{provide:yt,useFactory:(i,t,n)=>new De(i,t,n,e),deps:[O,Ct,E]},{provide:K,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}var oe={providers:[xt({eventCoalescing:!0}),Ft(se),kt(),re()]};var Fe={providers:[Dt()]},ae=Et(oe,Fe);var Oe=()=>Mt(Ot,ae),On=Oe;export{On as a};
