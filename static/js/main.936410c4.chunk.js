(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,r){e.exports=r(45)},29:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){},42:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(20),c=r.n(i),o=(r(29),r(21)),s=r(5),m=r(6),l=r(8),h=r(7),p=r(9),u=(r(30),r(10)),g=r(11),d=(r(31),function(e){return a.a.createElement("main",{className:"hero"},a.a.createElement("h2",null,"My equipment"),a.a.createElement("section",null,a.a.createElement("img",{src:e.state.sword.img,alt:"Sword 1"}),a.a.createElement("div",null,a.a.createElement("span",null,e.state.sword.name),a.a.createElement("span",null,"DMG: ",e.state.sword.dmg),a.a.createElement("span",null,"Cost: ",e.state.sword.cost))),a.a.createElement("section",null,a.a.createElement("img",{src:e.state.armor.img,alt:"Sword 1"}),a.a.createElement("div",null,a.a.createElement("span",null,e.state.armor.name),a.a.createElement("span",null,"Def : ",e.state.armor.armor),a.a.createElement("span",null,"Cost: ",e.state.armor.cost))))}),f=r(13),w=(r(32),function(e){return a.a.createElement("div",{className:"card",onClick:function(){return e.handleCardItem(e.item.cost,e.item)}},a.a.createElement("img",{src:e.item.img,alt:e.item.name}),a.a.createElement("h3",null,e.item.name),a.a.createElement("span",null,"DMG / Armor: ",e.item.dmg?e.item.dmg:e.item.armor," "),a.a.createElement("span",null,"Cost: ",e.item.cost," gold"))}),E=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(r=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={items:[{id:1,name:"Witcher's steel sword",dmg:20,type:"sword",img:"https://vignette.wikia.nocookie.net/witcher/images/7/73/Sword_Witcher%27s_Steel_Blade.png/revision/latest?cb=20170504205815",cost:250},{id:2,name:"Ursine armor",armor:25,type:"armor",img:"https://vignette.wikia.nocookie.net/witcher/images/d/d0/Tw3_ursine_armor.png/revision/latest?cb=20151008141254",cost:200},{id:3,name:"G'valchir",type:"sword",dmg:30,img:"https://vignette.wikia.nocookie.net/witcher/images/9/9e/Weapons_Mahakaman_rune_sihill.png/revision/latest?cb=20170504203531",cost:450},{id:5,name:"Illegal sword",dmg:45,type:"sword",img:"https://vignette.wikia.nocookie.net/witcher/images/e/e9/Weapons_Illegal_Sword.png/revision/latest?cb=20170504204011",cost:720},{id:6,name:"Ard'aenye",dmg:65,type:"sword",img:"https://vignette.wikia.nocookie.net/witcher/images/b/b8/Weapons_ardaeyne.png/revision/latest?cb=20170504204300",cost:1350},{id:7,name:"Enhanced Ursine armor",armor:40,type:"armor",img:"https://vignette.wikia.nocookie.net/witcher/images/2/22/Tw3_ursine_armor_enhanced.png/revision/latest?cb=20151008143436",cost:515},{id:8,name:"Superior Ursine armor",armor:55,type:"armor",img:"https://vignette.wikia.nocookie.net/witcher/images/f/fd/Tw3_ursine_armor_superior.png/revision/latest?cb=20151008151740",cost:820},{id:9,name:"Mastercrafted Ursine armor",armor:75,type:"armor",img:"https://vignette.wikia.nocookie.net/witcher/images/9/93/Tw3_ursine_armor_mastercrafted.png/revision/latest?cb=20151008153808",cost:1150},{id:10,name:"Grandmaster Ursine armor",armor:95,type:"armor",img:"https://vignette.wikia.nocookie.net/witcher/images/0/0a/Tw3_armor_bear_armor_4.png/revision/latest?cb=20160531143958",cost:1500}]},r}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=Object(f.a)(this.state.items).map(function(t){return a.a.createElement(w,{key:t.id,item:t,handleCardItem:e.props.handleCardItem})});return a.a.createElement("main",{className:"shop"},a.a.createElement("h2",null," Store "),a.a.createElement("section",null,t))}}]),t}(n.Component),v=(r(33),function(e){var t="order/".concat(e.monster.name),r=e.monster,n=r.name,i=r.icon,c=r.prize;return a.a.createElement("li",null,a.a.createElement(u.b,{to:t,className:"orderElement"},a.a.createElement("section",null,a.a.createElement("h4",null," ",n," "),a.a.createElement("p",null," Prize : ",c)),a.a.createElement("img",{src:i,alt:n})),"  ")}),k=(r(42),r(43),function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(r=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={witcherHp:1e3,myTurn:!0},r.fightTurn=function(){var e=r.state,t=e.intervalID,n=e.myTurn,a=e.monsterDmg;n?(r.setState(function(e){return{witcherHp:e.witcherHp-(a-r.props.witcher.armor.armor<0?1:a-r.props.witcher.armor.armor),myTurn:!e.myTurn}}),r.isFightOver(t,r.state.witcherHp,0)):(r.setState(function(e){return{monsterHp:e.monsterHp-r.props.witcher.sword.dmg,myTurn:!e.myTurn}}),r.isFightOver(t,r.state.monsterHp,r.monster.prize))},r.isFightOver=function(e,t,n){t<=0&&(clearInterval(e),r.props.getPrize(n))},r}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Object(f.a)(this.props.monsters).filter(function(t){return t.name===e.props.name});this.monster=t[0],this.setState({intervalID:setInterval(this.fightTurn,1e3),monsterHp:this.monster.hp,monsterDmg:this.monster.dmg})}},{key:"render",value:function(){return a.a.createElement("div",{className:"battle"},a.a.createElement("section",null,a.a.createElement("img",{src:"https://store.playstation.com/store/api/chihiro/00_09_000/container/PL/pl/999/EP4497-CUSA01439_00-AV00000000000003/1553228853000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000",alt:"Geralt"}),a.a.createElement("h3",null,"Geralt"),a.a.createElement("span",null,"HP: ",this.state.witcherHp," "),a.a.createElement("div",{className:"".concat(this.state.myTurn?"sword":"")})),this.monster&&a.a.createElement("section",null,a.a.createElement("img",{src:this.monster.img,alt:this.monster.name}),a.a.createElement("h3",null,this.monster.name),a.a.createElement("span",null,"HP: ",this.state.monsterHp),a.a.createElement("div",{className:"".concat(this.state.myTurn?"":"hand")})))}}]),t}(n.Component)),b=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(r=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).monsters=[{name:"Foglet",dmg:80,icon:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/foglet_icon.jpg",prize:150,img:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/foglet.jpg",hp:450},{name:"Ghoul",dmg:55,icon:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/ghoul_icon.jpg",prize:80,img:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/ghoul.jpg",hp:550},{name:"Werewolf",dmg:95,icon:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/werewolf_icon.jpg",prize:180,img:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/werewolf.jpg",hp:700},{name:"Griffin",dmg:130,icon:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/griffin_icon.jpg",prize:230,img:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/griffin.jpg",hp:650},{name:"Woodland Spirit",dmg:150,icon:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/leshen_icon.jpg",prize:210,img:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/leshen.jpg",hp:850},{name:"Fiend",dmg:155,icon:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/fiend_icon.jpg",prize:250,img:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/fiend.jpg",hp:780},{name:"Wyvern",dmg:100,icon:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/wyvern_icon.jpg",prize:120,img:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/wyvern.jpg",hp:670},{name:"Basilisk",dmg:140,icon:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/basilisk_icon.jpg",prize:200,img:"https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/basilisk.jpg",hp:740}],r}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){for(var e=this,t=[],r=0;r<5;r++){var n=Math.floor(Math.random()*this.monsters.length);t.push(this.monsters[n])}return t=t.map(function(e,t){return a.a.createElement(v,{key:t,monster:e})}),a.a.createElement("main",{className:"order"},a.a.createElement(g.a,{path:"/order",exact:!0,render:function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Orders"),a.a.createElement("ul",null,t))}}),a.a.createElement(g.a,{path:"/order/:name",render:function(t){var r=t.match;return a.a.createElement(k,{monsters:e.monsters,name:r.params.name,witcher:e.props.witcher,getPrize:e.props.getPrize})}}))}}]),t}(n.Component),y=(r(44),function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(r=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={gold:350,armor:{id:1,name:"Ursine armor",armor:25,type:"armor",img:"https://vignette.wikia.nocookie.net/witcher/images/d/d0/Tw3_ursine_armor.png/revision/latest?cb=20151008141254",cost:200},sword:{id:2,name:"Witcher's steel sword",type:"sword",dmg:20,img:"https://vignette.wikia.nocookie.net/witcher/images/7/73/Sword_Witcher%27s_Steel_Blade.png/revision/latest?cb=20170504205815",cost:250}},r.handleCardItem=function(e,t){e<r.state.gold?r.setState(function(r){return Object(o.a)({gold:r.gold-e},t.type,t)}):alert("Not enought gold")},r.getPrize=function(e){r.setState(function(t){return{gold:t.gold+e}})},r}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(u.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"blockPage"}," Rotate your device ",a.a.createElement("br",null)," ",a.a.createElement("i",{className:"fas fa-sync-alt"})),a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement(u.c,{to:"/",exact:!0,className:"buttonMenu"},a.a.createElement("li",null)),a.a.createElement(u.c,{to:"/shop",className:"buttonMenu"},a.a.createElement("li",null,"Gold: ",this.state.gold)),a.a.createElement(u.c,{to:"/order",className:"buttonMenu"},a.a.createElement("li",null)))),a.a.createElement(g.a,{path:"/",exact:!0,render:function(){return a.a.createElement(d,{state:e.state})}}),a.a.createElement(g.a,{path:"/shop",render:function(){return a.a.createElement(E,{handleCardItem:e.handleCardItem})}}),a.a.createElement(g.a,{path:"/order",render:function(){return a.a.createElement(b,{witcher:e.state,getPrize:e.getPrize})}})))}}]),t}(n.Component));c.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.936410c4.chunk.js.map