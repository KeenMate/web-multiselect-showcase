import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import multiselectPkg from '@keenmate/web-multiselect/package.json' with { type: 'json' };

const multiselectVersion = multiselectPkg?.version;

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		__MULTISELECT_VERSION__: JSON.stringify(multiselectVersion ?? 'unknown')
	}
});
