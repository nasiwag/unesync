import x from"./Details.eb2dfb6e.js";import{A as g}from"./AdminLayout.ba431b54.js";import{T as b}from"./SectionTitle.850f7dea.js";import{_ as v,r as o,o as r,d as a,w as s,a as t,b as n,g as m,t as l,f}from"./app.7f0e9691.js";import"./JsBarcode.429efe0e.js";import"./Modal.e5b9be64.js";import"./DropdownLink.e265102c.js";import"./ApplicationLogo.135e3d4e.js";import"./ApplicationMark.f5051ed3.js";const w={props:{item:Object},components:{AdminLayout:g,ItemDetails:x,TecSectionTitle:b},methods:{print(){window.print()}}},k={class:"px-4 md:px-0"},$={class:"flex items-start justify-between print:hidden"},j={class:"flex items-center"},C=t("span",{class:"text-blue-600 font-medium mx-2"},"/",-1),N={class:"flex"};function T(e,c,i,V,B,p){const d=o("Link"),_=o("tec-section-title"),u=o("icons"),h=o("item-details"),y=o("admin-layout");return r(),a(y,{title:e.$t("Item Details")},{default:s(()=>[t("div",k,[t("div",$,[n(_,{class:"-mx-4 md:mx-0 mb-6 print:hidden"},{title:s(()=>[t("div",j,[n(d,{class:"text-blue-600 hover:text-blue-700",href:e.route("items.index")},{default:s(()=>[m(l(e.$t("Items")),1)]),_:1},8,["href"]),C,m(" "+l(e.$t(i.item.name)),1)])]),description:s(()=>[m(l(e.$t("Please review the item details below")),1)]),_:1}),t("div",N,[t("button",{onClick:c[0]||(c[0]=D=>p.print()),class:"flex items-center justify-center mr-2 h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"},[n(u,{name:"printer",class:"h-5 w-5"})]),e.$can("update-items")?(r(),a(d,{key:0,href:e.route("items.edit",i.item.id),class:"flex items-center justify-center mr-2 h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"},{default:s(()=>[n(u,{name:"edit",class:"h-5 w-5"})]),_:1},8,["href"])):f("",!0)])]),i.item?(r(),a(h,{key:0,item:i.item,class:"mt-0 pt-0"},null,8,["item"])):f("",!0)])]),_:1},8,["title"])}var F=v(w,[["render",T]]);export{F as default};