(()=>{"use strict";class e{constructor(e){this.parentElement=e,this.renderTooltip=this.renderTooltip.bind(this)}renderTooltip(e){const t=document.createElement("div");t.className="tooltip";const n=document.createElement("h2");n.className="tooltip-title",n.textContent="Popover title";const o=document.createElement("p");o.className="tooltip-text",o.textContent="And here's some amazing content. It's very engaging. Right?",t.insertAdjacentElement("afterbegin",n),t.insertAdjacentElement("beforeend",o),this.parentElement.insertAdjacentElement("afterbegin",t);const{left:i,top:s,width:r}=e.getBoundingClientRect();return t.style.left=i+r/2+"px",t.style.bottom=s,t}showTooltip(e){e.classList.toggle("active")}}document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".btn__container"),n=t.querySelector(".toggle__popover"),o=new e(t),i=o.renderTooltip(n);n.addEventListener("click",(()=>{o.showTooltip(i)}))}))})();