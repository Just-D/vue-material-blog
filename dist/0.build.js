/*!
 * This file is created by longjw 
 *  email : hilongjw@gmail.com 
 *  updated_at : Sat Jan 09 2016 11:39:21 GMT+0800 (中国标准时间)
 */
webpackJsonp([0],{31:function(t,e,o){var a,s;o(119),a=o(66),s=o(137),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},66:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(8),n=(a(s),o(4)),i=a(n),l=i["default"].state.Cloud;e["default"]={data:function(){var t=!0,e="",o=l.User.current();return o?e=o.getUsername():t=!1,{info:{logined:t,user:{name:e}},site:{name:"Cov Blog",skip:0},posts:[]}},asyncData:function(t,e){var o=this;this.loadPost(0,function(e){t({posts:e}),o.site.skip=10,o.$nextTick(function(){componentHandler.upgradeAllRegistered()})})},ready:function(){window.scrollTop=0},computed:{loginState:function(){return i["default"].state.logined}},methods:{showLogin:function(){i["default"].actions.showLogin(),document.getElementById("indexDrawer").setAttribute("class","mdl-layout__drawer"),document.getElementsByClassName("mdl-layout__obfuscator")[0].setAttribute("class","mdl-layout__obfuscator"),this.$nextTick(function(){componentHandler.upgradeAllRegistered()})},hideLogin:function(t){return t.target==document.getElementById("showLogin")?!0:(i["default"].actions.hideLogin(),void i["default"].actions.hideSign())},showModal:function(){i["default"].actions.showModal("提示","你的文章太过糟糕，不能完成提交"),document.getElementById("indexDrawer").setAttribute("class","mdl-layout__drawer"),document.getElementsByClassName("mdl-layout__obfuscator")[0].setAttribute("class","mdl-layout__obfuscator"),this.$nextTick(function(){componentHandler.upgradeAllRegistered()})},loadPost:function(t,e){var o=l.Object.extend("Post"),a=new l.Query(o),s=[];a.addDescending("updatedAt"),a.skip(t),a.limit(10),a.include("author"),a.find({success:function(t){for(var o=null,a=0;a<t.length;a++)o=t[a],s.push({id:o.id,title:o.get("title"),frontcover:o.get("frontcover"),text:o.get("text"),author:o.get("author").getUsername(),avatar:o.get("author").get("avatar"),time:o.updatedAt,favorite:o.get("favorite"),comment:o.get("comment")});e(s)},error:function(t){console.log("Error: "+t.code+" "+t.message)}})},clickMore:function(){var t=this;this.loadPost(this.site.skip,function(e){for(var o=0;o<e.length;o++)t.posts.push(e[o]);t.site.skip=t.site.skip+10,t.$nextTick(function(){componentHandler.upgradeAllRegistered()})})},goEntry:function(t){window.scrollTop=0,this.$route.router.go("entry/"+t)}}}},108:function(t,e,o){e=t.exports=o(2)(),e.push([t.id,"",""])},119:function(t,e,o){var a=o(108);"string"==typeof a&&(a=[[t.id,a,""]]);o(3)(a,{});a.locals&&(t.exports=a.locals)},137:function(t,e){t.exports='<div @click=hideLogin class="cov-blog mdl-layout mdl-js-layout has-drawer is-upgraded"><header class="mdl-layout__header mdl-layout__header--transparent"><div class=mdl-layout__header-row><span class=mdl-layout-title>{{site.name}}</span></div></header><div id=indexDrawer class=mdl-layout__drawer><span class=mdl-layout-title>{{site.name}}</span><nav class=mdl-navigation><a class=mdl-navigation__link v-if=loginState.value>{{loginState.user.getUsername()}}</a> <a class=mdl-navigation__link id=showLogin v-if=!loginState.value v-tap=showLogin>Login</a> <a class=mdl-navigation__link v-link="{path:\'/write\'}">New Post</a> <a class=mdl-navigation__link v-tap=showModal>Search</a> <a class=mdl-navigation__link v-link="\'entry/568f419000b0bca077d8caf4\'">About</a></nav></div><main class=mdl-layout__content><div class="cov-blog__posts mdl-grid"><div v-tap=goEntry(post.id) class="mdl-card on-the-road-again mdl-cell mdl-cell--12-col" v-for="post in posts"><div class="mdl-card__media mdl-color-text--grey-50" :style="{\'background-image\': \'url(\'+post.frontcover+\')\'}"><h3><a>{{post.title}}</a></h3></div><div class="mdl-color-text--grey-600 mdl-card__supporting-text">{{post.text | shorttext}}</div><div class="mdl-card__supporting-text meta mdl-color-text--grey-600"><div class=minilogo><img :src=post.avatar alt=""></div><div><strong>{{post.author}}</strong> <span>{{post.time | timeago}}</span></div></div></div><nav class="demo-nav mdl-cell mdl-cell--12-col"><div class=section-spacer></div><a v-tap=clickMore class=demo-nav__button title="show more">More <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"><i class=material-icons role=presentation>arrow_forward</i></button></a></nav></div></main></div>'}});