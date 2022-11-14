import{D as N}from"./Dialog.3441429d.js";import{C as P}from"./CheckBox.4a0d7770.js";import{T as E}from"./TextInput.a2d825bb.js";import{S as B}from"./SelectInput.3f535d75.js";import{A as L}from"./AdminLayout.ba431b54.js";import{A as R}from"./AutoComplete.241817c7.js";import{L as j}from"./LoadingButton.d5296c11.js";import{T as O}from"./TextareaInput.81f166ff.js";import{T as F}from"./DialogModal.25f05db4.js";import{T as z}from"./TrashedMessage.3910bf19.js";import{T as K}from"./FormSection.82ec9a11.js";import{T as Q}from"./DangerButton.3c4e2a43.js";import{T as W}from"./SectionTitle.850f7dea.js";import{T as G}from"./ActionMessage.84226e08.js";import{T as H}from"./SecondaryButton.017b11cf.js";import{_ as J,r as m,o as i,d as k,w as u,b as l,c as a,g as f,t as c,f as g,F as v,a as s,T as C,h as x}from"./app.7f0e9691.js";import"./index.1f699fe1.js";import"./Checkbox.0d543eb0.js";import"./InputError.7cfbcfa2.js";import"./Label.048d0136.js";import"./Input.33dca280.js";import"./Modal.e5b9be64.js";import"./DropdownLink.e265102c.js";import"./ApplicationLogo.135e3d4e.js";import"./ApplicationMark.f5051ed3.js";import"./throttle.d54d892c.js";const X={props:["edit","categories","units"],components:{Dialog:N,CheckBox:P,TextInput:E,AdminLayout:L,SelectInput:B,AutoComplete:R,LoadingButton:j,TextareaInput:O,TecDialogModal:F,TecFormSection:K,TecDangerButton:Q,TrashedMessage:z,TecSectionTitle:W,TecActionMessage:G,TecSecondaryButton:H},data(){var e,r;return{confirm:!1,permanent:!1,restoreConf:!1,symbologies:[{value:"CODE128",label:this.$t("CODE128")},{value:"CODE39",label:this.$t("CODE39")},{value:"EAN5",label:this.$t("EAN-5")},{value:"EAN8",label:this.$t("EAN-8")},{value:"EAN13",label:this.$t("EAN-13")},{value:"UPC",label:this.$t("UPC-A")}],form:this.$inertia.form({_method:this.edit?"put":"post",sku:this.edit?this.edit.sku:null,name:this.edit?this.edit.name:null,code:this.edit?this.edit.code:null,stock:this.edit?this.edit.stock:null,details:this.edit?this.edit.details:null,unit_id:this.edit?this.edit.unit_id:null,set_stock:this.edit?this.edit.set_stock:null,symbology:this.edit?this.edit.symbology:"code128",rack_location:this.edit?this.edit.rack_location:null,has_serials:this.edit?this.edit.has_serials==1:null,category_id:this.edit?(e=this.edit.categories[0])==null?void 0:e.id:null,has_variants:this.edit?this.edit.has_variants==1:null,track_weight:this.edit?this.edit.track_weight==1:null,track_quantity:this.edit?this.edit.track_quantity==1:!0,child_category_id:this.edit?(r=this.edit.categories[1])==null?void 0:r.id:null,alert_quantity:this.edit?parseFloat(this.edit.alert_quantity):null,variants:this.edit&&this.edit.variants?this.edit.variants:[{name:"",option:["",""]}]})}},computed:{parents(){return this.categories.filter(e=>!e.parent_id)},subcategories(){return this.categories.filter(e=>e.parent_id==this.form.category_id)}},methods:{update(e){this.form.post(this.edit?this.route("items.update",this.edit.id):this.route("items.store"),{preserveScroll:!0})},destroy(){this.confirm=!0},deleteItem(){this.$inertia.delete(route("items.destroy",this.edit.id),{onSuccess:()=>this.closeModal()})},closeModal(){this.confirm=!1},restore(){this.restoreConf=!0},restoreItem(){this.$inertia.put(this.route("items.restore",this.edit.id),{onSuccess:()=>this.restoreConf=!1})},closeRestoreModal(){this.restoreConf=!1},deletePermanently(){this.permanent=!0},deleteCategoryPermanently(){this.$inertia.delete(route("items.destroy.permanently",this.edit.id),{onSuccess:()=>this.closeModal()})},closePermanentModal(){this.permanent=!1}}},Y={key:0,class:"flex items-center"},Z=s("span",{class:"text-blue-600 font-medium mx-2"},"/",-1),$=["src"],ee={class:"flex flex-col gap-6"},te={class:"flex flex-col lg:flex-row gap-6"},oe={class:"flex flex-col gap-6 w-full lg:w-1/2"},re={class:"flex flex-col gap-6 w-full lg:w-1/2"},se={class:"-mt-4"},le={class:"ml-6 text-sm text-yellow-600"},ie={key:0,class:"my-6"},ne={class:"flex items-center justify-between"},ae={class:"text-lg font-bold"},de=s("span",{class:"flex items-center justify-center text-lg w-4 h-4"},"+",-1),me=[de],ue=s("span",{class:"flex items-center justify-center text-lg w-4 h-4"},"-",-1),ce=[ue],pe={class:"flex flex-wrap items-start -mx-3"},fe={class:"p-4 bg-gray-100 shadow rounded-md"},he={class:"flex items-start"},ge={class:"mt-6"},ye=["onClick"],be=s("span",{class:"flex items-center justify-center text-lg w-4 h-4"},"+",-1),_e=[be],ke=["onClick"],ve=s("span",{class:"flex items-center justify-center text-lg w-4 h-4"},"-",-1),we=[ve],Ve={class:"flex flex-wrap items-start -mx-2"},Ce={class:"w-full flex items-center justify-between"},xe={key:1},Te={class:"flex items-center"};function Ue(e,r,d,Se,t,n){const T=m("Link"),U=m("trashed-message"),p=m("text-input"),y=m("auto-complete"),S=m("textarea-input"),w=m("check-box"),A=m("tec-action-message"),D=m("loading-button"),I=m("tec-form-section"),V=m("Dialog"),q=m("admin-layout");return i(),k(q,{title:e.$t(d.edit?"edit_x":"create_x",{x:e.$t("Item")})},{default:u(()=>[l(I,{onSubmitted:n.update},{title:u(()=>[d.edit?(i(),a("div",Y,[l(T,{class:"text-blue-600 hover:text-blue-700",href:e.route("items.index")},{default:u(()=>[f(c(e.$t("Items")),1)]),_:1},8,["href"]),Z,d.edit.photo?(i(),a("img",{key:0,class:"block w-6 h-6 rounded-full mr-2",src:d.edit.photo},null,8,$)):g("",!0),f(" "+c(d.edit.name),1)])):(i(),a(v,{key:1},[f(c(e.$t("create_x",{x:e.$t("Item")})),1)],64))]),description:u(()=>[f(c(d.edit?e.$t("Update the record by modifying the details in the form below"):e.$t("Please fill the form below to add new record.")),1)]),form:u(()=>[d.edit&&d.edit.deleted_at?(i(),k(U,{key:0,class:"mb-6",onRestore:n.restore},{default:u(()=>[f(c(e.$t("This record has been deleted.")),1)]),_:1},8,["onRestore"])):g("",!0),s("div",ee,[s("div",te,[s("div",oe,[l(p,{modelValue:t.form.name,"onUpdate:modelValue":r[0]||(r[0]=o=>t.form.name=o),error:e.$page.props.errors.name,label:e.$t("Name")},null,8,["modelValue","error","label"]),l(p,{modelValue:t.form.code,"onUpdate:modelValue":r[1]||(r[1]=o=>t.form.code=o),error:e.$page.props.errors.code,label:e.$t("Code")},null,8,["modelValue","error","label"]),l(y,{id:"symbology",modelValue:t.form.symbology,"onUpdate:modelValue":r[2]||(r[2]=o=>t.form.symbology=o),suggestions:t.symbologies,label:e.$t("Barcode Symbology"),error:e.$page.props.errors.symbology},null,8,["modelValue","suggestions","label","error"]),l(p,{modelValue:t.form.sku,"onUpdate:modelValue":r[3]||(r[3]=o=>t.form.sku=o),error:e.$page.props.errors.sku,label:e.$t("SKU")},null,8,["modelValue","error","label"])]),s("div",re,[l(y,{id:"category",suggestions:n.parents,label:e.$t("Category"),modelValue:t.form.category_id,"onUpdate:modelValue":r[4]||(r[4]=o=>t.form.category_id=o),error:e.$page.props.errors.category_id},null,8,["suggestions","label","modelValue","error"]),l(C,{name:"slidedown"},{default:u(()=>[t.form.category_id&&n.subcategories.length>0?(i(),k(y,{key:0,id:"subcategory",suggestions:n.subcategories,label:e.$t("Child Category"),modelValue:t.form.child_category_id,"onUpdate:modelValue":r[5]||(r[5]=o=>t.form.child_category_id=o)},null,8,["suggestions","label","modelValue"])):g("",!0)]),_:1}),l(y,{id:"unit",label:e.$t("Unit"),suggestions:d.units,modelValue:t.form.unit_id,"onUpdate:modelValue":r[6]||(r[6]=o=>t.form.unit_id=o)},null,8,["label","suggestions","modelValue"]),l(p,{modelValue:t.form.rack_location,"onUpdate:modelValue":r[7]||(r[7]=o=>t.form.rack_location=o),error:e.$page.props.errors.rack_location,label:e.$t("Rack Location")},null,8,["modelValue","error","label"])])]),l(S,{modelValue:t.form.details,"onUpdate:modelValue":r[8]||(r[8]=o=>t.form.details=o),error:e.$page.props.errors.details,label:e.$t("Details")},null,8,["modelValue","error","label"]),s("div",null,[l(w,{class:"mb-2",id:"track_weight",label:e.$t("Track Weight"),checked:t.form.track_weight,"onUpdate:checked":r[9]||(r[9]=o=>t.form.track_weight=o),error:e.$page.props.errors.track_weight},null,8,["label","checked","error"]),l(w,{id:"track_quantity",label:e.$t("Track Quantity"),checked:t.form.track_quantity,"onUpdate:checked":r[10]||(r[10]=o=>t.form.track_quantity=o),error:e.$page.props.errors.track_quantity},null,8,["label","checked","error"])]),l(C,{name:"slidedown"},{default:u(()=>[t.form.track_quantity?(i(),k(p,{key:0,class:"mb-6",type:"number",modelValue:t.form.alert_quantity,"onUpdate:modelValue":r[11]||(r[11]=o=>t.form.alert_quantity=o),label:e.$t("Alert on low stock of"),error:e.$page.props.errors.alert_quantity},null,8,["modelValue","label","error"])):g("",!0)]),_:1}),s("div",se,[l(w,{id:"has_variants",checked:t.form.has_variants,"onUpdate:checked":r[12]||(r[12]=o=>t.form.has_variants=o),error:e.$page.props.errors.has_variants,label:e.$t("Track Variants e.g. Size and/or Color")},null,8,["checked","error","label"]),s("p",le,c(e.$t("Modifying variants after you have stock could result in wrong stock.")),1),t.form.has_variants==1?(i(),a("div",ie,[s("div",ne,[s("h3",ae,c(e.$t("Variants")),1),s("div",null,[s("button",{type:"button",onClick:r[13]||(r[13]=o=>t.form.variants.push({name:"",option:["",""]})),class:"text-gray-100 px-4 py-3 bg-blue-600 border border-blue-600 rounded-l-md ml-4 focus:outline-none hover:bg-blue-700"},me),s("button",{type:"button",onClick:r[14]||(r[14]=o=>t.form.variants.pop()),class:"text-gray-100 px-4 py-3 bg-blue-600 border border-blue-600 rounded-r-md focus:outline-none hover:bg-blue-700"},ce)])]),s("div",pe,[(i(!0),a(v,null,x(t.form.variants,(o,b)=>(i(),a("div",{key:b,class:"mt-6 px-3 w-full lg:w-1/2"},[s("div",fe,[s("div",he,[l(p,{class:"flex-1",modelValue:o.name,"onUpdate:modelValue":_=>o.name=_,error:t.form.errors["variants."+b+".name"],label:e.$t("Variant")+" "+(b+1)+" "+e.$t("Name")},null,8,["modelValue","onUpdate:modelValue","error","label"]),s("span",ge,[s("button",{type:"button",onClick:_=>o.option.push(""),class:"mt-1 text-gray-100 px-4 py-3 bg-gray-600 border border-gray-600 rounded-l-md ml-4 focus:outline-none hover:bg-gray-500"},_e,8,ye),s("button",{type:"button",onClick:_=>o.option.pop(),class:"mt-1 text-gray-100 px-4 py-3 bg-gray-600 border border-gray-600 rounded-r-md focus:outline-none hover:bg-gray-500"},we,8,ke)])]),s("div",Ve,[(i(!0),a(v,null,x(o.option,(_,h)=>(i(),a("div",{class:"mt-4 px-2 w-1/2",key:h},[l(p,{modelValue:o.option[h],"onUpdate:modelValue":M=>o.option[h]=M,label:e.$t("Option")+" "+(h+1),error:t.form.errors["variants."+b+".option."+h]},null,8,["modelValue","onUpdate:modelValue","label","error"])]))),128))])])]))),128))])])):g("",!0)])])]),actions:u(()=>[s("div",Ce,[d.edit?(i(),a(v,{key:0},[d.edit.deleted_at?(i(),a("button",{key:1,type:"button",onClick:r[16]||(r[16]=(...o)=>n.deletePermanently&&n.deletePermanently(...o)),class:"text-red-600 px-4 py-2 rounded border-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-gray-300"},c(e.$t("delete_x",{x:e.$t("Permanently")})),1)):(i(),a("button",{key:0,type:"button",onClick:r[15]||(r[15]=(...o)=>n.destroy&&n.destroy(...o)),class:"text-red-600 px-4 py-2 rounded border-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-gray-300"},c(e.$t("delete_x",{x:e.$t("Item")})),1))],64)):(i(),a("div",xe)),s("div",Te,[l(A,{on:t.form.recentlySuccessful,class:"mx-3"},{default:u(()=>[f(c(e.$t("Saved.")),1)]),_:1},8,["on"]),l(D,{type:"submit",loading:t.form.processing,disabled:t.form.processing},{default:u(()=>[f(c(e.$t("Save")),1)]),_:1},8,["loading","disabled"])])])]),_:1},8,["onSubmitted"]),l(V,{"max-width":"md",show:t.permanent,"action-type":"delete",title:"Delete Item?",close:n.closePermanentModal,"action-text":"Delete Permanently",action:n.deleteCategoryPermanently,content:`<p class='mb-2'>${e.$t("Are you sure you want to delete the record permanently?")}</p>
        <p>${e.$t("Once deleted, all of its resources and data will be permanently deleted.")}</p>`},null,8,["show","close","action","content"]),l(V,{show:t.confirm,close:n.closeModal,action:n.deleteItem,"action-type":"delete",title:"Delete Item?","action-text":"Delete Item",content:e.$t("Are you sure you want to delete the record?")},null,8,["show","close","action","content"]),l(V,{show:t.restoreConf,action:n.restoreItem,title:"Restore Item!",close:n.closeRestoreModal,"action-text":"Restore Item",content:e.$t("Are you sure you want to restore the record?")},null,8,["show","action","close","content"])]),_:1},8,["title"])}var tt=J(X,[["render",Ue]]);export{tt as default};
