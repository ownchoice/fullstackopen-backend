(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),u=n.n(c),o=(n(22),n(5)),l=n(2),i=function(e){var t=e.filter,n=e.handleFilter;return r.a.createElement("p",null,"Filter shown with: ",r.a.createElement("input",{value:t,onChange:n}))},d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Add a new contact"),r.a.createElement("form",{onSubmit:e.addName},r.a.createElement("p",null,"Name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("p",null,"Number: ",r.a.createElement("input",{value:e.newPhonenumber,onChange:e.handlePhonenumberChange})),r.a.createElement("p",null,r.a.createElement("button",{type:"submit"},"Add"))))},m=function(e){var t=e.person,n=e.deleteHandler;return r.a.createElement("p",null,t.name," ",t.number," ",r.a.createElement("button",{onClick:function(){n(t)}},"Delete"))},s=function(e){return e.contactList.map((function(t){return r.a.createElement(m,{key:t.name,person:t,deleteHandler:e.deleteHandler})}))},f=n(4),b=n.n(f),h=n(16),p=n(3),E=n.n(p),g="http://localhost:3001/persons",v={getContacts:function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(g);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addContact:function(e){return E.a.post(g,e).then((function(e){return e.data}))},updateContact:function(e,t){return E.a.put("".concat(g,"/").concat(e),t).then((function(e){return e.data}))},deleteContact:function(e){return E.a.delete("".concat(g,"/").concat(e)).then((function(e){return e.data}))}},C=function(e){var t=e.message,n=e.style;return null===t||""===t?null:r.a.createElement("div",{style:n},t)},j=function(){var e=Object(a.useState)([{name:"Arto Hellas",number:"040-123456"},{name:"Ada Lovelace",number:"39-44-5323523"},{name:"Dan Abramov",number:"12-43-234345"},{name:"Mary Poppendieck",number:"39-23-6423122"}]),t=Object(l.a)(e,2),n=t[0],c=t[1],u={background:"lightgreen",color:"green",fontStyle:"bold",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},m=Object(o.a)(Object(o.a)({},u),{},{color:"red",background:"lightred"}),f=Object(a.useState)(""),b=Object(l.a)(f,2),h=b[0],p=b[1],E=Object(a.useState)(u),g=Object(l.a)(E,2),j=g[0],w=g[1],O=function(e,t){w(t),p(e);var n=setTimeout((function(){p("")}),3e3);clearTimeout(n)},y=function(){v.getContacts().then((function(e){c(e)}))};Object(a.useEffect)(y,[]);var k=Object(a.useState)(""),S=Object(l.a)(k,2),N=S[0],P=S[1],A=Object(a.useState)(""),H=Object(l.a)(A,2),D=H[0],F=H[1],L=Object(a.useState)(""),x=Object(l.a)(L,2),B=x[0],J=x[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(C,{message:h,style:j}),r.a.createElement(i,{filter:B,handleFilter:function(e){J(e.target.value)}}),r.a.createElement(d,{addName:function(e){e.preventDefault(),n.some((function(e){return e.name===N}))?window.confirm("".concat(N," is already in the phonebook. Update it?"))&&v.updateContact(n.find((function(e){return e.name===N})).id,{name:N,number:D}).then((function(e){y(),O("Contact updated successfully.",u)})).catch((function(e){O("Cannot update because the contact is already deleted.",m),y()})):v.addContact({name:N,number:D}).then((function(e){c(n.concat(e)),O("Contact added successfully.",u)})),P(""),F("")},newName:N,handleNameChange:function(e){P(e.target.value)},newPhonenumber:D,handlePhonenumberChange:function(e){F(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(s,{contactList:n.filter((function(e){return e.name.toLowerCase().includes(B)})),deleteHandler:function(e){window.confirm("Delete ".concat(e.name,"?"))&&v.deleteContact(e.id).then((function(e){y(),O("Contact deleted.",u)}))}}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b8fcdcca.chunk.js.map