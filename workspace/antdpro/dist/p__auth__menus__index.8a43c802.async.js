"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[665],{19054:function(x,_,e){var D=e(1413),c=e(91),g=e(67294),l=e(33518),y=e(85893),C=["fieldProps","request","params","proFieldProps"],j=function(f,R){var F=f.fieldProps,p=f.request,A=f.params,m=f.proFieldProps,M=(0,c.Z)(f,C);return(0,y.jsx)(l.Z,(0,D.Z)({valueType:"treeSelect",fieldProps:F,ref:R,request:p,params:A,filedConfig:{customLightMode:!0},proFieldProps:m},M))},d=g.forwardRef(j);_.Z=d},10442:function(x,_,e){var D=e(15009),c=e.n(D),g=e(99289),l=e.n(g),y=e(5574),C=e.n(y),j=e(67294),d=e(2618),T=function(R){var F=(0,j.useState)([]),p=C()(F,2),A=p[0],m=p[1],M=function(){var Z=l()(c()().mark(function I(){var B;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,d.et)(R,{pageSize:1e4});case 2:B=n.sent,B.success&&m(B.data);case 4:case"end":return n.stop()}},I)}));return function(){return Z.apply(this,arguments)}}();return(0,j.useEffect)(function(){M().catch(console.error)},[]),{items:A,setItems:m}};_.Z=T},68161:function(x,_,e){e.r(_),e.d(_,{default:function(){return le}});var D=e(5574),c=e.n(D),g=e(15009),l=e.n(g),y=e(97857),C=e.n(y),j=e(99289),d=e.n(j),T=e(2618),f=e(51042),R=e(6110),F=e(8849),p=e(2453),A=e(71577),m=e(67294),M=e(37476),Z=e(10442),I=e(34994),B=e(5966),K=e(19054),n=e(85893),Y=function(){var a=(0,Z.Z)("/permissions/trees"),s=a.items;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(I.A.Group,{children:[(0,n.jsx)(B.Z,{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6743\u9650\u540D\u79F0"}],width:"md",label:"\u83DC\u5355\u540D\u79F0",name:"name"}),(0,n.jsx)(K.Z,{name:"parent_id",placeholder:"\u8BF7\u9009\u62E9",allowClear:!0,label:"\u5BF9\u5E94\u6743\u9650",width:"md",secondary:!0,fieldProps:{showArrow:!1,filterTreeNode:!0,showSearch:!0,treeDefaultExpandAll:!0,dropdownMatchSelectWidth:!1,autoClearSearchValue:!0,treeNodeFilterProp:"title",fieldNames:{label:"title"},treeData:s},rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]})]})})},w=Y,V=function(a){var s=a.open,o=a.onOpenChange,t=a.onFinish;return(0,n.jsx)(M.Y,{title:"\u65B0\u589E\u83DC\u5355",width:"50%",open:s,onOpenChange:o,modalProps:{destroyOnClose:!0,maskClosable:!1},onFinish:t,submitter:{render:!1},children:(0,n.jsx)(w,{newRecord:!0})})},X=V,H=e(31991),J=e(85265),k=function(a){var s=a.onClose,o=a.open,t=a.currentRow,r=a.columns;return(0,n.jsx)(J.Z,{width:"70%",open:o,onClose:s,closable:!1,children:(t==null?void 0:t.username)&&(0,n.jsx)(H.vY,{column:2,title:t==null?void 0:t.username,request:d()(l()().mark(function E(){return l()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.abrupt("return",{data:t||{}});case 1:case"end":return O.stop()}},E)})),params:{id:t==null?void 0:t.username},columns:r})})},q=k,ee=e(5298),re=e(96365),ne=function(a){var s,o=a.updateModalOpen,t=a.onCancel,r=a.onSubmit,E=a.values;return(0,n.jsxs)(M.Y,{title:"\u4FEE\u6539\u83DC\u5355",width:"50%",modalProps:{destroyOnClose:!0,maskClosable:!1},open:o,onOpenChange:t,onFinish:r,initialValues:C()(C()({},E),{},{roleIds:(s=E.roles)===null||s===void 0?void 0:s.map(function(L){return L.id})}),submitter:{render:!1},children:[(0,n.jsx)(w,{}),(0,n.jsx)(ee.Z.Item,{name:"id",label:!1,children:(0,n.jsx)(re.Z,{type:"hidden"})})]})},ae=ne,te=function(){var h=d()(l()().mark(function a(s){var o;return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o=p.ZP.loading("\u6B63\u5728\u6DFB\u52A0"),r.prev=1,r.next=4,(0,T.jX)("/menus",C()({},s));case 4:return o(),p.ZP.success("\u6DFB\u52A0\u6210\u529F"),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(1),o(),r.abrupt("return",!1);case 13:case"end":return r.stop()}},a,null,[[1,9]])}));return function(s){return h.apply(this,arguments)}}(),se=function(){var h=d()(l()().mark(function a(s){var o;return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o=p.ZP.loading("\u6B63\u5728\u66F4\u65B0"),r.prev=1,r.next=4,(0,T.$G)("/menus/".concat(s.id),s);case 4:return o(),p.ZP.success("\u66F4\u65B0\u6210\u529F"),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(1),o(),r.abrupt("return",!1);case 13:case"end":return r.stop()}},a,null,[[1,9]])}));return function(s){return h.apply(this,arguments)}}(),ue=function(){var a=(0,m.useState)(!1),s=c()(a,2),o=s[0],t=s[1],r=(0,m.useState)(!1),E=c()(r,2),L=E[0],O=E[1],oe=(0,m.useState)(!1),$=c()(oe,2),ie=$[0],de=$[1],b=(0,m.useRef)(),me=(0,m.useState)(),G=c()(me,2),Q=G[0],z=G[1],N=[{title:"\u83DC\u5355\u540D\u79F0",dataIndex:"name"},{title:"\u7236\u7EA7\u83DC\u5355\u540D\u79F0",dataIndex:"parent",renderText:function(u){return u==null?void 0:u.name}},{title:"\u7ED1\u5B9A\u6743\u9650\u540D\u79F0",dataIndex:"permission",renderText:function(u){return u==null?void 0:u.name}}];return(0,n.jsxs)(R._z,{children:[(0,n.jsx)(F.Z,{headerTitle:"\u83DC\u5355\u7BA1\u7406",actionRef:b,rowKey:"id",search:!1,pagination:{pageSize:10},toolBarRender:function(){return[(0,n.jsx)(A.ZP,{type:"primary",onClick:function(){t(!0)},children:(0,n.jsx)(f.Z,{})},"primary")]},request:function(){var v=d()(l()().mark(function u(S,P,W){return l()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.abrupt("return",(0,T.et)("/menus",S,P,W));case 1:case"end":return U.stop()}},u)}));return function(u,S,P){return v.apply(this,arguments)}}(),columns:N,rowSelection:!1}),(0,n.jsx)(X,{open:o,onOpenChange:t,onFinish:function(){var v=d()(l()().mark(function u(S){var P;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,te(S);case 2:P=i.sent,P&&(t(!1),b.current&&b.current.reload());case 4:case"end":return i.stop()}},u)}));return function(u){return v.apply(this,arguments)}}()}),(0,n.jsx)(ae,{onSubmit:function(){var v=d()(l()().mark(function u(S){var P;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,se(S);case 2:P=i.sent,P&&(O(!1),z(void 0),b.current&&b.current.reload());case 4:case"end":return i.stop()}},u)}));return function(u){return v.apply(this,arguments)}}(),onCancel:O,updateModalOpen:L,values:Q||{}}),(0,n.jsx)(q,{open:ie,currentRow:Q,columns:N,onClose:function(){z(void 0),de(!1)}})]})},le=ue}}]);
