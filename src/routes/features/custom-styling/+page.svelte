<script lang="ts">
	import { DocLayout, ShowcaseSection, CodeBlock } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';

	let scaleXsSelect: any;
	let scaleSmSelect: any;
	let scaleMdSelect: any;
	let scaleLgSelect: any;
	let scaleXlSelect: any;
	let fineGrained1: any;
	let fineGrained2: any;
	let fineGrained3: any;
	let themeDefaultSelect: any;
	let themePrimarySelect: any;
	let themeDarkSelect: any;

	onMount(() => {
		const options = [
			{ value: 'js', label: 'JavaScript', icon: '🟨' },
			{ value: 'ts', label: 'TypeScript', icon: '🔷' },
			{ value: 'py', label: 'Python', icon: '🐍' },
			{ value: 'rb', label: 'Ruby', icon: '💎' },
			{ value: 'go', label: 'Go', icon: '🐹' },
			{ value: 'rs', label: 'Rust', icon: '🦀' }
		];

		// Scale demos
		if (scaleXsSelect) scaleXsSelect.options = options;
		if (scaleSmSelect) scaleSmSelect.options = options;
		if (scaleMdSelect) scaleMdSelect.options = options;
		if (scaleLgSelect) scaleLgSelect.options = options;
		if (scaleXlSelect) scaleXlSelect.options = options;

		// Fine-grained control demos
		if (fineGrained1) fineGrained1.options = options;
		if (fineGrained2) fineGrained2.options = options;
		if (fineGrained3) fineGrained3.options = options;

		// Theme demos
		if (themeDefaultSelect) themeDefaultSelect.options = options;
		if (themePrimarySelect) themePrimarySelect.options = options;
		if (themeDarkSelect) themeDarkSelect.options = options;
	});
</script>

<style>
	/* Scale classes for the component */
	:global(web-multiselect.scale-xs) { --ms-rem: 6px; }
	:global(web-multiselect.scale-sm) { --ms-rem: 8px; }
	:global(web-multiselect.scale-md) { --ms-rem: 10px; }
	:global(web-multiselect.scale-lg) { --ms-rem: 12px; }
	:global(web-multiselect.scale-xl) { --ms-rem: 15px; }

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
		--ms-input-bg: #2b2b2b;
		--ms-input-text: #e0e0e0;
		--ms-input-border-color: #444;
		--ms-input-placeholder-color: #999;
		--ms-input-focus-border-color: #6c5ce7;
		--ms-dropdown-bg: #2b2b2b;
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
		--ms-actions-bg: #2b2b2b;
		--ms-action-btn-bg: #3a3a3a;
		--ms-action-btn-color: #e0e0e0;
		--ms-action-btn-border-color: #555;
		--ms-action-btn-bg-hover: #4a4a4a;
		--ms-action-btn-border-color-hover: #6c5ce7;
		--ms-empty-color: #999;
	}
</style>

<DocLayout
	titleText="Custom Styling & Sizing"
	descriptionText="Scale component with --ms-rem CSS variable and customize with 125+ CSS custom properties"
>
	<div class="py-1">
		<!-- Overview -->
		<section class="mb-5">
			<p class="lead">
				The multiselect provides flexible sizing via CSS variables and complete theming control via CSS custom properties.
			</p>
			<p>
				<strong>Sizing & theming approaches:</strong>
			</p>
			<ul>
				<li><code>--ms-rem</code> CSS variable - Scales the entire component proportionally (default: 10px)</li>
				<li>Individual CSS variables - Fine-grained control over spacing, fonts, colors, etc.</li>
				<li>Component-scoped themes - Apply a class with overrides for a single instance</li>
			</ul>
			<div class="alert alert-info">
				<strong>New in v1.10.0:</strong>
				<ul class="mb-0 mt-2">
					<li>See <a href="https://github.com/keenmate/web-multiselect/blob/main/THEMING.md" target="_blank" rel="noopener"><code>THEMING.md</code></a> for the complete state-by-state theming reference (every <code>.ms__*</code> class, every <code>--ms-*</code> variable, every interactive state).</li>
					<li>The remove (X) buttons on badges, the count display, and the selected-items popover now render as SVG via <code>mask-image</code> + <code>currentColor</code>, so their color flows through the existing <code>--ms-badge-remove-color</code>, <code>--ms-count-clear-color</code>, and <code>--ms-selected-popover-close-color</code> variables.</li>
					<li>Three new icon-size variables let you tune glyph dimensions independently: <code>--ms-badge-remove-icon-size</code>, <code>--ms-count-clear-icon-size</code>, <code>--ms-selected-popover-close-icon-size</code>.</li>
				</ul>
			</div>
		</section>

		<!-- Component Scaling with --ms-rem -->
		<ShowcaseSection
			titleText="CS01 Component Scaling with --ms-rem"
			subtitleText="Scale the entire component by setting the --ms-rem CSS variable"
			col1Title="Live Demo"
			col2Title="Code Examples"
			col3Title="How It Works">

			{#snippet demoContent()}
				<div class="mb-4">
					<label class="form-label fw-bold">Extra Small (60%) - --ms-rem: 6px</label>
					<web-multiselect
						bind:this={scaleXsSelect}
						class="scale-xs"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Select languages..."></web-multiselect>
					<small class="text-muted">Perfect for dense dashboards</small>
				</div>

				<div class="mb-4">
					<label class="form-label fw-bold">Small (80%) - --ms-rem: 8px</label>
					<web-multiselect
						bind:this={scaleSmSelect}
						class="scale-sm"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Select languages..."></web-multiselect>
					<small class="text-muted">Good for compact layouts</small>
				</div>

				<div class="mb-4">
					<label class="form-label fw-bold">Medium (100%) - --ms-rem: 10px (default)</label>
					<web-multiselect
						bind:this={scaleMdSelect}
						class="scale-md"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Select languages..."></web-multiselect>
					<small class="text-muted">Standard size</small>
				</div>

				<div class="mb-4">
					<label class="form-label fw-bold">Large (120%) - --ms-rem: 12px</label>
					<web-multiselect
						bind:this={scaleLgSelect}
						class="scale-lg"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Select languages..."></web-multiselect>
					<small class="text-muted">Spacious desktop layouts</small>
				</div>

				<div>
					<label class="form-label fw-bold">Extra Large (150%) - --ms-rem: 15px</label>
					<web-multiselect
						bind:this={scaleXlSelect}
						class="scale-xl"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Select languages..."></web-multiselect>
					<small class="text-muted">Touch-friendly, accessibility</small>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<CodeBlock
					codeContent={`/* Define scale classes in CSS */
web-multiselect.scale-xs { --ms-rem: 6px; }
web-multiselect.scale-sm { --ms-rem: 8px; }
web-multiselect.scale-md { --ms-rem: 10px; }
web-multiselect.scale-lg { --ms-rem: 12px; }
web-multiselect.scale-xl { --ms-rem: 15px; }`}
					languageType="css"
					titleText="CSS Classes"
				/>

				<CodeBlock
					codeContent={`<!-- Use scale classes -->
<web-multiselect class="scale-xs"></web-multiselect>
<web-multiselect class="scale-sm"></web-multiselect>
<web-multiselect class="scale-lg"></web-multiselect>
<web-multiselect class="scale-xl"></web-multiselect>

<!-- Or use inline style -->
<web-multiselect style="--ms-rem: 15px;"></web-multiselect>

<!-- Custom scale (e.g., 120%) -->
<web-multiselect style="--ms-rem: 12px;"></web-multiselect>`}
					languageType="html"
					titleText="HTML"
				/>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose">
					<h5>How --ms-rem Works</h5>
					<p>The <code>--ms-rem</code> CSS variable is the base unit (default: 10px) used throughout the component. All spacing, fonts, and sizes are calculated relative to this value.</p>

					<h5>Scale Values</h5>
					<ul>
						<li><code>6px</code> - 60% scale (extra small)</li>
						<li><code>8px</code> - 80% scale (small)</li>
						<li><code>10px</code> - 100% scale (default)</li>
						<li><code>12px</code> - 120% scale (large)</li>
						<li><code>15px</code> - 150% scale (extra large)</li>
					</ul>

					<h5>Important: Shadow DOM</h5>
					<p>CSS variables must be set directly on the <code>&lt;web-multiselect&gt;</code> element (via class or inline style), not on a wrapper div. This is due to Shadow DOM encapsulation.</p>

					<h5>Benefits</h5>
					<ul>
						<li><strong>Proportional scaling</strong> - Everything scales together</li>
						<li><strong>Any value</strong> - Not limited to preset sizes</li>
						<li><strong>Responsive</strong> - Use media queries to scale based on viewport</li>
					</ul>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- Fine-Grained Control -->
		<ShowcaseSection
			titleText="CS02 Fine-Grained Control"
			subtitleText="Override individual CSS variables for precise control"
			col1Title="Live Demo"
			col2Title="Code Examples"
			col3Title="Available Variables">

			{#snippet demoContent()}
				<div class="mb-4">
					<label class="form-label fw-bold">Large Scale + Compact Spacing</label>
					<web-multiselect
						bind:this={fineGrained1}
						style="--ms-rem: 12px; --ms-input-padding-v: 0.2rem; --ms-input-padding-h: 0.4rem;"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Select..."></web-multiselect>
					<small class="text-muted">Big text with tight padding</small>
				</div>

				<div class="mb-4">
					<label class="form-label fw-bold">Normal Scale + Large Fonts</label>
					<web-multiselect
						bind:this={fineGrained2}
						style="--ms-rem: 10px; --ms-input-font-size: 18px; --ms-option-font-size: 16px;"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Select..."></web-multiselect>
					<small class="text-muted">Normal layout with larger text</small>
				</div>

				<div>
					<label class="form-label fw-bold">Small Scale + Spacious Padding</label>
					<web-multiselect
						bind:this={fineGrained3}
						style="--ms-rem: 8px; --ms-input-padding-v: 0.8rem; --ms-input-padding-h: 1rem;"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Select..."></web-multiselect>
					<small class="text-muted">Compact text with generous padding</small>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<CodeBlock
					codeContent={`<!-- Large scale + compact spacing -->
<web-multiselect style="
  --ms-rem: 12px;
  --ms-input-padding-v: 0.2rem;
  --ms-input-padding-h: 0.4rem;
"></web-multiselect>

<!-- Normal scale + large fonts -->
<web-multiselect style="
  --ms-rem: 10px;
  --ms-input-font-size: 18px;
  --ms-option-font-size: 16px;
"></web-multiselect>

<!-- Small scale + spacious padding -->
<web-multiselect style="
  --ms-rem: 8px;
  --ms-input-padding-v: 0.8rem;
  --ms-input-padding-h: 1rem;
"></web-multiselect>`}
					languageType="html"
					titleText="HTML"
				/>

				<CodeBlock
					codeContent={`/* Or define in CSS */
web-multiselect.custom-dense {
  --ms-rem: 12px;
  --ms-input-padding-v: 0.2rem;
  --ms-input-padding-h: 0.4rem;
}

web-multiselect.custom-readable {
  --ms-input-font-size: 18px;
  --ms-option-font-size: 16px;
  --ms-badge-font-size: 14px;
}`}
					languageType="css"
					titleText="CSS"
				/>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose">
					<h5>Spacing Variables</h5>
					<ul class="small">
						<li><code>--ms-input-padding-v</code> - Vertical padding</li>
						<li><code>--ms-input-padding-h</code> - Horizontal padding</li>
						<li><code>--ms-option-padding-v</code> - Option vertical padding</li>
						<li><code>--ms-option-padding-h</code> - Option horizontal padding</li>
						<li><code>--ms-badge-padding-v</code> - Badge vertical padding</li>
						<li><code>--ms-badge-padding-h</code> - Badge horizontal padding</li>
					</ul>

					<h5>Font Size Variables</h5>
					<ul class="small">
						<li><code>--ms-input-font-size</code> - Input text size</li>
						<li><code>--ms-option-font-size</code> - Option text size</li>
						<li><code>--ms-badge-font-size</code> - Badge text size</li>
						<li><code>--ms-group-label-font-size</code> - Group header size</li>
					</ul>

					<h5>Use Cases</h5>
					<ul>
						<li><strong>Accessibility</strong> - Larger fonts without changing layout</li>
						<li><strong>Dense dashboards</strong> - Compact spacing with readable text</li>
						<li><strong>Touch interfaces</strong> - Large targets with normal fonts</li>
					</ul>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- CSS Custom Properties (Theming) -->
		<ShowcaseSection
			titleText="CS03 CSS Custom Properties (Theming)"
			subtitleText="Customize colors, borders, and more with CSS variables"
			col1Title="Live Demo"
			col2Title="Code Examples"
			col3Title="How to Use">

			{#snippet demoContent()}
				<div class="mb-4">
					<label class="form-label fw-bold">Default Theme</label>
					<web-multiselect
						bind:this={themeDefaultSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Default theme..."></web-multiselect>
					<small class="text-muted">Out-of-the-box appearance</small>
				</div>

				<div class="mb-4">
					<label class="form-label fw-bold">Primary Theme (Bootstrap)</label>
					<web-multiselect
						bind:this={themePrimarySelect}
						class="primary-theme"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Primary theme..."></web-multiselect>
					<small class="text-muted">Bootstrap primary color</small>
				</div>

				<div>
					<label class="form-label fw-bold">Custom Dark Theme</label>
					<web-multiselect
						bind:this={themeDarkSelect}
						class="custom-dark"
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Dark theme..."></web-multiselect>
					<small class="text-muted">Fully customized dark appearance</small>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<CodeBlock
					codeContent={`/* Primary theme */
web-multiselect.primary-theme {
  --ms-input-border-color: #0d6efd;
  --ms-input-focus-border-color: #0d6efd;
  --ms-option-bg-selected: #0d6efd;
  --ms-option-title-color-selected: white;
  --ms-badge-bg: #0d6efd;
  --ms-badge-color: white;
}

/* Dark theme */
web-multiselect.custom-dark {
  --ms-input-bg: #2b2b2b;
  --ms-input-text: #e0e0e0;
  --ms-input-border-color: #444;
  --ms-dropdown-bg: #2b2b2b;
  --ms-option-bg-hover: #3a3a3a;
  --ms-option-bg-selected: #6c5ce7;
  --ms-badge-bg: #6c5ce7;
  --ms-badge-color: white;
}`}
					languageType="css"
					titleText="CSS"
				/>

				<CodeBlock
					codeContent={`<!-- Apply theme via class -->
<web-multiselect class="primary-theme"></web-multiselect>
<web-multiselect class="custom-dark"></web-multiselect>

<!-- Or inline styles -->
<web-multiselect
  style="--ms-accent-color: #10b981;">
</web-multiselect>`}
					languageType="html"
					titleText="HTML"
				/>

				<CodeBlock
					codeContent={`// Dynamic theme switching
const select = document.querySelector('web-multiselect');

// Apply dark theme
select.classList.add('custom-dark');

// Switch themes
select.classList.remove('theme-blue');
select.classList.add('theme-red');

// Or set CSS variable directly
select.style.setProperty('--ms-accent-color', '#10b981');`}
					languageType="javascript"
					titleText="JavaScript"
				/>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose">
					<h5>How CSS Variables Work</h5>
					<p>The component defines all variables with <code>:host</code> inside its Shadow DOM. You can override them from outside:</p>
					<ul>
						<li><strong>Global</strong> - Target <code>web-multiselect</code> selector</li>
						<li><strong>Scoped</strong> - Add a class and target <code>web-multiselect.your-class</code></li>
						<li><strong>Instance</strong> - Use inline styles</li>
					</ul>

					<h5>Benefits</h5>
					<ul>
						<li><strong>Scoped</strong> - Theme individual selects differently</li>
						<li><strong>Dynamic</strong> - Change themes at runtime with JavaScript</li>
						<li><strong>Maintainable</strong> - No need to modify component source</li>
						<li><strong>Performant</strong> - Browser-native CSS variable support</li>
					</ul>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- CSS Variables Reference -->
		<ShowcaseSection
			titleText="CS04 CSS Variables Reference"
			subtitleText="125+ CSS custom properties for complete customization"
			col1Title="Variable Categories"
			col2Title="Example Variables"
			col3Title="Full Reference">

			{#snippet demoContent()}
				<div class="prose">
					<h6>Base Color Variables</h6>
					<ul class="small">
						<li><code>--ms-accent-color</code> - Primary accent color</li>
						<li><code>--ms-text-color</code> - Default text color</li>
						<li><code>--ms-text-color-on-accent</code> - Text on accent backgrounds</li>
						<li><code>--ms-border-color</code> - Default border color</li>
						<li><code>--ms-bg</code> - Base background color</li>
					</ul>

					<h6>Component-Specific Variables</h6>
					<ul class="small">
						<li><strong>Input:</strong> <code>--ms-input-bg</code>, <code>--ms-input-border-color</code>, <code>--ms-input-focus-*</code>, and 10+ more</li>
						<li><strong>Dropdown:</strong> <code>--ms-dropdown-bg</code>, <code>--ms-dropdown-border-color</code>, <code>--ms-dropdown-shadow</code></li>
						<li><strong>Options:</strong> <code>--ms-option-bg-*</code>, <code>--ms-option-title-color-*</code>, and 15+ more</li>
						<li><strong>Badges:</strong> <code>--ms-badge-bg</code>, <code>--ms-badge-color</code>, <code>--ms-badge-*-hover</code></li>
						<li><strong>Groups:</strong> <code>--ms-group-label-*</code>, <code>--ms-group-divider-*</code></li>
						<li><strong>Actions:</strong> <code>--ms-action-btn-*</code>, <code>--ms-actions-bg</code></li>
					</ul>

					<h6>Sizing & Spacing</h6>
					<ul class="small">
						<li><code>--ms-rem</code> - Base unit for scaling (default: 10px)</li>
						<li><code>--ms-input-height</code>, <code>--ms-input-min-height</code></li>
						<li><code>--ms-border-radius-sm/md/lg</code> - Border radii</li>
						<li><code>--ms-options-max-height</code> - Dropdown max height</li>
					</ul>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<CodeBlock
					codeContent={`:root {
  /* Input Component */
  --ms-input-bg: #fff;
  --ms-input-text: #212529;
  --ms-input-border-color: #dee2e6;
  --ms-input-border-radius: 0.375rem;
  --ms-input-focus-border-color: #86b7fe;
  --ms-input-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);

  /* Dropdown */
  --ms-dropdown-bg: #fff;
  --ms-dropdown-border-color: #dee2e6;
  --ms-dropdown-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --ms-options-max-height: 20rem;

  /* Options */
  --ms-option-bg-hover: #f8f9fa;
  --ms-option-bg-selected: #0d6efd;
  --ms-option-title-color-selected: #fff;

  /* Badges */
  --ms-badge-bg: #e9ecef;
  --ms-badge-color: #212529;
  --ms-badge-border-radius: 0.25rem;

  /* Groups */
  --ms-group-label-bg: #f8f9fa;
  --ms-group-label-color: #6c757d;
}`}
					languageType="css"
					titleText="Common Variables"
				/>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose">
					<h5>Full Reference</h5>
					<p>
						See the complete list of 125+ CSS variables in the
						<a href="https://github.com/keenmate/web-multiselect/blob/main/README.md#css-custom-properties" target="_blank">GitHub README - CSS Custom Properties</a>.
					</p>

					<h5>Variable Naming Convention</h5>
					<ul>
						<li><code>--ms-*</code> - Component-specific variables</li>
						<li><code>--base-*</code> - Theme integration variables (e.g., theme-designer)</li>
					</ul>

					<h5>Inheritance</h5>
					<p>Component variables inherit from base variables:</p>
					<ul class="small">
						<li><code>--ms-accent-color</code> falls back to <code>--base-accent-color</code></li>
						<li><code>--ms-border-color</code> falls back to <code>--base-border-color</code></li>
						<li>etc.</li>
					</ul>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- Input Field Styling Info -->
		<section class="mb-5">
			<div class="alert alert-info">
				<h4 class="alert-heading">Input Field Styling</h4>
				<p>
					<strong>Comprehensive input styling</strong> with CSS custom properties for the input field.
				</p>

				<hr />

				<h6>Input Variables</h6>
				<ul class="small">
					<li><code>--ms-input-bg</code> - Input background color</li>
					<li><code>--ms-input-text</code> - Input text color</li>
					<li><code>--ms-input-border-color</code> - Border color</li>
					<li><code>--ms-input-border-color-hover</code> - Border on hover</li>
					<li><code>--ms-input-focus-border-color</code> - Border when focused</li>
					<li><code>--ms-input-placeholder-color</code> - Placeholder text</li>
					<li><code>--ms-input-focus-shadow</code> - Focus ring shadow</li>
				</ul>

				<hr />

				<h6>Shadow DOM Note</h6>
				<p>
					The multiselect uses Shadow DOM for style isolation. CSS variables must be set on the
					<code>&lt;web-multiselect&gt;</code> element itself, not on wrapper divs.
				</p>

				<h6>Example</h6>
				<CodeBlock
					codeContent={`/* Customize input using CSS variables */
web-multiselect {
  --ms-input-bg: #f9fafb;
  --ms-input-border-color: #d1d5db;
  --ms-input-border-color-hover: #10b981;
  --ms-input-focus-border-color: #10b981;
  --ms-input-focus-shadow: 0 0 0 0.25rem rgba(16, 185, 129, 0.1);
}`}
					languageType="css"
					titleText="CSS Variables"
				/>
			</div>
		</section>

		<!-- Quick Reference -->
		<section class="mt-5">
			<h2>Quick Reference</h2>
			<div class="row">
				<div class="col-md-6">
					<h5>Sizing Approach</h5>
					<table class="table table-sm">
						<thead>
							<tr>
								<th>Method</th>
								<th>Usage</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><code>--ms-rem</code> CSS variable</td>
								<td>Scale entire component (default: 10px)</td>
							</tr>
							<tr>
								<td><code>--ms-input-*</code> variables</td>
								<td>Fine-tune input appearance</td>
							</tr>
							<tr>
								<td><code>--ms-option-*</code> variables</td>
								<td>Fine-tune dropdown options</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="col-md-6">
					<h5>--ms-rem Scale Values</h5>
					<table class="table table-sm">
						<thead>
							<tr>
								<th>Value</th>
								<th>Scale</th>
								<th>Use Case</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>6px</td>
								<td>60%</td>
								<td>Dense dashboards</td>
							</tr>
							<tr>
								<td>8px</td>
								<td>80%</td>
								<td>Compact layouts</td>
							</tr>
							<tr>
								<td>10px</td>
								<td>100%</td>
								<td>Default</td>
							</tr>
							<tr>
								<td>12px</td>
								<td>120%</td>
								<td>Spacious desktops</td>
							</tr>
							<tr>
								<td>15px</td>
								<td>150%</td>
								<td>Touch/accessibility</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	</div>
</DocLayout>
