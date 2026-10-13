(function(){var b=document.getElementById("mb"),l=document.getElementById("nl");if(!b||!l)return;
b.addEventListener("click",function(){var o=l.classList.toggle("open");b.setAttribute("aria-expanded",o)});
l.addEventListener("click",function(e){if(e.target.tagName==="A"){l.classList.remove("open");b.setAttribute("aria-expanded","false")}});})();
