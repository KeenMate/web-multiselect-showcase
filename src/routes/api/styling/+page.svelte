<script lang="ts">
	import { DocLayout, CodeBlock } from '@keenmate/svelte-docs';
</script>

<DocLayout
	titleText="Styling API"
	descriptionText="Complete CSS variable reference for customization">

	<div class="py-4">
		<!-- Overview -->
		<section class="mb-5">
			<h2 class="mb-3">Overview</h2>
			<p class="lead">
				The MultiSelect component provides 125+ semantic CSS variables for complete visual customization, built on a semantic color system with accent and neutral color scales. All variables use the <code>--ms-</code> prefix (multiselect) to avoid naming conflicts.
			</p>
			<p>
				Variables are applied inside the Shadow DOM, ensuring style encapsulation while allowing you to customize appearance through CSS variable inheritance.
			</p>
		</section>

		<!-- How to Customize -->
		<section class="mb-5">
			<h2 class="mb-4">How to Customize</h2>

			<div class="row g-4 mb-4">
				<div class="col-md-6">
					<h3 class="h5">CSS Approach</h3>
					<CodeBlock
						codeContent={`/* Apply to specific instance */
.my-select {
  --ms-input-border-color: #0d6efd;
  --ms-badge-bg: #0d6efd;
  --ms-badge-color: white;
}

/* Apply globally */
:root {
  --ms-input-border-radius: 0.5rem;
  --ms-dropdown-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}`}
						languageType="css"
					/>
				</div>

				<div class="col-md-6">
					<h3 class="h5">SCSS Approach (Recommended)</h3>
					<CodeBlock
						codeContent={`// Modern @use syntax (recommended)
@use '@keenmate/web-multiselect' with (
  $ms-color-accent-base: #0d6efd,
  $ms-color-accent-dark: #0a58ca,
  $ms-color-neutral-light: #dee2e6
);

// Legacy @import (deprecated in Dart Sass)
@import '@keenmate/web-multiselect';

.my-select {
  --ms-input-border-color: #0d6efd;
}`}
						languageType="scss"
					/>
				</div>
			</div>
		</section>

		<!-- SCSS Color Palette -->
		<section class="mb-5">
			<h2 class="mb-4">SCSS Color Palette</h2>
			<p>
				The component uses a semantic three-tier variable system: <strong>base primitives</strong> → <strong>semantic color scales</strong> → <strong>component variables</strong>. This allows you to customize the entire color scheme by overriding just the semantic colors.
			</p>

			<h3 class="h5 mt-4 mb-3">Accent Colors</h3>
			<p>Primary/accent colors for interactive elements, selected states, and highlights:</p>
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>SCSS Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>$ms-color-accent-lightest</code></td>
							<td><code>#eff6ff</code></td>
							<td>Lightest accent shade - badge backgrounds</td>
						</tr>
						<tr>
							<td><code>$ms-color-accent-lighter</code></td>
							<td><code>#e0f2fe</code></td>
							<td>Lighter accent shade - hover states</td>
						</tr>
						<tr>
							<td><code>$ms-color-accent-base</code></td>
							<td><code>#3b82f6</code></td>
							<td>Base accent color - primary actions</td>
						</tr>
						<tr>
							<td><code>$ms-color-accent-dark</code></td>
							<td><code>#2563eb</code></td>
							<td>Dark accent shade - hover/active states</td>
						</tr>
						<tr>
							<td><code>$ms-color-accent-darker</code></td>
							<td><code>#1d4ed8</code></td>
							<td>Darkest accent shade - pressed states</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h3 class="h5 mt-4 mb-3">Neutral Colors</h3>
			<p>Grayscale colors for borders, backgrounds, and text:</p>
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>SCSS Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>$ms-color-white</code></td>
							<td><code>#ffffff</code></td>
							<td>Pure white - backgrounds</td>
						</tr>
						<tr>
							<td><code>$ms-color-neutral-lightest</code></td>
							<td><code>#f9fafb</code></td>
							<td>Lightest neutral - hover backgrounds</td>
						</tr>
						<tr>
							<td><code>$ms-color-neutral-lighter</code></td>
							<td><code>#f3f4f6</code></td>
							<td>Lighter neutral - subtle backgrounds</td>
						</tr>
						<tr>
							<td><code>$ms-color-neutral-light</code></td>
							<td><code>#e5e7eb</code></td>
							<td>Light neutral - borders, dividers</td>
						</tr>
						<tr>
							<td><code>$ms-color-neutral-base</code></td>
							<td><code>#d1d5db</code></td>
							<td>Base neutral - inactive elements</td>
						</tr>
						<tr>
							<td><code>$ms-color-neutral-dark</code></td>
							<td><code>#6b7280</code></td>
							<td>Dark neutral - secondary text, placeholders</td>
						</tr>
						<tr>
							<td><code>$ms-color-neutral-darkest</code></td>
							<td><code>#111827</code></td>
							<td>Darkest neutral - primary text</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="mt-4 p-3 bg-light border rounded">
				<h4 class="h6 mb-2">💡 Customization Example</h4>
				<CodeBlock
					codeContent={`// Customize the entire color scheme
@use '@keenmate/web-multiselect' with (
  // Accent colors - use your brand color
  $ms-color-accent-lightest: #f0f9ff,
  $ms-color-accent-lighter: #e0f2fe,
  $ms-color-accent-base: #0ea5e9,      // Your brand blue
  $ms-color-accent-dark: #0284c7,
  $ms-color-accent-darker: #0369a1,

  // Neutral colors - adjust for dark mode
  $ms-color-neutral-lightest: #1e293b,
  $ms-color-neutral-light: #334155,
  $ms-color-neutral-dark: #94a3b8,
  $ms-color-neutral-darkest: #f1f5f9
);`}
					languageType="scss"
				/>
			</div>
		</section>

		<!-- Input Component -->
		<section class="mb-5">
			<h2 class="mb-4">Input Component</h2>
			<p>Variables controlling the main input/trigger area:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-input-bg</code></td>
							<td><code>#fff</code></td>
							<td>Background color</td>
						</tr>
						<tr>
							<td><code>--ms-input-color</code></td>
							<td><code>#212529</code></td>
							<td>Text color</td>
						</tr>
						<tr>
							<td><code>--ms-input-border-color</code></td>
							<td><code>#dee2e6</code></td>
							<td>Border color</td>
						</tr>
						<tr>
							<td><code>--ms-input-border-width</code></td>
							<td><code>1px</code></td>
							<td>Border width</td>
						</tr>
						<tr>
							<td><code>--ms-input-border-radius</code></td>
							<td><code>0.375rem</code></td>
							<td>Border radius</td>
						</tr>
						<tr>
							<td><code>--ms-input-padding</code></td>
							<td><code>0.5rem 0.75rem</code></td>
							<td>Inner padding</td>
						</tr>
						<tr>
							<td><code>--ms-input-font-size</code></td>
							<td><code>1rem</code></td>
							<td>Font size</td>
						</tr>
						<tr>
							<td><code>--ms-input-line-height</code></td>
							<td><code>1.5</code></td>
							<td>Line height</td>
						</tr>
						<tr>
							<td><code>--ms-input-placeholder-color</code></td>
							<td><code>#6c757d</code></td>
							<td>Placeholder text color</td>
						</tr>
						<tr>
							<td><code>--ms-input-disabled-bg</code></td>
							<td><code>#e9ecef</code></td>
							<td>Background when disabled</td>
						</tr>
						<tr>
							<td><code>--ms-input-disabled-color</code></td>
							<td><code>#6c757d</code></td>
							<td>Text color when disabled</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Focus State -->
		<section class="mb-5">
			<h2 class="mb-4">Focus State</h2>
			<p>Variables for the focused input state:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-input-focus-border-color</code></td>
							<td><code>#86b7fe</code></td>
							<td>Border color when focused</td>
						</tr>
						<tr>
							<td><code>--ms-input-focus-shadow</code></td>
							<td><code>0 0 0 0.25rem rgba(13, 110, 253, 0.25)</code></td>
							<td>Box shadow when focused</td>
						</tr>
						<tr>
							<td><code>--ms-input-focus-bg</code></td>
							<td><code>#fff</code></td>
							<td>Background when focused</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Dropdown -->
		<section class="mb-5">
			<h2 class="mb-4">Dropdown</h2>
			<p>Variables controlling the dropdown menu appearance:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-dropdown-bg</code></td>
							<td><code>#fff</code></td>
							<td>Background color</td>
						</tr>
						<tr>
							<td><code>--ms-dropdown-border-color</code></td>
							<td><code>#dee2e6</code></td>
							<td>Border color</td>
						</tr>
						<tr>
							<td><code>--ms-dropdown-border-width</code></td>
							<td><code>1px</code></td>
							<td>Border width</td>
						</tr>
						<tr>
							<td><code>--ms-dropdown-border-radius</code></td>
							<td><code>0.375rem</code></td>
							<td>Border radius</td>
						</tr>
						<tr>
							<td><code>--ms-dropdown-shadow</code></td>
							<td><code>0 0.5rem 1rem rgba(0, 0, 0, 0.15)</code></td>
							<td>Box shadow</td>
						</tr>
						<tr>
							<td><code>--ms-options-max-height</code></td>
							<td><code>20rem</code></td>
							<td>Maximum height</td>
						</tr>
						<tr>
							<td><code>--ms-dropdown-z-index</code></td>
							<td><code>1000</code></td>
							<td>Z-index stacking</td>
						</tr>
						<tr>
							<td><code>--ms-dropdown-padding</code></td>
							<td><code>0.5rem 0</code></td>
							<td>Inner padding</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Options -->
		<section class="mb-5">
			<h2 class="mb-4">Options</h2>
			<p>Variables for individual option items in the dropdown:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-option-padding</code></td>
							<td><code>0.5rem 0.75rem</code></td>
							<td>Option padding</td>
						</tr>
						<tr>
							<td><code>--ms-option-font-size</code></td>
							<td><code>1rem</code></td>
							<td>Font size</td>
						</tr>
						<tr>
							<td><code>--ms-option-line-height</code></td>
							<td><code>1.5</code></td>
							<td>Line height</td>
						</tr>
						<tr>
							<td><code>--ms-option-color</code></td>
							<td><code>#212529</code></td>
							<td>Text color</td>
						</tr>
						<tr>
							<td><code>--ms-option-bg</code></td>
							<td><code>transparent</code></td>
							<td>Background color</td>
						</tr>
						<tr>
							<td><code>--ms-option-hover-bg</code></td>
							<td><code>#f8f9fa</code></td>
							<td>Background on hover</td>
						</tr>
						<tr>
							<td><code>--ms-option-hover-color</code></td>
							<td><code>#212529</code></td>
							<td>Text color on hover</td>
						</tr>
						<tr>
							<td><code>--ms-option-selected-bg</code></td>
							<td><code>#0d6efd</code></td>
							<td>Background when selected</td>
						</tr>
						<tr>
							<td><code>--ms-option-selected-color</code></td>
							<td><code>#fff</code></td>
							<td>Text color when selected</td>
						</tr>
						<tr>
							<td><code>--ms-option-disabled-color</code></td>
							<td><code>#6c757d</code></td>
							<td>Text color when disabled</td>
						</tr>
						<tr>
							<td><code>--ms-option-disabled-bg</code></td>
							<td><code>transparent</code></td>
							<td>Background when disabled</td>
						</tr>
						<tr>
							<td><code>--ms-option-disabled-opacity</code></td>
							<td><code>0.5</code></td>
							<td>Opacity when disabled</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h3 class="h5 mt-4 mb-3">Option Subtitle</h3>
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-option-subtitle-color</code></td>
							<td><code>#6c757d</code></td>
							<td>Subtitle text color</td>
						</tr>
						<tr>
							<td><code>--ms-option-subtitle-font-size</code></td>
							<td><code>0.875rem</code></td>
							<td>Subtitle font size</td>
						</tr>
						<tr>
							<td><code>--ms-option-subtitle-margin</code></td>
							<td><code>0.25rem 0 0 0</code></td>
							<td>Subtitle margin</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h3 class="h5 mt-4 mb-3">Option Icon</h3>
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-option-icon-size</code></td>
							<td><code>1.25rem</code></td>
							<td>Icon size</td>
						</tr>
						<tr>
							<td><code>--ms-option-icon-margin</code></td>
							<td><code>0 0.5rem 0 0</code></td>
							<td>Icon margin</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Pills -->
		<section class="mb-5">
			<h2 class="mb-4">Pills (Selected Items)</h2>
			<p>Variables for the pill badges showing selected items:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-badge-bg</code></td>
							<td><code>#e9ecef</code></td>
							<td>Background color</td>
						</tr>
						<tr>
							<td><code>--ms-badge-color</code></td>
							<td><code>#212529</code></td>
							<td>Text color</td>
						</tr>
						<tr>
							<td><code>--ms-badge-border-radius</code></td>
							<td><code>0.25rem</code></td>
							<td>Border radius</td>
						</tr>
						<tr>
							<td><code>--ms-badge-padding</code></td>
							<td><code>0.25rem 0.5rem</code></td>
							<td>Padding</td>
						</tr>
						<tr>
							<td><code>--ms-badge-font-size</code></td>
							<td><code>0.875rem</code></td>
							<td>Font size</td>
						</tr>
						<tr>
							<td><code>--ms-badge-gap</code></td>
							<td><code>0.5rem</code></td>
							<td>Gap between pills</td>
						</tr>
						<tr>
							<td><code>--ms-badge-margin</code></td>
							<td><code>0.25rem 0</code></td>
							<td>Margin around pill container</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h3 class="h5 mt-4 mb-3">Pill Remove Button</h3>
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-badge-remove-color</code></td>
							<td><code>#212529</code></td>
							<td>Remove button color</td>
						</tr>
						<tr>
							<td><code>--ms-badge-remove-hover-bg</code></td>
							<td><code>#dc3545</code></td>
							<td>Background on hover</td>
						</tr>
						<tr>
							<td><code>--ms-badge-remove-hover-color</code></td>
							<td><code>#fff</code></td>
							<td>Color on hover</td>
						</tr>
						<tr>
							<td><code>--ms-badge-remove-size</code></td>
							<td><code>1rem</code></td>
							<td>Button size</td>
						</tr>
						<tr>
							<td><code>--ms-badge-remove-margin</code></td>
							<td><code>0 0 0 0.25rem</code></td>
							<td>Button margin</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Groups -->
		<section class="mb-5">
			<h2 class="mb-4">Groups</h2>
			<p>Variables for grouped option headers:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-group-header-bg</code></td>
							<td><code>#f8f9fa</code></td>
							<td>Background color</td>
						</tr>
						<tr>
							<td><code>--ms-group-header-color</code></td>
							<td><code>#6c757d</code></td>
							<td>Text color</td>
						</tr>
						<tr>
							<td><code>--ms-group-header-padding</code></td>
							<td><code>0.5rem 0.75rem</code></td>
							<td>Padding</td>
						</tr>
						<tr>
							<td><code>--ms-group-header-font-size</code></td>
							<td><code>0.875rem</code></td>
							<td>Font size</td>
						</tr>
						<tr>
							<td><code>--ms-group-header-font-weight</code></td>
							<td><code>600</code></td>
							<td>Font weight</td>
						</tr>
						<tr>
							<td><code>--ms-group-header-text-transform</code></td>
							<td><code>uppercase</code></td>
							<td>Text transform</td>
						</tr>
						<tr>
							<td><code>--ms-group-header-border-bottom</code></td>
							<td><code>1px solid #dee2e6</code></td>
							<td>Bottom border</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Actions (Select All / Clear All) -->
		<section class="mb-5">
			<h2 class="mb-4">Actions (Select All / Clear All)</h2>
			<p>Variables for action buttons:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-actions-padding</code></td>
							<td><code>0.5rem 0.75rem</code></td>
							<td>Container padding</td>
						</tr>
						<tr>
							<td><code>--ms-actions-bg</code></td>
							<td><code>#fff</code></td>
							<td>Background color</td>
						</tr>
						<tr>
							<td><code>--ms-actions-border-bottom</code></td>
							<td><code>1px solid #dee2e6</code></td>
							<td>Bottom border</td>
						</tr>
						<tr>
							<td><code>--ms-actions-gap</code></td>
							<td><code>0.5rem</code></td>
							<td>Gap between buttons</td>
						</tr>
						<tr>
							<td><code>--ms-action-btn-color</code></td>
							<td><code>#0d6efd</code></td>
							<td>Button text color</td>
						</tr>
						<tr>
							<td><code>--ms-action-btn-hover-color</code></td>
							<td><code>#0a58ca</code></td>
							<td>Button hover color</td>
						</tr>
						<tr>
							<td><code>--ms-action-btn-font-size</code></td>
							<td><code>0.875rem</code></td>
							<td>Button font size</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Search Input -->
		<section class="mb-5">
			<h2 class="mb-4">Search Input</h2>
			<p>Variables specific to the search/filter input:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-search-padding</code></td>
							<td><code>0.5rem 0.75rem</code></td>
							<td>Padding</td>
						</tr>
						<tr>
							<td><code>--ms-search-border</code></td>
							<td><code>none</code></td>
							<td>Border</td>
						</tr>
						<tr>
							<td><code>--ms-search-font-size</code></td>
							<td><code>1rem</code></td>
							<td>Font size</td>
						</tr>
						<tr>
							<td><code>--ms-search-hint-color</code></td>
							<td><code>#6c757d</code></td>
							<td>Hint text color</td>
						</tr>
						<tr>
							<td><code>--ms-search-hint-font-size</code></td>
							<td><code>0.875rem</code></td>
							<td>Hint font size</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Counter -->
		<section class="mb-5">
			<h2 class="mb-4">Counter</h2>
			<p>Variables for the selection counter:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-counter-bg</code></td>
							<td><code>#0d6efd</code></td>
							<td>Background color</td>
						</tr>
						<tr>
							<td><code>--ms-counter-color</code></td>
							<td><code>#fff</code></td>
							<td>Text color</td>
						</tr>
						<tr>
							<td><code>--ms-counter-font-size</code></td>
							<td><code>0.75rem</code></td>
							<td>Font size</td>
						</tr>
						<tr>
							<td><code>--ms-counter-padding</code></td>
							<td><code>0.25rem 0.5rem</code></td>
							<td>Padding</td>
						</tr>
						<tr>
							<td><code>--ms-counter-border-radius</code></td>
							<td><code>0.25rem</code></td>
							<td>Border radius</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Toggle Icon -->
		<section class="mb-5">
			<h2 class="mb-4">Toggle Icon</h2>
			<p>Variables for the dropdown toggle icon:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-toggle-icon-color</code></td>
							<td><code>#6c757d</code></td>
							<td>Icon color</td>
						</tr>
						<tr>
							<td><code>--ms-toggle-icon-size</code></td>
							<td><code>1rem</code></td>
							<td>Icon size</td>
						</tr>
						<tr>
							<td><code>--ms-toggle-icon-margin</code></td>
							<td><code>0 0 0 0.5rem</code></td>
							<td>Icon margin</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Checkboxes -->
		<section class="mb-5">
			<h2 class="mb-4">Checkboxes</h2>
			<p>Variables for option checkboxes:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-checkbox-size</code></td>
							<td><code>1rem</code></td>
							<td>Checkbox size</td>
						</tr>
						<tr>
							<td><code>--ms-checkbox-border-color</code></td>
							<td><code>#dee2e6</code></td>
							<td>Border color</td>
						</tr>
						<tr>
							<td><code>--ms-checkbox-checked-bg</code></td>
							<td><code>#0d6efd</code></td>
							<td>Background when checked</td>
						</tr>
						<tr>
							<td><code>--ms-checkbox-checked-border</code></td>
							<td><code>#0d6efd</code></td>
							<td>Border when checked</td>
						</tr>
						<tr>
							<td><code>--ms-checkbox-margin</code></td>
							<td><code>0 0.5rem 0 0</code></td>
							<td>Checkbox margin</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Loading & Empty States -->
		<section class="mb-5">
			<h2 class="mb-4">Loading & Empty States</h2>
			<p>Variables for loading and empty state messages:</p>

			<div class="table-responsive">
				<table class="table table-bordered">
					<thead class="table-light">
						<tr>
							<th>Variable</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>--ms-empty-color</code></td>
							<td><code>#6c757d</code></td>
							<td>Empty state text color</td>
						</tr>
						<tr>
							<td><code>--ms-empty-font-size</code></td>
							<td><code>0.875rem</code></td>
							<td>Empty state font size</td>
						</tr>
						<tr>
							<td><code>--ms-empty-padding</code></td>
							<td><code>1rem 0.75rem</code></td>
							<td>Empty state padding</td>
						</tr>
						<tr>
							<td><code>--ms-loading-color</code></td>
							<td><code>#6c757d</code></td>
							<td>Loading text color</td>
						</tr>
						<tr>
							<td><code>--ms-loading-font-size</code></td>
							<td><code>0.875rem</code></td>
							<td>Loading font size</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<!-- Theming Examples -->
		<section class="mb-5">
			<h2 class="mb-4">Complete Theming Examples</h2>

			<div class="row g-4">
				<div class="col-md-6">
					<h3 class="h5 mb-3">Success Theme</h3>
					<CodeBlock
						codeContent={`.success-theme {
  --ms-input-border-color: #198754;
  --ms-input-focus-border-color: #198754;
  --ms-input-focus-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
  --ms-option-hover-bg: #d1e7dd;
  --ms-option-selected-bg: #198754;
  --ms-option-selected-color: white;
  --ms-badge-bg: #198754;
  --ms-badge-color: white;
  --ms-action-btn-color: #198754;
  --ms-action-btn-hover-color: #146c43;
}`}
						languageType="css"
						titleText="Success Theme CSS"
					/>
				</div>

				<div class="col-md-6">
					<h3 class="h5 mb-3">Dark Theme</h3>
					<CodeBlock
						codeContent={`.dark-theme {
  --ms-input-bg: #2b2b2b;
  --ms-input-color: #e0e0e0;
  --ms-input-border-color: #444;
  --ms-input-focus-border-color: #666;
  --ms-input-placeholder-color: #888;
  --ms-dropdown-bg: #2b2b2b;
  --ms-dropdown-border-color: #444;
  --ms-option-color: #e0e0e0;
  --ms-option-hover-bg: #3a3a3a;
  --ms-option-selected-bg: #6c5ce7;
  --ms-badge-bg: #6c5ce7;
  --ms-badge-color: white;
  --ms-group-header-bg: #1a1a1a;
  --ms-group-header-color: #888;
}`}
						languageType="css"
						titleText="Dark Theme CSS"
					/>
				</div>

				<div class="col-md-6">
					<h3 class="h5 mb-3">Minimal Theme</h3>
					<CodeBlock
						codeContent={`.minimal-theme {
  --ms-input-border-color: transparent;
  --ms-input-border-bottom: 2px solid #dee2e6;
  --ms-input-border-radius: 0;
  --ms-input-padding: 0.5rem 0;
  --ms-dropdown-border-radius: 0;
  --ms-dropdown-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --ms-badge-border-radius: 0;
  --ms-option-padding: 0.75rem 1rem;
  --ms-group-header-text-transform: none;
}`}
						languageType="css"
						titleText="Minimal Theme CSS"
					/>
				</div>

				<div class="col-md-6">
					<h3 class="h5 mb-3">Compact Theme</h3>
					<CodeBlock
						codeContent={`.compact-theme {
  --ms-input-padding: 0.25rem 0.5rem;
  --ms-input-font-size: 0.875rem;
  --ms-options-max-height: 15rem;
  --ms-option-padding: 0.375rem 0.5rem;
  --ms-option-font-size: 0.875rem;
  --ms-badge-padding: 0.125rem 0.375rem;
  --ms-badge-font-size: 0.75rem;
  --ms-badge-gap: 0.25rem;
  --ms-actions-padding: 0.375rem 0.5rem;
  --ms-action-btn-font-size: 0.75rem;
}`}
						languageType="css"
						titleText="Compact Theme CSS"
					/>
				</div>
			</div>
		</section>

		<!-- SCSS Integration -->
		<section class="mb-5">
			<h2 class="mb-4">SCSS Integration</h2>
			<p>For advanced customization, import the SCSS source and override semantic color variables. Use the modern <code>@use</code> syntax (recommended) instead of deprecated <code>@import</code>:</p>

			<CodeBlock
				codeContent={`// Modern @use syntax - Recommended
@use '@keenmate/web-multiselect' with (
  // Override semantic colors
  $ms-color-accent-base: #0d6efd,
  $ms-color-accent-dark: #0a58ca,
  $ms-color-accent-darker: #084298,
  $ms-color-neutral-light: #dee2e6,
  $ms-color-neutral-dark: #6c757d,

  // Or override component-specific variables
  $ms-spacing-md: 1rem,
  $ms-border-radius: 0.5rem
);

// Legacy @import - Deprecated (will be removed in Dart Sass 3.0)
@import '@keenmate/web-multiselect';

// Override after import
.my-custom-select {
  --ms-input-border-color: #0d6efd;
  --ms-badge-bg: #e9ecef;
}`}
				languageType="scss"
				titleText="SCSS Configuration"
			/>

			<div class="mt-3 p-3 bg-warning bg-opacity-10 border border-warning rounded">
				<strong>⚠️ Note:</strong> The <code>@import</code> syntax is deprecated in Dart Sass and will be removed in version 3.0. Use <code>@use</code> for future-proof code.
			</div>
		</section>

		<!-- Important Notes -->
		<div class="mt-5 p-4 bg-light border rounded">
			<h3 class="h5 mb-3">🎨 Styling Best Practices</h3>
			<ul class="mb-0">
				<li><strong>CSS Variables:</strong> All variables use <code>--ms-</code> prefix (multiselect) to prevent naming conflicts</li>
				<li><strong>Shadow DOM:</strong> Variables are inherited into Shadow DOM - set on the component or ancestor</li>
				<li><strong>Cascading:</strong> More specific selectors override global :root declarations</li>
				<li><strong>SCSS Source:</strong> For build-time customization, import SCSS and override variables before compilation</li>
				<li><strong>Responsive:</strong> Use CSS media queries to adjust variables for different screen sizes</li>
				<li><strong>Accessibility:</strong> Maintain sufficient color contrast ratios (WCAG AA: 4.5:1 for normal text)</li>
				<li><strong>Performance:</strong> CSS variables have negligible performance impact compared to dynamic styles</li>
			</ul>
		</div>
	</div>
</DocLayout>
