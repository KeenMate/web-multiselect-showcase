<script lang="ts">
	import { DocLayout, ShowcaseSection } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';
	
	let customObjectsSelect: any;
	let tuplesSelect: any;
	let callbacksSelect: any;
	
	onMount(() => {
		
		// Custom Objects Example
		if (customObjectsSelect) {
			customObjectsSelect.options = [
				{ userId: 1, fullName: 'John Doe', email: 'john@example.com', role: 'Admin' },
				{ userId: 2, fullName: 'Jane Smith', email: 'jane@example.com', role: 'User' },
				{ userId: 3, fullName: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator' },
				{ userId: 4, fullName: 'Alice Brown', email: 'alice@example.com', role: 'User' }
			];
		}
		
		// Tuples Example
		if (tuplesSelect) {
			tuplesSelect.options = [
				[1, 'Option One'],
				[2, 'Option Two'],
				[3, 'Option Three'],
				[4, 'Option Four']
			];
		}
		
		// Callbacks Example
		if (callbacksSelect) {
			const complexData = [
				{ data: { id: 'usr_1', info: { name: 'Product A', price: 99.99, category: 'Electronics' }}},
				{ data: { id: 'usr_2', info: { name: 'Product B', price: 149.99, category: 'Electronics' }}},
				{ data: { id: 'usr_3', info: { name: 'Product C', price: 29.99, category: 'Books' }}},
				{ data: { id: 'usr_4', info: { name: 'Product D', price: 79.99, category: 'Books' }}}
			];

			callbacksSelect.options = complexData;
			callbacksSelect.getValueCallback = (item: any) => item.data.id;
			callbacksSelect.getDisplayValueCallback = (item: any) => item.data.info.name;
			callbacksSelect.getSubtitleCallback = (item: any) => `$${item.data.info.price} - ${item.data.info.category}`;
			callbacksSelect.getIconCallback = (item: any) => item.data.info.category === 'Electronics' ? '🔌' : '📚';
			callbacksSelect.getPillDisplayCallback = (item: any) => `${item.data.info.name} ($${item.data.info.price})`;
		}
	});
</script>

<DocLayout
	titleText="Flexible Data API"
	descriptionText="Work with any data structure using member properties or callbacks">

	<div class="py-4">
		<!-- Custom Objects -->
		<ShowcaseSection
			titleText="Custom Object Properties"
			subtitleText="Map custom object properties using member attributes"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Instructions"
			descriptionColumnTitle="Properties">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={customObjectsSelect}
						value-member="userId"
						display-value-member="fullName"
						subtitle-member="email"
						search-placeholder="Search users..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>This example uses custom property names from user objects:</p>
					<pre><code>{`{
  userId: 1,
  fullName: 'John Doe',
  email: 'john@example.com',
  role: 'Admin'
}`}</code></pre>
					<p>Member attributes tell the component which properties to use for values, display text, and subtitles.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Member Attributes</h5>
					<p><code>value-member="userId"</code> - Use userId as unique identifier</p>
					<p><code>display-value-member="fullName"</code> - Show fullName as main text</p>
					<p><code>subtitle-member="email"</code> - Show email below name</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- Tuples -->
		<ShowcaseSection
			titleText="[key, value] Tuples"
			subtitleText="Auto-detected tuple arrays - no configuration needed"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Instructions"
			descriptionColumnTitle="Auto-Detection">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={tuplesSelect}
						search-placeholder="Search options..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>Provide an array of <code>[key, value]</code> tuples - no configuration needed!</p>
					<pre><code>{`[
  [1, 'Option One'],
  [2, 'Option Two'],
  [3, 'Option Three']
]`}</code></pre>
					<p>The first element is used as the value, the second as display text.</p>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Automatic Detection</h5>
					<p>When the component detects tuples (arrays with exactly 2 elements), it automatically:</p>
					<ul class="small">
						<li>Uses index 0 as the value</li>
						<li>Uses index 1 as display text</li>
					</ul>
					<p>No member attributes required!</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<!-- Callbacks -->
		<ShowcaseSection
			titleText="Callback Functions"
			subtitleText="Use callbacks for complex data extraction logic"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Instructions"
			descriptionColumnTitle="Callbacks">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={callbacksSelect}
						search-placeholder="Search products..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					<p>This example uses deeply nested objects with complex structure:</p>
					<pre><code>{`{
  data: {
    id: 'usr_1',
    info: {
      name: 'Product A',
      price: 99.99,
      category: 'Electronics'
    }
  }
}`}</code></pre>
					<p class="mt-3"><strong>How to use callbacks:</strong></p>
					<pre><code>{`const select = document.querySelector('web-multiselect');
select.options = complexData;

select.getValueCallback = (item) => {
  return item.data.id;
};

select.getDisplayValueCallback = (item) => {
  return item.data.info.name;
};

select.getSubtitleCallback = (item) => {
  return \`$\${item.data.info.price} - \${item.data.info.category}\`;
};

select.getIconCallback = (item) => {
  return item.data.info.category === 'Electronics' ? '🔌' : '📚';
};

select.getPillDisplayCallback = (item) => {
  return \`\${item.data.info.name} ($\${item.data.info.price})\`;
};`}</code></pre>
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Callback Properties</h5>
					<p><code>getValueCallback</code> - Extract unique value from item</p>
					<p><code>getDisplayValueCallback</code> - Extract display text for dropdown</p>
					<p><code>getPillDisplayCallback</code> - Extract display text for pills (optional)</p>
					<p><code>getSubtitleCallback</code> - Extract subtitle text</p>
					<p><code>getIconCallback</code> - Extract or generate icon</p>
					<p class="mt-2">Callbacks receive the full item object and can return any computed value. Use callbacks when you need complex logic or deeply nested property access.</p>
					<p class="mt-2"><strong>Note:</strong> In this example, pills show "Product A ($99.99)" while dropdown shows full details with category.</p>
				</div>
			{/snippet}
		</ShowcaseSection>
	</div>
</DocLayout>
