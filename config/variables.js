module.exports = {
	
	"rules": {
		"init-declarations": 0,
		"no-catch-shadow": 2,
		"no-delete-var": 2,
		"no-label-var": 2,
		"no-restricted-globals": 0,
		"no-shadow": [ 2, {
			"allow": [],
			"builtinGlobals": true,
			"hoist": "all"
		}],
		"no-shadow-restricted-names": 2,
		"no-undef": [ 2, {
			"typeof": true
		}],
		"no-undef-init": 2,
		"no-undefined": 0,
		"no-unused-vars": [ 2, {
			"args": "after-used",
			"argsIgnorePattern": "",
			"caughtErrors": "none",
			"caughtErrorsIgnorePattern": "",
			"ignoreRestSiblings": false,
			"vars": "all",
			"varsIgnorePattern": ""
		}],
		"no-use-before-define": [ 2, {
			"classes": true,
			"functions": true,
			"variables": true
		}]
	}
};
