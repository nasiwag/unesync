import x from"./Details.b36735fb.js";import{A as y}from"./AdminLayout.ba431b54.js";import{T as g}from"./SectionTitle.850f7dea.js";import{_ as b,r as s,o as i,d as r,w as n,a as e,b as a,g as m,t as d,f}from"./app.7f0e9691.js";import"./JsBarcode.429efe0e.js";import"./TrashedMessage.3910bf19.js";import"./ApplicationLogo.135e3d4e.js";import"./ApplicationMark.f5051ed3.js";import"./Modal.e5b9be64.js";import"./DropdownLink.e265102c.js";const v={props:{adjustment:Object},components:{AdminLayout:y,AdjustmentDetails:x,TecSectionTitle:g},methods:{print(){window.print()}}},w={class:"px-4 md:px-0"},k={class:"flex items-start justify-between print:hidden"},A={class:"flex items-center"},C=e("span",{class:"text-blue-600 font-medium mx-2"},"/",-1),N={class:"flex"};function T(t,c,o,V,$,p){const l=s("Link"),_=s("tec-section-title"),u=s("icons"),h=s("adjustment-details"),j=s("admin-layout");return i(),r(j,{title:t.$t("Adjustment Details")},{default:n(()=>[e("div",w,[e("div",k,[a(_,{class:"-mx-4 md:mx-0 mb-6"},{title:n(()=>[e("div",A,[a(l,{class:"text-blue-600 hover:text-blue-700",href:t.route("adjustments.index")},{default:n(()=>[m(d(t.$t("Adjustments")),1)]),_:1},8,["href"]),C,m(" "+d(o.adjustment.reference),1)])]),description:n(()=>[m(d(t.$t("Please review the adjustment details below")),1)]),_:1}),e("div",N,[e("button",{onClick:c[0]||(c[0]=B=>p.print()),class:"flex items-center justify-center mr-2 h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"},[a(u,{name:"printer",class:"h-5 w-5"})]),t.$can("update-adjustments")?(i(),r(l,{key:0,href:t.route("adjustments.edit",o.adjustment.id),class:"flex items-center justify-center mr-2 h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"},{default:n(()=>[a(u,{name:"edit",class:"h-5 w-5"})]),_:1},8,["href"])):f("",!0)])]),o.adjustment?(i(),r(h,{key:0,adjustment:o.adjustment,class:"mt-0 pt-0"},null,8,["adjustment"])):f("",!0)])]),_:1},8,["title"])}var H=b(v,[["render",T]]);export{H as default};
