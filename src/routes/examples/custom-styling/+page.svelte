<script lang="ts">
	import { DocLayout, ShowcaseSection, CodeBlock } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';

	let defaultSelect: any;
	let primarySelect: any;
	let customSelect: any;

	onMount(() => {

		const options = [
			{ value: 'js', label: 'JavaScript', icon: '🟨' },
			{ value: 'ts', label: 'TypeScript', icon: '🔷' },
			{ value: 'py', label: 'Python', icon: '🐍' },
			{ value: 'rb', label: 'Ruby', icon: '💎' }
		];

		if (defaultSelect) defaultSelect.options = options;
		if (primarySelect) primarySelect.options = options;
		if (customSelect) customSelect.options = options;
	});
</script>

<style>
	/* Primary themed multiselect */
	:global(web-multiselect.primary-theme) {
		--ml-input-border-color: #0d6efd;
		--ml-input-focus-border-color: #0d6efd;
		--ml-input-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
		--ml-option-bg-hover: #e7f1ff;
		--ml-option-bg-focused: #cfe2ff;
		--ml-option-bg-selected: #0d6efd;
		--ml-option-bg-selected-hover: #0b5ed7;
		--ml-option-title-color-selected: white;
		--ml-option-outline-focused: 2px solid #0d6efd;
		--ml-badge-bg: #0d6efd;
		--ml-badge-color: white;
		--ml-toggle-color: #0d6efd;
		--ml-counter-bg: #0d6efd;
		--ml-counter-color: white;
	}

	/* Custom dark theme */
	:global(web-multiselect.custom-dark) {
		--ml-input-bg: #2b2b2b;
		--ml-input-text: #e0e0e0;
		--ml-input-border-color: #444;
		--ml-input-placeholder-color: #999;
		--ml-input-focus-border-color: #6c5ce7;
		--ml-dropdown-bg: #2b2b2b;
		--ml-option-color: #e0e0e0;
		--ml-dropdown-border-color: #444;
		--ml-option-bg-hover: #3a3a3a;
		--ml-option-bg-selected: #6c5ce7;
		--ml-option-title-color: #e0e0e0;
		--ml-option-title-color-selected: white;
		--ml-badge-bg: #6c5ce7;
		--ml-badge-color: white;
		--ml-badge-bg-hover: #5f50d9;
		--ml-toggle-color: #e0e0e0;
		--ml-actions-bg: #2b2b2b;
		--ml-action-btn-bg: #3a3a3a;
		--ml-action-btn-color: #e0e0e0;
		--ml-action-btn-border-color: #555;
		--ml-action-btn-bg-hover: #4a4a4a;
		--ml-action-btn-border-color-hover: #6c5ce7;
		--ml-empty-color: #999;
	}
</style>

<DocLayout
	titleText="Custom Styling"
	descriptionColumnTitle="Customize appearance with CSS variables">

	<div class="py-4">
		<ShowcaseSection
			titleText="Default Styling"
			subtitleText="Out-of-the-box appearance"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Theme">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={defaultSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Default theme..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>No custom styling applied.</p>
					<p>Uses default component colors and spacing.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Default Theme</h5>
					<p>Clean, neutral styling that works everywhere.</p>
					<p>No configuration needed.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Primary Theme"
			subtitleText="Bootstrap primary color theme"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Theme">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						class="primary-theme"
						bind:this={primarySelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Primary theme..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Uses Bootstrap primary color for borders and selections.</p>
					<p>Apply with <code>class="primary-theme"</code></p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>CSS Variables</h5>
					<p><code>--ml-input-border-color</code></p>
					<p><code>--ml-option-selected-bg</code></p>
					<p><code>--ml-badge-bg</code></p>
					<p>Customized to Bootstrap primary color.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Custom Dark Theme"
			subtitleText="Fully customized dark appearance"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Theme">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						class="custom-dark"
						bind:this={customSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Dark theme..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Complete dark theme with custom purple accent.</p>
					<p>All colors customized via CSS variables.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Full Customization</h5>
					<p>Override any visual aspect:</p>
					<ul class="small">
						<li>Background colors</li>
						<li>Text colors</li>
						<li>Border colors</li>
						<li>Hover states</li>
					</ul>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- CSS Variables Reference -->
		<div class="mt-5">
			<h2 class="mb-4">Available CSS Variables</h2>
			<p class="lead">Customize any aspect of the component using CSS variables:</p>

			<div class="row g-4">
				<div class="col-md-6">
					<CodeBlock
						codeContent={`:root {
  /* Input Component */
  --ml-input-bg: #fff;
  --ml-input-color: #212529;
  --ml-input-border-color: #dee2e6;
  --ml-input-border-radius: 0.375rem;
  --ml-input-padding: 0.5rem 0.75rem;

  /* Focus State */
  --ml-input-focus-border-color: #86b7fe;
  --ml-input-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);

  /* Dropdown */
  --ml-dropdown-bg: #fff;
  --ml-dropdown-border-color: #dee2e6;
  --ml-dropdown-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --ml-options-max-height: 20rem;
}`}
						languageType="css"
						titleText="Input & Dropdown"
					/>
				</div>

				<div class="col-md-6">
					<CodeBlock
						codeContent={`:root {
  /* Options */
  --ml-option-padding: 0.5rem 0.75rem;
  --ml-option-hover-bg: #f8f9fa;
  --ml-option-selected-bg: #0d6efd;
  --ml-option-selected-color: #fff;

  /* Pills */
  --ml-badge-bg: #e9ecef;
  --ml-badge-color: #212529;
  --ml-badge-border-radius: 0.25rem;
  --ml-badge-padding: 0.25rem 0.5rem;
  --ml-badge-remove-hover-bg: #dc3545;

  /* Groups */
  --ml-group-header-bg: #f8f9fa;
  --ml-group-header-color: #6c757d;
}`}
						languageType="css"
						titleText="Options, Pills & Groups"
					/>
				</div>
			</div>
		</div>

		<!-- Theming Examples -->
		<div class="mt-5">
			<h2 class="mb-4">Theming Examples</h2>
			<div class="row g-4">
				<div class="col-md-6">
					<CodeBlock
						codeContent={`.success-theme {
  --ml-input-border-color: #198754;
  --ml-input-focus-border-color: #198754;
  --ml-option-selected-bg: #198754;
  --ml-badge-bg: #198754;
  --ml-badge-color: white;
}`}
						languageType="css"
						titleText="Success Theme"
					/>
				</div>
				<div class="col-md-6">
					<CodeBlock
						codeContent={`.minimal-theme {
  --ml-input-border-color: transparent;
  --ml-input-border-bottom: 2px solid #dee2e6;
  --ml-input-border-radius: 0;
  --ml-dropdown-border-radius: 0;
  --ml-badge-border-radius: 0;
}`}
						languageType="css"
						titleText="Minimal Theme"
					/>
				</div>
			</div>
		</div>

		<!-- Important Notes -->
		<div class="mt-5 p-4 bg-light border rounded">
			<h3 class="h5 mb-3">🎨 Styling Tips</h3>
			<ul class="mb-0">
				<li><strong>CSS Variables:</strong> All variables use the <code>--ml-</code> prefix to avoid conflicts</li>
				<li><strong>Scope:</strong> Apply custom classes to the multiselect element for scoped styling</li>
				<li><strong>Shadow DOM:</strong> Styles are applied inside Shadow DOM, ensuring encapsulation</li>
				<li><strong>SCSS:</strong> Import and override SCSS variables for deeper customization</li>
				<li><strong>Complete List:</strong> View all variables in the <a href="/api/styling">Styling API Reference</a></li>
			</ul>
		</div>
	</div>
</DocLayout>
