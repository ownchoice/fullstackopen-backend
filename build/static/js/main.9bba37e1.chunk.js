(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),u=n.n(r),o=(n(22),n(5)),l=n(2),i=function(e){var t=e.filter,n=e.handleFilter;return c.a.createElement("p",null,"Filter shown with: ",c.a.createElement("input",{value:t,onChange:n}))},d=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Add a new contact"),c.a.createElement("form",{onSubmit:e.addName},c.a.createElement("p",null,"Name: ",c.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),c.a.createElement("p",null,"Number: ",c.a.createElement("input",{value:e.newPhonenumber,onChange:e.handlePhonenumberChange})),c.a.createElement("p",null,c.a.createElement("button",{type:"submit"},"Add"))))},m=function(e){var t=e.person,n=e.deleteHandler;return c.a.createElement("p",null,t.name," ",t.number," ",c.a.createElement("button",{onClick:function(){n(t)}},"Delete"))},s=function(e){return e.contactList.map((function(t){return c.a.createElement(m,{key:t.name,person:t,deleteHandler:e.deleteHandler})}))},f=n(4),b=n.n(f),h=n(16),p=n(3),E=n.n(p),g="/api/persons",C={getContacts:function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(g);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),addContact:function(e){return E.a.post(g,e).then((function(e){return e.data}))},updateContact:function(e,t){return E.a.put("".concat(g,"/").concat(e),t).then((function(e){return e.data}))},deleteContact:function(e){return E.a.delete("".concat(g,"/").concat(e)).then((function(e){return e.data}))}},v=function(e){var t=e.message,n=e.style;e.show;return null===t||""===t?null:c.a.createElement("div",{style:n},t)},j=function(){var e=Object(a.useState)([{name:"Arto Hellas",number:"040-123456"}]),t=Object(l.a)(e,2),n=t[0],r=t[1],u={background:"lightgreen",color:"green",fontStyle:"bold",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},m=Object(o.a)(Object(o.a)({},u),{},{color:"red",background:"lightsalmon"}),f=Object(a.useState)(""),b=Object(l.a)(f,2),h=b[0],p=b[1],E=Object(a.useState)(u),g=Object(l.a)(E,2),j=g[0],w=g[1],O=Object(a.useState)(Date.now()),y=Object(l.a)(O,2),S=y[0],k=y[1];Object(a.useEffect)((function(){var e=setTimeout((function(){p("")}),5e3);return function(){clearTimeout(e)}}),[S]);var N=function(e,t){w(t),p(e),k(Date.now())},D=function(){C.getContacts().then((function(e){r(e)}))};Object(a.useEffect)(D,[]);var H=Object(a.useState)(""),P=Object(l.a)(H,2),F=P[0],x=P[1],A=Object(a.useState)(""),L=Object(l.a)(A,2),B=L[0],J=L[1],T=Object(a.useState)(""),z=Object(l.a)(T,2),I=z[0],M=z[1];return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(v,{message:h,style:j}),c.a.createElement(i,{filter:I,handleFilter:function(e){M(e.target.value)}}),c.a.createElement(d,{addName:function(e){e.preventDefault(),n.some((function(e){return e.name===F}))?window.confirm("".concat(F," is already in the phonebook. Update it?"))&&C.updateContact(n.find((function(e){return e.name===F})).id,{name:F,number:B}).then((function(e){D(),N("Contact updated successfully.",u)})).catch((function(e){N("Cannot update because the contact is already deleted.",m),D()})):C.addContact({name:F,number:B}).then((function(e){r(n.concat(e)),N("Contact added successfully.",u)})),x(""),J("")},newName:F,handleNameChange:function(e){x(e.target.value)},newPhonenumber:B,handlePhonenumberChange:function(e){J(e.target.value)}}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(s,{contactList:n.filter((function(e){return e.name.toLowerCase().includes(I)})),deleteHandler:function(e){window.confirm("Delete ".concat(e.name,"?"))&&C.deleteContact(e.id).then((function(e){D(),N("Contact deleted.",m)}))}}))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9bba37e1.chunk.js.map