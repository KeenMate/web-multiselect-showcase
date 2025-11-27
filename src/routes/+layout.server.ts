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
			{
				label: 'Examples',
				icon: '🎨',
				children: [
					{ label: 'Basic', href: '/examples/basic' },
					{ label: 'Groups', href: '/examples/groups' },
					{ label: 'Flexible Data', href: '/examples/flexible-data' },
					{ label: 'Value Format', href: '/examples/value-format' },
					{ label: 'Form Integration', href: '/examples/form-integration' },
					{ label: 'Async Search', href: '/examples/async-search' },
					{ label: 'Virtual Scrolling', href: '/examples/virtual-scrolling' },
					{ label: 'Custom Styling', href: '/examples/custom-styling' },
					{ label: 'Display Modes', href: '/examples/display-modes' },
					{ label: 'RTL Support', href: '/examples/rtl' },
					{ label: 'Advanced Features', href: '/examples/advanced-features' }
				]
			},
			{
				label: 'API Reference',
				href: '/api/component',
				icon: '📚',
				children: [
					{ label: 'Component API', href: '/api/component' },
					{ label: 'Properties', href: '/api/properties' },
					{ label: 'Events', href: '/api/events' },
					{ label: 'Styling', href: '/api/styling' }
				]
			}
		]
	},
	features: {
		search: true,
		breadcrumbs: true,
		tableOfContents: true,
		analyticsScripts: [
		'<script defer data-domain="web-multiselect.keenmate.dev" src="https://stats.keenmate.services/js/plausible.js"></script>'
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
