import{a as x}from"./axios.Cm0UX6qg.js";import{d as y,M as w,r as d,t as I,v as V,x as i,z as t,L as r,N as p,A as m,B as _,O as f,P as h,C,D as S,_ as E}from"./entry.Dt6Q4TK4.js";import{u as B}from"./sesion.Cc75d-K0.js";const b=a=>(C("data-v-6d6b2b9a"),a=a(),S(),a),U={class:"i_Sesion"},k={class:"cuadrado"},N=b(()=>i("label",{for:"usuario",class:"campo-label"},"Usuario:",-1)),R=b(()=>i("label",{for:"contrasena",class:"campo-label"},"Contraseña:",-1)),A=y({__name:"index",setup(a){const l=w(),c=B(),o=d(""),n=d("");async function g(){const u={username:o.value,password:n.value,mail:" ",city:" "};try{const e=await x.post("https://u7irt7biptq6nscn64c4gxvfs40sximb.lambda-url.eu-north-1.on.aws/login",u);if(e.status===200){c.setUsername(o.value),alert(e.data.city);const s=String(e.data.city);c.setCity(s),l.push("/Home"),h({message:"Inicio de sesión exitoso",type:"success"})}else throw new Error("Inicio de sesión fallido")}catch{h({message:"Error al iniciar sesión: ",type:"error",showClose:!0})}}function v(){l.push("/Registrarse")}return(u,e)=>(I(),V("div",U,[i("div",k,[N,t(r(p),{id:"usuario",modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=s=>o.value=s),placeholder:"Ingrese su usuario"},null,8,["modelValue"]),R,t(r(p),{id:"contrasena",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=s=>n.value=s),placeholder:"Ingrese su contraseña","show-password":""},null,8,["modelValue"]),t(r(f),{class:"boton-acceder",type:"primary",onClick:g},{default:m(()=>[_("Acceder")]),_:1}),t(r(f),{class:"boton-registrarse",type:"primary",onClick:v},{default:m(()=>[_("Registrarse")]),_:1})])]))}}),z=E(A,[["__scopeId","data-v-6d6b2b9a"]]);export{z as default};
