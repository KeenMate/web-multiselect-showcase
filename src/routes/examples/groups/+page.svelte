<script lang="ts">
	import { DocLayout, ShowcaseSection, CodeBlock } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';

	let callbackSelect: any;
	let styledSelect: any;
	let advancedSelect: any;

	const groupedOptions = [
		{ value: 'html', label: 'HTML', group: 'Frontend', icon: '📄' },
		{ value: 'css', label: 'CSS', group: 'Frontend', icon: '🎨' },
		{ value: 'js', label: 'JavaScript', group: 'Frontend', icon: '🟨' },
		{ value: 'node', label: 'Node.js', group: 'Backend', icon: '🟢' },
		{ value: 'python', label: 'Python', group: 'Backend', icon: '🐍' },
		{ value: 'php', label: 'PHP', group: 'Backend', icon: '🐘' },
		{ value: 'postgres', label: 'PostgreSQL', group: 'Database', icon: '🐘' },
		{ value: 'mysql', label: 'MySQL', group: 'Database', icon: '🐬' },
		{ value: 'mongodb', label: 'MongoDB', group: 'Database', icon: '🍃' }
	];

	onMount(() => {
		// Section 1: Custom Group Label Callback
		if (callbackSelect) {
			callbackSelect.options = groupedOptions;
			callbackSelect.renderGroupLabelContentCallback = (groupName: string) => {
				const icons: Record<string, string> = {
					'Frontend': '🎨',
					'Backend': '⚙️',
					'Database': '🗄️'
				};
				return `${icons[groupName] || '📁'} ${groupName.toUpperCase()}`;
			};
		}

		// Section 2: Styled Groups
		if (styledSelect) {
			styledSelect.options = groupedOptions;
		}

		// Section 3: Advanced - Callback + Styling Combined
		if (advancedSelect) {
			advancedSelect.options = groupedOptions;
			advancedSelect.renderGroupLabelContentCallback = (groupName: string) => {
				// Return HTMLElement for full control
				const span = document.createElement('span');
				span.className = 'custom-group-label';

				const colors: Record<string, string> = {
					'Frontend': '#e74c3c',
					'Backend': '#3498db',
					'Database': '#27ae60'
				};

				span.innerHTML = `
					<span style="
						display: inline-block;
						width: 8px;
						height: 8px;
						border-radius: 50%;
						background: ${colors[groupName] || '#95a5a6'};
						margin-right: 6px;
					"></span>
					${groupName}
				`;
				return span;
			};
		}
	});
</script>

<style>
	/* Styled groups theme */
	:global(web-multiselect.styled-groups) {
		--ms-group-border-top: 2px solid #6c5ce7;
		--ms-group-margin-top: 0.5rem;
		--ms-group-padding-top: 0.5rem;
		--ms-group-label-padding: 0.5rem 0.75rem;
		--ms-group-label-font-size: 0.8rem;
		--ms-group-label-font-weight: 700;
		--ms-group-label-color: #6c5ce7;
		--ms-group-label-transform: uppercase;
		--ms-group-label-letter-spacing: 0.1em;
	}

	/* Advanced combined theme */
	:global(web-multiselect.advanced-groups) {
		--ms-group-border-top: 1px solid #ecf0f1;
		--ms-group-margin-top: 0.25rem;
		--ms-group-padding-top: 0.25rem;
		--ms-group-label-padding: 0.5rem 0.75rem;
		--ms-group-label-font-size: 0.85rem;
		--ms-group-label-font-weight: 600;
		--ms-group-label-color: #2c3e50;
		--ms-group-label-transform: none;
		--ms-group-label-letter-spacing: normal;
	}
</style>

<DocLayout
	titleText="Groups"
	descriptionText="Customize group labels and styling with callbacks and CSS variables">

	<div class="py-4">
		<!-- Section 1: Group Label Callback -->
		<ShowcaseSection
			titleText="Custom Group Labels"
			subtitleText="Use renderGroupLabelContentCallback to customize how group headers are displayed"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Usage">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={callbackSelect}
						value-member="value"
						display-value-member="label"
						group-member="group"
						icon-member="icon"
						allow-groups="true"
						search-placeholder="Search technologies..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Open the dropdown to see customized group labels.</p>
					<p>Each group has an emoji icon and uppercase text.</p>
					<p>The callback returns a string with HTML content.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>renderGroupLabelContentCallback</h5>
					<p>Customize the content inside group labels:</p>
					<ul class="small">
						<li>Return a <code>string</code> (plain text or HTML)</li>
						<li>Return an <code>HTMLElement</code> for full control</li>
						<li>The wrapper <code>.ms__group-label</code> is preserved</li>
					</ul>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- Code Example for Callback -->
		<div class="mb-5">
			<CodeBlock
				codeContent={`// Set up the callback via JavaScript
const multiselect = document.querySelector('web-multiselect');

multiselect.renderGroupLabelContentCallback = (groupName) => {
  const icons = {
    'Frontend': '🎨',
    'Backend': '⚙️',
    'Database': '🗄️'
  };
  return \`\${icons[groupName] || '📁'} \${groupName.toUpperCase()}\`;
};`}
				languageType="javascript"
				titleText="String Return Example"
			/>
		</div>

		<!-- Section 2: Group Styling -->
		<ShowcaseSection
			titleText="Group Styling with CSS Variables"
			subtitleText="Customize group appearance using CSS custom properties"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Usage">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						class="styled-groups"
						bind:this={styledSelect}
						value-member="value"
						display-value-member="label"
						group-member="group"
						icon-member="icon"
						allow-groups="true"
						search-placeholder="Search technologies..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Open the dropdown to see styled group headers.</p>
					<p>Purple accent color with bold uppercase labels.</p>
					<p>Thicker border separating groups.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>CSS Variables</h5>
					<p><code>--ms-group-border-top</code></p>
					<p><code>--ms-group-label-color</code></p>
					<p><code>--ms-group-label-font-weight</code></p>
					<p><code>--ms-group-label-transform</code></p>
					<p><code>--ms-group-label-letter-spacing</code></p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- CSS Variables Reference -->
		<div class="row g-4 mb-5">
			<div class="col-md-6">
				<CodeBlock
					codeContent={`.styled-groups {
  /* Group container */
  --ms-group-border-top: 2px solid #6c5ce7;
  --ms-group-margin-top: 0.5rem;
  --ms-group-padding-top: 0.5rem;
}`}
					languageType="css"
					titleText="Group Container Variables"
				/>
			</div>
			<div class="col-md-6">
				<CodeBlock
					codeContent={`.styled-groups {
  /* Group label */
  --ms-group-label-padding: 0.5rem 0.75rem;
  --ms-group-label-font-size: 0.8rem;
  --ms-group-label-font-weight: 700;
  --ms-group-label-color: #6c5ce7;
  --ms-group-label-transform: uppercase;
  --ms-group-label-letter-spacing: 0.1em;
}`}
					languageType="css"
					titleText="Group Label Variables"
				/>
			</div>
		</div>

		<!-- Section 3: Advanced Customization -->
		<ShowcaseSection
			titleText="Advanced: Callback + Styling Combined"
			subtitleText="Combine renderGroupLabelContentCallback with CSS variables for full customization"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Usage">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						class="advanced-groups"
						bind:this={advancedSelect}
						value-member="value"
						display-value-member="label"
						group-member="group"
						icon-member="icon"
						allow-groups="true"
						search-placeholder="Search technologies..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Open the dropdown to see colored dot indicators.</p>
					<p>Each category has a unique color dot.</p>
					<p>Uses HTMLElement return for inline styles.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>HTMLElement Return</h5>
					<p>Return an HTMLElement for full control:</p>
					<ul class="small">
						<li>Create dynamic content</li>
						<li>Add inline styles</li>
						<li>Include custom HTML structure</li>
					</ul>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- HTMLElement Example -->
		<div class="mb-5">
			<CodeBlock
				codeContent={`// Return HTMLElement for full control
multiselect.renderGroupLabelContentCallback = (groupName) => {
  const span = document.createElement('span');

  const colors = {
    'Frontend': '#e74c3c',
    'Backend': '#3498db',
    'Database': '#27ae60'
  };

  span.innerHTML = \`
    <span style="
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: \${colors[groupName] || '#95a5a6'};
      margin-right: 6px;
    "></span>
    \${groupName}
  \`;

  return span;
};`}
				languageType="javascript"
				titleText="HTMLElement Return Example"
			/>
		</div>

		<!-- All CSS Variables Reference -->
		<div class="mt-5 p-4 bg-light border rounded">
			<h3 class="h5 mb-3">All Group CSS Variables</h3>
			<div class="row">
				<div class="col-md-6">
					<h6>Group Container</h6>
					<ul class="small mb-3">
						<li><code>--ms-group-border-top</code> - Border between groups</li>
						<li><code>--ms-group-margin-top</code> - Margin above group</li>
						<li><code>--ms-group-padding-top</code> - Padding above group</li>
					</ul>
				</div>
				<div class="col-md-6">
					<h6>Group Label</h6>
					<ul class="small mb-0">
						<li><code>--ms-group-label-padding</code> - Label padding</li>
						<li><code>--ms-group-label-font-size</code> - Font size</li>
						<li><code>--ms-group-label-font-weight</code> - Font weight</li>
						<li><code>--ms-group-label-color</code> - Text color</li>
						<li><code>--ms-group-label-transform</code> - Text transform</li>
						<li><code>--ms-group-label-letter-spacing</code> - Letter spacing</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</DocLayout>
