module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential',
		'eslint:recommended'
	],
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/script-setup-uses-vars': 'off',
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'indent': [
			'error',
			'tab',
			{ 'SwitchCase': 1 }
		],
		'object-curly-spacing': ['error', 'always']
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		}
	]
}
