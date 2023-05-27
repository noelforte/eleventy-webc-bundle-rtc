const bundlerPlugin = require('@11ty/eleventy-plugin-bundle');
const webCPlugin = require('@11ty/eleventy-plugin-webc');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(webCPlugin, {
		components: 'components/**/*.webc',
	});

	return {
		dir: {
			input: 'src',
			output: 'out',
		},
	};
};
