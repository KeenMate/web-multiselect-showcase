<script lang="ts">
	import { DocLayout, ShowcaseSection } from '@keenmate/svelte-docs';
	import { onMount } from 'svelte';

	let jsonSelect: any;
	let csvSelect: any;
	let arraySelect: any;
	let customSelect: any;

	let jsonValue = $state('');
	let csvValue = $state('');
	let arrayValue = $state<string[]>([]);
	let customValue = $state('');

	onMount(() => {

		const options = [
			{ value: 'js', label: 'JavaScript', icon: '🟨' },
			{ value: 'ts', label: 'TypeScript', icon: '🔷' },
			{ value: 'py', label: 'Python', icon: '🐍' },
			{ value: 'rb', label: 'Ruby', icon: '💎' },
			{ value: 'go', label: 'Go', icon: '🔵' }
		];

		// JSON Format
		if (jsonSelect) {
			jsonSelect.options = options;
			jsonSelect.addEventListener('change', () => {
				const values = jsonSelect.getValue();
				jsonValue = JSON.stringify(values);
			});
		}

		// CSV Format
		if (csvSelect) {
			csvSelect.options = options;
			csvSelect.addEventListener('change', () => {
				const values = csvSelect.getValue();
				csvValue = values.join(',');
			});
		}

		// Array Format (already in array form)
		if (arraySelect) {
			arraySelect.options = options;
			arraySelect.addEventListener('change', () => {
				arrayValue = arraySelect.getValue();
			});
		}

		// Custom Callback
		if (customSelect) {
			customSelect.options = options;
			customSelect.getValueFormatCallback = (values: (string | number)[]) => {
				return 'CUSTOM:' + values.join('|');
			};
			customSelect.addEventListener('change', () => {
				// Use the callback to format
				const values = customSelect.getValue();
				customValue = customSelect.getValueFormatCallback(values);
			});
		}
	});
</script>

<DocLayout
	titleText="Value Formatting"
	descriptionText="Serialize selected values in different formats for API calls, forms, or storage">

	<div class="py-4">
		<ShowcaseSection
			titleText="JSON Format"
			subtitleText="Serialize as JSON array - ideal for APIs and complex data"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Serialized Value"
			descriptionColumnTitle="Usage">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={jsonSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Select languages..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					{#if jsonValue}
						<p><strong>Serialized Value:</strong></p>
						<pre><code>{jsonValue}</code></pre>
						<p class="mt-3"><strong>Example API call:</strong></p>
						<pre><code>{`await fetch('/api/save', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    languages: ${jsonValue}
  })
});`}</code></pre>
					{:else}
						<p>Select items to see JSON serialization</p>
					{/if}
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>JSON Serialization</h5>
					<p>Perfect for:</p>
					<ul class="small">
						<li>REST API calls</li>
						<li>LocalStorage/SessionStorage</li>
						<li>Complex data structures</li>
					</ul>
					<pre><code>{`const values = select.getValue();
const json = JSON.stringify(values);
// ["js","ts","py"]`}</code></pre>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="CSV Format"
			subtitleText="Comma-separated values - simple and compact"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Serialized Value"
			descriptionColumnTitle="Usage">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={csvSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Select languages..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					{#if csvValue}
						<p><strong>Serialized Value:</strong></p>
						<pre><code>{csvValue}</code></pre>
						<p class="mt-3"><strong>Example usage:</strong></p>
						<pre><code>{`// Save to URL params
const url = new URL('/search', window.location.origin);
url.searchParams.set('langs', '${csvValue}');

// Or send as plain text
await fetch('/api/save?langs=${csvValue}');`}</code></pre>
					{:else}
						<p>Select items to see CSV serialization</p>
					{/if}
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>CSV Serialization</h5>
					<p>Perfect for:</p>
					<ul class="small">
						<li>URL query parameters</li>
						<li>Simple string storage</li>
						<li>Legacy system integration</li>
					</ul>
					<pre><code>{`const values = select.getValue();
const csv = values.join(',');
// "js,ts,py"`}</code></pre>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Array Format"
			subtitleText="Native JavaScript array - most flexible"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Array Value"
			descriptionColumnTitle="Usage">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={arraySelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Select languages..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					{#if arrayValue.length > 0}
						<p><strong>Array Value:</strong></p>
						<pre><code>{JSON.stringify(arrayValue, null, 2)}</code></pre>
						<p class="mt-3"><strong>Example usage:</strong></p>
						<pre><code>{`// Direct array manipulation
const values = ${JSON.stringify(arrayValue)};

// Filter, map, reduce...
const upperValues = values.map(v => v.toUpperCase());

// Use in any JS context
if (values.includes('js')) {
  console.log('JavaScript selected!');
}`}</code></pre>
					{:else}
						<p>Select items to see array value</p>
					{/if}
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Array Format (Default)</h5>
					<p>Perfect for:</p>
					<ul class="small">
						<li>Direct JavaScript usage</li>
						<li>Array operations (map, filter, etc.)</li>
						<li>SPA state management</li>
						<li>Any custom processing</li>
					</ul>
					<pre><code>{`const values = select.getValue();
// ['js', 'ts', 'py']

// Use directly in your code
values.forEach(lang => console.log(lang));`}</code></pre>
				</div>
			{/snippet}
		</ShowcaseSection>

		<ShowcaseSection
			titleText="Custom Format Callback"
			subtitleText="Define your own serialization logic"
			demoColumnTitle="Live Demo"
			controlsColumnTitle="Custom Value"
			descriptionColumnTitle="Implementation">

			{#snippet demoContent()}
				<div class="multiselect-demo">
					<web-multiselect
						bind:this={customSelect}
						value-member="value"
						display-value-member="label"
						icon-member="icon"
						search-placeholder="Select languages..."
					></web-multiselect>
				</div>
			{/snippet}

			{#snippet controlsContent()}
				<div class="prose small">
					{#if customValue}
						<p><strong>Custom Formatted Value:</strong></p>
						<pre><code>{customValue}</code></pre>
						<p class="mt-3">This example uses a custom prefix and pipe separator instead of commas.</p>
					{:else}
						<p>Select items to see custom formatting</p>
					{/if}
				</div>
			{/snippet}

			{#snippet descriptionContent()}
				<div class="prose small">
					<h5>Custom Callback</h5>
					<p>Set the <code>getValueFormatCallback</code> property:</p>
					<pre><code>{`const select = document.querySelector('web-multiselect');

select.getValueFormatCallback = (values) => {
  // Custom format: "CUSTOM:val1|val2|val3"
  return 'CUSTOM:' + values.join('|');
};

// Use it
const formatted = select.getValueFormatCallback(
  select.getValue()
);`}</code></pre>
					<p class="mt-2">Perfect for specialized formats like XML, Base64, encrypted values, or any custom protocol.</p>
				</div>
			{/snippet}
		</ShowcaseSection>

		<div class="mt-5 p-4 bg-light border rounded">
			<h3 class="h5 mb-3">💡 When to Use Each Format</h3>
			<ul class="mb-0">
				<li><strong>JSON:</strong> Modern APIs, localStorage, complex data structures</li>
				<li><strong>CSV:</strong> URL parameters, simple storage, legacy systems</li>
				<li><strong>Array:</strong> Direct JavaScript usage, state management, custom processing</li>
				<li><strong>Custom Callback:</strong> Specialized formats, encryption, protocols, or unique requirements</li>
			</ul>
		</div>

		<div class="mt-3 p-4 bg-info bg-opacity-10 border border-info rounded">
			<h3 class="h5 mb-3">🔗 Related</h3>
			<p class="mb-2">For HTML form submission with these formats, see <a href="/examples/form-integration">Form Integration</a>.</p>
			<p class="mb-0">The <code>value-format</code> attribute controls which format is used for hidden form inputs.</p>
		</div>
	</div>
</DocLayout>
