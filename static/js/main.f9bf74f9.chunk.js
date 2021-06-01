(this["webpackJsonpagiles-arbeiten-team2-datenbank"]=this["webpackJsonpagiles-arbeiten-team2-datenbank"]||[]).push([[0],{104:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n.n(r),s=n(15),i=n.n(s),u=n(23),l=n(44),d=n(8),j=n(11),b=n(9),h=Object(b.b)("contacts/fetchContactsRequest"),f=Object(b.b)("contacts/fetchContactsSuccess"),O=Object(b.b)("contacts/fetchContactsError"),m={addContactRequest:Object(b.b)("contacts/addContactRequest"),addContactSuccess:Object(b.b)("contacts/addContactSuccess"),addContactError:Object(b.b)("contacts/addContactError"),deleteContactRequest:Object(b.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(b.b)("contacts/deleteContactSuccess"),deleteContactError:Object(b.b)("contacts/deleteContactError"),filterChange:Object(b.b)("ContactForm/FilterChange"),fetchContactsRequest:h,fetchContactsSuccess:f,fetchContactsError:O},C=m.addContactRequest,p=m.addContactSuccess,x=m.addContactError,v=m.deleteContactRequest,g=m.deleteContactSuccess,y=m.deleteContactError,S=(m.fetchContactsRequest,m.fetchContactsSuccess),_=(m.fetchContactsError,Object(b.c)([],(c={},Object(j.a)(c,S,(function(t,e){return e.payload})),Object(j.a)(c,p,(function(t,e){var n=e.payload;return t.find((function(t){return t.name===n.name}))?(alert("".concat(n.name," is already in contacts.")),t):[].concat(Object(l.a)(t),[n])})),Object(j.a)(c,g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c))),L=Object(b.c)("",{"ContactForm/FilterChange":function(t,e){return e.payload}}),N=Object(b.c)(!1,(a={},Object(j.a)(a,C,(function(){return!0})),Object(j.a)(a,p,(function(){return!1})),Object(j.a)(a,x,(function(){return!1})),Object(j.a)(a,v,(function(){return!0})),Object(j.a)(a,g,(function(){return!1})),Object(j.a)(a,y,(function(){return!1})),a)),k=Object(d.c)({items:_,filter:L,loading:N}),E=n(66),F=n.n(E),R=n(27),I=Object(d.c)({contacts:k}),q=[].concat(Object(l.a)(Object(b.d)({serializableCheck:{ignoredActions:[R.a,R.f,R.b,R.c,R.d,R.e]}})),[F.a]),B=Object(b.a)({reducer:I,middleware:q,devTools:!1}),D=(n(82),n(20)),w=n(21),M=n(25),A=n(24),T=n(67),G=n.n(T),H=n(72),V=n(3),W=function(){return Object(V.jsx)(H.a,{bg:"primary",variant:"dark",className:G.a.Navbar})},J=n(54),Y=n(68),z=n.n(Y),K=n(35),U=n.n(K);U.a.defaults.baseURL=" http://localhost:4000";var X=function(t){var e=t.name,n=t.semester;return function(t){t(m.addContactRequest()),U.a.post("/contacts",{name:e,semester:n}).then((function(e){var n=e.data;return t(m.addContactSuccess(n))})).catch((function(e){return t(m.addContactError(e))}))}},Z=function(t){return function(e){e(m.deleteContactRequest()),U.a.delete("/contacts/".concat(t)).then((function(){return e(m.deleteContactSuccess(t))})).catch((function(t){return e(m.deleteContactError(t))}))}},P=function(){return function(t){t(m.fetchContactsRequest()),U.a.get("./contacts").then((function(e){var n=e.data;return t(m.fetchContactsSuccess(n))})).catch((function(e){return t(m.fetchContactsError(e))}))}},Q=n(19),$=n(17),tt=function(t){Object(M.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(D.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",semester:""},t.reset=function(){t.setState({name:"",semester:""})},t.handleChange=function(e){e.preventDefault();var n=e.currentTarget,c=n.name,a=n.value,r=t.state,o=Object(j.a)({},c,a);t.setState(Object(J.a)(Object(J.a)({},r),o))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t}return Object(w.a)(n,[{key:"render",value:function(){return Object(V.jsxs)($.a,{onSubmit:this.handleSubmit,className:z.a.Form,children:[Object(V.jsxs)($.a.Group,{controlId:"formBasicName",children:[Object(V.jsx)($.a.Label,{children:"Name"}),Object(V.jsx)($.a.Control,{type:"name",name:"name",value:this.state.name,placeholder:"Enter name",onChange:this.handleChange})]}),Object(V.jsxs)($.a.Group,{controlId:"formBasicSemester",children:[Object(V.jsx)($.a.Label,{children:"Semester"}),Object(V.jsx)($.a.Control,{type:"number",name:"semester",placeholder:"Semester",value:this.state.semester,onChange:this.handleChange})]}),Object(V.jsx)(Q.a,{variant:"primary",type:"submit",children:"Add student"})]})}}]),n}(r.Component),et=Object(u.b)(null,(function(t){return{onSubmit:function(e){return t(X(e))}}}))(tt),nt=n(36),ct=function(t){return t.contacts.filter},at={getFilter:ct,getContacts:Object(nt.a)([ct,function(t){return t.contacts.items}],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){var e=t.name;return!!e&&e.toLowerCase().includes(n)}))}))},rt=n(41),ot=function(t){Object(M.a)(n,t);var e=Object(A.a)(n);function n(){return Object(D.a)(this,n),e.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filterState,n=t.onFilterChange;return Object(V.jsxs)($.a,{inline:!0,children:[Object(V.jsx)(rt.a,{type:"text",name:"filter",value:e,onChange:n,placeholder:"Search",className:"mr-sm-2"}),Object(V.jsx)(Q.a,{variant:"primary",children:"Search"})]})}}]),n}(r.Component),st=Object(u.b)((function(t){return{filterState:at.getFilter(t)}}),(function(t){return{onFilterChange:function(e){return t(m.filterChange(e.target.value))}}}))(ot),it=n(55),ut=n.n(it),lt=function(t){var e=t.name,n=t.id,c=t.onDeleteContact;return Object(V.jsxs)("li",{id:n,className:ut.a.listItem,children:[e,Object(V.jsx)("button",{onClick:function(){c(n)},className:ut.a.buttonListItem,children:"Delete"})]})},dt=n(42),jt=n.n(dt),bt=function(t){Object(M.a)(n,t);var e=Object(A.a)(n);function n(){return Object(D.a)(this,n),e.apply(this,arguments)}return Object(w.a)(n,[{key:"componentDidMount",value:function(){this.props.onLoad()}},{key:"render",value:function(){var t=this.props,e=t.contactsList,n=t.onDeleteContact;return Object(V.jsx)("ul",{children:e.map((function(t){var e=t.name,c=t.id;return Object(V.jsx)(lt,{name:e,id:c,onDeleteContact:n,className:jt.a.contactList},c)}))})}}]),n}(r.Component),ht=Object(u.b)((function(t){return{contactsList:at.getContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(Z(e))},onLoad:function(){return t(P())}}}))(bt),ft=n(73),Ot=n(31),mt=n(43),Ct=n.n(mt),pt=function(t){var e=t.children,n=t.onClick;return Object(V.jsx)(Q.a,{variant:"primary",onClick:n,className:Ct.a.Btn,children:e})},xt=function(t){var e=t.children,n=t.text,c=Object(r.useState)(!1),a=Object(ft.a)(c,2),o=a[0],s=a[1],i=function(){return s(!1)};return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(pt,{onClick:function(){return s(!0)},className:Ct.a.Btn,children:n}),Object(V.jsxs)(Ot.a,{show:o,onHide:i,children:[Object(V.jsx)(Ot.a.Header,{closeButton:!0,children:Object(V.jsx)(Ot.a.Title,{children:"Modal heading"})}),Object(V.jsx)(Ot.a.Body,{children:e}),Object(V.jsxs)(Ot.a.Footer,{children:[Object(V.jsx)(Q.a,{variant:"secondary",onClick:i,children:"Close"}),Object(V.jsx)(Q.a,{type:"submit",variant:"primary",onClick:i,children:"Save Changes"})]})]})]})},vt=n(70),gt=n(71),yt=n(34),St=(n(103),n(46)),_t=n.n(St),Lt=n(69),Nt=n.n(Lt),kt=function(t){Object(M.a)(n,t);var e=Object(A.a)(n);function n(){return Object(D.a)(this,n),e.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(W,{className:_t.a.AppBar}),Object(V.jsx)(vt.a,{children:Object(V.jsxs)(gt.a,{children:[Object(V.jsxs)(yt.a,{children:[Object(V.jsx)("h2",{className:_t.a.h2Header,children:"Talent management"}),Object(V.jsx)(xt,{text:"Add student's info",className:Nt.a.ModalWindow,children:Object(V.jsx)(et,{})}),Object(V.jsx)(xt,{text:"Add employee's info",children:Object(V.jsx)(et,{})})]}),Object(V.jsxs)(yt.a,{children:[Object(V.jsx)("h2",{className:_t.a.h2Header,children:"Students and employees"}),Object(V.jsx)(st,{}),Object(V.jsx)(ht,{className:jt.a.ContactList})]})]})})]})}}]),n}(r.Component);i.a.render(Object(V.jsx)(o.a.StrictMode,{children:Object(V.jsx)(u.a,{store:B,children:Object(V.jsx)(kt,{})})}),document.getElementById("root"))},42:function(t,e,n){t.exports={contactList:"ContactList_contactList__1DrIE",ListGroup:"ContactList_ListGroup__1mT-K"}},43:function(t,e,n){t.exports={Btn:"Button_Btn__1i80I"}},46:function(t,e,n){},55:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__2VNZV",buttonListItem:"ContactListItem_buttonListItem__1CjeX"}},67:function(t,e,n){t.exports={Navbar:"AppBar_Navbar__39eYR"}},68:function(t,e,n){t.exports={Form:"ContactForm_Form__344MY"}},69:function(t,e,n){t.exports={ModalWindow:"Modal_ModalWindow__DjkVD"}},82:function(t,e,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.f9bf74f9.chunk.js.map