import{S as g,m as v,p as k}from"./SearchFilter.ce511daf.js";import{t as j}from"./throttle.d54d892c.js";import{M as C}from"./Modal.e5b9be64.js";import{T as B}from"./Button.9f28211d.js";import{S as D}from"./SelectInput.3f535d75.js";import{P as S}from"./Pagination.27fb388c.js";import{A as T}from"./AdminLayout.ba431b54.js";import{T as V}from"./SectionTitle.850f7dea.js";import{_ as A,r as a,o as n,d as N,w as m,a as t,b as r,g as h,t as s,c as p,h as $,F,f as _}from"./app.7f0e9691.js";import"./_baseIsEqual.d6f60a0b.js";import"./DropdownLink.e265102c.js";import"./index.1f699fe1.js";import"./Label.048d0136.js";import"./InputError.7cfbcfa2.js";import"./ApplicationLogo.135e3d4e.js";import"./ApplicationMark.f5051ed3.js";const I={components:{Modal:C,TecButton:B,Pagination:S,AdminLayout:T,SelectInput:D,SearchFilter:g,TecSectionTitle:V},props:{filters:Object,activities:Object},data(){return{activity:null,details:!1,form:{search:this.filters.search}}},watch:{form:{handler:j(function(){let e=k(this.form);this.$inertia.visit(this.route("activity",Object.keys(e).length?e:{remember:"forget"}),{onFinish:()=>{document.getElementById("page-search").focus()}})},150),deep:!0}},methods:{showDetails(e){this.activity=e,this.details=!0},hideDetails(){this.activity=null,this.details=!1},reset(){this.form=v(this.form,()=>null)}}},P={class:"px-4 md:px-0"},O={class:"mb-6 flex justify-between items-center print:hidden"},E={class:"bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto"},L={class:"w-full whitespace-nowrap"},M={class:"text-left font-bold"},R={class:"px-6 pt-6 pb-4"},q={class:"px-6 pt-6 pb-4"},U={class:"px-6 pt-6 pb-4"},z={class:"px-6 pt-6 pb-4"},G=["onClick"],H={class:"border-t px-6 py-4"},J={class:"border-t px-6 py-4"},K={class:"border-t px-6 py-4"},Q={class:"border-t px-6 py-4"},W={key:0},X={class:"border-t px-6 py-4",colspan:"4"},Y={class:"px-6 py-4 print:px-0"},Z={class:"flex items-center justify-between print:hidden"},tt={class:"text-lg"},et={key:0,class:"mt-4 p-4 bg-gray-100 -mx-6 -mb-6 md:rounded-b-lg"},st={class:"bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto print:m-0"},ot={class:"w-full my-4"},it={class:"px-6 py-2 w-32 whitespace-nowrap"},at={class:"px-6 py-2"},nt={class:"bg-gray-50 px-6 py-2 w-32 whitespace-nowrap"},rt={class:"bg-gray-50 px-6 py-2"},lt={class:"px-6 py-2 w-32 whitespace-nowrap"},ct={class:"px-6 py-2"},dt={class:"text-sm font-mono tracking-wide"};function mt(e,l,c,pt,i,d){const u=a("tec-section-title"),f=a("search-filter"),y=a("pagination"),b=a("icons"),w=a("modal"),x=a("admin-layout");return n(),N(x,{title:e.$t("Activity")},{default:m(()=>[t("div",P,[r(u,{class:"-mx-4 md:mx-0 mb-6"},{title:m(()=>[h(s(e.$t("Activities")),1)]),description:m(()=>[h(s(e.$t("Please review the data in the table below")),1)]),_:1}),t("div",O,[r(f,{dropdown:!1,modelValue:i.form.search,"onUpdate:modelValue":l[0]||(l[0]=o=>i.form.search=o),class:"w-full max-w-md mr-4",onReset:d.reset},null,8,["modelValue","onReset"])]),t("div",E,[t("table",L,[t("tr",M,[t("th",R,s(e.$t("Created at")),1),t("th",q,s(e.$t("Name")),1),t("th",U,s(e.$t("Description")),1),t("th",z,s(e.$t("By")),1)]),(n(!0),p(F,null,$(c.activities.data,o=>(n(),p("tr",{key:o.id,onClick:ht=>d.showDetails(o),class:"hover:bg-gray-100 focus-within:bg-gray-100 cursor-pointer"},[t("td",H,s(e.$datetime(o.created_at)),1),t("td",J,s(o.log_name),1),t("td",K,s(o.description),1),t("td",Q,s(o.causer?o.causer.name:""),1)],8,G))),128)),c.activities.data.length===0?(n(),p("tr",W,[t("td",X,s(e.$t("There is no data to display.")),1)])):_("",!0)])]),r(y,{class:"mt-6",meta:c.activities.meta,links:c.activities.links},null,8,["meta","links"])]),r(w,{show:i.details,"max-width":"2xl",closeable:!0,onClose:d.hideDetails},{default:m(()=>[t("div",Y,[t("div",Z,[t("div",tt,s(e.$t("Activity Details")),1),t("button",{onClick:l[1]||(l[1]=o=>d.hideDetails()),class:"flex items-center justify-center -mr-2 h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 focus:outline-none"},[r(b,{name:"cross",class:"h-5 w-5"})])]),i.activity?(n(),p("div",et,[t("div",st,[t("table",ot,[t("tr",null,[t("td",it,s(e.$t("Subject Id")),1),t("td",at,s(i.activity.subject_id),1)]),t("tr",null,[t("td",nt,s(e.$t("Subject Type")),1),t("td",rt,s(i.activity.subject_type),1)]),t("tr",null,[t("td",lt,s(e.$t("Properties")),1),t("td",ct,[t("pre",dt,s(i.activity.properties),1)])])])])])):_("",!0)])]),_:1},8,["show","onClose"])]),_:1},8,["title"])}var Vt=A(I,[["render",mt]]);export{Vt as default};