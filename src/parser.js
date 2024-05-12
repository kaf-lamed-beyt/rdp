/**
 * Letter parser: recursive descent implementation
 */

class Parser {
  // our parse method accepts a string and converts into AST
  parse(string) {
    this._string = string;

    return this.Program();
  }

  // the main entrypoint of this parser
  Program() {
    return this.NumericLiteral();
  }

  NumericLiteral() {
    return {
      type: "NumericLiteral",
      value: Number(this._string),
    };
  }
}

module.exports = {
  Parser,
};
