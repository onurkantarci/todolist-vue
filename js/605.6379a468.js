"use strict";(self["webpackChunktodo_fetch_project"]=self["webpackChunktodo_fetch_project"]||[]).push([[605],{5605:function(t,o,n){n.r(o),n.d(o,{default:function(){return p}});var a=n(3396);const e={class:"home"};function c(t,o,n,c,r,s){const d=(0,a.up)("TodoCount");return(0,a.wg)(),(0,a.iD)("div",e,[(0,a.Wm)(d)])}var r=n(7139);const s={key:0};function d(t,o,n,e,c,d){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("h1",null,"Current available todo count: "+(0,r.zw)(c.todos.length),1),c.loading?((0,a.wg)(),(0,a.iD)("h3",s,"Loading...")):(0,a.kq)("",!0)])}var i={name:"TodoCount",data(){return{todos:[],loading:!0}},created(){this.fetchData()},methods:{async fetchData(){this.loading=!0;try{const t=await fetch("https://calm-plum-jaguar-tutu.cyclic.app/todos"),o=await t.json();this.loading=!1,this.todos=o.data}catch(t){console.error("Error fetching data",t)}}}},u=n(89);const h=(0,u.Z)(i,[["render",d]]);var l=h,f={name:"TodoListView",components:{TodoCount:l}};const g=(0,u.Z)(f,[["render",c]]);var p=g}}]);
//# sourceMappingURL=605.6379a468.js.map