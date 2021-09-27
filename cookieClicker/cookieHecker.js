heckScript = 'heck({{ COOKIES }}, {{ LUMPS }});function heck(heckCookies, heckLumps) {if (window.location.href.indexOf("https://orteil.dashnet.org/cookieclicker/") > -1) {console.log("Hecking " + heckCookies + " cookies...");cookieHeck(heckCookies);console.log("Hecked " + heckCookies + " cookies!");console.log("Hecking " + heckLumps + " lumps

function getHeckscript(cookies, lumps) {
	heckScript.replace("{{ COOKIES }}", cookies);
	heckScript.replace("{{ LUMPS }}", lumps);
	
	navigator.clipboard.writeText(heckScript);
}
