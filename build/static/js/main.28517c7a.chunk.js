(this["webpackJsonptest-ktoeya"]=this["webpackJsonptest-ktoeya"]||[]).push([[0],{34:function(e,t,i){},35:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var s=i(0),c=i.n(s),a=i(23),n=i.n(a),r=i(10),l=i(2),d=(i(34),i.p+"static/media/flag.18dc6064.png"),o=(i(35),i(1));var u=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(o.jsx)(r.b,{className:"App-link",to:"/theory",children:"\u0422\u0435\u043e\u0440\u0438\u044f"}),Object(o.jsx)(r.b,{className:"App-link",to:"/tasks",children:"\u0423\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f"})]})})};var h=function(){return Object(o.jsxs)("div",{className:"Theory",children:[Object(o.jsx)("h3",{children:"\u0416\u0435\u043d\u0441\u043a\u0438\u0439 \u0440\u043e\u0434 \u0438\u043c\u0435\u043d \u043f\u0440\u0438\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445"}),Object(o.jsxs)("p",{children:["Ex in in pariatur proident laborum tempor voluptate id culpa in.",Object(o.jsx)("br",{}),"Consectetur duis fugiat enim esse occaecat dolore minim esse ullamco commodo. Id pariatur tempor dolore magna ",Object(o.jsx)("span",{className:"h-green",children:"enim"})," qui non ullamco. Fugiat ex aliquip velit et voluptate dolore ea do officia mollit proident esse minim ex. "]}),Object(o.jsx)(r.b,{className:"App-link",to:"",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})},j=i(24),m=i(25),b=i(29),p=i(28),x=i(13),O=(i(44),function(e){Object(b.a)(i,e);var t=Object(p.a)(i);function i(){var e;Object(j.a)(this,i);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={isSubmited:!1,score:0},e}return Object(m.a)(i,[{key:"tasks",get:function(){return[{name:"Exercitation exercitation nostrud Lorem sit Lorem consectetur labore nostrud minim.",correctAnswer:"2",id:"second",type:"radio",weight:20,answers:[{name:"Ullamco in enim ullamco et nisi voluptate sunt.",id:"0"},{name:"Dolor voluptate duis sunt laboris culpa consequat in deserunt nisi.",id:"1"},{name:"Esse nulla qui fugiat et nostrud cillum excepteur ea.",id:"2"},{name:"Aliqua exercitation consequat do minim.",id:"3"}]},{name:"Elit Lorem esse veniam et minim cupidatat officia quis do aliqua commodo ex.",text:"Anim id exercitation cupidatat <input> minim consectetur officia.",correctAnswer:["answer","answwer"],id:"third",type:"text",weight:70}]}},{key:"initialValues",get:function(){var e={};return this.tasks.forEach((function(t){switch(t.type){case"checkbox":e[t.id]=[];break;case"radio":e[t.id]=t.answers[0].id;break;default:e[t.id]=""}})),e}},{key:"topScore",get:function(){return this.tasks.reduce((function(e,t){return e+=t.weight}),0)}},{key:"submit",value:function(){this.setState({isSubmited:!0})}},{key:"checkAnwers",value:function(e){var t=0;this.tasks.forEach((function(i){var s=e[i.id];switch(i.type){case"checkbox":var c=0;i.correctAnswer.forEach((function(e){s.includes(e)&&(c+=1)})),c===i.correctAnswer.length&&(t+=i.weight);break;case"text":i.correctAnswer.includes(s)&&(t+=i.weight);default:i.correctAnswer===s&&(t+=i.weight)}})),this.setState({score:t})}},{key:"render",value:function(){var e=this,t=this.state,i=t.isSubmited,s=t.score;return Object(o.jsx)("div",{className:"Tasks",children:Object(o.jsxs)("div",{className:"tasks-wrap",children:[Object(o.jsx)(r.b,{className:"App-link",to:"",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}),i?Object(o.jsxs)("h2",{children:["\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: ",Math.ceil(s/this.topScore*10)," \u0431\u0430\u043b\u043b\u043e\u0432"]}):Object(o.jsx)("h2",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438"}),i?null:Object(o.jsx)(x.c,{initialValues:this.initialValues,onSubmit:function(t,i){var s=i.setSubmitting;e.submit(t),e.checkAnwers(t),s(!1)},children:function(t){var i=t.values,s=t.handleSubmit,c=t.isSubmitting;return Object(o.jsxs)(x.b,{className:"form",onSubmit:s,children:[e.tasks.map((function(e,t){switch(e.type){case"checkbox":return Object(o.jsxs)("div",{className:"task",children:[Object(o.jsxs)("h3",{children:[t+1,". ",e.name]}),Object(o.jsx)("div",{className:"answers",children:e.answers.map((function(t){return Object(o.jsxs)("label",{className:"answer",htmlFor:e.id+t.id,children:[Object(o.jsx)(x.a,{name:e.id,id:e.id+t.id,type:"checkbox",checked:i[e.id].includes(t.id),value:t.id}),t.name]},t.id)}))})]},e.id);case"radio":return Object(o.jsxs)("div",{className:"task",children:[Object(o.jsxs)("h3",{children:[t+1,". ",e.name]}),Object(o.jsx)("div",{className:"answers",children:e.answers.map((function(t){return Object(o.jsxs)("label",{className:"answer",htmlFor:e.id+t.id,children:[Object(o.jsx)(x.a,{name:e.id,id:e.id+t.id,type:"radio",checked:i[e.id]===t.id,value:t.id}),t.name]},t.id)}))})]},e.id);case"text":return Object(o.jsxs)("div",{className:"task",children:[Object(o.jsxs)("h3",{children:[t+1,". ",e.name]}),Object(o.jsxs)("span",{className:"answer-text",children:[e.text.split("<input>")[0],Object(o.jsxs)("div",{className:"input-wrap",children:[Object(o.jsx)(x.a,{type:"text",id:e.id,value:i[e.id]}),Object(o.jsx)("p",{className:"fake",children:e.correctAnswer.sort((function(e,t){return e.length-t.length}))[0].replace(/[A-Za-z]/gi,"A")})]}),e.text.split("<input>")[1]]})]},e.id);default:return null}})),Object(o.jsx)("button",{type:"submit",className:"button",disabled:c,children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"})]})}})]})})}}]),i}(c.a.Component));n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(r.a,{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/theory",children:Object(o.jsx)(h,{})}),Object(o.jsx)(l.a,{path:"/tasks",children:Object(o.jsx)(O,{})}),Object(o.jsx)(l.a,{path:"/",children:Object(o.jsx)(u,{})})]})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.28517c7a.chunk.js.map