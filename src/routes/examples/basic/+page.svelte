<script lang="ts">
	import { DocLayout, ShowcaseSection } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';

	let basicSelect: any;
	let singleSelect: any;
	let groupedSelect: any;

	onMount(() => {
		const languageOptions = [
			{ value: 'js', label: 'JavaScript', icon: '🟨' },
			{ value: 'ts', label: 'TypeScript', icon: '🔷' },
			{ value: 'py', label: 'Python', icon: '🐍' },
			{ value: 'rb', label: 'Ruby', icon: '💎' },
			{ value: 'go', label: 'Go', icon: '🔵' }
		];

		// Basic Multiselect Example
		if (basicSelect) {
			basicSelect.options = languageOptions;
		}

		// Single Select Example
		if (singleSelect) {
			singleSelect.options = languageOptions;
		}

		// Grouped Example
		if (groupedSelect) {
			groupedSelect.options = [
				{ value: 'html', label: 'HTML', group: 'Frontend', icon: '📄' },
				{ value: 'css', label: 'CSS', group: 'Frontend', icon: '🎨' },
				{ value: 'js', label: 'JavaScript', group: 'Frontend', icon: '🟨' },
				{ value: 'node', label: 'Node.js', group: 'Backend', icon: '🟢' },
				{ value: 'python', label: 'Python', group: 'Backend', icon: '🐍' },
				{ value: 'php', label: 'PHP', group: 'Backend', icon: '🐘' },
				{ value: 'postgres', label: 'PostgreSQL', group: 'Database', icon: '🐘' },
				{ value: 'mysql', label: 'MySQL', group: 'Database', icon: '🐬' }
			];
		}
	});
</script>

<DocLayout
	titleText="Basic Usage"
	descriptionText="Essential examples to get started with the multiselect component">

	<div class="py-4">
		<!-- Basic Multiselect -->
		<ShowcaseSection
			titleText="BU01 Basic Multiselect"
			subtitleText="Select multiple items with icons, search, and optional checkboxes"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Usage">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={basicSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						show-checkboxes="true"
						search-placeholder="Search languages..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Click to open the dropdown and select multiple programming languages.</p>
					<p>Checkboxes provide visual feedback for selection state.</p>
					<p>Click the X icon on pills to remove selections.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Required Properties</h5>
					<p><code>value-member</code> - Property name for unique values</p>
					<p><code>display-value-member</code> - Property to display as text</p>

					<h5>Optional Properties</h5>
					<p><code>icon-member</code> - Property for emoji/icon display</p>
					<p><code>show-checkboxes="true"</code> - Show checkboxes (optional)</p>
					<p><code>search-placeholder</code> - Placeholder text for search input</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- Single Select -->
		<ShowcaseSection
			titleText="BU02 Single Select Mode"
			subtitleText="Limit selection to only one item"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Usage">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={singleSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						multiple="false"
						close-on-select="true"
						search-placeholder="Select your primary language..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Select a language - only one can be selected at a time.</p>
					<p>Selecting a new item automatically deselects the previous one.</p>
					<p>Dropdown closes automatically after selection.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Single Selection</h5>
					<p><code>multiple="false"</code> - Disable multiple selection</p>
					<p><code>close-on-select="true"</code> - Close dropdown after selecting</p>
					<p>When single select is enabled:</p>
					<ul class="small">
						<li>Only one item can be selected</li>
						<li>Dropdown closes automatically after selection</li>
						<li>Selected value shows inline (no pills)</li>
						<li>Selecting a new item replaces previous selection</li>
					</ul>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- Grouped Options -->
		<ShowcaseSection
			titleText="BU03 Grouped Options"
			subtitleText="Organize options into groups"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Try It"
			descriptionColumnTitle="Usage">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={groupedSelect}
						value-member="value"
						display-value-member="label"
						group-member="group"
						icon-member="icon"
						allow-groups="true"
						search-placeholder="Search stack..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Options are organized by Frontend, Backend, and Database categories.</p>
					<p>Groups help organize large option sets.</p>
					<p>Search works across all groups.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Grouping Options</h5>
					<p><code>group-member</code> - Property name for group classification</p>
					<p><code>allow-groups="true"</code> - Enable group headers in dropdown</p>
					<p>Options with the same group value appear together under a header.</p>
				</div>
			{/snippet}
		</ShowcaseSection>
	</div>
</DocLayout>
