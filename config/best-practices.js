module.exports = {
	
	"rules": {
		"accessor-pairs": [ 1, {
			"getWithoutSet": true,
			"setWithoutGet": true
		}],
		"array-callback-return": 2,
		"block-scoped-var": 2,
		"class-methods-use-this": [ 2, {
			"exceptMethods": []
		}],
		"complexity": [ 1, {
			"max": 5
		}],
		"consistent-return": [ 2, {
			"treatUndefinedAsUnspecified": true
		}],
		"curly": [ 2, "all" ],
		"default-case": [ 2, {
			"commentPattern": ".*default.*"
		}],
		"dot-location": [ 2, "property" ],
		"dot-notation": [ 2, {
			"allowKeywords": true,
			"allowPattern": "[a-zA-Z_]+"
		}],
		"eqeqeq": [ 2, "smart" ],
		"guard-for-in": 2,
		"no-alert": 2,
		"no-caller": 2,
		"no-case-declarations": 2,
		"no-div-regex": 0,
		"no-else-return": 2,
		"no-empty-function": [ 2, {
			"allow": []
		}],
		"no-empty-pattern": 2,
		"no-eq-null": 2,
		"no-eval": [ 2, {
			"allowIndirect": false
		}],
		"no-extend-native": [ 2, {
			"exceptions": []
		}],
		"no-extra-bind": 2,
		"no-extra-label": 2,
		"no-fallthrough": 2,
		"no-floating-decimal": 2,
		"no-global-assign": [ 2, {
			"exceptions": []
		}],
		"no-implicit-coercion": [ 2, {
			"allow": [],
			"boolean": true,
			"number": true,
			"string": true
		}],
		"no-implicit-globals": 2,
		"no-implied-eval": 2,
		"no-invalid-this": 2,
		"no-iterator": 2,
		"no-labels": [ 2, {
			"allowLoop": false,
			"allowSwitch": false
		}],
		"no-lone-blocks": 2,
		"no-loop-func": 2,
		"no-magic-numbers": [ 2, {
			"detectObjects": true,
			"enforceConst": true,
			"ignore": [ -1, 0, 1, 2 ],
			"ignoreArrayIndexes": true
		}],
		"no-multi-spaces": [ 2, {
			"exceptions": {}
		}],
		"no-multi-str": 2,
		"no-new": 2,
		"no-new-func": 2,
		"no-new-wrappers": 2,
		"no-octal": 2,
		"no-octal-escape": 2,
		"no-param-reassign": [ 2, {
			"ignorePropertyModificationsFor": [],
			"props": true
		}],
		"no-proto": 2,
		"no-redeclare": [ 2, {
			"builtinGlobals": true
		}],
		"no-restricted-properties": 0,
		"no-return-assign": [ 2, "always"],
		"no-return-await": 2,
		"no-script-url": 2,
		"no-self-assign": [ 2, {
			"props": true
		}],
		"no-self-compare": 2,
		"no-sequences": 2,
		"no-throw-literal": 2,
		"no-unmodified-loop-condition": 2,
		"no-unused-expressions": [ 2, {
			"allowShortCircuit": false,
			"allowTaggedTemplates": false,
			"allowTernary": false
		}],
		"no-unused-labels": 2,
		"no-useless-call": 2,
		"no-useless-concat": 2,
		"no-useless-escape": 2,
		"no-useless-return": 2,
		"no-void": 2,
		"no-warning-comments": [ 1, {
			"location": "start",
			"terms": [ "todo", "fixme" ]
		}],
		"no-with": 2,
		"prefer-promise-reject-errors": [ 2, {
			"allowEmptyReject": false
		}],
		"radix": 0,
		"require-await": 2,
		"vars-on-top": 2,
		"wrap-iife": [ 2, "inside"],
		"yoda": [ 2, "never" ]
	}
};
