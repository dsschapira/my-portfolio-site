(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(3),c=a.n(o),l=(a(11),a(1)),i=a(4),s=function(e,t){switch(t.type){case"UPDATE_MODAL":return Object(l.a)({},e,{showModal:t.payload.show});case"UPDATE_BOARD":return Object(l.a)({},e,{board:t.payload.updatedBoard,players:t.payload.players});case"NEXT_TURN":return Object(l.a)({},e,{currentPlayerTurn:t.payload.currentPlayerTurn});case"SET_PLAYER":case"UPDATE_SCORE":return Object(l.a)({},e,{players:t.payload.players});case"RESET_GAME":return Object(l.a)({},e,{players:t.payload.players,currentPlayerTurn:t.payload.currentPlayerTurn,board:t.payload.board});default:return e}},u=["","","","","","","","",""],d={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8},m=["A","B","C","D","E","F","G","H","I"],p=[["A","B","C"],["D","E","F"],["G","H","I"],["A","D","G"],["B","E","H"],["C","F","I"],["A","E","I"],["C","E","G"]],E={A:[p[0],p[3],p[6]],B:[p[0],p[4]],C:[p[0],p[5],p[7]],D:[p[1],p[3]],E:[p[1],p[4],p[6]],F:[p[1],p[5]],G:[p[2],p[3],p[7]],H:[p[2],p[4]],I:[p[2],p[5],p[6]]},y={showModal:!0,numPlayers:null,currentPlayerTurn:"one",players:{one:{score:0,highScore:0,isComputer:!1,displayName:"Player 1",piece:"X",selected:[]},two:{score:0,highScore:0,isComputer:!1,displayName:"Player 2",piece:"O",selected:[]}},board:u},f=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n="X"===t?e?"Player 1 - Computer":"Player 1":e?"Player 2 - Computer":"Player 2";return{isComputer:e,displayName:n,score:a,highScore:r,piece:t,selected:[]}},h=Object(r.createContext)(y),v=function(e){var t=e.children,a=Object(r.useReducer)(s,y),o=Object(i.a)(a,2),c=o[0],d=o[1];return n.a.createElement(h.Provider,{value:{updateModal:function(e){d({type:"UPDATE_MODAL",payload:{show:e}})},updateBoard:function(e,t){d({type:"UPDATE_BOARD",payload:{updatedBoard:e,players:t}})},nextTurn:function(e){d({type:"NEXT_TURN",payload:{currentPlayerTurn:e}})},selectPlayer:function(e){var t="one"===e?"two":"one",a=Object(l.a)({},c.players);a[e]=f(!1,a[e].piece),a[t]=f(!0,a[t].piece),d({type:"SET_PLAYER",payload:{players:a}})},updateScore:function(e){d({type:"UPDATE_SCORE",payload:{players:e}})},resetGame:function(){var e=Object(l.a)({},c.players);e.one.selected=[],e.two.selected=[],d({type:"RESET_GAME",payload:{players:e,currentPlayerTurn:"one",board:u}})},swapPlayer:function(){var e=Object(l.a)({},c.players);e.one.selected=[],e.two.selected=[],e.one.isComputer=!e.one.isComputer,e.two.isComputer=!e.two.isComputer;var t=e.one.score,a=e.one.highScore;e.one.score=e.two.score,e.one.highScore=e.two.highScore,e.two.score=t,e.two.highScore=a,e.one.displayName=e.one.isComputer?"Player 1 - Computer":"Player 1",e.two.displayName=e.two.isComputer?"Player 2 - Computer":"Player 2",d({type:"RESET_GAME",payload:{players:e,currentPlayerTurn:"one",board:u}})},gameState:c}},t)},w=(a(12),a(13),a(5));a(14);function g(e,t){return e[0]===t&&e[1]===t&&e[2]===t||e[3]===t&&e[4]===t&&e[5]===t||e[6]===t&&e[7]===t&&e[8]===t||e[0]===t&&e[3]===t&&e[6]===t||e[1]===t&&e[4]===t&&e[7]===t||e[2]===t&&e[5]===t&&e[8]===t||e[0]===t&&e[4]===t&&e[8]===t||e[2]===t&&e[4]===t&&e[6]===t}function b(e,t){return function e(t,a,r,n){var o=function(e){var t=[];return e.map((function(e,a){"X"!==e&&"O"!==e&&t.push(a)})),t}(t);if(g(t,r))return{score:-100};if(g(t,a))return{score:100};if(0===o.length)return{score:0};for(var c,l=[],i=0;i<o.length;i++){var s={};if(s.index=o[i],t[o[i]]=n,n===a){var u=e(t,a,r,r);s.score=u.score}else{var d=e(t,a,r,a);s.score=d.score}t[o[i]]="",l.push(s)}if(n===a)for(var m=-99999,p=0;p<l.length;p++)l[p].score>m&&(m=l[p].score,c=p);else for(var E=9999999,y=0;y<l.length;y++)l[y].score<E&&(E=l[y].score,c=y);return l[c]}(e,t,"X"===t?"O":"X",t).index}var C=function(e,t){var a=0,r=!1;for(var n in e)if(t.indexOf(e[n])>-1&&(a+=1)>=3){r=!0;break}return r};a(15);var P=function(e){var t=Object(r.useContext)(h).gameState,a=d[e.slotId];return n.a.createElement("span",null,t.board[a])};var S=function(){var e,t,a=Object(r.useContext)(h),o=a.gameState,c=a.updateBoard,i=a.nextTurn,s=a.updateScore,u=a.resetGame,p=function(e){t.isComputer||y(d[e])},y=function(a){if(""===e[a]){e[a]=t.piece;var r=o.players;if(r[o.currentPlayerTurn].selected.push(a),c(e,r),v(a,t.piece),f())setTimeout((function(){u()}),750);else{var n="one"===o.currentPlayerTurn?"two":"one";i(n)}}},f=function(){var a=e.filter((function(e){return""===e})).length;return function(){var e=[];return t.selected.forEach((function(t){e.push(m[t])})),e.some((function(t,a){var r=E[t],n=!0,o=!1,c=void 0;try{for(var l,i=r[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var s=l.value;if(C(s,e))return!0}}catch(u){o=!0,c=u}finally{try{n||null==i.return||i.return()}finally{if(o)throw c}}}))}()?(g(10),O(),!0):0===a&&(S(5),!0)},v=function(t,a){var r="X"===a?"O":"X";E[m[t]].forEach((function(t){var a=0;t.forEach((function(t){e[d[t]]===r&&(a+=1)})),2===a&&g(1)}))},g=function(e){var t=Object(l.a)({},o.players),a=t[o.currentPlayerTurn];a.score+=e,a.score>a.highScore&&(a.highScore=a.score),s(t)},S=function(e){var t=Object(l.a)({},o.players);t.one.score+=e,t.two.score+=e,t.one.score>t.one.highScore&&(t.one.highScore=t.one.score),t.two.score>t.two.highScore&&(t.two.highScore=t.two.score),s(t)},O=function(){var e=Object(l.a)({},o.players);("one"===o.currentPlayerTurn?e.two:e.one).score=0,s(e)};return Object(r.useEffect)((function(){e=Object(w.a)(o.board),(t=Object(l.a)({},o.players[o.currentPlayerTurn])).isComputer&&function(){var a=b(e,t.piece);y(a)}()})),n.a.createElement("div",{id:"play-area"},n.a.createElement("div",{id:"top-row",className:"row"},n.a.createElement("div",{className:"left-col col",id:"A",onClick:function(e){p(e.target.id)}},n.a.createElement(P,{slotId:"A"})),n.a.createElement("div",{className:"mid-col col",id:"B",onClick:function(e){p(e.target.id)}},n.a.createElement(P,{slotId:"B"})),n.a.createElement("div",{className:"right-col col",id:"C",onClick:function(e){p(e.target.id)}},n.a.createElement(P,{slotId:"C"}))),n.a.createElement("div",{id:"mid-row",className:"row"},n.a.createElement("div",{className:"left-col col",id:"D",onClick:function(e){p(e.target.id)}},n.a.createElement(P,{slotId:"D"})),n.a.createElement("div",{className:"mid-col col",id:"E",onClick:function(e){p(e.target.id)}},n.a.createElement(P,{slotId:"E"})),n.a.createElement("div",{className:"right-col col",id:"F",onClick:function(e){p(e.target.id)}},n.a.createElement(P,{slotId:"F"}))),n.a.createElement("div",{id:"bot-row",className:"row"},n.a.createElement("div",{className:"left-col col",id:"G",onClick:function(e){p(e.target.id)}},n.a.createElement(P,{slotId:"G"})),n.a.createElement("div",{className:"mid-col col",id:"H",onClick:function(e){p(e.target.id)}},n.a.createElement(P,{slotId:"H"})),n.a.createElement("div",{className:"right-col col",id:"I",onClick:function(e){p(e.target.id)}},n.a.createElement(P,{slotId:"I"}))))};var O=function(){var e=Object(r.useContext)(h),t=e.gameState,a=e.swapPlayer;return n.a.createElement("div",{id:"chalkBoard"},n.a.createElement("div",{id:"rules-container"},n.a.createElement("h2",null,"Rules:"),n.a.createElement("hr",null),n.a.createElement("ol",null,n.a.createElement("li",null,"X plays first."),n.a.createElement("li",null,"+10 points for a win."),n.a.createElement("li",null,"+5 points for a draw."),n.a.createElement("li",null,"+1 point for a block."),n.a.createElement("li",null,"Lose all points on a loss.")),n.a.createElement("hr",null)),n.a.createElement(S,null),n.a.createElement("div",{id:"score-area"},n.a.createElement("div",{id:"player-one-score-container"},n.a.createElement("h5",null,t.players.one.displayName),n.a.createElement("span",null,"Score: ",t.players.one.score),n.a.createElement("span",null,"High Score: ",t.players.one.highScore)),n.a.createElement("div",{id:"player-two-score-container"},n.a.createElement("h5",null,t.players.two.displayName),n.a.createElement("span",null,"Score: ",t.players.two.score),n.a.createElement("span",null,"High Score: ",t.players.two.highScore))),n.a.createElement("div",{id:"eraser"},n.a.createElement("div",{id:"eraser-top"}),n.a.createElement("div",{id:"eraser-bottom"})),n.a.createElement("div",{id:"swap-btn-container"},n.a.createElement("button",{id:"swap-btn",onClick:function(){a()}},"Swap Players")))},T=function(e){var t=e.show,a=e.children,r=t?"modal":"modal hide";return n.a.createElement("div",{className:r},n.a.createElement("section",{className:"modal-main"},a))};var N=function(){var e=Object(r.useContext)(h),t=e.gameState,a=e.selectPlayer,o=e.updateModal,c=t.showModal,l=function(e){a(e),o(!1)};return n.a.createElement("div",{id:"game"},n.a.createElement(O,null),n.a.createElement(T,{show:c},n.a.createElement("h1",null,"React-Tac-Toe"),n.a.createElement("h2",null,"Choose X's or O's"),n.a.createElement("button",{className:"modal-btn",onClick:function(){return l("one")}},"X"),n.a.createElement("button",{className:"modal-btn",onClick:function(){return l("two")}},"O")))};var A=function(){return n.a.createElement(v,null,n.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.bf90ef60.chunk.js.map