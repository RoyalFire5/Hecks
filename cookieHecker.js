heckScript = 'heck({{ COOKIES }}, {{ LUMPS }});function heck(heckCookies, heckLumps) {if (window.location.href.indexOf("https://orteil.dashnet.org/cookieclicker/") > -1) {console.log("Hecking " + heckCookies + " cookies...");cookieHeck(heckCookies);console.log("Hecked " + heckCookies + " cookies!");console.log("Hecking " + heckLumps + " lumps...");lumpHeck(heckLumps);console.log("Hecked " + heckLumps + " sugar lumps");}}function cookieHeck(heckCookies) {Game.Earn(heckCookies);}function lumpHeck(heckLumps) {Game.lumps += heckLumps;}';
console.log("hi")
function getHeckscript(cookies, lumps) {
	heckScript.replace("{{ COOKIES }}", cookies);
	heckScript.replace("{{ LUMPS }}", lumps);
	
	navigator.clipboard.writeText(heckScript);
}