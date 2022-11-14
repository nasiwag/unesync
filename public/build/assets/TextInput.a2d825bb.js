import{u as m}from"./index.1f699fe1.js";import{T as b}from"./Label.048d0136.js";import{T as f}from"./Input.33dca280.js";import{T as y}from"./InputError.7cfbcfa2.js";import{_,r as o,o as t,c as g,d as n,f as u,n as d}from"./app.7f0e9691.js";const v={emits:["update:modelValue"],components:{TecLabel:b,TecInput:f,TecInputError:y},props:{id:{type:String,default(){return m.v4()}},type:{type:String,default:"text"},size:String,label:String,error:String,disabled:Boolean,readonly:Boolean,placeholder:String,modelValue:[String,Number]},methods:{focus(){this.$refs.input.focus()},select(){this.$refs.input.select()},setSelectionRange(a,l){this.$refs.input.setSelectionRange(a,l)}}};function h(a,l,e,k,S,T){const s=o("tec-label"),i=o("tec-input"),c=o("tec-input-error");return t(),g("div",{class:d(["col-span-6 sm:col-span-4 relative",{"mb-2":e.size!="small"}])},[e.label?(t(),n(s,{key:0,for:e.id,value:e.label},null,8,["for","value"])):u("",!0),e.type=="number"?(t(),n(i,{key:1,id:e.id,ref:"input",step:"0.01",type:e.type,disabled:e.disabled,readonly:e.readonly,value:e.modelValue,class:d(["block w-full",{"border-red-500":e.error,"py-0 pr-0 h-8":e.size=="small","mt-1":e.label}]),placeholder:e.placeholder||e.label,onInput:l[0]||(l[0]=r=>a.$emit("update:modelValue",r.target.value))},null,8,["id","type","disabled","readonly","value","placeholder","class"])):(t(),n(i,{key:2,id:e.id,ref:"input",type:e.type,disabled:e.disabled,readonly:e.readonly,value:e.modelValue,class:d(["block w-full",{"border-red-500":e.error,"py-0 pr-0 h-8":e.size=="small","mt-1":e.label}]),placeholder:e.placeholder||e.label,onInput:l[1]||(l[1]=r=>a.$emit("update:modelValue",r.target.value))},null,8,["id","type","disabled","readonly","value","placeholder","class"])),e.error?(t(),n(c,{key:3,message:e.error,class:"absolute mt-0"},null,8,["message"])):u("",!0)],2)}var x=_(v,[["render",h]]);export{x as T};
