"use strict";
/**
 * @license
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils = require("tsutils");
var ts = require("typescript");
var Lint = require("../index");
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* tslint:enable:object-literal-sort-keys */
    Rule.FAILURE_STRING = function (keyword) {
        return "expected a 'break' before '" + ts.tokenToString(keyword) + "'";
    };
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoSwitchCaseFallThroughWalker(sourceFile, this.ruleName, undefined));
    };
    /* tslint:disable:object-literal-sort-keys */
    Rule.metadata = {
        ruleName: "no-switch-case-fall-through",
        description: "Disallows falling through case statements.",
        descriptionDetails: (_a = ["\n            For example, the following is not allowed:\n\n            ```ts\n            switch(foo) {\n                case 1:\n                    someFunc(foo);\n                case 2:\n                    someOtherFunc(foo);\n            }\n            ```\n\n            However, fall through is allowed when case statements are consecutive or\n            a magic `/* falls through */` comment is present. The following is valid:\n\n            ```ts\n            switch(foo) {\n                case 1:\n                    someFunc(foo);\n                    /* falls through */\n                case 2:\n                case 3:\n                    someOtherFunc(foo);\n            }\n            ```"], _a.raw = ["\n            For example, the following is not allowed:\n\n            \\`\\`\\`ts\n            switch(foo) {\n                case 1:\n                    someFunc(foo);\n                case 2:\n                    someOtherFunc(foo);\n            }\n            \\`\\`\\`\n\n            However, fall through is allowed when case statements are consecutive or\n            a magic \\`/* falls through */\\` comment is present. The following is valid:\n\n            \\`\\`\\`ts\n            switch(foo) {\n                case 1:\n                    someFunc(foo);\n                    /* falls through */\n                case 2:\n                case 3:\n                    someOtherFunc(foo);\n            }\n            \\`\\`\\`"], Lint.Utils.dedent(_a)),
        rationale: "Fall though in switch statements is often unintentional and a bug.",
        optionsDescription: "Not configurable.",
        options: null,
        optionExamples: [true],
        type: "functionality",
        typescriptOnly: false,
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoSwitchCaseFallThroughWalker = (function (_super) {
    tslib_1.__extends(NoSwitchCaseFallThroughWalker, _super);
    function NoSwitchCaseFallThroughWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoSwitchCaseFallThroughWalker.prototype.walk = function (sourceFile) {
        var _this = this;
        var cb = function (node) {
            if (utils.isSwitchStatement(node)) {
                _this.visitSwitchStatement(node);
            }
            return ts.forEachChild(node, cb);
        };
        return ts.forEachChild(sourceFile, cb);
    };
    NoSwitchCaseFallThroughWalker.prototype.visitSwitchStatement = function (_a) {
        var _this = this;
        var clauses = _a.caseBlock.clauses;
        clauses.forEach(function (clause, i) {
            if (i !== clauses.length - 1
                && clause.statements.length !== 0
                && !utils.endsControlFlow(clause)
                && !_this.isFallThroughAllowed(clause)) {
                var keyword = clauses[i + 1].getChildAt(0);
                _this.addFailureAtNode(keyword, Rule.FAILURE_STRING(keyword.kind));
            }
        });
    };
    NoSwitchCaseFallThroughWalker.prototype.isFallThroughAllowed = function (clause) {
        var _this = this;
        var comments = ts.getLeadingCommentRanges(this.sourceFile.text, clause.end);
        return comments !== undefined && comments.some(function (comment) { return commentText(comment, _this.sourceFile).trim() === "falls through"; });
    };
    return NoSwitchCaseFallThroughWalker;
}(Lint.AbstractWalker));
exports.NoSwitchCaseFallThroughWalker = NoSwitchCaseFallThroughWalker;
function commentText(_a, sourceFile) {
    var pos = _a.pos, end = _a.end, kind = _a.kind;
    return sourceFile.text.slice(pos + 2, kind === ts.SyntaxKind.MultiLineCommentTrivia ? end - 2 : end);
}
var _a;
