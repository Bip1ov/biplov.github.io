const $=s=>document.querySelector(s);
const F=[
{n:"Fyodor Dostoevsky",y:"1821–1881",b:["The Brothers Karamazov"],w:"Explored doubt, faith and freedom through the lives of three brothers."},
{n:"Friedrich Nietzsche",y:"1844–1900",b:["Beyond Good and Evil"],w:"Questioned inherited values and asked what we would build without them."}
];
$("#favs").innerHTML=F.map(f=>`<div class="fav"><div class="yr">${f.y}</div><h3>${f.n}</h3>${f.b.map(x=>`<div class="bk">${x}</div>`).join("")}<p>${f.w}</p></div>`).join("");
function route(){
const a=location.hash.replace(/^#\/?/,"").split("/")[0],v=["favorites","about"].includes(a)?a:"home";
document.querySelectorAll(".view").forEach(e=>e.classList.remove("on"));
$("#v-"+v).classList.add("on");
document.querySelectorAll(".links a").forEach(l=>l.classList.toggle("on",l.dataset.r===v));
window.scrollTo(0,0)}
addEventListener("hashchange",route);route();
$("#theme").onclick=()=>{const r=document.documentElement,dark=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=dark?"light":"dark";try{localStorage.setItem("zp-theme",r.dataset.theme)}catch(e){}};
try{const t=localStorage.getItem("zp-theme");if(t)document.documentElement.dataset.theme=t}catch(e){}
