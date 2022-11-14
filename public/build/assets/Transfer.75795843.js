import{M as j}from"./Modal.e5b9be64.js";import{T as $}from"./Button.9f28211d.js";import A from"./Form.c440d4be.js";import{P as B}from"./Pagination.27fb388c.js";import{A as L}from"./AdminLayout.ba431b54.js";import N from"./Details.bf4a1e35.js";import{T as V}from"./SectionTitle.850f7dea.js";import{_ as P,r as n,o as r,d as h,w as f,a as e,b as i,g as u,t as s,i as S,j as M,T as O,c as p,h as R,n as g,f as _,F as z}from"./app.7f0e9691.js";import"./CheckBox.4a0d7770.js";import"./index.1f699fe1.js";import"./Checkbox.0d543eb0.js";import"./InputError.7cfbcfa2.js";import"./TextInput.a2d825bb.js";import"./Label.048d0136.js";import"./Input.33dca280.js";import"./SelectInput.3f535d75.js";import"./AutoComplete.241817c7.js";import"./throttle.d54d892c.js";import"./LoadingButton.d5296c11.js";import"./DropdownLink.e265102c.js";import"./ApplicationLogo.135e3d4e.js";import"./ApplicationMark.f5051ed3.js";import"./JsBarcode.429efe0e.js";import"./TrashedMessage.3910bf19.js";const E={components:{Modal:j,TecButton:$,ReportForm:A,Pagination:B,AdminLayout:L,TransferDetails:N,TecSectionTitle:V},props:{filters:Object,transfers:Object,users:Array,categories:Array,warehouses:Array},data(){return{transfer:null,details:!1,showForm:!1,loading:!1}},methods:{toggleForm(){this.showForm=!this.showForm},goto(t){this.transfer&&this.transfer.id==t?this.details=!0:(this.loading=!0,axios.get(route("transfers.show",t)+"?json=yes").then(l=>{this.transfer=l.data,this.details=!0,this.loading=!1}))},showDetails(){this.details=!1},hideDetails(){this.details=!1},print(){window.print()}}},U={class:"px-4 md:px-0"},q={class:"flex items-start justify-between"},G={class:"hidden lg:inline"},H={class:"w-full print:hidden"},I={class:"bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto"},J={class:"w-full whitespace-nowrap"},K={class:"text-left font-bold"},Q={class:"px-6 pt-6 pb-4"},W={class:"px-6 pt-6 pb-4"},X={class:"px-6 pt-6 pb-4"},Y=["onClick"],Z={class:"px-6 py-4 flex items-center focus:text-indigo-500"},ee={class:"flex items-center"},te=["onClick"],se={class:"px-6 py-4"},oe={class:"flex items-center"},re={class:"text-gray-500 mr-1"},ne={class:"flex items-center"},ie={class:"text-gray-500 mr-1"},ae={class:"flex items-center"},le={class:"text-gray-500 mr-1"},de=["onClick"],ce={class:"px-6 py-4 flex items-center"},me={class:"w-full whitespace-normal line-clamp-3"},he={key:0},fe={class:"border-t px-6 py-4",colspan:"3"},ue={class:"px-6 py-4 print:px-0"},_e={key:0,class:"flex items-center justify-between print:hidden"},pe={class:"text-lg"},ge={class:"hidden sm:inline"},we={class:"-mr-2 flex items-center"},ye={class:"mt-4 print-mt-0"};function ve(t,l,d,xe,a,c){const y=n("tec-section-title"),m=n("icons"),v=n("tec-button"),x=n("report-form"),b=n("pagination"),k=n("Link"),T=n("transfer-details"),C=n("modal"),F=n("loading"),D=n("admin-layout");return r(),h(D,{title:t.$t("x_report",{x:t.$t("Transfer")})},{default:f(()=>[e("div",U,[e("div",q,[i(y,{class:"-mx-4 md:mx-0 mb-6"},{title:f(()=>[u(s(t.$t("x_report",{x:t.$t("Transfer")})),1)]),description:f(()=>[u(s(t.$t("Please review the report below")),1)]),_:1}),i(v,{type:"button",onClick:l[0]||(l[0]=o=>c.toggleForm())},{default:f(()=>[e("span",null,[i(m,{name:"toggle",class:"w-5 h-5 lg:mr-2"})]),e("span",G,s(t.$t("toggle_x",{x:t.$t("Form")})),1)]),_:1})]),i(O,{name:"slidedown"},{default:f(()=>[S(e("div",H,[i(x,{users:d.users,type:"transfer",categories:d.categories,warehouses:d.warehouses,action:t.route("reports.transfer")},null,8,["users","categories","warehouses","action"])],512),[[M,a.showForm]])]),_:1}),e("div",I,[e("table",J,[e("tr",K,[e("th",Q,s(t.$t("Transfer")),1),e("th",W,s(t.$t("Relations")),1),e("th",X,s(t.$t("Details")),1)]),(r(!0),p(z,null,R(d.transfers.data,(o,be)=>(r(),p("tr",{key:o.id,class:"hover:bg-gray-100 focus-within:bg-gray-100"},[e("td",{class:g(["border-t",{"cursor-pointer":t.$can("read-transfers")}]),onClick:w=>c.goto(o.id)},[e("div",Z,[e("div",null,[e("div",null,s(o.reference),1),e("div",null,s(t.$date(o.date)),1),e("div",ee,[u(s(t.$t("Draft"))+": ",1),o.draft==1?(r(),h(m,{key:0,name:"tick",class:"text-green-600 mx-auto"})):(r(),h(m,{key:1,name:"cross",class:"text-red-600 mx-auto"}))])]),o.deleted_at?(r(),h(m,{key:0,name:"trash",class:"shrink-0 w-4 h-4 text-red-500 ml-2"})):_("",!0)])],10,Y),e("td",{class:g(["border-t",{"cursor-pointer":t.$can("read-transfers")}]),onClick:w=>c.goto(o.id)},[e("div",se,[e("div",oe,[e("div",re,s(t.$t("To"))+":",1),u(" "+s(o.to_warehouse.name),1)]),e("div",ne,[e("div",ie,s(t.$t("From"))+":",1),u(" "+s(o.from_warehouse.name),1)]),e("div",ae,[e("div",le,s(t.$t("User"))+":",1),u(" "+s(o.user.name),1)])])],10,te),e("td",{class:g(["border-t max-w-lg min-w-56",{"cursor-pointer":t.$can("read-transfers")}]),onClick:w=>c.goto(o.id)},[e("div",ce,[e("div",me,s(o.details),1)])],10,de)]))),128)),d.transfers.data.length===0?(r(),p("tr",he,[e("td",fe,s(t.$t("There is no data to display.")),1)])):_("",!0)])]),i(b,{class:"mt-6",meta:d.transfers.meta,links:d.transfers.links},null,8,["meta","links"])]),i(C,{show:a.details,"max-width":"4xl",closeable:!0,onClose:c.hideDetails},{default:f(()=>[e("div",ue,[a.details&&a.transfer?(r(),p("div",_e,[e("div",pe,[u(s(t.$t("Transfer Details"))+" ",1),e("span",ge,"("+s(a.transfer.reference)+")",1)]),e("div",we,[e("button",{onClick:l[1]||(l[1]=o=>c.print()),class:"flex items-center justify-center mr-2 h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 focus:outline-none"},[i(m,{name:"printer",class:"h-5 w-5"})]),t.$can("update-transfers")?(r(),h(k,{key:0,href:t.route("transfers.edit",a.transfer.id),class:"flex items-center justify-center mr-2 h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 focus:outline-none"},{default:f(()=>[i(m,{name:"edit",class:"h-5 w-5"})]),_:1},8,["href"])):_("",!0),e("button",{onClick:l[2]||(l[2]=o=>c.hideDetails()),class:"flex items-center justify-center h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 focus:outline-none"},[i(m,{name:"cross",class:"h-5 w-5"})])])])):_("",!0),e("div",ye,[a.transfer?(r(),h(T,{key:0,transfer:a.transfer},null,8,["transfer"])):_("",!0)])])]),_:1},8,["show","onClose"]),a.loading?(r(),h(F,{key:0})):_("",!0)]),_:1},8,["title"])}var Je=P(E,[["render",ve]]);export{Je as default};
