(this["webpackJsonpmatrix-calc"]=this["webpackJsonpmatrix-calc"]||[]).push([[0],{110:function(e,t,n){},111:function(e,t,n){},135:function(e,t){},136:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),c=n(46),i=n.n(c),s=(n(110),n(26)),o=n(23),l=n(193),j=n(195),u=n(198),b=n(201),x=n(202),d=n(190),O=n(37),h=n(196),f=n(206),m=n(203),g=n(200),p=(n(111),n(197)),w=n(13),C=n(191),v=n(205),y=function(e){return Object(a.jsx)(w.Col,{children:e.value.toArray().map((function(t,n){return Object(a.jsx)(w.Row,{nowrap:!0,children:t.map((function(t,r){return e.readOnly?Object(a.jsx)(u.a,{readOnly:!0,step:1e-4,value:t,onChange:function(t,a){var c=parseFloat(a);e.onChange(n,r,c)},styles:{root:{width:"1em"}}}):Object(a.jsx)(u.a,{readOnly:e.readOnly,step:1e-4,defaultValue:t,onChange:function(t,a){var c=parseFloat(a);e.onChange(n,r,c)},styles:{root:{width:"1em"}}})}))})}))})},k=function(e){var t=C.d(e.count);return Object(a.jsx)(w.Col,{nowrap:!0,fluid:!0,children:t.toArray().map((function(t,n){return e.render(n)}))})},z=function(e){return Object(a.jsx)(w.Col,{children:e.value.toArray().map((function(t,n){return Object(a.jsx)(w.Row,{nowrap:!0,children:t.map((function(t,r){return Object(a.jsx)(g.a,{children:e.onRender(t,n,r)})}))})}))})},M=function(e){return Object(a.jsx)(w.Row,{nowrap:!0,children:Object(a.jsx)(f.a,{id:e.id,text:"Calculate",iconProps:{iconName:"CalculatorEqualTo"},onClick:function(){return e.setState((function(e){var t=C.c(C.b(e.backingMatrix),e.backingMatrix2);console.log(t);var n=t.size();return n[1]=1,t.resize(n),Object(o.a)(Object(o.a)({},e),{},{matrix3:t})}))}})})};function S(e){return function(t,n){e((function(e){var t=parseInt(n);return isNaN(t)?e:(e.matrix.resize([t,t]),e.matrix2.resize([t,1]),e.matrix3.resize([t,1]),e.backingMatrix.resize([t,t]),e.backingMatrix2.resize([t,1]),Object(o.a)(Object(o.a)({},e),{},{rows:t,columns:t}))}))}}var R=function(){var e=Object(r.useState)({rows:3,columns:3,matrix:C.d(3,3),matrix2:C.d(3,1),matrix3:C.d(3,1),backingMatrix:C.d(3,3),backingMatrix2:C.d(3,3),backingMatrix3:C.d(3,1)}),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(v.a)(!1),R=Object(s.a)(i,2),F=R[0],N=R[1],A=N.setTrue,I=N.setFalse;return Object(a.jsxs)(l.a,{theme:p.a,children:[Object(a.jsxs)(j.a,{isLightDismiss:!0,isOpen:F,onDismiss:I,closeButtonAriaLabel:"Close",headerText:"Settings",children:[Object(a.jsx)(u.a,{defaultValue:n.rows,label:"Size",min:1,max:7,styles:{label:{width:"4em"}},onChange:S(c)}),Object(a.jsx)(u.a,{defaultValue:n.rows,label:"Size",min:1,max:7,styles:{label:{width:"4em"}},onChange:S(c)}),Object(a.jsx)(b.a,{text:"test"})]}),Object(a.jsxs)(x.a,{children:[Object(a.jsx)(d.a,{stickyPosition:O.a.Header,children:Object(a.jsx)(h.a,{styles:{root:{padding:"1em default default"}},children:Object(a.jsx)(f.a,{iconProps:{iconName:"Settings"},text:"Open Settings",onClick:A})})}),Object(a.jsx)(w.Container,{children:Object(a.jsxs)(w.Row,{children:[Object(a.jsxs)(w.Col,{children:[Object(a.jsx)(m.a,{styles:{content:{fontSize:"30px"}},children:"Equation"}),Object(a.jsxs)(w.Row,{children:[Object(a.jsx)(y,{value:n.matrix,onChange:function(e,t,n){c((function(a){return isNaN(n)?a:Object(o.a)(Object(o.a)({},a),{},{backingMatrix:a.backingMatrix.subset(C.a(e,t),n)})}))}}),Object(a.jsx)(w.Col,{children:Object(a.jsxs)(w.Row,{nowrap:!0,children:[Object(a.jsx)(k,{count:n.rows,render:function(e){return Object(a.jsxs)(g.a,{children:["I",Object(a.jsx)("sub",{children:e+1})]})}}),Object(a.jsx)(k,{count:n.rows,render:function(){return Object(a.jsx)(M,{setState:c})}}),Object(a.jsx)(y,{value:n.matrix2,onChange:function(e,t,n){c((function(a){return isNaN(n)?a:Object(o.a)(Object(o.a)({},a),{},{backingMatrix2:a.backingMatrix2.subset(C.a(e,t),n)})}))}})]})})]})]}),Object(a.jsxs)(w.Col,{children:[Object(a.jsx)(m.a,{styles:{content:{fontSize:"30px"}},children:"Result"}),Object(a.jsx)(w.Container,{children:Object(a.jsx)(h.a,{horizontalAlign:"center",verticalFill:!0,children:Object(a.jsx)(w.Row,{nowrap:!0,children:Object(a.jsx)(z,{value:n.matrix3,readOnly:!0,onRender:function(e,t){return Object(a.jsxs)(a.Fragment,{children:["I",Object(a.jsx)("sub",{children:t+1})," = ",e]})}})})})})]})]})})]})]})},F=n(192),N=n(2),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,210)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};Object(F.a)(),Object(N.A)({":global(body,html,#root)":{margin:0,padding:0,height:"100vh"}}),i.a.render(Object(a.jsx)(R,{}),document.getElementById("root")),A()}},[[136,1,2]]]);
//# sourceMappingURL=main.665367f0.chunk.js.map