var beautifulDlyrics=(()=>{var a,i="2.3",n=Spicetify.Player,l=new Map,e=()=>{var e=null==(e=null==(e=n.data)?void 0:e.track)?void 0:e.metadata,e=e?{Large:e.image_xlarge_url,Big:e.image_large_url,Defualt:e.image_url,Small:e.image_small_url}:void 0;if((null==e?void 0:e.Defualt)!==(null==a?void 0:a.Defualt)){a=e;for(var[t,r]of l)r()}},o=(n.addEventListener("songchange",e),e(),"os-viewport .lyrics-lyrics-container"),s="os-padding .main-nowPlayingView-content",c={NowPlaying:void 0,FullScreen:void 0},d={NowPlaying:void 0,FullScreen:void 0},u=(e,t)=>{var r;e!==c[t]&&(null!=(r=d[t])&&r.call(d),d[t]=void 0,e&&(d[t]=(e=>{const t=document.createElement("div"),r=(t.classList.add("lyrics-background-container"),document.createElement("img")),n=document.createElement("img");r.classList.add("lyrics-background-color"),n.classList.add("lyrics-background-back"),t.appendChild(r),t.appendChild(n);var i=()=>{var e=null!=(e=null==a?void 0:a.Defualt)?e:"";r.src=e,n.src=e},i=(l.set(e,i),i(),()=>{e.classList.contains("lyrics-background")||e.classList.add("lyrics-background")});i();const o=new MutationObserver(i);return o.observe(e,{attributes:!0,attributeFilter:["class"],childList:!1,subtree:!1}),e.prepend(t),()=>{o.disconnect(),t.remove(),e.classList.remove("lyrics-background"),l.delete(e)}})(e)),c[t]=null!=e?e:void 0)},t=()=>{var e,t=document.body.querySelector("."+s),r=(t=null!=(r=null==(t=null!=(r=null==(t=null!=(r=null==t?void 0:t.parentElement)?r:null)?void 0:t.parentElement)?r:null)?void 0:t.parentElement)?r:null,document.body.querySelector("."+o));r=null!=(e=null==(r=null!=(e=null==r?void 0:r.parentElement)?e:null)?void 0:r.parentElement)?e:null,u(t,"NowPlaying"),u(r,"FullScreen")},r="lyrics-lyrics-contentWrapper",y="main-nowPlayingView-lyricsContent",v={NowPlaying:void 0,FullScreen:void 0},g={NowPlaying:void 0,FullScreen:void 0},b=r=>{const a=new Map;let l=0;const s=(e,t)=>{e.style.fontSize="Active"==t.State?l+.5+"rem":""},n=()=>{let t;for(var[e,r]of a){e=e.classList;e.contains("lyrics-lyricsContent-active")?(r.State="Active",t=r.LayoutOrder):e.contains("lyrics-lyricsContent-unsynced")?r.State="Unsynced":e.contains("lyrics-lyricsContent-highlight")?r.State="Sung":r.State="Unsung"}for(var[n,i]of a){var o="Active"===i.State||"Unsynced"===i.State;let e;e=o?0:void 0===t?4:Math.min(Math.abs(i.LayoutOrder-t),4);o=o?"var(--lyrics-color-active)":"Sung"===i.State?"var(--lyrics-color-passed)":"var(--lyrics-color-inactive)";!1===n.classList.contains("lyric")&&n.classList.add("lyric"),s(n,i),n.style.color="transparent",n.style.textShadow=`0 0 ${e}px `+o}};let i,c;{const t=o=>{var e=Array.from(r.children).indexOf(o);new MutationObserver(n).observe(o,{attributes:!0,attributeFilter:["class"],childList:!1,subtree:!1});let t=!1;void 0===c&&0===o.innerText.length&&((c=new ResizeObserver(e=>{var t,r,n,i;l=(t=o,t=getComputedStyle(o),r=getComputedStyle(document.documentElement),parseFloat(t.fontSize)/parseFloat(r.fontSize));for([n,i]of a)s(n,i)})).observe(o),t=!0),a.set(o,{Observer:i,LayoutOrder:e,State:"Unsung",IsFontSizeObserver:t}),n()},o=e=>{e instanceof HTMLDivElement&&e.classList.contains("lyrics-lyricsContent-lyric")&&t(e)};(i=new MutationObserver(e=>{for(const r of e)if("childList"===r.type){for(const n of r.addedNodes)o(n);for(const i of r.removedNodes){var t;i instanceof HTMLDivElement&&(null!=(t=a.get(i))&&t.IsFontSizeObserver&&(null!=c&&c.disconnect(),c=void 0),a.delete(i))}}})).observe(r,{attributes:!1,childList:!0,subtree:!1});for(const e of r.childNodes)o(e)}return()=>{i.disconnect(),null!=c&&c.disconnect();for(const e of a.values())e.Observer.disconnect()}},m=(e,t)=>{var r;e!==v[t]&&(null!=(r=g[t])&&r.call(g),g[t]=void 0,e&&(g[t]=b(e)),v[t]=null!=e?e:void 0)},p=()=>{var e=document.body.querySelector("."+y),t=document.body.querySelector("."+r);m(e,"NowPlaying"),m(t,"FullScreen")};var f=async function(){t(),p(),new MutationObserver(()=>{t(),p()}).observe(document.body,{attributes:!1,childList:!0,subtree:!0});{let r;const n=async()=>{fetch("https://cdn.jsdelivr.net/gh/surfbryce/beautiful-lyrics@main/package.json").then(e=>e.json()).then(e=>{e=e.version;let t=5;e!==i&&e!==r&&(r=e,Spicetify.showNotification(`<h3>Beautiful Lyrics has a new Update!</h3>
						<h4 style = 'margin-top: 4px; margin-bottom: 4px; font-weight: normal;'>Reinstall the Extension to get it.</h4>
						<span style = 'opacity: 0.75;'>Version 2.3 -> ${e}</span>`,parseFloat(e)-parseFloat(i)<0||1<=Math.abs(parseInt(e)-parseInt(i)),7500),t=15),setTimeout(n,60*t*1e3)})},e=()=>{void 0===Spicetify.showNotification?setTimeout(e,0):n()};e()}};(async()=>{await f()})()})();(async()=>{var e;document.getElementById("beautifulDlyrics")||((e=document.createElement("style")).id="beautifulDlyrics",e.textContent=String.raw`
  .main-lyricsCinema-controls,.main-nowPlayingView-lyricsControls{mix-blend-mode:overlay}.lyric:hover{text-shadow:0 0 0 var(--lyrics-color-active)!important}.lyrics-lyricsContent-active{margin-top:.25em;margin-bottom:.25em}.lyrics-background .main-trackInfo-artists{opacity:.75;filter:brightness(1.15)}.main-nowPlayingView-coverArt{opacity:.85;box-shadow:rgba(0,0,0,.2705882353) 0 9px 20px 0}.main-nowPlayingView-section{background-color:var(--background-tinted-base)!important}.os-host:has(.lyrics-background) .os-scrollbar{padding:5px}.os-host:has(.lyrics-background) .os-scrollbar .os-scrollbar-handle{mix-blend-mode:overlay;background-color:rgba(252,249,249,.117)!important}.lyrics-lyrics-container,.main-nowPlayingView-section{--lyrics-color-inactive:rgb(240 240 240 / 51%)!important}.lyrics-background{overflow:hidden;position:relative}.lyrics-background.main-nowPlayingView-sectionHeaderSpacing.main-nowPlayingView-lyricsGradient,.lyrics-background.os-viewport .lyrics-lyrics-background{background-color:rgba(0,0,0,0)}.lyrics-background.os-padding,.lyrics-background.os-viewport{position:absolute}.lyrics-background.os-viewport:not(:has(.main-nowPlayingView-content)){overflow:visible}.lyrics-background.os-viewport:not(:has(.main-nowPlayingView-content))>.lyrics-background-container{position:sticky;max-width:35%;max-height:30%;scale:290% 340%;transform-origin:left top;margin-bottom:-18vh}.lyrics-background.os-padding:has(.main-nowPlayingView-content) .lyrics-background-container{border-radius:var(--border-radius-1);filter:saturate(2) brightness(.7)}.lyrics-background-container{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:-1;overflow:hidden;filter:saturate(1.5) brightness(.8)}.lyrics-background-back,.lyrics-background-color{width:200%;position:absolute;border-radius:100em;animation:rotate 35s linear infinite}.lyrics-background-color{right:0;top:0;filter:blur(40px);z-index:10;mix-blend-mode:revert}.lyrics-background-back{left:0;bottom:0;filter:blur(40px);z-index:1;animation-direction:reverse}@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}:root{--beautiful-lyrics-random-degree:258deg}@keyframes rotate{0%{transform:rotate(var(--beautiful-lyrics-random-degree))}100%{transform:rotate(calc(var(--beautiful-lyrics-random-degree) + 360deg))}}
      `.trim(),document.head.appendChild(e))})();