(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),u=t(15),a=t.n(u),i=t(6),o=t(3),s=function(e){var n=e.person,t=e.deletePerson;return Object(c.jsxs)("li",{children:[n.name," ",n.number,Object(c.jsx)("button",{onClick:t,children:"delete"})]})},l=function(e){var n=e.persons,t=e.deletePerson;return Object(c.jsx)("ul",{children:n.map((function(e){return Object(c.jsx)(s,{person:e,deletePerson:function(){return t(e.id)}},e.name)}))})},d=function(e){var n=e.filter,t=e.handleFilterChange;return Object(c.jsx)("form",{children:Object(c.jsxs)("div",{children:["filter shown with",Object(c.jsx)("input",{value:n,onChange:t})]})})},j=function(e){var n=e.addPerson,t=e.newName,r=e.handleNameChange,u=e.newNumber,a=e.handleNumberChange;return Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{children:["name:",Object(c.jsx)("input",{value:t,onChange:r})]}),Object(c.jsxs)("div",{children:["number:",Object(c.jsx)("input",{value:u,onChange:a})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},f=t(4),b=t.n(f),h="https://enigmatic-inlet-46339.herokuapp.com/api/persons",m=function(){return b.a.get(h).then((function(e){return e.data}))},O=function(e){return b.a.post(h,e).then((function(e){return e.data}))},p=function(e){return b.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},v=function(e,n){return b.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){var n=e.message,t=e.classId;return null===n?null:Object(c.jsx)("div",{className:t,children:n})},g=(t(39),function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],a=Object(r.useState)(""),s=Object(o.a)(a,2),f=s[0],b=s[1],h=Object(r.useState)(""),g=Object(o.a)(h,2),w=g[0],C=g[1],N=Object(r.useState)(""),P=Object(o.a)(N,2),k=P[0],S=P[1],I=Object(r.useState)(null),T=Object(o.a)(I,2),y=T[0],E=T[1],F=Object(r.useState)(y),J=Object(o.a)(F,2),L=J[0],A=J[1];Object(r.useEffect)((function(){m().then((function(e){return u(e)}))}),[]);var B=""===k?t:t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(x,{message:y,classId:L}),Object(c.jsx)(d,{filter:k,handleFilterChange:function(e){S(e.target.value)}}),Object(c.jsx)("h2",{children:"Add a new"}),Object(c.jsx)(j,{addPerson:function(e){if(e.preventDefault(),t.findIndex((function(e){return e.name===f}))>=0){var n=t.find((function(e){return e.name===f})),c=Object(i.a)(Object(i.a)({},n),{},{number:w});v(n.id,c).then((function(e){A("notification"),E("".concat(c.name,"'s number was updated to ").concat(c.number)),setTimeout((function(){E(null)}),5e3),u(t.map((function(n){return n.id!==c.id?n:e})))})).catch((function(e){A("error"),E("".concat(c.name," was already removed from the server")),setTimeout((function(){E(null)}),5e3),u(t.filter((function(e){return e.id!==c.id})))}))}else{O({name:f,number:w}).then((function(e){A("notification"),E("".concat(e.name," was added to the Phonebook")),setTimeout((function(){E(null)}),5e3),u(t.concat(e))}))}b(""),C("")},newName:f,handleNameChange:function(e){b(e.target.value)},newNumber:w,handleNumberChange:function(e){C(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(l,{persons:B,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));p(e).then((function(c){A("notification"),E("".concat(n.name," was deleted from the Phonebook")),setTimeout((function(){E(null)}),5e3),u(t.filter((function(n){return n.id!==e})))}))}})]})});a.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.40998fa4.chunk.js.map