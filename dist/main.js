(()=>{"use strict";const e=function(){let e=document.querySelector("#content");e.textContent="";let t=function(){let e=document.createElement("section");e.id="home";let t=document.createElement("div");return t.innerHTML='\n    <div id="home-welcome">\n        <h2>Welcome to the Low Carbs Clinic!</h2>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum fuga quia cum quaerat, exercitationem, unde tempore doloribus nemo provident quibusdam pariatur velit perspiciatis assumenda eum, iusto ut quae totam!\n    </div>',t.id="home-background",e.appendChild(t),e}();e.appendChild(t)};function t(e,t){let n=document.createElement("div");n.classList.add("type-container");let i=document.createElement("h3");i.textContent=e,n.appendChild(i);let o=document.createElement("div");o.classList.add("menu-content");let r=document.createElement("div");r.classList.add("food-type-illustration");let d=document.createElement("ul");return t.forEach((e=>{d.innerHTML+=`\n        <li>\n            <span class="menu-item">\n            <div class="menu-item-info"><strong>${e.foodName}</strong><span class="price">${e.price}$</span></div>\n            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quae ab ullam molestiae, culpa provident harum odio? Autem, corporis aperiam cumque corrupti provident, eligendi repellat numquam.</p>\n            </span>\n        </li>`})),o.appendChild(d),o.appendChild(r),n.appendChild(o),n}const n=function(){let e=document.querySelector("#content");e.textContent="",e.appendChild(function(){let e=[{foodName:"Burguer",price:20.4,description:"lorem"},{foodName:"Burguer",price:20.4,description:"lorem"},{foodName:"Burguer",price:20.4,description:"lorem"},{foodName:"Burguer",price:20.4,description:"lorem"},{foodName:"Burguer",price:20.4,description:"lorem"}],n=document.createElement("section");n.id="menu";let i=document.createElement("h2");return i.textContent="DISHES",n.appendChild(i),n.appendChild(t("Breakfast",e)),n.appendChild(t("Lunch",e)),n.appendChild(t("Dinner",e)),n}())};document.querySelector("#home-btn").addEventListener("click",e),document.querySelector("#menu-btn").addEventListener("click",n),document.querySelector("#about-btn"),document.querySelector("#delivery-btn"),e()})();