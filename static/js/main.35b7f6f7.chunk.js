(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),c=a.n(s),o=(a(84),a(7)),l=a(8),i=a(10),u=a(9),m=a(11),h=a(19),p=a(123),f=a(124),d=(a(85),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"main"},r.a.createElement(p.a,{className:"navColor",expand:"lg"},r.a.createElement(p.a.Brand,{href:"#"},r.a.createElement("i",{className:"fa fa-hand-o-right","aria-hidden":"true"}),"ToDo"),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(f.a,{className:"mr-auto"},r.a.createElement(f.a.Link,{href:"#"},r.a.createElement("i",{class:"fa fa-tasks"}),"MyTasks")),r.a.createElement(f.a,null,r.a.createElement(f.a.Link,{href:"#"},r.a.createElement("i",{class:"fas fa-sign-out-alt"}),"Logout")))))}}]),t}(n.Component)),v=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null))}}]),t}(n.Component),b=Object(h.a)(v),k=(a(99),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={position:"absolute",width:"100%",backgroundColor:this.props.color,textAlign:"center",height:"40px",paddingTop:"1%",bottom:"0%"};return r.a.createElement("div",{style:e,class:"footer"},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:"&copy;"}}),this.props.text)}}]),t}(n.Component)),E=Object(h.a)(k),O=a(30),g=a.n(O),j=(a(117),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={Itasks:[],Ctasks:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://todo08.herokuapp.com/api/tasks").then((function(t){var a=[],n=[],r=t.data.tasks;console.log(r);for(var s=0;s<r.length;s++)"incomplete"===r[s].taskStatus&&(n.push(r[s].taskName),console.log(n)),"complete"===r[s].taskStatus&&(a.push(r[s].taskName),console.log(a)),e.setState({Itasks:n}),e.setState({Ctasks:a})})).catch((function(e){console.log(e)}))}},{key:"componentWillUnmount",value:function(){return null}},{key:"render",value:function(){var e=this,t=function(t){var a=[];if(t.target.checked){var n=t.target.value;(a=e.state.Ctasks).push(n),e.setState({Ctasks:a});var r=e.state.Itasks;r.splice(r.indexOf(n),1),e.setState({Itasks:r})}},a=function(t){var a=e.state.Ctasks;a.splice(a.indexOf(t),1),e.setState({Ctasks:a});var n=e.state.Itasks;n.push(t),e.setState({Itasks:n})};return r.a.createElement("div",{class:"main"},r.a.createElement("div",{class:"taskboard"},r.a.createElement("h4",null,"TODO"),function(){for(var a=[],n=e.state.Itasks,s=0;s<n.length;s++)a.push(r.a.createElement("div",null,n[s],r.a.createElement("input",{type:"checkbox",value:n[s],onChange:t,checked:!1}),r.a.createElement("br",null)));return a}(),r.a.createElement("br",null),r.a.createElement("div",{id:"light",onClick:function(){document.getElementById("form").style.visibility="visible"}},r.a.createElement("i",{class:"fas fa-plus"})," Add Task"),r.a.createElement("div",{id:"form"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),document.getElementById("form").style.visibility="hidden";var a=e.refs.item.value;null!==a&&g.a.post("https://todo08.herokuapp.com/api/tasks",{userName:"test",taskName:a,taskStatus:"incomplete"}).then((function(t){var n=e.state.Itasks;n.push(a),console.log(t),e.setState({Itasks:n})})).catch((function(e){console.log(e)}))}.bind(this)},r.a.createElement("input",{name:"item",ref:"item",type:"text"})," ",r.a.createElement("input",{type:"submit",value:"Add Item"}))),r.a.createElement("hr",null),r.a.createElement("h4",null,"COMPLETED"),r.a.createElement("div",{class:"completed"},function(){for(var t=[],n=e.state.Ctasks,s=0;s<n.length;s++)t.push(r.a.createElement("div",null,n[s]," ",r.a.createElement("i",{value:n[s],onClick:a.bind(e,n[s]),class:"fas fa-redo"}),r.a.createElement("br",null)));return t}())))}}]),t}(n.Component)),y=Object(h.a)(j),C=(a(118),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"App"},r.a.createElement(b,{color:"#7fd7e3",text:"ToDo"}),r.a.createElement(y,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E,{color:"#7fd7e3",text:"ToDo Ltd."}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(119);c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},79:function(e,t,a){e.exports=a(120)},84:function(e,t,a){},85:function(e,t,a){},99:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.35b7f6f7.chunk.js.map