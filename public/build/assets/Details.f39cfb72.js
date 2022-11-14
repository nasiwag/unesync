import{J as w}from"./JsBarcode.429efe0e.js";import{T as v}from"./TrashedMessage.3910bf19.js";import{T as x}from"./ApplicationLogo.135e3d4e.js";import{_ as T,r as u,o,c as a,a as e,d as m,t,f as c,w as b,n as r,F as l,h as _,g as f,b as C}from"./app.7f0e9691.js";import"./ApplicationMark.f5051ed3.js";const $={props:{checkin:Object},components:{TrashedMessage:v,TecApplicationLogo:x},data(){return{loading:!1}},mounted(){w("#barcode",this.checkin.reference,{width:1,margin:0,fontSize:0,height:"20",format:"CODE128"})},updated(){w("#barcode",this.checkin.reference,{width:1,margin:0,fontSize:0,height:"20",format:"CODE128"})},methods:{}},D={key:0,class:"mt-auto bg-gray-100 -m-6 py-6 px-4 md:px-6 rounded-md print:bg-white print:mt-0 print:pt-0 print:h-screen print:overflow-visible"},B={class:"bg-white p-4 rounded-md shadow overflow-x-auto print:shadow-none print:pt-0"},j={class:"block sm:flex justify-between print:flex"},L=["src"],N={class:"text-left sm:text-right leading-snug max-w-md print:text-right"},V={class:"font-bold"},q={key:0},z={key:1},E={key:2},F=e("div",{class:"border-b my-4 -mx-4"},null,-1),M={class:"py-4 w-full"},O={class:"text-xl text-center uppercase font-extrabold"},S=e("svg",{id:"barcode",class:"mt-2 mx-auto"},null,-1),A={class:"block sm:flex justify-between print:flex"},H={class:"w-full sm:w-1/2 leading-snug mb-6 sm:mb-0"},J=e("div",{class:"text-sm font-bold"},"\xA0",-1),I={class:"text-left w-full sm:w-1/2 leading-snug"},Q={class:"text-sm font-bold"},R={key:0},W={key:1},G={class:"-mx-4 overflow-x-auto"},K={class:"w-full mt-8 mb-4",style:{"min-width":"500px"}},P={class:"px-6 py-2 text-left"},U={key:0},X={class:"px-6 py-2 w-32 text-right"},Y={class:"group-hover:bg-gray-100 border-t px-6 pt-2 font-bold"},Z=e("td",{class:"group-hover:bg-gray-100 border-t px-6 pt-2 w-32 text-right"},null,-1),ee=["innerHTML"],te={key:0},se={class:"group-hover:bg-gray-100 border-t px-6 py-2"},ne={key:0},ie={class:"group-hover:bg-gray-100 border-t px-6 py-2 w-32 text-right"},oe={key:2,class:"print:hidden py-4 w-full"},ae={class:"font-medium"},ce={class:"mt-1 text-sm text-gray-900"},re={role:"list",class:"border border-gray-200 rounded-md divide-y divide-gray-200"},de={class:"w-0 flex-1 flex items-center"},he={class:"ml-2 flex-1 w-0 truncate"},le={class:"ml-4 flex-shrink-0"},ge=["href"],ue={key:3,class:"py-4 w-full"},me={class:"mt-auto pt-4 w-full text-center text-sm text-gray-500 hidden print:block"};function _e(s,ke,n,we,be,fe){const y=u("tec-application-logo"),k=u("trashed-message"),p=u("icons");return n.checkin?(o(),a("div",D,[e("div",B,[e("div",j,[n.checkin.warehouse.logo?(o(),a("img",{key:0,src:n.checkin.warehouse.logo,class:"mb-4 sm:mb-0",style:{"max-height":"90px"}},null,8,L)):(o(),m(y,{key:1,class:"mb-4 sm:mb-0"})),e("div",N,[e("div",V,t(n.checkin.warehouse.name)+" ("+t(n.checkin.warehouse.code)+")",1),n.checkin.warehouse.address?(o(),a("div",q,t(n.checkin.warehouse.address),1)):c("",!0),n.checkin.warehouse.phone?(o(),a("div",z,t(n.checkin.warehouse.phone),1)):c("",!0),n.checkin.warehouse.email?(o(),a("div",E,t(n.checkin.warehouse.email),1)):c("",!0)])]),F,n.checkin.draft==1?(o(),m(k,{key:0,class:"mb-4 h-12 print:hidden",action:!1,icon:"info"},{default:b(()=>[f(t(s.$t("This record is still a draft.")),1)]),_:1})):c("",!0),n.checkin.deleted_at?(o(),m(k,{key:1,class:"mb-4 h-12 print:hidden",action:!1},{default:b(()=>[f(t(s.$t("This record has been deleted.")),1)]),_:1})):c("",!0),e("div",M,[e("h1",O,t(s.$t("Checkin")),1),S]),e("div",A,[e("div",H,[J,e("div",null,t(s.$t("Date"))+": "+t(s.$date(n.checkin.date)),1),e("div",null,t(s.$t("Reference"))+": "+t(n.checkin.reference),1),e("div",null,t(s.$t("Created at"))+": "+t(s.$datetime(n.checkin.created_at)),1)]),e("div",I,[e("div",Q,t(s.$t("For"))+":",1),e("div",null,t(n.checkin.contact.name),1),n.checkin.contact.phone?(o(),a("div",R,t(n.checkin.contact.phone),1)):c("",!0),n.checkin.contact.email?(o(),a("div",W,t(n.checkin.contact.email),1)):c("",!0)])]),e("div",G,[e("table",K,[e("tr",null,[e("th",P,t(s.$t("Item")),1),e("th",{class:r(["px-6 py-2 text-right",s.$settings.track_weight?"w-32":"w-px"])},[s.$settings.track_weight?(o(),a("span",U,t(s.$t("Weight")),1)):c("",!0)],2),e("th",X,t(s.$t("Quantity")),1)]),(o(!0),a(l,null,_(n.checkin.items,(i,d)=>(o(),a(l,{key:"i_"+i.id},[i.variations.length?(o(),a("tbody",{key:0,class:r(["group avoid",{"bg-gray-50":d%2!=0,"border-b":n.checkin.items.length==d+1}])},[e("tr",null,[e("td",Y,t(s.$t(i.item.name))+" ("+t(i.item.code)+")",1),e("td",{class:r(["group-hover:bg-gray-100 border-t px-6 py-2 text-right",s.$settings.track_weight&&i.item.track_weight?"w-32":"w-px"])},null,2),Z]),(o(!0),a(l,null,_(i.variations,(h,g)=>(o(),a("tr",{key:"v_"+h.id},[e("td",{class:r([{"pb-2":g+1==i.variations.length},"group-hover:bg-gray-100 px-6 pt-2"])},[e("span",{innerHTML:s.$meta(h.meta)},null,8,ee)],2),e("td",{class:r([{"pb-2":g+1==i.variations.length,"w-32":s.$settings.track_weight&&i.item.track_weight},"group-hover:bg-gray-100 px-6 pt-2 text-right"])},[s.$settings.track_weight&&i.item.track_weight?(o(),a("span",te,t(s.$number(h.pivot.weight))+" "+t(s.$settings.weight_unit),1)):c("",!0)],2),e("td",{class:r([{"pb-2":g+1==i.variations.length},"group-hover:bg-gray-100 px-6 pt-2 w-32 text-right"])},t(s.$number(h.pivot.quantity))+" "+t(i.unit?i.unit.code:""),3)]))),128))],2)):(o(),a("tr",{key:1,class:r(["group avoid",{"bg-gray-50":d%2!=0,"border-b":n.checkin.items.length==d+1}])},[e("td",se,t(s.$t(i.item.name))+" ("+t(i.item.code)+")",1),e("td",{class:r(["group-hover:bg-gray-100 border-t px-6 py-2 text-right",s.$settings.track_weight&&i.item.track_weight?"w-32":"w-px"])},[s.$settings.track_weight&&i.item.track_weight?(o(),a("span",ne,t(s.$number(i.weight))+" "+t(s.$settings.weight_unit),1)):c("",!0)],2),e("td",ie,t(s.$number(i.quantity))+" "+t(i.unit?i.unit.code:""),1)],2))],64))),128))])]),n.checkin.attachments&&n.checkin.attachments.length?(o(),a("div",oe,[e("dt",ae,t(s.$t("Attachments")),1),e("dd",ce,[e("ul",re,[(o(!0),a(l,null,_(n.checkin.attachments,i=>(o(),a("li",{key:i.id,class:"pl-3 pr-4 py-3 flex items-center justify-between text-sm"},[e("div",de,[C(p,{name:"clip",class:"flex-shrink-0 h-5 w-5 text-gray-400"}),e("span",he,t(i.title),1)]),e("div",le,[e("a",{class:"font-medium text-indigo-600 hover:text-indigo-500",href:s.route("media.download",i.id)},t(s.$t("Download")),9,ge)])]))),128))])])])):c("",!0),n.checkin.details?(o(),a("div",ue,t(s.$t(n.checkin.details)),1)):c("",!0)]),e("div",me,t(s.$t("This is computer generated document, no signature required.")),1)])):c("",!0)}var Ce=T($,[["render",_e]]);export{Ce as default};