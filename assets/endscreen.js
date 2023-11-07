(function(g){var window=this;'use strict';var Bob=function(a,b){a.Ra("onAutonavCoundownStarted",b)},i6=function(a,b,c){g.Gu(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Jg(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.NS&&(b.lengthText?(e=b.lengthText||null,f=b.dw||null):b.lengthSeconds&&(e=g.TG(b.lengthSeconds),f=g.TG(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.hQa(d).type;var l=b instanceof g.NS?b.isLivePlayback:null,m=b instanceof g.NS?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],t=[];n&&r.push(n);p&&(r.push(p),t.push(p));q&&t.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.iK("Watch $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Qk(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:t.join(" \u2022 "),autoplayAlternativeHeader:b.ws};b instanceof g.MS&&(c.playlist_length=b.playlistLength);a.update(c)},j6=function(a){var b=a.U(),c=b.D;
g.W.call(this,{I:"a",S:"ytp-autonav-suggestion-card",W:{href:"{{url}}",target:c?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",Ma:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],W:{style:"{{background}}"},V:[{I:"div",W:{"aria-label":"{{timestamp}}"},Ma:["ytp-autonav-timestamp"],xa:"{{duration}}"},{I:"div",Ma:["ytp-autonav-live-stamp"],xa:"Live"},{I:"div",
Ma:["ytp-autonav-upcoming-stamp"],xa:"Upcoming"},{I:"div",S:"ytp-autonav-list-overlay",V:[{I:"div",S:"ytp-autonav-mix-text",xa:"Mix"},{I:"div",S:"ytp-autonav-mix-icon"}]}]},{I:"div",Ma:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],xa:"{{title}}"},{I:"div",Ma:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],xa:"{{author}}"},{I:"div",Ma:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],xa:"{{views_and_publish_time}}"}]});this.J=a;this.suggestion=
null;this.j=c;this.Sa("click",this.onClick);this.Sa("keypress",this.onKeyPress)},k6=function(a,b){b=void 0===b?!1:b;
g.W.call(this,{I:"div",S:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.K=b;this.G=void 0;this.C=0;this.container=new g.W({I:"div",S:"ytp-autonav-endscreen-countdown-container"});g.L(this,this.container);this.container.Ea(this.element);b=a.U();var d=b.D;this.J=a;this.suggestion=null;this.onVideoDataChange("newdata",this.J.getVideoData());this.T(a,"videodatachange",this.onVideoDataChange);this.j=new g.W({I:"div",S:"ytp-autonav-endscreen-upnext-container",W:{"aria-label":"{{aria_label}}",
"data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-header"},{I:"div",S:"ytp-autonav-endscreen-upnext-alternative-header",xa:"{{autoplayAlternativeHeader}}"},{I:"a",S:"ytp-autonav-endscreen-link-container",W:{href:"{{url}}",target:d?b.Y:""},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-thumbnail",W:{style:"{{background}}"},V:[{I:"div",W:{"aria-label":"{{timestamp}}"},Ma:["ytp-autonav-timestamp"],
xa:"{{duration}}"},{I:"div",Ma:["ytp-autonav-live-stamp"],xa:"Live"},{I:"div",Ma:["ytp-autonav-upcoming-stamp"],xa:"Upcoming"}]},{I:"div",S:"ytp-autonav-endscreen-video-info",V:[{I:"div",S:"ytp-autonav-endscreen-premium-badge"},{I:"div",S:"ytp-autonav-endscreen-upnext-title",xa:"{{title}}"},{I:"div",S:"ytp-autonav-endscreen-upnext-author",xa:"{{author}}"},{I:"div",S:"ytp-autonav-view-and-date",xa:"{{views_and_publish_time}}"},{I:"div",S:"ytp-autonav-author-and-view",xa:"{{author_and_views}}"}]}]}]});
g.L(this,this.j);this.j.Ea(this.container.element);d||this.T(this.j.Fa("ytp-autonav-endscreen-link-container"),"click",this.uS);this.J.xb(this.container.element,this,115127);this.J.xb(this.j.Fa("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.W({I:"div",S:"ytp-autonav-overlay"});g.L(this,this.overlay);this.overlay.Ea(this.container.element);this.B=new g.W({I:"div",S:"ytp-autonav-endscreen-button-container"});g.L(this,this.B);this.B.Ea(this.container.element);this.cancelButton=
new g.W({I:"button",Ma:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],W:{"aria-label":"Cancel autoplay"},xa:"Cancel"});g.L(this,this.cancelButton);this.cancelButton.Ea(this.B.element);this.cancelButton.Sa("click",this.U0,this);this.J.xb(this.cancelButton.element,this,115129);this.playButton=new g.W({I:"a",Ma:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button",
b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],W:{href:"{{url}}",role:"button","aria-label":"Play next video"},xa:"Play Now"});g.L(this,this.playButton);this.playButton.Ea(this.B.element);this.playButton.Sa("click",this.uS,this);this.J.xb(this.playButton.element,this,115130);this.D=new g.uu(function(){Cob(c)},500);
g.L(this,this.D);this.tS();this.T(a,"autonavvisibility",this.tS);this.J.L("web_autonav_color_transition")&&(this.T(a,"autonavchange",this.T0),this.T(a,"onAutonavCoundownStarted",this.v7))},l6=function(a){var b=a.J.Pk(!0,a.J.isFullscreen());
g.Gu(a.container.element,"ytp-autonav-endscreen-small-mode",a.wg(b));g.Gu(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.nK);g.Gu(a.J.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.J.zf());g.Gu(a.J.getRootNode(),"countdown-running",a.Tk());g.Gu(a.container.element,"ytp-player-content",a.J.zf());g.Nr(a.overlay.element,{width:b.width+"px"});if(!a.Tk()){a.J.zf()?Dob(a,Math.round(Eob(a)/1E3)):Dob(a);b=!!a.suggestion&&!!a.suggestion.ws;var c=a.J.zf()||!b;
g.Gu(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.Gu(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.bG(a.B,a.J.zf());g.Gu(a.element,"ytp-enable-w2w-color-transitions",Fob(a))}},Cob=function(a){var b=Eob(a),c=Math,d=c.min;
var e=a.C?Date.now()-a.C:0;c=d.call(c,e,b);Dob(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Tk()?a.select(!0):a.Tk()&&a.D.start()},Eob=function(a){if(a.J.isFullscreen()){var b;
a=null==(b=a.J.getVideoData())?void 0:b.DB;return-1===a||void 0===a?8E3:a}return 0<=a.J.Ps()?a.J.Ps():g.wJ(a.J.U().experiments,"autoplay_time")||1E4},Fob=function(a){var b;
return!(null==(b=a.J.getVideoData())||!b.watchToWatchTransitionRenderer)},Dob=function(a,b){b=void 0===b?-1:b;
a=a.j.Fa("ytp-autonav-endscreen-upnext-header");g.zf(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.xf("Up next in $SECONDS".slice(0,d)));var e=g.tf("span");g.Au(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Ff(e,b);a.appendChild(e);a.appendChild(g.xf("Up next in $SECONDS".slice(d+c.length)));return}}g.Ff(a,"Up next")},m6=function(a,b){g.W.call(this,{I:"div",
Ma:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},n6=function(a){g.W.call(this,{I:"div",
Ma:["ytp-upnext","ytp-player-content"],W:{"aria-label":"{{aria_label}}"},V:[{I:"div",S:"ytp-cued-thumbnail-overlay-image",W:{style:"{{background}}"}},{I:"span",S:"ytp-upnext-top",V:[{I:"span",S:"ytp-upnext-header",xa:"Up Next"},{I:"span",S:"ytp-upnext-title",xa:"{{title}}"},{I:"span",S:"ytp-upnext-author",xa:"{{author}}"}]},{I:"a",S:"ytp-upnext-autoplay-icon",W:{role:"button",href:"{{url}}","aria-label":"Play next video"},V:[{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
V:[{I:"circle",S:"ytp-svg-autoplay-circle",W:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",S:"ytp-svg-autoplay-ring",W:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",S:"ytp-svg-fill",W:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",S:"ytp-upnext-bottom",V:[{I:"span",S:"ytp-upnext-cancel"},{I:"span",S:"ytp-upnext-paused",
xa:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.G=this.Fa("ytp-svg-autoplay-ring");this.C=this.notification=this.j=this.suggestion=null;this.D=new g.uu(this.PG,5E3,this);this.B=0;var b=this.Fa("ytp-upnext-cancel");this.cancelButton=new g.W({I:"button",Ma:["ytp-upnext-cancel-button","ytp-button"],W:{tabindex:"0","aria-label":"Cancel autoplay"},xa:"Cancel"});g.L(this,this.cancelButton);this.cancelButton.Sa("click",this.V0,this);this.cancelButton.Ea(b);this.cancelButton&&this.api.xb(this.cancelButton.element,
this,115129);g.L(this,this.D);this.api.xb(this.element,this,18788);b=this.Fa("ytp-upnext-autoplay-icon");this.T(b,"click",this.W0);this.api.xb(b,this,115130);this.vS();this.T(a,"autonavvisibility",this.vS);this.T(a,"mdxnowautoplaying",this.h8);this.T(a,"mdxautoplaycanceled",this.i8);g.Gu(this.element,"ytp-upnext-mobile",this.api.U().B)},Gob=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.DB;return-1===a||void 0===a?8E3:a}return 0<=a.api.Ps()?a.api.Ps():g.wJ(a.api.U().experiments,"autoplay_time")||1E4},Hob=function(a,b){b=Gob(a,b);
var c=Math,d=c.min;var e=(0,g.wD)()-a.B;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.G.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Tk()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Tk()&&a.j.start()},o6=function(a){m6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.W({I:"div",S:"ytp-suggestion-panel",V:[{I:"div",Ma:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],xa:"More videos"}]});this.N=new g.W({I:"div",S:"ytp-suggestions-container"});this.videos=[];this.C=null;this.G=this.K=!1;this.B=new k6(this.player);g.L(this,this.B);this.B.Ea(this.element);a.getVideoData().Ff?this.j=this.B:(this.j=new n6(a),g.nU(this.player,this.j.element,4),g.L(this,this.j));this.overlay=new g.W({I:"div",
S:"ytp-autonav-overlay-cancelled-state"});g.L(this,this.overlay);this.overlay.Ea(this.element);this.D=new g.MK(this);g.L(this,this.D);g.L(this,this.table);this.table.Ea(this.element);this.table.show();g.L(this,this.N);this.N.Ea(this.table.element);this.hide()},p6=function(a){var b=a.zf();
b!==a.G&&(a.G=b,a.player.oa("autonavvisibility"),a.G?(a.B!==a.j&&a.B.hide(),a.table.hide()):(a.B!==a.j&&a.B.show(),a.table.show()))},q6=function(a,b){g.W.call(this,{I:"button",
Ma:["ytp-watch-on-youtube-button","ytp-button"],xa:"{{content}}"});this.J=a;this.buttonType=this.buttonType=b;this.HZ();2===this.buttonType&&g.Cu(this.element,"ytp-continue-watching-button");this.Sa("click",this.onClick);this.Sa("videodatachange",this.HZ);g.bG(this,!0)},r6=function(a,b){m6.call(this,a,"embeds-lite-endscreen");
this.J=a;this.rb=b;this.J.xb(this.element,this,156943);this.watchButton=new q6(a,2);g.L(this,this.watchButton);this.watchButton.Ea(this.element);this.hide()},Iob=function(a){m6.call(this,a,"subscribecard-endscreen");
this.j=new g.W({I:"div",S:"ytp-subscribe-card",V:[{I:"img",S:"ytp-author-image",W:{src:"{{profilePicture}}"}},{I:"div",S:"ytp-subscribe-card-right",V:[{I:"div",S:"ytp-author-name",xa:"{{author}}"},{I:"div",S:"html5-subscribe-button-container"}]}]});g.L(this,this.j);this.j.Ea(this.element);var b=a.getVideoData();this.subscribeButton=new g.gW("Subscribe",null,"Unsubscribe",null,!0,!1,b.Fl,b.subscribed,"trailer-endscreen",null,a);g.L(this,this.subscribeButton);this.subscribeButton.Ea(this.j.Fa("html5-subscribe-button-container"));
this.T(a,"videodatachange",this.Qa);this.Qa();this.hide()},s6=function(a){var b=a.U(),c=g.fL||g.YR?{style:"will-change: opacity"}:void 0,d=b.D,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.W.call(this,{I:"a",Ma:e,W:{href:"{{url}}",target:d?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},V:[{I:"div",S:"ytp-videowall-still-image",W:{style:"{{background}}"}},{I:"span",S:"ytp-videowall-still-info",W:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-info-bg",V:[{I:"span",S:"ytp-videowall-still-info-content",W:c,V:[{I:"span",S:"ytp-videowall-still-info-title",xa:"{{title}}"},
{I:"span",S:"ytp-videowall-still-info-author",xa:"{{author_and_views}}"},{I:"span",S:"ytp-videowall-still-info-live",xa:"Live"},{I:"span",S:"ytp-videowall-still-info-duration",xa:"{{duration}}"}]}]}]},{I:"span",Ma:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],W:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-icon"},"Playlist",{I:"span",S:"ytp-videowall-still-listlabel-length",V:[" (",{I:"span",xa:"{{playlist_length}}"},")"]}]},{I:"span",Ma:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],W:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",S:"ytp-videowall-still-listlabel-length",xa:" (50+)"}]}]});this.suggestion=null;this.B=d;this.api=a;this.j=new g.MK(this);g.L(this,this.j);this.Sa("click",this.onClick);this.Sa("keypress",this.onKeyPress);this.j.T(a,"videodatachange",this.onVideoDataChange);a.jg(this.element,this);this.onVideoDataChange()},t6=function(a){m6.call(this,a,"videowall-endscreen");
var b=this;this.J=a;this.C=0;this.stills=[];this.D=this.videoData=null;this.G=this.N=!1;this.Y=null;this.B=new g.MK(this);g.L(this,this.B);this.K=new g.uu(function(){g.Cu(b.element,"ytp-show-tiles")},0);
g.L(this,this.K);var c=new g.W({I:"button",Ma:["ytp-button","ytp-endscreen-previous"],W:{"aria-label":"Previous"},V:[g.hG()]});g.L(this,c);c.Ea(this.element);c.Sa("click",this.b1,this);this.table=new g.ZF({I:"div",S:"ytp-endscreen-content"});g.L(this,this.table);this.table.Ea(this.element);c=new g.W({I:"button",Ma:["ytp-button","ytp-endscreen-next"],W:{"aria-label":"Next"},V:[g.iG()]});g.L(this,c);c.Ea(this.element);c.Sa("click",this.Z0,this);a.getVideoData().Ff?this.j=new k6(a,!0):this.j=new n6(a);
g.L(this,this.j);g.nU(this.player,this.j.element,4);a.xb(this.element,this,158789);this.hide()},u6=function(a){return g.oU(a.player)&&a.oC()&&!a.D},v6=function(a){var b=a.zf();
b!==a.N&&(a.N=b,a.player.oa("autonavvisibility"))},w6=function(a){m6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new q6(a,1);g.L(this,this.watchButton);this.watchButton.Ea(this.element);g.Zcb(a)&&(this.j=new g.s2(a,g.aU(a)),g.L(this,this.j),this.B=new g.W({I:"div",Ma:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],W:{tabIndex:"-1"},V:[this.j]}),g.L(this,this.B),this.j.Ea(this.B.element),this.B.Ea(this.element));a.xb(this.element,this,156914);this.hide()},Mob=function(a){g.uV.call(this,a);
var b=this;this.endScreen=null;this.B=this.j=this.C=this.D=!1;this.listeners=new g.MK(this);g.L(this,this.listeners);var c=a.U(),d=a.getVideoData();d=d&&0!==d.limitedPlaybackDurationInSeconds;g.wC(g.hS(c))&&d&&!g.jU(a)?(this.B=!0,this.endScreen=new r6(a,g.aU(a))):g.kU(a)?this.endScreen=new w6(a):Job(a)?(this.D=!0,Kob(this),this.j?this.endScreen=new o6(a):this.endScreen=new t6(a)):c.Yg?this.endScreen=new Iob(a):this.endScreen=new m6(a);g.L(this,this.endScreen);g.nU(a,this.endScreen.element,4);Lob(this);
this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.cK("endscreen"),function(e){b.onCueRangeEnter(e)});
this.listeners.T(a,g.dK("endscreen"),function(e){b.onCueRangeExit(e)})},Kob=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Hl&&a.C===b.Ff)return!1;a.j=b.Hl;a.C=b.Ff;return!0},Job=function(a){a=a.U();
return a.Ld&&!a.Yg},Lob=function(a){a.player.hf("endscreen");
var b=a.player.getVideoData();b=new g.bK(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.bK(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.uf([b,c])};
g.UX.prototype.aB=g.ha(37,function(a){this.aQ!==a&&(this.aQ=a,this.El())});
g.LW.prototype.Er=g.ha(36,function(a){this.j!==a&&(this.j=a,this.Qa())});
g.UX.prototype.Er=g.ha(35,function(a){this.shareButton&&this.shareButton.Er(a)});
g.GW.prototype.Dr=g.ha(34,function(a){this.j!==a&&(this.j=a,this.Qa())});
g.UX.prototype.Dr=g.ha(33,function(a){this.overflowButton&&this.overflowButton.Dr(a)});
g.YV.prototype.tF=g.ha(32,function(a){this.bQ!==a&&(this.bQ=a,this.Wp())});
g.fU.prototype.Ps=g.ha(6,function(){return this.app.Ps()});
g.U0.prototype.Ps=g.ha(5,function(){return this.getVideoData().gU});g.x(j6,g.W);j6.prototype.select=function(){this.J.uo(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.MC||void 0)&&this.J.tb(this.element)};
j6.prototype.onClick=function(a){g.FU(a,this.J,this.j,this.suggestion.sessionData||void 0)&&this.select()};
j6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};g.x(k6,g.W);g.k=k6.prototype;g.k.ZF=function(a){this.suggestion!==a&&(this.suggestion=a,i6(this.j,a),this.playButton.updateValue("url",this.suggestion.Qk()),l6(this))};
g.k.Tk=function(){return 0<this.C};
g.k.gB=function(){this.Tk()||(this.C=Date.now(),Cob(this),Bob(this.J,Eob(this)),g.Gu(this.J.getRootNode(),"countdown-running",this.Tk()))};
g.k.Fw=function(){this.Kr();Cob(this);var a=this.j.Fa("ytp-autonav-endscreen-upnext-header");a&&g.Ff(a,"Up next")};
g.k.Kr=function(){this.Tk()&&(this.D.stop(),this.C=0)};
g.k.select=function(a){this.J.nextVideo(!1,void 0===a?!1:a);this.Kr()};
g.k.uS=function(a){g.FU(a,this.J)&&(a.currentTarget===this.playButton.element?this.J.tb(this.playButton.element):a.currentTarget===this.j.Fa("ytp-autonav-endscreen-link-container")&&(a=this.j.Fa("ytp-autonav-endscreen-link-container"),this.J.Wa(a,!0),this.J.tb(a)),this.select())};
g.k.U0=function(){this.J.tb(this.cancelButton.element);g.hU(this.J,!0);this.G&&this.J.Ra("innertubeCommand",this.G)};
g.k.onVideoDataChange=function(a,b){var c;this.G=null==(c=b.x4)?void 0:c.command};
g.k.v7=function(a){if(Fob(this)){var b=this.J.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.aH(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.aH(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.aH(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.aH(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.aH(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.aH(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.Gu(this.element,"ytp-w2w-animate",!0)}};
g.k.T0=function(a){this.J.L("web_autonav_color_transition")&&2!==a&&g.Gu(this.element,"ytp-w2w-animate",!1)};
g.k.tS=function(){var a=this.J.zf();this.K&&this.Gb!==a&&g.bG(this,a);l6(this);this.J.Wa(this.container.element,a);this.J.Wa(this.cancelButton.element,a);this.J.Wa(this.j.Fa("ytp-autonav-endscreen-link-container"),a);this.J.Wa(this.playButton.element,a)};
g.k.wg=function(a){return 400>a.width||459>a.height};g.x(m6,g.W);g.k=m6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.oC=function(){return!1};
g.k.zf=function(){return!1};
g.k.fX=function(){return!1};g.x(n6,g.W);g.k=n6.prototype;g.k.PG=function(){this.notification&&(this.D.stop(),this.Pc(this.C),this.C=null,this.notification.close(),this.notification=null)};
g.k.ZF=function(a){this.suggestion=a;i6(this,a,"hqdefault.jpg")};
g.k.vS=function(){g.bG(this,this.api.zf());this.api.Wa(this.element,this.api.zf());this.api.Wa(this.Fa("ytp-upnext-autoplay-icon"),this.api.zf());this.cancelButton&&this.api.Wa(this.cancelButton.element,this.api.zf())};
g.k.q8=function(){window.focus();this.PG()};
g.k.gB=function(a){var b=this;this.Tk()||(g.GE("a11y-announce","Up Next "+this.suggestion.title),this.B=(0,g.wD)(),this.j=new g.uu(function(){Hob(b,a)},25),Hob(this,a),Bob(this.api,Gob(this,a)));
g.Eu(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.W.prototype.hide.call(this)};
g.k.Tk=function(){return!!this.j};
g.k.Fw=function(){this.Kr();this.B=(0,g.wD)();Hob(this);g.Cu(this.element,"ytp-upnext-autoplay-paused")};
g.k.Kr=function(){this.Tk()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.U().L("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.PG(),this.notification=new Notification("Up Next",{body:this.suggestion.title,icon:this.suggestion.Jg()}),this.C=this.T(this.notification,"click",this.q8),this.D.start())}this.Kr();this.api.nextVideo(!1,a)};
g.k.W0=function(a){!g.Df(this.cancelButton.element,a.target)&&g.FU(a,this.api)&&(this.api.zf()&&this.api.tb(this.Fa("ytp-upnext-autoplay-icon")),this.select())};
g.k.V0=function(){this.api.zf()&&this.cancelButton&&this.api.tb(this.cancelButton.element);g.hU(this.api,!0)};
g.k.h8=function(a){this.api.getPresentingPlayerType();this.show();this.gB(a)};
g.k.i8=function(){this.api.getPresentingPlayerType();this.Kr();this.hide()};
g.k.ya=function(){this.Kr();this.PG();g.W.prototype.ya.call(this)};g.x(o6,m6);g.k=o6.prototype;g.k.create=function(){m6.prototype.create.call(this);this.D.T(this.player,"appresize",this.IB);this.D.T(this.player,"onVideoAreaChange",this.IB);this.D.T(this.player,"videodatachange",this.onVideoDataChange);this.D.T(this.player,"autonavchange",this.wS);this.D.T(this.player,"autonavcancel",this.X0);this.onVideoDataChange()};
g.k.show=function(){m6.prototype.show.call(this);(this.K||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.hU(this.player,!1);g.oU(this.player)&&this.oC()&&!this.C?(p6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.gB():3===this.videoData.autonavState&&this.j.Fw()):(g.hU(this.player,!0),p6(this));this.IB()};
g.k.hide=function(){m6.prototype.hide.call(this);this.j.Fw();p6(this)};
g.k.IB=function(){var a=this.player.Pk(!0,this.player.isFullscreen());p6(this);l6(this.B);g.Gu(this.element,"ytp-autonav-cancelled-small-mode",this.wg(a));g.Gu(this.element,"ytp-autonav-cancelled-tiny-mode",this.rI(a));g.Gu(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Nr(this.overlay.element,{width:a.width+"px"});if(!this.G)for(a=0;a<this.videos.length;a++)g.Gu(this.videos[a].element,"ytp-suggestion-card-with-margin",1===a%2)};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length||this.player.L("web_player_autonav_empty_suggestions_fix")){var b=g.nT(this.videoData);b&&(this.j.ZF(b),this.j!==this.B&&this.B.ZF(b))}if(a&&a.length)for(b=0;b<Nob.length;++b){var c=Nob[b];if(a&&a[c]){this.videos[b]=new j6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,i6(d,c));g.L(this,this.videos[b]);this.videos[b].Ea(this.N.element)}}this.IB()}};
g.k.wS=function(a){1===a?(this.K=!1,this.C=this.videoData.clientPlaybackNonce,this.j.Kr(),this.Gb&&this.IB()):(this.K=!0,this.zf()&&(2===a?this.j.gB():3===a&&this.j.Fw()))};
g.k.X0=function(a){a?this.wS(1):(this.C=null,this.K=!1)};
g.k.oC=function(){return 1!==this.videoData.autonavState};
g.k.wg=function(a){return(910>a.width||459>a.height)&&!this.rI(a)&&!(400>=a.width||360>=a.height)};
g.k.rI=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.zf=function(){return this.Gb&&g.oU(this.player)&&this.oC()&&!this.C};
var Nob=[1,3,2,4];g.x(q6,g.W);g.k=q6.prototype;g.k.HZ=function(){switch(this.buttonType){case 1:var a="Watch again on YouTube";var b=156915;break;case 2:a="Continue watching on YouTube";b=156942;break;default:a="Continue watching on YouTube",b=156942}this.update({content:a});this.J.Wj(this.element)&&this.J.CC(this.element);this.J.xb(this.element,this,b)};
g.k.onClick=function(a){this.J.L("web_player_log_click_before_generating_ve_conversion_params")&&this.J.tb(this.element);g.GU(this.getVideoUrl(),this.J,a);this.J.L("web_player_log_click_before_generating_ve_conversion_params")||this.J.tb(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.J.getVideoUrl(a,!1,!1,!0);var b=this.J.U();if(g.ZR(b)||g.gS(b)){var c={};g.ZR(b)&&g.XT(this.J,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.yP(c,b);a=g.Gl(a,c)}return a};
g.k.Wa=function(){this.J.Wa(this.element,this.Gb&&this.Z)};
g.k.show=function(){g.W.prototype.show.call(this);this.Wa()};
g.k.hide=function(){g.W.prototype.hide.call(this);this.Wa()};
g.k.kc=function(a){g.W.prototype.kc.call(this,a);this.Wa()};g.x(r6,m6);r6.prototype.show=function(){3!==this.player.getPlayerState()&&(m6.prototype.show.call(this),this.rb.aB(!0),this.rb.Er(!0),this.J.U().Td||this.rb.Dr(!0),this.J.Wa(this.element,!0),this.watchButton.kc(!0))};
r6.prototype.hide=function(){m6.prototype.hide.call(this);this.rb.aB(!1);this.rb.Er(!1);this.rb.Dr(!1);this.J.Wa(this.element,!1);this.watchButton.kc(!1)};g.x(Iob,m6);Iob.prototype.Qa=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Fl;var b=this.subscribeButton;a.subscribed?b.j():b.B()};g.x(s6,g.W);s6.prototype.select=function(){this.api.uo(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.MC||void 0)&&this.api.tb(this.element)};
s6.prototype.onClick=function(a){if(g.ZR(this.api.U())&&this.api.L("web_player_log_click_before_generating_ve_conversion_params")){this.api.tb(this.element);var b=this.suggestion.Qk(),c={};g.ESa(this.api,c,"emb_rel_end");b=g.Gl(b,c);g.GU(b,this.api,a)}else g.FU(a,this.api,this.B,this.suggestion.sessionData||void 0)&&this.select()};
s6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};
s6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.U();this.B=a.Pd?!1:b.D};g.x(t6,m6);g.k=t6.prototype;g.k.create=function(){m6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Zp();this.B.T(this.player,"appresize",this.Zp);this.B.T(this.player,"onVideoAreaChange",this.Zp);this.B.T(this.player,"videodatachange",this.onVideoDataChange);this.B.T(this.player,"autonavchange",this.XK);this.B.T(this.player,"autonavcancel",this.Y0);a=this.videoData.autonavState;a!==this.Y&&this.XK(a);this.B.T(this.element,"transitionend",this.G9)};
g.k.destroy=function(){g.LC(this.B);g.Cb(this.stills);this.stills=[];m6.prototype.destroy.call(this);g.Eu(this.element,"ytp-show-tiles");this.K.stop();this.Y=this.videoData.autonavState};
g.k.oC=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.Gb;m6.prototype.show.call(this);g.Eu(this.element,"ytp-show-tiles");this.player.U().B?g.wu(this.K):this.K.start();(this.G||this.D&&this.D!==this.videoData.clientPlaybackNonce)&&g.hU(this.player,!1);u6(this)?(v6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.gB():3===this.videoData.autonavState&&this.j.Fw()):(g.hU(this.player,!0),v6(this));a!==this.Gb&&this.player.Wa(this.element,!0)};
g.k.hide=function(){var a=this.Gb;m6.prototype.hide.call(this);this.j.Fw();v6(this);a!==this.Gb&&this.player.Wa(this.element,!1)};
g.k.G9=function(a){a.target===this.element&&this.Zp()};
g.k.Zp=function(){var a,b,c,d;var e=(null==(a=this.videoData)?0:null==(b=a.suggestions)?0:b.length)?null==(c=this.videoData)?void 0:c.suggestions:[null==(d=this.videoData)?void 0:g.nT(d)];if(e.length){g.Cu(this.element,"ytp-endscreen-paginate");var f=this.J.Pk(!0,this.J.isFullscreen());if(a=g.aU(this.J))a=a.Lg()?48:32,f.width-=2*a;var h=f.width/f.height;d=96/54;b=a=2;var l=Math.max(f.width/96,2),m=Math.max(f.height/54,2);c=e.length;var n=Math.pow(2,2);var p=c*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-
n;for(p-=n;0<p&&(a<l||b<m);){var q=a/2,r=b/2,t=a<=l-2&&p>=r*n,u=b<=m-2&&p>=q*n;if((q+1)/r*d/h>h/(q/(r+1)*d)&&u)p-=q*n,b+=2;else if(t)p-=r*n,a+=2;else if(u)p-=q*n,b+=2;else break}d=!1;p>=3*n&&6>=c*n-p&&(4<=b||4<=a)&&(d=!0);n=96*a;p=54*b;h=n/p<h?f.height/p:f.width/n;h=Math.min(h,2);n=Math.floor(Math.min(f.width,n*h));p=Math.floor(Math.min(f.height,p*h));f=this.table.element;f.ariaLive="polite";g.Xr(f,n,p);g.Nr(f,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.ZF(g.nT(this.videoData));this.j instanceof
k6&&l6(this.j);g.Gu(this.element,"ytp-endscreen-takeover",u6(this));v6(this);n+=4;p+=4;h=0;f.ariaBusy="true";for(l=0;l<a;l++)for(m=0;m<b;m++)if(q=h,t=0,d&&l>=a-2&&m>=b-2?t=1:0===m%2&&0===l%2&&(2>m&&2>l?0===m&&0===l&&(t=2):t=2),q=g.Be(q+this.C,c),0!==t){r=this.stills[h];r||(r=new s6(this.player),this.stills[h]=r,f.appendChild(r.element));u=Math.floor(p*m/b);var z=Math.floor(n*l/a),D=Math.floor(p*(m+t)/b)-u-4,G=Math.floor(n*(l+t)/a)-z-4;g.Tr(r.element,z,u);g.Xr(r.element,G,D);g.Nr(r.element,"transitionDelay",
(m+l)/20+"s");g.Gu(r.element,"ytp-videowall-still-mini",1===t);g.Gu(r.element,"ytp-videowall-still-large",2<t);t=Math.max(G,D);g.Gu(r.element,"ytp-videowall-still-round-large",256<=t);g.Gu(r.element,"ytp-videowall-still-round-medium",96<t&&256>t);g.Gu(r.element,"ytp-videowall-still-round-small",96>=t);q=e[q];r.suggestion!==q&&(r.suggestion=q,t=r.api.U(),u=g.Bu(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",i6(r,q,u),g.ZR(t)&&!r.api.L("web_player_log_click_before_generating_ve_conversion_params")&&
(t=q.Qk(),u={},g.XT(r.api,"addEmbedsConversionTrackingParams",[u]),t=g.Gl(t,g.yP(u,"emb_rel_end")),r.updateValue("url",t)),(q=(q=q.sessionData)&&q.itct)&&r.api.Eg(r.element,q));h++}f.ariaBusy="false";g.Gu(this.element,"ytp-endscreen-paginate",h<c);for(e=this.stills.length-1;e>=h;e--)a=this.stills[e],g.Bf(a.element),g.Bb(a);this.stills.length=h}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.C=0,this.videoData=a,this.Zp())};
g.k.Z0=function(){this.C+=this.stills.length;this.Zp()};
g.k.b1=function(){this.C-=this.stills.length;this.Zp()};
g.k.fX=function(){return this.j.Tk()};
g.k.XK=function(a){1===a?(this.G=!1,this.D=this.videoData.clientPlaybackNonce,this.j.Kr(),this.Gb&&this.Zp()):(this.G=!0,this.Gb&&u6(this)&&(2===a?this.j.gB():3===a&&this.j.Fw()))};
g.k.Y0=function(a){if(a){for(a=0;a<this.stills.length;a++)this.J.Wa(this.stills[a].element,!0);this.XK(1)}else this.D=null,this.G=!1;this.Zp()};
g.k.zf=function(){return this.Gb&&u6(this)};g.x(w6,m6);w6.prototype.yD=function(){var a;return null==(a=this.j)?void 0:a.yD()};
w6.prototype.show=function(){if(3!==this.player.getPlayerState()){m6.prototype.show.call(this);var a=this.B;if(a){var b=this.j.yD();g.Gu(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.aU(this.player))||c.tF(!0);this.player.Wa(this.element,!0);this.watchButton.kc(!0)}};
w6.prototype.hide=function(){m6.prototype.hide.call(this);var a;null==(a=g.aU(this.player))||a.tF(!1);this.player.Wa(this.element,!1);this.watchButton.kc(!1)};g.x(Mob,g.uV);g.k=Mob.prototype;g.k.Yt=function(){var a=this.player.getVideoData(),b=a.mutedAutoplay;if((g.kU(this.player)||this.B)&&!b)return!0;var c;var d=!!((null==a?0:g.nT(a))||(null==a?0:null==(c=a.suggestions)?0:c.length));d=!Job(this.player)||d;a=a.pj||g.gS(a.Ia);c=this.player.YC();return d&&!a&&!c&&!b};
g.k.zf=function(){return this.endScreen.zf()};
g.k.n6=function(){return this.zf()?this.endScreen.fX():!1};
g.k.ya=function(){this.player.hf("endscreen");g.uV.prototype.ya.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.Eb().Re.get("heartbeat"),d=g.nT(a);!d||b.videoId!==d.videoId||a.iS?(this.player.uo(b.videoId,void 0,void 0,!0,!0,b),c&&c.AI("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.uV.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.uV.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.Yt()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){Lob(this);this.D&&Kob(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new o6(this.player):this.endScreen=new t6(this.player),g.L(this,this.endScreen),g.nU(this.player,this.endScreen.element,4))};g.tV("endscreen",Mob);})(_yt_player);