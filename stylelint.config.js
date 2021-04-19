module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
	plugins: ['stylelint-scss'],
	rules: {
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		indentation: ['tab'],
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global', 'local'],
			},
		],
	},
};
