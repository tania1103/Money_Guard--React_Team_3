"use strict";(self.webpackChunkmoney_guard=self.webpackChunkmoney_guard||[]).push([[492],{1715:(e,a,s)=>{s.d(a,{A:()=>c});var t=s(3003),n=s(3978);const r="Balance_wrapper__bRCSi",l="Balance_title__2Bv5K",o="Balance_balance__41oSS";var i=s(579);const c=()=>{const{balance:e}=(0,t.d4)(n.mB),a=new Intl.NumberFormat("ro-RO",{style:"decimal",minimumFractionDigits:2}).format(e).replace(",",".");return(0,i.jsxs)("div",{className:r,children:[(0,i.jsx)("p",{className:l,children:"Your balance "}),(0,i.jsxs)("p",{className:o,children:[a," RON "]})]})}},2083:(e,a,s)=>{s.d(a,{A:()=>i});var t=s(3003),n=s(1325);const r={addModalBtn:"ModalCollaboratorsButton_addModalBtn__qWwBM"};var l=s(1462),o=s(579);const i=()=>{const e=(0,t.wA)();return(0,o.jsx)("button",{className:r.addModalBtn,onClick:()=>{e((0,n.TK)())},children:(0,o.jsx)(l.n3d,{className:r.icon,size:20})})}},3806:(e,a,s)=>{s.d(a,{F:()=>r});s(5043);const t=s.p+"static/media/symbol-defs.99a67efdcf8090362d381e1ddc8873ba.svg";var n=s(579);const r=e=>{let{className:a,width:s=12,height:r=12,name:l}=e;return(0,n.jsx)("svg",{className:a,width:s,height:r,stroke:"#fafafa",children:(0,n.jsx)("use",{href:`${t}#${l}`})})}},3930:(e,a,s)=>{s.d(a,{t:()=>t,y:()=>n});const t=(e,a)=>{const s=a.find((a=>a.id===e));if(s)return s.name},n=(e,a)=>{let s="";return s=e?"063f1132-ba5d-42b4-951d-44011ca46262":a,s}},5428:(e,a,s)=>{s.d(a,{Jk:()=>l,n7:()=>n,ok:()=>r,uw:()=>t});const t=e=>e.transactions.items,n=e=>e.transactions.periodTransactions,r=e=>e.transactions.currentTransaction,l=e=>e.transactions.categories},8899:(e,a,s)=>{s.d(a,{A:()=>g});var t=s(5043),n=s(8387),r=s(108),l=s(2417),o=s(3839),i=s(1519),c=s(6150);const d={wrapper:"Currency_wrapper__dkN2w",graph:"Currency_graph__tDdJm",tab:"Currency_tab__fYB-2",header:"Currency_header__Mo0it",item:"Currency_item__ECTkD"};var m=s(579);const _=e=>{let{data:a}=e;const s=e=>{let{active:a,payload:s}=e;return a&&s&&s.length,null};return(0,m.jsx)("div",{className:d.graph,children:(0,m.jsx)(r.u,{width:"100%",height:"100%",children:(0,m.jsxs)(l.Q,{data:a,className:"custom-chart",children:[(0,m.jsx)("defs",{children:(0,m.jsxs)("linearGradient",{id:"colorGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,m.jsx)("stop",{offset:"0%",stopColor:"#ffffff",stopOpacity:.3}),(0,m.jsx)("stop",{offset:"100%",stopColor:"#ffffff",stopOpacity:0})]})}),(0,m.jsx)(o.G,{type:"monotone",dataKey:"currency",stroke:"none",fill:"url(#colorGradient)",fillOpacity:1,transform:"translate(0, 10)",activeDot:!1,dot:!1}),(0,m.jsx)(o.G,{type:"monotone",dataKey:"currency",stroke:"#ff6f61",strokeWidth:2,fill:"none",activeDot:e=>{const{cx:s,cy:t,index:n}=e,r=a[n].name;return"USD"===r||"EURO"===r?(0,m.jsx)("circle",{cx:s,cy:t,r:5,fill:"#ff6f61",stroke:"#fff",strokeWidth:2}):null},dot:e=>{const{cx:s,cy:t,index:n}=e,r=a[n].name;return"USD"===r||"EURO"===r?(0,m.jsx)("circle",{cx:s,cy:t,r:4,fill:"#563EAF",stroke:"#ff6f61",strokeWidth:2},`dot-${n}`):null},children:(0,m.jsx)(i.Z,{dataKey:"label",content:e=>{const{x:s,y:t,value:n,index:r}=e;let l=null;return"USD"===a[r].name?l="$":"EURO"===a[r].name&&(l="\u20ac"),(0,m.jsx)("text",{x:s,y:t-10,fill:"#ff6f61",fontSize:14,textAnchor:"middle",children:l?`${l} ${n}`:n})},position:"top",offset:10,fill:"#ff6f61",fontSize:12})}),(0,m.jsx)(c.m,{content:(0,m.jsx)(s,{}),cursor:{stroke:"none"},allowEscapeViewBox:{x:!0,y:!0}})]})})})};var u=s(6213);const p="currencyRates",h=async()=>{try{return(await u.A.get("https://openexchangerates.org/api/latest.json?app_id=b70a6b3522db4135949be5b7b0660667&base=RON")).data.rates}catch(e){throw new Error("Failed to fetch data from Open Exchange Rates: "+e.message)}},x=e=>{const a={timestamp:Date.now(),usdRate:e.USD?{rateBuy:e.USD.toFixed(2),rateSell:(1.02*e.USD).toFixed(2)}:null,euroRate:e.EUR?{rateBuy:e.EUR.toFixed(2),rateSell:(1.02*e.EUR).toFixed(2)}:null};return localStorage.setItem(p,JSON.stringify(a)),a},j=async()=>{let e=(()=>{const e=JSON.parse(localStorage.getItem(p));return e&&Date.now()-e.timestamp<36e5?e:null})();if(e&&e.usdRate&&e.euroRate)return e;try{const a=await h();if(e=x(a),!e.usdRate||!e.euroRate)throw new Error("Incomplete data fetched from API")}catch(a){console.error("Error fetching data from API. Retrying...",a.message);const s=await h();e=x(s)}if(!e.usdRate||!e.euroRate)throw new Error("Failed to fetch valid currency data");return e},g=()=>{const[e,a]=(0,t.useState)({rateBuy:0,rateSell:0}),[s,r]=(0,t.useState)({rateBuy:0,rateSell:0});(0,t.useEffect)((()=>{(async()=>{try{const e=await j();e.usdRate&&a(e.usdRate),e.euroRate&&r(e.euroRate)}catch(e){throw new Error(e.message)}})()}),[]);const l=[{name:"start",currency:8,label:""},{name:"USD",currency:e.rateBuy,label:e.rateBuy},{name:"middle",currency:10,label:""},{name:"EURO",currency:s.rateBuy,label:s.rateBuy},{name:"end",currency:25,label:""}];return(0,m.jsxs)("div",{className:d.wrapper,children:[(0,m.jsxs)("table",{className:d.tab,children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{className:(0,n.A)(d.tr,d.header),children:[(0,m.jsx)("th",{className:d.item,children:"Currency"}),(0,m.jsx)("th",{className:d.item,children:"Purchase"}),(0,m.jsx)("th",{className:d.item,children:"Sale"})]})}),(0,m.jsxs)("tbody",{children:[(0,m.jsxs)("tr",{className:d.tr,children:[(0,m.jsx)("td",{className:d.item,children:"USD"}),(0,m.jsx)("td",{className:d.item,children:e.rateBuy}),(0,m.jsx)("td",{className:d.item,children:e.rateSell})]}),(0,m.jsxs)("tr",{className:d.tr,children:[(0,m.jsx)("td",{className:d.item,children:"EUR"}),(0,m.jsx)("td",{className:d.item,children:s.rateBuy}),(0,m.jsx)("td",{className:d.item,children:s.rateSell})]})]})]}),(0,m.jsx)(_,{data:l})]})}},9499:(e,a,s)=>{s.r(a),s.d(a,{default:()=>la});var t=s(5043),n=s(6462),r=s(3003),l=s(3768),o=s(8387),i=s(3806),c=s(5278);const d="Navigation_list__VZsJU",m="Navigation_linkActive__aZowS",_="Navigation_wrapper__rhG1j",u="Navigation_icon__sGu5R",p="Navigation_item__2S1ji",h="Navigation_navText__2tT62";var x=s(579);const j=()=>{const{isMobile:e}=(0,c.Q)(),a=e=>{let{isActive:a}=e;return(0,o.A)(p,a&&m)};return(0,x.jsx)("nav",{children:(0,x.jsxs)("ul",{className:d,children:[(0,x.jsx)("li",{children:(0,x.jsxs)(n.k2,{className:a,to:"/",children:[(0,x.jsx)("div",{className:_,children:(0,x.jsx)(i.F,{className:u,name:"home",width:24,height:24})}),!e&&(0,x.jsx)("span",{className:h,children:"Home"})]})}),(0,x.jsx)("li",{children:(0,x.jsxs)(n.k2,{className:a,to:"/statistics",children:[(0,x.jsx)("div",{className:_,children:(0,x.jsx)(i.F,{className:u,name:"statistics",width:24,height:24})}),!e&&(0,x.jsx)("span",{className:h,children:"Statistics"})]})}),e&&(0,x.jsx)("li",{children:(0,x.jsx)(n.k2,{className:a,to:"/currency",children:(0,x.jsx)("div",{className:_,children:(0,x.jsx)(i.F,{className:u,name:"dollar",width:24,height:24})})})})]})})};var g=s(3978),N=s(1325);const y=e=>e.modal.isLogOutModalOpen,v=e=>e.modal.isEditModalOpen,b=e=>e.modal.isAddModalOpen,f=e=>e.modal.isCollaboratorsModalOpen,E="Header_headerMobileOpen__i73uX",C="Header_container__vI36D",w="Header_containerExit__9-QX3",F="Header_iconExit__rTtDe",M="Header_itemExit__mF6yO",A="Header_containerLogo__3aopB",T="Header_navLink__jN4KB",S="Header_btn__INAxa",D="Header_userName__q0v6S",I="Header_exitSpan__plTWl",O="Header_logoText__2FhNl",k=()=>{const{isTablet:e,isMobile:a}=(0,c.Q)(),{username:s}=(0,r.d4)(g.mB),t=(0,r.d4)(y),l=(0,r.d4)(v),d=(0,r.d4)(b),m=(0,r.wA)();return(0,x.jsx)("header",{className:(0,o.A)((t||l||d)&&a&&E),children:(0,x.jsxs)("div",{className:C,children:[(0,x.jsx)("div",{className:A,children:(0,x.jsx)("li",{children:(0,x.jsxs)(n.k2,{className:T,to:"/",children:[(0,x.jsx)(i.F,{name:"logo",width:17,height:17}),(0,x.jsx)("p",{className:O,children:"Money Guard"})]})})}),(0,x.jsxs)("div",{className:w,children:[(0,x.jsx)("p",{className:D,children:s}),(0,x.jsx)("li",{className:M,children:(0,x.jsxs)("button",{className:S,onClick:()=>{m((0,N.uU)())},type:"submit",children:[(0,x.jsx)(i.F,{name:"exit",width:18,height:18,className:F}),e&&(0,x.jsx)("span",{className:I,children:"Exit"})]})})]})]})})};var R=s(2963),P=s.n(R);const B={btnCloseModal:"ModalWrapper_btnCloseModal__bFpjN",modalEllipse:"ModalWrapper_modalEllipse__81Sad",modalContent:"ModalWrapper_modalContent__JAKgP",modal:"ModalWrapper_modal__8jz9v",overlay:"ModalWrapper_overlay__ebPKg"};P().setAppElement("#root");const L=e=>{let{children:a,isOpenModal:s}=e;const t=(0,r.wA)(),{isMobile:n}=(0,c.Q)();return(0,x.jsx)(P(),{isOpen:s,onRequestClose:()=>t((0,N.Oo)()),className:B.modal,overlayClassName:B.overlay,children:(0,x.jsxs)("div",{className:B.modalWrapper,children:[(0,x.jsx)("div",{className:B.modalEllipse}),!n&&(0,x.jsx)("button",{className:B.btnCloseModal,onClick:()=>{t((0,N.Oo)())},children:(0,x.jsx)(i.F,{name:"close",width:18,height:18})}),(0,x.jsx)("div",{className:B.modalContent,children:a})]})})};var W=s(1672);const q="ModalLogOut_modal__osPbk",$="ModalLogOut_text__FX1kp",U="ModalLogOut_buttonLogOut__G4dsT",G="ModalLogOut_buttonCancel__l1n8z",H="ModalLogOut_logoText__nuStb",K="ModalLogOut_logoWrapper__Fa7OX",X=()=>{const{isMobile:e}=(0,c.Q)(),a=(0,r.d4)(y),s=(0,r.wA)();return(0,x.jsx)(L,{isOpenModal:a,children:(0,x.jsxs)("div",{className:q,children:[!e&&(0,x.jsxs)("div",{className:K,children:[(0,x.jsx)(i.F,{name:"logo",width:36,height:36}),(0,x.jsx)("p",{className:H,children:"Money Guard"})]}),(0,x.jsx)("p",{className:$,children:"Are you sure you want to log out?"}),(0,x.jsx)("button",{className:U,type:"button",onClick:()=>{s((0,W.P3)())},children:"logout"}),(0,x.jsx)("button",{className:G,type:"button",onClick:()=>{s((0,N.Oo)())},children:"cancel"})]})})};var J=s(3892),z=s(8653),Q=(s(5015),s(2334)),V=s(8611),Y=s.n(V),Z=s(5428),ee=s(899);const ae=()=>ee.Ik().shape({amount:ee.ai().typeError("Amount must be a number").positive("Amount must be a positive number").required("Amount is required"),comment:ee.Yj().max(100,"Comment cannot exceed 100 characters").required("Comment is required")});var se=s(343);const te="CustomIconForCalendar_calendarWrapper__AX6rT",ne="CustomIconForCalendar_dateIconInput__Rih9T",re="CustomIconForCalendar_dateIcon__PL7T7",le=(0,t.forwardRef)(((e,a)=>{let{value:s,onClick:t}=e;return(0,x.jsx)("div",{className:te,children:(0,x.jsxs)("button",{type:"button",ref:a,value:s,onClick:t,className:ne,children:[s,(0,x.jsx)(i.F,{className:re,name:"calendar",width:24,height:24})]})})}));le.displayName="CustomIconForCalendar";const oe=le,ie={modal:"EditTransactionForm_modal__YhEVf",form:"EditTransactionForm_form__lXHwi",toggleRow:"EditTransactionForm_toggleRow__lS5n-",toggle:"EditTransactionForm_toggle__h-VlM",title:"EditTransactionForm_title__uoyiq",header:"EditTransactionForm_header__M0Cdv",categoryLabel:"EditTransactionForm_categoryLabel__2DFzA",numInput:"EditTransactionForm_numInput__i7Ndt",dateInput:"EditTransactionForm_dateInput__5yAeq",textInput:"EditTransactionForm_textInput__kN7gc",twoInput:"EditTransactionForm_twoInput__cwO4v",datePicker:"EditTransactionForm_datePicker__euMcO",buttonsWrapper:"EditTransactionForm_buttonsWrapper__om91j",saveButton:"EditTransactionForm_saveButton__CuC5P",cancelButton:"EditTransactionForm_cancelButton__nvw0P",errorField:"EditTransactionForm_errorField__G4QAx",message:"EditTransactionForm_message__L1WTa",activeToggle:"EditTransactionForm_activeToggle__O3G0b",inactiveToggle:"EditTransactionForm_inactiveToggle__QrGYP"},ce=()=>{var e;const a=(0,r.wA)(),{transaction:s}=(0,r.d4)(Z.ok),n=(0,r.d4)(Z.Jk),[l,o]=(0,t.useState)(new Date(s.transactionDate)),[i,c]=(0,t.useState)(!1),[d,m]=(0,t.useState)(null),_={amount:Math.abs(s.amount),comment:s.comment},u=()=>{a((0,N.Oo)())},p=null===(e=n.find((e=>e.id===s.categoryId)))||void 0===e?void 0:e.name;return i?(0,x.jsx)(se.A,{}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:ie.backdrop,onClick:u}),(0,x.jsxs)("div",{className:ie.modal,children:[(0,x.jsxs)("div",{className:ie.header,children:[(0,x.jsx)("h2",{className:ie.title,children:"Edit transaction"}),(0,x.jsxs)("p",{className:ie.toggleRow,children:[(0,x.jsx)("span",{className:`${ie.toggle} ${"INCOME"===s.type?ie.activeToggle:ie.inactiveToggle}`,children:"Income"}),"/",(0,x.jsx)("span",{className:`${ie.toggle} ${"EXPENSE"===s.type?ie.activeToggle:ie.inactiveToggle}`,children:"Expense"})]})]}),"EXPENSE"===s.type&&(0,x.jsx)("p",{className:p?ie.categoryLabel:ie.categoryLabelEmpty,children:p}),d&&(0,x.jsx)("div",{className:ie.error,children:d}),(0,x.jsx)(J.l1,{initialValues:_,onSubmit:async(e,t)=>{const n={transactionDate:l.toISOString(),comment:e.comment,amount:parseFloat(e.amount)*("EXPENSE"===s.type?-1:1),type:s.type,categoryId:s.categoryId,id:s.id};try{c(!0),m(null),await a((0,Q.AF)(n)).unwrap(),"INCOME"===s.type?Y().Notify.success("Income updated successfully!"):"EXPENSE"===s.type&&Y().Notify.success("Expense updated successfully!"),t.resetForm(),a((0,N.Oo)())}catch(r){m(r.message),"INCOME"===s.type?Y().Notify.failure("Failed to update income. Please try again."):"EXPENSE"===s.type&&Y().Notify.failure("Failed to update expense. Please try again.")}finally{c(!1)}},validationSchema:ae,children:(0,x.jsxs)(J.lV,{className:ie.form,children:[(0,x.jsxs)("div",{className:ie.twoInput,children:[(0,x.jsxs)("div",{className:ie.errorField,children:[(0,x.jsx)(J.D0,{type:"number",name:"amount",min:"1",step:"0.01",placeholder:"0.00",className:ie.numInput}),(0,x.jsx)(J.Kw,{name:"amount",component:"span",className:ie.message})]}),(0,x.jsx)(z.Ay,{selected:l,customInput:(0,x.jsx)(oe,{}),onChange:e=>o(e),calendarStartDay:1,dateFormat:"dd.MM.yyyy",maxDate:new Date,name:"transactionDate"})]}),(0,x.jsxs)("div",{className:ie.errorField,children:[(0,x.jsx)(J.D0,{type:"text",name:"comment",placeholder:"Comment",className:ie.textInput}),(0,x.jsx)(J.Kw,{name:"comment",component:"span",className:ie.message})]}),(0,x.jsxs)("div",{className:ie.buttonsWrapper,children:[(0,x.jsx)("button",{type:"submit",className:`${ie.button} ${ie.saveButton}`,children:"Save"}),(0,x.jsx)("button",{type:"button",className:`${ie.button} ${ie.cancelButton}`,onClick:u,children:"Cancel"})]})]})})]})]})},de=()=>{const e=(0,r.d4)(v);return(0,x.jsx)(L,{isOpenModal:e,children:(0,x.jsx)(ce,{})})};var me=s(3057);const _e=ee.Ik().shape({type:ee.Yj().required("Transaction type is required"),comment:ee.Yj().required("Comment is required").max(100,"Comment cannot exceed 100 characters"),amount:ee.ai().typeError("Amount must be a number").required("Amount is required").positive("Amount must be positive"),transactionDate:ee.p6().typeError("Invalid date").required("Transaction date is required")});var ue=s(3930);const pe="ToggleModal_toggleContainer__tgWOw",he="ToggleModal_toggleLabel__E1lV3",xe="ToggleModal_toggleLabelActive__0IsVw",je="ToggleModal_toggleLabelRedActive__KkiPy",ge="ToggleModal_toggleSwitch__M4+H8",Ne="ToggleModal_toggleCircle__L8Krt",ye="ToggleModal_toggleCircleActive__feQRW",ve="ToggleModal_plusToggle__OgHi8",be="ToggleModal_minusToggle__N7Knu",fe=e=>{let{onChange:a,defaultActive:s}=e;const[n,r]=(0,t.useState)(s);return(0,x.jsxs)("div",{className:pe,children:[(0,x.jsx)("span",{className:`${he} ${n?xe:""}`,children:"Income"}),(0,x.jsx)("div",{className:ge,onClick:()=>{const e=!n;r(e),a(e)},children:(0,x.jsx)("div",{className:`${Ne} ${n?ye:""}`,children:n?(0,x.jsx)(i.F,{className:ve,name:"plus",height:20,width:20}):(0,x.jsx)(i.F,{className:be,name:"minus",height:20,width:20})})}),(0,x.jsx)("span",{className:`${he} ${n?"":je}`,children:"Expense"})]})},Ee="AddTransactionForm_modalContainer__ttM9C",Ce="AddTransactionForm_title__6JEbL",we="AddTransactionForm_selectInput__q+Jsm",Fe="AddTransactionForm_formWrapper__Uxtjd",Me="AddTransactionForm_amountDateInputWrapper__O7+xl",Ae="AddTransactionForm_amountInput__lx3jc",Te="AddTransactionForm_commentInput__mzIbh",Se="AddTransactionForm_errorForAmount__scOXQ",De="AddTransactionForm_errorForComment__6Yz68",Ie="AddTransactionForm_buttonsWrapper__UuNdd",Oe="AddTransactionForm_btnAdd__x4V8X",ke="AddTransactionForm_btnCancel__3cZhX",Re=()=>{const[e,a]=(0,t.useState)(new Date),[s,n]=(0,t.useState)(!1),l=(0,r.d4)(Z.Jk),[o,i]=(0,t.useState)(null),c=(0,r.wA)(),d=l.filter((e=>"INCOME"!==e.type)).map((e=>({value:e.id,label:e.name,isDisabled:"Main expenses"===e.name}))),m=()=>{c((0,N.Oo)())},_={transactionDate:new Date,comment:"",amount:"",categoryId:"",type:s?"INCOME":"EXPENSE"};return(0,x.jsxs)("div",{className:Ee,children:[(0,x.jsx)("h2",{className:Ce,children:"Add transaction"}),(0,x.jsx)(fe,{onChange:n,defaultActive:!1}),(0,x.jsx)(J.l1,{initialValues:_,onSubmit:(a,t)=>{const n={type:s?"INCOME":"EXPENSE",transactionDate:e.toISOString(),comment:a.comment,amount:s?parseFloat(a.amount):-parseFloat(a.amount),categoryId:(0,ue.y)(s,o)};c((0,Q.yY)(n)).unwrap().then((()=>{Y().Notify.success("Transaction added successfully!"),t.resetForm(),m()})).catch((e=>{Y().Notify.failure(`Failed to add transaction: ${e.message}`)}))},validationSchema:_e,children:(0,x.jsxs)(J.lV,{className:Fe,children:[!s&&(0,x.jsx)(me.Ay,{name:"select",className:we,placeholder:"Select a category",options:d,required:!0,onChange:e=>{i(e.value)},classNamePrefix:"react-select",styles:{option:(e,a)=>({...e,color:a.isDisabled?"#d4d4d4":"#fff"})}}),(0,x.jsxs)("div",{className:Me,children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(J.D0,{className:Ae,name:"amount",type:"number",placeholder:"0.00",required:!0,autoComplete:"off"}),(0,x.jsx)(J.Kw,{name:"amount",component:"div",className:Se})]}),(0,x.jsx)(z.Ay,{selected:e,onChange:e=>a(e),calendarStartDay:1,dateFormat:"dd.MM.yyyy",maxDate:new Date,customInput:(0,x.jsx)(oe,{})})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(J.D0,{as:"textarea",rows:"2",name:"comment",placeholder:"Comment",className:Te}),(0,x.jsx)(J.Kw,{name:"comment",component:"div",className:De})]}),(0,x.jsxs)("div",{className:Ie,children:[(0,x.jsx)("button",{className:Oe,type:"submit",children:"Add"}),(0,x.jsx)("button",{className:ke,type:"button",onClick:m,children:"Cancel"})]})]})})]})},Pe=()=>{const e=(0,r.d4)(b);return(0,x.jsx)(L,{isOpenModal:e,children:(0,x.jsx)(Re,{})})};var Be=s(2083);const Le="CollaboratorsModal_modalContainer__whZbJ",We="CollaboratorsModal_title__bMywM",qe="CollaboratorsModal_collaboratorsList__+KhDt",$e="CollaboratorsModal_collaborator__m1xd4",Ue="CollaboratorsModal_avatar__yHCop",Ge="CollaboratorsModal_name__T9g9A",He="CollaboratorsModal_role__f9QuA",Ke=s.p+"static/media/tania.2f42693cc21cc86b0f69.jpeg",Xe=s.p+"static/media/alexandra.49936f28f3504a85bc70.jpg",Je=s.p+"static/media/gabi.09ffa54dff30589c2804.jpeg",ze=[{name:"Tatiana Culeac",pic:Ke,role:"Team Lead"},{name:"Alexandra Stavila",pic:Xe,role:"Scrum Master"},{name:"Aura Dragan",pic:s.p+"static/media/aura.cb59ce95dad102eb505d.png",role:"Developer"},{name:"Flori Moise",pic:s.p+"static/media/flori.a566127be7f30384c340.JPG",role:"Developer"},{name:"Adina Gadalean",pic:"src/images/adina.jpeg",role:"Developer"},{name:"Gabriel Dutu",pic:Je,role:"Developer"}],Qe=()=>{const e=(0,r.wA)(),a=(0,r.d4)(f);return(0,x.jsx)(L,{isOpenModal:a,onClose:()=>{e((0,N.Oo)())},children:(0,x.jsxs)("div",{className:Le,children:[(0,x.jsx)("h2",{className:We,children:"Collaborators"}),(0,x.jsx)("div",{className:qe,children:ze.map(((e,a)=>(0,x.jsxs)("div",{className:$e,children:[(0,x.jsx)("img",{src:e.pic,alt:e.name,className:Ue}),(0,x.jsx)("p",{className:Ge,children:e.name}),(0,x.jsx)("span",{className:He,children:e.role})]},a)))})]})})};var Ve=s(1715),Ye=s(8899),Ze=s(9065),ea=s(6376),aa=s(3062);const sa="LoaderDashboard_spinnerContainer__kjg8z",ta="LoaderDashboard_iconWrapper__EdnL+",na=()=>(0,x.jsx)("div",{className:sa,children:(0,x.jsx)(Ze.P.div,{className:ta,animate:{rotateY:[0,360],scale:[1,1.2,1]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},style:{transformStyle:"preserve-3d"},children:(0,x.jsxs)("div",{className:"flex items-center justify-center",children:[(0,x.jsx)(ea.A,{size:44,className:"mr-2 text-blue-500"}),(0,x.jsx)(aa.A,{size:44,className:"text-green-500"})]})})}),ra={container:"DashboardPage_container__cx3UH",main:"DashboardPage_main__xdBJ-",navItem:"DashboardPage_navItem__5h9M1",ellipse16:"DashboardPage_ellipse16__1bjsf",ellipse18:"DashboardPage_ellipse18__qRsmt",ellipse14:"DashboardPage_ellipse14__jBLve",ellipse17:"DashboardPage_ellipse17__g4Gwt",ellipse15:"DashboardPage_ellipse15__ar262",ellipse19:"DashboardPage_ellipse19__jkdqz"},la=()=>{const e=(0,r.wA)(),{isMobile:a}=(0,c.Q)(),s=(0,r.d4)(f);return(0,t.useEffect)((()=>{e((0,Q.I0)())}),[e]),(0,t.useEffect)((()=>{e((0,Q.O7)())}),[e]),(0,x.jsxs)("div",{children:[(0,x.jsx)(k,{}),(0,x.jsxs)("div",{className:ra.container,children:[(0,x.jsxs)("main",{className:ra.main,children:[(0,x.jsxs)("div",{className:ra.navItem,children:[(0,x.jsxs)("div",{className:ra.wrapper,children:[(0,x.jsx)(j,{}),!a&&(0,x.jsx)(Ve.A,{})]}),!a&&(0,x.jsx)(Ye.A,{})]}),(0,x.jsx)("div",{children:(0,x.jsx)(t.Suspense,{fallback:(0,x.jsx)(na,{}),children:(0,x.jsx)(n.sv,{})})}),(0,x.jsx)("div",{className:ra.ellipse16}),(0,x.jsx)("div",{className:ra.ellipse18}),(0,x.jsx)("div",{className:ra.ellipse14}),(0,x.jsx)("div",{className:ra.ellipse17}),(0,x.jsx)("div",{className:ra.ellipse15}),(0,x.jsx)("div",{className:ra.ellipse19})]}),(0,x.jsx)(X,{}),(0,x.jsx)(de,{}),(0,x.jsx)(Pe,{}),(0,x.jsx)(Be.A,{}),s&&(0,x.jsx)(Qe,{}),(0,x.jsx)(l.l$,{})]})]})}}}]);
//# sourceMappingURL=492.182a28c8.chunk.js.map