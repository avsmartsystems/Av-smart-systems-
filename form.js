(function(){
// Paste your FormSubmit random string between the quotes (it arrives in the activation email).
var FORM_ID="";
var EM=["avsmartsystemstech","gmail.com"].join("@");
var ENDPOINT="https://formsubmit.co/ajax/"+(FORM_ID||EM);
var y=document.getElementById("yr");if(y)y.textContent=new Date().getFullYear();
var f=document.getElementById("lead");if(!f)return;var m=document.getElementById("msg");
var q=new URLSearchParams(location.search).get("service")||f.getAttribute("data-service");if(q)f.service.value=q;
f.addEventListener("submit",function(e){e.preventDefault();m.className="";
if(f._honey.value)return;
if(!f.name.value.trim()||!f.email.value||!f.email.validity.valid||!f.service.value){m.className="err";m.textContent="Please add your name, a valid email and the service you need.";return}
var d={};new FormData(f).forEach(function(v,k){d[k]=v});
d._subject="New quote request from "+(d.name||"a customer")+": "+d.service;d._replyto=d.email;d._template="table";d._captcha="false";
m.textContent="Sending...";f.querySelector("button").disabled=true;
fetch(ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(d)})
.then(function(r){return r.json()}).then(function(j){if(!(j.success===true||j.success==="true"))throw 0;f.reset();m.className="ok";m.textContent="Thanks! We received your request and will email you soon."})
.catch(function(){m.className="err";m.textContent="We could not send that just now. Please try again or ";var a=document.createElement("a");var body="Name: "+f.name.value+"\nEmail: "+f.email.value+"\nPhone: "+f.phone.value+"\nCity/ZIP: "+f.city_zip.value+"\nService: "+f.service.value+"\nBudget: "+f.budget.value+"\nTimeline: "+f.timeline.value+"\nProperty: "+f.property.value+"\n\n"+f.details.value;a.href="mailto:"+EM+"?subject="+encodeURIComponent("Quote request: "+f.service.value)+"&body="+encodeURIComponent(body);a.textContent="email us directly";a.style.color="inherit";m.appendChild(a);m.appendChild(document.createTextNode("."))})
.then(function(){f.querySelector("button").disabled=false})});
})();
