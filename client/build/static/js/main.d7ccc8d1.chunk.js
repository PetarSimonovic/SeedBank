(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),r=n(57),c=n.n(r),s=n(0),i=n(3),l=n(12),u=n(4),f=n(5),d=n(11),j=n.n(d),b=n(14),h=n(58),p=n.n(h).a.create({baseURL:"/api"}),O={addUser:function(e){return p.post("/user",e)},getUser:function(e){return p.get("/user/".concat(e))},updateGarden:function(e,t){return p.put("/user/".concat(e),t)},addBalloons:function(e){return p.post("/balloons",e)},getBalloons:function(e){return p.get("/balloons/".concat(e))},updateBalloons:function(e,t){return p.put("/balloons/".concat(e),t)},getFriends:function(e){return p.get("/friends/".concat(e))},addFriends:function(e){return p.post("/friends",e)},getFriendByName:function(e,t){return p.get("/friend/".concat(e,"/").concat(t))},addSeeds:function(e){return p.post("/seeds",e)},getSeeds:function(e){return p.get("/seeds/".concat(e))},updateSeeds:function(e,t,n){return p.put("/seeds/".concat(e,"/").concat(t),n)},addPlant:function(e){return p.post("/plants",e)},getPlants:function(e){return p.get("/plants/".concat(e))},updatePlant:function(e,t){return p.put("/plants/".concat(e),t)}};function g(){return(g=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("SAVING PLANT "),console.log(t),t.date=JSON.stringify(t.date),e.next=5,O.addPlant(t).then((function(e){console.log("PLANT SAVED")}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return m=Object(b.a)(j.a.mark((function e(t,n){var o,a,r=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.length>2&&void 0!==r[2]?r[2]:0,console.log("In addSeeds "+n),a=new Ft(t,n,o),console.log(a),e.next=6,O.addSeeds(a).then((function(e){console.log("packet of ".concat(n," seeds added!"))}));case 6:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function x(e,t){for(var n=0;n<t.length;n++){if(t[n].type===e.type)return!0}return!1}var v=[{type:"generic_plant",quantity:3},{type:"tulip",quantity:3},{type:"sunflower",quantity:3},{type:"crocus",quantity:3},{type:"snowdrop",quantity:3},{type:"rose",quantity:3},{type:"venusFlyTrap",quantity:3}];function y(e,t){var n=new Date(e),o=new Date(t).getTime()-n.getTime();return Math.round(o/864e5)}var w=n(104);function S(){return Object(w.a)()}var C=n(7),k=n(10),E=n(1);function N(e,t){for(var n=[],o=(e.removeBalloon,e.updateSeeds),a=e.acceptFriend,r=e.seeds,c=function(e){var c=t[e];c.type;n.push(Object(E.jsx)(W,{balloonId:c.balloonId,seeds:r,position:c.position,index:e,handleClick:function(e){"friendRequest"===c.type?a(c.sender):o(c.quantity,c.type)},updateBalloons:jt,colour:c.colour,type:c.type,sender:c.sender,quantity:c.quantity,message:c.message},c.balloonId))},s=0;s<t.length;s++)c(s);return n}var I=function(e){var t=Object(o.useRef)(),n=Object(o.useState)([]),a=Object(k.a)(n,2),r=a[0],c=a[1];return Object(o.useEffect)((function(){(function(e,t,n,o){return _e.apply(this,arguments)})(e.seeds,e.lastLogin,e.userId,e.today).then((function(e){return c(e)}))}),[]),Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:1,children:N(e,r)}))})},R=n(102),P=n(105),T=n(20);function D(e){var t="#293241",n="#b1b5c8",a=Object(o.useRef)();return Object(E.jsx)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:a,scale:.8,children:Object(E.jsxs)(P.a,{fontSize:.2,outlineWidth:.2,outlineColor:n,color:t,children:[" ",e.displayMessage||"introBalloon"===e.type?e.message:""," "]})}))}function U(e){var t=Object(o.useRef)();return Object(T.c)((function(e,n){return t.current.rotation.y+=.01})),Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:1,children:[Object(E.jsx)("dodecahedronGeometry",{args:[.153,8]}),Object(E.jsx)("meshToonMaterial",{color:e.colour})]}))}function F(e){var t=Object(o.useRef)();return Object(T.c)((function(e,n){return t.current.rotation.y+=.01})),Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:1,children:[Object(E.jsx)("cylinderGeometry",{args:[.005,.005,.5,3]}),Object(E.jsx)("meshToonMaterial",{color:"#16161D"})]}))}function A(e){var t=Object(o.useRef)();return Object(T.c)((function(e,n){return t.current.rotation.y+=.01})),Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:1,children:[Object(E.jsx)("cylinderGeometry",{args:[.15,-.01,.3,16]}),Object(E.jsx)("meshToonMaterial",{color:e.colour})]}))}function B(e){var t=Object(o.useRef)();return Object(T.c)((function(e,n){return t.current.rotation.y+=.01})),Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:1,children:[Object(E.jsx)("boxGeometry",{args:[.15,.15,.15]}),Object(E.jsx)("meshToonMaterial",{color:"#7f5539"})]}))}var W=function(e){var t=Object(o.useRef)(),n=Object(o.useState)(!1),a=Object(k.a)(n,2),r=a[0],c=a[1],s=Object(o.useState)(!1),i=Object(k.a)(s,2),l=i[0],u=i[1];return Object(o.useEffect)((function(){"introBalloon"!==e.type&&(c(r),u(l))}),[]),Object(E.jsx)("group",{children:Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:.8,onClick:function(){r||(e.handleClick(),"introBalloon"!==e.type&&(c((function(e){return!e})),jt(e.balloonId))),u((function(e){return!e}))},children:[Object(E.jsx)(U,{colour:e.colour}),Object(E.jsx)(A,{colour:e.colour,position:[0,-.18,0]}),Object(E.jsx)(F,{position:[0,-.15,0]}),Object(E.jsx)(B,{position:[0,-.48,0]}),Object(E.jsx)(R.a,{follow:!0,lockX:!1,lockY:!1,lockZ:!1,children:Object(E.jsx)(D,{type:e.type,displayMessage:l,position:[0,-.9,0],claimed:r,message:e.message})})]}))})};function q(e){for(var t=["#db504a","#ff6f59","#ffe200","#9bf6ff","#ffd6a5","#caffbf","#ffc6ff","#bdb2ff","#e9ff70","#ff70a6","#ff9770","#c64664","#54428e","#ef476f","#eb5e28"],n=[],o=0;o<e.seeds.length;o++){var a=-2.5+Math.cos(Math.PI*o/t.length),r=0+Math.sin(Math.PI*o/t.length);n.push(Object(E.jsx)(L,{buyBalloon:e.buyBalloon,textColour:"#293241",outline:t[o],position:[a,r,0]},S()))}return n}function L(e){var t=Object(o.useRef)(),n=Object(o.useState)(1),a=Object(k.a)(n,2),r=a[0],c=a[1];return Object(E.jsx)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:r,onClick:function(t){return function(t){t.stopPropagation(),e.buyBalloon(e.outline),c(.95),setTimeout((function(){c(1)}),100)}(t)},children:Object(E.jsx)(R.a,{position:e.position,follow:!0,lockX:!1,lockY:!1,lockZ:!1,children:Object(E.jsx)(P.a,{fontSize:.07,outlineWidth:.07+.05,outlineColor:e.outline,color:e.textColour,children:"\xa31"})})}))}var M=function(e){var t=Object(o.useRef)(),n=Object(o.useState)(!1),a=Object(k.a)(n,2),r=a[0],c=a[1],s=Object(o.useState)("balloon shop"),i=Object(k.a)(s,2),l=i[0],u=i[1],f=function(){c((function(e){return!e}))};return Object(o.useEffect)((function(){u(r?"choose balloon":"balloon shop")}),[r]),Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:1,position:[5,.5,0],onClick:f,children:[Object(E.jsx)(X,{handleClick:f,text:l}),r?q(e):""]}))};var G=function(e){Object(o.useRef)();var t=Object(o.useState)(0),n=Object(k.a)(t,2);return n[0],n[1],Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(Xe,{seeds:e.seeds,selectSeed:e.selectSeed,toggleSeeds:e.toggleSeeds,chosenSeed:e.chosenSeed}),Object(E.jsx)(fe,{sendFriendRequest:e.sendFriendRequest}),Object(E.jsx)(M,{seeds:e.seeds,buyBalloon:e.buyBalloon})]})},Y=[.5,2.8,5];var X=function(e){var t=Object(o.useRef)(),n="#293241",a="#b1b5c8";return Object(E.jsx)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:1,onClick:function(t){return function(t){t.stopPropagation(),e.handleClick()}(t)},children:Object(E.jsx)(R.a,{position:Y,follow:!0,lockX:!1,lockY:!1,lockZ:!1,children:Object(E.jsx)(P.a,{fontSize:.5,outlineWidth:.5,outlineColor:a,color:n,children:e.text})})}))},z=n(17),J="abcdefghijklmnopqrstuvwxyz0123456789".split(""),Z="#293241",_="#b1b5c8",V="#b1b5c8",H="#293241",K=.1;function Q(e,t,n,o,a){for(var r=[],c=0,s=3,i=1,l=0;l<J.length;l++){var u=J[l];c+=.3,r.push(Object(E.jsx)($,{buildSentence:t,character:u,fontX:c,fontY:s},S())),i%8===0&&(s-=.3,c=0),i++}return r.push(Object(E.jsx)(ee,{handleClick:n,fontX:c+.3,fontY:s,character:"X"},S())),r.push(Object(E.jsx)(ee,{handleClick:a,fontX:c+.6,fontY:s,character:"+"},S())),r.push(Object(E.jsx)(te,{sentence:o,fontX:.8,fontY:s-.3},S())),r}function $(e){var t=Object(o.useRef)();return Object(E.jsx)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,onClick:function(t){return function(t,n){t.stopPropagation(),e.buildSentence(n)}(t,e.character)},children:Object(E.jsx)(R.a,{follow:!0,lockX:!1,lockY:!1,lockZ:!1,children:Object(E.jsx)(P.a,{fontSize:K,position:[e.fontX,e.fontY,1],outlineWidth:K,outlineColor:_,color:Z,children:e.character})})}))}function ee(e){var t=Object(o.useRef)();return Object(E.jsx)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,onClick:function(t){return function(t){t.stopPropagation(),e.handleClick()}(t)},children:Object(E.jsx)(R.a,{follow:!0,lockX:!1,lockY:!1,lockZ:!1,children:Object(E.jsx)(P.a,{fontSize:K,position:[e.fontX,e.fontY,1],outlineWidth:K,outlineColor:H,color:V,children:e.character})})}))}function te(e){var t=Object(o.useRef)();return Object(E.jsx)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,onClick:function(t){return function(e,t){e.stopPropagation()}(t,e.character)},children:Object(E.jsx)(R.a,{follow:!0,lockX:!1,lockY:!1,lockZ:!1,children:Object(E.jsx)(P.a,{fontSize:K,position:[e.fontX,e.fontY,1],outlineWidth:K,outlineColor:H,color:V,children:e.sentence})})}))}var ne=function(e){var t=Object(o.useState)([]),n=Object(k.a)(t,2),a=n[0],r=n[1],c=Object(o.useState)(""),s=Object(k.a)(c,2),i=s[0],l=s[1],u=Object(o.useState)(!1),f=Object(k.a)(u,2),d=f[0],j=f[1];return Object(o.useEffect)((function(){l(a.join("")),j(d)})),Object(o.useRef)(),Object(E.jsxs)(E.Fragment,{children:[d?Object(E.jsx)(te,{sentence:i,fontX:.8,fontY:1.8},S()):Q(e,(function(e){r((function(t){return[].concat(Object(z.a)(t),[e])}))}),(function(){var e=a.length-1;r((function(t){return t.filter((function(t,n){return n!==e}))}))}),i,(function(){j(!0),e.handleSubmit(i)}))," />"]})},oe=n(15),ae=n(103);Object(T.b)({OrbitControls:ae.a});var re=function(){var e=Object(T.d)(),t=e.camera,n=e.gl.domElement,a=Object(o.useRef)();return Object(T.c)((function(e){return a.current.update()})),Object(E.jsx)("orbitControls",Object(oe.a)({ref:a,args:[t,n],autoRotate:!1,autoRotateSpeed:.2,minDistance:.5,enableZoom:!0},"minDistance",1.8))};var ce=function(e){var t=Object(o.useRef)();return Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:1,children:[Object(E.jsx)("cylinderGeometry",{args:e.args}),Object(E.jsx)("meshToonMaterial",{color:"#a7c957"})]}))},se=n(106);function ie(e){return Object(E.jsx)(se.a,Object(C.a)({turbidity:.01,distance:45e4,sunPosition:[0,1,0],inclination:.47,elevation:.6,exposure:.3,mieDirectionalG:.04,mieCoefficient:.0045,rayleigh:.1,azimuth:.6},e))}function le(e,t){for(var n=[],o=0;o<t.length;o++){var a=t[o];n.push(Object(E.jsx)(pe,{sendPlant:e.sendPlant,friend:!0,position:a.position,name:a.name,friendId:a.friendId,world:a.world},S()))}return n}var ue=function(e){var t=Object(o.useState)([]),n=Object(k.a)(t,2),a=n[0],r=n[1],c=Object(o.useRef)();return Object(o.useEffect)((function(){(function(e){return $e.apply(this,arguments)})(e.userId).then((function(e){return r(e)}))}),[]),Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:c,scale:1,children:le(e,a)}))})};var fe=function(e){var t=Object(o.useState)(0),n=Object(k.a)(t,2),a=(n[0],n[1],Object(o.useState)("friend request")),r=Object(k.a)(a,2),c=r[0],s=r[1],i=Object(o.useState)(!1),l=Object(k.a)(i,2),u=l[0],f=l[1],d=Object(o.useRef)();return Object(o.useEffect)((function(){s(u?"enter name":"friend request")}),[u]),Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{position:[-5,.5,0],ref:d,scale:1,children:[Object(E.jsx)(X,{handleClick:function(){f((function(e){return!e}))},text:c}),u?Object(E.jsx)(ne,{handleSubmit:e.sendFriendRequest}):"",' //-1 offsets for "seeds" text - this could prob be neater']}))})};var de=function(e){var t=Object(o.useRef)();return Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:1,onClick:function(t){return e.sowPlant(t)},children:[Object(E.jsx)("cylinderGeometry",{args:e.args}),Object(E.jsx)("meshToonMaterial",{color:"#a7c957"})]}))};function je(e){for(var t=e.world,n=[],o=0;o<t.stalactites.length;o++){var a=t.stalactites[o];n.push(Object(E.jsx)(be,{friend:e.friend,sowPlant:e.sowPlant,args:a.geometry,position:a.position,colour:a.colour},S()))}return n}function be(e){var t=Object(o.useRef)(),n=Object(k.a)(e.args,4),a=n[0],r=(n[1],n[2]),c=n[3];return Object(E.jsx)("group",{children:Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:1,onClick:function(t){return function(t){e.friend?console.log("friend island click"):t.stopPropagation()}(t)},children:[Object(E.jsx)("cylinderGeometry",{args:e.args}),Object(E.jsx)("meshToonMaterial",{color:e.colour}),e.friend?Object(E.jsx)(ce,{position:[0,r/2,0],args:[a,a,.01,c]}):Object(E.jsx)(de,{sowPlant:e.sowPlant,position:[0,r/2,0],args:[a,a,.01,c]})]}))})}function he(e){var t="#293241",n="#b1b5c8",a=Object(o.useRef)();return Object(E.jsx)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:a,scale:.8,children:Object(E.jsx)(R.a,{follow:!0,lockX:!1,lockY:!1,lockZ:!1,children:Object(E.jsxs)(P.a,{fontSize:1.4,outlineWidth:.6,outlineColor:n,color:t,children:[" ",e.name," "]})})}))}var pe=function(e){var t=Object(o.useRef)(),n=Object(o.useState)(!0),a=Object(k.a)(n,2),r=a[0],c=a[1];return Object(o.useEffect)((function(){c(r)})),Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:1,onClick:function(t){return function(t){e.friend&&(t.stopPropagation(),e.sendPlant(e.name,e.friendId))}(t)},children:[je(e),r&&e.friend?Object(E.jsx)(he,{name:e.name,position:[0,2,0]}):""]}))})};var Oe,ge,me=function(e){var t=Object(o.useRef)();return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:1,children:[Object(E.jsx)(W,{type:"introBalloon",position:[-.6,2,0],handleClick:e.newWorld,colour:"#ee6055",message:"New garden"}),Object(E.jsx)(W,{type:"introBalloon",position:[.6,2,0],handleClick:e.saveWorld,colour:"#ffd97d",message:"Save garden"})]}))})},xe=n(18),ve=n(19),ye=n.p+"static/media/seedbankProto.6cdc7966.png",we=ve.a.a.attrs({className:"navbar-brand"})(Oe||(Oe=Object(xe.a)([""]))),Se=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(E.jsx)(we,{href:"https://example.com",children:Object(E.jsx)("img",{src:ye,height:"50",alt:"seedbank"})})}}]),n}(o.Component),Ce=Se,ke=n(33),Ee=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(E.jsxs)(a.a.Fragment,{children:[Object(E.jsx)(ke.b,{to:"/",className:"navbar-brand",children:"SeedBank"}),Object(E.jsx)(ke.b,{to:"/",className:"navbar-brand",children:this.props.user})]})}}]),n}(o.Component),Ne=Ee,Ie=ve.a.nav.attrs({className:"navbar navbar-expand-lg navbar-dark bg-dark"})(ge||(ge=Object(xe.a)(["\n    margin-bottom: 20 px;\n"]))),Re=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(E.jsxs)(Ie,{height:"50%",children:[Object(E.jsx)(Ce,{}),Object(E.jsx)(Ne,{user:this.props.user,setUser:this.props.setUser})]})}}]),n}(o.Component),Pe=Re;function Te(e){var t=Object(k.a)(e.position,3),n=(t[0],t[1],t[2],function(e){switch(e){case"generic_plant":return{bloom:1,leafColour:"#377F34",stemColour:"#499B4A",flowerColour:"#832134"};case"tulip":return{bloom:2,leafColour:"#2D5A27",stemColour:"#567d46",flowerColour:"#ff878d"};case"sunflower":return{bloom:4,leafColour:"#75ae92",stemColour:"#82ac80",flowerColour:"#f8ec89"};case"crocus":return{bloom:1,leafColour:"#76c893",stemColour:"#52b69a",flowerColour:"#3a0ca3"};case"snowdrop":return{bloom:1,leafColour:"#76c893",stemColour:"#52b69a",flowerColour:"#f8f9fa"};case"rose":return{bloom:5,leafColour:"#499B4A",stemColour:"#75ae92",flowerColour:"#9e0059"};case"venusFlyTrap":return{bloom:7,leafColour:"#ccd5ae",stemColour:"#ccd5ae",flowerColour:"#ccd5ae"};default:return}}(e.type)),o=n.bloom,a=n.leafColour,r=n.stemColour,c=n.flowerColour,s=e.growth;s>=o&&(s=o);for(var i=s/24,l=[Object(E.jsx)(De,{},S()),Object(E.jsx)(Ue,{stemColour:r,stemLength:i,position:[0,.05,0]},S())],u=0;u<=s;u++)l.push(Object(E.jsx)(Fe,{color:a,position:[.02,.1+u/18,.05]},S()),Object(E.jsx)(Fe,{color:a,position:[-.02,.1+u/18,-.05]},S()));return s>=o&&l.push(Object(E.jsx)(Ae,{color:c,position:[0,.1+s/11,0]},S())),l}function De(e){var t=Object(o.useRef)();return Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,children:[Object(E.jsx)("dodecahedronGeometry",{args:[.035,2]}),Object(E.jsx)("meshToonMaterial",{color:"#947352"})]}))}function Ue(e){var t=Object(o.useRef)();return Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,scale:.5,children:[Object(E.jsx)("cylinderGeometry",{args:[.01,.03,.3+e.stemLength,12]}),Object(E.jsx)("meshToonMaterial",{color:e.stemColour})]}))}function Fe(e){var t=Object(o.useRef)();return Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,children:[Object(E.jsx)("cylinderGeometry",{args:[.02,.05,.02,6]}),Object(E.jsx)("meshToonMaterial",{color:e.color})]}))}function Ae(e){var t=Object(o.useRef)();return Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,children:[Object(E.jsx)("dodecahedronGeometry",{args:[.06]}),Object(E.jsx)("meshToonMaterial",{color:e.color})]}))}var Be=function(e){var t=Object(o.useRef)();return Object(E.jsx)("group",{children:Object(E.jsx)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:t,onClick:function(t){return function(t){t.stopPropagation(),console.log("This plant is:"),console.log(e)}(t)},scale:.2,children:Te(e)}))})},We={type:"#293241",outline:"#b1b5c8"},qe={type:"#b1b5c8",outline:"#293241"};function Le(e,t){if(console.log(t),0!==t.quantity){var n={};return n=t.type===e.chosenSeed?qe:We,Object(E.jsx)(Me,{position:[0,2,0],selectSeed:e.selectSeed,toggleSeeds:e.toggleSeeds,seed:t,colours:n},S())}console.log("It's 0")}function Me(e){var t=e.seed,n=Object(o.useRef)(),a=Object(o.useState)(!1),r=Object(k.a)(a,2);r[0],r[1];return Object(E.jsx)("mesh",Object(C.a)(Object(C.a)({},e),{},{ref:n,children:Object(E.jsx)(R.a,{follow:!0,lockX:!1,lockY:!1,lockZ:!1,children:Object(E.jsx)(P.a,{fontSize:.15,onClick:function(n){return function(n){n.stopPropagation(),console.log("Clicked on SeedCloud!"),console.log(t.type),e.selectSeed(t.type)}(n)},outlineWidth:.15,outlineColor:e.colours.outline,color:e.colours.type,rotation:[0,0,0],children:t.quantity})})}))}var Ge,Ye,Xe=function(e){var t=Object(o.useRef)(),n=function(e){for(var t=[],n=0;n<e.length;n++){var o=e[n];0!==o.quantity&&t.push(o)}return t}(e.seeds),a=Object(o.useState)(0),r=Object(k.a)(a,2),c=r[0],s=r[1],i=Object(o.useState)(!1),l=Object(k.a)(i,2),u=l[0],f=l[1],d=Object(o.useState)({}),j=Object(k.a)(d,2),b=j[0],h=j[1],p=Object(o.useState)("seeds"),O=Object(k.a)(p,2);O[0],O[1],Object(o.useEffect)((function(){s(c),console.log(c),0!==n.length&&0!==b.quantity||g()}));var g=function(){f(!1),s(0)};return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("mesh",Object(C.a)(Object(C.a)({},e),{},{position:[0,.5,0],ref:t,scale:1,children:[0!=n.length?Object(E.jsx)(X,{handleClick:function(){f(!0),console.log(c),s((function(e){return e+1})),c<n.length?h(n[c]):g()},text:u?b.type:"seeds"}):"",u?Le(e,b):""]}))})};ve.a.button(Ge||(Ge=Object(xe.a)(["\ncolor: palevioletred;\nfont-size: 1em;\nmargin: 1em;\npadding: 0.25em 1em;\nborder: 2px solid palevioletred;\nborder-radius: 3px;\n"]))),ve.a.div(Ye||(Ye=Object(xe.a)(["\n  background-color: lightgrey;\n  "])));var ze=function(e){Object(o.useRef)();var t=Object(o.useRef)();return Object(E.jsx)("group",{children:Object(E.jsx)("mesh",Object(C.a)(Object(C.a)({ref:t},e),{},{children:Object(E.jsx)("directionalLight",{position:[0,.5,1],intensity:.7})}))})};function Je(e){return Object(E.jsx)(Be,{plantId:e.plantId,growth:e.growth,date:e.date,position:e.position,type:e.type},S())}var Ze=function e(t,n,o,a){Object(s.a)(this,e),this.userId=t,this.friendId=n,this.friendName=o,this.friendWorld=a};function _e(){return(_e=Object(b.a)(j.a.mark((function e(t,n,o,a){var r,c,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y(n,a),console.log("DATE DIFFERENCE in loadBalloons: "+r),e.next=4,O.getBalloons(o);case 4:return c=e.sent,s=c.data.data,i=Ve(s),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ve(e){for(var t=[],n=0;n<e.length;n++){var o=e[n];o.balloonId=o._id,o.claimed||t.push(Object.assign(new pt,o))}return t}var He={max:20,min:-20},Ke={max:20,min:-20},Qe={max:40,min:10};function $e(){return($e=Object(b.a)(j.a.mark((function e(t){var n,o,a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("LOADING FRIENDS FOR "+t),e.next=3,O.getFriends(t);case 3:for(n=e.sent,o=n.data.data,a=[],r=0;r<o.length;r++)c=o[r],a.push({friendId:c.friendId,name:c.friendName,world:JSON.parse(c.friendWorld),position:[dt(He),dt(Ke),dt(Qe)]});return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function et(){return(et=Object(b.a)(j.a.mark((function e(t){var n,o,a,r,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("LOADING GARDEN for "+t),e.next=3,O.getPlants(t);case 3:for(n=e.sent,o=n.data.data,a=[],r=lt(Date()).stamp,c=0;c<o.length;c++)console.log("LOADED PLANT IS"),(s=o[c]).date=JSON.parse(s.date),s.growth=tt(s.date,r),console.log(s),a.push(Object.assign(new gt,s));return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function tt(e,t){return console.log(e.stamp),console.log(t),y(e.stamp,t)}function nt(){return(nt=Object(b.a)(j.a.mark((function e(t){var n,o,a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("LOADING Seeds FOR "+t),e.next=3,O.getSeeds(t);case 3:for(n=e.sent,o=n.data.data,console.log(o),a=[],r=0;r<o.length;r++)c=o[r],a.push({type:c.type,quantity:c.quantity});return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ot(){return(ot=Object(b.a)(j.a.mark((function e(t,n,o){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return!0,e.next=3,O.getFriendByName(o,t).then((function(e){console.log("Already friends?"),console.log(e),e.data.data.friendName!==o||e.data.data.userId!==t?at(t,n,o):console.log("YES ALREADY FRIENDS")}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function at(e,t,n){return rt.apply(this,arguments)}function rt(){return(rt=Object(b.a)(j.a.mark((function e(t,n,o){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Making friend request to "+o+"from userName"),e.next=3,O.getUser(o).then((function(e){ut(e.data.data._id,"friendRequest",1,"".concat(n," wants to connect!"),n)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ct(){return(ct=Object(b.a)(j.a.mark((function e(t,n,o,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getUser(o).then((function(e){var o=e.data.data._id,r=e.data.data.world,c=e.data.data.name,s=new Ze(o,t,n,JSON.stringify(a)),i=new Ze(t,o,c,r);O.addFriends(s).then((function(e){console.log("ME ".concat(s.friendName," is friends with ").concat(i.friendName))})),O.addFriends(i).then((function(e){console.log('"FRIEND "'.concat(i.friendName," is friends with ").concat(s.friendName))}))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function st(e){return e[Math.floor(Math.random()*e.length)]}function it(){return(it=Object(b.a)(j.a.mark((function e(t,n,o){var a,r,c,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={world:JSON.stringify(n)},r={worldChosen:o},c=lt(),s={lastLogin:c.stamp},i={world:a,worldChosen:r,lastLogin:s},console.log(i),e.next=8,O.updateGarden(t,i).then((function(e){console.log(e),console.log("Garden updated successfully")}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function lt(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,o=e.getFullYear();return{year:o,month:n,day:t,stamp:"".concat(o,"/").concat(n,"/").concat(t)}}function ut(e,t,n,o){return ft.apply(this,arguments)}function ft(){return ft=Object(b.a)(j.a.mark((function e(t,n,o,a){var r,c,s,i=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>4&&void 0!==i[4]?i[4]:"SeedBank",c=i.length>5&&void 0!==i[5]?i[5]:st(["#db504a","#ff6f59","#ffe200","#9bf6ff","#ffd6a5","#caffbf","#ffc6ff","#bdb2ff","#e9ff70","#ff70a6","#ff9770","#c64664","#54428e","#ef476f","#eb5e28"]),console.log("In sendBalloon "+n),s=new pt(t,n,o,a,r,c),console.log(s),e.next=7,O.addBalloons(s).then((function(e){console.log("".concat(n," balloon sent!"))}));case 7:case"end":return e.stop()}}),e)}))),ft.apply(this,arguments)}function dt(e){return Math.random()*(e.max-e.min)+e.min}function jt(e){return bt.apply(this,arguments)}function bt(){return(bt=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log("In UPDATED!"),e.next=4,O.updateBalloons(t,{}).then((function(e){console.log("Balloon updated successfully")}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ht(){return(ht=Object(b.a)(j.a.mark((function e(t,n){var o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("In UPDATED SEEDS!"),console.log(t),console.log(n.type),o={quantity:n.quantity},e.next=6,O.updateSeeds(t,n.type,o).then((function(e){console.log("Seed updated successfully")}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var pt=function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3?arguments[3]:void 0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"SeedBank",c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:st(["#db504a","#ff6f59","#ffe200","#9bf6ff","#ffd6a5","#caffbf","#ffc6ff","#bdb2ff","#e9ff70","#ff70a6","#ff9770","#c64664","#54428e","#ef476f","#eb5e28"]);Object(s.a)(this,e),this.balloonId=S(),this.userId=t,this.colour=c,this.position=Ot(),this.type=n,this.quantity=o,this.message=a,this.claimed=!1,this.sender=r};function Ot(){return[dt({max:2,min:-2}),dt({max:1.8,min:1.5}),dt({max:1.8,min:-1.8})]}var gt=function e(t,n,o){Object(s.a)(this,e),this.userId=t,this.type=o,this.growth=0,this.position=n,this.date=lt(),this.plantId=S(),this.bloom=1},mt=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt();Object(s.a)(this,e),this.stalactites=t};function xt(){for(var e=[],t=0,n=0;n<10;n++)e.push(vt(t)),t+=.1;return e}function vt(e){return{geometry:yt(e),position:wt(e),colour:st(["#6C6460","#8a817c","#6c757d"])}}function yt(e){var t={max:.8-e,min:.01};return[dt({max:1.3-e,min:1-e}),dt(t),dt({max:2.3,min:1}),dt({max:12,min:6})]}function wt(e){var t={max:0+e,min:1+e},n={max:.5,min:-.5};return[dt(n),-dt(t),dt(n)]}var St,Ct,kt,Et,Nt,It,Rt,Pt,Tt,Dt,Ut,Ft=function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(s.a)(this,e),this.userId=t,this.type=n,this.quantity=o},At=(n(97),ve.a.h1.attrs({className:"h1"})(St||(St=Object(xe.a)([""])))),Bt=ve.a.div.attrs({className:"form-group"})(Ct||(Ct=Object(xe.a)(["\n    margin: 0 30px;\n"]))),Wt=ve.a.label(kt||(kt=Object(xe.a)(["\n    margin: 5px;\n"]))),qt=ve.a.input.attrs({className:"form-control"})(Et||(Et=Object(xe.a)(["\n    margin: 5px;\n"]))),Lt=ve.a.button.attrs({className:"btn btn-primary"})(Nt||(Nt=Object(xe.a)(["\n    margin: 15px 15px 15px 5px;\n"]))),Mt=ve.a.a.attrs({className:"btn btn-danger"})(It||(It=Object(xe.a)(["\n    margin: 15px 15px 15px 5px;\n"]))),Gt=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).handleChangeInputName=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,o.setState({name:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.handleChangeInputEmail=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,o.setState({email:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.handleChangeInputPassword=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,o.setState({password:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.handleAddUser=Object(b.a)(j.a.mark((function e(){var t,n,a,r,c,s,i,l,u,f,d,b,h;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.state,n=t.name,a=t.email,r=t.password,c="",s=new mt,i=JSON.stringify(s),!1,l=lt(),u=l.stamp,!0,f={name:n,email:a,password:r,world:i,worldChosen:false,lastLogin:u,newUser:true},console.log(f),d=!1,e.next=13,O.getUser(n).then((function(e){204===e.status?d=!0:window.alert("Username taken")}));case 13:if(o.setState({name:"",email:"",password:""}),!d){e.next=26;break}return e.next=17,O.addUser(f).then((function(e){window.alert("User added"),o.props.setUser(n,e.data.id,s,!1,u),c=e.data.id}));case 17:return console.log("ID is"),console.log(c),b=new pt(c,"generic_plant",3,"Welcome! 3 generic_plant ".concat("\n"," seeds - go plant!")),h=new pt(c,"tulip",3,"Welcome! 3 tulip ".concat("\n"," seeds - get planting!")),console.log(b),e.next=24,O.addBalloons(b).then((function(e){console.log("Welcome balloon one added")}));case 24:return e.next=26,O.addBalloons(h).then((function(e){console.log("Welcome balloon two added")}));case 26:case"end":return e.stop()}}),e)}))),o.state={name:"",email:"",password:""},o}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,o=e.password;return Object(E.jsxs)(Bt,{children:[Object(E.jsx)(At,{children:"Sign Up"}),Object(E.jsx)(Wt,{children:"Name: "}),Object(E.jsx)(qt,{type:"text",value:t,onChange:this.handleChangeInputName}),Object(E.jsx)(Wt,{children:"Email: "}),Object(E.jsx)(qt,{type:"text",value:n,onChange:this.handleChangeInputEmail}),Object(E.jsx)(Wt,{children:"Password: "}),Object(E.jsx)(qt,{type:"text",value:o,onChange:this.handleChangeInputPassword}),Object(E.jsx)(Lt,{onClick:this.handleAddUser,children:"Sign Up"}),Object(E.jsx)(Mt,{href:"/movies/list",children:"Cancel"})]})}}]),n}(o.Component),Yt=Gt,Xt=ve.a.h1.attrs({className:"h1"})(Rt||(Rt=Object(xe.a)([""]))),zt=ve.a.div.attrs({className:"form-group"})(Pt||(Pt=Object(xe.a)(["\n    margin: 0 30px;\n"]))),Jt=ve.a.label(Tt||(Tt=Object(xe.a)(["\n    margin: 5px;\n"]))),Zt=ve.a.input.attrs({className:"form-control"})(Dt||(Dt=Object(xe.a)(["\n    margin: 5px;\n"]))),_t=ve.a.button.attrs({className:"btn btn-primary"})(Ut||(Ut=Object(xe.a)(["\n    margin: 15px 15px 15px 5px;\n"]))),Vt=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).handleChangeInputName=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,o.setState({name:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.handleChangeInputPassword=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,o.setState({password:n});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.handleGetUser=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getUser(o.state.name).then((function(e){if(console.log(e),204===e.status)window.alert("No user found");else if(o.state.password===e.data.data.password){var t=e.data.data.name,n=e.data.data._id,a=JSON.parse(e.data.data.world),r=e.data.data.worldChosen,c=e.data.data.lastLogin;window.alert("Welcome back ".concat(t)),o.props.setUser(t,n,a,r,c,!1)}else window.alert("Incorrect password")}));case 2:case"end":return e.stop()}}),e)}))),o.state={name:"",email:"",password:""},o}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=(e.email,e.password);return Object(E.jsxs)(zt,{children:[Object(E.jsx)(Xt,{children:"Log In"}),Object(E.jsx)(Jt,{children:"Name: "}),Object(E.jsx)(Zt,{type:"text",value:t,onChange:this.handleChangeInputName}),Object(E.jsx)(Jt,{children:"Password: "}),Object(E.jsx)(Zt,{type:"text",value:n,onChange:this.handleChangeInputPassword}),Object(E.jsx)(_t,{onClick:this.handleGetUser,children:"Log In"})]})}}]),n}(o.Component),Ht=Vt;n(98);var Kt=function(e){var t=Object(o.useState)([]),n=Object(k.a)(t,2),a=n[0],r=n[1],c=Object(o.useState)([]),s=Object(k.a)(c,2),i=s[0],l=s[1],u=Object(o.useState)(""),f=Object(k.a)(u,2),d=f[0],j=f[1],b=Object(o.useState)([]),h=Object(k.a)(b,2);h[0],h[1],Object(o.useEffect)((function(){(function(e){return nt.apply(this,arguments)})(e.id).then((function(e){return l(e)}))}),[]),Object(o.useEffect)((function(){console.log("USE EFFECT SEEDS!"),console.log("UPDATED SEEDS ARE:"),console.log(i)}),[i]),Object(o.useEffect)((function(){(function(e){return et.apply(this,arguments)})(e.id).then((function(e){return r(function(e){console.log("PLANTS IN CREATEPLANTS"),console.log(e);for(var t=[],n=0;n<e.length;n++){var o=e[n];t.push(Je(o))}return t}(e))}))}),[]),Object(o.useEffect)((function(){console.log("USE EFFECT PLANTS!"),console.log("NOW CHECKING ACHIEVEMENTS"),console.log(a.length),a.length%5===0&&0!==a.length?y():console.log(!1)}),[a]);var p=function(){console.log("REMOVE SEED"),j(""),O(-1,d),console.log(i)},O=function(t,n){console.log("UPDATE SEEDS...");var o=i.findIndex((function(e){return e.type===n}));if(-1===o)console.log("NEW SEED in UPDATE SEEDS"),console.log("adding newSeed "+n),l((function(e){return[].concat(Object(z.a)(e),[{type:n,quantity:t}])})),function(e,t){m.apply(this,arguments)}(e.id,n,t);else{console.log("INCREMENT SEEDS");var a=i[o];console.log(a),a.quantity+=t,l((function(e){return[].concat(Object(z.a)(e.filter((function(e){return e.type!==n}))),[a])})),function(e,t){ht.apply(this,arguments)}(e.id,a)}},y=function(){console.log("CHECK ACHIEVEMENTS");var t=a.length/5;if(i.length<t+2){var n=function(e,t,n){console.log("ACHIEVEMENT CALCULATOR:"),console.log(e);var o=!0,a={};if(e.length===v.length){var r=st(e);return console.log("bonusSeeds"),ut(t,r.type,3,"".concat(n," plants! Bonus ").concat(r.type," seeds!")),null}for(;o;)o=x(a=st(v),e);return ut(t,a.type,3,"".concat(n," plants! ","\n"," ").concat(a.type," unlocked!")),a}(i,e.id,a.length);null!==n&&O(0,n.type)}};return Object(E.jsx)("div",{className:"App",children:Object(E.jsxs)(T.a,{id:"canvas",children:[Object(E.jsx)(re,{}),Object(E.jsxs)(o.Suspense,{fallback:console.log("loading"),children:[Object(E.jsx)(pe,{friend:!1,sowPlant:function(t){if(d){console.log("SOW PLANT");var n=[t.point.x,t.point.y,t.point.z],o=new gt(e.id,n,d),a=Je(o);r((function(e){return[a].concat(Object(z.a)(e))})),p(),function(e){g.apply(this,arguments)}(o)}},position:[0,0,0],world:e.world,seeds:i}),a,Object(E.jsx)(ze,{}),Object(E.jsx)(ie,{}),Object(E.jsx)(ue,{sendPlant:function(t,n){if(d){var o="".concat(e.userName," sent you ","\n"," a ").concat(d," seed!");ut(n,d,1,o,e.userName),console.log("Sending ".concat(d," to ").concat(t," ").concat(n)),p()}else console.log("No seed selected")},userId:e.id})]}),e.worldChosen?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(I,{updateSeeds:O,acceptFriend:function(t){!function(e,t,n,o){ct.apply(this,arguments)}(e.id,e.userName,t,e.world)},userId:e.id,today:e.today,lastLogin:e.lastLogin,seeds:i}),Object(E.jsx)(G,{seeds:i,chosenSeed:d,buyBalloon:function(t){var n=st(i),o="Bought: ".concat(n.type," x 3!");ut(e.id,n.type,3,o,"SeedBank",t)},position:[0,-.8,1],sendFriendRequest:function(t){!function(e,t,n){ot.apply(this,arguments)}(e.id,e.userName,t,e.world)},selectSeed:function(e){i.find((function(t){return t.type===e})).quantity>0&&j(e)}})]}):Object(E.jsx)(me,{saveWorld:e.saveWorld,newWorld:e.newWorld})]})})},Qt=(n(99),function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={userName:"",id:0,world:{},chosenWorld:!1,lastLogin:"",newUser:!0},o.setUser=o.setUser.bind(Object(l.a)(o)),o.newWorld=o.newWorld.bind(Object(l.a)(o)),o.saveWorld=o.saveWorld.bind(Object(l.a)(o)),o.connecToServer=o.connecToServer.bind(Object(l.a)(o)),o}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.connecToServer()}},{key:"connecToServer",value:function(){fetch("/")}},{key:"setUser",value:function(e,t,n,o,a,r){this.setState({userName:e,id:t,world:n,worldChosen:o,lastLogin:a,today:lt().stamp,newUser:r})}},{key:"newWorld",value:function(){var e=new mt;this.setState({world:e})}},{key:"saveWorld",value:function(){this.setState({worldChosen:!0}),function(e,t,n){it.apply(this,arguments)}(this.state.id,this.state.world,!0)}},{key:"render",value:function(){return Object(E.jsxs)("div",{style:{position:"relative",width:"100%",height:"100%"},children:[Object(E.jsx)(ke.a,{children:Object(E.jsx)(Pe,{user:this.state.userName,setUser:this.setUser})}),this.state.userName?Object(E.jsx)(Kt,{id:this.state.id,userName:this.state.userName,newWorld:this.newWorld,world:this.state.world,worldChosen:this.state.worldChosen,saveWorld:this.saveWorld,lastLogin:this.state.lastLogin,today:this.state.today}):Object(E.jsxs)("div",{children:[Object(E.jsx)(Ht,{setUser:this.setUser}),Object(E.jsx)(Yt,{setUser:this.setUser})]})]})}}]),n}(a.a.Component)),$t=Qt;c.a.render(Object(E.jsx)($t,{}),document.getElementById("root"))},97:function(e,t,n){},98:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.d7ccc8d1.chunk.js.map