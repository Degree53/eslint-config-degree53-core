module.exports = {
	
	"rules": {
		"array-bracket-spacing": 0,
		"block-spacing": 0,
		"brace-style": [ 2, "1tbs", {
			"allowSingleLine": false
		}],
		"camelcase": [ 2, {
			"properties": "always"
		}],
		"capitalized-comments": 0,
		"comma-dangle": [ 2, "never"],
		"comma-spacing": [ 2, {
			"after": true,
			"before": false
		}],
		"comma-style": [ 2, "last" ],
		"computed-property-spacing": [ 2, "never" ],
		"consistent-this": [ 2, "self" ],
		"eol-last": 0,
		"func-call-spacing": [ 2, "never"],
		"func-name-matching": [ 2, "always", {
			"includeCommonJSModuleExports": false
		}],
		"func-names": [ 2, "always"],
		"func-style": 0,
		"id-blacklist": 0,
		"id-length": 0,
		"id-match": 0,
		"indent": [ 2, "tab", {
			"ArrayExpression": 1,
			"CallExpression": {
				"arguments": "first"
			},
			"FunctionDeclaration": {
				"body": 1,
				"parameters": "first"
			},
			"FunctionExpression": {
				"body": 1,
				"parameters": "first"
			},
			"MemberExpression": 1,
			"ObjectExpression": 1,
			"outerIIFEBody": 1,
			"SwitchCase": 1,
			"VariableDeclarator": 1
		}],
		"jsx-quotes": [ 2, "prefer-double" ],
		"key-spacing": [ 2, {
			"afterColon": true,
			"beforeColon": false,
			"mode": "strict"
		}],
		"keyword-spacing": [ 2, {
			"after": true,
			"before": true,
			"overrides": {}
		}],
		"line-comment-position": 0,
		"linebreak-style": 0,
		"lines-around-comment": 0,
		"lines-around-directive": 0,
		"max-depth": [ 1, 5 ],
		"max-len": [ 1, 100 ],
		"max-lines": 0,
		"max-nested-callbacks": [ 1, 5 ],
		"max-params": [ 1, 5 ],
		"max-statements": [ 1, 10 ],
		"max-statements-per-line": [ 2, {
			"max": 1
		}],
		"multiple-ternary": 0,
		"new-cap": [ 2, {
			"capIsNew": true,
			"capIsNewExceptions": [],
			"newIsCap": true,
			"newIsCapExceptions": [],
			"properties": true
		}],
		"new-parens": 2,
		"newline-after-var": 0,
		"newline-before-return": 0,
		"newline-per-chained-call": 0,
		"no-array-constructor": 0,
		"no-bitwise": 0,
		"no-continue": 0,
		"no-inline-comments": 0,
		"no-lonely-if": 2,
		"no-mixed-operators": 0,
		"no-mixed-spaces-and-tabs": 2,
		"no-multi-assign": 2,
		"no-multiple-empty-lines": 0,
		"no-negated-condition": 0,
		"no-nested-ternary": 2,
		"no-new-object": 2,
		"no-plusplus": 0,
		"no-restricted-syntax": 0,
		"no-tabs": 0,
		"no-ternary": 0,
		"no-trailing-spaces": [ 2, {
			"skipBlankLines": true
		}],
		"no-underscore-dangle": 0,
		"no-unneeded-ternary": [ 2, {
			"defaultAssignment": true
		}],
		"no-whitespace-before-property": 2,
		"nonblock-statement-body-position": [ 2, "beside" ],
		"object-curly-newline": 0,
		"object-curly-spacing": 0,
		"object-property-newline": 0,
		"one-var": [ 2, "never" ],
		"one-var-declaration-per-line": [ 2, "always" ],
		"operator-assignment": [ 2, "always" ],
		"operator-linebreak": [ 2, "after", {
			"overrides": {
				":": "ignore"
			}
		}],
		"padded-blocks": 0,
		"quote-props": [ 2, "as-needed", {
			"keywords": true,
			"numbers": true,
			"unnecessary": true
		}],
		"quotes": [ 2, "single", {
			"allowTemplateLiterals": true,
			"avoidEscape": true
		}],
		"require-jsdoc": 0,
		"semi": [ 2 , "always", {
			"omitLastInOneLineBlock": false
		}],
		"semi-spacing": [ 2, {
			"after": true,
			"before": false
		}],
		"sort-keys": 0,
		"sort-vars": 0,
		"space-before-blocks": [ 2, "always" ],
		"space-before-function-paren": 0,
		"space-in-parens": [ 2, "never" ],
		"space-infix-ops": [ 2, {
			"int32Hint": false
		}],
		"space-unary-ops": [ 2, {
			"nonwords": false,
			"overrides": {},
			"words": true
		}],
		"spaced-comment": [ 2, "always", {
			"exceptions": [],
			"markers": []
		}],
		"template-tag-spacing": [ 2, "never" ],
		"unicode-bom": 0,
		"wrap-regex": 2
	}
};
