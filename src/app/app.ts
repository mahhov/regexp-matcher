import {Component} from "@angular/core";
import * as _ from "underscore";
import {DefaultContentProvider} from "./DefaultContentProvider";
import {Generator} from "./Generator";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  expression: string;
  input: string;
  output: string;

  constructor(private defaultContentProvider: DefaultContentProvider, private generator: Generator) {
    this.input = defaultContentProvider.betterNavBarDirective();
    this.update();
  }

  update(): void {
    let outputs = this.generator.doExpression(this.expression, this.input);
    if (outputs)
      this.output = _.reduce(outputs, (aggregate, output) => {
        return '{0}\n{1}'.formatUnicorn(aggregate, output);
      });
  }

  copy(): void {
    let output = document.getElementById('output');

    let range = window.document.createRange();
    range.selectNodeContents(output);

    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy')
  }
}
