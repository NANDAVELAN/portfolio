(function(){
var el=document.getElementById('payload'),n=0;
function r(a,b,d){return (a+Math.random()*(b-a)).toFixed(d)}
function render(){
var mq2=r(180,260,0),mq135=r(90,140,0),t=r(29,32,1),h=r(55,64,0);
var aqi=mq135>120?'Moderate':'Good';
n++;
el.innerHTML='{\n  <span class="k">"node"</span>: <span class="s">"stm32-env-01"</span>,\n  <span class="k">"seq"</span>: <span class="n">'+n+'</span>,\n  <span class="k">"mq2_ppm"</span>: <span class="n">'+mq2+'</span>,\n  <span class="k">"mq135_ppm"</span>: <span class="n">'+mq135+'</span>,\n  <span class="k">"temp_c"</span>: <span class="n">'+t+'</span>,\n  <span class="k">"humidity"</span>: <span class="n">'+h+'</span>,\n  <span class="k">"aqi_class"</span>: <span class="s">"'+aqi+'"</span>,\n  <span class="k">"anomaly"</span>: <span class="n">false</span>\n}';
}
render();setInterval(render,5000);
var btns=document.querySelectorAll('.tabs button'),cards=document.querySelectorAll('#projects .card');
btns.forEach(function(b){b.addEventListener('click',function(){
btns.forEach(function(x){x.setAttribute('aria-pressed',x===b)});
var f=b.dataset.f;
cards.forEach(function(c){c.hidden=!(f==='all'||c.dataset.t.split(' ').indexOf(f)>-1)});
})});
})();