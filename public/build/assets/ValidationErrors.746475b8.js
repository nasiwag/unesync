import{_ as i,o as e,c as r,a as s,t as o,F as d,h as l,f as _}from"./app.7f0e9691.js";const m={computed:{errors(){return this.$page.props.errors},hasErrors(){return Object.keys(this.errors).length>0}}},h={key:0},p={class:"font-medium text-red-600"},u={class:"mt-3 list-disc list-inside text-sm text-red-600"};function f(a,g,k,x,y,t){return t.hasErrors?(e(),r("div",h,[s("div",p,o(a.$t("Whoops! Something went wrong.")),1),s("ul",u,[(e(!0),r(d,null,l(t.errors,(n,c)=>(e(),r("li",{key:c},o(n),1))),128))])])):_("",!0)}var $=i(m,[["render",f]]);export{$ as T};