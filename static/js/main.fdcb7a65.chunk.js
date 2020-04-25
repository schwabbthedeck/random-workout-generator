(this["webpackJsonprandom-workout-generator"]=this["webpackJsonprandom-workout-generator"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/zapsplat_multimedia_bell_chime_alert_synthesised_positive_002_48012.18dbe7e4.mp3"},20:function(e,t,a){e.exports=a(30)},26:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),i=(a(25),a(26),a(7)),c=a(8),u=a(9),s=a(10),m=a(11),h=a(6),d=a(5),p=a(13),E=a(12),b=a(19),f=a(16),v=a.n(f),k=(a(28),a(17)),w=a.n(k),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={checked:!1},e.handleChange=e.handleChange.bind(Object(E.a)(e)),e.rememberToMove=e.rememberToMove.bind(Object(E.a)(e)),e.timeoutFunction={},e.audio=new Audio(w.a),e}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState({checked:e}),e?this.timeoutFunction=setInterval(this.rememberToMove,36e6):clearInterval(this.timeoutFunction)}},{key:"rememberToMove",value:function(){this.audio.play(),alert("It's been an hour! Get up and move!")}},{key:"render",value:function(){return r.a.createElement(b.a,{className:"move-reminder"},r.a.createElement("label",null,r.a.createElement("div",{className:"switch-label"},"Remind me to move every hour!"),r.a.createElement(v.a,{onChange:this.handleChange,checked:this.state.checked,className:"switch"})))}}]),a}(r.a.Component),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement(m.a,null,r.a.createElement(h.a,null,r.a.createElement(d.a,null,"Sound from ",r.a.createElement("a",{href:"https://www.zapsplat.com"},"Zapsplat.com")),r.a.createElement(d.a,null,"\xa92020 ",r.a.createElement("a",{href:"https://janeschwab.co"},"janeschwab.co")),r.a.createElement(d.a,null))))}}]),a}(r.a.Component);a(29);function C(e){return r.a.createElement("div",null,r.a.createElement("h4",null,"Welcome to the Random Workout Generator!"),r.a.createElement("div",null,"This was designed to produce a random short workout you can do at home."))}function S(){var e=[["Pushups","Crunches","Squats","Burpees"],["Bicep Curls","Spider Crunch","Shoulder Press","Dips"],["Upright Row","Superman Crunch","Side Lunges","Tri Extensions"],["Quick Squats","Dumbbell Rows","Side to Side Lunge Walk","Zottman Curl"],["Squat with Weight Swing","Side Crunches","Side Plank Rotations with Overhead Reach","Incline Curl"]];return e[Math.floor(Math.random()*e.length)]}var j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={intro:!0,buttonText:"Pick Me A Random Workout!",workoutInfo:[],repNumber:0,anxious:!1},n}return Object(c.a)(a,[{key:"chooseWorkout",value:function(){this.setState({intro:!1,buttonText:"I want a new workout!",workout:S(),repNumber:Math.ceil(14*Math.random())})}},{key:"deepBreath",value:function(){this.setState({intro:!1,anxious:!0}),document.getElementById("main-container").style.display="none",document.getElementById("anxiety-container").style.display="block"}},{key:"render",value:function(){var e,t=this;return this.state.intro||this.state.anxious||(e=r.a.createElement(h.a,null,r.a.createElement(d.a,null,r.a.createElement("ul",null,this.state.workout.map((function(e){return r.a.createElement("li",{key:e},t.state.repNumber," ",e)})),r.a.createElement("li",null,"20 Mountain Climbers"))))),r.a.createElement("div",{className:"MainInput"},r.a.createElement(m.a,{fluid:!0,className:"top-row"},r.a.createElement(h.a,null,r.a.createElement(d.a,{xsm:4},r.a.createElement(p.a,{className:"reset-button",variant:"outline-primary",size:"sm",onClick:function(){return window.location.reload(!1)},disabled:this.state.intro},"Reset")),r.a.createElement(d.a,{xsm:4},r.a.createElement(g,null)),r.a.createElement(d.a,{xsm:4},r.a.createElement(p.a,{className:"anxiety-button",variant:"warning",size:"sm",onClick:function(){return t.deepBreath()}},"Help, I'm Anxious!")))),r.a.createElement(m.a,{id:"main-container",fluid:!0},r.a.createElement(h.a,{className:"intro-information"},r.a.createElement(d.a,null,r.a.createElement(C,null))),e,r.a.createElement(h.a,{className:"random-button-row"},r.a.createElement(d.a,{md:{span:8,offset:2}},r.a.createElement(p.a,{className:"random-button",variant:"primary",size:"lg",block:!0,onClick:function(){return t.chooseWorkout()}},this.state.buttonText)))),r.a.createElement(m.a,{id:"anxiety-container"},r.a.createElement(h.a,null,r.a.createElement(d.a,null,r.a.createElement("img",{alt:"breathing-gif",src:"https://media.giphy.com/media/krP2NRkLqnKEg/source.gif"}),r.a.createElement("p",null,r.a.createElement("a",{href:"https://giphy.com/gifs/help-satisfying-breathe-krP2NRkLqnKEg"},"via GIPHY"))))),r.a.createElement(y,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.fdcb7a65.chunk.js.map