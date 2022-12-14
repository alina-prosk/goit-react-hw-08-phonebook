"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[342],{3342:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var o,a,r,i,c,l=t(168),d=t(8789),s=d.ZP.div(o||(o=(0,l.Z)(["\n  border-radius: 10px;\n  max-width: 70%;\n  font-size: 16px;\n  color: #010101;\n  margin: 50px auto;\n  padding: 50px 20px;\n  height: 100vh;\n  h1 {\n    font-size: 28px;\n  }\n  /* display: block;\n  border-radius: 10px;\n  max-width: 500px;\n  font-size: 24px;\n  color: #010101;\n  background-color: lightcoral;\n  margin: 50px auto;\n  padding: 15px; */\n"]))),u=t(5861),p=t(885),v=t(4687),x=t.n(v),h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},b=d.ZP.form(a||(a=(0,l.Z)(["\n  background-color: #c7bea2;\n  display: flex;\n  gap: 20px;\n  align-items: flex-end;\n  flex-basis: 33%;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  border: 2px solid grey;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  padding: 20px;\n  /* border: 2px solid grey;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  padding: 15px; */\n  label {\n    display: block;\n    margin-bottom: 10px;\n  }\n  input {\n    display: block;\n    height: 25px;\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid #c7bea2;\n    outline: none;\n    &:focus {\n      border: 1px solid #9a9483;\n    }\n  }\n  button {\n    display: block;\n    padding: 10px;\n    border-radius: 5px;\n    border: 1px solid #9a9483;\n    background-color: #9a9483;\n    color: #e5dcc3;\n    cursor: pointer;\n    transition: ease-in 200ms;\n    :hover {\n      border: 1px solid #e5dcc3;\n      background-color: #e5dcc3;\n      color: #9a9483;\n    }\n  }\n"]))),m=t(8998),f=t(7750),g=t(6151),y=t(184),Z=function(){var n=h(),e=h(),t=(0,m.Qd)().data,o=(0,m.FY)(),a=(0,p.Z)(o,1)[0],r=function(){var n=(0,u.Z)(x().mark((function n(e){var o,r,i,c;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),o=e.target,r=o.elements,i=r.name,c=r.number,n.next=5,t.some((function(n){return n.name===i.value}));case 5:if(!n.sent){n.next=10;break}alert("Contact ".concat(i," has already added")),n.next=12;break;case 10:return n.next=12,a({name:i.value,number:c.value});case 12:o.reset();case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,y.jsxs)(b,{onSubmit:r,children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:n,children:"Name"}),(0,y.jsx)("input",{id:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:e,children:"Number"}),(0,y.jsx)("input",{id:e,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,y.jsx)(g.Z,{variant:"outlined",startIcon:(0,y.jsx)(f.Z,{}),type:"submit",children:"Add contact"})]})},S=d.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 15px;\n\n  input {\n    display: block;\n    height: 25px;\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid #c7bea2;\n    outline: none;\n    &:focus {\n      border: 1px solid #9a9483;\n    }\n  }\n"]))),z=t(5048),w=t(8268),k=function(n){return n.filter},C=function(){var n=(0,z.I0)();return{filter:(0,z.v9)(k),setFilter:function(e){return n((0,w.Tv)(e))}}},j=h(),I=function(){var n=C(),e=n.filter,t=n.setFilter;return(0,y.jsxs)(S,{children:[(0,y.jsx)("label",{htmlFor:j,children:"Find contacts by name"}),(0,y.jsx)("input",{onChange:function(n){t(n.target.value)},id:j,type:"text",value:e,name:"filter"})]})},R=d.ZP.li(i||(i=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 0;\n  padding: 20px;\n  background-color: #f3f98c;\n  border-color: #4eafd0;\n  border-radius: 5px;\n  transition: ease-in 100ms;\n  &:hover {\n    background-color: #8cdcf9;\n  }\n  button {\n    display: flex;\n    padding: 10px;\n    border-radius: 5px;\n    border: 1px solid #4eafd0;\n    background-color: #81f9af;\n    color: #000602;\n    cursor: pointer;\n    transition: ease-in 200ms;\n    :hover {\n      border: 1px solid #000;\n      background-color: #ff0801;\n      color: white;\n    }\n  }\n"]))),F=t(7247),P=function(n){var e=n.contact,t=e.name,o=e.number,a=e.id,r=(0,m.b$)(),i=(0,p.Z)(r,2),c=i[0],l=i[1].isLoading;return(0,y.jsxs)(R,{children:[(0,y.jsxs)("p",{children:[t," : ",o]}),(0,y.jsx)(g.Z,{variant:"outlined",startIcon:(0,y.jsx)(F.Z,{}),disabled:l,onClick:function(){return c(a)},"aria-label":"delete",children:l?"...Deleting":"Delete"})]})},M=t(1413),E=t(873),L=function(){var n=(0,z.v9)((function(n){return n.filter.toLowerCase()})),e=(0,E.P1)([function(n){return n.data},function(n,e){return e}],(function(n,e){var t;return null!==(t=null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(e)})))&&void 0!==t?t:[]}));return(0,m.Qd)(void 0,{selectFromResult:function(t){return(0,M.Z)((0,M.Z)({},t),{},{filteredItems:e(t,n)})}})},W=d.ZP.ul(c||(c=(0,l.Z)(["\n  padding: 0;\n  margin: 0;\n"]))),N=function(){var n=L(),e=n.filteredItems,t=n.error,o=n.isLoading;return(0,y.jsxs)(y.Fragment,{children:[t&&(0,y.jsx)("p",{children:"Oops! Something went wrong! Refresh page and try again, please."}),o?(0,y.jsx)("b",{children:"Loading..."}):(0,y.jsx)(W,{children:e.map((function(n){return(0,y.jsx)(P,{contact:n},n.id)}))})]})};function V(){return(0,y.jsxs)(s,{children:[(0,y.jsx)("h1",{children:"Phone book"}),(0,y.jsx)(Z,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(I,{}),(0,y.jsx)(N,{})]})}},7247:function(n,e,t){var o=t(4836);e.Z=void 0;var a=o(t(5649)),r=t(184),i=(0,a.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=i},7750:function(n,e,t){var o=t(4836);e.Z=void 0;var a=o(t(5649)),r=t(184),i=(0,a.default)((0,r.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");e.Z=i},6151:function(n,e,t){t.d(e,{Z:function(){return C}});var o=t(4942),a=t(3366),r=t(7462),i=t(2791),c=t(8182),l=t(5735),d=t(4419),s=t(2065),u=t(6934),p=t(1402),v=t(3701),x=t(4036),h=t(5878),b=t(1217);function m(n){return(0,b.Z)("MuiButton",n)}var f=(0,h.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var g=i.createContext({}),y=t(184),Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=function(n){return(0,r.Z)({},"small"===n.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===n.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===n.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},z=(0,u.ZP)(v.Z,{shouldForwardProp:function(n){return(0,u.FO)(n)||"classes"===n},name:"MuiButton",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e[t.variant],e["".concat(t.variant).concat((0,x.Z)(t.color))],e["size".concat((0,x.Z)(t.size))],e["".concat(t.variant,"Size").concat((0,x.Z)(t.size))],"inherit"===t.color&&e.colorInherit,t.disableElevation&&e.disableElevation,t.fullWidth&&e.fullWidth]}})((function(n){var e,t,a,i=n.theme,c=n.ownerState;return(0,r.Z)({},i.typography.button,(e={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((i.vars||i).palette[c.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:(i.vars||i).palette.grey.A100,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(i.vars||i).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[c.color].main}}),"&:active":(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,o.Z)(e,"&.".concat(f.focusVisible),(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,o.Z)(e,"&.".concat(f.disabled),(0,r.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"outlined"===c.variant&&"secondary"===c.color&&{border:"1px solid ".concat((i.vars||i).palette.action.disabled)},"contained"===c.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),e),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,s.Fq)(i.palette[c.color].main,.5))},"contained"===c.variant&&{color:i.vars?i.vars.palette.text.primary:null==(t=(a=i.palette).getContrastText)?void 0:t.call(a,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],boxShadow:(i.vars||i).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].contrastText,backgroundColor:(i.vars||i).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(n){var e;return n.ownerState.disableElevation&&(e={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,o.Z)(e,"&.".concat(f.focusVisible),{boxShadow:"none"}),(0,o.Z)(e,"&:active",{boxShadow:"none"}),(0,o.Z)(e,"&.".concat(f.disabled),{boxShadow:"none"}),e)})),w=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(n,e){var t=n.ownerState;return[e.startIcon,e["iconSize".concat((0,x.Z)(t.size))]]}})((function(n){var e=n.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},S(e))})),k=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(n,e){var t=n.ownerState;return[e.endIcon,e["iconSize".concat((0,x.Z)(t.size))]]}})((function(n){var e=n.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},S(e))})),C=i.forwardRef((function(n,e){var t=i.useContext(g),o=(0,l.Z)(t,n),s=(0,p.Z)({props:o,name:"MuiButton"}),u=s.children,v=s.color,h=void 0===v?"primary":v,b=s.component,f=void 0===b?"button":b,S=s.className,C=s.disabled,j=void 0!==C&&C,I=s.disableElevation,R=void 0!==I&&I,F=s.disableFocusRipple,P=void 0!==F&&F,M=s.endIcon,E=s.focusVisibleClassName,L=s.fullWidth,W=void 0!==L&&L,N=s.size,V=void 0===N?"medium":N,A=s.startIcon,B=s.type,T=s.variant,O=void 0===T?"text":T,q=(0,a.Z)(s,Z),D=(0,r.Z)({},s,{color:h,component:f,disabled:j,disableElevation:R,disableFocusRipple:P,fullWidth:W,size:V,type:B,variant:O}),H=function(n){var e=n.color,t=n.disableElevation,o=n.fullWidth,a=n.size,i=n.variant,c=n.classes,l={root:["root",i,"".concat(i).concat((0,x.Z)(e)),"size".concat((0,x.Z)(a)),"".concat(i,"Size").concat((0,x.Z)(a)),"inherit"===e&&"colorInherit",t&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,x.Z)(a))],endIcon:["endIcon","iconSize".concat((0,x.Z)(a))]},s=(0,d.Z)(l,m,c);return(0,r.Z)({},c,s)}(D),_=A&&(0,y.jsx)(w,{className:H.startIcon,ownerState:D,children:A}),Q=M&&(0,y.jsx)(k,{className:H.endIcon,ownerState:D,children:M});return(0,y.jsxs)(z,(0,r.Z)({ownerState:D,className:(0,c.Z)(t.className,H.root,S),component:f,disabled:j,focusRipple:!P,focusVisibleClassName:(0,c.Z)(H.focusVisible,E),ref:e,type:B},q,{classes:H,children:[_,u,Q]}))}))}}]);
//# sourceMappingURL=342.a316a634.chunk.js.map