(function(){const e={btnShow:"[data-btn-menu-show]",btnHide:"[data-btn-menu-hide]",menu:"[data-menu]",menuLink:"[data-menu] a"},n=()=>{document.querySelector(e.btnShow).addEventListener("click",i),document.querySelector(e.btnHide).addEventListener("click",o),document.querySelectorAll(e.menuLink).forEach(s=>{s.addEventListener("click",o)})},i=()=>{document.querySelector(e.menu).classList.add("is-visible")},o=()=>{document.querySelector(e.menu).classList.remove("is-visible")};n()})();function l(){var e=document.createElement("script");e.src="https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.js",e.onload=r,document.head.appendChild(e)}function r(){a({lat:47.40376532684344,lng:8.718921271966424,container:"map-illnau"}),a({lat:47.15661299903208,lng:8.512031691063648,container:"map-zug"})}function a(e){mapboxgl.accessToken="pk.eyJ1IjoibWFyY2VsaXRvb29vIiwiYSI6ImNrMHNsdmhwdjAzcjIzZ3BldTlqdWhnaWEifQ.EWZE383Tn4xBt0E5pSXh6Q";var n=new mapboxgl.Map({container:e.container,style:"mapbox://styles/marcelitoooo/ck16ms7m51nlo1cmwnqrbjuyq",center:[e.lng,e.lat],zoom:14});n.addControl(new mapboxgl.NavigationControl),n.scrollZoom.disable();var i={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[e.lng,e.lat]},properties:{title:"Martin Weiss Treuhand AG",description:"Martin Weiss Treuhand AG"}}]};i.features.forEach(function(o){var t=document.createElement("div");t.className="marker",new mapboxgl.Marker(t).setLngLat(o.geometry.coordinates).addTo(n)})}function c(){window.pageYOffset>500&&(l(),window.removeEventListener("scroll",c))}window.addEventListener("scroll",c);