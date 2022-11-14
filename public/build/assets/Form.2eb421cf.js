import{S as P,i as R}from"./SelectVariantModal.ae50803d.js";import{t as W}from"./throttle.d54d892c.js";import{D as E}from"./Dialog.3441429d.js";import{C as B}from"./CheckBox.4a0d7770.js";import{T as N}from"./TextInput.a2d825bb.js";import{S as H}from"./SelectInput.3f535d75.js";import{A as Q}from"./AdminLayout.ba431b54.js";import{A as O}from"./AutoComplete.241817c7.js";import{L as J}from"./LoadingButton.d5296c11.js";import{T as Y}from"./TextareaInput.81f166ff.js";import{T as G}from"./FormSection.82ec9a11.js";import{T as K}from"./TrashedMessage.3910bf19.js";import{T as X}from"./ActionMessage.84226e08.js";import{T as Z}from"./SecondaryButton.017b11cf.js";import{_ as ee,r as h,o,d as x,w as f,b as p,c as r,g as b,t as i,F as g,f as c,a as s,n as v,h as k}from"./app.7f0e9691.js";import"./_baseIsEqual.d6f60a0b.js";import"./Modal.e5b9be64.js";import"./DialogModal.25f05db4.js";import"./DangerButton.3c4e2a43.js";import"./index.1f699fe1.js";import"./Checkbox.0d543eb0.js";import"./InputError.7cfbcfa2.js";import"./Label.048d0136.js";import"./Input.33dca280.js";import"./DropdownLink.e265102c.js";import"./ApplicationLogo.135e3d4e.js";import"./ApplicationMark.f5051ed3.js";import"./SectionTitle.850f7dea.js";const te={props:["edit","contacts","warehouses"],components:{Dialog:E,CheckBox:B,TextInput:N,SelectInput:H,AdminLayout:Q,AutoComplete:O,LoadingButton:J,TextareaInput:Y,TecFormSection:G,TrashedMessage:K,TecActionMessage:X,SelectVariantModal:P,TecSecondaryButton:Z},data(){var e;return{files:[],item:null,confirm:!1,selected:!1,permanent:!1,restoreConf:!1,select_variant:!1,unknown_variation:null,wIW:window.innerWidth,form:this.$inertia.form({_method:this.edit?"PUT":"POST",items:[],attachments:null,details:this.edit?this.edit.details:null,draft:this.edit?this.edit.draft==1:!1,reference:this.edit?this.edit.reference:null,contact_id:this.edit?this.edit.contact_id:null,date:this.edit?this.edit.date:this.$formatJSDate(new Date),warehouse_id:this.edit?this.edit.warehouse_id:this.$super?null:(e=this.$user)==null?void 0:e.warehouse_id})}},computed:{smallScreen(){return this.wIW<1024}},watch:{select_variant:function(e){this.unknown_variation=null,document.body.style.overflow=e?"hidden":"auto"}},created(){this.edit&&(this.form.items=this.edit.items.map(e=>({...e.item,id:e.id,item_id:e.item_id,unit_id:e.unit_id,weight:parseFloat(e.weight),quantity:parseFloat(e.quantity),old_quantity:parseFloat(e.quantity),selected:{serials:[],variations:e.variations.map(n=>({...n,weight:parseFloat(n.pivot.weight),unit_id:n.pivot.unit_id||e.unit_id,quantity:parseFloat(n.pivot.quantity),old_quantity:parseFloat(n.pivot.quantity)}))}})))},mounted(){!this.edit&&!this.$super&&(this.form.warehouse_id=this.$user.warehouse_id),window.addEventListener("resize",this.onResize)},unmounted(){window.removeEventListener("resize",this.onResize)},methods:{onResize:W(function(){this.wIW=window.innerWidth},250),removeItem(e,l,n){n?(e.selected.variations.splice(n,1),e.selected.variations.length<1&&(e.selected.variations=[],this.form.items.splice(l,1))):this.form.items.splice(l,1)},variantSelected(e){let l=null;if(typeof e=="object"&&e!==null?l=this.item.variations.find(n=>R(n.meta,e)):l=this.item.variations.find(n=>n.sku==e),l){this.item.selected||(this.item.selected={variations:[],serials:[]}),l.quantity=1,l.unit_id=this.item.unit_id,l.weight=this.$settings.track_weight==1&&this.item.track_weight==1?1:0;let n=this.form.items.find(V=>V.item_id==this.item.id);if(n){n.quantity+=1,n.weight+=this.$settings.track_weight==1&&n.track_weight==1?1:0;let V=n.selected.variations.length?n.selected.variations.find(u=>u.id==l.id):null;V?(V.quantity+=1,V.weight+=this.$settings.track_weight==1&&n.track_weight==1?1:0):n.selected.variations.push(l)}else this.item.selected.variations=[{...l}],this.form.items.push({...this.item,quantity:1,unit_id:this.item.unit_id,weight:this.$settings.track_weight==1&&this.item.track_weight==1?1:0});this.item=null,this.select_variant=!1}else this.unknown_variation=this.$t("No match found for the item variation."),this.$page.props.flash.error=this.unknown_variation},itemSelected(e){if(e.item_id=e.id,e.selected=e.selected||{variations:[],serials:[]},e.has_variants&&e.variants.length>0)this.item={...e,variants:e.variants.map(l=>({...l,selected:null}))},this.select_variant=!0;else{let l=this.form.items.find(n=>n.id==e.id);l?(l.quantity+=1,l.weight+=this.$settings.track_weight==1&&l.track_weight==1?1:0):this.form.items.push({...e,quantity:1,unit_id:e.unit_id,weight:e.track_weight==1?1:0})}},updateFile(e){Array.from(e.target.files).forEach(l=>this.files.push(l.name))},submit(){this.$refs.file&&(this.form.attachments=this.$refs.file.files),this.form.transform(e=>({...e,items:e.items.map(l=>({...l,unit:null,variants:null,variations:null,unit_id:l.unit_id||null,selected:{serials:l.selected.serials&&l.selected.serials.length?l.selected.serials.map(n=>n.id):[],variations:l.selected.variations.map(n=>{let V={};return V[n.id]={weight:n.weight,variation_id:n.id,quantity:n.quantity,unit_id:n.unit_id||null,old_quantity:n.old_quantity}})}}))})).post(this.edit?route("checkouts.update",this.edit.id):route("checkouts.store"),{preserveScroll:!0})},destroy(){this.confirm=!0},deleteItem(){this.form.delete(route("checkouts.destroy",this.edit.id),{onSuccess:()=>this.closeModal()})},closeModal(){this.confirm=!1},restore(){this.restoreConf=!0},restoreItem(){this.$inertia.put(this.route("checkouts.restore",this.edit.id),{onSuccess:()=>this.restoreConf=!1})},closeRestoreModal(){this.restoreConf=!1},deletePermanently(){this.permanent=!0},deleteCategoryPermanently(){this.form.delete(route("checkouts.destroy.permanently",this.edit.id),{onSuccess:()=>this.closeModal()})},closePermanentModal(){this.permanent=!1},deleteAttachment(e){this.$inertia.form({_method:"DELETE"}).delete(route("media.delete",e))}}},se={key:0,class:"flex items-center"},oe=s("span",{class:"text-blue-600 font-medium mx-2"},"/",-1),re={class:"flex flex-col gap-6"},ie={class:"flex flex-col lg:flex-row gap-6"},le={class:"flex flex-col gap-6 w-full lg:w-1/2"},ne={class:"flex flex-col gap-6 w-full lg:w-1/2"},ae={class:"p-4 md:px-6 bg-gray-50 -mx-4 md:-mx-6"},de={key:0,class:"pt-4"},ue={key:0,class:"text-red-600"},ce={key:1},pe=["innerHTML"],me={class:"w-full block sm:flex items-center justify-stretch gap-4"},he={class:"mt-4 grow flex items-center gap-4"},fe={class:"w-1/2"},ge=["value"],_e=["value"],ye={key:1,class:"w-full block sm:flex items-center justify-stretch gap-4"},we={class:"mt-4 grow flex items-center gap-4"},be={class:"w-1/2"},ve=["value"],ke=["value"],Ve={class:"mt-4"},xe={key:0,class:"text-red-600 pt-1 rounded-md"},$e={key:1,class:"text-red-600 pt-1 rounded-md"},qe={key:2,class:"text-red-600 pt-1 rounded-md"},Ue={key:1,class:"bg-white mt-4 rounded-md shadow overflow-x-auto"},Ce={class:"w-full"},Se={class:"text-left font-bold"},Te={class:"px-2 lg:pl-6 py-4 w-4"},De={class:"px-2 lg:px-6 py-4"},Ae={key:0},Me={class:"px-2 lg:px-6 py-4 text-center w-32 xl:w-56"},ze={class:"px-2 lg:px-6 py-4 text-center w-32 xl:w-56"},Fe={key:0,class:"group"},Ie=s("td",{class:"border-t"},[s("div",{class:"px-2 lg:pl-6 pb-2 focus:text-indigo-500"})],-1),je={class:"border-t",colspan:"4"},Le={class:"px-2 lg:px-6 py-2 focus:text-indigo-500"},Pe={class:"w-full lg:w-auto font-bold"},Re={class:"text-base"},We={class:"px-2 lg:pl-6 pb-2 focus:text-indigo-500"},Ee=["onClick"],Be={class:"px-2 lg:px-6 pb-2 focus:text-indigo-500"},Ne=["innerHTML"],He={key:0,class:"px-2 xl:px-6 pb-2 text-right"},Qe={class:"px-2 xl:px-6 pb-2 text-right"},Oe={key:0,class:"px-2 xl:px-6 pb-2 text-right"},Je=["value"],Ye=["value"],Ge=s("td",null,[s("div",{class:"px-2 lg:pl-6 pb-2 focus:text-indigo-500"})],-1),Ke={colspan:"4"},Xe={class:"px-2 lg:px-6 pb-2 focus:text-indigo-500"},Ze={key:0,class:"text-red-600 pt-1 rounded-md"},et={key:1,class:"text-red-600 pt-1 rounded-md"},tt={key:2,class:"text-red-600 pt-1 rounded-md"},st={class:"border-t"},ot={class:"px-2 lg:pl-6 py-2 focus:text-indigo-500"},rt=["onClick"],it={class:"border-t"},lt={class:"px-2 lg:px-6 py-2 focus:text-indigo-500"},nt={class:"w-full lg:w-auto"},at={class:"text-base"},dt={key:0,class:"text-red-600 pt-1 rounded-md"},ut={key:1,class:"text-red-600 pt-1 rounded-md"},ct={key:2,class:"text-red-600 pt-1 rounded-md"},pt={class:"border-t"},mt={key:0,class:"px-2 xl:px-6 py-2 text-right"},ht={class:"border-t"},ft={class:"px-2 xl:px-6 py-2 text-right"},gt={class:"border-t"},_t={key:0,class:"px-2 xl:px-6 py-2 text-right"},yt=["value"],wt=["value"],bt={key:1},vt={key:0,class:"text-red-600"},kt={for:"file-upload",class:"font-medium text-gray-700"},Vt={key:0,class:"print:hidden py-4 w-full"},xt={role:"list",class:"border border-gray-200 rounded-md divide-y divide-gray-200"},$t={class:"w-0 flex-1 flex items-center"},qt={class:"ml-2 flex-1 w-0 truncate"},Ut={class:"ml-4 flex-shrink-0 flex items-center gap-4"},Ct=["href"],St=["onClick"],Tt={class:"space-y-1 text-center"},Dt={class:"flex items-center justify-center text-gray-600"},At={for:"file-upload",class:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-300"},Mt={key:0,class:"font-semibold"},zt={key:1,class:"font-semibold"},Ft={class:"pl-1"},It={class:"text-sm text-gray-700"},jt={key:0,class:"inline-block pt-4"},Lt={class:"px-3 py-1 rounded-md border font-bold text-base"},Pt={key:1,class:"mt-4 pt-2 text-red-600 rounded-md"},Rt={class:"w-full flex items-center justify-between"},Wt={key:1},Et={class:"flex items-center"};function Bt(e,l,n,V,u,m){const T=h("Link"),D=h("trashed-message"),_=h("text-input"),C=h("auto-complete"),q=h("select-input"),U=h("icons"),A=h("textarea-input"),M=h("check-box"),z=h("tec-action-message"),F=h("loading-button"),I=h("tec-form-section"),j=h("select-variant-modal"),S=h("Dialog"),L=h("admin-layout");return o(),x(L,{title:e.$t(n.edit?"edit_x":"create_x",{x:e.$t("Checkout")})},{default:f(()=>[p(I,{onSubmitted:m.submit},{title:f(()=>[n.edit?(o(),r("div",se,[p(T,{class:"text-blue-600 hover:text-blue-700",href:e.route("checkouts.index")},{default:f(()=>[b(i(e.$t("Checkouts")),1)]),_:1},8,["href"]),oe,b(" "+i(e.$t("Checkout"))+" ("+i(n.edit.reference)+") ",1)])):(o(),r(g,{key:1},[b(i(e.$t("create_x",{x:e.$t("Checkout")})),1)],64))]),description:f(()=>[b(i(n.edit?e.$t("Update the record by modifying the details in the form below"):e.$t("Please fill the form below to add new record.")),1)]),form:f(()=>{var $;return[n.edit&&n.edit.deleted_at?(o(),x(D,{key:0,class:"mb-6",onRestore:m.restore},{default:f(()=>[b(i(e.$t("This record has been deleted.")),1)]),_:1},8,["onRestore"])):c("",!0),s("div",re,[s("div",ie,[s("div",le,[p(_,{type:"date",modelValue:u.form.date,"onUpdate:modelValue":l[0]||(l[0]=t=>u.form.date=t),error:e.$page.props.errors.date,label:e.$t("Date")},null,8,["modelValue","error","label"]),p(_,{modelValue:u.form.reference,"onUpdate:modelValue":l[1]||(l[1]=t=>u.form.reference=t),error:e.$page.props.errors.reference,label:e.$t("Reference")},null,8,["modelValue","error","label"])]),s("div",ne,[p(C,{id:"contact",label:e.$t("Contact"),suggestions:n.contacts,modelValue:u.form.contact_id,"onUpdate:modelValue":l[2]||(l[2]=t=>u.form.contact_id=t),error:e.$page.props.errors.contact_id},null,8,["label","suggestions","modelValue","error"]),!e.$super&&e.$user.warehouse_id?(o(),x(_,{key:0,disabled:"",readonly:"",label:e.$t("Warehouse"),modelValue:($=n.warehouses.find(t=>t.id==e.$user.warehouse_id))==null?void 0:$.name},null,8,["label","modelValue"])):(o(),x(C,{key:1,id:"warehouse",label:e.$t("Warehouse"),suggestions:n.warehouses,modelValue:u.form.warehouse_id,"onUpdate:modelValue":l[3]||(l[3]=t=>u.form.warehouse_id=t),error:e.$page.props.errors.warehouse_id},null,8,["label","suggestions","modelValue","error"]))])]),s("div",ae,[p(C,{json:"","keep-focus":"","reset-search":"",id:"add-item","onUpdate:modelValue":m.itemSelected,suggestions:e.route("items.search"),placeholder:e.$t("Scan barcode or search items"),defaultText:e.$t("Scan barcode or search items for next")},null,8,["onUpdate:modelValue","suggestions","placeholder","defaultText"]),m.smallScreen?(o(),r("div",de,[u.form.items.length===0?(o(),r("div",{key:0,class:v({"-mx-4 md:-mx-6 -mb-4 p-4 bg-red-100 border-red-600":e.$page.props.errors.items})},[b(i(e.$t("Add item to the list by search or scan barcode"))+" ",1),e.$page.props.errors.items?(o(),r("div",ue,i(e.$page.props.errors.items),1)):c("",!0)],2)):(o(),r("div",ce,[(o(!0),r(g,null,k(u.form.items,(t,a)=>(o(),r("div",{key:t.id,class:v(["-mx-4 -mb-6 p-4 md:-mx-6 border-b border-blue-100",{"bg-blue-50":a%2==0,"bg-indigo-50":a%2!=0,error:e.$page.props.errors["items."+a+".variation_id"]||e.$page.props.errors["items."+a+".quantity"]||e.$page.props.errors["items."+a+".weight"]}])},[s("h4",{class:v(["text-base font-bold",{"-mb-4":t.has_variants}])},i(t.name)+" ("+i(t.code)+")",3),t.has_variants&&t.variants.length&&t.selected.variations?(o(!0),r(g,{key:0},k(t.selected.variations,d=>(o(),r("div",{key:d.sku},[s("span",{class:"mt-8 block",innerHTML:e.$meta(d.meta)},null,8,pe),s("div",me,[s("div",he,[p(_,{label:e.$t("Quantity"),type:"number",modelValue:d.quantity,"onUpdate:modelValue":y=>d.quantity=y,class:"w-1/2"},null,8,["label","modelValue","onUpdate:modelValue"]),s("div",fe,[p(q,{label:e.$t("Unit"),modelValue:d.unit_id,"onUpdate:modelValue":y=>d.unit_id=y,class:"w-full"},{default:f(()=>[s("option",{value:t.unit.id},i(t.unit.name),9,ge),t.unit.subunits&&t.unit.subunits.length?(o(!0),r(g,{key:0},k(t.unit.subunits,y=>(o(),r("option",{key:y.id,value:y.id},i(y.name),9,_e))),128)):c("",!0)]),_:2},1032,["label","modelValue","onUpdate:modelValue"])])]),e.$settings.track_weight==1&&t.track_weight==1?(o(),x(_,{key:0,type:"number",modelValue:d.weight,"onUpdate:modelValue":y=>d.weight=y,label:e.$t("Weight"),class:"mt-4 w-full sm:w-1/3"},null,8,["modelValue","onUpdate:modelValue","label"])):c("",!0)])]))),128)):(o(),r("div",ye,[s("div",we,[p(_,{label:e.$t("Quantity"),type:"number",modelValue:t.quantity,"onUpdate:modelValue":d=>t.quantity=d,class:"w-1/2"},null,8,["label","modelValue","onUpdate:modelValue"]),s("div",be,[p(q,{label:e.$t("Unit"),modelValue:t.unit_id,"onUpdate:modelValue":d=>t.unit_id=d,class:"w-full"},{default:f(()=>[s("option",{value:t.unit.id},i(t.unit.name),9,ve),t.unit.subunits&&t.unit.subunits.length?(o(!0),r(g,{key:0},k(t.unit.subunits,d=>(o(),r("option",{key:d.id,value:d.id},i(d.name),9,ke))),128)):c("",!0)]),_:2},1032,["label","modelValue","onUpdate:modelValue"])])]),e.$settings.track_weight==1&&t.track_weight==1?(o(),x(_,{key:0,type:"number",label:e.$t("Weight"),modelValue:t.weight,"onUpdate:modelValue":d=>t.weight=d,class:"mt-4 w-full sm:w-1/3"},null,8,["label","modelValue","onUpdate:modelValue"])):c("",!0)])),s("div",Ve,[e.$page.props.errors["items."+a+".variation_id"]?(o(),r("div",xe,i(e.$page.props.errors["items."+a+".variation_id"].split("when").shift())+". ",1)):c("",!0),e.$page.props.errors["items."+a+".quantity"]?(o(),r("div",$e,i(e.$page.props.errors["items."+a+".quantity"]),1)):c("",!0),e.$page.props.errors["items."+a+".weight"]?(o(),r("div",qe,i(e.$page.props.errors["items."+a+".weight"].split("when").shift())+". ",1)):c("",!0)])],2))),128))]))])):(o(),r("div",Ue,[s("table",Ce,[s("tr",Se,[s("th",Te,[p(U,{name:"trash"})]),s("th",De,i(e.$t("Item")),1),s("th",{class:v(["px-2 lg:px-6 py-4 text-center",e.$settings.track_weight?"w-32 xl:w-56":"w-px"])},[e.$settings.track_weight?(o(),r("span",Ae,i(e.$t("Weight")),1)):c("",!0)],2),s("th",Me,i(e.$t("Quantity")),1),s("th",ze,i(e.$t("Unit")),1)]),u.form.items.length?(o(!0),r(g,{key:0},k(u.form.items,(t,a)=>(o(),r(g,{key:t.id},[t.selected&&t.selected.variations&&t.selected.variations.length?(o(),r("tbody",Fe,[s("tr",{class:v(["group-hover:bg-gray-100 focus-within:bg-gray-100",{error:e.$page.props.errors["items."+a+".variation_id"]||e.$page.props.errors["items."+a+".quantity"]||e.$page.props.errors["items."+a+".weight"]}])},[Ie,s("td",je,[s("div",Le,[s("h4",Pe,[s("span",Re,i(t.name)+" ("+i(t.code)+")",1)])])])],2),(o(!0),r(g,null,k(t.selected.variations,(d,y)=>(o(),r("tr",{key:d.id,class:v(["group-hover:bg-gray-100 focus-within:bg-gray-100",{error:e.$page.props.errors["items."+a+".variation_id"]||e.$page.props.errors["items."+a+".quantity"]||e.$page.props.errors["items."+a+".weight"]}])},[s("td",null,[s("div",We,[s("button",{type:"button",onClick:w=>m.removeItem(t,a,y),class:"text-red-400 hover:text-red-600 w-5 h-5 flex items-center justify-center"},[p(U,{name:"trash"})],8,Ee)])]),s("td",null,[s("div",Be,[s("div",{innerHTML:e.$meta(d.meta)},null,8,Ne)])]),s("td",null,[e.$settings.track_weight==1&&t.track_weight==1?(o(),r("div",He,[p(_,{type:"number",modelValue:d.weight,"onUpdate:modelValue":w=>d.weight=w,size:"small",class:"w-full block"},null,8,["modelValue","onUpdate:modelValue"])])):c("",!0)]),s("td",null,[s("div",Qe,[p(_,{type:"number",modelValue:d.quantity,"onUpdate:modelValue":w=>d.quantity=w,size:"small",class:"w-full block"},null,8,["modelValue","onUpdate:modelValue"])])]),s("td",null,[t.unit?(o(),r("div",Oe,[p(q,{modelValue:d.unit_id,"onUpdate:modelValue":w=>d.unit_id=w,size:"small",class:"w-full block"},{default:f(()=>[s("option",{value:t.unit.id},i(t.unit.name),9,Je),t.unit.subunits&&t.unit.subunits.length?(o(!0),r(g,{key:0},k(t.unit.subunits,w=>(o(),r("option",{key:w.id,value:w.id},i(w.name),9,Ye))),128)):c("",!0)]),_:2},1032,["modelValue","onUpdate:modelValue"])])):c("",!0)])],2))),128)),e.$page.props.errors["items."+a+".variation_id"]||e.$page.props.errors["items."+a+".quantity"]||e.$page.props.errors["items."+a+".weight"]?(o(),r("tr",{key:0,class:v(["group-hover:bg-gray-100 focus-within:bg-gray-100",{error:e.$page.props.errors["items."+a+".variation_id"]||e.$page.props.errors["items."+a+".quantity"]||e.$page.props.errors["items."+a+".weight"]}])},[Ge,s("td",Ke,[s("div",Xe,[e.$page.props.errors["items."+a+".variation_id"]?(o(),r("div",Ze,i(e.$page.props.errors["items."+a+".variation_id"].split("when").shift())+". ",1)):c("",!0),e.$page.props.errors["items."+a+".quantity"]?(o(),r("div",et,i(e.$page.props.errors["items."+a+".quantity"]),1)):c("",!0),e.$page.props.errors["items."+a+".weight"]?(o(),r("div",tt,i(e.$page.props.errors["items."+a+".weight"].split("when").shift())+". ",1)):c("",!0)])])],2)):c("",!0)])):(o(),r("tr",{key:1,class:v(["hover:bg-gray-100 focus-within:bg-gray-100",{error:e.$page.props.errors["items."+a+".variation_id"]||e.$page.props.errors["items."+a+".quantity"]||e.$page.props.errors["items."+a+".weight"]}])},[s("td",st,[s("div",ot,[s("button",{type:"button",onClick:d=>m.removeItem(t,a),class:"text-red-400 hover:text-red-600 w-5 h-5 flex items-center justify-center"},[p(U,{name:"trash"})],8,rt)])]),s("td",it,[s("div",lt,[s("h4",nt,[s("span",at,i(t.name)+" ("+i(t.code)+")",1)]),e.$page.props.errors["items."+a+".variation_id"]?(o(),r("div",dt,i(e.$page.props.errors["items."+a+".variation_id"].split("when").shift())+". ",1)):c("",!0),e.$page.props.errors["items."+a+".quantity"]?(o(),r("div",ut,i(e.$page.props.errors["items."+a+".quantity"]),1)):c("",!0),e.$page.props.errors["items."+a+".weight"]?(o(),r("div",ct,i(e.$page.props.errors["items."+a+".weight"].split("when").shift())+". ",1)):c("",!0)])]),s("td",pt,[e.$settings.track_weight==1&&t.track_weight==1?(o(),r("div",mt,[p(_,{type:"number",modelValue:t.weight,"onUpdate:modelValue":d=>t.weight=d,size:"small",class:"w-full block"},null,8,["modelValue","onUpdate:modelValue"])])):c("",!0)]),s("td",ht,[s("div",ft,[p(_,{type:"number",modelValue:t.quantity,"onUpdate:modelValue":d=>t.quantity=d,size:"small",class:"w-full block"},null,8,["modelValue","onUpdate:modelValue"])])]),s("td",gt,[t.unit?(o(),r("div",_t,[p(q,{modelValue:t.unit_id,"onUpdate:modelValue":d=>t.unit_id=d,size:"small",class:"w-full block"},{default:f(()=>[s("option",{value:t.unit.id},i(t.unit.name),9,yt),t.unit.subunits&&t.unit.subunits.length?(o(!0),r(g,{key:0},k(t.unit.subunits,d=>(o(),r("option",{key:d.id,value:d.id},i(d.name),9,wt))),128)):c("",!0)]),_:2},1032,["modelValue","onUpdate:modelValue"])])):c("",!0)])],2))],64))),128)):c("",!0),u.form.items.length===0?(o(),r("tr",bt,[s("td",{class:v(["border-t px-2 lg:px-6 py-4",{"bg-red-100 border-red-600":e.$page.props.errors.items}]),colspan:"5"},[b(i(e.$t("Add item to the list by search or scan barcode"))+" ",1),e.$page.props.errors.items?(o(),r("div",vt,i(e.$page.props.errors.items),1)):c("",!0)],2)])):c("",!0)])]))]),s("div",null,[s("label",kt,i(e.$t("Attachments")),1),n.edit&&n.edit.attachments&&n.edit.attachments.length?(o(),r("div",Vt,[s("ul",xt,[(o(!0),r(g,null,k(n.edit.attachments,t=>(o(),r("li",{key:t.id,class:"pl-3 pr-4 py-3 flex items-center justify-between text-sm"},[s("div",$t,[p(U,{name:"clip",class:"flex-shrink-0 h-5 w-5 text-gray-400"}),s("span",qt,i(t.title),1)]),s("div",Ut,[s("a",{class:"font-medium text-indigo-600 hover:text-indigo-500",href:e.route("media.download",t.id)},i(e.$t("Download")),9,Ct),s("button",{class:"font-medium text-red-600 hover:text-red-500",onClick:a=>m.deleteAttachment(t.id)},i(e.$t("Delete")),9,St)])]))),128))])])):c("",!0),s("div",{class:v([e.$page.props.errors.excel?"border-red-500":"border-gray-300","mt-1 flex justify-center px-6 py-3 border-2 border-dashed rounded-md"])},[s("div",Tt,[s("div",Dt,[s("label",At,[u.files.length?(o(),r("span",Mt,i(e.$t("Add more files")),1)):(o(),r("span",zt,i(e.$t("Select files")),1)),s("input",{multiple:"",ref:"file",type:"file",class:"sr-only",id:"file-upload",name:"file-upload",onChange:l[4]||(l[4]=(...t)=>m.updateFile&&m.updateFile(...t)),accept:".png,.jpg,.jpeg,.pdf,.doc,.docx,.xls,.xlsx,.zip"},null,544)]),s("p",Ft,i(e.$t("or drag and drop")),1)]),s("div",It,[s("div",null,i(e.$t("You can select .png, .jpg, .pdf, .docx, .xlsx & .zip files.")),1)]),u.files.length?(o(),r("div",jt,[s("div",Lt,[b(i(e.$t("Selected Files"))+": ",1),(o(!0),r(g,null,k(u.files,(t,a)=>(o(),r("div",{class:"text-left",key:a},i(a+1)+". "+i(t),1))),128))])])):c("",!0),e.$page.props.errors.excel?(o(),r("div",Pt,i(e.$page.props.errors.files),1)):c("",!0)])],2)]),p(A,{modelValue:u.form.details,"onUpdate:modelValue":l[5]||(l[5]=t=>u.form.details=t),error:e.$page.props.errors.details,label:e.$t("Details")},null,8,["modelValue","error","label"]),s("div",null,[!n.edit||n.edit.draft==1?(o(),x(M,{key:0,id:"draft",class:"mb-2",checked:u.form.draft,"onUpdate:checked":l[6]||(l[6]=t=>u.form.draft=t),error:e.$page.props.errors.draft,label:e.$t("This record is draft")},null,8,["checked","error","label"])):c("",!0)])])]}),actions:f(()=>[s("div",Rt,[n.edit?(o(),r(g,{key:0},[n.edit.deleted_at?(o(),r("button",{key:1,type:"button",onClick:l[8]||(l[8]=(...$)=>m.deletePermanently&&m.deletePermanently(...$)),class:"text-red-600 px-4 py-2 rounded border-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-gray-300"},i(e.$t("delete_x",{x:e.$t("Permanently")})),1)):(o(),r("button",{key:0,type:"button",onClick:l[7]||(l[7]=(...$)=>m.destroy&&m.destroy(...$)),class:"text-red-600 px-4 py-2 rounded border-2 border-transparent hover:border-gray-300 focus:outline-none focus:border-gray-300"},i(e.$t("delete_x",{x:e.$t("Checkout")})),1))],64)):(o(),r("div",Wt)),s("div",Et,[p(z,{on:u.form.recentlySuccessful,class:"mx-3"},{default:f(()=>[b(i(e.$t("Saved.")),1)]),_:1},8,["on"]),p(F,{type:"submit",loading:u.form.processing,disabled:u.form.processing},{default:f(()=>[b(i(e.$t("Save")),1)]),_:1},8,["loading","disabled"])])])]),_:1},8,["onSubmitted"]),u.select_variant?(o(),x(j,{key:0,show:u.select_variant,nf:u.unknown_variation,variants:u.item.variants,onSelected:m.variantSelected,onClose:l[9]||(l[9]=$=>u.select_variant=!1)},null,8,["show","nf","variants","onSelected"])):c("",!0),p(S,{"max-width":"md",show:u.permanent,"action-type":"delete",title:"Delete Checkout?",close:m.closePermanentModal,"action-text":"Delete Permanently",action:m.deleteCategoryPermanently,content:`<p class='mb-2'>${e.$t("Are you sure you want to delete the record permanently?")}</p>
        <p>${e.$t("Once deleted, all of its resources and data will be permanently deleted.")}</p>`},null,8,["show","close","action","content"]),p(S,{show:u.confirm,close:m.closeModal,action:m.deleteItem,"action-type":"delete",title:"Delete Checkout?","action-text":"Delete Checkout",content:e.$t("Are you sure you want to delete the record?")},null,8,["show","close","action","content"]),p(S,{show:u.restoreConf,action:m.restoreItem,title:"Restore Checkout!",close:m.closeRestoreModal,"action-text":"Restore Checkout",content:e.$t("Are you sure you want to restore the record?")},null,8,["show","action","close","content"])]),_:1},8,["title"])}var ys=ee(te,[["render",Bt]]);export{ys as default};
