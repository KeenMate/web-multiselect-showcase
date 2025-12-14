<script lang="ts">
	import { DocLayout, ShowcaseSection, CodeBlock } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';

	let defaultSelect: any;
	let primarySelect: any;
	let customSelect: any;
	let compactSelect: any;
	let defaultSizeSelect: any;
	let largeSelect: any;
	let xlSelect: any;

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
		if (compactSelect) compactSelect.options = options;
		if (defaultSizeSelect) defaultSizeSelect.options = options;
		if (largeSelect) largeSelect.options = options;
		if (xlSelect) xlSelect.options = options;
	});
</script>

<style>
	/* Primary themed multiselect */
	:global(web-multiselect.primary-theme) {
		--ms-input-border-color: #0d6efd;
		--ms-input-focus-border-color: #0d6efd;
		--ms-input-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
		--ms-option-bg-hover: #e7f1ff;
		--ms-option-bg-focused: #cfe2ff;
		--ms-option-bg-selected: #0d6efd;
		--ms-option-bg-selected-hover: #0b5ed7;
		--ms-option-title-color-selected: white;
		--ms-option-outline-focused: 2px solid #0d6efd;
		--ms-badge-bg: #0d6efd;
		--ms-badge-color: white;
		--ms-toggle-color: #0d6efd;
		--ms-counter-bg: #0d6efd;
		--ms-counter-color: white;
	}

	/* Custom dark theme */
	:global(web-multiselect.custom-dark) {
		--ms-input-background: #2b2b2b;
		--ms-input-text: #e0e0e0;
		--ms-input-border-color: #444;
		--ms-input-placeholder-color: #999;
		--ms-input-focus-border-color: #6c5ce7;
		--ms-dropdown-background: #2b2b2b;
		--ms-option-color: #e0e0e0;
		--ms-dropdown-border-color: #444;
		--ms-option-bg-hover: #3a3a3a;
		--ms-option-bg-selected: #6c5ce7;
		--ms-option-title-color: #e0e0e0;
		--ms-option-title-color-selected: white;
		--ms-badge-bg: #6c5ce7;
		--ms-badge-color: white;
		--ms-badge-bg-hover: #5f50d9;
		--ms-toggle-color: #e0e0e0;
		--ms-actions-background: #2b2b2b;
		--ms-action-btn-bg: #3a3a3a;
		--ms-action-btn-color: #e0e0e0;
		--ms-action-btn-border-color: #555;
		--ms-action-btn-bg-hover: #4a4a4a;
		--ms-action-btn-border-color-hover: #6c5ce7;
		--ms-empty-color: #999;
	}
</style>

<DocLayout
	titleText="Custom Styling"
	descriptionColumnTitle="Customize appearance with CSS variables">

	<div class="py-4">
		<ShowcaseSection
			titleText="CS01 Default Styling"
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
			titleText="CS02 Primary Theme"
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
					<p><code>--ms-input-border-color</code></p>
					<p><code>--ms-option-selected-bg</code></p>
					<p><code>--ms-badge-bg</code></p>
					<p>Customized to Bootstrap primary color.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="CS03 Custom Dark Theme"
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

		<ShowcaseSection
			titleText="CS04 Sizing with --ms-rem"
			subtitleText="Scale the entire component proportionally"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Scaling"
			descriptionColumnTitle="Details">

			{#snippet demoContent()}
				<div class="d-flex flex-column gap-3">
					<div>
						<label class="form-label small text-muted mb-1">Compact (--ms-rem: 8px) - 80%</label>
						<web-multiselect
							bind:this={compactSelect}
							style="--ms-rem: 8px;"
							value-member="value"
							display-value-member="label"
							multiple="false"
							search-placeholder="Compact..."
						></web-multiselect>
					</div>
					<div>
						<label class="form-label small text-muted mb-1">Default (--ms-rem: 10px) - 100%</label>
						<web-multiselect
							bind:this={defaultSizeSelect}
							value-member="value"
							display-value-member="label"
							multiple="false"
							search-placeholder="Default..."
						></web-multiselect>
					</div>
					<div>
						<label class="form-label small text-muted mb-1">Large (--ms-rem: 12px) - 120%</label>
						<web-multiselect
							bind:this={largeSelect}
							style="--ms-rem: 12px;"
							value-member="value"
							display-value-member="label"
							multiple="false"
							search-placeholder="Large..."
						></web-multiselect>
					</div>
					<div>
						<label class="form-label small text-muted mb-1">Extra Large (--ms-rem: 15px) - 150%</label>
						<web-multiselect
							bind:this={xlSelect}
							style="--ms-rem: 15px;"
							value-member="value"
							display-value-member="label"
							multiple="false"
							search-placeholder="Extra large..."
						></web-multiselect>
					</div>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Use the <code>--ms-rem</code> CSS variable:</p>
					<ul class="small mb-2">
						<li><code>8px</code> - 80% (compact)</li>
						<li><code>10px</code> - 100% (default)</li>
						<li><code>12px</code> - 120% (large)</li>
						<li><code>1rem</code> - Pure Admin integration</li>
					</ul>
					<p class="mb-0">All dimensions scale proportionally.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>How It Works</h5>
					<p>The <code>--ms-rem</code> variable is the base unit for all sizing calculations.</p>
					<p>Example: <code>calc(1.4 * var(--ms-rem))</code> = 14px at default.</p>
					<p class="mb-0"><strong>Note:</strong> Set on the element itself, not wrapper divs (Shadow DOM).</p>
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
  --ms-input-background: #fff;
  --ms-input-color: #212529;
  --ms-input-border-color: #dee2e6;
  --ms-input-border-radius: 0.375rem;
  --ms-input-padding: 0.5rem 0.75rem;

  /* Focus State */
  --ms-input-focus-border-color: #86b7fe;
  --ms-input-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);

  /* Dropdown */
  --ms-dropdown-background: #fff;
  --ms-dropdown-border-color: #dee2e6;
  --ms-dropdown-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --ms-options-max-height: 20rem;
}`}
						languageType="css"
						titleText="Input & Dropdown"
					/>
				</div>

				<div class="col-md-6">
					<CodeBlock
						codeContent={`:root {
  /* Options */
  --ms-option-padding: 0.5rem 0.75rem;
  --ms-option-hover-bg: #f8f9fa;
  --ms-option-selected-bg: #0d6efd;
  --ms-option-selected-color: #fff;

  /* Pills */
  --ms-badge-bg: #e9ecef;
  --ms-badge-color: #212529;
  --ms-badge-border-radius: 0.25rem;
  --ms-badge-padding: 0.25rem 0.5rem;
  --ms-badge-remove-hover-bg: #dc3545;

  /* Groups */
  --ms-group-header-bg: #f8f9fa;
  --ms-group-header-color: #6c757d;
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
  --ms-input-border-color: #198754;
  --ms-input-focus-border-color: #198754;
  --ms-option-selected-bg: #198754;
  --ms-badge-bg: #198754;
  --ms-badge-color: white;
}`}
						languageType="css"
						titleText="Success Theme"
					/>
				</div>
				<div class="col-md-6">
					<CodeBlock
						codeContent={`.minimal-theme {
  --ms-input-border-color: transparent;
  --ms-input-border-bottom: 2px solid #dee2e6;
  --ms-input-border-radius: 0;
  --ms-dropdown-border-radius: 0;
  --ms-badge-border-radius: 0;
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
				<li><strong>CSS Variables:</strong> All variables use the <code>--ms-</code> prefix to avoid conflicts</li>
				<li><strong>Scope:</strong> Apply custom classes to the multiselect element for scoped styling</li>
				<li><strong>Shadow DOM:</strong> Styles are applied inside Shadow DOM, ensuring encapsulation</li>
				<li><strong>Scaling:</strong> Use <code>--ms-rem</code> to proportionally scale all component sizes</li>
				<li><strong>Complete List:</strong> View all variables in the <a href="/api/styling">Styling API Reference</a></li>
			</ul>
		</div>
	</div>
</DocLayout>
