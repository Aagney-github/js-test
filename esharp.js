/**
 * E# Compiler
 * 
 * NOTE: Source taken from https://gist.github.com/sma/78e572e2e0775cc2e570
 * @description A small programming language created for fun!
 */

const source = `PRINT "Hello"`;

const Console = {
    clear: "\x1B[H\x1B[J",
    write(s) { document.getElementById("console").innerHTML = s; },
    read() {
        const buffer = prompt("Input text");
        return buffer.toString('utf8', 0, length - 1);
    },
    exit(n) { return; }
};

class Basic {
    constructor(source) {
        this.tokens = [];
        this.lines = {};
        this.index = 0;
        this.variables = {};
        this.stack = [];
        this.tokenize(source);
    }

    tokenize(source) {
        source.replace(/\n\d+|\d+(\.\d*)?|\.\d+|REM.*$|\w+\$?|[-+*/():;,=]|<[=>]?|>=?|"[^"]*"/gm, m => {
            if (/^\n/.test(m)) {
                if (this.tokens.length) { this.tokens.push(":"); }
                this.lines[m.slice(1)] = this.tokens.length;
            } else {
                this.tokens.push(/^REM/.test(m) ? "REM" : m);
            }
        });
    }

    next() { return this.tokens[this.index++]; }

    back() { --this.index; return this; }

    at(token) {
        if (this.next() === token) { return true; }
        this.back();
    }

    atEnd() { return this.at(":"); }

    expect(token) {
        this.at(token) || this.error(`expected ${token} but found ${this.next()}`);
    }

    expectEnd() { this.expect(":"); }

    error(message) {
        throw new Error(message);
    }

    skip() {
        let index = Number.MAX_VALUE;
        Object.keys(this.lines).forEach(line => {
            const i = this.lines[line];
            if (i >= this.index) {
                index = Math.min(i, index);

            }
        }, this);
        this.index = index;
    }

    run() {
        while (true) { (this[this.name()] || this["assign"]).call(this); }
    }

    assign() {
        let name = this.back().name();
        let index = this.at("(") ? this.back().evaluate() : null;
        this.expect("=");
        let value = this.evaluate();
        if (index !== null) {
            this.variables[name + "()"][index] = value;
        } else {
            this.variables[name] = value;
        }
        this.expectEnd();
    }

    REM() {
        this.expectEnd();
    }

    LET() {
        this.next();
        this.assign();
    }

    DIM() {
        let name = this.name();
        let dim = this.evaluate()
        this.variables[name + "()"] = Array(dim + 1);
        this.expectEnd();
    }

    RANDOMIZE() {
        this.expectEnd();
    }

    PRINT() {
        function fmt(o) { return typeof o === "string" ? o : " " + o; }

        if (!this.atEnd()) {
            Console.write(fmt(this.evaluate()));
            while (this.at(";")) {
                if (this.atEnd()) { return; }
                Console.write(fmt(this.evaluate()));
            }
            this.expectEnd();
        }
        Console.write("\n");
    }

    INPUT() {
        let token = this.next();
        if (/^"/.test(token)) {
            Console.write(token.substring(1, token.length - 1));
            this.expect(";");
            token = this.next();
        }
        Console.write("? ");
        let s = Console.read();
        this.variables[token] = /\$$/.test(token) ? s : +s;
        this.expectEnd();
    }

    ON() {
        let value = this.evaluate();
        this.expect("GOTO");
        let lines = [this.next()];
        while (this.at(",")) {
            lines.push(this.next());
        }
        this.expectEnd();
        if (value >= 1 && value <= lines.length) {
            this.index = this.lines[lines[value - 1]];
        }
    }

    IF() {
        let value = this.condition();
        this.expect("THEN");
        let line = this.next();
        if (!/^\d/.test(line)) {
            this.back();
            if (!value) { this.skip(); }
            return;
        }
        this.expectEnd();
        if (value) { this.index = this.lines[line]; }
    }

    GOTO() {
        this.index = this.lines[this.next()];
    }

    GOSUB() {
        let index = this.lines[this.next()];
        this.expectEnd();
        this.stack.push(this.index);
        this.index = index;
    }

    RETURN() {
        this.index = this.stack.pop();
    }

    FOR() {
        let name = this.name();
        this.expect("=");
        let start = this.evaluate();
        this.expect("TO");
        let stop = this.evaluate();
        let step = this.at("STEP") ? this.evaluate() : start <= stop ? 1 : -1;
        this.expectEnd();
        this.variables[name] = start;
        this.stack.push({ name, stop, step, index: this.index });
    }

    NEXT() {
        if (!this.atEnd()) {
            this.name();
            this.expectEnd();
        }
        let a = this.stack.pop();
        this.variables[a.name] += a.step;
        if ((a.step > 0 && this.variables[a.name] <= a.stop)
            || (a.step < 0 && this.variables[a.name] >= a.stop)) {
            this.index = a.index;
            this.stack.push(a);
        }
    }

    CLEAR() {
        this.expectEnd();
        Console.write(Console.clear);
    }

    END() {
        this.expectEnd();
        Console.exit(0);
    }

    name() {
        const token = this.next();
        if (/^[a-zA-Z]/.test(token)) { return token; }
        throw new Error("expected name, but found " + token);
    }

    condition() {
        let left = this.condTerm() ? 1 : 0;
        while (true) {
            if (this.at("AND")) { left &= this.condTerm() ? 1 : 0; }
            else if (this.at("OR")) { left |= this.condTerm() ? 1 : 0; }
            else { return left; }
        }
    }

    condTerm() {
        const left = this.evaluate();
        if (this.at("=")) { return left === this.evaluate(); }
        if (this.at("<")) { return left < this.evaluate(); }
        if (this.at(">")) { return left > this.evaluate(); }
        if (this.at("<=")) { return left <= this.evaluate(); }
        if (this.at(">=")) { return left >= this.evaluate(); }
        if (this.at("<>")) { return left != this.evaluate(); }
        throw new Error("invalid condition");
    }

    evaluate() {
        let left = this.evalTerm();
        while (true) {
            if (this.at("+")) { left += this.evalTerm(); }
            else if (this.at("-")) { left -= this.evalTerm(); }
            else { return left; }
        }
    }

    evalTerm() {
        let left = this.evalFactor();
        while (true) {
            if (this.at("*")) { left *= this.evalFactor(); }
            else if (this.at("/")) { left /= this.evalFactor(); }
            else { return left; }
        }
    }

    evalFactor() {
        if (this.at("-")) { return -this.evalFactor(); }
        if (this.at("(")) {
            const value = this.evaluate();
            this.expect(")");
            return value;
        }
        const token = this.next();
        if (/^"/.test(token)) { return token.substring(1, token.length - 1); }
        if (/^\d|^\./.test(token)) { return +token; }
        if (/^[a-zA-Z]/.test(token)) {
            if (token === "CHR$") {
                const value = this.evalFactor();
                return value === 12 ? Console.clear : String.fromCharCode(value);
            }
            if (token === "INT") {
                return Math.floor(this.evalFactor());
            }
            if (token === "RND") {
                this.evalFactor();
                return Math.random();
            }
            if (token === "TAB") {
                this.evalFactor();
                return "\t";
            }
            if (this.at("(")) {
                const index = this.back().evaluate();
                return this.variables[token + "()"][index] || 0;
            }
            return this.variables[token] || 0;
        }
        throw new Error("cannot evaluate " + token);
    }
}

function executeCode() {
    try {
        new Basic($('#code').val()).run();
    } catch(e) {
        Console.write(e);
    }
}