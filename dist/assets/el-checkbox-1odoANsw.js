import{bf as U,bg as A,aT as Q,bh as X,aR as ke,aM as pe,aS as xe,bi as Ce,av as j,a8 as K,at as H,aY as z,F as E,y as k,as as D,w as _,R as ee,$ as ne,r as G,ap as I,af as ye,al as q,m as L,x as ae,n as P,o as C,e as le,f as te,a as J,z as x,v as u,a9 as $,c as y,b2 as w,a1 as F,bj as N,q as O,a2 as Se,h as oe,ah as se,Z as T,a0 as ie,_ as R,A as Le,I as Be,J as Ie,D as Ee,an as $e,B as we,C as ue}from"./index-ushgDT-n.js";import{U as V}from"./el-input-8R21LO2M.js";import{f as Fe,c as M,e as re,a as W,i as Ne,d as de}from"./_plugin-vue_export-helper-ZfFOaELi.js";import{i as Ve}from"./isEqual-KDKYuaUO.js";import{j as be,m as ze,n as De}from"./_baseClone-QOsmlMf-.js";function Ge(e){return e}function Te(e,n,l){switch(l.length){case 0:return e.call(n);case 1:return e.call(n,l[0]);case 2:return e.call(n,l[0],l[1]);case 3:return e.call(n,l[0],l[1],l[2])}return e.apply(n,l)}var Pe=800,Oe=16,Re=Date.now;function Me(e){var n=0,l=0;return function(){var a=Re(),o=Oe-(a-l);if(l=a,o>0){if(++n>=Pe)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Ue(e){return function(){return e}}var Ae=U?function(e,n){return U(e,"toString",{configurable:!0,enumerable:!1,value:Ue(n),writable:!0})}:Ge;const Ke=Ae;var He=Me(Ke),Y=Math.max;function qe(e,n,l){return n=Y(n===void 0?e.length-1:n,0),function(){for(var a=arguments,o=-1,b=Y(a.length-n,0),d=Array(b);++o<b;)d[o]=a[n+o];o=-1;for(var t=Array(n+1);++o<n;)t[o]=a[o];return t[n]=l(d),Te(e,this,t)}}var Z=A?A.isConcatSpreadable:void 0;function Je(e){return Q(e)||be(e)||!!(Z&&e&&e[Z])}function ve(e,n,l,a,o){var b=-1,d=e.length;for(l||(l=Je),o||(o=[]);++b<d;){var t=e[b];n>0&&l(t)?n>1?ve(t,n-1,l,a,o):ze(o,t):a||(o[o.length]=t)}return o}function We(e){var n=e==null?0:e.length;return n?ve(e,1):[]}function Ye(e){return He(qe(e,void 0,We),e+"")}function Ze(e,n){return e!=null&&n in Object(e)}function Qe(e,n,l){n=X(n,e);for(var a=-1,o=n.length,b=!1;++a<o;){var d=ke(n[a]);if(!(b=e!=null&&l(e,d)))break;e=e[d]}return b||++a!=o?b:(o=e==null?0:e.length,!!o&&De(o)&&pe(d,o)&&(Q(e)||be(e)))}function Xe(e,n){return e!=null&&Qe(e,n,Ze)}function je(e,n,l){for(var a=-1,o=n.length,b={};++a<o;){var d=n[a],t=xe(e,d);l(t,d)&&Ce(b,X(d,e),t)}return b}function _e(e,n){return je(e,n,function(l,a){return Xe(e,a)})}var en=Ye(function(e,n){return e==null?{}:_e(e,n)});const ce={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:j,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},me={[V]:e=>K(e)||H(e)||z(e),change:e=>K(e)||H(e)||z(e)},B=Symbol("checkboxGroupContextKey"),nn=({model:e,isChecked:n})=>{const l=E(B,void 0),a=k(()=>{var b,d;const t=(b=l==null?void 0:l.max)==null?void 0:b.value,m=(d=l==null?void 0:l.min)==null?void 0:d.value;return!D(t)&&e.value.length>=t&&!n.value||!D(m)&&e.value.length<=m&&n.value});return{isDisabled:Fe(k(()=>(l==null?void 0:l.disabled.value)||a.value)),isLimitDisabled:a}},an=(e,{model:n,isLimitExceeded:l,hasOwnLabel:a,isDisabled:o,isLabeledByFormItem:b})=>{const d=E(B,void 0),{formItem:t}=M(),{emit:m}=ne();function s(i){var c,h;return i===e.trueLabel||i===!0?(c=e.trueLabel)!=null?c:!0:(h=e.falseLabel)!=null?h:!1}function f(i,c){m("change",s(i),c)}function g(i){if(l.value)return;const c=i.target;m("change",s(c.checked),i)}async function S(i){l.value||!a.value&&!o.value&&b.value&&(i.composedPath().some(v=>v.tagName==="LABEL")||(n.value=s([!1,e.falseLabel].includes(n.value)),await ee(),f(n.value,i)))}const r=k(()=>(d==null?void 0:d.validateEvent)||e.validateEvent);return _(()=>e.modelValue,()=>{r.value&&(t==null||t.validate("change").catch(i=>re()))}),{handleChange:g,onClickRoot:S}},ln=e=>{const n=G(!1),{emit:l}=ne(),a=E(B,void 0),o=k(()=>D(a)===!1),b=G(!1),d=k({get(){var t,m;return o.value?(t=a==null?void 0:a.modelValue)==null?void 0:t.value:(m=e.modelValue)!=null?m:n.value},set(t){var m,s;o.value&&I(t)?(b.value=((m=a==null?void 0:a.max)==null?void 0:m.value)!==void 0&&t.length>(a==null?void 0:a.max.value)&&t.length>d.value.length,b.value===!1&&((s=a==null?void 0:a.changeEvent)==null||s.call(a,t))):(l(V,t),n.value=t)}});return{model:d,isGroup:o,isLimitExceeded:b}},tn=(e,n,{model:l})=>{const a=E(B,void 0),o=G(!1),b=k(()=>{const s=l.value;return z(s)?s:I(s)?ye(e.label)?s.map(q).some(f=>Ve(f,e.label)):s.map(q).includes(e.label):s!=null?s===e.trueLabel:!!s}),d=W(k(()=>{var s;return(s=a==null?void 0:a.size)==null?void 0:s.value}),{prop:!0}),t=W(k(()=>{var s;return(s=a==null?void 0:a.size)==null?void 0:s.value})),m=k(()=>!!n.default||!Ne(e.label));return{checkboxButtonSize:d,isChecked:b,isFocused:o,checkboxSize:t,hasOwnLabel:m}},on=(e,{model:n})=>{function l(){I(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&l()},fe=(e,n)=>{const{formItem:l}=M(),{model:a,isGroup:o,isLimitExceeded:b}=ln(e),{isFocused:d,isChecked:t,checkboxButtonSize:m,checkboxSize:s,hasOwnLabel:f}=tn(e,n,{model:a}),{isDisabled:g}=nn({model:a,isChecked:t}),{inputId:S,isLabeledByFormItem:r}=de(e,{formItemContext:l,disableIdGeneration:f,disableIdManagement:o}),{handleChange:i,onClickRoot:c}=an(e,{model:a,isLimitExceeded:b,hasOwnLabel:f,isDisabled:g,isLabeledByFormItem:r});return on(e,{model:a}),{inputId:S,isLabeledByFormItem:r,isChecked:t,isDisabled:g,isFocused:d,checkboxButtonSize:m,checkboxSize:s,hasOwnLabel:f,model:a,handleChange:i,onClickRoot:c}},sn=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],un=["id","indeterminate","disabled","value","name","tabindex"],rn=L({name:"ElCheckbox"}),dn=L({...rn,props:ce,emits:me,setup(e){const n=e,l=ae(),{inputId:a,isLabeledByFormItem:o,isChecked:b,isDisabled:d,isFocused:t,checkboxSize:m,hasOwnLabel:s,model:f,handleChange:g,onClickRoot:S}=fe(n,l),r=P("checkbox"),i=k(()=>[r.b(),r.m(m.value),r.is("disabled",d.value),r.is("bordered",n.border),r.is("checked",b.value)]),c=k(()=>[r.e("input"),r.is("disabled",d.value),r.is("checked",b.value),r.is("indeterminate",n.indeterminate),r.is("focus",t.value)]);return(h,v)=>(C(),le(ie(!u(s)&&u(o)?"span":"label"),{class:x(u(i)),"aria-controls":h.indeterminate?h.controls:null,onClick:u(S)},{default:te(()=>[J("span",{class:x(u(c))},[h.trueLabel||h.falseLabel?$((C(),y("input",{key:0,id:u(a),"onUpdate:modelValue":v[0]||(v[0]=p=>w(f)?f.value=p:null),class:x(u(r).e("original")),type:"checkbox",indeterminate:h.indeterminate,name:h.name,tabindex:h.tabindex,disabled:u(d),"true-value":h.trueLabel,"false-value":h.falseLabel,onChange:v[1]||(v[1]=(...p)=>u(g)&&u(g)(...p)),onFocus:v[2]||(v[2]=p=>t.value=!0),onBlur:v[3]||(v[3]=p=>t.value=!1),onClick:v[4]||(v[4]=F(()=>{},["stop"]))},null,42,sn)),[[N,u(f)]]):$((C(),y("input",{key:1,id:u(a),"onUpdate:modelValue":v[5]||(v[5]=p=>w(f)?f.value=p:null),class:x(u(r).e("original")),type:"checkbox",indeterminate:h.indeterminate,disabled:u(d),value:h.label,name:h.name,tabindex:h.tabindex,onChange:v[6]||(v[6]=(...p)=>u(g)&&u(g)(...p)),onFocus:v[7]||(v[7]=p=>t.value=!0),onBlur:v[8]||(v[8]=p=>t.value=!1),onClick:v[9]||(v[9]=F(()=>{},["stop"]))},null,42,un)),[[N,u(f)]]),J("span",{class:x(u(r).e("inner"))},null,2)],2),u(s)?(C(),y("span",{key:0,class:x(u(r).e("label"))},[O(h.$slots,"default"),h.$slots.default?T("v-if",!0):(C(),y(Se,{key:0},[oe(se(h.label),1)],64))],2)):T("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var bn=R(dn,[["__file","checkbox.vue"]]);const vn=["name","tabindex","disabled","true-value","false-value"],cn=["name","tabindex","disabled","value"],mn=L({name:"ElCheckboxButton"}),fn=L({...mn,props:ce,emits:me,setup(e){const n=e,l=ae(),{isFocused:a,isChecked:o,isDisabled:b,checkboxButtonSize:d,model:t,handleChange:m}=fe(n,l),s=E(B,void 0),f=P("checkbox"),g=k(()=>{var r,i,c,h;const v=(i=(r=s==null?void 0:s.fill)==null?void 0:r.value)!=null?i:"";return{backgroundColor:v,borderColor:v,color:(h=(c=s==null?void 0:s.textColor)==null?void 0:c.value)!=null?h:"",boxShadow:v?`-1px 0 0 0 ${v}`:void 0}}),S=k(()=>[f.b("button"),f.bm("button",d.value),f.is("disabled",b.value),f.is("checked",o.value),f.is("focus",a.value)]);return(r,i)=>(C(),y("label",{class:x(u(S))},[r.trueLabel||r.falseLabel?$((C(),y("input",{key:0,"onUpdate:modelValue":i[0]||(i[0]=c=>w(t)?t.value=c:null),class:x(u(f).be("button","original")),type:"checkbox",name:r.name,tabindex:r.tabindex,disabled:u(b),"true-value":r.trueLabel,"false-value":r.falseLabel,onChange:i[1]||(i[1]=(...c)=>u(m)&&u(m)(...c)),onFocus:i[2]||(i[2]=c=>a.value=!0),onBlur:i[3]||(i[3]=c=>a.value=!1),onClick:i[4]||(i[4]=F(()=>{},["stop"]))},null,42,vn)),[[N,u(t)]]):$((C(),y("input",{key:1,"onUpdate:modelValue":i[5]||(i[5]=c=>w(t)?t.value=c:null),class:x(u(f).be("button","original")),type:"checkbox",name:r.name,tabindex:r.tabindex,disabled:u(b),value:r.label,onChange:i[6]||(i[6]=(...c)=>u(m)&&u(m)(...c)),onFocus:i[7]||(i[7]=c=>a.value=!0),onBlur:i[8]||(i[8]=c=>a.value=!1),onClick:i[9]||(i[9]=F(()=>{},["stop"]))},null,42,cn)),[[N,u(t)]]),r.$slots.default||r.label?(C(),y("span",{key:2,class:x(u(f).be("button","inner")),style:Le(u(o)?u(g):void 0)},[O(r.$slots,"default",{},()=>[oe(se(r.label),1)])],6)):T("v-if",!0)],2))}});var he=R(fn,[["__file","checkbox-button.vue"]]);const hn=Be({modelValue:{type:Ie(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:j,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),gn={[V]:e=>I(e),change:e=>I(e)},kn=L({name:"ElCheckboxGroup"}),pn=L({...kn,props:hn,emits:gn,setup(e,{emit:n}){const l=e,a=P("checkbox"),{formItem:o}=M(),{inputId:b,isLabeledByFormItem:d}=de(l,{formItemContext:o}),t=async s=>{n(V,s),await ee(),n("change",s)},m=k({get(){return l.modelValue},set(s){t(s)}});return Ee(B,{...en($e(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:t}),_(()=>l.modelValue,()=>{l.validateEvent&&(o==null||o.validate("change").catch(s=>re()))}),(s,f)=>{var g;return C(),le(ie(s.tag),{id:u(b),class:x(u(a).b("group")),role:"group","aria-label":u(d)?void 0:s.label||"checkbox-group","aria-labelledby":u(d)?(g=u(o))==null?void 0:g.labelId:void 0},{default:te(()=>[O(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ge=R(pn,[["__file","checkbox-group.vue"]]);const Bn=we(bn,{CheckboxButton:he,CheckboxGroup:ge});ue(he);ue(ge);export{Bn as E,ve as b,Xe as h,Ge as i,qe as o,He as s};
