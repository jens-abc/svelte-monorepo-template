import { config } from '@libs/eslint-config/index.js';

export default [
	...config,
	{
		ignores: ['.svelte-kit/*']
	}
];
