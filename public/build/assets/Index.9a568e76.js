import{S as z,m as M,p as P}from"./SearchFilter.ce511daf.js";import{t as S}from"./throttle.d54d892c.js";import{D as R}from"./Dialog.3441429d.js";import{M as B}from"./Modal.e5b9be64.js";import I from"./Details.b36735fb.js";import{T as N}from"./Button.9f28211d.js";import{P as L}from"./Pagination.27fb388c.js";import{S as O}from"./SelectInput.3f535d75.js";import{T as F,a as U}from"./DropdownLink.e265102c.js";import{A as E}from"./AdminLayout.ba431b54.js";import{A as W}from"./AutoComplete.241817c7.js";import{T as q}from"./SectionTitle.850f7dea.js";import{_ as Y,r as a,o as r,d as g,w as m,a as t,b as n,g as u,t as o,c as h,h as G,n as b,f,F as k}from"./app.7f0e9691.js";import"./_baseIsEqual.d6f60a0b.js";import"./LoadingButton.d5296c11.js";import"./DialogModal.25f05db4.js";import"./DangerButton.3c4e2a43.js";import"./SecondaryButton.017b11cf.js";import"./JsBarcode.429efe0e.js";import"./TrashedMessage.3910bf19.js";import"./ApplicationLogo.135e3d4e.js";import"./ApplicationMark.f5051ed3.js";import"./index.1f699fe1.js";import"./Label.048d0136.js";import"./InputError.7cfbcfa2.js";const H={components:{Modal:B,Dialog:R,TecButton:N,Pagination:L,AdminLayout:E,TecDropdown:F,SelectInput:O,AutoComplete:W,SearchFilter:z,AdjustmentDetails:I,TecDropdownLink:U,TecSectionTitle:q},props:{filters:Object,adjustments:Object},data(){return{edit:null,close:!1,adjustment:null,details:!1,confirm:!1,loading:!1,permanent:!1,restoreConf:!1,form:{search:this.filters.search,trashed:this.filters.trashed}}},watch:{form:{handler:S(function(){let e=P(this.form);this.$inertia.get(this.route("adjustments.index",Object.keys(e).length?e:{remember:"forget"}),{},{onFinish:()=>{document.getElementById("page-search").focus()}})},150),deep:!0}},methods:{goto(e){this.adjustment&&this.adjustment.id==e?this.details=!0:(this.loading=!0,axios.get(route("adjustments.show",e)+"?json=yes").then(d=>{this.adjustment=d.data,this.details=!0,this.loading=!1}))},showDetails(){this.details=!1},hideDetails(){this.details=!1},reset(){this.form=M(this.form,()=>null)},sendEmail(e){this.$inertia.get(route("notifications.adjustment",e))},destroy(e){this.edit=e,this.confirm=!0},deleteItem(){this.$inertia.delete(route("adjustments.destroy",this.edit.id),{onSuccess:()=>this.closeModal()})},closeModal(){this.edit=null,this.confirm=!1},restore(e){this.edit=e,this.restoreConf=!0},restoreItem(){this.$inertia.put(this.route("adjustments.restore",this.edit.id),{onSuccess:()=>this.restoreConf=!1})},closeRestoreModal(){this.edit=null,this.restoreConf=!1},deletePermanently(e){this.edit=e,this.permanent=!0},deleteCategoryPermanently(){this.$inertia.delete(route("adjustments.destroy.permanently",this.edit.id),{onSuccess:()=>this.closeModal()})},closePermanentModal(){this.edit=null,this.permanent=!1},print(){window.print()}}},J={class:"px-4 md:px-0"},K={class:"mb-6 flex justify-between items-center print:hidden"},Q={class:"hidden lg:inline"},X={class:"bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto"},Z={class:"w-full whitespace-nowrap"},ee={class:"text-left font-bold"},te={class:"px-6 pt-6 pb-4"},se={class:"px-6 pt-6 pb-4"},oe={class:"px-6 pt-6 pb-4",colspan:"2"},ne=["onClick"],le={class:"px-6 py-4 flex items-center focus:text-indigo-500"},ie={class:"text-gray-500"},re={class:"text-gray-500"},ae={class:"text-gray-500"},de={key:0,class:"flex items-center"},ce={class:"text-gray-500"},me=["onClick"],ue={class:"px-6 py-4"},he={class:"flex items-center"},fe={class:"text-gray-500 mr-1"},pe={class:"flex items-center"},ge={class:"text-gray-500 mr-1"},_e=["onClick"],ye={class:"px-6 py-4 flex items-center"},be={class:"w-full whitespace-normal line-clamp-3"},we={class:"border-t w-16"},ve={class:"px-4 flex items-center print:hidden"},ke={key:0,class:"flex items-center"},je=["onClick"],xe=["onClick"],Ce=["onClick"],De={key:0},Ae={class:"border-t px-6 py-4",colspan:"4"},$e={class:"px-6 py-4 print:px-0"},Te={key:0,class:"flex items-center justify-between print:hidden"},Ve={class:"text-lg"},ze={class:"hidden sm:inline"},Me={class:"-mr-2 flex items-center"},Pe={class:"mt-4 print-mt-0"};function Se(e,d,_,Re,l,i){const j=a("tec-section-title"),w=a("auto-complete"),x=a("search-filter"),c=a("icons"),C=a("tec-button"),v=a("Link"),D=a("pagination"),A=a("adjustment-details"),$=a("modal"),y=a("Dialog"),T=a("loading"),V=a("admin-layout");return r(),g(V,{title:e.$t("Adjustments")},{default:m(()=>[t("div",J,[n(j,{class:"-mx-4 md:mx-0 mb-6"},{title:m(()=>[u(o(e.$t("Adjustments")),1)]),description:m(()=>[u(o(e.$t("Please review the data in the table below")),1)]),_:1}),t("div",K,[n(x,{modelValue:l.form.search,"onUpdate:modelValue":d[2]||(d[2]=s=>l.form.search=s),class:"w-full max-w-md mr-4",onReset:i.reset},{default:m(()=>[n(w,{id:"trashed",position:"left",label:e.$t("Trashed"),modelValue:l.form.trashed,"onUpdate:modelValue":d[0]||(d[0]=s=>l.form.trashed=s),class:"mt-1 w-full",suggestions:[{label:e.$t("Not Trashed"),value:null},{label:e.$t("With Trashed"),value:"with"},{label:e.$t("Only Trashed"),value:"only"}]},null,8,["label","modelValue","suggestions"]),n(w,{id:"draft",position:"left",label:e.$t("Draft"),modelValue:l.form.draft,"onUpdate:modelValue":d[1]||(d[1]=s=>l.form.draft=s),class:"mt-1 w-full",suggestions:[{label:e.$t("All"),value:null},{label:e.$t("Yes"),value:"yes"},{label:e.$t("No"),value:"no"}]},null,8,["label","modelValue","suggestions"])]),_:1},8,["modelValue","onReset"]),n(C,{href:e.route("adjustments.create")},{default:m(()=>[t("span",null,[n(c,{name:"plus",class:"w-5 h-5 lg:mr-2"})]),t("span",Q,o(e.$t("create_x",{x:e.$t("Adjustment")})),1)]),_:1},8,["href"])]),t("div",X,[t("table",Z,[t("tr",ee,[t("th",te,o(e.$t("Adjustment")),1),t("th",se,o(e.$t("Relations")),1),t("th",oe,o(e.$t("Details")),1)]),(r(!0),h(k,null,G(_.adjustments.data,(s,Be)=>(r(),h("tr",{key:s.id,class:"hover:bg-gray-100 focus-within:bg-gray-100"},[t("td",{class:b(["border-t",{"cursor-pointer":e.$can("read-adjustments")}]),onClick:p=>i.goto(s.id)},[t("div",le,[t("div",null,[t("div",null,[t("span",ie,o(e.$t("Ref"))+":",1),u(" "+o(s.reference),1)]),t("div",null,[t("span",re,o(e.$t("Date"))+":",1),u(" "+o(e.$date(s.date)),1)]),t("div",null,[t("span",ae,o(e.$t("Type"))+":",1),u(" "+o(s.type),1)]),s.draft==1?(r(),h("div",de,[t("span",ce,o(e.$t("Draft"))+":",1),n(c,{name:"tick",class:"text-green-600 ml-2"})])):f("",!0)]),s.deleted_at?(r(),g(c,{key:0,name:"trash",class:"shrink-0 w-4 h-4 text-red-500 ml-2"})):f("",!0)])],10,ne),t("td",{class:b(["border-t",{"cursor-pointer":e.$can("read-adjustments")}]),onClick:p=>i.goto(s.id)},[t("div",ue,[t("div",he,[t("div",fe,o(e.$t("Warehouse"))+":",1),u(" "+o(s.warehouse.name),1)]),t("div",pe,[t("div",ge,o(e.$t("User"))+":",1),u(" "+o(s.user.name),1)])])],10,me),t("td",{class:b(["border-t max-w-lg min-w-56",{"cursor-pointer":e.$can("read-adjustments")}]),onClick:p=>i.goto(s.id)},[t("div",ye,[t("div",be,o(s.details),1)])],10,_e),t("td",we,[t("div",ve,[e.$can(["create-adjustments","import-adjustments","export-adjustments"])?(r(),h("div",ke,[n(v,{href:e.route("adjustments.show",s.id),class:"flex items-center p-3 md:p-2 bg-blue-600 rounded-l-md text-white hover:bg-blue-700 focus:bg-blue-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},{default:m(()=>[n(c,{name:"doc"})]),_:2},1032,["href"]),e.$can("update-adjustments")?(r(),g(v,{key:0,href:e.route("adjustments.edit",s.id),class:"flex items-center p-3 md:p-2 bg-yellow-600 text-white hover:bg-yellow-700 focus:bg-yellow-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},{default:m(()=>[n(c,{name:"edit"})]),_:2},1032,["href"])):f("",!0),s.deleted_at?(r(),h(k,{key:1},[t("button",{type:"button",onClick:p=>i.restore(s),class:"flex items-center p-3 md:p-2 bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},[n(c,{name:"refresh"})],8,je),t("button",{type:"button",onClick:p=>i.deletePermanently(s),class:"flex items-center p-3 md:p-2 bg-red-600 rounded-r-md text-white hover:bg-red-700 focus:bg-red-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},[n(c,{name:"trash"})],8,xe)],64)):(r(),h("button",{key:2,type:"button",onClick:p=>i.destroy(s),class:"flex items-center p-3 md:p-2 bg-red-600 rounded-r-md text-white hover:bg-red-700 focus:bg-red-700 z-0 focus:z-10 focus:outline-none focus:ring focus:ring-gray-300 transition ease-in-out duration-150"},[n(c,{name:"trash"})],8,Ce))])):f("",!0)])])]))),128)),_.adjustments.data.length===0?(r(),h("tr",De,[t("td",Ae,o(e.$t("There is no data to display.")),1)])):f("",!0)])]),n(D,{class:"mt-6",meta:_.adjustments.meta,links:_.adjustments.links},null,8,["meta","links"])]),n($,{show:l.details,"max-width":"4xl",closeable:!0,onClose:i.hideDetails},{default:m(()=>[t("div",$e,[l.details&&l.adjustment?(r(),h("div",Te,[t("div",Ve,[u(o(e.$t("Adjustment Details"))+" ",1),t("span",ze,"("+o(l.adjustment.reference)+")",1)]),t("div",Me,[t("button",{onClick:d[3]||(d[3]=s=>i.hideDetails()),class:"flex items-center justify-center h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 focus:outline-none"},[n(c,{name:"cross",class:"h-5 w-5"})])])])):f("",!0),t("div",Pe,[l.adjustment?(r(),g(A,{key:0,adjustment:l.adjustment},null,8,["adjustment"])):f("",!0)])])]),_:1},8,["show","onClose"]),n(y,{"max-width":"md",show:l.permanent,"action-type":"delete",title:"Delete Adjustment!",close:i.closePermanentModal,"action-text":"Delete Permanently",action:i.deleteCategoryPermanently,content:`<p class='mb-2'>${e.$t("Are you sure you want to delete the record permanently?")}</p>
        <p>${e.$t("Once deleted, all of its resources and data will be permanently deleted.")}</p>`},null,8,["show","close","action","content"]),n(y,{show:l.confirm,close:i.closeModal,action:i.deleteItem,"action-type":"delete",title:"Delete Adjustment!","action-text":"Delete Adjustment",content:e.$t("Are you sure you want to delete the record?")},null,8,["show","close","action","content"]),n(y,{show:l.restoreConf,action:i.restoreItem,title:"Restore Adjustment!",close:i.closeRestoreModal,"action-text":"Restore Adjustment",content:e.$t("Are you sure you want to restore the record?")},null,8,["show","action","close","content"]),l.loading?(r(),g(T,{key:0})):f("",!0)]),_:1},8,["title"])}var at=Y(H,[["render",Se]]);export{at as default};
