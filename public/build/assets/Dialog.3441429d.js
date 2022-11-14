import{L as u}from"./LoadingButton.d5296c11.js";import{T as f}from"./DialogModal.25f05db4.js";import{T as h}from"./DangerButton.3c4e2a43.js";import{T}from"./SecondaryButton.017b11cf.js";import{_ as x,r as n,o as b,d as w,w as o,g as a,t as i,a as c,b as l,n as C}from"./app.7f0e9691.js";const y={props:["show","title","content","close","action","actionType","actionText","maxWidth"],components:{LoadingButton:u,TecDialogModal:f,TecDangerButton:h,TecSecondaryButton:T},data(){return{loading:!1}},methods:{doAction(){this.loading=!0,setTimeout(()=>{this.loading=!1,this.close()},250),this.action()}}},p=["innerHTML"],v={class:"flex items-center justify-between"};function B(k,e,t,D,s,d){const r=n("tec-secondary-button"),m=n("loading-button"),_=n("tec-dialog-modal");return b(),w(_,{show:t.show,onClose:e[1]||(e[1]=g=>t.close()),"max-width":t.maxWidth||"sm"},{title:o(()=>[a(i(t.title),1)]),content:o(()=>[c("span",{innerHTML:t.content},null,8,p)]),footer:o(()=>[c("div",v,[l(r,{onClick:e[0]||(e[0]=g=>t.close())},{default:o(()=>[a(" Cancel ")]),_:1}),l(m,{class:C(["ml-2",{"bg-red-500 hover:bg-red-600":t.actionType=="delete"}]),onClick:d.doAction,loading:s.loading,disabled:s.loading},{default:o(()=>[a(i(t.actionText),1)]),_:1},8,["onClick","loading","disabled","class"])])]),_:1},8,["show","max-width"])}var H=x(y,[["render",B]]);export{H as D};