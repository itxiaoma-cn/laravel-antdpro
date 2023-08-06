"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[188],{10442:function(Fe,G,o){var ee=o(15009),$=o.n(ee),re=o(99289),v=o.n(re),ne=o(5574),A=o.n(ne),H=o(67294),x=o(2618),B=function(ae){var te=(0,H.useState)([]),K=A()(te,2),oe=K[0],I=K[1],w=function(){var le=v()($()().mark(function Q(){var D;return $()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,(0,x.et)(ae,{pageSize:1e4});case 2:D=R.sent,D.success&&I(D.data);case 4:case"end":return R.stop()}},Q)}));return function(){return le.apply(this,arguments)}}();return(0,H.useEffect)(function(){w().catch(console.error)},[]),{items:oe,setItems:I}};G.Z=B},89361:function(Fe,G,o){o.r(G),o.d(G,{default:function(){return fr}});var ee=o(5574),$=o.n(ee),re=o(15009),v=o.n(re),ne=o(97857),A=o.n(ne),H=o(99289),x=o.n(H),B=o(10442),W=o(2618),ae=o(51042),te=o(6110),K=o(8849),oe=o(2236),I=o(33345),w=o(2453),le=o(62208),Q=o(94184),D=o.n(Q),d=o(67294),R=o(98787),Te=o(69760),Ze=o(45353),fe=o(53124);function $e(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}var Ie=o(14747),we=o(98719),Re=o(67968),Me=o(45503);const V=(e,a,l)=>{const r=$e(l);return{[`${e.componentCls}-${a}`]:{color:e[`color${l}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},Be=e=>(0,we.Z)(e,(a,l)=>{let{textColor:r,lightBorderColor:t,lightColor:n,darkColor:i}=l;return{[`${e.componentCls}-${a}`]:{color:r,background:n,borderColor:t,"&-inverse":{color:e.colorTextLightSolid,background:i,borderColor:i},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),De=e=>{const{paddingXXS:a,lineWidth:l,tagPaddingHorizontal:r,componentCls:t}=e,n=r-l,i=a-l;return{[t]:Object.assign(Object.assign({},(0,Ie.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:n,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${t}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${t}-close-icon`]:{marginInlineStart:i,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${t}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${t}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:n}}),[`${t}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}};var ge=(0,Re.Z)("Tag",e=>{const{lineWidth:a,fontSizeIcon:l}=e,r=e.fontSizeSM,t=`${e.lineHeightSM*r}px`,n=(0,Me.TS)(e,{tagFontSize:r,tagLineHeight:t,tagIconSize:l-2*a,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[De(n),Be(n),V(n,"success","Success"),V(n,"processing","Info"),V(n,"error","Error"),V(n,"warning","Warning")]},e=>({defaultBg:e.colorFillQuaternary,defaultColor:e.colorText})),Le=function(e,a){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(l[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)a.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(l[r[t]]=e[r[t]]);return l},Ae=e=>{const{prefixCls:a,className:l,checked:r,onChange:t,onClick:n}=e,i=Le(e,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:h}=d.useContext(fe.E_),m=C=>{t==null||t(!r),n==null||n(C)},P=h("tag",a),[j,E]=ge(P),O=D()(P,`${P}-checkable`,{[`${P}-checkable-checked`]:r},l,E);return j(d.createElement("span",Object.assign({},i,{className:O,onClick:m})))},We=function(e,a){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(l[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)a.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(l[r[t]]=e[r[t]]);return l};const ze=(e,a)=>{const{prefixCls:l,className:r,rootClassName:t,style:n,children:i,icon:h,color:m,onClose:P,closeIcon:j,closable:E,bordered:O=!0}=e,C=We(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:ce,direction:J,tag:F}=d.useContext(fe.E_),[z,k]=d.useState(!0);d.useEffect(()=>{"visible"in C&&k(C.visible)},[C.visible]);const L=(0,R.o2)(m)||(0,R.yT)(m),T=Object.assign(Object.assign({backgroundColor:m&&!L?m:void 0},F==null?void 0:F.style),n),y=ce("tag",l),[pe,N]=ge(y),me=D()(y,F==null?void 0:F.className,{[`${y}-${m}`]:L,[`${y}-has-color`]:m&&!L,[`${y}-hidden`]:!z,[`${y}-rtl`]:J==="rtl",[`${y}-borderless`]:!O},r,t,N),ve=p=>{p.stopPropagation(),P==null||P(p),!p.defaultPrevented&&k(!1)},[,he]=(0,Te.Z)(E,j,p=>p===null?d.createElement(le.Z,{className:`${y}-close-icon`,onClick:ve}):d.createElement("span",{className:`${y}-close-icon`,onClick:ve},p),null,!1),q=typeof C.onClick=="function"||i&&i.type==="a",f=h||null,u=f?d.createElement(d.Fragment,null,f,i&&d.createElement("span",null,i)):i,c=d.createElement("span",Object.assign({},C,{ref:a,className:me,style:T}),u,he);return pe(q?d.createElement(Ze.Z,null,c):c)},Ce=d.forwardRef(ze);Ce.CheckableTag=Ae;var be=Ce,Ne=o(34041),Pe=o(36147),Se=o(71577),ye=o(37476),Ue=o(34994),se=o(5966),b=o(1413),ie=o(91),X=o(22270),xe=o(66758),Y=o(33518),s=o(85893),Ge=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],He=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],Ke=function(a,l){var r=a.fieldProps,t=a.children,n=a.params,i=a.proFieldProps,h=a.mode,m=a.valueEnum,P=a.request,j=a.showSearch,E=a.options,O=(0,ie.Z)(a,Ge),C=(0,d.useContext)(xe.Z);return(0,s.jsx)(Y.Z,(0,b.Z)((0,b.Z)({valueEnum:(0,X.h)(m),request:P,params:n,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,b.Z)({options:E,mode:h,showSearch:j,getPopupContainer:C.getPopupContainer},r),ref:l,proFieldProps:i},O),{},{children:t}))},Qe=d.forwardRef(function(e,a){var l=e.fieldProps,r=e.children,t=e.params,n=e.proFieldProps,i=e.mode,h=e.valueEnum,m=e.request,P=e.options,j=(0,ie.Z)(e,He),E=(0,b.Z)({options:P,mode:i||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},l),O=(0,d.useContext)(xe.Z);return(0,s.jsx)(Y.Z,(0,b.Z)((0,b.Z)({valueEnum:(0,X.h)(h),request:m,params:t,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,b.Z)({getPopupContainer:O.getPopupContainer},E),ref:a,proFieldProps:n},j),{},{children:r}))}),Ve=d.forwardRef(Ke),Xe=Qe,ue=Ve;ue.SearchSelect=Xe,ue.displayName="ProFormComponent";var de=ue,Ye=o(84567),Je=o(83607),ke=["options","fieldProps","proFieldProps","valueEnum"],qe=d.forwardRef(function(e,a){var l=e.options,r=e.fieldProps,t=e.proFieldProps,n=e.valueEnum,i=(0,ie.Z)(e,ke);return(0,s.jsx)(Y.Z,(0,b.Z)({ref:a,valueType:"checkbox",valueEnum:(0,X.h)(n,void 0),fieldProps:(0,b.Z)({options:l},r),lightProps:(0,b.Z)({labelFormatter:function(){return(0,s.jsx)(Y.Z,(0,b.Z)({ref:a,valueType:"checkbox",mode:"read",valueEnum:(0,X.h)(n,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,b.Z)({options:l},r),proFieldProps:t},i))}},i.lightProps),proFieldProps:t},i))}),_e=d.forwardRef(function(e,a){var l=e.fieldProps,r=e.children;return(0,s.jsx)(Ye.Z,(0,b.Z)((0,b.Z)({ref:a},l),{},{children:r}))}),er=(0,Je.G)(_e,{valuePropName:"checked"}),je=er;je.Group=qe;var rr=je,nr=function(a){var l=a.newRecord,r=(0,B.Z)("/company/departments"),t=r.items,n=(0,B.Z)("/roles"),i=n.items;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(Ue.A.Group,{children:[(0,s.jsx)(se.Z,{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"}],width:"md",label:"\u59D3\u540D",name:"name"}),(0,s.jsx)(se.Z,{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"}],width:"md",label:"\u7535\u5B50\u90AE\u7BB1",name:"email"}),(0,s.jsx)(de,{name:"gender",label:"\u6027\u522B",width:"md",valueEnum:{\u7537:"\u7537",\u5973:"\u5973"},placeholder:"\u8BF7\u9009\u62E9",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B"}]}),(0,s.jsx)(se.Z,{rules:[{required:l,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],width:"md",label:"\u5BC6\u7801",name:"password"}),(0,s.jsx)(de,{name:"department_id",label:"\u90E8\u95E8",width:"md",placeholder:"\u8BF7\u9009\u62E9",options:t==null?void 0:t.map(function(h){return{label:h.name,value:h.id}})}),(0,s.jsx)(de,{name:"status",label:"\u662F\u5426\u5728\u804C",width:"md",valueEnum:{\u5728\u804C:"\u5728\u804C",\u79BB\u804C:"\u79BB\u804C"},placeholder:"\u8BF7\u9009\u62E9",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]})]}),(0,s.jsx)(rr.Group,{name:"roleIds",layout:"horizontal",label:"\u9009\u62E9\u89D2\u8272",options:i==null?void 0:i.map(function(h){return{label:h.name,value:h.id}})})]})},Ee=nr,ar=function(a){var l=a.open,r=a.onOpenChange,t=a.onFinish;return(0,s.jsx)(ye.Y,{title:"\u65B0\u589E\u5458\u5DE5",width:"70%",open:l,onOpenChange:r,modalProps:{destroyOnClose:!0,maskClosable:!1},onFinish:t,children:(0,s.jsx)(Ee,{newRecord:!0})})},tr=ar,or=o(31991),lr=o(85265),sr=function(a){var l=a.onClose,r=a.open,t=a.currentRow,n=a.columns;return(0,s.jsx)(lr.Z,{width:"70%",open:r,onClose:l,closable:!1,children:(t==null?void 0:t.username)&&(0,s.jsx)(or.vY,{column:2,title:t==null?void 0:t.username,request:x()(v()().mark(function i(){return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",{data:t||{}});case 1:case"end":return m.stop()}},i)})),params:{id:t==null?void 0:t.username},columns:n})})},ir=sr,ur=o(5298),dr=o(96365),cr=function(a){var l,r=a.updateModalOpen,t=a.onCancel,n=a.onSubmit,i=a.values;return(0,s.jsxs)(ye.Y,{title:"\u4FEE\u6539\u5458\u5DE5",width:"70%",modalProps:{destroyOnClose:!0,maskClosable:!1},open:r,onOpenChange:t,onFinish:n,initialValues:A()(A()({},i),{},{roleIds:(l=i.roles)===null||l===void 0?void 0:l.map(function(h){return h.id})}),children:[(0,s.jsx)(Ee,{}),(0,s.jsx)(ur.Z.Item,{name:"id",label:!1,children:(0,s.jsx)(dr.Z,{type:"hidden"})})]})},pr=cr,mr=function(){var e=x()(v()().mark(function a(l){var r;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=w.ZP.loading("\u6B63\u5728\u6DFB\u52A0"),n.prev=1,n.next=4,(0,W.jX)("/users",A()({},l));case 4:return r(),w.ZP.success("\u6DFB\u52A0\u6210\u529F"),n.abrupt("return",!0);case 9:return n.prev=9,n.t0=n.catch(1),r(),n.abrupt("return",!1);case 13:case"end":return n.stop()}},a,null,[[1,9]])}));return function(l){return e.apply(this,arguments)}}(),vr=function(){var e=x()(v()().mark(function a(l){var r;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=w.ZP.loading("\u6B63\u5728\u66F4\u65B0"),n.prev=1,n.next=4,(0,W.$G)("/users/".concat(l.id),l);case 4:return r(),w.ZP.success("\u66F4\u65B0\u6210\u529F"),n.abrupt("return",!0);case 9:return n.prev=9,n.t0=n.catch(1),r(),n.abrupt("return",!1);case 13:case"end":return n.stop()}},a,null,[[1,9]])}));return function(l){return e.apply(this,arguments)}}(),Oe=function(){var e=x()(v()().mark(function a(l){var r;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=w.ZP.loading("\u6B63\u5728\u5220\u9664"),l){n.next=3;break}return n.abrupt("return",!0);case 3:return n.prev=3,n.next=6,(0,W.cl)("/users",{ids:l});case 6:return r(),w.ZP.success("\u5220\u9664\u6210\u529F"),n.abrupt("return",!0);case 11:return n.prev=11,n.t0=n.catch(3),r(),n.abrupt("return",!1);case 15:case"end":return n.stop()}},a,null,[[3,11]])}));return function(l){return e.apply(this,arguments)}}(),hr=function(){var a=(0,d.useState)(!1),l=$()(a,2),r=l[0],t=l[1],n=(0,d.useState)(!1),i=$()(n,2),h=i[0],m=i[1],P=(0,d.useState)(!1),j=$()(P,2),E=j[0],O=j[1],C=(0,d.useRef)(),ce=(0,d.useState)(),J=$()(ce,2),F=J[0],z=J[1],k=(0,d.useState)([]),L=$()(k,2),T=L[0],y=L[1],pe=(0,B.Z)("/roles"),N=pe.items,me=(0,B.Z)("/company/departments"),ve=me.items,he=(0,I.useIntl)(),q=[{title:"\u59D3\u540D",width:200,dataIndex:"name"},{title:"\u90AE\u7BB1",sorter:!0,copyable:!0,width:300,dataIndex:"email"},{title:"\u6027\u522B",width:100,dataIndex:"gender",valueEnum:{\u7537:{text:"\u7537"},\u5973:{text:"\u5973"}},hideInSearch:!0},{title:"\u90E8\u95E8",width:300,dataIndex:"department",renderText:function(u){return u==null?void 0:u.name},hideInSearch:!0},{title:"\u5728\u804C\u72B6\u6001",width:100,dataIndex:"status",render:function(u,c){return c.status==="\u5728\u804C"?(0,s.jsx)(be,{color:"success",children:"\u662F"}):(0,s.jsx)(be,{color:"default",children:"\u5426"})},valueEnum:{\u5728\u804C:{text:"\u5728\u804C"},\u79BB\u804C:{text:"\u79BB\u804C"}},hideInSearch:!0},{title:"\u89D2\u8272",width:250,dataIndex:"roles",hideInSearch:!0,renderText:function(u){return u.map(function(c){return c.name}).join(", ")},renderFormItem:function(){return(0,s.jsx)(Ne.Z,{showSearch:!0,placeholder:"\u9009\u62E9\u89D2\u8272",filterOption:function(c,p){var S;return((S=p==null?void 0:p.label)!==null&&S!==void 0?S:"").toLowerCase().includes(c.toLowerCase())},allowClear:!0,options:N==null?void 0:N.map(function(u){return{label:u.name,value:u.id}})})}},{title:"\u521B\u5EFA\u65F6\u95F4",width:250,hideInSearch:!0,dataIndex:"created_at",valueType:"datetime"},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",fixed:"right",render:function(u,c){return[c.id!==1&&(0,s.jsx)("a",{onClick:function(){m(!0),z(c)},children:"\u7F16\u8F91"},"update"),c.id!==1&&(0,s.jsx)("a",{onClick:function(){return Pe.Z.confirm({title:"\u786E\u8BA4\u5220\u9664?",onOk:function(){var S=x()(v()().mark(function M(){var Z,U;return v()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Oe([c.id]);case 2:y([]),(Z=C.current)===null||Z===void 0||(U=Z.reloadAndRest)===null||U===void 0||U.call(Z);case 4:case"end":return _.stop()}},M)}));function g(){return S.apply(this,arguments)}return g}(),content:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88"})},children:"\u5220\u9664"},"delete")]}}];return(0,s.jsxs)(te._z,{children:[(0,s.jsx)(K.Z,{headerTitle:he.formatMessage({id:"pages.searchTable.title",defaultMessage:"Enquiry form"}),actionRef:C,rowKey:"id",search:{labelWidth:120},pagination:{pageSize:10},toolBarRender:function(){return[(0,s.jsxs)(Se.ZP,{type:"primary",onClick:function(){t(!0)},children:[(0,s.jsx)(ae.Z,{})," ",(0,s.jsx)(I.FormattedMessage,{id:"pages.searchTable.new",defaultMessage:"New"})]},"primary")]},request:function(){var f=x()(v()().mark(function u(c,p,S){return v()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.abrupt("return",(0,W.et)("/users",c,p,S));case 1:case"end":return M.stop()}},u)}));return function(u,c,p){return f.apply(this,arguments)}}(),columns:q,rowSelection:{onChange:function(u,c){y(c)},getCheckboxProps:function(u){return{disabled:u.id===1}}}}),(T==null?void 0:T.length)>0&&(0,s.jsx)(oe.S,{extra:(0,s.jsxs)("div",{children:[(0,s.jsx)(I.FormattedMessage,{id:"pages.searchTable.chosen",defaultMessage:"Chosen"})," ",(0,s.jsx)("a",{style:{fontWeight:600},children:T.length})," ",(0,s.jsx)(I.FormattedMessage,{id:"pages.searchTable.item",defaultMessage:"\u9879"})]}),children:(0,s.jsx)(Se.ZP,{type:"primary",danger:!0,onClick:function(){return Pe.Z.confirm({title:"\u786E\u8BA4\u5220\u9664?",onOk:function(){var u=x()(v()().mark(function p(){var S,g;return v()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,Oe(T==null?void 0:T.map(function(U){return U.id}));case 2:y([]),(S=C.current)===null||S===void 0||(g=S.reloadAndRest)===null||g===void 0||g.call(S);case 4:case"end":return Z.stop()}},p)}));function c(){return u.apply(this,arguments)}return c}(),content:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88"})},children:(0,s.jsx)(I.FormattedMessage,{id:"pages.searchTable.batchDeletion",defaultMessage:"Batch deletion"})})}),(0,s.jsx)(tr,{open:r,onOpenChange:t,onFinish:function(){var f=x()(v()().mark(function u(c){var p;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,mr(c);case 2:p=g.sent,p&&(t(!1),C.current&&C.current.reload());case 4:case"end":return g.stop()}},u)}));return function(u){return f.apply(this,arguments)}}()}),(0,s.jsx)(pr,{onSubmit:function(){var f=x()(v()().mark(function u(c){var p;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,vr(c);case 2:p=g.sent,p&&(m(!1),z(void 0),C.current&&C.current.reload());case 4:case"end":return g.stop()}},u)}));return function(u){return f.apply(this,arguments)}}(),onCancel:m,updateModalOpen:h,values:F||{}}),(0,s.jsx)(ir,{open:E,currentRow:F,columns:q,onClose:function(){z(void 0),O(!1)}})]})},fr=hr}}]);
