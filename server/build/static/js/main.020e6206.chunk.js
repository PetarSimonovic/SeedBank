(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n,s,r,c,i,o,d,l,u,p,h,b,j,g,m,O,f,v,x,w=a(0),k=a.n(w),y=a(19),S=a.n(y),C=a(4),N=a(5),U=a(9),P=a(8),G=a(7),I=(a(40),a(13)),D=a(3),E=a(2),_=a(1),A=E.a.div.attrs({className:"collpase navbar-collapse"})(n||(n=Object(D.a)([""]))),B=E.a.div.attrs({className:"navbar-nav mr-auto"})(s||(s=Object(D.a)([""]))),T=E.a.div.attrs({className:"collpase navbar-collapse"})(r||(r=Object(D.a)([""]))),L=function(e){Object(P.a)(a,e);var t=Object(G.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return Object(_.jsxs)(k.a.Fragment,{children:[Object(_.jsx)(I.b,{to:"/",className:"navbar-brand",children:"SeedBank"}),Object(_.jsx)(A,{children:Object(_.jsxs)(B,{children:[Object(_.jsxs)(T,{children:[" ",Object(_.jsxs)("p",{children:[" ",this.props.user]})," "]}),"> }"]})})]})}}]),a}(w.Component),z=a.p+"static/media/seedbankProto.6cdc7966.png",F=E.a.a.attrs({className:"navbar-brand"})(c||(c=Object(D.a)([""]))),R=function(e){Object(P.a)(a,e);var t=Object(G.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return Object(_.jsx)(F,{href:"https://example.com",children:Object(_.jsx)("img",{src:z,height:"50",alt:"seedbank"})})}}]),a}(w.Component),J=E.a.div.attrs({className:"container"})(i||(i=Object(D.a)([""]))),M=E.a.nav.attrs({className:"navbar navbar-expand-lg navbar-dark bg-dark"})(o||(o=Object(D.a)(["\n    margin-bottom: 20 px;\n"]))),Y=function(e){Object(P.a)(a,e);var t=Object(G.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return Object(_.jsx)(J,{children:Object(_.jsxs)(M,{children:[Object(_.jsx)(R,{}),Object(_.jsx)(L,{user:this.props.user,setUser:this.props.setUser})]})})}}]),a}(w.Component),H=(w.Component,a(6)),q=a.n(H),K=a(12),Q=a.p+"static/media/seedBankSoil.95b771d4.png",V=function(e){Object(P.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={planted:!1,seed:n.props.seed},n.handleClick=n.handleClick.bind(Object(U.a)(n)),n}return Object(N.a)(a,[{key:"handleClick",value:function(){console.log("SEED SELECTED "+this.props.seed),this.props.seed&&0===this.props.plant.growth&&this.props.plantSeed(this.props.id)}},{key:"render",value:function(){return Object(_.jsx)("td",{id:"plant_"+this.props.id,"data-testid":"plant_"+this.props.id,children:Object(_.jsx)("button",{className:"App-button",id:this.props.id,"data-testid":"button_"+this.props.id,seed:this.props.seed,onClick:this.handleClick,children:Object(_.jsx)("img",{className:"plant",src:this.props.plant.image})},"button_"+this.props.id)},"plant_"+this.props.id)}}]),a}(k.a.Component),W=a.p+"static/media/seedBankSprout1.a7750172.png",X=a.p+"static/media/seedBankSprout2.0542d352.png",Z=a.p+"static/media/seedBankFlower.c920f6dc.png",$=function(){function e(t,a){Object(C.a)(this,e),this.name="Generic Plant",this.price=1,this.id=t,this.date=a,this.growth=0,this.image=Q}return Object(N.a)(e,[{key:"setDate",value:function(){var e=new Date,t=e.getDate(),a=e.getMonth(),n=e.getFullYear();return Number("".concat(n).concat(a).concat(t))}},{key:"grow",value:function(){this.growth+=1,this.updateImage()}},{key:"updateImage",value:function(){console.log("Updating image");var e=[Q,W,X,Z];this.growth<e.length&&(this.image=e[this.growth])}}]),e}(),ee=a(35),te=a.n(ee).a.create({baseURL:"http://localhost:3000/api"}),ae={addUser:function(e){return te.post("/user",e)},getUser:function(e){return te.get("/user/".concat(e))},updateGarden:function(e,t){return te.put("/user/".concat(e),t)}},ne=E.a.table.attrs({})(d||(d=Object(D.a)(["\n    margin: 0 30px;\n"]))),se=function(e){Object(P.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).saveGarden=Object(K.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Attempting to save garden"),t={garden:n.state.garden},e.next=4,ae.updateGarden(n.props.id,t).then((function(e){console.log("Garden updated successfully"),console.log(n.state.garden.length)}));case 4:case"end":return e.stop()}}),e)}))),n.state={seed:"",garden:n.props.garden,infoPane:"Choose seed"},n.generateGarden=n.generateGarden.bind(Object(U.a)(n)),n.selectSeed=n.selectSeed.bind(Object(U.a)(n)),n.addPlot=n.addPlot.bind(Object(U.a)(n)),n.resetSeed=n.resetSeed.bind(Object(U.a)(n)),n.updateGarden=n.updateGarden.bind(Object(U.a)(n)),n.plantSeed=n.plantSeed.bind(Object(U.a)(n)),n.getPlant=n.getPlant.bind(Object(U.a)(n)),n}return Object(N.a)(a,[{key:"updatePlantInfo",value:function(){console.log("Button was Clicked")}},{key:"generateGarden",value:function(){console.log("Generating Garden, size:"+this.props.size+this.state.seed);for(var e=[],t=0;t<this.props.size;t++){var a="gardenRow_"+t;e.push(Object(_.jsx)("tr",{id:a,children:this.addPlot(t)},a.toString()))}return e}},{key:"addPlot",value:function(e){for(var t=[],a=0;a<this.props.size;a++){var n="plot_"+e+"_"+a,s=e+"_"+a,r=this.getPlant(s);t.push(Object(_.jsx)(V,{id:e+"_"+a,plantSeed:this.plantSeed,plant:r,seed:this.state.seed},n.toString()))}return t}},{key:"selectSeed",value:function(){this.setState({seed:"Generic Plant",infoPane:"Choose a plot for Generic Plant"}),console.log("Seed selected?"+this.state.seed)}},{key:"resetSeed",value:function(){this.setState({seed:"",infoPane:"Choose seed"}),console.log("Seed selected?"+this.state.seed)}},{key:"plantSeed",value:function(e){console.log("SEARCHING FOR"+e);var t=this.state.garden.find((function(t){return t.id===e}));console.log("Plant is  "+t.id+" "+t.growth),t.grow(),console.log("Plant is  "+t.id+" "+t.growth);var a=this.state.garden.filter((function(t){return t.id!=e}));a.push(t),this.setState({garden:a}),console.log("PLANT UPDATED"),this.resetSeed()}},{key:"updateGarden",value:function(e){var t=this.state.garden;t.push(e),this.setState({garden:t})}},{key:"getPlant",value:function(e){if(!this.state.garden.some((function(t){return t.id===e}))){var t=new $(e,this.props.date);this.updateGarden(t)}return this.state.garden.find((function(t){return t.id===e}))}},{key:"componentDidUpdate",value:function(){this.saveGarden()}},{key:"render",value:function(){return Object(_.jsxs)(ne,{children:[Object(_.jsx)("p",{children:this.state.infoPane}),Object(_.jsx)("table",{className:"garden",id:"gardenTable",children:Object(_.jsx)("tbody",{children:this.generateGarden()})},"gardenTable"),Object(_.jsx)("button",{id:"sowSeed",onClick:this.selectSeed,children:"Generic Plant"})]})}}]),a}(k.a.Component),re=E.a.h1.attrs({className:"h1"})(l||(l=Object(D.a)([""]))),ce=E.a.div.attrs({className:"form-group"})(u||(u=Object(D.a)(["\n    margin: 0 30px;\n"]))),ie=E.a.label(p||(p=Object(D.a)(["\n    margin: 5px;\n"]))),oe=E.a.input.attrs({className:"form-control"})(h||(h=Object(D.a)(["\n    margin: 5px;\n"]))),de=E.a.button.attrs({className:"btn btn-primary"})(b||(b=Object(D.a)(["\n    margin: 15px 15px 15px 5px;\n"]))),le=E.a.a.attrs({className:"btn btn-danger"})(j||(j=Object(D.a)(["\n    margin: 15px 15px 15px 5px;\n"]))),ue=function(e){Object(P.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).handleChangeInputName=function(){var e=Object(K.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,n.setState({name:a});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleChangeInputEmail=function(){var e=Object(K.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,n.setState({email:a});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleChangeInputPassword=function(){var e=Object(K.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,n.setState({password:a});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleAddUser=Object(K.a)(q.a.mark((function e(){var t,a,s,r,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.name,s=t.email,r=t.password,c={name:a,email:s,password:r},e.next=4,ae.addUser(c).then((function(e){window.alert("User added"),n.setState({name:"",email:"",password:""})}));case 4:case"end":return e.stop()}}),e)}))),n.state={name:"",email:"",password:""},n}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password;return Object(_.jsxs)(ce,{children:[Object(_.jsx)(re,{children:"Sign Up"}),Object(_.jsx)(ie,{children:"Name: "}),Object(_.jsx)(oe,{type:"text",value:t,onChange:this.handleChangeInputName}),Object(_.jsx)(ie,{children:"Email: "}),Object(_.jsx)(oe,{type:"text",value:a,onChange:this.handleChangeInputEmail}),Object(_.jsx)(ie,{children:"Password: "}),Object(_.jsx)(oe,{type:"text",value:n,onChange:this.handleChangeInputPassword}),Object(_.jsx)(de,{onClick:this.handleAddUser,children:"Sign Up"}),Object(_.jsx)(le,{href:"/movies/list",children:"Cancel"})]})}}]),a}(w.Component),pe=E.a.h1.attrs({className:"h1"})(g||(g=Object(D.a)([""]))),he=E.a.div.attrs({className:"form-group"})(m||(m=Object(D.a)(["\n    margin: 0 30px;\n"]))),be=E.a.label(O||(O=Object(D.a)(["\n    margin: 5px;\n"]))),je=E.a.input.attrs({className:"form-control"})(f||(f=Object(D.a)(["\n    margin: 5px;\n"]))),ge=E.a.button.attrs({className:"btn btn-primary"})(v||(v=Object(D.a)(["\n    margin: 15px 15px 15px 5px;\n"]))),me=(E.a.a.attrs({className:"btn btn-danger"})(x||(x=Object(D.a)(["\n    margin: 15px 15px 15px 5px;\n"]))),function(e){Object(P.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).handleChangeInputName=function(){var e=Object(K.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,n.setState({name:a});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleChangeInputPassword=function(){var e=Object(K.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,n.setState({password:a});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleGetUser=Object(K.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.getUser(n.state.name).then((function(e){if(console.log(e),console.log("Name is "+e.data.data.name),n.state.password===e.data.data.password){window.alert("Logged in");var t=e.data.data.name,a=e.data.data._id,s=e.data.data.garden;n.props.setUser(t,a,s)}else window.alert("Incorrect password")}));case 2:case"end":return e.stop()}}),e)}))),n.state={name:"",email:"",password:""},n}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=(e.email,e.password);return Object(_.jsxs)(he,{children:[Object(_.jsx)(pe,{children:"Log In"}),Object(_.jsx)(be,{children:"Name: "}),Object(_.jsx)(je,{type:"text",value:t,onChange:this.handleChangeInputName}),Object(_.jsx)(be,{children:"Password: "}),Object(_.jsx)(je,{type:"text",value:a,onChange:this.handleChangeInputPassword}),Object(_.jsx)(ge,{onClick:this.handleGetUser,children:"Log In"})]})}}]),a}(w.Component)),Oe=(a(65),function(e){Object(P.a)(a,e);var t=Object(G.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={userName:"",userID:0,garden:[],date:n.setDate()},n.setUser=n.setUser.bind(Object(U.a)(n)),n}return Object(N.a)(a,[{key:"setUser",value:function(e,t,a){console.log("SETTING USER"),this.setState({userName:e,id:t,garden:this.parseGarden(a)}),console.log("User is "+this.state.id+" "+this.state.userName)}},{key:"setDate",value:function(){var e=new Date,t=e.getDate(),a=e.getMonth(),n=e.getFullYear();return Number("".concat(n).concat(a).concat(t))}},{key:"parseGarden",value:function(e){console.log("Garden loaded");for(var t=[],a=0;a<e.length;a++){var n=Object.assign(new $,e[a]);this.state.date>n.date&&n.grow(),t.push(n)}return t}},{key:"render",value:function(){return Object(_.jsxs)(I.a,{children:[Object(_.jsx)(Y,{user:this.state.userName,setUser:this.setUser}),this.state.userName?Object(_.jsx)(se,{size:5,date:this.state.date,garden:this.state.garden,userName:this.state.userName,id:this.state.id}):Object(_.jsxs)("div",{children:[Object(_.jsx)(me,{setUser:this.setUser})," ",Object(_.jsx)(ue,{setUser:this.setUser})]})]})}}]),a}(k.a.Component));S.a.render(Object(_.jsx)(Oe,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.020e6206.chunk.js.map