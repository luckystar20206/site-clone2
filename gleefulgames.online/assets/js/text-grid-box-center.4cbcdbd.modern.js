(window.webpackJsonp=window.webpackJsonp||[]).push([[202,6,34,207],{286:function(t,n,e){"use strict";e.r(n);var o=e(0).a.extend({name:"CtaSkin",computed:{theme(){return this.$store.state.landerSetup.skin.name}}}),r=e(29),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{staticClass:"cta-parent"},[n("".concat(t.theme,"Cta"),{tag:"component"},[t._t("default")],2)],1)}),[],!1,null,null,null);n.default=component.exports},287:function(t,n,e){t.exports={}},289:function(t,n,e){"use strict";e(287)},290:function(t,n,e){"use strict";e.r(n);var o=e(0).a.extend({name:"BoxSkin",data(){return{theme:this.$store.state.landerSetup.skin.name}}}),r=(e(289),e(29)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",[n("div",{attrs:{id:"box"}},[n("".concat(t.theme,"Box"),{tag:"component"},[t._t("default")],2)],1)])}),[],!1,null,"960bf170",null);n.default=component.exports},304:function(t,n,e){t.exports={}},325:function(t,n,e){"use strict";e(304)},332:function(t,n,e){"use strict";e.r(n);var o=e(0).a.extend({name:"TextGrid",props:{content:{type:Object,required:!0},plugins:{type:Array,required:!0}},data(){return{colAmount:1,componentContent:this.content,componentPlugins:this.plugins,language:this.$store.state.language}},mounted(){this.changeGrid(),window.addEventListener("resize",this.changeGrid)},beforeDestroy(){window.removeEventListener("resize",this.changeGrid)},methods:{nextStep(t){Object.keys(t).some((n=>null!==t[n]))?this.$emit("nextStep",t):this.$emit("nextStep")},changeGrid(){var t=window.innerWidth;this.colAmount=t<=576?this.componentContent.mobile_col_number:t>576&&t<=1024?this.componentContent.tablet_col_number:this.componentContent.desktop_col_number}}}),r=(e(325),e(29)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{attrs:{id:"TextGridParent"}},[n("div",{staticClass:"content-wrapper"},[0!==t.componentPlugins.length?n("div",{staticClass:"plugins"},t._l(t.componentPlugins,(function(t,i){return n(t.plugin.name,{key:i,tag:"component",attrs:{variables:t}})})),1):t._e(),t._v(" "),n("div",{staticClass:"text-grid-top-text"},[n("h1",{staticClass:"text-grid-title"},[n("span",{domProps:{innerHTML:t._s(t.componentContent.assets.title.translations[t.language]?t.$convertString(t.componentContent.assets.title.translations[t.language][0]):t.$convertString(t.componentContent.assets.title.translations.en[0]))}})]),t._v(" "),t.componentContent.assets.subtitle?n("h1",{staticClass:"text-grid-subtitle"},[n("span",{domProps:{innerHTML:t._s(t.componentContent.assets.subtitle.translations[t.language]?t.$convertString(t.componentContent.assets.subtitle.translations[t.language][0]):t.$convertString(t.componentContent.assets.subtitle.translations.en[0]))}})]):t._e()]),t._v(" "),n("div",{staticClass:"grid-container"},[n("div",{staticClass:"grid"},t._l(t.componentContent.options,(function(e,o){return n("div",{key:o,staticClass:"grid-item",style:{flexBasis:"calc(100%/".concat(t.colAmount," - 7.5px)")}},[n("div",{staticClass:"button-wrapper"},[n("button",{on:{click:function(n){return t.nextStep(e.override)}}},[n("cta",[n("span",{domProps:{innerHTML:t._s(e.text.translations[t.language]?t.$convertString(e.text.translations[t.language][0]):t.$convertString(e.text.translations.en[0]))}})])],1),t._v(" "),e.subtext?n("div",{staticClass:"grid-sub-label"},[n("h1",[n("span",{domProps:{innerHTML:t._s(e.subtext.translations[t.language]?t.$convertString(e.subtext.translations[t.language][0]):t.$convertString(e.subtext.translations.en[0]))}})])]):t._e()])])})),0)])])])}),[],!1,null,"64b0cc61",null);n.default=component.exports;installComponents(component,{Cta:e(286).default})},418:function(t,n,e){t.exports={}},620:function(t,n,e){"use strict";e(418)},822:function(t,n,e){"use strict";e.r(n);var o=e(0).a.extend({name:"TextGridBoxCenter",props:{content:{type:Object,required:!0},plugins:{type:Array,required:!0}},data(){return{componentContent:this.content,componentPlugins:this.plugins}},methods:{nextStep(data){this.$emit("nextStep",data)}}}),r=(e(620),e(29)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{attrs:{id:"TextGridBoxCenter"}},[n("div",{staticClass:"component-wrapper"},[n("box",[n("TextGridParent",{attrs:{content:t.componentContent,plugins:t.componentPlugins},on:{nextStep:t.nextStep}})],1)],1)])}),[],!1,null,"75c8f182",null);n.default=component.exports;installComponents(component,{TextGridParent:e(332).default,Box:e(290).default})}}]);