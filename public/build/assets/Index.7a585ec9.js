import{_ as y,o as s,c as n,n as m,a as e,f as c,t as f,k as w,r as p,d as v,w as r,e as k,b as a,g as d,F as $,h as L}from"./app.7f0e9691.js";import{T as D,a as S}from"./DropdownLink.e265102c.js";import{T as P}from"./ApplicationMark.f5051ed3.js";import B from"./ApiTokenManager.45377c97.js";import"./Input.33dca280.js";import"./Label.048d0136.js";import"./Button.9f28211d.js";import"./Checkbox.0d543eb0.js";import"./InputError.7cfbcfa2.js";import"./DialogModal.25f05db4.js";import"./Modal.e5b9be64.js";import"./FormSection.82ec9a11.js";import"./SectionTitle.850f7dea.js";import"./DangerButton.3c4e2a43.js";import"./ActionMessage.84226e08.js";import"./ActionSection.0a40c502.js";import"./SectionBorder.95887b3a.js";import"./SecondaryButton.017b11cf.js";const A={data(){return{show:!0}},computed:{style(){var t;return((t=this.$page.props.jetstream.flash)==null?void 0:t.bannerStyle)||"success"},message(){var t;return((t=this.$page.props.jetstream.flash)==null?void 0:t.banner)||""}}},z={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},F={class:"flex items-center justify-between flex-wrap"},I={class:"w-0 flex-1 flex items-center min-w-0"},V={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},O=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),E=[O],R={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},q=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),G=[q],H={class:"ml-3 font-medium text-white truncate"},J={class:"shrink-0 sm:ml-3"},K=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),Q=[K];function U(t,u,h,x,i,o){return s(),n("div",null,[i.show&&o.message?(s(),n("div",{key:0,class:m({"bg-indigo-500":o.style=="success","bg-red-700":o.style=="danger"})},[e("div",z,[e("div",F,[e("div",I,[e("span",{class:m(["flex p-2 rounded-lg",{"bg-indigo-600":o.style=="success","bg-red-600":o.style=="danger"}])},[o.style=="success"?(s(),n("svg",V,E)):c("",!0),o.style=="danger"?(s(),n("svg",R,G)):c("",!0)],2),e("p",H,f(o.message),1)]),e("div",J,[e("button",{type:"button",class:m(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition ease-in-out duration-150",{"hover:bg-indigo-600 focus:bg-indigo-600":o.style=="success","hover:bg-red-600 focus:bg-red-600":o.style=="danger"}]),"aria-label":"Dismiss",onClick:u[0]||(u[0]=w(g=>i.show=!1,["prevent"]))},Q,2)])])])],2)):c("",!0)])}var W=y(A,[["render",U]]);const X={props:["href","active"],computed:{classes(){return this.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"}}};function Y(t,u,h,x,i,o){const g=p("Link");return s(),v(g,{href:h.href,class:m(o.classes)},{default:r(()=>[k(t.$slots,"default")]),_:3},8,["href","class"])}var Z=y(X,[["render",Y]]);const ee={props:["active","href","as"],computed:{classes(){return this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"}}};function te(t,u,h,x,i,o){const g=p("Link");return s(),n("div",null,[h.as=="button"?(s(),n("button",{key:0,class:m([o.classes,"w-full text-left"])},[k(t.$slots,"default")],2)):(s(),v(g,{key:1,href:h.href,class:m(o.classes)},{default:r(()=>[k(t.$slots,"default")]),_:3},8,["href","class"]))])}var se=y(ee,[["render",te]]);const oe={components:{TecBanner:W,TecNavLink:Z,TecDropdown:D,TecDropdownLink:S,TecApplicationMark:P,TecResponsiveNavLink:se},data(){return{showingNavigationDropdown:!1}},methods:{switchToTeam(t){this.$inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},logout(){this.$inertia.post(route("logout"))}}},re={class:"min-h-screen bg-gray-100"},ne={class:"bg-white border-b border-gray-100"},ae={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ie={class:"flex justify-between h-16"},le={class:"flex"},de={class:"shrink-0 flex items-center"},ce={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},ue={class:"hidden sm:flex sm:items-center sm:ml-6"},pe={class:"ml-3 relative"},he={class:"inline-flex rounded-md"},me={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},ge=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),_e={class:"w-60"},fe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"},"Manage Team",-1),ve=e("div",{class:"border-t border-gray-100"},null,-1),be=e("div",{class:"block px-4 py-2 text-xs text-gray-400"},"Switch Teams",-1),we=["onSubmit"],ke={class:"flex items-center"},ye={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},xe=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),$e=[xe],Te={class:"ml-3 relative"},je={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"},Le=["src","alt"],Me={key:1,class:"inline-flex rounded-md"},Ce={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},Ne=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),De=e("div",{class:"block px-4 py-2 text-xs text-gray-400"},"Manage Account",-1),Se=e("div",{class:"border-t border-gray-100"},null,-1),Pe={class:"-mr-2 flex items-center sm:hidden"},Be={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ae={class:"pt-2 pb-3 space-y-1"},ze={class:"pt-4 pb-1 border-t border-gray-200"},Fe={class:"flex items-center px-4"},Ie={key:0,class:"shrink-0 mr-3"},Ve=["src","alt"],Oe={class:"font-medium text-base text-gray-800"},Ee={class:"font-medium text-sm text-gray-500"},Re={class:"mt-3 space-y-1"},qe=e("div",{class:"border-t border-gray-200"},null,-1),Ge=e("div",{class:"block px-4 py-2 text-xs text-gray-400"},"Manage Team",-1),He=e("div",{class:"border-t border-gray-200"},null,-1),Je=e("div",{class:"block px-4 py-2 text-xs text-gray-400"},"Switch Teams",-1),Ke=["onSubmit"],Qe={class:"flex items-center"},Ue={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},We=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Xe=[We],Ye={key:0,class:"bg-white shadow"},Ze={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"};function et(t,u,h,x,i,o){const g=p("tec-banner"),T=p("tec-application-mark"),M=p("Link"),C=p("tec-nav-link"),b=p("tec-dropdown-link"),j=p("tec-dropdown"),_=p("tec-responsive-nav-link");return s(),n("div",null,[a(g),e("div",re,[e("nav",ne,[e("div",ae,[e("div",ie,[e("div",le,[e("div",de,[a(M,{href:t.route("dashboard")},{default:r(()=>[a(T,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",ce,[a(C,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[d(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",ue,[e("div",pe,[t.$page.props.jetstream.hasTeamFeatures?(s(),v(j,{key:0,align:"right",width:"60"},{trigger:r(()=>[e("span",he,[e("button",me,[d(f(t.$page.props.user.current_team.name)+" ",1),ge])])]),content:r(()=>[e("div",_e,[t.$page.props.jetstream.hasTeamFeatures?(s(),n($,{key:0},[fe,a(b,{href:t.route("teams.show",t.$page.props.user.current_team)},{default:r(()=>[d(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(s(),v(b,{key:0,href:t.route("teams.create")},{default:r(()=>[d(" Create New Team ")]),_:1},8,["href"])):c("",!0),ve,be,(s(!0),n($,null,L(t.$page.props.user.all_teams,l=>(s(),n("form",{key:l.id,onSubmit:w(N=>o.switchToTeam(l),["prevent"])},[a(b,{as:"button"},{default:r(()=>[e("div",ke,[l.id==t.$page.props.user.current_team_id?(s(),n("svg",ye,$e)):c("",!0),e("div",null,f(l.name),1)])]),_:2},1024)],40,we))),128))],64)):c("",!0)])]),_:1})):c("",!0)]),e("div",Te,[a(j,{align:"right",width:"48"},{trigger:r(()=>[t.$page.props.jetstream.managesProfilePhotos?(s(),n("button",je,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Le)])):(s(),n("span",Me,[e("button",Ce,[d(f(t.$page.props.user.name)+" ",1),Ne])]))]),content:r(()=>[De,a(b,{href:t.route("profile.show")},{default:r(()=>[d(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(s(),v(b,{key:0,href:t.route("api-tokens.index")},{default:r(()=>[d(" API Tokens ")]),_:1},8,["href"])):c("",!0),Se,e("form",{onSubmit:u[0]||(u[0]=w((...l)=>o.logout&&o.logout(...l),["prevent"]))},[a(b,{as:"button"},{default:r(()=>[d(" Log Out ")]),_:1})],32)]),_:1})])]),e("div",Pe,[e("button",{onClick:u[1]||(u[1]=l=>i.showingNavigationDropdown=!i.showingNavigationDropdown),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(s(),n("svg",Be,[e("path",{class:m({hidden:i.showingNavigationDropdown,"inline-flex":!i.showingNavigationDropdown}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:m({hidden:!i.showingNavigationDropdown,"inline-flex":i.showingNavigationDropdown}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:m([{block:i.showingNavigationDropdown,hidden:!i.showingNavigationDropdown},"sm:hidden"])},[e("div",Ae,[a(_,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[d(" Dashboard ")]),_:1},8,["href","active"])]),e("div",ze,[e("div",Fe,[t.$page.props.jetstream.managesProfilePhotos?(s(),n("div",Ie,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Ve)])):c("",!0),e("div",null,[e("div",Oe,f(t.$page.props.user.name),1),e("div",Ee,f(t.$page.props.user.email),1)])]),e("div",Re,[a(_,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:r(()=>[d(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(s(),v(_,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:r(()=>[d(" API Tokens ")]),_:1},8,["href","active"])):c("",!0),e("form",{method:"POST",onSubmit:u[2]||(u[2]=w((...l)=>o.logout&&o.logout(...l),["prevent"]))},[a(_,{as:"button"},{default:r(()=>[d(" Log Out ")]),_:1})],32),t.$page.props.jetstream.hasTeamFeatures?(s(),n($,{key:1},[qe,Ge,a(_,{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")},{default:r(()=>[d(" Team Settings ")]),_:1},8,["href","active"]),a(_,{href:t.route("teams.create"),active:t.route().current("teams.create")},{default:r(()=>[d(" Create New Team ")]),_:1},8,["href","active"]),He,Je,(s(!0),n($,null,L(t.$page.props.user.all_teams,l=>(s(),n("form",{key:l.id,onSubmit:w(N=>o.switchToTeam(l),["prevent"])},[a(_,{as:"button"},{default:r(()=>[e("div",Qe,[l.id==t.$page.props.user.current_team_id?(s(),n("svg",Ue,Xe)):c("",!0),e("div",null,f(l.name),1)])]),_:2},1024)],40,Ke))),128))],64)):c("",!0)])])],2)]),t.$slots.header?(s(),n("header",Ye,[e("div",Ze,[k(t.$slots,"header")])])):c("",!0),e("main",null,[k(t.$slots,"default")])])])}var tt=y(oe,[["render",et]]);const st={components:{ApiTokenManager:B,AppLayout:tt},props:["tokens","availablePermissions","defaultPermissions"]},ot=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"API Tokens",-1),rt={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"};function nt(t,u,h,x,i,o){const g=p("api-token-manager"),T=p("app-layout");return s(),v(T,null,{header:r(()=>[ot]),default:r(()=>[e("div",null,[e("div",rt,[a(g,{tokens:h.tokens,"available-permissions":h.availablePermissions,"default-permissions":h.defaultPermissions},null,8,["tokens","available-permissions","default-permissions"])])])]),_:1})}var $t=y(st,[["render",nt]]);export{$t as default};
