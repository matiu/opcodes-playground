webpackJsonp([1],{0:function(t,e,r){t.exports=r("cDNt")},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},W675:function(t,e,r){e=t.exports=r("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},cDNt:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("/oeL"),i=r("Qa4U"),o=r("fc+i"),s=r("bm2B"),c=r("6evE"),a=r("x8nq"),d=this&&this.__decorate||function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(){this.S=a.Script,this.S.fromBitcoindString=function(t){for(var e=new a.encoding.BufferWriter,r=t.split(" "),n=0;n<r.length;n++){var i=r[n];if(""!==i){var o,s,c;if("0"===i[0]&&"x"===i[1]){var d=i.slice(2);e.write(a.deps.Buffer.from(d,"hex"))}else if("'"===i[0]){var l=i.slice(1,i.length-1),p=a.deps.Buffer.from(l);c=a.Script().add(p).toBuffer(),e.write(c)}else if(void 0!==a.Opcode["OP_"+i])o="OP_"+i,s=a.Opcode[o],e.writeUInt8(s);else if("number"==typeof a.Opcode[i])o=i,s=a.Opcode[o],e.writeUInt8(s);else{if(isNaN(parseInt(i)))throw new Error("Could not determine type of script value");var u=a.Script().add(new a.crypto.BN(i).toScriptNumBuffer());c=u.toBuffer(),e.write(c)}}}var f=e.concat();return this.fromBuffer(f)}}return t.prototype.getFlags=function(t){var e=0;return-1!==t.indexOf("NONE")&&(e|=this.S.Interpreter.SCRIPT_VERIFY_NONE),-1!==t.indexOf("P2SH")&&(e|=this.S.Interpreter.SCRIPT_VERIFY_P2SH),-1!==t.indexOf("STRICTENC")&&(e|=this.S.Interpreter.SCRIPT_VERIFY_STRICTENC),-1!==t.indexOf("DERSIG")&&(e|=this.S.Interpreter.SCRIPT_VERIFY_DERSIG),-1!==t.indexOf("LOW_S")&&(e|=this.S.Interpreter.SCRIPT_VERIFY_LOW_S),-1!==t.indexOf("NULLDUMMY")&&(e|=this.S.Interpreter.SCRIPT_VERIFY_NULLDUMMY),-1!==t.indexOf("SIGPUSHONLY")&&(e|=this.S.Interpreter.SCRIPT_VERIFY_SIGPUSHONLY),-1!==t.indexOf("MINIMALDATA")&&(e|=this.S.Interpreter.SCRIPT_VERIFY_MINIMALDATA),-1!==t.indexOf("DISCOURAGE_UPGRADABLE_NOPS")&&(e|=this.S.Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS),-1!==t.indexOf("CHECKLOCKTIMEVERIFY")&&(e|=this.S.Interpreter.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY),-1!==t.indexOf("CHECKSEQUENCEVERIFY")&&(e|=this.S.Interpreter.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY),-1!==t.indexOf("NULLFAIL")&&(e|=this.S.Interpreter.SCRIPT_VERIFY_NULLFAIL),-1!==t.indexOf("CLEANSTACK")&&(e|=this.S.Interpreter.SCRIPT_VERIFY_CLEANSTACK),-1!==t.indexOf("FORKID")&&(e|=this.S.Interpreter.SCRIPT_ENABLE_SIGHASH_FORKID),-1!==t.indexOf("REPLAY_PROTECTION")&&(e|=this.S.Interpreter.SCRIPT_ENABLE_REPLAY_PROTECTION),-1!==t.indexOf("MONOLITH")&&(e|=this.S.Interpreter.SCRIPT_ENABLE_MONOLITH_OPCODES),-1!==t.indexOf("MINIMALIF")&&(e|=this.S.Interpreter.SCRIPT_VERIFY_MINIMALIF),e},t.prototype.run=function(t,e){console.log("[script.runner.service.ts.11] running",t);try{var r=this.S.fromBitcoindString(""),n=this.S.fromBitcoindString(t)}catch(t){return{errorStr:"Could not parse your script",errorDetail:t}}var i=this.getFlags(e);a.deps.Buffer.alloc(32).fill(0);var o=new a.Transaction;o.uncheckedAddInput(new a.Transaction.Input({prevTxId:"0000000000000000000000000000000000000000000000000000000000000000",outputIndex:4294967295,sequenceNumber:4294967295,script:a.Script("OP_0 OP_0")})),o.addOutput(new a.Transaction.Output({script:n,satoshis:0}));var s=o.id,c=new a.Transaction;c.uncheckedAddInput(new a.Transaction.Input({prevTxId:s.toString("hex"),outputIndex:0,sequenceNumber:4294967295,script:r})),c.addOutput(new a.Transaction.Output({script:new a.Script,satoshis:0}));var d={spendTx:c.toObject(),creditTx:o.toObject()},l=new this.S.Interpreter;try{return{result:l.verify(r,n,c,0,i,new a.crypto.BN(0)),errorStr:l.errstr,log:JSON.stringify(d,void 0,2)}}catch(t){return console.log("[script.runner.service.ts.165] ERR",t),{errorStr:t}}},t}();p=d([Object(n.B)(),l("design:paramtypes",[])],p);var u=this&&this.__decorate||function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},v=function(){function t(t){this.scriptRunner=t,this.flagsStr="P2SH,STRICTENC,MONOLITH_OPCODES"}return t.prototype.run=function(t,e,r){if(this.errorStr=this.errorStr=this.result=this.log=null,t&&0!=t.length){console.log("[app.component.ts.20] running",t,e,r);var n=this.scriptRunner.run(t,e);console.log("[app.component.ts.26:res:]",n),this.errorStr=n.errorStr,this.errorDetail=n.errorDetail,this.result=n.result,this.log=r?n.log:""}},t}();v=u([Object(n.n)({selector:"app-root",template:r("efyd"),styles:[r("W675")],providers:[p]}),f("design:paramtypes",["function"==typeof(h=void 0!==p&&p)&&h||Object])],v);var h,g=this&&this.__decorate||function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s},I=function(){function t(){}return t}();I=g([Object(n.L)({declarations:[v],imports:[o.a,s.a,c.a],providers:[],bootstrap:[v]})],I),{production:!0}.production&&Object(n._20)(),Object(i.a)().bootstrapModule(I).catch(function(t){return console.log(t)})},efyd:function(t,e){t.exports='<div class="header">\n  <div class="header-content">\n    <div class="header-center">\n      <h3 class="header-title">Bitcoin Cash OpCodes Playground  </h3>\n      <div class="repository-link">\n        <a href="https://github.com/matiu/opcodes-playground" target="blank">\n          <img src="assets/img/github.png" alt="Github">\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="container">\n  <div class="warning">\n    <b>WARNING:</b> This tool is BETA software. Do *not* use it to craft any script holding any significant amount of money without first testing it using other implementations/testnet, etc.\n  </div>\n\n  <form #translateForm="ngForm">\n    <div class="card">\n      <div class="card-block">\n        <h6 class="card-title">Enter a Bitcoin Cash Script</h6>\n        <div class="row">\n          <div class="form-group col">\n            <div class="input-group">\n              <div class="input-group-addon">Script:</div>\n              <input type="text" class="form-control ellipsis" id="script" name="script" [(ngModel)]="script"\n                (ngModelChange)="run(script, flagsStr, showDetails)">\n            </div>\n          </div>\n        </div>\n        <div class="row">\n          <div class="form-group col">\n            <div class="input-group">\n              <div class="input-group-addon">Flags:</div>\n              <input type="text" class="form-control ellipsis" id="flagsStr" name="flagsStr" [(ngModel)]="flagsStr"\n                (ngModelChange)="run(script, flagsStr, showDetails)">\n            </div>\n          </div>\n        </div>\n         <div class="row">\n          <div class="form-group col">\n            <div class="input-group">\n              <div class="input-group-addon">Show details:</div>\n              <input type="checkbox" class="form-control ellipsis" id="showDetails" name="showDetails" [(ngModel)]="showDetails"\n                (ngModelChange)="run(script, flagsStr, showDetails)">\n            </div>\n          </div>\n        </div>\n \n        <div class="row" *ngIf="errorStr">\n          <div class="form-group col">\n            <div class="input-group">\n              <div class="input-group-addon">Error:</div>\n              <input type="text" class="form-control ellipsis" id="errorStr" name="errorStr" [(ngModel)]="errorStr" >\n            </div>\n          </div>\n        </div>\n        <div class="row" *ngIf="errorDetail">\n          <div class="form-group col">\n            <div class="input-group">\n              <div class="input-group-addon">Details:</div>\n              <input type="text" class="form-control ellipsis" id="errorDetail" name="errorDetail" [(ngModel)]="errorDetail" >\n            </div>\n          </div>\n        </div>\n\n\n\n        <div class="row" *ngIf="!errorStr">\n          <div class="form-group col">\n            <div class="input-group">\n              <div class="input-group-addon">Result:</div>\n              <input type="text" class="form-control ellipsis" id="result" name="result" [(ngModel)]="result" >\n            </div>\n          </div>\n        </div>\n        <div class="row" *ngIf="!errorStr && log">\n          <div class="form-group col">\n            <div class="input-group">\n              <div class="input-group-addon">Log:</div>\n              <pre>{{log}} </pre>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n  </form>\n\n<div class="card">\n    <div class="card-block">\n    <div class="row">\n        <div>Opcode references:</div>\n    </div>\n    <div class="row">\n<a  href="https://github.com/bitcoincashorg/spec/blob/master/may-2018-reenabled-opcodes.md"> New Opcodes</a>\n    </div>\n    <div class="row">\n<a  href="https://en.bitcoin.it/wiki/Script"> All Opcodes</a>\n    </div>\n    </div>\n</div>\n\n<div class="card">\n<p>\n2018 (C) <a href="https://twitter.com/ematiu">@ematiu</a> using <a href="https://github.com/bitpay/bitcore-lib/pull/230">Bitcore-lib-cash</a>. MIT Licenced\n</div>\n\n</div>\n'},gFIY:function(t,e){function r(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id="gFIY"}},[0]);