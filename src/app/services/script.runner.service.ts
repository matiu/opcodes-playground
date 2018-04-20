import { Injectable } from '@angular/core';
import * as B from 'bitcore-lib-cash';

@Injectable()
export class ScriptRunner {

    public S: any;

    constructor() {
        this.S = B.Script;

        //the script string format used in bitcoind data tests
        this.S.fromBitcoindString = function(str) {
            var bw = new B.encoding.BufferWriter();
            var tokens = str.split(' ');
            for (var i = 0; i < tokens.length; i++) {
                var token = tokens[i];
                if (token === '') {
                    continue;
                }

                var opstr;
                var opcodenum;
                var tbuf;
                if (token[0] === '0' && token[1] === 'x') {
                    var hex = token.slice(2);
                    bw.write(B.deps.Buffer.from(hex, 'hex'));
                } else if (token[0] === '\'') {
                    var tstr = token.slice(1, token.length - 1);
                    var cbuf = B.deps.Buffer.from(tstr);
                    tbuf = B.Script().add(cbuf).toBuffer();
                    bw.write(tbuf);
                } else if (typeof B.Opcode['OP_' + token] !== 'undefined') {
                    opstr = 'OP_' + token;
                    opcodenum = B.Opcode[opstr];
                    bw.writeUInt8(opcodenum);
                } else if (typeof B.Opcode[token] === 'number') {
                    opstr = token;
                    opcodenum = B.Opcode[opstr];
                    bw.writeUInt8(opcodenum);
                } else if (!isNaN(parseInt(token))) {
                    var script = B.Script().add(new B.crypto.BN(token).toScriptNumBuffer());
                    tbuf = script.toBuffer();
                    bw.write(tbuf);
                } else {
                    throw new Error('Could not determine type of script value');
                }
            }
            var buf = bw.concat();
            return this.fromBuffer(buf);
        };


    }

    private getFlags(flagstr: string) {
    var flags = 0;
    if (flagstr.indexOf('NONE') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_VERIFY_NONE;
    }
    if (flagstr.indexOf('P2SH') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_VERIFY_P2SH;
    }
    if (flagstr.indexOf('STRICTENC') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_VERIFY_STRICTENC;
    }
    if (flagstr.indexOf('DERSIG') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_VERIFY_DERSIG;
    }
    if (flagstr.indexOf('LOW_S') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_VERIFY_LOW_S;
    }
    if (flagstr.indexOf('NULLDUMMY') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_VERIFY_NULLDUMMY;
    }
    if (flagstr.indexOf('SIGPUSHONLY') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_VERIFY_SIGPUSHONLY;
    }
    if (flagstr.indexOf('MINIMALDATA') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_VERIFY_MINIMALDATA;
    }
    if (flagstr.indexOf('DISCOURAGE_UPGRADABLE_NOPS') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS;
    }
    if (flagstr.indexOf('CHECKLOCKTIMEVERIFY') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY;
    }
    if (flagstr.indexOf('CHECKSEQUENCEVERIFY') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY;
    }
    if (flagstr.indexOf('NULLFAIL') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_VERIFY_NULLFAIL;
    }

    if (flagstr.indexOf('CLEANSTACK') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_VERIFY_CLEANSTACK;
    }

    if (flagstr.indexOf('FORKID') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_ENABLE_SIGHASH_FORKID;
    }

    if (flagstr.indexOf('REPLAY_PROTECTION') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_ENABLE_REPLAY_PROTECTION;
    }

    if (flagstr.indexOf('MONOLITH') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_ENABLE_MONOLITH_OPCODES;
    }

    if (flagstr.indexOf('MINIMALIF') !== -1) {
      flags = flags | this.S.Interpreter.SCRIPT_VERIFY_MINIMALIF;
    }
    return flags;
  };




    public run(scriptStr: string): any {
        console.log('[script.runner.service.ts.11] running', scriptStr); //TODO

        try {
        var scriptSig = this.S.fromBitcoindString(''); // ToDo
            var scriptPubkey = this.S.fromBitcoindString(scriptStr);
        } catch (e) {
            return {errorStr: "Could not parse your script", errorDetail: e};
        }


        var flags = this.getFlags('P2SH,STRICTENC,MONOLITH_OPCODES'); // ToDo
        var inputAmount = 0;
        // ToDo
        //        if (extraData) {
        //    inputAmount = extraData[0] * 1e8;
        //}

        var hashbuf = B.deps.Buffer.alloc(32);
        hashbuf.fill(0);
        var credtx = new B.Transaction();
        credtx.uncheckedAddInput(new B.Transaction.Input({
            prevTxId: '0000000000000000000000000000000000000000000000000000000000000000',
            outputIndex: 0xffffffff,
            sequenceNumber: 0xffffffff,
            script: B.Script('OP_0 OP_0')
        }));
        credtx.addOutput(new B.Transaction.Output({
            script: scriptPubkey,
            satoshis: inputAmount, 
        }));
        var idbuf = credtx.id;

        var spendtx = new B.Transaction();
        spendtx.uncheckedAddInput(new B.Transaction.Input({
            prevTxId: idbuf.toString('hex'),
            outputIndex: 0,
            sequenceNumber: 0xffffffff,
            script: scriptSig
        }));
        spendtx.addOutput(new B.Transaction.Output({
            script: new B.Script(),
            satoshis: inputAmount,
        }));

        var interp = new this.S.Interpreter();
        try {
            var res = interp.verify(scriptSig, scriptPubkey, spendtx, 0, flags, new B.crypto.BN(inputAmount));
            return {
              "result": res,
              "errorStr": interp.errstr,
            };
        } catch (e) {
            console.log('[script.runner.service.ts.165] ERR', e); //TODO
            return {
                errorStr: e,
            };
        };

    }
}
