module.exports = {
	
	"rules": {
		"no-await-in-loop": 2,
		"no-compare-neg-zero": 2,
		"no-cond-assign": [ 2, "always" ],
		"no-console": [ 1, {
			"allow": [ "error", "warn" ]
		}],
		"no-constant-condition": [ 2, {
			"checkLoops": true
		}],
		"no-control-regex": 2,
		"no-debugger": 2,
		"no-dupe-args": 2,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-empty": [ 2, {
			"allowEmptyCatch": false
		}],
		"no-empty-character-class": 2,
		"no-ex-assign": 2,
		"no-extra-boolean-cast": 2,
		"no-extra-parens": [ 2, "all", {
			"conditionalAssign": false,
			"ignoreJSX": "multi-line",
			"nestedBinaryExpressions": true,
			"returnAssign": false
		}],
		"no-extra-semi": 2,
		"no-func-assign": 2,
		"no-inner-declarations": [ 2, "both" ],
		"no-invalid-regexp": [ 2, {
			"allowConstructorFlags": []
		}],
		"no-irregular-whitespace": [ 2, {
			"skipComments": false,
			"skipRegExps": false,
			"skipStrings": false,
			"skipTemplates": false
		}],
		"no-obj-calls": 2,
		"no-prototype-builtins": 0,
		"no-regex-spaces": 2,
		"no-sparse-arrays": 2,
		"no-template-curly-in-string": 1,
		"no-unexpected-multiline": 2,
		"no-unreachable": 2,
		"no-unsafe-finally": 2,
		"no-unsafe-negation": 2,
		"use-isnan": 2,
		"valid-jsdoc": [ 2, {
			"matchDescription": ".*",
			"prefer": {
				"arg": "param",
				"argument": "param",
				"return": "returns"
			},
			"preferType": {
				"Boolean": "Boolean",
				"Number": "Number",
				"object": "Object",
				"String": "String"
			},
			"requireParamDescription": true,
			"requireReturn": false,
			"requireReturnDescription": true,
			"requireReturnType": true
		}],
		"valid-typeof": 2
	}
};
