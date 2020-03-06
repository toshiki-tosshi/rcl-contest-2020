!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";var s,n;!function(t){var e=function(){function t(t,e){this.filename=t,this.content=[];for(var i=0,s=e.trim().split("\n");i<s.length;i++){var n=s[i].trim().split(new RegExp("\\s+"));this.content.push(n)}this.y=0,this.x=0}return t.prototype.isEOF=function(){return this.content.length<=this.y},t.prototype.getWord=function(){this.isEOF()&&this.reportError("a word expected, but EOF"),this.content[this.y].length<=this.x&&this.reportError("a word expected, but newline");var t=this.content[this.y][this.x];return this.x+=1,t},t.prototype.getInt=function(){var t=this.getWord();return t.match(new RegExp("^[-+]?[0-9]+$"))||this.reportError("a number expected, but word "+JSON.stringify(this.content[this.y][this.x])),parseInt(t)},t.prototype.getNewline=function(){this.isEOF()&&this.reportError("newline expected, but EOF"),this.x<this.content[this.y].length&&this.reportError("newline expected, but word "+JSON.stringify(this.content[this.y][this.x])),this.x=0,this.y+=1},t.prototype.reportError=function(t){throw t=this.filename+": line "+(this.y+1)+": "+t,alert(t),new Error(t)},t}();t.FileParser=e;var i=function(){function t(t){var e=this;this.callback=t,this.inputFile=document.getElementById("inputFile"),this.outputFile=document.getElementById("outputFile"),this.reloadButton=document.getElementById("reloadButton"),this.reloadFilesClosure=function(){e.reloadFiles()},this.inputFile.addEventListener("change",this.reloadFilesClosure),this.outputFile.addEventListener("change",this.reloadFilesClosure),this.reloadButton.addEventListener("click",this.reloadFilesClosure)}return t.prototype.reloadFiles=function(){var t=this;null!=this.inputFile.files&&0!=this.inputFile.files.length&&n(this.inputFile.files[0],(function(e){null!=t.outputFile.files&&0!=t.outputFile.files.length&&n(t.outputFile.files[0],(function(i){t.reloadButton.classList.remove("disabled"),void 0!==t.callback&&t.callback(e,i)}))}))},t}();t.FileSelector=i;var s=function(){function t(t){var e=this;this.callback=t,this.seekRange=document.getElementById("seekRange"),this.seekNumber=document.getElementById("seekNumber"),this.fpsInput=document.getElementById("fpsInput"),this.firstButton=document.getElementById("firstButton"),this.prevButton=document.getElementById("prevButton"),this.playButton=document.getElementById("playButton"),this.nextButton=document.getElementById("nextButton"),this.lastButton=document.getElementById("lastButton"),this.runIcon=document.getElementById("runIcon"),this.intervalId=null,this.setMinMax(-1,-1),this.seekRange.addEventListener("change",(function(){e.setValue(parseInt(e.seekRange.value))})),this.seekNumber.addEventListener("change",(function(){e.setValue(parseInt(e.seekNumber.value))})),this.seekRange.addEventListener("input",(function(){e.setValue(parseInt(e.seekRange.value))})),this.seekNumber.addEventListener("input",(function(){e.setValue(parseInt(e.seekNumber.value))})),this.fpsInput.addEventListener("change",(function(){null!==e.intervalId&&e.play()})),this.firstButton.addEventListener("click",(function(){e.stop(),e.setValue(e.getMin())})),this.prevButton.addEventListener("click",(function(){e.stop(),e.setValue(e.getValue()-1)})),this.nextButton.addEventListener("click",(function(){e.stop(),e.setValue(e.getValue()+1)})),this.lastButton.addEventListener("click",(function(){e.stop(),e.setValue(e.getMax())})),this.playClosure=function(){e.play()},this.stopClosure=function(){e.stop()},this.playButton.addEventListener("click",this.playClosure)}return t.prototype.setMinMax=function(t,e){this.seekRange.min=this.seekNumber.min=t.toString(),this.seekRange.max=this.seekNumber.max=e.toString(),this.seekRange.step=this.seekNumber.step="1",this.setValue(t)},t.prototype.getMin=function(){return parseInt(this.seekRange.min)},t.prototype.getMax=function(){return parseInt(this.seekRange.max)},t.prototype.setValue=function(t){t=Math.max(this.getMin(),Math.min(this.getMax(),t));var e=this.seekNumber.valueAsNumber;this.seekRange.value=this.seekNumber.value=t.toString(),void 0!==this.callback&&this.callback(t,e)},t.prototype.getValue=function(){return parseInt(this.seekRange.value)},t.prototype.getDelay=function(){var t=parseInt(this.fpsInput.value);return Math.floor(1e3/t)},t.prototype.resetInterval=function(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)},t.prototype.play=function(){var t=this;this.playButton.removeEventListener("click",this.playClosure),this.playButton.addEventListener("click",this.stopClosure),this.runIcon.classList.remove("play"),this.runIcon.classList.add("stop"),this.getValue()==this.getMax()&&this.setValue(this.getMin()),this.resetInterval(),this.intervalId=window.setInterval((function(){t.getValue()==t.getMax()?t.stop():t.setValue(t.getValue()+1)}),this.getDelay())},t.prototype.stop=function(){this.playButton.removeEventListener("click",this.stopClosure),this.playButton.addEventListener("click",this.playClosure),this.runIcon.classList.remove("stop"),this.runIcon.classList.add("play"),this.resetInterval()},t}();t.RichSeekBar=s;var n=function(t,e){var i=new FileReader;i.readAsText(t),i.onloadend=function(){"string"==typeof i.result&&e(i.result)}},r=function(t){document.getElementById("saveAsImage").addEventListener("click",(function(){!function(t,e){var i=document.createElement("a");i.href=t,i.download=e;var s=document.createEvent("MouseEvent");s.initEvent("click",!0,!0),i.dispatchEvent(s)}(t.toDataURL("image/png"),"canvas.png")}))};t.FileExporter=r}(s||(s={})),function(t){var e=function(){function t(t,e,i,s,n){void 0===e&&(e=-1),void 0===i&&(i=-1),void 0===s&&(s=-1),void 0===n&&(n=-1),this.op=t,this.r0=e,this.c0=i,this.r1=s,this.c1=n}return t.prototype.toString=function(){return"-"===this.op?"":"P"===this.op?[this.op,this.r0,this.c0,this.r1,this.c1].join(" "):this.op},t}();function i(t,e){for(var i=Array(t),s=0;s<t;s++){i[s]=Array(t);for(var n=0;n<t;n++)i[s][n]=e}return i}var n=function(t){this.B=[-1,-1];var e=new s.FileParser("<input-file>",t);this.N=e.getInt(),this.P=e.getInt(),this.M=e.getInt(),e.getNewline();for(var n=[],r=0;r<this.N;r++)n.push(e.getWord()),e.getNewline();var l=this.A=i(this.N,0);for(r=0;r<this.N;r++){for(var o=e.getWord(),h=0;h<this.N;h++)l[r][h]=o.charCodeAt(h)-64,"x"==n[r][h]?l[r][h]=~l[r][h]:"o"==n[r][h]&&(this.B=[r,h]);e.getNewline()}},r=function(t,i){this.inputFile=t;var n=new s.FileParser("<output-file>",i);for(this.commands=[];!n.isEOF();){var r=n.getWord();if("P"==r){var l=n.getInt(),o=n.getInt(),h=n.getInt(),a=n.getInt();n.getNewline(),(l<0||l>=t.N)&&n.reportError("座標が範囲外です"),(o<0||o>=t.N)&&n.reportError("座標が範囲外です"),(h<0||h>=t.N)&&n.reportError("座標が範囲外です"),(a<0||a>=t.N)&&n.reportError("座標が範囲外です"),this.commands.push(new e(r,l,o,h,a))}else-1!="DRUL".indexOf(r)?(this.commands.push(new e(r)),n.getNewline()):n.reportError("出力が不正です")}this.commands.length>t.M&&n.reportError("操作回数が "+t.M+" 回を超えています")},l=function(){function t(t,e,i,s,n,r,l,o,h){this.turn=t,this.outputFile=e,this.previousFrame=i,this.command=s,this.A=n,this.ball=r,this.S=l,this.chains=o,this.P=h,this.score=0;for(var a=0;a<o.length;a++)this.score+=o[a][1]*o[a][1];this.last=o.length>0?o[o.length-1][0]:"-"}return t.createInitialFrame=function(s,n){var r=i(n.inputFile.N,0);return new t(0,n,null,new e("-"),s.A,s.B,r,[],[])},t.createNextFrame=function(e,i){var s,n=e.A.map((function(t){return Object.assign({},t)})),r=function(t,e){return n[t][e]<0},l=[i.op,i.r0,i.c0,i.r1,i.c1],o=l[0],h=l[1],a=l[2],c=l[3],u=l[4];if("P"==o){if(r(h,a)){if(r(c,u))throw Error(e.turn+1+"行目 柱の移動先に別の柱があります: ("+c+", "+u+")");if(c==e.ball[0]&&u==e.ball[1])throw Error(e.turn+1+"行目 柱の移動先にロボットがいます: ("+c+", "+u+")");return n[h][a]=~n[h][a],n[c][u]=~n[c][u],new t(e.turn+1,e.outputFile,e,i,n,e.ball,e.S,e.chains,e.P)}throw Error(e.turn+1+"行目 移動元に柱がありません: ("+h+", "+a+")")}for(var p=t.DR["DRUL".indexOf(o)],f=t.DC["DRUL".indexOf(o)],d=e.outputFile.inputFile.N,v=e.ball,g=v[0],x=v[1];;){var m=g+p,y=x+f;if(m<0||y<0||m>=d||y>=d)break;if(r(m,y))break;g=(s=[m,y])[0],x=s[1]}var b=e.chains,S=e.S,k=e.P;if(n[g][x]>0){var I=String.fromCharCode(n[g][x]+64);(b=b.concat()).length>0&&b[b.length-1][0]===I?b[b.length-1]=[I,b[b.length-1][1]+1]:b.push([I,1]),(k=k.concat()).push([g,x]),S=e.S.map((function(t){return Object.assign({},t)}));var E=b[b.length-1][1];n[g][x]=0;for(var w=0;w<E;w++){var F=k[k.length-1-w],B=F[0],N=F[1];S[B][N]=E}}return new t(e.turn+1,e.outputFile,e,i,n,[g,x],S,b,k)},t.prototype.isPillar=function(t,e){return this.A[t][e]<0},t.DR=[1,0,-1,0],t.DC=[0,1,0,-1],t}(),o=function(t,e){try{var i=new n(t),s=new r(i,e);this.frames=[l.createInitialFrame(i,s)];for(var o=0,h=s.commands;o<h.length;o++){var a=h[o],c=this.frames[this.frames.length-1];this.frames.push(l.createNextFrame(c,a))}}catch(t){throw alert(t),t}},h=function(){function t(){this.bgColor="#eee",this.highlightStyle="hsl(50, 100%, 94%)",this.cellMargin=1,this.font="11px Arial, meiryo, sans-serif",this.boldFont="bold 13px Arial, meiryo, sans-serif",this.N=40,this.cellSize=800/this.N,this.canvas=document.getElementById("canvas"),this.height=this.boardSize=800,this.width=1e3,this.ctx=this.canvas.getContext("2d"),null==this.ctx&&alert("unsupported browser"),this.commandInput=document.getElementById("commandInput"),this.scoreInput=document.getElementById("scoreInput"),this.lastInput=document.getElementById("lastInput"),this.ctx.lineJoin="round",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.pillarCoords=[];var t=.4;this.pillarCoords.push([.5-t,.5-t]),this.pillarCoords.push([.5-t,.9]),this.pillarCoords.push([.9,.9]),this.pillarCoords.push([.9,.5-t]),this.chainStyle=[];for(var e=0;e<100;e++)this.chainStyle[e]="hsl(0, "+100*e/100+"%, 83%)"}return t.prototype.inputFile=function(t){this.N=t.N,this.cellSize=this.height/this.N},t.prototype.draw=function(t,e){var i=t.command;this.commandInput.value=null==i?"":i.toString(),this.scoreInput.value=t.score.toString(),this.lastInput.value=t.last,this.drawAll(t)},t.prototype.drawAll=function(t){var e=t.outputFile.inputFile.N,i=this.cellSize;this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.boardSize,this.height),this.ctx.fillStyle="white",this.ctx.fillRect(this.boardSize,0,this.width-this.boardSize,this.boardSize),this.ctx.fillStyle=this.highlightStyle,this.ctx.fillRect(0,t.ball[0]*i,this.boardSize,i),this.ctx.fillRect(t.ball[1]*i,0,i,this.boardSize),this.ctx.strokeStyle="#666",this.ctx.lineWidth=1,this.ctx.beginPath();for(var s=0;s<e+1;s++)this.ctx.moveTo(s*this.cellSize,0),this.ctx.lineTo(s*this.cellSize,this.boardSize);for(var n=0;n<e+1;n++)this.ctx.moveTo(0,n*this.cellSize),this.ctx.lineTo(this.boardSize,n*this.cellSize);this.ctx.stroke();for(n=0;n<e;n++)for(s=0;s<e;s++)this.drawCell(t,n,s);this.ctx.save(),this.ctx.font=this.font,this.ctx.fillStyle=this.ctx.strokeStyle="black",this.ctx.font="15pt bold",this.ctx.fillText("score: "+t.score,(e+5)*i,1.05*i),this.ctx.font=this.font;for(var r=0;r<t.chains.length;r++){var l=t.chains[r];n=r%(t.outputFile.inputFile.N-2)+2,s=e+1+2*Math.floor(r/(t.outputFile.inputFile.N-2)),l[0],l[1];this.ctx.fillStyle=this.getChainStyle(l[1]),this.pillarPath(n,s),this.ctx.fill(),this.ctx.fillStyle=this.ctx.strokeStyle="black",this.ctx.fillText(l[0],(s+.5)*i,(n+.55)*i),this.ctx.fillText(l[1].toString(),(s+1+.5)*i,(n+.55)*i)}this.ctx.restore(),this.ctx.fillStyle="rgba(255, 255, 255, 0)",this.ctx.fillRect(this.width-1,this.height-1,1,1)},t.prototype.drawCell=function(t,e,i){var s=t.command,n=[s.op,s.r0,s.c0,s.r1,s.c1],r=n[0],l=n[1],o=n[2],h=n[3],a=n[4],c=t.previousFrame;if(t.S[e][i]>0){t.S[e][i];this.ctx.fillStyle=this.getChainStyle(t.S[e][i]),this.pillarPath(e,i),this.ctx.fill()}e==l&&i==o?(this.ctx.strokeStyle="darkblue",this.ctx.lineWidth=4,this.ctx.setLineDash([3,2]),this.pillarPath(e,i),this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.lineWidth=1):e==h&&i==a?(this.ctx.strokeStyle="darkblue",this.ctx.lineWidth=4,this.pillarPath(e,i),this.ctx.stroke(),this.ctx.lineWidth=1):t.isPillar(e,i)?(this.ctx.strokeStyle="black",this.ctx.lineWidth=1,this.pillarPath(e,i),this.ctx.stroke()):e==t.ball[0]&&i==t.ball[1]?(this.ctx.strokeStyle="black",this.ctx.fillStyle="#777",this.ctx.lineWidth=2,this.ballPath(e,i),this.ctx.fill(),this.ctx.stroke(),t.previousFrame&&(this.ctx.strokeStyle=this.ctx.fillStyle="#eee",this.drawChar(t.previousFrame,e,i))):null!=c&&e==c.ball[0]&&i==c.ball[1]&&(this.ctx.strokeStyle="black",this.ctx.lineWidth=2,this.ctx.setLineDash([2,2]),this.ballPath(e,i),this.ctx.stroke(),this.ctx.lineWidth=1,this.ctx.setLineDash([]),this.ctx.strokeStyle=this.ctx.fillStyle="#111",this.drawArrow(e,i,r)),this.ctx.strokeStyle=this.ctx.fillStyle="#111",this.drawChar(t,e,i)},t.prototype.getChainStyle=function(t){return this.chainStyle[Math.min(t,this.chainStyle.length-1)]},t.prototype.drawArrow=function(t,e,i){var s="DRUL".indexOf(i);if(!(s<0)){var n="▼▶▲◀"[s],r=this.cellSize;this.ctx.fillText(n,(e+.5)*r,(t+.5)*r)}},t.prototype.drawChar=function(t,e,i){var s=t.A[e][i]>=0?t.A[e][i]:~t.A[e][i],n=String.fromCharCode(64+s);if(0!=s){var r=this.cellSize;this.ctx.font=n==t.last?this.boldFont:this.font,this.ctx.fillText(n,(i+.5)*r,(e+.55)*r)}},t.prototype.pillarPath=function(t,e){var i=this.cellSize,s=e*i,n=t*i;this.ctx.beginPath();var r=this.pillarCoords;this.ctx.moveTo(s+r[0][0]*i,n+r[0][1]*i);for(var l=1;l<r.length;l++)this.ctx.lineTo(s+r[l][0]*i,n+r[l][1]*i);this.ctx.closePath()},t.prototype.ballPath=function(t,e){var i=this.cellSize;this.ctx.beginPath();var s=(e+.5)*i,n=(t+.5)*i;this.ctx.arc(s,n,.4*i,0,2*Math.PI,!0),this.ctx.closePath()},t.prototype.eraseCell=function(t,e){var i=this.cellSize,s=this.cellMargin;this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(e*i+s,t*i+s,i-2*s,i-2*s)},t.prototype.getCanvas=function(){return this.canvas},t}(),a=function(){var t=this;this.tester=null,this.visualizer=new h,this.exporter=new s.FileExporter(this.visualizer.getCanvas()),this.seek=new s.RichSeekBar((function(e,i){t.tester&&(i==e-1?t.visualizer.draw(t.tester.frames[e],t.tester.frames[i]):t.visualizer.draw(t.tester.frames[e],null))})),this.loader=new s.FileSelector((function(e,i){t.tester=new o(e,i),t.seek.setMinMax(0,t.tester.frames.length-1),t.seek.setValue(t.tester.frames.length-1),t.visualizer.inputFile(t.tester.frames[0].outputFile.inputFile),t.visualizer.draw(t.tester.frames[t.tester.frames.length-1],null)}))};t.App=a}(n||(n={})),window.onload=function(){new n.App}}]);