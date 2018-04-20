import { Component } from '@angular/core';
import { ScriptRunner } from '../app/services/script.runner.service';
import { ScriptExamples } from '../app/services/script.examples.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ScriptRunner, ScriptExamples]
})
export class AppComponent {

  public result: boolean;
  public errorStr: string;
    public errorDetail: string;
    public flagsStr: string;
    public log: string;
    public s: string;
    public ex: string;
    public examples: any;

    constructor(
        private scriptRunner:ScriptRunner,
        private scriptExamples:ScriptExamples
  ) {
        this.flagsStr = 'P2SH,STRICTENC,MONOLITH_OPCODES';
  }

    public run(script: string, flags: string, showDetails: boolean): void {

        this.errorStr = this.errorStr=this.result = this.log = null;

        if (!script || script.length == 0) 
          return;

        console.log('[app.component.ts.20] running', script, flags, showDetails); //TODO
        var res = this.scriptRunner.run(script, flags);
        console.log('[app.component.ts.26:res:]',res); //TODO
        this.errorStr = res.errorStr;
        this.errorDetail = res.errorDetail;
        this.result = res.result;
        this.log = showDetails ?  res.log : '';
    }

    public getExample(s:string) { 
        this.ex = this.scriptExamples.get(s);
    }


}
