"use strict";(self["webpackChunktodo_fetch_project"]=self["webpackChunktodo_fetch_project"]||[]).push([[663],{6663:function(o,t,e){e.r(t),e.d(t,{default:function(){return z}});var a=e(3396);const s={class:"todolist"};function d(o,t,e,d,n,r){const c=(0,a.up)("TodoList");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(c)])}var n=e(9242),r=e(7139);const c=o=>((0,a.dD)("data-v-9d74426e"),o=o(),(0,a.Cn)(),o),i={id:"app"},h=c((()=>(0,a._)("label",null,"Search todo: ",-1))),l={key:0};function u(o,t,e,s,d,c){const u=(0,a.up)("AddTodo"),p=(0,a.up)("UpdateTodo"),T=(0,a.up)("RemoveTodo"),m=(0,a.up)("TodoToast");return(0,a.wg)(),(0,a.iD)("div",i,[h,(0,a.wy)((0,a._)("input",{class:"search-input",type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>d.search=o)},null,512),[[n.nr,d.search]]),(0,a.Wm)(u,{loading:d.loading,fetchData:c.fetchData},null,8,["loading","fetchData"]),d.loading?((0,a.wg)(),(0,a.iD)("h3",l,"Loading...")):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.filteredTodos,(o=>((0,a.wg)(),(0,a.iD)("div",{key:o._id,class:"todo-list"},[(0,a.Wm)(p,{loading:d.loading,todoId:o._id,fetchData:c.fetchData,isComplete:o.isComplete},null,8,["loading","todoId","fetchData","isComplete"]),(0,a._)("h2",null,(0,r.zw)(o.todoName),1),(0,a.Wm)(T,{loading:d.loading,todoId:o._id,fetchData:c.fetchData},null,8,["loading","todoId","fetchData"]),(0,a.Wm)(m,{ref_for:!0,ref:"todoToast"},null,512)])))),128))])}const p=o=>((0,a.dD)("data-v-a2b8d0c8"),o=o(),(0,a.Cn)(),o),T=p((()=>(0,a._)("label",null,"Add Todo: ",-1))),m=p((()=>(0,a._)("button",{type:"submit"},"Add",-1)));function f(o,t,e,s,d,r){const c=(0,a.up)("TodoToast");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("form",{onSubmit:t[1]||(t[1]=(0,n.iM)(((...o)=>r.postTodo&&r.postTodo(...o)),["prevent"]))},[T,(0,a.wy)((0,a._)("input",{placeholder:"Type a new todo...",type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>d.newTodo=o)},null,512),[[n.nr,d.newTodo]]),m],32),(0,a.Wm)(c,{ref:"todoToast"},null,512)],64)}const w="https://calm-plum-jaguar-tutu.cyclic.app/todos",g=async()=>{try{const o=await fetch(`${w}`);return await o.json()}catch(o){console.error("Error fetching data",o)}},y=async o=>{try{const t=await fetch(`${w}/${o}`,{method:"DELETE"});return await t.json()}catch(t){console.error("Error deleting data",t)}},D=async(o,t)=>{try{const e=await fetch(`${w}/${o}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return await e.json()}catch(e){console.error("Error updating data",e)}},_=async o=>{try{const t=await fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});return await t.json()}catch(t){console.error("Error creating data",t)}};function v(o,t,e,s,d,n){return d.show?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,r.C_)(["toast",d.toastType])},(0,r.zw)(d.message),3)):(0,a.kq)("",!0)}var $={data(){return{show:!1,message:"",toastType:"success"}},methods:{showToast(o,t){this.message=o,this.toastType=t,this.show=!0,setTimeout((()=>{this.show=!1}),4e3)}}},C=e(89);const k=(0,C.Z)($,[["render",v],["__scopeId","data-v-7e449f86"]]);var b=k,I={name:"AddTodo",props:["fetchData","loading"],components:{TodoToast:b},data(){return{newTodo:""}},methods:{async postTodo(){this.$emit("loading",!0);try{const o={todoName:this.newTodo,isComplete:!1};await _(o),this.$emit("loading",!1),this.fetchData(),this.showToast("New todo added successfully","success")}catch(o){this.showToast(`An error occured: ${o.message}`,"error"),console.error("Error fetching data",o)}},showToast(o,t){this.$refs.todoToast.showToast(o,t)}}};const E=(0,C.Z)(I,[["render",f],["__scopeId","data-v-a2b8d0c8"]]);var A=E;function j(o,t,e,s,d,n){const r=(0,a.up)("TodoToast");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("button",{onClick:t[0]||(t[0]=(...o)=>n.deleteTodo&&n.deleteTodo(...o))},"X"),(0,a.Wm)(r,{ref:"todoToast"},null,512)],64)}var W={name:"RemoveTodo",components:{TodoToast:b},props:["fetchData","todoId","loading"],methods:{async deleteTodo(){this.$emit("loading",!0);try{await y(this.todoId),this.fetchData(),this.$emit("loading",!1),this.showToast("Removed todo successfully","success")}catch(o){this.showToast(`An error occured: ${o.message}`,"error"),console.error("Error fetching data",o.message)}},showToast(o,t){this.$refs.todoToast.showToast(o,t)}}};const U=(0,C.Z)(W,[["render",j],["__scopeId","data-v-6e79c9c2"]]);var N=U;const Z=["checked"];function L(o,t,e,s,d,n){const r=(0,a.up)("TodoToast");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("input",{type:"checkbox",checked:d.checkstate,onChange:t[0]||(t[0]=(...o)=>n.updateTodo&&n.updateTodo(...o)),class:"checkbox-input"},null,40,Z),(0,a.Wm)(r,{ref:"todoToast"},null,512)],64)}var S={name:"UpdateTodo",props:["todoId","fetchData","isComplete","loading"],components:{TodoToast:b},data(){return{checkstate:this.isComplete}},methods:{async updateTodo(){this.$emit("loading",!0);try{await D(this.todoId,{isComplete:!this.isComplete}),this.fetchData(),this.$emit("loading",!1),this.showToast("Updated todo successfully","success")}catch(o){this.showToast(`An error occured: ${o.message}`,"error"),console.error("Error fetching data",o)}},showToast(o,t){this.$refs.todoToast.showToast(o,t)}}};const x=(0,C.Z)(S,[["render",L],["__scopeId","data-v-257b6c0e"]]);var H=x,R={name:"App",components:{AddTodo:A,RemoveTodo:N,UpdateTodo:H,TodoToast:b},data(){return{todos:[],loading:!0,search:""}},mounted(){this.fetchData()},computed:{filteredTodos(){return this.todos.filter((o=>o.todoName.match(this.search)))}},methods:{async fetchData(){this.loading=!0;try{const o=await g();this.todos=o.data,this.loading=!1}catch(o){this.showToast("An error occured","error"),console.error("Error fetching data",o)}},showToast(o,t){this.$refs.todoToast.showToast(o,t)}}};const Y=(0,C.Z)(R,[["render",u],["__scopeId","data-v-9d74426e"]]);var O=Y,V={name:"TodoListView",components:{TodoList:O}};const q=(0,C.Z)(V,[["render",d]]);var z=q}}]);
//# sourceMappingURL=663.2e317833.js.map