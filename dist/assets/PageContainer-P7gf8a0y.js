import{I as _,J as m,m as u,n as v,o,c as d,z as r,v as a,q as t,h as c,ah as n,Z as p,a as l,A as C,_ as S,B as g,e as $,f}from"./index-csqkmd6B.js";import{_ as b}from"./_plugin-vue_export-helper-MjBa5Q_d.js";const w=_({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:m([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),P=u({name:"ElCard"}),k=u({...P,props:w,setup(i){const s=v("card");return(e,h)=>(o(),d("div",{class:r([a(s).b(),a(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),d("div",{key:0,class:r(a(s).e("header"))},[t(e.$slots,"header",{},()=>[c(n(e.header),1)])],2)):p("v-if",!0),l("div",{class:r([a(s).e("body"),e.bodyClass]),style:C(e.bodyStyle)},[t(e.$slots,"default")],6),e.$slots.footer||e.footer?(o(),d("div",{key:1,class:r(a(s).e("footer"))},[t(e.$slots,"footer",{},()=>[c(n(e.footer),1)])],2)):p("v-if",!0)],2))}});var B=S(k,[["__file","card.vue"]]);const N=g(B),z={class:"card-header"},E={class:"card-title"},I={__name:"PageContainer",props:{title:{required:!0,type:String}},setup(i){const s=i;return(e,h)=>{const y=N;return o(),$(y,{class:"card-box",shadow:"never"},{header:f(()=>[l("div",z,[l("div",E,n(s.title),1),t(e.$slots,"headerRight",{},void 0,!0)])]),default:f(()=>[t(e.$slots,"content",{},void 0,!0)]),_:3})}}},A=b(I,[["__scopeId","data-v-e8e31746"]]);export{A as P};
