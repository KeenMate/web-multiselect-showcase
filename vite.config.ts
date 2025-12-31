import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import packageLock from './package-lock.json' with { type: 'json' };

// Get version from package-lock.json (handles both normal and file: links)
const multiselectPkg = packageLock.packages['node_modules/@keenmate/web-multiselect'];
const multiselectVersion = multiselectPkg?.link
	? packageLock.packages[multiselectPkg.resolved]?.version
	: multiselectPkg?.version;

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		__MULTISELECT_VERSION__: JSON.stringify(multiselectVersion ?? 'unknown')
	}
});
