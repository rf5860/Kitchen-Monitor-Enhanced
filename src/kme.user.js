// ==UserScript==
// @name        Kitchen Node Monitor
// @namespace   http://aubne-s-dvl01b.dev.mincom.com:8080
// @version     0.1
// @description Embed table of nodes.
// @match       http://aubne-s-dvl01b.dev.mincom.com:8080/label/kitchen/
// @match       http://aubne-s-dvl01b.ventyx.abb.com:8080/label/kitchen/
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
// ==/UserScript==
var header=$('h2').first()
GM_xmlhttpRequest({method:'GET',url:'http://aubne-s-dvl01b.dev.mincom.com:8080/computer/aubne-s-dvl01a_kitchens/ajaxExecutors',onload:function(r){header.append(r.responseText);}});
GM_xmlhttpRequest({method:'GET',url:'http://aubne-s-dvl01b.dev.mincom.com:8080/computer/aubne-s-dvl03a_kitchens/ajaxExecutors',onload:function(r){header.append(r.responseText);}});
GM_xmlhttpRequest({method:'GET',url:'http://aubne-s-dvl01b.dev.mincom.com:8080/computer/aubne-s-dvl03d_kitchens/ajaxExecutors',onload:function(r){header.append(r.responseText);}});
GM_xmlhttpRequest({method:'GET',url:'http://aubne-s-dvl01b.dev.mincom.com:8080/computer/aubne-s-dvlsu02_kitchens/ajaxExecutors',onload:function(r){header.append(r.responseText);}});
