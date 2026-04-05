import type { PartialDocsConfig } from '@keenmate/svelte-docs';
import { mergeConfig, defaultConfig, generateSSRStyles } from '@keenmate/svelte-docs';

// Enable prerendering for all routes
export const prerender = true;
export const ssr = true;

const config: PartialDocsConfig = {
	site: {
		title: 'Web MultiSelect Showcase',
		description: 'Complete showcase and documentation for @keenmate/web-multiselect component library',
		keywords: ['multiselect', 'multi-select', 'select', 'dropdown', 'typeahead', 'autocomplete', 'web-component', 'showcase', 'keenmate'],
		author: 'KeenMate',
		url: 'https://web-multiselect.keenmate.com',
		language: 'en'
	},
	company: {
		name: 'KeenMate',
		website: 'https://keenmate.com?utm_source=web-multiselect-showcase',
		social: {
			github: 'https://github.com/keenmate/web-multiselect'
		}
	},
	navigation: {
		main: [
			{ label: 'Home', href: '/', icon: '🏠' },
			{ label: 'Getting Started', href: '/getting-started', icon: '🚀' },
			{ label: 'Security', href: '/api/security', icon: '🔒' },
			{
				label: 'Features',
				href: '/features/basic',
				icon: '✨',
				children: [
					{ label: 'Basic Usage', href: '/features/basic' },
					{ label: 'Groups', href: '/features/groups' },
					{ label: 'Flexible Data', href: '/features/flexible-data' },
					{ label: 'Value Format', href: '/features/value-format' },
					{ label: 'Form Integration', href: '/features/form-integration' },
					{ label: 'Async Search', href: '/features/async-search' },
					{ label: 'Virtual Scrolling', href: '/features/virtual-scrolling' },
					{ label: 'Display Modes', href: '/features/display-modes' },
					{ label: 'RTL Support', href: '/features/rtl' },
					{ label: 'Advanced Features', href: '/features/advanced-features' },
					{ label: 'Custom Styling', href: '/features/custom-styling' }
				]
			},
			{
				label: 'API Reference',
				href: '/api/component',
				icon: '📚',
				children: [
					{ label: 'Component API', href: '/api/component' },
					{ label: 'Properties', href: '/api/properties' },
					{ label: 'Events', href: '/api/events' }
				]
			}
		]
	},
	features: {
		search: true,
		breadcrumbs: true,
		tableOfContents: true,
		analyticsScripts: [
			'<script async src="https://stats.keenmate.services/js/pa-5gQ0SQKYTAhXs7T4v58Pl.js"></script>',
			`<script>window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()</script>`
		]
	}
};

export async function load() {
	const mergedConfig = mergeConfig(defaultConfig, config);
	const ssrStyles = generateSSRStyles(mergedConfig);

	return {
		config: mergedConfig,
		ssrStyles
	};
}
