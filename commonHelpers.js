import{f as i,a as c}from"./assets/vendor-d78d9edd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const d=document.querySelector(".weather__wrapper"),l=({name:t,main:e,sys:a,clouds:n,weather:s})=>{const r=i(new Date(a.sunrise*1e3),"H:m"),o=i(new Date(a.sunset*1e3),"H:m"),p=`<div class="weather__card">
      <h2 class="city-name">${t}</h2>
      <ul class="weather-info list">
          <li class="weather-info-item">
              <p class="temp">Температура: ${e.temp}<sup>&#176;</sup></p>
          </li>
          <li class="weather-info-item">
              <p class="feels-like-temp">Відчувається як: ${e.feels_like}<sup>&#176;</sup></p>
          </li>
          <li class="weather-info-item">
              <p class="sunrise-time">Схід сонця: ${r}</p>
          </li>
          <li class="weather-info-item">
              <p class="sunset-time">Захід сонця: ${o}</p>
          </li>
          <li class="weather-info-item">
              <p class="clouds">Хмарність: ${n.all}%</p>
          </li>
          <li><img src="https://openweathermap.org/img/wn/${s[0].icon}@2x.png" alt="${s[0].description}" /></li>
      </ul>
  </div>`;d.insertAdjacentHTML("beforeend",p)},u=c.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"95632b02f9162f375a368971925f5209",units:"metric"}}),m=async t=>{const{data:e}=await u.get("/weather",{params:{q:t}});return e},f=async({latitude:t,longitude:e})=>{const{data:a}=await u.get("/weather",{params:{lat:t,lon:e}});return a},g=c.create({baseURL:"https://api.opencagedata.com/geocode/v1/json",params:{key:"d4683b09d0c94ec0aebf0b2e043decbf",language:"en"}}),h=async({latitude:t,longitude:e})=>{const a=`?q=${t}+${e}`,{data:n}=await g.get(a);return n.results[0].components.country},y=c.create({baseURL:"https://pixabay.com/api/",params:{image_type:"backgrounds",orientation:"horizontal",per_page:"40",key:"37485893-252f507e861118bf45a5e3b29"}}),b=async t=>{const{data:e}=await y.get("",{params:{q:t}});return e.hits},w=t=>Math.floor(Math.random()*(t+1)+1),$=t=>{const e=w(t.length-1);console.log(e);const{largeImageURL:a}=t[e];document.body.style=`background: linear-gradient(rgba(255, 255, 53, 0.1), rgba(48, 62, 143, 0.1 )),
  url('${a}') center fixed; background-size: cover;`},L=document.querySelector(".search-form");P();L.addEventListener("submit",v);function v(t){t.preventDefault();const{value:e}=t.target.elements.user_country;e&&m(e).then(a=>{l(a)})}function P(){const t=e=>{f(e.coords).then(l),h(e.coords).then(b).then($)};navigator.geolocation.getCurrentPosition(t)}
//# sourceMappingURL=commonHelpers.js.map
