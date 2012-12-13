/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.0.3-a1 Build: 2012-12-13 10:10 PM
 *
 */
(function(a){a.fn.datepicker=function(){return a(this).each(function(){var o,t,n=pe.fn.calendar,l,k,f,w=new Date(),c,u="YYYY-MM-DD",m,h,v,p,s,i,g,x=w.getMonth(),b,r,q,j=w.getFullYear(),d,e=a(this);if(e.hasClass("picker-field")){return}e.addClass("picker-field");f=function(y,B){var z=d.find('label[for="'+y+'"]').text(),A=a('<a id="'+B+'-toggle" class="picker-toggle-hidden" href="javascript:;"><img class="image-actual" src="'+pe.add.liblocation+'images/datepicker/calendar-month.png" alt="'+pe.dic.get("%datepicker-show")+z+'"/></a>');A.on("click vclick touchstart",function(){q(y,B);return false});e.after(A);l.slideUp(0)};o=function(C,E,D,G,B,z,F){B=pe.date.from_iso_format(B);z=pe.date.from_iso_format(z);var A=(E===B.getFullYear()&&D===B.getMonth()),y=(E===z.getFullYear()&&D===z.getMonth());G.each(function(H,K){if((!A&&!y)||(A===true&&H>=B.getDate())||(y===true&&H<=z.getDate())){var L=a(K).children("div"),J=a('<a href="javascript:;"></a>'),I=L.parent();I.empty();J.append(L.html());J.appendTo(I);J.on("keydown",function(O){var M=a(this).closest(".cal-container"),N=M.attr("id");if(!(O.ctrlKey||O.altKey||O.metaKey)){switch(O.keyCode){case 27:q(C,C+"-picker");return false;case 32:a(this).trigger("click");return false;case 33:if(O.shiftKey){b(N,E,D,B,z,new Date(E-1,D,H+1))}else{b(N,E,D,B,z,new Date(E,D-1,H+1))}return false;case 34:if(O.shiftKey){b(N,E,D,B,z,new Date(E+1,D,H+1))}else{b(N,E,D,B,z,new Date(E,D+1,H+1))}return false;case 35:pe.focus(a(this).closest("ol").children("li").children("a").last());return false;case 36:pe.focus(a(this).closest("ol").children("li").children("a").first());return false;case 37:b(N,E,D,B,z,new Date(E,D,H));return false;case 38:b(N,E,D,B,z,new Date(E,D,H-6));return false;case 39:b(N,E,D,B,z,new Date(E,D,H+2));return false;case 40:b(N,E,D,B,z,new Date(E,D,H+8));return false}}else{if(O.ctrlKey&&!(O.altKey||O.metaKey)){switch(O.keyCode){case 35:b(N,E,D,B,z,new Date(E,11,31));return false;case 36:b(N,E,D,B,z,new Date(E,0,1));return false}}}});J.on("click vclick touchstart",{fieldid:C,year:E,month:D,day:H+1,days:G,format:F},function(M){t(M.data.fieldid,M.data.year,M.data.month+1,M.data.day,M.data.format);r(M.data.fieldid,M.data.year,M.data.month,M.data.days,M.data.format);q(M.data.fieldid,M.data.fieldid+"-picker");return false})}})};b=function(y,A,C,B,D,z){if(z.getTime()<B.getTime()){z=B;z.setDate(z.getDate()+1)}else{if(z.getTime()>D.getTime()){z=D;z.setDate(z.getDate()+1)}}if(z.getMonth()!==C||z.getFullYear()!==A){n.create(y,z.getFullYear(),z.getMonth(),true,B,D)}pe.focus(a("#"+y).find(".cal-day-list").children("li:eq("+(z.getDate()-1)+")").children("a"))};r=function(A,E,C,H,G){var D,y,z,F;a(H).removeClass("datepicker-selected");a(H).find(".datepicker-selected-text").detach();G=G.replace("DD","(?<a> [0-9]{2})");G=G.replace("D","(?<a> [0-9] )");G=G.replace("MM","(?<b> [0-9]{2})");G=G.replace("M","(?<b> [0-9])");G=G.replace("YYYY","(?<c> [0-9]{4})");G=G.replace("YY","(?<c /> [0-9]{2})");D="^"+G+"$";y=a("#"+A).attr("value");F=new XRegExp(D,"x");try{if(y!==""){z=a.parseJSON(y.replace(F,'{"year":"${c}", "month":"${b}", "day":"${a}"}'));if(z.year===E&&z.month===C+1){a(H[z.day-1]).addClass("datepicker-selected");a(H[z.day-1]).children("a").append('<span class="wb-invisible datepicker-selected-text"> ['+pe.dic.get("%datepicker-selected")+"]</span>")}}}catch(B){}};t=function(y,A,C,z,B){d.find("#"+y).attr("value",m(A,C,z,B))};q=function(z,A){var y=d.find("#"+A+"-toggle");y.toggleClass("picker-toggle-hidden picker-toggle-visible");l.unbind("focusout.calendar");l.unbind("focusin.calendar");if(y.hasClass("picker-toggle-visible")){v(z);l.find("a").attr("tabindex",0);l.slideDown("fast",function(){s(a(this))});l.attr("aria-hidden","false");y.children("a").children("span").text(pe.dic.get("%datepicker-hide"));if(l.find(".cal-prevmonth a").length!==0){pe.focus(l.find(".cal-prevmonth a"))}else{if(l.find(".cal-nextmonth a").length!==0){pe.focus(l.find(".cal-nextmonth a"))}else{pe.focus(l.find(".cal-goto a"))}}}else{h(a("#"+z));pe.focus(d.find("#"+z))}};v=function(y){a(".picker-field").each(function(){if(a(this).attr("id")!==y){h(a(this))}})};h=function(D){var z,C,A,y,B;z=D.attr("id");C=z+"-picker";A=a("#"+C);y=a("#"+C+"-toggle");B=a('label[for="'+z+'"]').text();A.find("a").attr("tabindex","-1");A.slideUp("fast",function(){s(a(this))});A.attr("aria-hidden","true");n.hideGoToForm(C);y.children("a").children("span").text(pe.dic.get("%datepicker-show")+B);y.removeClass("picker-toggle-visible");y.addClass("picker-toggle-hidden")};s=function(y){var z=a("#wb-main-in"),A;if(pe.ie===7){A=y.height()+y.offset().top-z.offset().top+50;if(z.height()>=A){z.css("min-height","")}else{if(z.height()<A){z.css("min-height",A)}}}else{if(pe.ie>0&&pe.ie<7){A=y.height()+y.offset().top-z.offset().top+50;if(z.height()>=A){z.css("height","")}else{if(z.height()<A){z.css("height",A)}}}}};m=function(A,C,z,B){var y=B;y=y.replace("DD",pe.string.pad(z,2));y=y.replace("D",z);y=y.replace("MM",pe.string.pad(C,2));y=y.replace("M",C);y=y.replace("YYYY",A);y=y.replace("YY",A.toString().substr(2,2));return y};if(e.attr("id")!==undefined){p=e.attr("id");if(e.attr("min")!==undefined){g=e.attr("min")}else{g="1800-01-01"}if(e.attr("max")!==undefined){i=e.attr("max")}else{i="2100-01-01"}p=e.attr("id");c=e;d=e.parent();k=p+"-picker";l=a('<div id="'+k+'" class="picker-overlay" role="dialog" aria-controls="'+p+'" aria-labelledby="'+k+'-toggle" aria-hidden="true"></div>');l.on("keyup",function(y){if(y.keyCode===27){v();pe.focus(e.parent().find("#"+p+"-picker-toggle"))}});c.parent().after(l);l.on("calendarDisplayed",function(B,y,A,C){var z=a(this);o(p,y,A,C,g,i,u);r(p,y,A,C,u);z.on("click vclick touchstart",function(D){if(D.stopPropagation){D.stopImmediatePropagation()}else{D.cancelBubble=true}});z.on("focusoutside",function(){if(l.attr("aria-hidden")==="false"){h(a("#"+l.attr("id").slice(0,-7)));return false}});a(document).on("click vclick touchstart",function(){if(l.attr("aria-hidden")==="false"){h(a("#"+l.attr("id").slice(0,-7)));return false}})});n.create(k,j,x,true,g,i);f(p,k);a('<a class="picker-close" role="button" href="javascript:;"><img src="'+pe.add.liblocation+'images/datepicker/cross-button.png" alt="'+pe.dic.get("%datepicker-hide")+'" class="image-actual" /></a>').appendTo(l).click(function(){q(p,k)});l.find("a").attr("tabindex","-1")}})};a('input[type="date"]').datepicker()}(jQuery));