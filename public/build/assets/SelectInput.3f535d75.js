import{u}from"./index.1f699fe1.js";import{T as m}from"./Label.048d0136.js";import{T as f}from"./InputError.7cfbcfa2.js";import{_ as g,r as s,o as r,c as p,d as a,f as n,i as _,x as b,a as h,e as S,y as v,n as y}from"./app.7f0e9691.js";const V={emits:["update:modelValue"],components:{TecLabel:m,TecInputError:f},props:{id:{type:String,default(){return u.v4()}},size:String,label:String,error:String,placeholder:String,modelValue:[String,Number,Boolean]},data(){return{selected:this.modelValue}},watch:{selected(t){this.$emit("update:modelValue",t)}},methods:{focus(){this.$refs.input.focus()},select(){this.$refs.input.select()}}},k=["id","placeholder"];function B(t,l,e,w,o,z){const c=s("tec-label"),i=s("tec-input-error");return r(),p("div",{class:y(["col-span-6 sm:col-span-4 relative",{"mb-2":e.size!="small"}])},[e.label?(r(),a(c,{key:0,for:e.id,value:e.label},null,8,["for","value"])):n("",!0),_(h("select",v({id:e.id,ref:"input"},t.$attrs,{"onUpdate:modelValue":l[0]||(l[0]=d=>o.selected=d),placeholder:e.placeholder,class:[{"border-red-500":e.error,"py-0 h-8":e.size=="small","mt-1":e.label},"w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"]}),[S(t.$slots,"default")],16,k),[[b,o.selected]]),e.error?(r(),a(i,{key:1,message:e.error,class:"absolute mt-0"},null,8,["message"])):n("",!0)],2)}var E=g(V,[["render",B]]);export{E as S};