/*
 build | 2013-02-18 16:04:13.923 */
(function(a,i){function f(b,c){var e,d;e=b.nodeName.toLowerCase();if("area"===e){e=b.parentNode;d=e.name;if(!b.href||!d||"map"!==e.nodeName.toLowerCase())return!1;e=a("img[usemap=#"+d+"]")[0];return!!e&&k(e)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"===e?b.href||c:c)&&k(b)}function k(b){return a.expr.filters.visible(b)&&!a(b).parents().andSelf().filter(function(){return"hidden"===a.css(this,"visibility")}).length}var p=0,d=/^ui-id-\d+$/;a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,
{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({_focus:a.fn.focus,focus:function(b,c){return"number"===typeof b?this.each(function(){var e=this;setTimeout(function(){a(e).focus();c&&c.call(e)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;
b=a.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.css(this,"position"))&&/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):
b},zIndex:function(b){if(b!==i)return this.css("zIndex",b);if(this.length)for(var b=a(this[0]),c;b.length&&b[0]!==document;){c=b.css("position");if("absolute"===c||"relative"===c||"fixed"===c)if(c=parseInt(b.css("zIndex"),10),!isNaN(c)&&0!==c)return c;b=b.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++p)})},removeUniqueId:function(){return this.each(function(){d.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?
a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,e){return!!a.data(b,e[3])},focusable:function(b){return f(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var c=a.attr(b,"tabindex"),e=isNaN(c);return(e||0<=c)&&f(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight;a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});a.support.minHeight=100===c.offsetHeight;a.support.selectstart=
"onselectstart"in c;b.removeChild(c).style.display="none"}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(b,c){function e(b,c,l,e){a.each(d,function(){c-=parseFloat(a.css(b,"padding"+this))||0;l&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0);e&&(c-=parseFloat(a.css(b,"margin"+this))||0)});return c}var d="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),h={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};
a.fn["inner"+c]=function(b){return b===i?h["inner"+c].call(this):this.each(function(){a(this).css(f,e(this,b)+"px")})};a.fn["outer"+c]=function(b,d){return"number"!==typeof b?h["outer"+c].call(this,b):this.each(function(){a(this).css(f,e(this,b,!0,d)+"px")})}}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),function(){var b=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||
[];a.ui.ie=b.length?!0:!1;a.ui.ie6=6===parseFloat(b[1],10)}(),a.fn.extend({disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.extend(a.ui,{plugin:{add:function(b,c,e){var d,b=a.ui[b].prototype;for(d in e)b.plugins[d]=b.plugins[d]||[],b.plugins[d].push([c,e[d]])},call:function(a,c,e){var d=a.plugins[c];if(d&&a.element[0].parentNode&&
11!==a.element[0].parentNode.nodeType)for(c=0;c<d.length;c++)a.options[d[c][0]]&&d[c][1].apply(a.element,e)}},contains:a.contains,hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",o=!1;if(0<b[d])return!0;b[d]=1;o=0<b[d];b[d]=0;return o},isOverAxis:function(a,c,d){return a>c&&a<c+d},isOver:function(b,c,d,o,f,h){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,o,h)}}))})(jQuery);
(function(a,i){var f=0,k=Array.prototype.slice,p=a.cleanData;a.cleanData=function(d){for(var b=0,c;null!=(c=d[b]);b++)try{a(c).triggerHandler("remove")}catch(e){}p(d)};a.widget=function(d,b,c){var e,f,g,h,r=d.split(".")[0],d=d.split(".")[1];e=r+"-"+d;c||(c=b,b=a.Widget);a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)};a[r]=a[r]||{};f=a[r][d];g=a[r][d]=function(a,b){if(!this._createWidget)return new g(a,b);arguments.length&&this._createWidget(a,b)};a.extend(g,f,{version:c.version,_proto:a.extend({},
c),_childConstructors:[]});h=new b;h.options=a.widget.extend({},h.options);a.each(c,function(d,l){a.isFunction(l)&&(c[d]=function(){var a=function(){return b.prototype[d].apply(this,arguments)},c=function(a){return b.prototype[d].apply(this,a)};return function(){var b=this._super,d=this._superApply,e;this._super=a;this._superApply=c;e=l.apply(this,arguments);this._super=b;this._superApply=d;return e}}())});g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix:d},c,{constructor:g,
namespace:r,widgetName:d,widgetBaseClass:e,widgetFullName:e});f?(a.each(f._childConstructors,function(b,d){var c=d.prototype;a.widget(c.namespace+"."+c.widgetName,g,d._proto)}),delete f._childConstructors):b._childConstructors.push(g);a.widget.bridge(d,g)};a.widget.extend=function(d){for(var b=k.call(arguments,1),c=0,e=b.length,f,g;c<e;c++)for(f in b[c])g=b[c][f],b[c].hasOwnProperty(f)&&g!==i&&(d[f]=a.isPlainObject(g)?a.isPlainObject(d[f])?a.widget.extend({},d[f],g):a.widget.extend({},g):g);return d};
a.widget.bridge=function(d,b){var c=b.prototype.widgetFullName||d;a.fn[d]=function(e){var f="string"===typeof e,g=k.call(arguments,1),h=this,e=!f&&g.length?a.widget.extend.apply(null,[e].concat(g)):e;f?this.each(function(){var b,f=a.data(this,c);if(!f)return a.error("cannot call methods on "+d+" prior to initialization; attempted to call method '"+e+"'");if(!a.isFunction(f[e])||"_"===e.charAt(0))return a.error("no such method '"+e+"' for "+d+" widget instance");b=f[e].apply(f,g);if(b!==f&&b!==i)return h=
b&&b.jquery?h.pushStack(b.get()):b,!1}):this.each(function(){var d=a.data(this,c);d?d.option(e||{})._init():a.data(this,c,new b(e,this))});return h}};a.Widget=function(){};a.Widget._childConstructors=[];a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(d,b){b=a(b||this.defaultElement||this)[0];this.element=a(b);this.uuid=f++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=a.widget.extend({},this.options,
this._getCreateOptions(),d);this.bindings=a();this.hoverable=a();this.focusable=a();b!==this&&(a.data(b,this.widgetName,this),a.data(b,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===b&&this.destroy()}}),this.document=a(b.style?b.ownerDocument:b.document||b),this.window=a(this.document[0].defaultView||this.document[0].parentWindow));this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,
_create:a.noop,_init:a.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},
option:function(d,b){var c=d,e,f,g;if(0===arguments.length)return a.widget.extend({},this.options);if("string"===typeof d)if(c={},e=d.split("."),d=e.shift(),e.length){f=c[d]=a.widget.extend({},this.options[d]);for(g=0;g<e.length-1;g++)f[e[g]]=f[e[g]]||{},f=f[e[g]];d=e.pop();if(b===i)return f[d]===i?null:f[d];f[d]=b}else{if(b===i)return this.options[d]===i?null:this.options[d];c[d]=b}this._setOptions(c);return this},_setOptions:function(a){for(var b in a)this._setOption(b,a[b]);return this},_setOption:function(a,
b){this.options[a]=b;"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!b).attr("aria-disabled",b),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"));return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(d,b,c){var e,f=this;"boolean"!==typeof d&&(c=b,b=d,d=!1);c?(b=e=a(b),this.bindings=this.bindings.add(b)):(c=b,b=this.element,e=
this.widget());a.each(c,function(c,h){function k(){return!d&&(!0===f.options.disabled||a(this).hasClass("ui-state-disabled"))?void 0:("string"===typeof h?f[h]:h).apply(f,arguments)}"string"!==typeof h&&(k.guid=h.guid=h.guid||k.guid||a.guid++);var i=c.match(/^(\w+)\s*(.*)$/),l=i[1]+f.eventNamespace;(i=i[2])?e.delegate(i,l,k):b.bind(l,k)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;a.unbind(b).undelegate(b)},_delay:function(a,b){var c=this;return setTimeout(function(){return("string"===
typeof a?c[a]:a).apply(c,arguments)},b||0)},_hoverable:function(d){this.hoverable=this.hoverable.add(d);this._on(d,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(d){this.focusable=this.focusable.add(d);this._on(d,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(d,b,c){var e,
f=this.options[d],c=c||{},b=a.Event(b);b.type=(d===this.widgetEventPrefix?d:this.widgetEventPrefix+d).toLowerCase();b.target=this.element[0];if(d=b.originalEvent)for(e in d)e in b||(b[e]=d[e]);this.element.trigger(b,c);return!(a.isFunction(f)&&!1===f.apply(this.element[0],[b].concat(c))||b.isDefaultPrevented())}};a.each({show:"fadeIn",hide:"fadeOut"},function(d,b){a.Widget.prototype["_"+d]=function(c,e,f){"string"===typeof e&&(e={effect:e});var g,h=!e?d:!0===e||"number"===typeof e?b:e.effect||b,e=
e||{};"number"===typeof e&&(e={duration:e});g=!a.isEmptyObject(e);e.complete=f;e.delay&&c.delay(e.delay);if(g&&a.effects&&(a.effects.effect[h]||!1!==a.uiBackCompat&&a.effects[h]))c[d](e);else if(h!==d&&c[h])c[h](e.duration,e.easing,f);else c.queue(function(b){a(this)[d]();f&&f.call(c[0]);b()})}});!1!==a.uiBackCompat&&(a.Widget.prototype._getCreateOptions=function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]})})(jQuery);
(function(a){var i=!1;a(document).mouseup(function(){i=!1});a.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var f=this;this.element.bind("mousedown."+this.widgetName,function(a){return f._mouseDown(a)}).bind("click."+this.widgetName,function(k){if(!0===a.data(k.target,f.widgetName+".preventClickEvent"))return a.removeData(k.target,f.widgetName+".preventClickEvent"),k.stopImmediatePropagation(),!1});this.started=!1},
_mouseDestroy:function(){this.element.unbind("."+this.widgetName);this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(f){if(!i){this._mouseStarted&&this._mouseUp(f);this._mouseDownEvent=f;var k=this,p=1===f.which,d="string"===typeof this.options.cancel&&f.target.nodeName?a(f.target).closest(this.options.cancel).length:!1;if(!p||d||!this._mouseCapture(f))return!0;this.mouseDelayMet=
!this.options.delay;this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)&&(this._mouseStarted=!1!==this._mouseStart(f),!this._mouseStarted))return f.preventDefault(),!0;!0===a.data(f.target,this.widgetName+".preventClickEvent")&&a.removeData(f.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(a){return k._mouseMove(a)};this._mouseUpDelegate=function(a){return k._mouseUp(a)};
a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);f.preventDefault();return i=!0}},_mouseMove:function(f){if(a.ui.ie&&!(9<=document.documentMode)&&!f.button)return this._mouseUp(f);if(this._mouseStarted)return this._mouseDrag(f),f.preventDefault();this._mouseDistanceMet(f)&&this._mouseDelayMet(f)&&((this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,f))?this._mouseDrag(f):this._mouseUp(f));return!this._mouseStarted},
_mouseUp:function(f){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);this._mouseStarted&&(this._mouseStarted=!1,f.target===this._mouseDownEvent.target&&a.data(f.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(f));return!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},
_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);
(function(a,i){function f(a,b,c){return[parseInt(a[0],10)*(r.test(a[0])?b/100:1),parseInt(a[1],10)*(r.test(a[1])?c/100:1)]}function k(b,c){return parseInt(a.css(b,c),10)||0}a.ui=a.ui||{};var p,d=Math.max,b=Math.abs,c=Math.round,e=/left|center|right/,o=/top|center|bottom/,g=/[\+\-]\d+%?/,h=/^\w+/,r=/%$/,x=a.fn.position;a.position={scrollbarWidth:function(){if(p!==i)return p;var b,c,d=a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>");
c=d.children()[0];a("body").append(d);b=c.offsetWidth;d.css("overflow","scroll");c=c.offsetWidth;b===c&&(c=d[0].clientWidth);d.remove();return p=b-c},getScrollInfo:function(b){var c=b.isWindow?"":b.element.css("overflow-x"),d=b.isWindow?"":b.element.css("overflow-y"),d="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:"scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth?a.position.scrollbarWidth():0,height:d?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var b=
a(b||window),c=a.isWindow(b[0]);return{element:b,isWindow:c,offset:b.offset()||{left:0,top:0},scrollLeft:b.scrollLeft(),scrollTop:b.scrollTop(),width:c?b.width():b.outerWidth(),height:c?b.height():b.outerHeight()}}};a.fn.position=function(l){if(!l||!l.of)return x.apply(this,arguments);var l=a.extend({},l),u,t,s,v,q,j=a(l.of),i=a.position.getWithinInfo(l.within),y=a.position.getScrollInfo(i),m=j[0],p=(l.collision||"flip").split(" "),r={};9===m.nodeType?(t=j.width(),s=j.height(),v={top:0,left:0}):a.isWindow(m)?
(t=j.width(),s=j.height(),v={top:j.scrollTop(),left:j.scrollLeft()}):m.preventDefault?(l.at="left top",t=s=0,v={top:m.pageY,left:m.pageX}):(t=j.outerWidth(),s=j.outerHeight(),v=j.offset());q=a.extend({},v);a.each(["my","at"],function(){var a=(l[this]||"").split(" "),b,c;1===a.length&&(a=e.test(a[0])?a.concat(["center"]):o.test(a[0])?["center"].concat(a):["center","center"]);a[0]=e.test(a[0])?a[0]:"center";a[1]=o.test(a[1])?a[1]:"center";b=g.exec(a[0]);c=g.exec(a[1]);r[this]=[b?b[0]:0,c?c[0]:0];l[this]=
[h.exec(a[0])[0],h.exec(a[1])[0]]});1===p.length&&(p[1]=p[0]);"right"===l.at[0]?q.left+=t:"center"===l.at[0]&&(q.left+=t/2);"bottom"===l.at[1]?q.top+=s:"center"===l.at[1]&&(q.top+=s/2);u=f(r.at,t,s);q.left+=u[0];q.top+=u[1];return this.each(function(){var e,g,h=a(this),m=h.outerWidth(),o=h.outerHeight(),z=k(this,"marginLeft"),A=k(this,"marginTop"),x=m+z+k(this,"marginRight")+y.width,B=o+A+k(this,"marginBottom")+y.height,n=a.extend({},q),w=f(r.my,h.outerWidth(),h.outerHeight());"right"===l.my[0]?n.left-=
m:"center"===l.my[0]&&(n.left-=m/2);"bottom"===l.my[1]?n.top-=o:"center"===l.my[1]&&(n.top-=o/2);n.left+=w[0];n.top+=w[1];a.support.offsetFractions||(n.left=c(n.left),n.top=c(n.top));e={marginLeft:z,marginTop:A};a.each(["left","top"],function(b,c){if(a.ui.position[p[b]])a.ui.position[p[b]][c](n,{targetWidth:t,targetHeight:s,elemWidth:m,elemHeight:o,collisionPosition:e,collisionWidth:x,collisionHeight:B,offset:[u[0]+w[0],u[1]+w[1]],my:l.my,at:l.at,within:i,elem:h})});a.fn.bgiframe&&h.bgiframe();l.using&&
(g=function(a){var c=v.left-n.left,e=c+t-m,f=v.top-n.top,u=f+s-o,g={target:{element:j,left:v.left,top:v.top,width:t,height:s},element:{element:h,left:n.left,top:n.top,width:m,height:o},horizontal:0>e?"left":0<c?"right":"center",vertical:0>u?"top":0<f?"bottom":"middle"};t<m&&b(c+e)<t&&(g.horizontal="center");s<o&&b(f+u)<s&&(g.vertical="middle");g.important=d(b(c),b(e))>d(b(f),b(u))?"horizontal":"vertical";l.using.call(this,a,g)});h.offset(a.extend(n,{using:g}))})};a.ui.position={fit:{left:function(a,
b){var c=b.within,e=c.isWindow?c.scrollLeft:c.offset.left,f=c.width,g=a.left-b.collisionPosition.marginLeft,c=e-g,j=g+b.collisionWidth-f-e;b.collisionWidth>f?0<c&&0>=j?(e=a.left+c+b.collisionWidth-f-e,a.left+=c-e):a.left=0<j&&0>=c?e:c>j?e+f-b.collisionWidth:e:a.left=0<c?a.left+c:0<j?a.left-j:d(a.left-g,a.left)},top:function(a,b){var c=b.within,e=c.isWindow?c.scrollTop:c.offset.top,f=b.within.height,g=a.top-b.collisionPosition.marginTop,c=e-g,j=g+b.collisionHeight-f-e;b.collisionHeight>f?0<c&&0>=j?
(e=a.top+c+b.collisionHeight-f-e,a.top+=c-e):a.top=0<j&&0>=c?e:c>j?e+f-b.collisionHeight:e:a.top=0<c?a.top+c:0<j?a.top-j:d(a.top-g,a.top)}},flip:{left:function(a,c){var d=c.within,e=d.offset.left+d.scrollLeft,f=d.width,g=d.isWindow?d.scrollLeft:d.offset.left,j=a.left-c.collisionPosition.marginLeft,d=j-g,h=j+c.collisionWidth-f-g,j="left"===c.my[0]?-c.elemWidth:"right"===c.my[0]?c.elemWidth:0,i="left"===c.at[0]?c.targetWidth:"right"===c.at[0]?-c.targetWidth:0,m=-2*c.offset[0];if(0>d){if(e=a.left+j+
i+m+c.collisionWidth-f-e,0>e||e<b(d))a.left+=j+i+m}else if(0<h&&(e=a.left-c.collisionPosition.marginLeft+j+i+m-g,0<e||b(e)<h))a.left+=j+i+m},top:function(a,c){var d=c.within,e=d.offset.top+d.scrollTop,f=d.height,g=d.isWindow?d.scrollTop:d.offset.top,h=a.top-c.collisionPosition.marginTop,d=h-g,i=h+c.collisionHeight-f-g,h="top"===c.my[1]?-c.elemHeight:"bottom"===c.my[1]?c.elemHeight:0,k="top"===c.at[1]?c.targetHeight:"bottom"===c.at[1]?-c.targetHeight:0,m=-2*c.offset[1];if(0>d){if(e=a.top+h+k+m+c.collisionHeight-
f-e,a.top+h+k+m>d&&(0>e||e<b(d)))a.top+=h+k+m}else if(0<i&&(e=a.top-c.collisionPosition.marginTop+h+k+m-g,a.top+h+k+m>i&&(0<e||b(e)<i)))a.top+=h+k+m}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments);a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments);a.ui.position.fit.top.apply(this,arguments)}}};(function(){var b,c,d,e,f=document.getElementsByTagName("body")[0];d=document.createElement("div");b=document.createElement(f?
"div":"body");c={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};f&&a.extend(c,{position:"absolute",left:"-1000px",top:"-1000px"});for(e in c)b.style[e]=c[e];b.appendChild(d);c=f||document.documentElement;c.insertBefore(b,c.firstChild);d.style.cssText="position: absolute; left: 10.7432222px;";d=a(d).offset().left;a.support.offsetFractions=10<d&&11>d;b.innerHTML="";c.removeChild(b)})();!1!==a.uiBackCompat&&function(a){var b=a.fn.position;a.fn.position=function(c){if(!c||!c.offset)return b.call(this,
c);var d=c.offset.split(" "),e=c.at.split(" ");1===d.length&&(d[1]=d[0]);/^\d/.test(d[0])&&(d[0]="+"+d[0]);/^\d/.test(d[1])&&(d[1]="+"+d[1]);1===e.length&&(/left|center|right/.test(e[0])?e[1]="center":(e[1]=e[0],e[0]="center"));return b.call(this,a.extend(c,{at:e[0]+d[0]+" "+e[1]+d[1],offset:i}))}}(jQuery)})(jQuery);