import {Injectable} from "@angular/core";

@Injectable()
export class Generator {
  public doExpression(expression: string, input: string): string[] {
    try {
      let regexp = RegExp(expression, 'g');
      return input.match(regexp);
    } catch (error) {
      return null;
    }
  }
}
