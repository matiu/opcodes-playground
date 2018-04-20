import { Component } from '@angular/core';
import { ScriptRunner } from '../app/services/script.runner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ScriptRunner]
})
export class AppComponent {

  public result: boolean;
  public errorStr: string;
  public errorDetail: string;

  constructor(
      private scriptRunner:ScriptRunner
  ) {
  }

    public run(script: string): void {

        console.log('[app.component.ts.20] running', script); //TODO
        var res = this.scriptRunner.run(script);

        console.log('[app.component.ts.26:res:]',res); //TODO
        this.errorStr = res.errorStr;
        this.errorDetail = res.errorDetail;
        this.result = res.result;
  }
}
